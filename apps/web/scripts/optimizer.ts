import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'glob'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const MAX = 1280
const QUALITY = 80
const MIN_SAVE = 0.99
const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?)$/i
const TEXT_EXT = /\.(ts|tsx|js|jsx|mjs|cjs|json|md|css|html)$/i

sharp.cache(false)

async function walk(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (IMAGE_EXT.test(entry.name)) out.push(full)
  }
  return out
}

async function resolve(arg: string): Promise<string[]> {
  const pattern = path.isAbsolute(arg) ? arg : path.resolve(ROOT, arg)
  if (arg.includes('*')) {
    const files = await glob(pattern, { absolute: true, nodir: true })
    return files.filter((file) => IMAGE_EXT.test(file))
  }
  const info = await stat(pattern)
  if (info.isFile()) return IMAGE_EXT.test(pattern) ? [pattern] : []
  return walk(pattern)
}

function open(input: string | Buffer): sharp.Sharp {
  return sharp(input, { unlimited: true, sequentialRead: true, failOn: 'none' })
}

function encode(img: sharp.Sharp, ext: string): sharp.Sharp {
  if (/\.jpe?g$/i.test(ext)) return img.jpeg({ quality: QUALITY, mozjpeg: true })
  if (/\.png$/i.test(ext)) return img.png({ compressionLevel: 9, adaptiveFiltering: true })
  if (/\.webp$/i.test(ext)) return img.webp({ quality: QUALITY, effort: 6 })
  return img
}

async function hasAlpha(input: string | Buffer): Promise<boolean> {
  const { hasAlpha: alpha } = await open(input).metadata()
  if (!alpha) return false
  const { isOpaque } = await open(input).resize(64, 64, { fit: 'inside' }).ensureAlpha().stats()
  return !isOpaque
}

async function rewriteRefs(fromFile: string, toFile: string): Promise<void> {
  const fromBase = path.basename(fromFile)
  const toBase = path.basename(toFile)
  if (fromBase === toBase) return
  const files = await glob('**/*', { cwd: ROOT, absolute: true, nodir: true, ignore: ['node_modules/**', '.next/**'] })
  for (const file of files) {
    if (!TEXT_EXT.test(file)) continue
    const before = await readFile(file, 'utf8')
    if (!before.includes(fromBase)) continue
    const after = before.split(fromBase).join(toBase)
    if (after !== before) await writeFile(file, after)
  }
}

export async function optimize(file: string): Promise<void> {
  let input: string | Buffer = file
  let size = (await stat(file)).size
  let target = file
  let ext = path.extname(file)
  let converted = false

  if (/\.tiff?$/i.test(ext)) {
    ext = (await hasAlpha(input)) ? '.png' : '.jpg'
    target = file.replace(/\.tiff?$/i, ext)
    converted = true
  } else if (/\.png$/i.test(ext) && !(await hasAlpha(input))) {
    ext = '.jpg'
    target = file.replace(/\.png$/i, '.jpg')
    converted = true
  }

  const { width = 0, height = 0 } = await open(input).metadata()
  let needsResize = width > MAX || height > MAX

  for (;;) {
    let pipeline = open(input)
    if (needsResize) pipeline = pipeline.resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true })
    if (/\.jpe?g$/i.test(ext)) pipeline = pipeline.flatten({ background: '#ffffff' })
    const buffer = await encode(pipeline, ext).toBuffer()
    if (!converted && !needsResize && buffer.length >= size * MIN_SAVE) break
    await writeFile(target, buffer)
    if (converted) {
      if (target !== file) await unlink(file)
      await rewriteRefs(file, target)
      file = target
      converted = false
    }
    input = Buffer.from(buffer)
    size = buffer.length
    needsResize = false
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const sources = (await Promise.all(args.map(resolve))).flat()
  for (const file of sources) {
    process.stdout.write(`${path.basename(file)}… `)
    await optimize(file)
    console.log('ok')
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

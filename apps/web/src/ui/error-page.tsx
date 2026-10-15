import Image from 'next/image'
import Link from 'next/link'

export function ErrorPage({ title = 'Internal error', description = '500' }: { title?: string; description?: string }) {
  return (
    <div className='box-border w-full p-8 min-[600px]:p-16'>
      <header>
        <Link href='/' className='flex w-fit'>
          <Image
            src='/assets/jonathan-seibt-logo.png'
            alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
            width={256}
            height={16}
            quality={100}
            loading='eager'
            fetchPriority='high'
            className='text-transparent'
          />
        </Link>
      </header>
      <main>
        <div className='flex w-full max-w-full flex-col min-[900px]:max-w-[50%]'>
          <hr className='m-0 h-32 border-0' />
          <Image
            src='/assets/hand-with-two-fingers-up-emoji.png'
            alt='Yellow hand emoji, in a 3D style, with two fingers up, like a cool greeting gesture.'
            width={64}
            height={64}
            quality={100}
            loading='eager'
            fetchPriority='high'
            className='animation-wave text-transparent'
          />
          <hr className='m-0 h-4 border-0' />
          <h1 className='m-0 text-[3rem] leading-[1.25] font-bold text-brand-ink'>{title}</h1>
          <hr className='m-0 h-4 border-0' />
          <h2 className='m-0 text-base leading-[1.75] font-normal text-brand-ink'>{description}</h2>
          <hr className='m-0 h-16 border-0' />
          <p className='m-0 text-base leading-[1.75] font-normal text-brand-ink'>
            <Link href='/' className='ink-link'>
              Back to home
            </Link>
          </p>
          <hr className='m-0 h-32 border-0' />
        </div>
      </main>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { SITE_SOCIAL_LINKS } from '@/src/lib/metadata'

export default function HomePage() {
  return (
    <div className='box-border w-full p-8 min-[600px]:p-16'>
      <header>
        <Link href='/' className='flex w-fit'>
          <Image
            src='/assets/jonathan-seibt-logo.png'
            alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
            width={256}
            height={16}
            unoptimized
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
            unoptimized
            loading='eager'
            fetchPriority='high'
            className='animation-wave text-transparent'
          />
          <hr className='m-0 h-4 border-0' />
          <h1 className='m-0 text-[3rem] leading-[1.25] font-bold text-brand-ink'>
            Hey! My name is Jonathan Seibt, and I&apos;m a Software Engineer.
          </h1>
          <hr className='m-0 h-4 border-0' />
          <h2 className='m-0 text-base leading-[1.75] font-normal text-brand-ink'>
            From Caxias do Sul - RS - Brazil to the world. Since 2007 into technology. Since 2014 into business.
          </h2>
          <hr className='m-0 h-16 border-0' />
          <h3 className='m-0 text-2xl leading-[1.75] font-medium text-brand-ink'>
            Hey, how&apos;s it going? I&apos;m really happy to have you here! I&apos;m sure I&apos;d like to get to know
            you better too. Please, feel free to get in touch and connect with me through{' '}
            <div className='inline-table'>
              <a className='ink-link leading-[1.5]' href={SITE_SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer'>
                LinkedIn
              </a>
              .
            </div>{' '}
            There you can find out more about me, and we can have a good virtual coffee together. What do you think?
          </h3>
          <hr className='m-0 h-32 border-0' />
        </div>
      </main>
      <footer>
        <nav>
          <ul className='-mt-8 -ml-8 m-0 flex w-[calc(100%+2rem)] list-none flex-wrap p-0'>
            <li className='pt-8 pl-8'>
              <a className='ink-link-nav' href={SITE_SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer'>
                LinkedIn
              </a>
            </li>
            <li className='pt-8 pl-8'>
              <a className='ink-link-nav' href={SITE_SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer'>
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

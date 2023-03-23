import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DigitalClock from '@/components/DigitalClock'
import EmblaCarousel from '../components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import ProductLive from '@/components/Product/ProductLive'
import Products from '../public/data/productDataIndex.json'

const inter = Inter({ subsets: ['latin'] })

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const liveProduct = Products[0]

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexis&Co Drops</title>
        <meta name="description" content="Alexis&Co Drops e-commerce site to drop new clothing drops to our customers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container mx-auto'>
          {/* Home Page Header */}
          <div className='mt-[2rem] relative max-w-150px py-2'>
            <Image className='mx-auto' src={"/images/header-pattern-yellow.png"} width={150} height={150} alt='Black Header Pattern'/>
          </div>
          <div className='flex justify-center text-white'>
              <div className='text-xl text-center py-[1rem] mr-4'><DigitalClock/></div>
              <p className='text-xl text-center py-[1rem]'>Houston, TX</p>
          </div>
          {/* Dynamic Home Page Design */}
          <div className='flex w-full justify-center'>
              <div className='max-w-[350px]'>
                <h1 className='text-4xl md:text-5xl text-center my-6 text-yellow-300'>ГЕОПОЛИТИКА ЗАСТАЛА МОЕГО СЫНА УБИТЬ СВОЮ ВЕРБОВКУ</h1>
                <p className='text-xs text-center my-6 text-yellow-300'>(GEOPOLITICS MADE MY SON KILL HIS RECRUITER)</p>
              </div>
          </div>
          {/* Live Product Countdown */}
          <div>
              <ProductLive product={liveProduct}/>
          </div>
          {/* Featured Designs Carousel */}
          <div className='my-[4rem]'>
              <div className='text-center'>
                <p className='text-2xl font-semibold text-white'>Featured Designs</p>
                <div className='flex justify-center px-2'>
                  <p className='max-w-[600px] text-slate-300 mt-2'>Checkout our latest designs and collections we have to showcase.</p>
                </div>
              </div>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </main>
    </>
  )
}

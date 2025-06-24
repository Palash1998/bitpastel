import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const HeroSection = () => {
  return (
      <section
        className="relative md:h-[686px] h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
      url('/images/img_rectangle_48.png')
    `,
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full pt-[60px]">
          {/* Hero Content */}
          <div className="h-full content-center max-w-[35rem]">
            <h1 className=" text-white md:leading-[48px] leading-[30px] mb-6">
              <span className="">Crafting </span>
              <span className="font-bold md:inline block">Digital Solutions</span>
              <span className="block"> for your business</span>
            </h1>
            <div className="text-[rgba(255,255,255,1)]">
              <div className="flex md:gap-4 gap-2 mb-0">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className='w-[20px] md:w-auto'
                />
                <p className=" md:leading-[48px] leading-[24px] md:text-[16px] text-[12px]">Shopify Plus & eCom Development</p>
              </div>
              <div className="flex md:gap-4 gap-2 mb-1">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  className='w-[20px] md:w-auto'
                  alt="Check"
                  width={24}
                  height={24}
                />
                <p className=" md:leading-[48px] leading-[24px] md:text-[16px] text-[12px]">Web & Mobile App Development</p>
              </div>
              <div className="flex md:gap-4 gap-2 mb-1">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  className='w-[20px] md:w-auto'
                  alt="Check"
                  width={24}
                  height={24}
                />
                <p className="md:leading-[48px] leading-[24px] md:text-[16px] text-[12px]">Marketing Solutions</p>
              </div>
            </div>
            {/* <Button variant="secondary" size="lg" className=" btn leading-normal text-[rgba(255,255,255,1)] mt-8 hover:text-white hover:bg-primary-teal transition-colors duration-200 font-inter ">
              Lets Work Together
            </Button> */}
            <button className=" btn leading-normal text-[rgba(30,30,30,1)] bg-[rgba(255,255,255,1)] mt-8 hover:text-white hover:bg-primary-teal transition-colors duration-200 font-inter">
              Lets Work Together
            </button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection

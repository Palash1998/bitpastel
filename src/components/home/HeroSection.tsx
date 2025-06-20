import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const HeroSection = () => {
  return (
      <section
        className="relative h-[686px] bg-cover bg-no-repeat md:bg-center bg-[position:63%_10%]"
        style={{
          backgroundImage: `
      linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
      url('/images/img_rectangle_48.png')
    `,
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full pt-[60px]">
          {/* Hero Content */}
          <div className="h-full content-end md:content-center md:text-left text-center md:pb-0 pb-[40px] max-w-[35rem]">
            <h1 className="md:text-[38px] text-[33px] text-white md:leading-[48px] leading-[40px] mb-6">
              <span className="">Crafting </span>
              <span className="font-bold">Digital Solutions</span>
              <span className=""> for your business</span>
            </h1>
            <div className="text-[rgba(255,255,255,1)] w-fit md:size-auto">
              <div className="flex gap-4 md:mb-1 mb-0 ">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <p className="text-[18px] md:leading-[48px] leading-[34px]">Shopify Plus & eCom Development</p>
              </div>
              <div className="flex gap-4 md:mb-1 mb-0 ">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <p className="text-[18px] md:leading-[48px] leading-[34px]">Web & Mobile App Development</p>
              </div>
              <div className="flex gap-4 md:mb-1 mb-0 ">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <p className="text-[18px] md:leading-[48px] leading-[34px]">Marketing Solutions</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="rounded-md px-8 mt-8 hover:text-white hover:bg-primary-teal transition-colors duration-200">
              Lets Work Together
            </Button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection

import React from 'react'
import Button from '@/components/ui/Button'
import Image from 'next/image'
const CtaSection = () => {
  return (
      <section className="py-16 lg:py-16 ">
        {/* <div className="bg-black bg-opacity-50 py-16"> */}
        <div className="">
          <div className="container mx-auto px-4">
            <div
              className="bg-cover bg-no-repeat rounded-2xl px-[16px] py-[130px] lg:px-[66px] md:bg-[position:50%_10%] bg-[position:60%_10%] "
              style={{
                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 41.14%, rgba(0, 0, 0, 0.65) 72.12%), url('/images/descover_possibilities.jpg')`,
              }}
            >
          {/* className="bg-cover bg-no-repeat rounded-2xl px-[16px] py-[130px] lg:px-[66px] md:bg-[position:50%_10%] bg-[position:70%_10%] {
    background-position: 70% 10%; */}
              <div className="lg:max-w-[550px] md:max-w-[480px] max-w-[400px]">
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Discover the digital possibilities
                  <br />
                  we can help you unlock for your business!
                </h2>
                <p className="text[16px] text-white mb-8 leading-relaxed max-w-[90%] md:max-w-[100%] mr-auto">
                  We understand your unique way of work and provide bespoke technology solutions.
                  Our team works in sync with you ensuring seamless delivery and optimum quality. We
                  are eager to know about your business
                </p>
                <Button variant="secondary" className="rounded-md pl-8 pr-8 hover:text-white hover:bg-primary-teal transition-colors duration-200">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CtaSection

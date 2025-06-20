import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const TechPartnerSection = () => {
  return (
      <section className="pt-16 lg:pt-16 ">
        <div className="mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div
              className="rounded-tr-[40px] rounded-br-[40px] overflow-hidden "
            >
              <Image
                src="/images/tech_partner.jpg"
                alt="Team collaboration"
                width={711}
                height={406}
                className="w-full h-full"
                // className="rounded-[40px] w-full h-auto"
              />
            </div>
            <div className=" bg-primary-mint lg:p-12 md:p-12 p-6 rounded-tl-[40px] rounded-bl-[40px] content-center overflow-hidden">
              {/* <div className="lg:w-1/2 bg-primary-mint rounded-[40px] p-12"> */}
              <h2 className="text-4xl font-bold text-dark mb-8">
                <span className="font-semibold">Why we are the best </span>
                <br />
                <span className="font-black text-accent-green">Tech Partner</span>
                <span className="font-semibold"> out there</span>
              </h2>
              <div className="space-y-4">
                <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p>Perfectly managed worry-free delivery</p>
                </div>

               <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p>Fast turn-around time</p>
                </div>
                 <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p>Multi-layered Quality Assurance</p>
                </div>
                 <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p>Idea, Confidentiality & Data Protection</p>
                </div>
               <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p>30 days free maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TechPartnerSection

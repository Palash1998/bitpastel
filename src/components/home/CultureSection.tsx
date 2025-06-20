import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const CultureSection = () => {
  return (

      <section id='culture' className="pt-16 lg:pt-16  bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-16">Why work with us?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-12">
            <div className="">
              <Image
                src="/images/img_rectangle_51.png"
                alt="Team collaboration"
                width={695}
                height={537}
                className="rounded-[40px] w-full h-full"
              />
            </div>
            <div className="space-y-4 work-with-us-features">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/images/img_icroundsettings.svg"
                    alt="Reliable Engineering"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-dark">Reliable Engineering</h3>
                </div>
                {/* <p className="text-secondary leading-9 ml-8 whitespace-pre-line">{feature.description}</p> */}
                <ul>
                  <li className="text-[16px] leading-[26px]">
                    Multifunctional engineering teams with deep expertise
                  </li>
                  <li className="text-[16px] leading-[26px]">
                    Proven track record of 100% Customer Satisfaction
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/images/img_icroundsettings.svg"
                    alt="Reliable Engineering"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-dark">Reliable Engineering</h3>
                </div>
                {/* <p className="text-secondary leading-9 ml-8 whitespace-pre-line">{feature.description}</p> */}
                <ul>
                  <li className="text-[16px] leading-[26px]">
                    Multifunctional engineering teams with deep expertise
                  </li>
                  <li className="text-[16px] leading-[26px]">
                    Proven track record of 100% Customer Satisfaction
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/images/img_icbaselinediamond.svg"
                    alt="Reliable Engineering"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-dark">Quality Assurance</h3>
                </div>
                {/* <p className="text-secondary leading-9 ml-8 whitespace-pre-line">{feature.description}</p> */}
                <ul>
                  <li className="text-[16px] leading-[26px]">
                    Dedicated QA team for thorough testing{' '}
                  </li>
                  <li className="text-[16px] leading-[26px]">
                    Multilayered Quality Assurance before delivery
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/images/img_vector_cyan_300.svg"
                    alt="Reliable Engineering"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-dark">Cool & Elegant Designs</h3>
                </div>
                {/* <p className="text-secondary leading-9 ml-8 whitespace-pre-line">{feature.description}</p> */}
                <ul>
                  <li className="text-[16px] leading-[26px]">
                    Dedicated design studio with a talented team{' '}
                  </li>
                  <li className="text-[16px] leading-[26px]">Specialists in high-quality UI/UX</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/images/img_mingcutetimefill.svg"
                    alt="Reliable Engineering"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-2xl font-bold text-dark">Agile Delivery</h3>
                </div>
                {/* <p className="text-secondary leading-9 ml-8 whitespace-pre-line">{feature.description}</p> */}
                <ul>
                  <li className="text-[16px] leading-[26px]">Delivery on demanding timelines </li>
                  <li className="text-[16px] leading-[26px]">
                    Fast-paced response across all timezone
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CultureSection

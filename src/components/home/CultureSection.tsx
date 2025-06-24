import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
const CultureSection = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const handleClick = (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }; 
  const features = [
    {
      id: 1,
      title: "Reliable Engineering",
      icon: "/images/img_icroundsettings.svg",
      mobileTextColor: "text-[rgba(62,203,144,1)]",
      mobileBg: "bg-[rgba(216,245,233,1)]",
      items: [
        "Multifunctional engineering teams with deep expertise",
        "Proven track record of 100% Customer Satisfaction"
      ]
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: "/images/img_icbaselinediamond.svg",
      mobileTextColor: "text-[rgba(240,198,56,1)]",
      mobileBg: "bg-[rgba(252,244,215,1)]",
      items: [
        "Dedicated QA team for thorough testing",
        "Multilayered Quality Assurance before delivery"
      ]
    },
    {
      id: 3,
      title: "Cool & Elegant Designs",
      icon: "/images/Group.svg",
      mobileTextColor: "text-[rgba(85,184,208,1)]",
      mobileBg: "bg-[rgba(216,247,255,1)]",
      items: [
        "Dedicated design studio with a talented team",
        "Specialists in high-quality UI/UX"
      ]
    },
    {
      id: 4,
      title: "Agile Delivery",
      icon: "/images/img_mingcutetimefill.svg",
      mobileTextColor: "text-[rgba(245,116,126,1)]",
      mobileBg: "bg-[rgba(253,227,229,1)]",
      items: [
        "Delivery on demanding timelines",
        "Fast-paced response across all timezone"
      ]
    }
  ];

  return (
    <section id='culture' className="pt-12 lg:pt-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[#2a2a2a] font-source font-bold text-center text-dark md:mb-16 mb-8">
          Why work with us?
        </h2>
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
          <div className="work-with-us-features grid grid-cols-2 md:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                 onClick={() => handleClick(index)}
                className={`md:p-0 p-4 md:bg-transparent ${feature.mobileBg} md:rounded-none rounded-[8px] relative md:min-h-full min-h-[160px]
                  ${
            activeIndex === index ? 'active' : ''
          }
                  `}
              >
                <div className="flex active-showing-content items-center md:space-x-4 md:mb-2 mb-0 md:flex-row flex-col md:gap-0 gap-4 md:text-left text-center md:h-auto h-full md:justify-start justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className='md:w-[auto] md:h-[auto] w-[40px] h-[40px]'
                  />
                  <h3 className={`font-bold font-source md:text-[rgba(42,42,42,1)] ${feature.mobileTextColor} md:leading-[40px] leading-[24px]`}>
                    {feature.title}
                  </h3>
                </div>
                <ul className='mobile-none'>
                  {feature.items.map((item, index) => (
                    <li key={index} className="leading-[36px]">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className='mobile-block'>
                  <h3 className={`font-bold font-source text-center mb-3 leading-[24px] ${feature.mobileTextColor}`}>{feature.title}</h3>
                  <ul className='pl-0'>
                    {feature.items.map((item, index) => (
                      <li className="leading-[15px] text-[12px]" key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CultureSection

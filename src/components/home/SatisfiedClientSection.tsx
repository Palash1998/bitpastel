import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const SatisfiedClientSection = () => {
      const stats = [
    {
      value: '900',
      label: 'Clients',
      icon: '/images/img_fasolidusers.svg',
      color: 'text-accent-blue',
    },
    {
      value: '1400+',
      label: 'Projects',
      icon: '/images/img_tablerbulbfilled.svg',
      color: 'text-accent-yellow',
    },
    {
      value: '50M',
      label: 'Lines of Code',
      icon: '/images/img_group.svg',
      color: 'text-accent-coral',
    },
    {
      value: '32',
      label: 'Countries',
      icon: '/images/img_tdesignlocationfilled.svg',
      color: 'text-accent-green',
    },
  ];
  return (
      <section className="pt-16 lg:pt-16  bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">
            Satisfied Clientele Worldwide
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Map Section - Takes full width on mobile, remaining space on desktop */}
            <div className="relative w-full bg-cover bg-center rounded-lg">
              <Image
                src="/images/MAp.png"
                alt="World Map with Pointers"
                width={998}
                height={574}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Stats Section - Auto width on desktop, full width on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:pl-12 w-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={34}
                    height={34}
                    className="mx-auto mb-2"
                  />
                  <div className="text-4xl font-bold text-dark mb-1">{stat.value}</div>
                  <div className={`text-lg font-bold ${stat.color}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default SatisfiedClientSection

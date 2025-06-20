import React from 'react'
import Image from 'next/image'
const ServicesSection = () => {
      const services = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Automate processes, boost efficiency with intelligent applications',
      icon: '/images/img_vector.svg',
      bgColor: 'bg-primary-green-light',
    },
    {
      id: 'shopify',
      title: 'Shopify Plus',
      description: 'Shopify Plus design, development, migration, apps, custom solutions',
      icon: '/images/img_hugeiconsshopify.svg',
      bgColor: 'bg-primary-yellow-light',
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom websites in React, Angular, PHP, WordPress, Webflow',
      icon: '/images/img_icoutlinelaptop.svg',
      bgColor: 'bg-primary-coral-light',
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Creative designs for branding, marketing, and visual storytelling',
      icon: '/images/img_iconoirdesignnib.svg',
      bgColor: 'bg-primary-yellow-light',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Custom e-commerce platforms designed to grow your brand',
      icon: '/images/img_bicartplus.svg',
      bgColor: 'bg-primary-coral-light',
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Flexible SaaS applications tailored to your business goals',
      icon: '/images/img_lineiconscloudiot2.svg',
      bgColor: 'bg-primary-green-light',
    },
  ];
  return (

            <section id="services" className="pt-16 lg:pt-16  bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-dark mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[18%]  mx-auto">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
                      className="text-center transition-shadow duration-300 cursor-pointer py-10"
                    >
                      <div
                        className={`w-20 h-20 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <Image src={service.icon} alt={service.title} width={36} height={36} />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                      <p className="text-muted leading-relaxed max-w-[275px] mx-auto">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

  )
}

export default ServicesSection

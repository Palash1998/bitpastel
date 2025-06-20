import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const ShopifyStoreSection = () => {
  return (
      <section className="pt-16 lg:pt-16 ">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-col lg:flex-row items-center gap-12 rounded-[40px] p-8 bg-primary-mint">
            <div className="lg:w-1/2 w-full lg:pr-12 lg:pl-8">
              <h2 className="text-[35px] font-bold text-dark mb-6 leading-[45px]">
                Managing 200+ Shopify Stores Worldwide & 50+ Shopify Plus Stores
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                We have helped 100+ brands grow from scratch to $1M GMV.
                <br />
                At Bitpastel studio, we build differentiated, fast, and scalable online stores to
                help you provide the best customer experience!
              </p>
              <Button variant="teal" className="rounded-md px-10 py-3 h-auto text-[16px]">
                Explore Our Portfolio
              </Button>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src="/images/shopify_client_image.jpg"
                alt="Team working together"
                width={571}
                height={398}
                className="rounded-[40px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ShopifyStoreSection

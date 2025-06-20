import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
            <footer className="bg-primary-dark text-white pt-16 lg:pt-16 pb-6 footer">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 align-top footer-wrapper">
                  <div className="space-y-3">
                    <Link href="/">
                    <Image
                      src="/images/img_bitpastellogo02300dpi_3.png"
                      alt="Bitpastel Logo"
                      width={196}
                      height={75}
                      className="h-16 w-auto"
                      />
                      </Link>
                    <p className="text-sm leading-relaxed">
                      Technopolis, 11th Floor, BP Block,
                      <br />
                      Sector V, Salt Lake City, Kolkata - 700091
                    </p>
                    <div className="flex space-x-4 social-media-wrapper">
                      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center  hover:bg-primary-teal transition-background-color cursor-pointer">
                        <Image
                          src="/images/img_basilfacebooksolid.svg"
                          alt="Facebook"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center  hover:bg-primary-teal transition-background-color cursor-pointer">
                        <Image
                          src="/images/img_mingcuteinstagramfill.svg"
                          alt="Instagram"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center  hover:bg-primary-teal transition-background-color cursor-pointer">
                        <Image src="/images/img_primetwitter.svg" alt="Twitter" width={16} height={16} />
                      </div>
                      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center  hover:bg-primary-teal transition-background-color cursor-pointer">
                        <Image src="/images/img_uillinkedin.svg" alt="LinkedIn" width={16} height={16} />
                      </div>
                    </div>
                  </div>
                  <div className=' md:mx-auto content-end'>
                    <div className="space-y-4 text-sm ">
                      <Link href="/" className="block hover:text-gray-300 transition-colors">
                        Home
                      </Link>
                      <Link href="#" className="block hover:text-gray-300 transition-colors">
                        Portfolio
                      </Link>
                      <Link href="/services" className="block hover:text-gray-300 transition-colors">
                        Services
                      </Link>
                      <Link href="/stories" className="block hover:text-gray-300 transition-colors">
                        Stories
                      </Link>
                    </div>
                  </div>
                  <div className=' md:mx-auto content-end '>
                    <div className="space-y-4 text-sm ">
                      <Link href="/culture" className="block hover:text-gray-300 transition-colors">
                        Culture
                      </Link>
                      <Link href="/clientele" className="block hover:text-gray-300 transition-colors">
                        Clientele
                      </Link>
                      <Link href="/career" className="block hover:text-gray-300 transition-colors">
                        Career
                      </Link>
                      <Link href="/partner" className="block hover:text-gray-300 transition-colors">
                        Partner
                      </Link>
                    </div>
                  </div>
                  <div className="text-sm space-y-4 md:ml-auto content-end">
                    <p>
                      <span>US: +1 (872) 444 6679</span>
                    </p>
                    <p>
                      <span >UK: +44 2081 446579</span>
                    </p>
                    <p>IN: +91 9830 566 248</p>
                    <p className="mt-4">connect@bitpastel.com</p>
                  </div>
                </div>
                <div className="pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <p className="text-center text-sm">
                    Copyright © Bitpastel Solution Private Limited 2025 | All Rights Reserved | Privacy
                    Policy
                  </p>
                </div>
              </div>
            </footer>

  )
}

export default Footer

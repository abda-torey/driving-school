"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const navigation = [
  { name: "Home", href: "#", type: "link" },
  { name: "Services", href: "serviceSection", type: "scroll" },
  { name: "About", href: "/about", type: "link" },
  { name: "Contact", href: "/contact", type: "link" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-4 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-9 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  item.type === "link" ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <ScrollLink
                      key={item.name}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  )
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>

                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-9 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl text- font-bold tracking-tight text-gray-900 sm:tex-6xl">
                  Turning Beginners Into Confident Drivers
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you are a first-time learner or need to brush up your
                  driving skills, you can rely on us.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={500}
            height={500}
            alt="heroImage"
            src="/driverHero.png"
            className="aspect-[3/2] object-cover w-full h-auto lg:aspect-auto lg:h-full lg:w-full"
          />
        </div>
      </div>
    </div>
  );
}

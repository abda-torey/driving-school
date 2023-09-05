"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    price: "$15",
    description: "The essentials to provide your best work for clients.",
    features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
  },
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: "$15",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: "$15",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "$15",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Services = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Reliable Driving Instructors in Brandon
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8  text-gray-600">
          With 32 years of impeccable driving experience, our instructor excels
          in training teenagers, having done so in the past. Additionally, we
          offer training for adults seeking to refine their abilities and
          specialize in navigating challenging climates like snow and ice.
        </p>

        {/* <div className="isolate  mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="ring-2 ring-indigo-600 rounded-3xl p-8"
            >
              <h3
                id={tier.id}
                className="text-indigo-600 text-lg font-semibold leading-8"  
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                 
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 
                mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ">
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
      <div className="bg-white py-12 px-12    mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="ring-2 w-96 ring-indigo-200 rounded-3xl p-8">
          <h3 className="text-indigo-300 text-lg font-semibold leading-8">
            Individual In-car Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            For anyone who has already passed the written test and wants extra
            practice before taking the driver’s exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              $50.00
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600"></span>
          </p>
          <a
            href="#"
            className="text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 
        mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Call Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
          >
            
             
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Affordable Pricing
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Pickup Services - for Brandon & surrounding areas
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Drop-off Services - for Brandon & surrounding areas
              </li>
            
          </ul>
        </div>
        <div className="ring-2 ring-indigo-200 rounded-3xl p-8">
          <h3 className="text-indigo-300 text-lg font-semibold leading-8">
            Individual In-car Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            For anyone who has already passed the written test and wants extra
            practice before taking the driver’s exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              $50.00
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600"></span>
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 
        mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Call Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
          >
            
             
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Affordable Pricing
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Pickup Services - for Brandon & surrounding areas
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Drop-off Services - for Brandon & surrounding areas
              </li>
            
          </ul>
        </div>
        <div className="ring-2 ring-indigo-200 rounded-3xl p-8">
          <h3 className="text-indigo-300 text-lg font-semibold leading-8">
            Individual In-car Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            For anyone who has already passed the written test and wants extra
            practice before taking the driver’s exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              $50.00
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600"></span>
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 
        mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Call Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
          >
            
             
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Affordable Pricing
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Pickup Services - for Brandon & surrounding areas
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Drop-off Services - for Brandon & surrounding areas
              </li>
            
          </ul>
        </div>
        <div className="ring-2 ring-indigo-200 rounded-3xl p-8">
          <h3 className="text-indigo-300 text-lg font-semibold leading-8">
            Individual In-car Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            For anyone who has already passed the written test and wants extra
            practice before taking the driver’s exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              $50.00
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600"></span>
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 
        mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Call Now
          </a>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
          >
            
             
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Affordable Pricing
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Pickup Services - for Brandon & surrounding areas
              </li>
              <li  className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Free Drop-off Services - for Brandon & surrounding areas
              </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Services;

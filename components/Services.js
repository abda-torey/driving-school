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
          <h2 className="text-base  font-bold leading-7 text-indigo-500">
            Packages
          </h2>
          <p className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Reliable Driving Instructors in Brandon
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8  text-gray-600">
          With 32 years of impeccable driving experience, our instructor excels
          in training teenagers, having done so in the past. Additionally, we
          offer training for adults seeking to refine their abilities and
          specialize in navigating challenging climates like snow and ice.
        </p>

       
      </div>
      
      <div className="bg-white py-12 px-9 lg:px-12 mx-auto mt-12 flex flex-wrap items-center justify-center">
        <div className="ring-2 w-full lg:h-[500px] md:w-[42%] lg:w-1/3  ring-gray-300 rounded-3xl p-8 md:mr-16 mb-16 ml-2">
          <h3 className="text-indigo-500 text-lg font-semibold leading-8">
            Individual In-car Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            For anyone who has already passed the written test and wants extra
            practice before taking the driver’s exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className=" text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
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
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Affordable Pricing
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Free Pickup Services - for Brandon & surrounding areas
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Free Drop-off Services - for Brandon & surrounding areas
            </li>
          </ul>
        </div>
        <div className="ring-2 w-full lg:h-[500px] md:w-[42%] lg:w-1/3 ring-indigo-200 rounded-3xl p-8 mr-2 ml-2 mb-16">
          <h3 className="text-indigo-500 text-lg font-semibold leading-8">
            6x6 Package
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            We offer 6 hours of in-class sessions and 6 hours of in-car sessions
            in this package
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
              $495.00
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
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              6 hours of in-class sessions
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              6 hours of in-car sessions
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Virtual Learning through Zoom
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Free Pickup and drop-off - Brandon & surrounding Areas
            </li>
          </ul>
        </div>
        <div className="ring-2 w-full lg:h-[500px] md:w-[42%] lg:w-1/3 ring-indigo-200 rounded-3xl mb-16 md:mb-0 p-8 md:mr-16 ml-2">
          <h3 className="text-indigo-500 text-lg font-semibold leading-8">
            Brush-up Lessons
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            A perfect opportunity for those who need a quick refresher or feel
            they need more confidence before taking the road test.
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
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
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              50-minute in-car lesson
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Hands-on Learning
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Targeted Learning - Addresses Individual concerns
            </li>
          </ul>
        </div>
        <div className="ring-2 w-full lg:h-[500px] md:w-[42%] lg:w-1/3 ring-indigo-200 rounded-3xl p-8 mr-2 ml-2">
          <h3 className="text-indigo-500 text-sm font-bold leading-0">
            Written Exam Preparation for Learner’s Licence
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Focused Training, tailored 6 hours of in-class instruction dedicated
            to preparing you for the written exam
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
              $150.00
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
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Convenient Learning - Sessions conducted via zoom
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Affordable Rate
            </li>
            <li className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Test and certificate are not included
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Services;

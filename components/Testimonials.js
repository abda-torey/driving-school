import react from "react";
import Image from "next/image";

const Mytestimonials = [
  {
    body: "When I first started, I was extremely nervous about getting behind the wheel. But thanks to our wonderful instructor, my confidence grew immensely. Her calm demeanor and expertise made every lesson enjoyable and educational. I genuinely felt prepared when it was time for my test.",
    author: {
      name: "Emma R",
      handle: "Emma R",
      imageUrl: "/emaa.png",
    },
  },
  {
    body: "Navigating through the streets of Brandon was a daunting task for a new driver like me. However, with the guidance of our instructor, I learned not only the basics but also some advanced driving techniques. She is patient, kind, and incredibly knowledgeable, making every session worthwhile.",
    author: {
      name: "Liam T",
      handle: "Liam T",
      imageUrl: "/liams.png",
    },
  },
  {
    body: "Parallel parking used to be my worst nightmare! But after just a couple of lessons with our instructor, I began to get the hang of it. She breaks down complex maneuvers into simple steps, making them easier to grasp. I passed my test on the first attempt, and I credit much of my success to her.",
    author: {   
      name: "Olivia K.",
      handle: "Olivia K",
      imageUrl: "/ooolivia.png",
    },
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="flex flex-wrap -mx-4">
            {Mytestimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="w-full  sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <figure className="rounded-2xl h-[300px] bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name} // It's a good practice to provide an alt description
                      width={40} // you can adjust based on your needs
                      height={40} // you can adjust based on your needs
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    //   <div className="bg-gray-100 py-24 sm:py-32">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <div className="mx-auto max-w-xl text-center">
    //         <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
    //         <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //           We have worked with thousands of amazing people
    //         </p>
    //       </div>
    //       <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
    //         <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
    //           {Mytestimonials.map((testimonial) => (
    //             <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
    //               <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
    //                 <blockquote className="text-gray-900">
    //                   <p>{`“${testimonial.body}”`}</p>
    //                 </blockquote>
    //                 <figcaption className="mt-6 flex items-center gap-x-4">
    //                   <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
    //                   <div>
    //                     <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
    //                     <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
    //                   </div>
    //                 </figcaption>
    //               </figure>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default Testimonials;

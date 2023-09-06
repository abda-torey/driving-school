import react from "react";

const statsdriving = [
  { id: 1, name: "Students Trained", value: "500+" },
  { id: 2, name: "Pass Rate", value: "98%" },
  { id: 3, name: "Years in Service", value: "32 " },
  { id: 4, name: "Students Graduated", value: "500" },
];



const Stats = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted Driving School in Brandon
            </h2>
            <p className="mt-4 text-lg tracking-tighter leading-8 text-gray-600">
              As a leading and trusted driving school in Brandon and its
              surrounding areas, we at Driving Academy Of Manitoba are always
              prepared to offer our complete support with our experience and
              professionalism. We cater to people of all ages who aim to improve
              their driving skills and pass the driving test to be called
              qualified drivers.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {statsdriving.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-500">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Stats;

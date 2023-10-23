import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="Camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-orange-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Those who dare to fail miserably can achieve greatly. John F.
            Kennedy
          </h2>
          <p className="regular-16 text-gray-50 xl:max-w-[520px]">
            {" "}
            “Atticus said to Jem one day, “I’d rather you shot at tin cans in
            the backyard, but I know you’ll go after birds. Shoot all the blue
            jays you want, if you can hit ‘em, but remember it’s a sin to kill a
            mockingbird.” That was the only time I ever heard Atticus say it was
            a sin to do something, and I asked Miss Maudie about it. “Your
            father’s right,” she said. “Mockingbirds don’t do one thing except
            make music for us to enjoy. They don’t eat up people’s gardens,
            don’t nest in corn cribs, they don’t do one thing but sing their
            hearts out for us. That’s why it’s a sin to kill a mockingbird.” 
            Harper Lee, To Kill a Mockingbird
          </p>
        </div>
      </div>
      <div className="flex flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="Boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src='/meter.svg' alt="Meter" width={16} height={158} className="h-full w-auto"/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
              <p className="regular-16 text-gray-20">Destination</p>
              <p className="bold-16 text-green-50">1 hour</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calliantes</p>
            </div>
            <div className="flex w-full flex-col">
              
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Nasrapur</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

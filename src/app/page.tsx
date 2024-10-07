"use client";
import Image from "next/image";
import NavComponent from "./components/navComponent";
import Head from "next/head";
import { landings, resources } from "./helper/constants";
import { useEffect, useRef, useState } from "react";
import BounceInComponent from "./components/BounceInComponent";
import SlideUpComponent from "./components/SlideUpComponent";
import CountUp from "./components/CountUpAnimation";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer1.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Adjust this threshold to control when the animation triggers
    );

    if (ref1.current) {
      observer1.observe(ref1.current);
    }

    return () => {
      if (ref1.current) {
        observer1.unobserve(ref1.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer2.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.5 } // Adjust this threshold to control when the animation triggers
    );

    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    return () => {
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
    };
  }, []);
  console.log("isVisible", isVisible);
  return (
    <div className="bg-red-400">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-white">
        <div className="bg-primary-teal pb-40 pt-5">
          <NavComponent />
          <div className="flex flex-col items-center mt-10">
            <div className="text-lg">About</div>
            <div className="text-3xl md:text-5xl lg:text-7xl mt-5 text-center w-3/4 md:w-4/5 lg:w-3/5">
              We love to make great things, things that matter.
            </div>
            <div className="mt-5 w-full md:w-2/5 text-center animate-slideUp">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </div>
          </div>
        </div>
        {/* our story section */}
        <div className="px-5 md:px-20 lg:px-40 flex flex-col items-center pb-20">
          <div
            className="flex flex-row hidden md:hidden lg:flex "
            style={{ marginTop: -70, paddingBottom: 80 }}
          >
            <div className="mr-10">
              <div
                className="animate-bounceIn"
                style={{
                  width: "300px",
                  height: "285px",
                  position: "relative",
                }}
              >
                <Image
                  className="rounded-lg"
                  layout="fill"
                  src="/images/im1.png"
                  alt="About Image"
                  objectFit="cover"
                />
              </div>
              <div
                className="mt-10  animate-bounceIn"
                style={{
                  width: "300px",
                  height: "285px",
                  position: "relative",
                }}
              >
                <Image
                  className="rounded-lg"
                  layout="fill"
                  src="/images/im2.png"
                  alt="About Image"
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className="animate-slideUp"
              style={{ width: "400px", height: "632px", position: "relative" }}
            >
              <Image
                className="rounded-lg"
                layout="fill"
                src="/images/im3.png"
                alt="About Image"
                objectFit="cover"
              />
            </div>
            <div className="ml-10 animate-bounceIn">
              <div
                className="animate-bounceIn"
                style={{
                  width: "300px",
                  height: "285px",
                  position: "relative",
                }}
              >
                <Image
                  className="rounded-lg"
                  layout="fill"
                  src="/images/im4.png"
                  alt="About Image"
                  objectFit="cover"
                />
              </div>
              <div
                className="mt-10"
                style={{
                  width: "300px",
                  height: "285px",
                  position: "relative",
                }}
              >
                <Image
                  className="rounded-lg"
                  layout="fill"
                  src="/images/im5.png"
                  alt="About Image"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 lg:px-40">
            <div className="text-secondary-grey text-xl text-center md:text-start lg:text-start mt-10 md:mt-0 lg:mt-0">
              Our story
            </div>
            <div className="text-3xl md:text-5xl text-black text-center md:text-start lg:text-start mt-5 font-normal font-manrope">
              Handshake infographic mass market crowdfunding iteration.
            </div>
            <div
              ref={ref1}
              className={`mt-5 text-secondary-grey text-base md:text-xl text-center md:text-start ${
                isVisible ? "animate-slideUp text-secondary-grey" : "opacity-0"
              } `}
            >
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
              Sales user experience branding growth hacking holy grail
              monetization conversion prototype stock network effects. Learning
              curve network effects return on investment bootstrapping
              business-to-consumer.
            </div>
          </div>
        </div>
        {/* our numbers section */}
        <div className="px-5 md:px-20 lg:px-40 flex flex-col items-center py-20 bg-primary-teal">
          <div className="text-xl">Our numbers</div>
          <div className="text-3xl md:text-5xl w-full md:w-4/5 text-center mt-5">
            Handshake infographic mass market crowdfunding iteration.
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:justify-center mt-10">
            <div className="mt-10 md:mt-10 lg:mr-20 lg:mt-0">
              <div className="text-primary-green  text-5xl md:text-9xl">
                <CountUp target={120} duration={5000} addedString="m" />
              </div>
              <SlideUpComponent>
                <div className="text-xl md:text-2xl">Cool feature title</div>
              </SlideUpComponent>
            </div>
            <div className="mt-10 md:mt-10 lg:mt-0">
              <div className="text-primary-green  text-5xl md:text-9xl text-center md:text-start">
                10.000
              </div>
              <SlideUpComponent>
                <div className="text-xl md:text-2xl">Cool feature title</div>
              </SlideUpComponent>
            </div>
            <div className="mt-10 md:mt-10 lg:ml-20 lg:mt-0">
              <div className="text-primary-green  text-5xl md:text-9xl">
                <CountUp target={240} duration={5000} />
              </div>
              <SlideUpComponent>
                <div className="text-xl md:text-2xl">Cool feature title</div>
              </SlideUpComponent>
            </div>
          </div>
        </div>
        {/* our team section */}
        <div className="md:px-8 flex flex-col items-center py-20">
          <div className="px-6 lg:px-60">
            <div className="text-secondary-grey text-xl md:text-2xl text-center md:text-start">
              Our team
            </div>
            <div className="text-4xl md:text-6xl text-black mt-5 text-center md:text-start">
              The leadership team
            </div>
            <SlideUpComponent>
              <div
                className={`mt-5 text-secondary-grey text-base md:text-2xl text-center md:text-start `}
              >
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.
              </div>
            </SlideUpComponent>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full items-center py-20 px-5 md:px-44">
            <div className=" text-center md:text-start">
              <BounceInComponent>
                <div
                  style={{
                    width: "300px",
                    height: "340px",
                    position: "relative",
                  }}
                >
                  <Image
                    className="rounded-lg"
                    layout="fill"
                    src="/images/team1.png"
                    alt="Team Member"
                    objectFit="cover"
                  />
                </div>
              </BounceInComponent>
              <div className="text-black mt-5 text-2xl">Michael Scott</div>
              <div className="text-black text-xl text-secondary-grey mt-3">
                General Manager
              </div>
            </div>
            <div className="mt-10 md:mt-0  text-center md:text-start">
              <SlideUpComponent>
                <div
                  style={{
                    width: "300px",
                    height: "340px",
                    position: "relative",
                  }}
                >
                  <Image
                    className="rounded-lg"
                    layout="fill"
                    src="/images/team2.png"
                    alt="Team Member"
                    objectFit="cover"
                  />
                </div>
              </SlideUpComponent>
              <div className="text-black mt-5 text-2xl">Dwight Schrute</div>
              <div className="text-black text-xl text-secondary-grey mt-3">
                General Manager
              </div>
            </div>
            <div className="mt-10 md:mt-0  text-center md:text-start">
              <BounceInComponent>
                <div
                  style={{
                    width: "300px",
                    height: "340px",
                    position: "relative",
                  }}
                >
                  <Image
                    className="rounded-lg"
                    layout="fill"
                    src="/images/team3.png"
                    alt="Team Member"
                    objectFit="cover"
                  />
                </div>
              </BounceInComponent>
              <div className="text-black mt-5 text-2xl">Pam Beetsley</div>
              <div className="text-black text-xl text-secondary-grey mt-3">
                General Manager
              </div>
            </div>
          </div>
        </div>
        {/* our values */}
        <div className="px-10 md:px-40 lg:px-72 flex flex-col py-10 md:py-28 bg-primary-teal">
          <div className="text-xl md:text-2xl  text-center md:text-start">
            Our values
          </div>
          <div className="text-4xl lg:text-6xl w-full mt-5 text-center md:text-start">
            Things in we believe
          </div>
          <p className="mt-5 text-xl md:text-2xl  text-center md:text-start">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
          <div>
            <div className="flex flex-col ">
              <SlideUpComponent>
                <div className="flex flex-col md:flex-row mt-20 items-center md:items-start">
                  <div
                    style={{
                      width: "200px",
                      height: "131px",
                      position: "relative",
                    }}
                  >
                    <Image
                      className="rounded-xl w-10 h-10"
                      src="/images/im2.png"
                      alt="Value Icon"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <div className="text-white text-lg mt-2 text-xl md:text-2xl  text-center md:text-start">
                      We are commited.
                    </div>
                    <div className="text-white text-base md:text-xl  text-center md:text-start mt-5">
                      Conversion angel investor entrepreneur first mover
                      advantage. Handshake infographic mass market crowdfunding
                      iteration.{" "}
                    </div>
                  </div>
                </div>
              </SlideUpComponent>
              <SlideUpComponent>
                <div className="flex flex-col md:flex-row mt-20 items-center md:items-start">
                  <div
                    style={{
                      width: "200px",
                      height: "131px",
                      position: "relative",
                    }}
                  >
                    <Image
                      className="rounded-xl w-10 h-10"
                      src="/images/im4.png"
                      alt="Value Icon"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <div className="text-white text-lg mt-2 text-xl md:text-2xl  text-center md:text-start">
                      We are responsible.
                    </div>
                    <div className="text-white text-base md:text-xl  text-center md:text-start mt-5">
                      Conversion angel investor entrepreneur first mover
                      advantage. Handshake infographic mass market crowdfunding
                      iteration.
                    </div>
                  </div>
                </div>
              </SlideUpComponent>
              <SlideUpComponent>
                <div className="flex flex-col md:flex-row mt-20 items-center md:items-start">
                  <div
                    style={{
                      width: "200px",
                      height: "131px",
                      position: "relative",
                    }}
                  >
                    <Image
                      className="rounded-xl w-10 h-10"
                      src="/images/im6.png"
                      alt="Value Icon"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <div className="text-white text-lg mt-2 text-xl md:text-2xl  text-center md:text-start">
                      We aim for progress.
                    </div>
                    <div className="text-white text-base md:text-xl  text-center md:text-start mt-5">
                      Conversion angel investor entrepreneur first mover
                      advantage. Handshake infographic mass market crowdfunding
                      iteration.
                    </div>
                  </div>
                </div>
              </SlideUpComponent>
            </div>
          </div>
        </div>
        {/* enter email section */}

        <div className="px-5 md:px-28 hidden md:flex flex-col py-32 bg-white">
          <div className="bg-primary-teal pb-5 flex flex-col items-center rounded-2xl relative">
            <div className="text-3xl md:text-5xl w-4/5 md:w-3/5 text-center mt-5 relative z-20 mt-28 ">
              An enterprise template to ramp up your company website
            </div>
            <form className="flex flex-col md:flex-row items-center mt-10 mb-20 w-full justify-center z-20 relative">
              <input
                className="border-2 px-5 py-4 rounded-full  w-4/5 md:w-1/3 text-black"
                type="email"
                placeholder="Your email address"
                color="black"
              />
              <button className="border-2 mt-10 md:mt-0 font-bold border-primary-green text-black px-10 py-4 rounded-full bg-primary-green ml-0 md:ml-5 w-4/5  md:w-1/3">
                Start now
              </button>
            </form>

            <div
              className="absolute self-end"
              style={{
                height: 200,
                width: 600,
                // marginRight: -450,
                // marginTop: -80,
                zIndex: 10,
              }}
            >
              <Image
                src="/images/ell.png"
                alt="Background"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <footer>
          <div className="px-2 md:px-40 flex flex-col md:flex-row py-20 bg-white justify-between w-full">
            <div className="md:w-1/3 w-full">
              <div className="flex flex-row items-center">
                <Image
                  src="/images/black-logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                />
                <div className="text-4xl text-black font-bold">Boldo</div>
              </div>
              <p className="text-black mt-5 md:mt-10 md:text-base text-xs">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
              <p className="md:mt-14 mt-5 text-black md:text-base text-xs">
                All rights reserved.
              </p>
            </div>
            <div className="md:w-2/3 w-full ml-0 md:ml-40 flex flex-row md:mt-0 mt-5">
              <div>
                <div className="font-bold text-black">Landings</div>
                {landings.map((c, i) => (
                  <div key={i} className="text-back mt-10 text-secondary-grey">
                    {c}
                  </div>
                ))}
              </div>
              <div className="ml-5 md:ml-36">
                <div className="font-bold text-black">Company</div>
                <div className="text-back  mt-5 md:mt-10  text-secondary-grey md:text-base text-xs">
                  Home
                </div>
                <div className="text-back  mt-5 md:mt-10  text-black flex md:flex-row flex-col md:items-center  md:text-base text-xs">
                  <div className="text-secondary-grey">Careers</div>
                  <div className="md:ml-3 px-2 py-1 rounded-full bg-primary-green text-black text-xs font-bold">
                    Hiring
                  </div>
                </div>
                <div className="text-back mt-5 md:mt-10 text-secondary-grey md:text-base text-xs">
                  Services
                </div>
              </div>
              <div className="ml-5 md:ml-36">
                <div className="font-bold text-black">Resources</div>
                {resources.map((c, i) => (
                  <div
                    key={i}
                    className="text-back  mt-5 md:mt-10  text-secondary-grey md:text-base text-xs text-black"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

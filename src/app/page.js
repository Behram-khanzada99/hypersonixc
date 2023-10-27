import Link from "next/link";
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full flex justify-center mx-auto">
      <div className="w-full">
        {/* div for content with same bg */}
        <div className="relative w-full mx-auto flex justify-center">
          <img
            className="w-full max-h-[960px] object-cover"
            src="/images/home bg.png"
            alt="home bg img"
          />

          <div className=" absolute mx-auto top-0 w-full">
            <div class="flex mb-4 border-b border-gray-500 w-full justify-center">
              <div class="w-full bg-transparent container border-r border-gray-500">
                <header className="text-white flex justify-between w-full py-[30px]">
                  <Link href="/">
                    <img src="/images/hypersonic logo.png" alt="logo"></img>
                  </Link>

                  <nav className="flex flex-wrap items-center justify-between">
                    <ul className="flex gap-6 top-2">
                      <li className=" hover:bg-slate-700">
                        <Link href="/ourServices">Services</Link>
                      </li>
                      <li className=" hover:bg-slate-700">
                        <a href="#">Clients</a>
                      </li>
                      <li className=" hover:bg-slate-700">
                        <a href="#">About</a>
                      </li>
                      <li className=" hover:bg-slate-700">
                        <a href="#">Insights</a>
                      </li>
                      <li className=" pr-10 hover:bg-slate-700">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </header>
              </div>
              <div className="flex gap-5 pl-5 justify-end">
                {/* svg disapears when wrapped in link tag */}

                <Link href={"/"}>
                  <img
                    className="absolute pt-8 object-scale-down"
                    src="/images/facebook-logo new.svg"
                    alt="fb logo"
                  />{" "}
                </Link>

                <img
                  className=" object-scale-down pl-5"
                  src="/images/twitter-fill.png"
                  alt="twitter logo"
                />

                <Link href={"/"}> <img
                  className=" absolute pt-8 object-scale-down"
                  src="/images/instagram-line.png"
                  alt="insta logo"
                /></Link>
               
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-white pt-56">
                <h1 className="pt-10 pb-6 text-7xl flex items font-extrabold font-center justify-center">
                  Fast-forward your business
                </h1>
                <p className="flex items-center justify-center pb-4 text-lg">
                  We accelerate growth and profitability with customer-centric
                  marketing.
                </p>

                <div className="flex items-center justify-center py-5">
                  <button className="bg-pink-600 h-11 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-5">
                    Contact Us
                  </button>
                  <button className="bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent ml-5 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div for measurable results section */}
        <div className="container mx-auto px-44">
          <p className="flex items-center justify-center text-lg pl-16 pt-28">
            WHAT TO EXPECT
          </p>
          <h2 className="flex items-center justify-center py-2 pb-10 text-4xl pl-16 font-bold">
            Measurable Results
          </h2>

          <div className="flex mb-4 justify-center pb-20">
            <div className="">
              <div className="flex justify-center w-full">
                <img
                  src="/images/measurable results/image 1.png"
                  alt="optimization"
                />
              </div>
              <div className="px-10">
                <h3 className=" text-center flex justify-center text-xl font-bold py-4 ">
                  optimization
                </h3>
                <p className="text-center flex justify-center">
                  Smarter campaigns that outperform the competition on any
                  device.
                </p>
              </div>
            </div>

            <div className=" border-l-2 border-r-2 border-gray-200">
              <div className="flex justify-center w-full">
                <img
                  src="/images/measurable results/image 2.png"
                  alt="analytics"
                />
              </div>
              <h3 className=" text-center text-xl font-bold py-4">Analytics</h3>
              <p className="text-center">
                Meaningful insights that give you a better understanding of your
                customers
              </p>
            </div>

            <div className="pl-10">
              <div className="flex justify-center w-full">
                <img
                  src="/images/measurable results/image 3.png"
                  alt="strategy"
                />
              </div>
              <h3 className=" text-center text-xl font-bold py-4">strategy</h3>
              <p className="text-center">
                Bold ideas from a team that knows what it takes to win.
              </p>
            </div>
          </div>
        </div>

        {/* div for case study section */}
        <div className="relative w-full flex justify-center mx-auto">
          <img
            className="w-full max-h-[440px] object-cover"
            src="/images/case study bg.png"
            alt="case study section bg"
          />
          <div className="absolute top-[20%] w-full mx-auto flex items-center justify-center">
            <div className="  text-white">
              <h2 className="flex items-center justify-center pt-3 py-3 align-middle">
                HOW WE WORK
              </h2>
              <h1 className="flex items-center justify-center text-3xl py-2">
                <strong>CASE STUDY</strong>
              </h1>
              <p className="flex items-center justify-center text-center">
                View an example of our recent work and learn about <br></br> the
                process we use to move out clients forward.
              </p>
              <div className="flex items-center justify-center pt-16">
                <button className=" bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* div for customer experience */}
        <div class="flex mb-4 py-10 container mx-auto pb-24 justify-center align-middle px-44">
          <div>
            <div className="pr-52">
              <h2 className="pt-14 text-gray-400">WHAT WE FOCUS</h2>
              <h1 className="pt-5 text-3xl font-bold">CUSTOMER EXPERIENCE</h1>
              <p className="pt-4 text-gray-400">
                Find the missing spark in your customer relationship starts with
                building a better understanding of your customers.
              </p>
              <div className="flex justify-between mb-1 pt-5">
                <span className="text-base font-medium text-red-700 dark:text-black">
                  Data Science
                </span>
                <span className="text-sm font-medium text-red-700 dark:text-black">
                  50%
                </span>
              </div>
              <div className=" w-80 bg-gray-400 rounded-full h-2 dark:bg-gray-700">
                <div className="bg-red-600 h-2 rounded-full "></div>
              </div>
              <div className="flex justify-between mb-1 pt-5">
                <span className="text-base font-medium text-red-700 dark:text-black">
                  Creative Thinking
                </span>
                <span className="text-sm font-medium text-red-700 dark:text-black">
                  50%
                </span>
              </div>
              <div className="w-80 bg-gray-400 rounded-full h-2 dark:bg-gray-700">
                <div className="bg-red-600 h-2 rounded-full "></div>
              </div>
            </div>
          </div>

          <div className="  pt-20">
            <img
              className=" scale-150"
              src="/images/customer experience/customer exp mobileimg 2.png.png"
            ></img>
          </div>
        </div>

        {/* accelerative growth div */}
        <div className="relative w-full mx-auto text-center flex justify-center align-middle">
          <img
            className="w-full max-h-[594px] object-cover"
            src="/images/accelarate growth/accelarate growth bg.png"
            alt="accelerative growth bg"
          ></img>
          <div className="absolute container mx-auto top-10 w-full text-white py-10 px-44">
            <div className=" text-left">
              <h2 className="pb-7 font-medium text-gray-400">WHAT WE DO</h2>
              <h1 className="font-bold text-3xl pb-5">ACCELERATE GROWTH</h1>
              <div className="flex text-center">
                <div className="text-left">
                  <p className="pb-20 text-gray-400">
                    Business of all sizes partner with us to uncover sharper
                    insights <br></br> and create smarter marketing that grows{" "}
                    <span className=" text-pink-700">conversions</span>
                  </p>
                  <p className="text-red-500"> </p>
                </div>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="pr-14">
                <img
                  className="pb-3"
                  src="/images/accelarate growth/marketing.png"
                  alt="marketing"
                ></img>
                <div className="text-left">
                  <h2 className=" pb-5 text-lg">MARKETING</h2>
                  <p className=" text-gray-400">
                    Data-driven marketing that delivers measurable results.
                  </p>
                </div>
              </div>

              <div className="px-10">
                <img
                  className="pb-3 "
                  src="/images/accelarate growth/experience.png"
                  alt="experience"
                ></img>
                <div className=" text-left">
                  <h2 className=" pb-5 text-lg">EXPERIENCE</h2>
                  <p className=" text-gray-400">
                    Website and app that your customer will love.
                  </p>
                </div>
              </div>

              <div className="px-10">
                <img
                  className="pb-3"
                  src="/images/accelarate growth/creative.png"
                  alt="creative"
                ></img>
                <div className="text-left">
                  <h2 className=" pb-5 text-lg">CREATIVE</h2>
                  <p className="text-gray-400">
                    Imaginative content that creates connections.
                  </p>
                </div>
              </div>

              <div className="px-10">
                <img
                  className="pb-3"
                  src="/images/accelarate growth/analyticcs.png"
                  alt="analytics"
                ></img>
                <div className=" text-left">
                  <h2 className=" pb-5 text-lg">ANALYTICS</h2>
                  <p className=" text-gray-400">
                    Better data that lead to better decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* div for get started section */}
        <div className="relative w-full flex justify-center  mx-auto">
          <img
            className="w-full max-h-[432px] object-cover"
            src="/images/case study bg.png"
            alt="get started section bg"
          />
          <div className="absolute container mx-auto top-10 w-full text-center justify-center text-white py-4">
            <h2 className="pt-5 py-3">NEXT STEPS</h2>
            <h1 className="text-3xl font-bold pt-5 pb-5">GET STARTED</h1>
            <p className=" pb-5">
              Call and email us to learn more about our services or <br></br>{" "}
              request a proposal from our team.
            </p>

            <div className="pt-5">
              <button className="mr-5 text-lg bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent rounded-md">
                Proposal
              </button>
              <button className="ml-5 text-lg bg-white text-black font-bold py-2 px-4 border border-white hover:border-transparent rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* div for our insights section */}
        <div className="container mx-auto">
          <div className="pb-24 px-52">
            <h1 className="pt-20 pb-10 text-5xl font-extrabold text-center justify-center">
              Our Insights
            </h1>
            <div>
              <div className=" text-left justify-start w-full">
                <div class="grid grid-cols-3 gap-8 py-5 w-full">
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                    <h1 className="text-2xl font-semibold pb-5">
                      9 Guidlines for E-commerce Product Images
                    </h1>
                    <p className=" pb-5 text-gray-400">
                      A picture is worth more than a thousand texts, as the
                      saying goes. and..
                    </p>
                    <p className="text-xs">
                      <span className=" uppercase text-xs font-bold">
                        Hypersonic
                      </span>{" "}
                      on April 12, 2022
                    </p>
                  </div>
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                    <h1 className="text-2xl font-semibold pb-5">
                      9 Guidelines for E-commerce Product Images
                    </h1>
                    <p className=" pb-5 text-gray-400">
                      A picture is worth more than a thousand texts, as the
                      saying goes. and..
                    </p>
                    <p className="text-xs">
                      <span className=" uppercase text-xs font-bold">
                        Hypersonic
                      </span>{" "}
                      on april 12, 2022
                    </p>
                  </div>
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                    <h1 className="text-2xl font-semibold pb-5">
                      Advertising On Amazon For Amazon Sellers
                    </h1>
                    <p className=" pb-5 text-gray-400">
                      As an amazon seller, you should always be looking for ways
                      to increase the...
                    </p>
                    <p className="text-xs pb-4">
                      <span className=" uppercase text-xs font-bold">
                        Hypersonic
                      </span>{" "}
                      on january 04, 2022
                    </p>
                  </div>
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                    <h1 className="text-2xl font-semibold pb-5">
                      What is Faderated Learning for Cohorts (FLoC)
                    </h1>
                    <p className=" pb-5 text-gray-400">
                      Google is further ensuring that third-party cookies are
                      being laid to rest by introducing...
                    </p>
                    <p className=" text-xs">
                      <span className=" uppercase text-xs font-bold">
                        Hypersonic
                      </span>{" "}
                      on september 04, 2022
                    </p>
                  </div>
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                    <h1 className="text-2xl font-semibold pb-5">
                      Instagram Reels: What Are They and How to Use them?
                    </h1>
                    <p className=" pb-5 text-gray-400">
                      Recently you might have noticed short video clips or reels
                      on your instagram feed. ....
                    </p>
                    <p className=" pb-4 text-xs">
                      <span className=" uppercase text-xs font-bold">
                        Hypersonic
                      </span>{" "}
                      on may 21, 2022
                    </p>
                  </div>
                  <div className=" border-2 rounded-xl px-10 py-4 w-full">
                    <img
                      className=" mx-auto pt-24"
                      src="/images/plus sign.png"
                      alt="plus sign"
                    ></img>
                    <p className=" text-center text-2xl font-semibold pt-3">
                      View All Posts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="relative w-full  mx-auto flex justify-center">
            <img
              className="w-full max-h-[416px] object-cover"
              src="/images/footer bg.png"
              alt="footer bg"
            ></img>
            <div className="container absolute top-[25%] bottom-[35%] flex justify-between w-full">
              <div className="flex gap-[120px] w-full">
                <ul>
                  <li className="font-bold text-xl pb-5">NAVIGRATION</li>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Services
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Clients
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      About
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Careers
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Contact
                    </li>
                  </Link>
                </ul>
                <ul>
                  <li className="font-bold text-xl pb-5">INSIGHTS</li>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Advertising
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Analytics
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      CX Management
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      E-commerce
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:bg-slate-200">
                      Education
                    </li>{" "}
                  </Link>
                </ul>
              </div>
              <div className="max-w-[248px] flex flex-col justify-end w-full text-start">
                <p className=" text-lg font-bold w-full">FOLLOW US</p>
                <div className="py-8 flex pr-2 border-b border-gray-300">
                  {/* <Link href=""><img
                    className=" object-scale-down pr-8"
                    src="/images/facebook-fill black.png"
                  ></img></Link> */}
                  <img
                    className=" object-scale-down pr-8"
                    src="/images/facebook-fill black.png"
                  ></img>
                  <img
                    className=" object-scale-down pr-8"
                    src="/images/twitter-fill  black.png"
                  ></img>
                  <img
                    className=" object-scale-down pr-8"
                    src="/images/instagram-line black.png"
                  ></img>
                  <img
                    className=" object-scale-down pr-8"
                    src="/images/linkdin logo.png"
                  ></img>
                  <img
                    className=" object-scale-down pr-8"
                    src="/images/youtube logo.png"
                  ></img>
                </div>
                <p className="text-sm whitespace-nowrap pt-5 w-full">
                  © 2022 Hypersonic All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;

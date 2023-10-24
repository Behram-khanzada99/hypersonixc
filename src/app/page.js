import Image from "next/image";

export default function Home() {
  return (
    <html>
      <head>
        <title>home</title>
      </head>
      <body>
        <div className="w-full max-w-[1400px] flex justify-center mx-auto">
          <div>
            {/* div for content with same bg */}
            <div className="relative">
              <img src="/images/home bg.png" alt="home bg img" />
              <div className="absolute top-0 w-full">
                <div class="flex mb-4">
                  <div class="w-full bg-transparent h-20 border-b border-gray-500">
                    <header className="text-white flex justify-between w-full ">
                      <img
                        className="px-6 py-6"
                        src="/images/hypersonic logo.png"
                        alt="logo"
                      ></img>
                      <nav className="flex flex-wrap items-center justify-between p-4 px-10">
                        <ul className="flex top-2">
                          <li className="mr-6">
                            <a href="#">services</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">clients</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">about</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">insights</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">contact</a>
                          </li>
                          <div></div>
                          <li className="mr-2">
                            <a href="#">
                              <img
                                className="mr-2"
                                src="/images/facebook-fill.png"
                                alt="fb logo"
                              />
                            </a>
                          </li>
                          <li className="mr-2">
                            <a href="#">
                              <img
                                className="mr-2"
                                src="/images/twitter-fill.png"
                                alt="twitter logo"
                              />
                            </a>
                          </li>
                          <li className="mr-2">
                            <a href="#">
                              <img
                                className="mr-2"
                                src="/images/instagram-line.png"
                                alt="insta logo"
                              />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </header>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-white pt-56">
                    <h1 className="pt-10 pb-6 text-5xl flex items-center justify-center">
                      <strong>FAST-FORWARD YOUR BUSINESS</strong>
                    </h1>
                    <p className="flex items-center justify-center pb-6">
                      we accelerate growth and profitability with customer
                      centric marketing
                    </p>
                    {/* <ul className="flex top-1 items-center justify-center">
                      <li className="flex items-center justify-center mr-6">
                        <a href="#">contact us</a>
                      </li>
                      <li className="flex items-center justify-center mr-6">
                        <a href="#">learn more</a>
                      </li>
                    </ul> */}
                    <div className="flex items-center justify-center py-5">
                      <button className="bg-pink-600 h-12 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-5">
                        Contact Us
                      </button>
                      <button className="bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent ml-5 rounded">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* div for measurable results section */}
            <div className=" px-36">
              <p className="flex items-center justify-center pt-28">
                WHAT TO EXPECT
              </p>
              <h2 className="flex items-center justify-center py-2 pb-10 text-4xl">
                <strong>Measurable Results</strong>
              </h2>

              <div className="flex mb-4 justify-center pb-20">
                <div>
                  <div className="flex justify-center w-full">
                    <img
                      // className="pl-20"
                      src="/images/measurable results/image 1.png"
                      alt="optimization"
                    />
                  </div>
                  <h3 className=" text-center text-xl font-bold py-4">
                    optimization
                  </h3>
                  <p className="text-center">
                    smarter campaigns that outperform the competition on any
                    device.
                  </p>
                </div>

                <div className=" border-l-2 border-r-2 border-gray-200">
                  <div className="flex justify-center w-full">
                    <img
                      src="/images/measurable results/image 2.png"
                      alt="analytics"
                    />
                  </div>
                  <h3 className=" text-center text-xl font-bold py-4">
                    Analytics
                  </h3>
                  <p className="text-center">
                    meaningful insights that give you a better understanding of
                    your customers
                  </p>
                </div>

                <div className="pl-10">
                  <div className="flex justify-center w-full">
                    <img
                      src="/images/measurable results/image 3.png"
                      alt="strategy"
                    />
                  </div>
                  <h3 className=" text-center text-xl font-bold py-4">
                    strategy
                  </h3>
                  <p className="text-center">
                    bold ideas from a team that knows what it takes to win.
                  </p>
                </div>
              </div>
            </div>

            {/* div for case study section */}
            <div className="relative">
              <img
                src="/images/case study bg.png"
                alt="case study section bg"
              />
              <div className="absolute top-[20%] w-full flex items-center justify-center">
                <div className="  text-white">
                  <h2 className="flex items-center justify-center pt-3 py-3 align-middle">
                    HOW WE WORK
                  </h2>
                  <h1 className="flex items-center justify-center text-3xl py-2">
                    <strong>CASE STUDY</strong>
                  </h1>
                  <p className="flex items-center justify-center text-center">
                    view an example of our recent work and learn about <br></br>{" "}
                    the process we use to move out clients forward.
                  </p>
                  {/* <a className="flex items-center justify-center pt-20" href="#">
                  Learn More
                </a> */}
                  <div className="flex items-center justify-center pt-16">
                    <button className=" bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent rounded">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* div for customer experience */}
            <div class="flex mb-4 px-40 py-10 pb-24 justify-center align-middle">
              <div>
                <h2 className="pt-14 text-gray-400">WHAT WE FOCUS</h2>
                <h1 className="pt-5 text-3xl font-bold">CUSTOMER EXPERIENCE</h1>
                <p className="pt-4 text-gray-400">
                  find the missing spark in your customer relationship starts
                  with building a better understanding of your customers.
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
              <div className=" pl-16 pt-10">
                <img
                  className=" scale-125"
                  src="/images/customer experience/customer exp mobileimg 2.png.png"
                ></img>
              </div>

              {/* <div class="flex mb-4 py-10 justify-center align-middle">
                <img src="/images/customer experience/customer experience img 1.png"></img>
                <img src="/images/customer experience/customer exp mobileimg 2.png.png"></img>
              </div> */}
            </div>

            {/* accelerative growth div */}
            <div className="relative text-center justify-center align-middle">
              <img
                src="/images/accelarate growth/accelarate growth bg.png"
                alt="accelerative growth bg"
              ></img>
              <div className="absolute top-10 w-full text-white py-10 px-36">
                <div className=" text-left">
                  <h2 className="pb-7 font-medium text-gray-400">WHAT WE DO</h2>
                  <h1 className="font-bold text-3xl pb-5">ACCELERATE GROWTH</h1>
                  <div className="flex text-center">
                    <div className="text-left">
                      <p className="pb-20 text-gray-400">
                        business of all sizes partner with us to uncover sharper
                        insights <br></br> and create smarter marketing that
                        grows{" "}
                        <span className=" text-pink-700">conversions.</span>
                      </p>
                      <p className="text-red-500"> </p>
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  <div>
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

                  <div>
                    <img
                      className="pb-3"
                      src="/images/accelarate growth/experience.png"
                      alt="experience"
                    ></img>
                    <div className=" text-left">
                      <h2 className=" pb-5 text-lg">EXPERIENCE</h2>
                      <p className=" text-gray-400">
                        website and app that your customer will love.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      className="pb-3"
                      src="/images/accelarate growth/creative.png"
                      alt="creative"
                    ></img>
                    <div className="text-left">
                      <h2 className=" pb-5 text-lg">CREATIVE</h2>
                      <p className="text-gray-400">
                        immaginative content that creates connections.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      className="pb-3"
                      src="/images/accelarate growth/analyticcs.png"
                      alt="analytics"
                    ></img>
                    <div className=" text-left">
                      <h2 className=" pb-5 text-lg">ANALYTICS</h2>
                      <p className=" text-gray-400">
                        better data that lead to better decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* div for get started section */}
            <div className="relative">
              <img
                src="/images/case study bg.png"
                alt="get started section bg"
              />
              <div className="absolute top-10 w-full text-center justify-center text-white py-4">
                <h2 className="pt-5 py-3">NEXT STEPS</h2>
                <h1 className="text-3xl font-bold pt-5 pb-5">GET STARTED</h1>
                <p className=" pb-5">
                  call and email us to learn more about our services or request
                  a proposal from our team.
                </p>
                {/* <a href="#">proposal</a>
              <a href="#">contact us</a> */}
                <div className="pt-5">
                  <button className="mr-5 text-lg bg-transparent hover:bg-red-600 text-white font-bold py-2 px-4 border border-white hover:border-transparent rounded">
                    proposal
                  </button>
                  <button className="ml-5 text-lg bg-white text-black font-bold py-2 px-4 border border-white hover:border-transparent rounded">
                    contact Us
                  </button>
                </div>
              </div>
            </div>
            {/* div for our insights section */}
            <div className=" px-36 pb-24">
              <h1 className="pt-20 pb-16 text-4xl font-bold text-center justify-center">
                Our Insights
              </h1>
              <div>
                <div className=" text-left justify-start">
                  <div class="grid grid-cols-3 gap-8 py-5 mr-5">
                    <div className=" border-4 rounded-xl px-7 py-7">
                      <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                      <h1 className="text-2xl font-bold pb-5">
                        9 Guidlines for E-commerce Product Images
                      </h1>
                      <p className=" pb-5 text-gray-400">
                        a picture is worth more than a thousand texts, as the
                        saying goes. and..
                      </p>
                      <p>
                        <strong>hypersonic</strong> on april 12, 2022
                      </p>
                    </div>
                    <div className=" border-4 rounded-xl px-7 py-7">
                      <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                      <h1 className="text-2xl font-bold pb-5">
                        9 guidlines for e-commerce product images
                      </h1>
                      <p className=" pb-5 text-gray-400">
                        a picture is worth more than a thousand texts, as the
                        saying goes. and..
                      </p>
                      <p>
                        <strong>hypersonic</strong> on april 12, 2022
                      </p>
                    </div>
                    <div className=" border-4 rounded-xl px-7 py-7">
                      <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                      <h1 className="text-2xl font-bold pb-5">
                        Advertising On Amazon For Amazon Sellers
                      </h1>
                      <p className=" pb-5 text-gray-400">
                        <br></br>as an amazon seller, you should always be
                        looking for ways to increase the...
                      </p>
                      <p className=" pb-5">
                        <strong>hypersonic</strong> on january 04, 2022
                      </p>
                    </div>
                    <div className=" border-4 rounded-xl px-7 py-7">
                      <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                      <h1 className="text-2xl font-bold pb-5">
                        What is Faderated Learning for Cohorts (FLoC)
                      </h1>
                      <p className=" pb-5 text-gray-400">
                        Google is further ensuring that third-party cookies are
                        being laid to rest by introducing...
                      </p>
                      <p className=" pb-5">
                        <strong>hypersonic</strong> on september 04, 2022
                      </p>
                    </div>
                    <div className=" border-4 rounded-xl px-7 py-7">
                      <h2 className=" pb-5 pt-5 text-gray-400">E-Commerce</h2>
                      <h1 className="text-2xl font-bold pb-5">
                        Instagram Reels: What Are They and How to Use them?
                      </h1>
                      <p className=" pb-5 text-gray-400">
                        recently you might have noticed short video clips or
                        reels on your instagram feed. ....
                      </p>
                      <p>
                        <strong>hypersonic</strong> on may 21, 2022
                      </p>
                    </div>
                    <div className=" border-4 rounded-xl px-7 py-7">
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
            <footer>
              <div className="relative">
                <img src="/images/footer bg.png" alt="footer bg"></img>
                <div className="absolute top-[25%] bottom-[25%] flex w-full">
                  <div className="ml-20">
                    <ul>
                      <li className="font-bold text-xl pb-5">NAVIGRATION</li>
                      <li className=" pb-5 text-gray-400">Services</li>
                      <li className=" pb-5 text-gray-400">Clients</li>
                      <li className=" pb-5 text-gray-400">About</li>
                      <li className=" pb-5 text-gray-400">Careers</li>
                      <li className=" pb-5 text-gray-400">Contact</li>
                    </ul>
                  </div>

                  <div className="ml-20">
                    <ul>
                      <li className="font-bold text-xl pb-5">INSIGHTS</li>
                      <li className=" pb-5 text-gray-400">Advertising</li>
                      <li className=" pb-5 text-gray-400">Analytics</li>
                      <li className=" pb-5 text-gray-400">CX Management</li>
                      <li className=" pb-5 text-gray-400">E-commerce</li>
                      <li className=" pb-5 text-gray-400">Education</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap justify-end">
                    <p className=" text-lg justify-end text-left">FOLLOW US</p>
                    <div className="mr-6 flex">
                      <img
                        className=" object-scale-down"
                        src="/images/facebook-fill black.png"
                      ></img>
                      <img
                        className=" object-scale-down"
                        src="/images/instagram-line black.png"
                      ></img>
                      <img
                        className=" object-scale-down"
                        src="/images/linkdin logo.png"
                      ></img>
                      <img
                        className=" object-scale-down"
                        src="/images/twitter-fill  black.png"
                      ></img>
                      <img
                        className=" object-scale-down"
                        src="/images/youtube logo.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

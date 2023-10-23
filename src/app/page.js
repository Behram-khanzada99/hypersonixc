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
                  <div class="w-full bg-gray-500 h-12">
                    <header className="text-white flex justify-between w-full ">
                      <img
                        className="px-6 py-4"
                        src="/images/hypersonic logo.png"
                        alt="logo"
                      ></img>
                      <nav className="flex flex-wrap items-center justify-between p-4">
                        <ul className="flex top-1">
                          <li className="mr-6">
                            <a href="#">services</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">clients</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">insights</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">contact</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">about</a>
                          </li>
                          <li className="mr-6">
                            <a href="#">
                              {" "}
                              <img
                                className="mr-6"
                                src="/images/facebook-fill.png"
                                alt="fb logo"
                              />
                            </a>
                          </li>
                          <li className="mr-6">
                            <a href="#">
                              <img
                                className="mr-6"
                                src="/images/twitter-fill.png"
                                alt="fb logo"
                              />
                            </a>
                          </li>
                          <li className="mr-6">
                            <a href="#">
                              <img
                                className="mr-6"
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
                  <div className="text-white">
                    <h1 className="py-14 text-5xl flex items-center justify-center">
                      <strong>FAST-FORWARD YOUR BUSINESS</strong>
                    </h1>
                    <p className="flex items-center justify-center">
                      we accelerate growth and profitability with customer
                      centric marketing
                    </p>
                    <ul className="flex top-1 items-center justify-center">
                      <li className="flex items-center justify-center mr-6">
                        <a href="#">contact us</a>
                      </li>
                      <li className="flex items-center justify-center mr-6">
                        <a href="#">learn more</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* div for measurable results section */}
            <div>
              <p className="flex items-center justify-center pt-14">
                WHAT TO EXPECT
              </p>
              <h2 className="flex items-center justify-center py-2 pb-10 text-3xl">
                <strong>measurable results</strong>
              </h2>

              <div className="flex mb-4 justify-center">
                <div>
                  <div className="flex justify-center w-full">
                    <img
                      // className="pl-20"
                      src="/images/measurable results/image 1.png"
                      alt="optimization"
                    />
                  </div>

                  <p className="text-center">
                    smarter campaigns that outperform the competition on any
                    device.
                  </p>
                </div>

                <div>
                  <div className="flex justify-center w-full">
                  <img
                    src="/images/measurable results/image 2.png"
                    alt="analytics"
                  />

                  </div>
                  
                  <p className="text-center">
                    meaningful insights that give you a better understanding of
                    your customers
                  </p>
                </div>

                <div>
                  <div className="flex justify-center w-full">
                  <img
                    src="/images/measurable results/image 3.png"
                    alt="strategy"
                  />
                  </div>
                 
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
              <div className="absolute top-0 w-full text-white">
                <h2 className="flex items-center justify-center py-3">
                  HOW WE WORK
                </h2>
                <h1 className="flex items-center justify-center text-3xl py-3">
                  <strong>CASE STUDY</strong>
                </h1>
                <p className="flex items-center justify-center text-center">
                  view an example of our recent work and learn about <br></br>{" "}
                  the process we use to move out clients forward.
                </p>
                <a className="flex items-center justify-center pt-20" href="#">
                  Learn More
                </a>
              </div>
            </div>
            {/* div for customer experience */}
            <div>
              {/* <h2 className="flex items-center justify-center pt-14">WHAT WE FOCUS</h2>
              <h1 className="flex items-center justify-center pt-14">CUSTOMER EXPERIENCE</h1>
              <p>
                find the missing spark in your customer relationship starts with
                building a better understanding of your customers.
              </p>
              <p>
                <strong>Data Science</strong>
              </p>
              <img
                src="/images/data science progress.png"
                alt="ds progress"
              ></img>
              <p>
                <strong>Creative Thinking</strong>
              </p>
              <img
                src="/images/creative thinking progress.png"
                alt="ct progress"
              ></img> */}

              <div class="flex mb-4 py-10 justify-center align-middle">
                <img src="/images/customer experience/customer experience img 1.png"></img>
                <img src="/images/customer experience/customer exp mobileimg 2.png.png"></img>
              </div>
            </div>
            <div title="accelerate growth">
              <img
                src="/images/accelarate growth/accelarate growth bg.png"
                alt="accelerative growth bg"
              ></img>
              <h2>WHAT WE FOCUS</h2>
              <h1>ACCELERATE GROWTH</h1>
              <p>
                business of all sizes partner with us to uncover sharper
                insights and create smarter marketing that grows conversions
              </p>
              <img
                src="/images/accelarate growth/marketing.png"
                alt="marketing"
              ></img>
              <h2>MARKETING</h2>
              <p>Data-driven marketing that delivers measurable results.</p>
              <img
                src="/images/accelarate growth/experience.png"
                alt="experience"
              ></img>
              <h2>EXPERIENCE</h2>
              <p>website and app that your customer will love.</p>
              <img
                src="/images/accelarate growth/creative.png"
                alt="creative"
              ></img>
              <h2>CREATIVE</h2>
              <p>immaginative content that creates connections.</p>
              <img
                src="/images/accelarate growth/analyticcs.png"
                alt="analytics"
              ></img>
              <h2>ANALYTICS</h2>
              <p>better data that lead to better decisions.</p>
            </div>
            <div title="get started">
              <img
                src="/images/case study bg.png"
                alt="get started section bg"
              />
              <h2>NEXT STEPS</h2>
              <h1>GET STARTED</h1>
              <p>
                call and email us to learn more about our services or request a
                proposal from our team.
              </p>
              <a href="#">proposal</a>
              <a href="#">contact us</a>
            </div>
            <div title="our insights">
              <h1>Our Insights</h1>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

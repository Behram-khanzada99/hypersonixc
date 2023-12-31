import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full flex justify-center mx-auto">
      <div className="w-full">
        {/* div for content with same bg */}
        <div className="relative w-full mx-auto flex justify-center">
          <img
            className="absolute w-full h-full z-[-1] object-cover"
            src="/images/2nd page/OurServices bg.png"
            alt="home bg img"
          />
          <div className="mx-auto top-0 w-full pb-80">
            <div class="flex mb-4 border-b border-gray-500 w-full justify-center">
              <div class="w-full bg-transparent container border-r border-gray-500">
                <header className="text-white flex justify-between w-full py-[30px]">
                  <Link href="/">
                    <img className=" hover:bg-blue-700" src="/images/hypersonic logo.png" alt="logo"></img>
                  </Link>

                  <nav className="flex flex-wrap items-center justify-between">
                    <ul className="flex gap-6 top-2">
                      <li className=" hover:text-yellow-300">
                        <Link href="/ourServices">Services</Link>
                      </li>
                      <li className=" hover:text-yellow-300">
                        <a href="#">Clients</a>
                      </li>
                      <li className=" hover:text-yellow-300">
                        <a href="#">About</a>
                      </li>
                      <li className=" hover:text-yellow-300">
                        <a href="#">Insights</a>
                      </li>
                      <li className=" pr-10 hover:text-yellow-300">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </header>
              </div>
              <div className="flex gap-5 pl-5 justify-end">
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

                <Link href={"/"}>
                  {" "}
                  <img
                    className=" absolute pt-8 object-scale-down"
                    src="/images/instagram-line.png"
                    alt="insta logo"
                  />
                </Link>
              </div>
            </div>
            <div className=" text-center justify-center text-white">
              <p className=" text-xs pt-32">WHAT WE DO</p>
              <h1 className="text-6xl font-extrabold pt-2">Our Services</h1>
            </div>
          </div>
        </div>

        {/* div for second section */}
        <div className="text-center justify-center max-w-[1400px] mx-auto px-52 py-20 border-b-2">
          <h1 className=" font-bold text-4xl pb-4">
            Digital marketing for businesses
          </h1>
          <p className=" text-gray-500">
            We build customer-centric solutions around strategies that are
            unique to each of partners. We are the type that’s not afraid to
            share hard truths, and we always hold ourselves accountable to
            deliver on what we promise.
          </p>
        </div>

        {/* div for third section */}
        <div>
          <div className=" items-center flex mb-4 justify-center pb-20 py-12">
            <div className=" pr-20">
              <h3 className=" text-center text-xl font-bold py-4">
                Full-Service
              </h3>
              <p className="text-center">
                We provide everything you <br></br> need under one roof.
              </p>
            </div>

            <div className=" border-l-2 border-r-2 border-gray-200">
              <div className=" px-24 py-10">
                <h3 className=" text-center text-xl font-bold py-4">Bespoke</h3>
                <p className="text-center">
                  Our work is handcrafted <br></br> and made to order.
                </p>
              </div>
            </div>

            <div className="pl-10">
              <div className=" pl-10">
                <h3 className=" text-center text-xl font-bold py-4">
                  Accountable
                </h3>
                <p className="text-center">
                  We set clear goals and <br></br> track our progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* div for forth section*/}
        <div className="flex justify-center align-middle pb-20">
          <div className=" items-center align-middle justify-center">
            <img src="/images/2nd page/pic 1.png" alt="building img"></img>
          </div>

          <div className=" align-middle justify-center">
            <div className="relative">
              <img src="/images/2nd page/light gray bg.png"></img>
              <div className="absolute w-full mx-auto justify-center items-center top-28 px-20">
                <div className=" items-center  justify-center flex flex-col w-full">
                  <img
                    className="w-fit flex justify-center items-center"
                    src="/images/2nd page/marketing logo.png"
                    alt="market logo"
                  ></img>
                  <h1 className="font-bold text-xl pb-3">
                    Marketing Communications
                  </h1>
                  <p className=" text-gray-500">
                    Media Planning & Buying • Search Marketing • SEO Strategy
                    Social Programs • Integrated Campaigns • Email Marketing
                    Channel Planning • CRM Integration • Product Feeds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div for fifth section */}

        <div className="flex justify-center align-middle pb-20">
          <div className=" align-middle justify-center">
            <div className="relative">
              <img src="/images/2nd page/light gray bg.png"></img>
              <div className="absolute w-full mx-auto justify-center items-center top-28 px-20">
                <div className=" items-center text-center justify-center flex flex-col w-full">
                  <img
                    className="w-fit flex justify-center items-center"
                    src="/images/2nd page/experience design logo.png"
                    alt="exp logo"
                  ></img>
                  <h1 className="font-bold text-xl pb-3">Experience Design</h1>
                  <p className=" text-gray-500">
                    Responsive Design • E-commerce • User Experience Voice
                    Interfaces • App Development • Prototyping Solution
                    Architecture • Digital Product Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center align-middle justify-center">
            <img src="/images/2nd page/pic 2.png" alt="laptop img"></img>
          </div>
        </div>

        {/* div for sixth section*/}

        <div className="flex justify-center align-middle pb-20">
          <div className=" items-center align-middle justify-center">
            <img src="/images/2nd page/pic 3.png" alt="building img"></img>
          </div>

          <div className=" align-middle justify-center">
            <div className="relative">
              <img src="/images/2nd page/light gray bg.png"></img>
              <div className="absolute w-full mx-auto justify-center items-center top-28 px-20">
                <div className=" items-center text-center justify-center flex flex-col w-full">
                  <img
                    className="flex justify-center items-center"
                    src="/images/2nd page/creative services logo.png"
                    alt="crerative logo"
                  ></img>
                  <h1 className="font-bold text-xl pb-3">Creative Services</h1>
                  <p className=" text-gray-500">
                    Content Creation • Video Production • Animation Campaigns •
                    Copywriting • Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div for seventh section */}
        <div className="flex justify-center align-middle pb-20 ">
          <div className=" align-middle justify-center">
            <div className="relative">
              <img src="/images/2nd page/light gray bg.png"></img>
              <div className="absolute w-full mx-auto justify-center items-center top-28 px-20">
                <div className="items-center text-center justify-center flex flex-col w-full">
                  <img
                    className="flex justify-center items-center"
                    src="/images/2nd page/data and analytics logo.png"
                    alt="exp logo"
                  ></img>
                  <h1 className="font-bold text-xl pb-3">Data & Analytics </h1>
                  <p className=" text-gray-500">
                    Segmentation & Targeting • Attribution Modeling Data
                    Visualization • Measurement Planning & Implementation
                    Testing & Optimization • Digital Transformation{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center align-middle justify-center">
            <img src="/images/2nd page/pic 4.png" alt="laptop img"></img>
          </div>
        </div>

        <footer>
        <div className="relative w-full  mx-auto flex justify-center">
            <img
              className="absolute z-[-1] w-full h-full object-cover"
              src="/images/footer bg.png"
              alt="footer bg"
            ></img>
            <div className="container py-20 top-[25%] bottom-[35%] flex justify-between w-full">
              <div className="flex gap-[120px] w-full">
                <ul>
                  <li className="font-bold text-xl pb-5">NAVIGRATION</li>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Services
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Clients
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      About
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Careers
                    </li>
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Contact
                    </li>
                  </Link>
                </ul>
                <ul>
                  <li className="font-bold text-xl pb-5">INSIGHTS</li>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Advertising
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Analytics
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      CX Management
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      E-commerce
                    </li>{" "}
                  </Link>
                  <Link href="">
                    <li className=" pb-5 text-gray-400 hover:text-blue-300">
                      Education
                    </li>{" "}
                  </Link>
                </ul>
              </div>
              <div className="max-w-[248px] flex flex-col w-full text-start">
                <p className=" text-lg font-bold w-full">FOLLOW US</p>
                <div className="py-8 flex pr-2 border-b border-gray-300">
                  <a href="your_facebook_url_here" className=" h-auto pr-8">
                    <img src="/images/facebook-fill black.png" alt="Facebook" />
                  </a>
                  <a href="your_twitter_url_here" className="pr-8">
                    <img src="/images/twitter-fill  black.png" alt="Twitter" />
                  </a>
                  <a href="your_instagram_url_here" className=" pr-8">
                    <img
                      src="/images/instagram-line black.png"
                      alt="Instagram"
                    />
                  </a>
                  <a href="your_linkedin_url_here" className=" pr-8">
                    <img src="/images/linkdin logo.png" alt="LinkedIn" />
                  </a>
                  <a href="your_youtube_url_here" className=" pr-8">
                    <img src="/images/youtube logo.png" alt="YouTube" />
                  </a>
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

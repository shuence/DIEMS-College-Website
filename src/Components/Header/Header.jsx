import React from "react";
import logo from "../../assests/images/logo.png";

const Header = () => {
  return (
    <div data-server-rendered="true" id="app" data-v-3c104230>
      <div className="bg-white relative font-primary" data-v-3c104230>
        <div data-v-572fd66e>
          <section className="hidden lg:block" data-v-572fd66e>
            <div className="px-6 py-4 h-full relative" data-v-572fd66e>
              <div className="w-full text-white flex flex-row space-x-4">
                <a
                  href="/"
                  aria-current="page"
                  className="w-1/6 flex justify-center items-center active--exact active"
                >
                  <img
                    alt="MGM logo"
                    src={logo}
                    className="object-cover max-h-28 g-image"
                  />
                </a>
                <div className="w-5/6 h-24 relative">
                  <div className="w-32 h-24 absolute top-0 -mt-4 right-0">
                    <img
                      alt="Naac- A"
                      src="https://res.cloudinary.com/mgm-jnec/image/upload/v1648797514/Visual%20Schema/naac_k8b8wg_dousrk-min_wvxedo.png"
                      className="h-full w-full object-cover g-image"
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="w-full h-full flex flex-col items-start justify-center text-primaryDark">
                      <p className="text-2xl font-bold tracking-normal capitalize">
                        Deogiri Institute of Engineering And Management Studies
                      </p>
                      <p className="text-base">
                        A constituent College of Marathwada Shikshan Prasarak
                        Mandal, Aurangabad, Maharashtra
                      </p>
                      <br />
                    </div>
                    <div className="w-full mt-1 h-full flex flex-row space-x-3 items-end justify-end text-sm text-primaryDark">
                      <a href="/blogs">Blogs</a>
                      <p>|</p>
                      <a href="/news">News</a>
                      <p>|</p>
                      <a href="/events">Events</a>
                      <p>|</p>
                      <a href="/gallery">Gallery</a>
                      <p>|</p>
                      <a href="/contact">Contact Us</a>
                      <p>|</p>
                      <a href="/acts-and-committee">Acts and Committee</a>
                      <p>|</p>
                      <a href="/downloads">Downloads</a>
                      <p>|</p>
                      <a
                        href="https://erp.mgmu.ac.in/login.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Student Login
                      </a>
                      <p>|</p>
                      <a href="/search">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;

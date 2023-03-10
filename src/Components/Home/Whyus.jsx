import React from "react";
import academics from "../../assests/images/academics.png";
import industry from "../../assests/images/industry.png";
import placement from "../../assests/images/placement.png";
import campus1 from "../../assests/images/campus1.png";
import industrial from "../../assests/images/industrialrelation.png";
import Scholarship from "../../assests/images/scholarship.png";

const Whyus = () => {
  return (
    <div>
      <div data-v-3c104230="" class="pt-16 px-4 lg:px-6">
        <div class="border-t-2 border-secondary py-10 w-full h-full relative">
          <div class="flex flex-row space-x-4 w-full justify-end h-12 lg:absolute right-0 -mt-16 lg:-mt-20 mr-12">
            <div class="flex-initial">
              <p class="text-primary text-2xl lg:text-4xl bg-white font-semibold tracking-widest uppercase border-primary rounded px-4 py-2">
                Why DIEMS?
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 bg-gray-300 lg:p-4">
            <div class="w-full lg:w-1/2 text-primaryDark">
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img
                      alt="Curriculum"
                      src={academics}
                      class="h-12 g-image"
                    />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Academics</p>
                    <p class="font-base text-xs lg:text-sm">
                      Legacy of excellent academic results and placements since
                      2009
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img alt="LOCF" src={industry} class="h-12 g-image" />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Industrial Training</p>
                    <p class="font-base text-xs lg:text-sm">
                      Six months industrial training for final year students &{" "}
                      <br />
                      Industrial internships for industry exposure
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img
                      alt="Effective teaching-learning models"
                      src={industrial}
                      class="h-12 g-image"
                    />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Industrial Realations</p>
                    <p class="font-base text-xs lg:text-sm">
                      Sponsored projects from industries &<br /> More than 25
                      MOU's with industries
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img alt="Placement" src={placement} class="h-12 g-image" />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Placement</p>
                    <p class="font-base text-xs lg:text-sm">
                      Total Placements 600+&nbsp; in 2020-21
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img
                      alt="Scholarships"
                      src={Scholarship}
                      class="h-12 g-image"
                    />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Scholarships</p>
                    <p class="font-base text-xs lg:text-sm">
                      All Government Scholarships available
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-row items-center lg:mt-4">
                  <div class="w-1/6 p-4">
                    <img alt="Campus" src={campus1} class="h-12 g-image" />
                  </div>
                  <div class="w-5/6">
                    <p class="font-medium lg:text-lg">Campus And Hostel</p>
                    <p class="font-base text-xs lg:text-sm">
                      Safe and well disciplined campus
                      <br />
                      Separate hostel facility for boys and girls in campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="w-full p-4">
                <iframe
                  width="544"
                  height="272"
                  src="https://www.youtube-nocookie.com/embed/Hpcu9IdMpT0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="w-full p-4">
                <iframe
                  width="544"
                  height="272"
                  src="https://www.youtube-nocookie.com/embed/jfZKmR7O9RQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;

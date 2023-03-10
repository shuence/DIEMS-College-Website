import React from "react";
import event from "../../assests/images/event.png";

const Events = () => {
  return (
    <div className="relative py-4 m-6 bg-gray-300 rounded overflow-hidden shadow-md">
      <hr class=" w-full absolute h-1 bg-primaryDark mt-16 lg:mt-32 z-0" />
      <div class="pt-16 lg:pt-1 px-4 lg:px-6 h-full z-40 relative">
        <div class="py-10 w-full h-full relative">
          <div class="flex flex-row space-x-4 w-full justify-start h-12 lg:absolute left-0 -mt-16 lg:mt-12">
            <div class="flex-initial">
              <p class="text-primaryDark text-2xl lg:text-4xl bg-white font-semibold uppercase tracking-widest border-primary rounded ml-6 px-8 py-2">
                Events
              </p>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row mt-6 h-full relative">
            <div class="w-full lg:w-1/3 px-4 flex flex-col items-start justify-end mt-6 lg:mt-0">
              <img
                              alt="DIEMS asset"
                              src={event}
                              height={250}
                                width={250}
                class="g-image"
              />
              <a href="/events" class="flex-initial mt-4">
                <button class="bg-primaryDark hover:bg-primaryDark transition duration-500 text-primaryLight border text-xs lg:text-tiny border-primaryDark rounded ml-6 px-8 py-2">
                  Read More
                </button>
              </a>
            </div>
            <div class="w-full lg:w-2/3 text-primaryDark h-full z-40">
              <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 2x:grid-cols-4 gap-4">
                <span class="h-full">
                  <div>
                    <div class=" transition delay-150 duration-300 ease-in-out rounded h-full cursor-pointer m-auto p-4 relative bg-primaryLight">
                      <div class="absolute top-0 right-0  shadow -mt-2 mr-4 text-xs px-2 py-1 rounded text-black block bg-primaryLight">
                        <i
                          class="fas fa-star-of-life mr-1"
                          aria-hidden="true"
                        ></i>
                        New
                      </div>
                      <a href="link" class="w-full block h-full">
                        <img
                          alt="Sample Event"
                          src="https://res.cloudinary.com/binarycode/image/upload/v1652586734/MGM%20JNEC/App%20Data/Event%20Images/BBoEFaMgf4NDZon2022-05-15%2003:52:13.jpg"
                          class="h-40 w-full object-cover mt-4"
                        />
                        <div class="w-full pt-4">
                          <p class="text-primaryDark text-base lg:text-lg font-medium capitalize">
                            Sample Event...
                          </p>
                          <p class="text-black text-xs font-light text-md">
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of th...
                          </p>
                          <div class="flex items-center mt-4">
                            <div class="flex flex-col justify-between text-xs text-black">
                              <p>Conducted By:</p>
                              <p class="tex-primary dark:text-black-300 font-medium capitalize">
                                Sample Person
                              </p>
                            </div>
                          </div>
                          <a
                            href="/event/sample-event"
                            class="bg-primaryDark hover:bg-primaryDark transition duration-500 text-primaryLight mt-6 border border-primaryDark rounded px-4 py-2 w-full text-xxs text-left flex justify-between"
                          >
                            <p>
                              <i class="fas fa-play" aria-hidden="true"></i>
                            </p>
                            <p>Read More</p>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                </span>
                <span class="h-full">
                  <div>
                    <div class=" transition delay-150 duration-300 ease-in-out rounded h-full cursor-pointer m-auto p-4 relative bg-primaryLight">
                      <div class="absolute top-0 right-0  shadow -mt-2 mr-4 text-xs px-2 py-1 rounded text-black block bg-primaryLight">
                        <i
                          class="fas fa-star-of-life mr-1"
                          aria-hidden="true"
                        ></i>
                        New
                      </div>
                      <a href="link" class="w-full block h-full">
                        <img
                          alt="Sample Event"
                          src="https://res.cloudinary.com/binarycode/image/upload/v1652586734/MGM%20JNEC/App%20Data/Event%20Images/BBoEFaMgf4NDZon2022-05-15%2003:52:13.jpg"
                          class="h-40 w-full object-cover mt-4"
                        />
                        <div class="w-full pt-4">
                          <p class="text-primaryDark text-base lg:text-lg font-medium capitalize">
                            Sample Event...
                          </p>
                          <p class="text-black text-xs font-light text-md">
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of th...
                          </p>
                          <div class="flex items-center mt-4">
                            <div class="flex flex-col justify-between text-xs text-black">
                              <p>Conducted By:</p>
                              <p class="tex-primary dark:text-black-300 font-medium capitalize">
                                Sample Person
                              </p>
                            </div>
                          </div>
                          <a
                            href="/event/sample-event"
                            class="bg-primaryDark hover:bg-primaryDark transition duration-500 text-primaryLight mt-6 border border-primaryDark rounded px-4 py-2 w-full text-xxs text-left flex justify-between"
                          >
                            <p>
                              <i class="fas fa-play" aria-hidden="true"></i>
                            </p>
                            <p>Read More</p>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                </span>
                <span class="h-full">
                  <div>
                    <div class=" transition delay-150 duration-300 ease-in-out rounded h-full cursor-pointer m-auto p-4 relative bg-primaryLight">
                      <div class="absolute top-0 right-0  shadow -mt-2 mr-4 text-xs px-2 py-1 rounded text-black block bg-primaryLight">
                        <i
                          class="fas fa-star-of-life mr-1"
                          aria-hidden="true"
                        ></i>
                        New
                      </div>
                      <a href="link" class="w-full block h-full">
                        <img
                          alt="Sample Event"
                          src="https://res.cloudinary.com/binarycode/image/upload/v1652586734/MGM%20JNEC/App%20Data/Event%20Images/BBoEFaMgf4NDZon2022-05-15%2003:52:13.jpg"
                          class="h-40 w-full object-cover mt-4"
                        />
                        <div class="w-full pt-4">
                          <p class="text-primaryDark text-base lg:text-lg font-medium capitalize">
                            Sample Event...
                          </p>
                          <p class="text-black text-xs font-light text-md">
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of th...
                          </p>
                          <div class="flex items-center mt-4">
                            <div class="flex flex-col justify-between text-xs text-black">
                              <p>Conducted By:</p>
                              <p class="tex-primary dark:text-black-300 font-medium capitalize">
                                Sample Person
                              </p>
                            </div>
                          </div>
                          <a
                            href="/event/sample-event"
                            class="bg-primaryDark hover:bg-primaryDark transition duration-500 text-primaryLight mt-6 border border-primaryDark rounded px-4 py-2 w-full text-xxs text-left flex justify-between"
                          >
                            <p>
                              <i class="fas fa-play" aria-hidden="true"></i>
                            </p>
                            <p>Read More</p>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

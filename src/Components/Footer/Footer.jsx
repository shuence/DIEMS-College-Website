/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Phone from '../../assests/images/phone.svg';
import logo from "../../assests/images/logo.png"

const Footer = () => {
return (
  <div className="relative py-4 m-6 bg-gray-300 rounded overflow-hidden shadow-md">
    <div data-v-1152cd6b="" class="px-4 lg:px-6">
      <div
        data-v-1152cd6b=""
        class="flex flex-col lg:flex-row py-4 items-center"
      >
        <div
          data-v-1152cd6b=""
          class="w-full lg:w-1/5 flex justify-center lg:justify-start"
        >
          <img data-v-1152cd6b="" src={logo} class="object-contain mt-4 h-24" />
        </div>
        <div data-v-1152cd6b="" class="w-full lg:w-2/5">
          <div
            data-v-1152cd6b=""
            class=" mt-4 w-full h-full flex flex-col items-center lg:items-start justify-start text-black "
          >
            <p
              data-v-1152cd6b=""
              class="text-xl font-bold text-center lg:text-left"
            >
              Deogiri Institute Of Engineering And Management Studies
            </p>
            <p data-v-1152cd6b="" class="text-xs lg:mt-4">
              A constituent College of Marathwada Shikshan Prasarak Mandal,
            </p>
            <p data-v-1152cd6b="" class="text-xs">
              Chhatrapati Sambhajinagar, Maharashtra -431005
            </p>
          </div>
        </div>
        <div data-v-1152cd6b="" class="w-full lg:w-2/5">
          <div
            data-v-1152cd6b=""
            class=" mt-4 w-full h-full flex flex-col items-center lg:items-end justify-start text-black text-center"
          >
            <p data-v-1152cd6b="" class="text-lg font-bold">
              Contact Us
            </p>
            <p data-v-1152cd6b="" class="text-md lg:mt-4">
              {" "}
              Tel:{" "}
              <a data-v-1152cd6b="" href="tel:0240-2367546">
                0240-2367546
              </a>
              ,
            </p>
            <p data-v-1152cd6b="" class="text-md">
              Mail : admin@dietms.org
            </p>
          </div>
        </div>
      </div>
      <div
        data-v-1152cd6b=""
        class="text-black border-t-2 border-ternaryDark py-4 text-sm mt-4"
      >
        <div
          data-v-1152cd6b=""
          class=" flex flex-col space-y-4 lg:space-y-0 lg:flex-row
            "
        >
          <div
            data-v-1152cd6b=""
            class="flex flex-col text-center md:text-left w-full lg:w-1/2"
          >
            <p data-v-1152cd6b="" class="font-medium">
              Copyright 2023 © Deogiri Institute Of Engineering And Management
              Studies
            </p>
            <p>
              Designed &amp; Developed By{" "}
              <a
                data-v-1152cd6b=""
                href="https://www.shuence.netlify.com/"
                target="__blank"
              >
                <span className="font-medium">Shuence</span>
              </a>
            </p>
          </div>
          <div
            data-v-1152cd6b=""
            class="flex justify-center lg:justify-end lg:items-end w-full lg:w-1/2"
          >
            <div
              data-v-1152cd6b=""
              class="grid grid-flow-row grid-cols-8 gap-1 lg:gap-3"
            >
              <a
                data-v-1152cd6b=""
                class="w-full h-4 2xl:h-10 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <img src={Phone} class="h-4 2xl:h-12 g-image" />
              </a>
              <a
                data-v-1152cd6b=""
                href="https://api.whatsapp.com/send/?phone=%2B&amp;text=Hello%21&amp;app_absent=0"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="mailto:admin@diems.com"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fa fa-envelope"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="google maps"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-google"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="https://www.instagram.com/diems/?hl=en"
                target="__blank"
                class="border-l-2 border-ternaryDark pl-2 w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="https://www.linkedin.com/school/diems/?originalSubdomain=in"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="https://twitter.com/diems?lang=en"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                data-v-1152cd6b=""
                href="https://www.facebook.com/diems/"
                target="__blank"
                class="w-full h-4 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Footer
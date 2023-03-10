import React from 'react'
import logo from "../../assests/images/logo.png";

const Mobile = () => {
  return (
    <div className='lg:hidden'>
      <div class="h-16 bg-ternaryLight px-4">
    <div class="flex justify-row justify-between items-center h-full w-full">
      <div class="flex flex-col">
        <div class="flex flex-row space-x-4">
          <img
            src={logo}
            alt="DIEMS logo"
            class="object-cover w-16"
          />
          <a
            href="/"
            aria-current="page"
            class="active--exact active"
          >
            <div class="text-primaryDark text-2xl font-semibold">
              DIEMS
            </div>
          </a>
        </div>
      </div>
      <div>
        <div class=" flex flex-row space-x-4 text-primaryDark">
          <p>
            <a href="/search" class="">
              <i class="fas fa-search text-lg" aria-hidden="true"></i>
            </a>
          </p>
          <button type="checkbox" id="active"
            name="nav-button">
            <label for="active"class="block hover: focus: focus:outline-none cursor-pointer">
            <i class="fas fa-bars text-xl" aria-hidden="true"></i>
            </label>
          </button>
        </div>
      </div>
    </div>
  </div>
        <div id="navbar" class="bg-white min-h-screen relative z-50 ">
<div class="flex flex-wrap">
  <div
    class="border border-secondary h-96 top-16 absolute mt-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
  <div
    class=" bg-ternaryDark top-8 px-4 font-medium text-sm py-1 text-primaryDark absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    Menu
  </div>
  <div class="grid grid-flow-row grid-cols-2 w-full p-6" style={{display: "none;"}}>
    <p class="mt-2 text-primaryDark font-semibold border-t-2 border-secondary p-4 pt-8 flex flex-col">
      Home
      <a
        href="/"
        aria-current="page"
        class="text-sm font-medium font-gray-400 active--exact active"
      >
        Home
      </a>
      <a
        href="/admissions"
        class="text-sm font-medium font-gray-400"
      >
        Admissions
      </a>
      <a
        href="/programs"
        class="text-sm font-medium font-gray-400"
      >
       Programs
      </a>
      <a href="/about" class="text-sm font-medium font-gray-400">
        About Us
      </a>
      <a
        href="/placement"
        class="text-sm font-medium font-gray-400"
      >
        Placement at DIEMS
      </a>
    </p>
    <p
      class="mt-2 text-primaryDark font-semibold border-t-2 border-secondary p-4 pt-8 flex flex-col">
      Programs
      <a
        href="/programs"
        class="text-sm font-medium font-gray-400"
      >
        All Programs
      </a>
      <a
        href="/programs/ug"
        class="text-sm font-medium font-gray-400"
      >
        UG Programs
      </a>
      <a
        href="/programs/pg"
        class="text-sm font-medium font-gray-400"
      >
        PG Programs
      </a>
      <a
        href="/research"
        class="text-sm font-medium font-gray-400"
      >
        Research
      </a>
      <a href="/iirc" class="text-sm font-semibold font-gray-400">
        IIRC
      </a>
    </p>
    <p class="mt-2 text-primaryDark font-semibold border-t-2 border-secondary border-b-2 p-4 flex flex-col ">
       Misclaneous
      <a href="/blogs" class="text-sm font-medium font-gray-400">
        Blogs
      </a>
      <a href="/events" class="text-sm font-medium font-gray-400">
        Events
      </a>
      <a href="/news" class="text-sm font-medium font-gray-400">
        News
      </a>
      <a
        href="/gallery"
        class="text-sm font-medium font-gray-400"
      >
        Image Gallery
      </a>
      <a
        href="/library"
        class="text-sm font-medium font-gray-400"
      >
        Library
      </a>
      <a
        href="/acts-and-committee"
        class="text-sm font-medium font-gray-400"
      >
        Acts and committee
      </a>
    </p>
    <p
      class="mt-2 text-primaryDark font-semibold border-t-2 border-secondary border-b-2 p-4 flex flex-col">
      <a href="/alumni" class="text-sm font-medium font-gray-400">
        Alumni
      </a>
      <a
        href="/programs/#IndustryInstituteInteractionCell"
        class="text-sm font-medium font-gray-400"
      >
        IIIC
      </a>
      <a href="/campus" class="text-sm font-medium font-gray-400">
        JNEC Campus
      </a>
      <a
        href="/about/#AboutJNEC"
        class="text-sm font-medium font-gray-400"
      >
        About JNEC
      </a>
      <a
        href="/downloads"
        class="text-sm font-medium font-gray-400"
      >
        Downloads
      </a>
      <a href="/search" class="text-sm font-medium font-gray-400">
        Search
      </a>
    </p>
  </div>
  <div class="mt-12 w-full mx-4 flex justify-center items-center flex-col">
    <img
    src={logo}
      class="object-contain h-32 w-full"
        alt="Deogiri Institute of Engineering And Management Studies"
    />
    <div class="mt-4 w-full h-full flex flex-col items-center justify-center text-primaryDark text-center">
      <p class="text-lg font-bold tracking-normal capitalize">
      Deogiri Institute of Engineering And Management Studies</p>
      <p class="text-xs">
       A constituent College of Marathwada Shikshan Prasarak Mandal,</p>
      <p class="text-xs">Chhatrapati Sambhajinagar, Maharashtra -431005</p>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Mobile
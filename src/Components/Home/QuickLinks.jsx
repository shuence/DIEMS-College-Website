import React from "react";

const QuickLinks = () => {
  return (
    <div className="relative py-4 m-6 bg-gray-300 rounded overflow-hidden shadow-md">
      <div data-v-3c104230="" class="mt-10">
        <hr class="mb-4 border-t-2 border-secondary text-primaryDark" />
        <div class="flex justify-center">
          <p class="text-base lg:text-lg font-medium  text-center absolute tracking-widest rounded bg-white py-2 px-6 -mt-10 text-primaryDark">
            QUICK LINKS
          </p>
        </div>
        <div class="px-8 lg:px-6 py-8 w-full text-sm flex flex-col lg:flex-row mt-4 mr-4">
          <div class="w-full lg:w-1/2 h-full">
            <div class="flex flex-row h-full">
              <div class="w-full lg:w-1/2">
                <div class="flex h-full items-start justify-start">
                  <div class="flex px-8 flex-col text-xs text-black lg:text-sm space-y-1 lg:space-y-2">
                    <a
                      href="/"
                      aria-current="page"
                      class="active--exact active"
                    >
                      Home
                    </a>
                    <a href="/admissions" class="">
                      DIEMS Admissions
                    </a>
                    <a href="/admissions/#FirstYear" class="">
                      FY Admissions
                    </a>
                    <a href="/admissions/#DirectSecondYear" class="">
                      Direct SY Admissions
                    </a>
                    <a href="/admissions/#PostGradAdmissions" class="">
                      PG Admissions
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="flex h-full items-start justify-start">
                  <div class="flex flex-col text-xs text-black lg:text-sm space-y-1 lg:space-y-2">
                    <a href="/programs" class="">
                      Programs
                    </a>
                    <a href="/programs/#UGPrograms" class="">
                      Undergraduate Programs
                    </a>
                    <a href="/programs/#PGPrograms" class="">
                      Postgraduate Programs
                    </a>
                    <a href="/programs/#AcademicCalendar" class="">
                      Academic Calendar
                    </a>
                    <a
                      href="/programs/#IndustryInstituteInteractionCell"
                      class=""
                    >
                      IIIC
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 h-full">
            <div class="flex flex-row h-full">
              <div class="w-full lg:w-1/2">
                <div class="flex h-full items-start justify-start">
                  <div class="flex flex-col text-xs text-black lg:text-sm space-y-1 lg:space-y-2">
                    <a href="/placement" class="">
                      Placements
                    </a>
                    <a href="/alumni" class="">
                      Alumni
                    </a>
                    <a href="/research/#ResearchCenter" class="">
                      Research
                    </a>
                    <a href="/libray" class="">
                      Library
                    </a>
                    <a href="/gallery" class="">
                      Gallery
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="flex h-full items-start justify-start">
                  <div class="flex flex-col text-xs text-black lg:text-sm space-y-1 lg:space-y-2">
                    <a href="/iirc" class="">
                      IIRC
                    </a>
                    <a href="/blogs" class="">
                      Blogs
                    </a>
                    <a href="/events" class="">
                      Events
                    </a>
                    <a href="/news" class="">
                      News
                    </a>
                    <a href="/contact" class="">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

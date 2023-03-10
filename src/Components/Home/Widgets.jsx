import React from "react";
import notice from "../../assests/images/notice.png";
import announce from "../../assests/images/announcement.png";
import news from "../../assests/images/news.png";

const Widgets = () => {
  return (
    <div>
      <div className="overflow-hidden py-4 m-6">
        <div className="mt-4 mx-4 px-4 text-centre">
          <div className="grid grid-cols-3 lg:gap-3 ">
            {/** Cards */}
            <div className="py-5 ">
              <div className="rounded overflow-hidden shadow-lg">
                <div className="bg-gray-300 py-4">
                  <img
                    src={announce}
                    alt="Images"
                    height={50}
                    width={50}
                    className="items-centre m-auto rounded-full"
                  />
                  <span className="text-centre mt-4 text-sm">
                    <button className="coursor-pointer">
                      <p>Annoucements is that tomorrow is holiday</p>
                      <p>Annoucements </p>
                      <p>Annoucements </p>
                      <p>Annoucements </p>
                      <p>Annoucements </p>
                      <p>Annoucements </p>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="rounded overflow-hidden  shadow-lg">
                <div className="bg-gray-300 py-4">
                  <img
                    src={notice}
                    alt="Images"
                    height={50}
                    width={50}
                    className="items-centre m-auto"
                  />
                  <span className="text-centre text-sm">
                    <button className="coursor-pointer">
                      <p>Notices</p>
                      <p>Notices</p>
                      <p>Notices</p>
                      <p>Notices</p>
                      <p>Notices</p>
                      <p>Notices</p>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="rounded overflow-hidden shadow-lg">
                <div className="bg-gray-300 py-4">
                  <img
                    src={news}
                    height={50}
                    width={50}
                    alt="Images"
                    className="items-centre m-auto"
                  />
                  <span className="text-centre text-sm">
                    <button className="coursor-pointer">
                      <p>News</p>
                      <p>News</p>
                      <p>News</p>
                      <p>News</p>
                      <p>News</p>
                      <p>News</p>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;

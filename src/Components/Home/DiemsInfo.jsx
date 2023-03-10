import React from "react";
import naac from "../../assests/images/nacc.png";

const DiemsInfo = () => {
  return (
    <div className="py-4 m-6 bg-gray-300 rounded overflow-hidden shadow-md">
      <div className="flex mx-40 px-8 justify-center items-center h-full">
        <img
          src={naac}
          alt="Nacc A"
          className="mx-auto my-auto"
          height={250}
          width={300}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-black">
          Deogiri Institute Of Engineering And Management Studies,
        </h1>
        <h2 className="mt-2 text-1xl font-bold text-center text-black">
          Chhatrapati Sambhajinagar
        </h2>
        <h2 className="mt-2 text-center text-black">Founded in 2009-10 </h2>
      </div>
      <div className="mt-10 px-14 text-xl text-centre text-gray-600 ">
        <p>
          In pursuance with the policies of the Government of India to start
          Engineering colleges in emerging technologies,
          <br /> Deogiri Institute of Engineering and Management Studies is
          established at Aurangabad during the academic year 2009-10. Deogiri
          Institute of Engineering and Management Studies is affiliated to the
          Dr. Babasaheb Ambedkar Technological University, Lonere and is
          developed as per the norms of the All India Council of Technical
          Education (A.I.C.T.E.), Government of India. The Institute is
          consistently among the top institutes of Dr. B.A.M. University in
          examination results. The student-centric teaching learning
          environment, state of the art infrastructure, well-equipped
          laboratories, library stacked with good number of books, experienced
          and dedicated team of faculties are the key features of the Institute.
        </p>
      </div>
    </div>
  );
};

export default DiemsInfo;



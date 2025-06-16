import React from "react";
import TitleText from '../TitleText'

function PopularTutors() {
  return (
    <section className="p-6  bg-base-300 py-15">
      <TitleText title="Popular Tutors" subtitle="Meet Our Most Popular Tutors"></TitleText>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[85%] mx-auto">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src="https://placehold.co/600x400"
              alt="Tutor"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500 mb-2">English, IELTS Expert</p>
            <div className="flex gap-1 text-yellow-400 mb-3">★★★★☆</div>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularTutors;

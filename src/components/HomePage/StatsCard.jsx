import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";

function StatsCard({tutorials}) {

  const totalTutor = tutorials.length;

  const totalReview = tutorials.reduce((acc, curr) => {
    return acc + (Number(curr.review) || 0);
  }, 0);

  const uniqueLanguages = new Set(tutorials.map(t => t.language.toUpperCase()));
  const uniqueTutor = new Set(tutorials.map(t => t.userEmail));
  const langCount = uniqueLanguages.size;
  const tutorCount = uniqueTutor.size;

  return (
    <div className="bg-base-200 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:w-[85%] mx-auto">
        <Fade delay={500} direction="left">
          <div className="bg-blue-500 text-white rounded-md p-6 shadow-lg flex flex-col items-center">
            <i className="fa-solid fa-user-large text-5xl mb-2"></i>
            <h2 className="text-3xl font-bold">{totalTutor}</h2>
            <p className="text-lg mt-2">Tutors</p>
          </div>
        </Fade>
        <Fade delay={400} direction="left">
          <div className="bg-green-500 text-white rounded-md p-6 shadow-lg flex flex-col items-center">
            <i className="fa-solid fa-award text-5xl mb-2"></i>
            <h2 className="text-3xl font-bold">{totalReview}</h2>
            <p className="text-lg mt-2">Reviews</p>
          </div>
        </Fade>
        <Fade delay={300} direction="left">
          <div className="bg-yellow-500 text-white rounded-md p-6 shadow-lg flex flex-col items-center">
            <i className="fa-solid fa-language text-5xl mb-2"></i>
            <h2 className="text-3xl font-bold">{langCount}</h2>
            <p className="text-lg mt-2">Languages</p>
          </div>
        </Fade>
        <Fade delay={200} direction="left">
          <div className="bg-purple-500 text-white rounded-md p-6 shadow-lg flex flex-col items-center">
            <i className="fa-solid fa-users text-5xl mb-2"></i>
            <h2 className="text-3xl font-bold">{tutorCount}</h2>
            <p className="text-lg mt-2">Users</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default StatsCard;

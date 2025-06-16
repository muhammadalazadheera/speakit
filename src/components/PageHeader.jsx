import React from "react";
import {Typewriter} from "react-simple-typewriter";

function PageHeader({title, subtitle}) {
  return (
    <div
      className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('/images/banner-1.png')`,
      }}
    >
      <h1 className="text-3xl md:text-5xl text-(--primary-color) font-bold px-4 py-2 rounded">
        {title}
      </h1>
    </div>
  );
}

export default PageHeader;
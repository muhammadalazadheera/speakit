import React from "react";

function TitleText({ title, subtitle }) {
  return (
    <div className="w-[85%] mx-auto">
      <div className="mb-5">
        <h1 className="text-4xl text-center font-bold mb-2 text-(--primary-color)">
          {title}
        </h1>
        <h2 className="text-xl text-center font-bold">{subtitle}</h2>
      </div>
    </div>
  );
}

export default TitleText;
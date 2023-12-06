import { FireIcon } from "@heroicons/react/20/solid";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="border-l-2 w-[300px] border-green-500 p-3 bg-white shadow-md  rounded ">
      {/* CardHead */}
      <div className="flex flex-row justify-between items-center ">
        <img
          src="/images/Angular_full_color_logo.svg"
          className="w-9 h-9"
          alt="Project Icon"
          srcset=""
        />
        <span className="text-[#2ecc71]  text-sm bg-[#c7eed7] py-1 px-1 rounded font-semibold">
          Done
        </span>
      </div>
      {/* Project Name */}
      <div className="my-3">
        <span className="text-base text-gray-600 my-5">Angular project</span>
      </div>

      <div className="text-xs pb-1">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500
      </div>

      {/* Card Footer : Creator */}

      <div className=" my-2 flex justify-between text-xs  items-center font-semibold">
        <span className="flex gap-2  items-center">
          <div className="w-[30px] h-[30px] rounded-2xl flex items-center justify-center  bg-gray-300">
            Jn
          </div>{" "}
          John Name
        </span>
        <a href="" className="text-blue-900">
          Live Review
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

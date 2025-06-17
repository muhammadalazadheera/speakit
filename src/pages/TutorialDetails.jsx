import React, { use, useState } from "react";
import {
  MdPhoneForwarded,
  MdFavoriteBorder,
  MdShare,
  MdErrorOutline,
} from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { toast } from "react-toastify";

function TutorialDetails() {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [tutorial, setTutorial] = useState();
  const [userEmail, setUserEmail] = useState(null);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);

  const handleBook = () => {
    console.log('clicked')
    fetch("http://localhost:3000/booked", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
      body: JSON.stringify({
        tutor: tutorial.userName,
        tutorId: tutorial._id,
        title: tutorial.title,
        image: tutorial.image,
        language: tutorial.language,
        price: tutorial.price,
        tutorEmail: tutorial.userEmail,
        userEmail: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          toast.success("Tutorial Booked successfully!");
        } else {
          toast.error("Failed to Book Mark. Please try again.");
        }
      });
  };

  useEffect(() => {
    if (user && id) {
      fetch(`http://localhost:3000/tutorials/${id}`, {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTutorial(data.message);
          setLikeCount(Number(data.message.review));
        });
    }
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Tutorial Details</title>
      </Helmet>
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/images/banner-1.png')`,
        }}
      >
        <h1 className="text-3xl md:text-5xl text-(--primary-color) font-bold px-4 py-2 rounded">
          {tutorial?.title}
        </h1>
      </div>

      <div className="w-[85%] mx-auto mb-20">
        <div className="quick-listing-actions my-7">
          <ul className="flex flex-wrap items-center justify-center gap-7 px-4 py-10">
            <li className="ml-track-btn">
              <a
                href="tel:+442073361234"
                rel="nofollow"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <i className="fas fa-heart"></i>
                <span>{likeCount} likes</span>
              </a>
            </li>

            <li className="ml-track-btn">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger your modal here
                  alert("Share modal triggered");
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <MdShare size={20} />
                <span>Share</span>
              </a>
            </li>

            <li className="ml-track-btn">
              <a
                href="https://car.mylistingtheme.com/my-account/"
                className="flex items-center gap-2 text-red-600 hover:underline"
              >
                <MdErrorOutline size={20} />
                <span>Report</span>
              </a>
            </li>

            <li className="ml-track-btn">
              <a
                href="mailto:test@test.com"
                rel="nofollow"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <HiOutlineMail size={20} />
                <span>Send an email</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start flex-nowrap gap-2">
          <div className="bg-base-200 border border-(--secondary-color) rounded-lg shadow-lg p-4 w-full mb-2 md:mb-0 md:w-1/2">
            <img
              className="rounded shadow w-full"
              src={tutorial?.image}
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="p-4 shadow bg-base-300 rounded-md text-base mb-3">
              <p className="text-(--primary-color) flex items-center gap-2 mb-5">
                <FaBars size={18} /> <span>Language</span>
              </p>
              <p>{tutorial?.language}</p>
            </div>
            <div className="p-4 shadow bg-base-300 rounded-md text-base mb-3">
              <p className="text-(--primary-color) flex items-center gap-2 mb-5">
                <FaBars size={18} /> <span>Tutor</span>
              </p>
              <p>{tutorial?.userName}</p>
            </div>
            <div className="p-4 shadow bg-base-300 rounded-md text-base mb-3">
              <p className="text-(--primary-color) flex items-center gap-2 mb-5">
                <FaBars size={18} /> <span>Details</span>
              </p>
              <p>{tutorial?.description}</p>
            </div>
            <div className="p-4 shadow bg-base-300 rounded-md text-base mb-3">
              <p className="text-(--primary-color) flex items-center gap-2 mb-5">
                <FaRegMoneyBillAlt size={18} /> <span>Price</span>
              </p>
              <p>$ {tutorial?.price}</p>
            </div>
            <div className="p-4 shadow bg-base-300 rounded-md text-base mb-3">
              <button
                onClick={handleBook}
                className="btn btn-primary btn-block"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialDetails;

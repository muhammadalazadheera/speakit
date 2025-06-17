import React, { use, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FiCommand, FiHome, FiPhoneOutgoing } from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { toast } from "react-toastify";

function MyBookedTut() {
  const { user } = use(AuthContext);
  const [userEmail, setUserEmail] = useState(null);
  const [tutorial, setTutorial] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (user && userEmail) {
      fetch(`https://assignment-11-ss.vercel.app/booked/${userEmail}`, {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTutorial(data.message);
        });

        
    }
  }, [user, userEmail]);

  const handleBookmarkClick = async (id) => {
    let likeCount = 0;
    await fetch(`https://assignment-11-ss.vercel.app/tutorials/${id}`, {
      headers: {
        Authorization: "Bearer " + user.accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        likeCount = Number(data.message.review);
      });

    fetch(`https://assignment-11-ss.vercel.app/tutorials/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: likeCount + 1 }),
    }).then(() => {
      toast.success("Successfully Reviewed");
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Listings</title>
      </Helmet>
      <PageHeader title="Browse My Listings" subtitle="My Added" />

      <div className="w-[85%] mx-auto my-10">
        <div className="overflow-x-auto w-full">
          <table className="list-table table-auto w-full min-w-[1000px]">
            <tbody>
              {tutorial?.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-5">
                    No tutorial found for your account.
                  </td>
                </tr>
              )}
              {tutorial?.map((list) => (
                <tr key={list?._id} className="border-b">
                  <td className="">
                    <img
                      className="rounded-md object-cover w-[50px]"
                      src={list?.image}
                    />
                  </td>

                  <td className="text-(--secondary-color) uppercase font-bold p-3">
                    {list?.title}
                  </td>

                  <td className="text-(--secondary-color) uppercase font-bold p-3">
                    {list?.language}
                  </td>

                  <td className="p-3 whitespace-nowrap">{list.tutor}</td>

                  <td className="p-3 whitespace-nowrap">
                    <i className="fas fa-money-bill mr-1 "></i> ${list.price}
                  </td>

                  <td className="p-3">
                    <Link
                      to={`/tutorial-details/${list?.tutorId}`}
                      className="btn btn-primary btn-outline duration-150 mr-2 py-2 px-2 rounded"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => handleBookmarkClick(list.tutorId)}
                      className="btn btn-primary btn-outline"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyBookedTut;

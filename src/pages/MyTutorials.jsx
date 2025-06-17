import React, { use, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FiCommand, FiHome, FiPhoneOutgoing } from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

function MyTutorials() {
  const { user } = use(AuthContext);
  const [userEmail, setUserEmail] = useState(null);
  const [tutorial, setTutorial] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);



  useEffect(() => {
    if (user && userEmail) {
      fetch(`http://localhost:3000/my-tutorials/${userEmail}`, {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTutorial(data.message)
        });
    }
  }, [user, userEmail]);

  const deleteListing = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`https://matematch-five.vercel.app/listings/${id}`, {
          method: "DELETE",
        }).then(() => {
          const filtered = listings.filter((list) => list._id !== id);
          setListings(filtered);
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your list has been deleted.",
          icon: "success",
        });
      }
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

                  <td className="p-3 whitespace-nowrap">
                    <i className="fas fa-money-bill mr-1 "></i> ${list.price}
                  </td>

                  <td className="p-3 whitespace-nowrap">
                    <i className="fas fa-heart mr-1 "></i> {list.review}
                  </td>

                  <td className="p-3 w-[30%]">
                    <Link
                      to={`/tutorial-details/${list?._id}`}
                      className="btn btn-primary btn-outline duration-150 py-2 px-2 rounded"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/edit-listing/${list?._id}`}
                      className="btn btn-warning btn-outline mx-2 duration-150 py-2 px-2 rounded"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={(e) => {
                        deleteListing(e, list?._id);
                      }}
                      className="btn btn-error btn-outline duration-150 py-2 px-2 rounded"
                    >
                      Delete
                    </Link>
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

export default MyTutorials;

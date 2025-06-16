import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useLoaderData, useParams } from "react-router";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

function EditTutorial() {
  const { user } = use(AuthContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(" ")

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
    }
  }, [user]);

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
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/tutorials/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + user.accessToken
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        if (data.status === 200) {
          toast.success("Tutorial added successfully!");
        } else {
          toast.error("Failed to add tutorial. Please try again.");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Edit Listing</title>
      </Helmet>
      <PageHeader title="Add A Room Listing" subtitle="Add A" />

      <form
        onSubmit={handleSubmit}
        className="relative w-[85%] mx-auto p-6 my-10 bg-base-300 rounded-lg shadow space-y-6"
      >
        <div
          className={`${
            loader ? "block" : "hidden"
          } w-full h-full bg-black/50 absolute top-0 left-0 z-10 flex justify-center items-center`}
        >
          <span className="loading loading-ring loading-xl"></span>
        </div>

        <div>
          <label className="block font-medium mb-1">User Name</label>
          <input
            name="userName"
            value={userName}
            type="text"
            readOnly
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input
            name="userEmail"
            value={userEmail}
            type="email"
            readOnly
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={tutorial?.title}
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Language</label>
          <input
            type="text"
            name="language"
            defaultValue={tutorial?.language}
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={tutorial?.price}
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={tutorial?.description}
            rows="8"
            cols="8"
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tutorial? Image</label>
          <input
            name="image"
            defaultValue={tutorial?.image}
            type="text"
            required
            className="w-full input input-primary"
          />
        </div>

        <button className="w-full btn btn-primary">Submit Listing</button>
      </form>
    </div>
  );
}

export default EditTutorial;

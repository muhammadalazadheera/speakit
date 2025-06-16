import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";

function AddTutorial() {
  const { user } = use(AuthContext);
  const [userName, setUserName] = useState(" ");
  const [userEmail, setUserEmail] = useState(" ");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setLoader(true);
    console.log(data);

    fetch("https://matematch-five.vercel.app/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        e.target.reset();
        if (data.status === 200) {
          toast.success("Tutorial added successfully!");
        } else {
          toast.error("Failed to add tutorial. Please try again.");
        }
      });
  };

  return (
    <div>
      <PageHeader title="Add A New Course" />
      <Helmet>
        <title>Add Listing</title>
      </Helmet>
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
            required
            className="w-full input input-primary"
          />
          <input type="hidden" name="like" value="0" />
        </div>

        <div>
          <label className="block font-medium mb-1">Language</label>
          <input
            type="text"
            name="language"
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="rent"
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full input input-primary"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tutorial Image</label>
          <input
            name="image"
            type="text"
            required
            className="w-full input input-primary"
          />
        </div>

        <button className="w-full btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddTutorial;

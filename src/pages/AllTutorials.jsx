import React from "react";
import PageHeader from "../components/PageHeader";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
import { useState } from "react";

function AllTutorials() {
  const { message} = useLoaderData()
  const [query, setQuery] = useState('');

  const filtered = message.filter((item) =>
    item.language.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>All Tutorials</title>
      </Helmet>
      <PageHeader title="Browse All Tutorials" />
      <div className="w-[85%] mx-auto my-10">
        <div className="overflow-x-auto w-full">
          <div className="mb-2">
            <input onChange={(e) => setQuery(e.target.value)} value={query} className="input w-full input-primary" type="text" placeholder="Search By Language i.e. English" />
          </div>
          <table className="list-table table-auto w-full min-w-[800px]">
            <tbody>
              {
                filtered.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center p-5">
                      No listings found.
                    </td>
                  </tr>
                )
              }
              {filtered.map((list) => (
                <tr key={list._id}
                  className="border-b"
                >
                  <td className="p-3 whitespace-nowrap">
                    <img
                      className="rounded-md object-cover w-[50px]"
                      src={list.image}
                    />
                  </td>

                  <td className="text-(--secondary-color) uppercase font-bold p-3">
                    {list.title}
                  </td>

                  <td className="text-(--secondary-color) uppercase font-bold p-3">
                    {list.userName}
                  </td>

                  <td className="text-(--secondary-color) uppercase font-bold p-3">
                    {list.language}
                  </td>

                  <td className="p-3 whitespace-nowrap">
                    <i className="fas fa-money-bill mr-1 "></i> ${list.price}
                  </td>

                  <td className="p-3 whitespace-nowrap">
                    <i className="fas fa-heart mr-1 "></i> {list.review}
                  </td>

                  <td className="p-3 w-[20%]">
                    <Link
                      to={`/tutorial-details/${list._id}`}
                      className="btn btn-primary btn-outline btn-block duration-150 py-2 px-2 rounded"
                    >
                      Details
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

export default AllTutorials;
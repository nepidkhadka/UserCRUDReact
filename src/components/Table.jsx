import React, { useContext, useState } from "react";
import usersContext from "../context/usersContext";
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";

const Table = () => {
  const { users, setUsers } = useContext(usersContext);
  const nav = useNavigate()
  
  // Pagination
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(5);
  const lastPostIndex = currentPage * postperpage;
  const firstPostIndex = lastPostIndex - postperpage;
  const currentUserData = users.slice(firstPostIndex, lastPostIndex)


  // Delete Function
  const handleDelete = (id) => { 
    let confirm = window.confirm("Delete User ?");
    if (confirm) {
      setUsers((users) => users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md p-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Added Users</h2>

        {/* Table */}
        <table className="w-full text-sm text-left rtl:text-right bg-[#2f2f2f] text-white rounded-md">
          <thead className="text-xm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #ID
              </th>
              <th scope="col" className="px-6 py-3">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date Of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Province
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" colSpan={2} className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUserData &&
              currentUserData.map((user, i) => (
                <tr key={i} className=" border-b dark:border-gray-700">
                  <td className="px-6 py-4">{user.id}</td>
                  <td>
                    {user.image && (
                      <img
                        src={user.image}
                        alt="User"
                        className="w-14 h-14 object-cover rounded-full"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 capitalize">{user.fullname}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phonenumber}</td>
                  <td className="px-6 py-4">{user.dob}</td>
                  <td className="px-6 py-4 capitalize">{user.city}</td>
                  <td className="px-6 py-4 capitalize">{user.district}</td>
                  <td className="px-6 py-4 capitalize">{user.province}</td>
                  <td className="px-6 py-4 capitalize">{user.country}</td>
                  <td className="px-6 py-4">
                    <Link to={"/update/" + user.id} className='font-medium text-yellow-600 hover:underline cursor-pointer'>Edit</Link>
                  </td>
                  <td className="px-6 py-4 cursor-pointer">
                    <a
                      onClick={() => handleDelete(user.id)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination postPerPage={postperpage} totalPosts={users.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />

      </div>

      {/* Profile Button */}

      <div className="my-6 mx-auto text-center">
        <button onClick={()=> nav("/profiles")} className="bg-yellow-500 py-3 px-5 rounded-lg border border-transparent hover:bg-transparent hover:border-white"> Profiles </button>
      </div>

    </div>
  );
};

export default Table;

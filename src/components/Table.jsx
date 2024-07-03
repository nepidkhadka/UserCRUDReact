import React, { useContext } from "react";
import usersContext from "../context/usersContext";

const Table = () => {
  const { users, setUsers } = useContext(usersContext);

  const handleDelete = (id) =>{
    let confirm = window.confirm("Delete User ?")
    if(confirm)
        {setUsers(users=>users.filter((user)=>user.id !== id))
  }
}
  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md p-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Added Users</h2>
        <table className="w-full text-sm text-left rtl:text-right bg-[#2f2f2f] text-white rounded-md">
          <thead className="text-xm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #ID
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
            {users &&
              users.map((user) => (
                <tr key={user.id} className=" border-b dark:border-gray-700">
                  {/* <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    <img src={users.image} alt="" />
                  </th> */}
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4 capitalize">{user.fullname}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phonenumber}</td>
                  <td className="px-6 py-4">{user.dob}</td>
                  <td className="px-6 py-4 capitalize">{user.city}</td>
                  <td className="px-6 py-4 capitalize">{user.district}</td>
                  <td className="px-6 py-4 capitalize">{user.province}</td>
                  <td className="px-6 py-4 capitalize">{user.country}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-yellow-600 hover:underline cursor-pointer"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 cursor-pointer">
                    <a onClick={()=>handleDelete(user.id)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

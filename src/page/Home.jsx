import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FormValidation } from "../utils/FormValidation";
import usersContext from "../context/usersContext";
import { v4 as uuidv4 } from "uuid"; 

const Home = () => {
  const {setUsers} = useContext(usersContext)
  const [countries, setCountries] = useState([]);

    //   Image Conversion
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // Formik Form Validation
  const { values, handleBlur, handleChange, handleSubmit, errors, setFieldValue, resetForm } = useFormik({
    initialValues: {
      id :uuidv4().substring(0, 10),
      fullname: "",
      email: "",
      phonenumber: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "Nepal",
      image: null,
    },
    validationSchema: FormValidation,
    onSubmit: async (values) => {
        if (values.image) {
        values.image = await convertToBase64(values.image);
      }
        setUsers((prev)=>[...prev,{...values}])
        resetForm(); 
    },
  });

  // Fetch countries data from API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-4 rounded-md ">
        {/* Heading */}
        <h2 className="text-3xl font-bold">Add User</h2>
        <p className="text-lg">Fill the form to add users</p>

        {/* User Form */}
        <form
          className="mt-4 grid items-center grid-cols-6 gap-3 bg-[#2f2f2f] p-6 rounded-md"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Full Name :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="eg. Jane Copper"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.fullname && (
              <small className="text-red-500 p-2 font-medium">
                {errors.fullname}
              </small>
            )}
            <br />
          </div>

          {/* Email */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Email :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              id="email"
              name="email"
              placeholder="eg. info@treeleaf.ai"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.email && (
              <small className="text-red-500 p-2 font-medium">
                {errors.email}
              </small>
            )}
            <br />
          </div>

          {/* Phone Number */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Phone Number :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phonenumber}
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="eg. 9876543210"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.phonenumber && (
              <small className="text-red-500 p-2 font-medium">
                {errors.phonenumber}
              </small>
            )}
            <br />
          </div>

          {/* Date Of Birth */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Date of Birth :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
              type="date"
              id="dob"
              name="dob"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.dob && (
              <small className="text-red-500 p-2 font-medium">
                {errors.dob}
              </small>
            )}
            <br />
          </div>

          {/* City */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              City :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              type="text"
              id="city"
              name="city"
              placeholder="eg. Lubhu"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.city && (
              <small className="text-red-500 p-2 font-medium">
                {errors.city}
              </small>
            )}
            <br />
          </div>

          {/* District */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="district"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              District :
            </label>

            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.district}
              type="text"
              id="district"
              name="district"
              placeholder="eg. Lalitpur"
              className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#7a7a7a] bg-inherit border"
            />
            <br />
            {errors.district && (
              <small className="text-red-500 p-2 font-medium">
                {errors.district}
              </small>
            )}
            <br />
          </div>

          {/* Province */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="province"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Province :
            </label>

            <select
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.province}
              id="province"
              name="province"
              placeholder="See"
              className="mt-2 w-full rounded-md h-10 p-2 outline-none dark:text-white border-[#7a7a7a] bg-inherit border"
            >
              <option className="bg-[#252d3c]" hidden>
                Select Your Province.......
              </option>
              <option className="bg-[#252d3c]" value="Madhesh">
                Province No. 1 (Madhesh)
              </option>
              <option className="bg-[#252d3c]" value="Bagmati">
                Province No. 2 (Bagmati Province)
              </option>
              <option className="bg-[#252d3c]" value="Lumbini">
                Province No. 3 (Lumbini Province)
              </option>
              <option className="bg-[#252d3c]" value="Koshi">
                Province No. 4 (Koshi Province)
              </option>
              <option className="bg-[#252d3c]" value="Sudurpashchim">
                Province No. 5 (Sudurpashchim Province)
              </option>
              <option className="bg-[#252d3c]" value="Gandaki">
                Province No. 6 (Gandaki Province)
              </option>
              <option className="bg-[#252d3c]" value="Karnali">
                Province No. 7 (Karnali Province)
              </option>
            </select>
            <br />
            {errors.province && (
              <small className="text-red-500 p-2 font-medium">
                {errors.province}
              </small>
            )}
            <br />
          </div>

          {/* Country */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-white dark:text-gray-200"
            >
              Country :
            </label>

            <select
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              name="country"
              id="country"
              className="mt-2 w-full rounded-md h-10 p-2 outline-none dark:text-white border-[#7a7a7a] bg-inherit border"
            >
              <option className="bg-[#252d3c]" value="Nepal">
                Nepal
              </option>
              {countries.length == 0 ? (
                <option className="bg-[#252d3c]" disabled>
                  Loading.....
                </option>
              ) : (
                countries &&
                countries.map((country, index) => (
                  <option key={index} value={country} className="bg-[#252d3c]">
                    {country}
                  </option>
                ))
              )}
            </select>
            <br />
            {errors.country && (
              <small className="text-red-500 p-2 font-medium">
                {errors.country}
              </small>
            )}
            <br />
          </div>

          {/* Image */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Image :
            </label>

            <input
              type="file"
              id="image"
              name="image"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="mt-2 w-full rounded-md h-10 p-2 outline-none border-[#252d3c] bg-inherit border"
            />
            <br />
            {errors.image && (
              <small className="text-red-500 p-2 font-medium">
                {errors.image}
              </small>
            )}
            <br />
          </div>

          {/* Action Button */}
          <div className="col-span-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white rounded-md h-10 hover:opacity-80"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

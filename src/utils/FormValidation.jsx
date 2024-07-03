import * as Yup from "yup";

export const FormValidation = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Full Name must contain only letters and spaces")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phonenumber: Yup.string()
    .matches(/^\d{7,10}$/, "Phone number must be between 7 to 10 digits")
    .required("Phone Number is required"),
  dob: Yup.string().required("Date of Birth is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  province: Yup.string().required("Province is required"),
  country: Yup.string().required("Country is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "Image must be less than 1MB", (value) => {
        return value && value.size <= 1000000;
    })  
    .test(
      "fileFormat",
      "Unsupported Format. Only PNG files are allowed.",
      (value) => value && value.type === "image/png"
    ),
});

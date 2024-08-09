import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { newsletter } from "../constants";

const FooterNewsletter = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      });
  return (
    <div className="container flex flex-col items-center">
      <h3 className="text-28px font-bold text-black">
        {newsletter.titletop}
      </h3>
      <p className="text-14px font-outfit text-black font-normal py-2">
        {newsletter.titlebottom}
      </p>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("value", values.email);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="flex items-stretch gap-2 w-2/3 max-md:w-full justify-center mt-5"
            noValidate
          >
            <div className="relative w-1/2 max-lg:w-2/3 max-sm:w-full">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address"
                className={`w-full py-4 px-2 shadow-custom-black hover:shadow-hover-black placeholder:opacity-70 transition-shadow text-opacity-85 bg-white text-black text-14px placeholder:text-13px font-semibold placeholder:text-black outline-none duration-300 ${
                  errors.email && touched.email ? "border border-red" : ""
                }`}
              />
              {errors.email && touched.email && (
                <div className="absolute top-full left-0 text-red text-12px mt-1">
                  {errors.email}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="text-12px font-semibold text-white bg-red py-4 px-6 shadow-custom-red hover:bg-hoverRed transition-colors duration-300"
            >
              <BiArrowBack className="rotate-180 text-24px" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FooterNewsletter;

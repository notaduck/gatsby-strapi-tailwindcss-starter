import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <form
        className="xs:px-10 mx-auto w-full h-full "
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="Contact Form" />

        <div className="flex xs:flex-col sm:flex-row w-full">
          <div className="space-y-2 md:w-1/2 xs:w-full sm:mr-2">
            <label className='xs:hidden md:visible' >First name</label>
            <input
              className=" block bg-gray-light hover:bg-gray-50 rounded w-full border-gray-600 border-2"
              placeholder='First name'
              type="text"
              name="first_name"
            />
          </div>

          <div className="space-y-2 md:w-1/2 xs:w-full">
            <label className='xs:hidden md:visible' >Last name</label>
            <input
              className=" block bg-gray-light hover:bg-gray-50 rounded w-full border-gray-600 border-2"
              placeholder='Last name'
              type="text"
              name="first_name"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className='xs:hidden md:visible' >Your Email</label>
          <input
            className=" block bg-gray-light hover:bg-gray-50 rounded w-full border-gray-600 border-2"
            placeholder='Email'
            type="email"
            name="email"
          />
        </div>
        <div className="space-y-2">
          <label className='xs:hidden md:visible'>Message</label>
          <textarea
            className=" block bg-gray-light hover:bg-gray-50 rounded w-full h-28 border-gray-600 border-2"
            name="message"
            placeholder='Enter message'
          />
        </div>
        <button
          className="p-3 mt-2  cursor-pointer border-gray-600 border-2 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </Layout>
  );
};

export default Contact;

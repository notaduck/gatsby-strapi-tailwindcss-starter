import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-evenly h-full'>
      <div className='bg-red-300 flex-1'>r</div>
      <div className='bg-yellow-300 flex-1'>g</div>
      <div className='bg-green-300 flex-1'>b</div>

      </div>


      {/* <form name="Contact Form" method="POST" data-netlify="true" action='/thank-you'>
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form> */}
    </Layout>
  );
};

export default Contact;

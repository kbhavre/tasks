import React from "react";

const Ques3 = () => {
  return (
    <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl px-4 py-2 text-center">
        Question 3 : Contact Form
      </h1>

      <form action="https://www.greatfrontend.com/api/questions/contact-form" method="POST">
        <label className="block mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full p-2 border rounded-md mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Ques3;

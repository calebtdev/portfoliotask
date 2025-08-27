import React from "react";

const Contactform = () => {
  return (
    <form action="" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-[#C7C7C7]">
          Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-[#C7C7C7]">
          Email
        </label>
        <input
          type="email"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-[#C7C7C7]">
          Subject
        </label>
        <input
          type="text"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-[#C7C7C7]">
          Message
        </label>
        <textarea
          row={10}
          className="bg-[#1A1A1A]  py-2 px-3 focus:outline-none rounded"
        />
      </div>
      <div>
        <button className="bg-[#D3E97A] text-black text-sm py-2 px-5 rounded-full">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Contactform;

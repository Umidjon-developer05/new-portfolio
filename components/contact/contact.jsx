import React from "react";
import Form from "./_components/Form";
import FormText from "./_components/FormText";

const Contact = () => {
  return (
    <>
      <div className="sm:mb-40 " id="Contact">
        <h1 className="text-[20px] mb-5 ">Contact</h1>
        <div className=" flex sm:justify-between w-full   gap-20 flex-wrap-reverse items-center h-[100%]">
          <FormText />
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s37oifr",
        "template_cml4b0c",
        form.current,
        "a1p-tTY9V8tVVasg7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast('Massage Send')
          console.log("massage send");
        },
        (error) => {
          console.log(error.text);
          console.log("massage not send");
        }
      );
  };
  return (
    <div className="d-flux justify-center items-center">
      <div class="hero min-h-screen bg-black">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-white">Contact Me</h1>
            <p class="py-6 text-white">
              Wright a massage to me <br></br>I can help you for all in one web
              solution.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
            <form ref={form} onSubmit={sendEmail} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  name="user_email"
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Massage</span>
                </label>
                <textarea
                  class="textarea input-bordered"
                  name="message"
                  placeholder="Massage"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

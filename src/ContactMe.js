import React from "react";

const ContactMe = () => {
  return (
    <div className="d-flux justify-center items-center">
      <div class="hero min-h-screen bg-black">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-white">Contact Me</h1>
            <p class="py-6 text-white">
              Wright a massage to me <br></br>
              I can help you for all in one web solution.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
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
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Massage</span>
                </label>
                <textarea class="textarea input-bordered" placeholder="Massage"></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-black">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

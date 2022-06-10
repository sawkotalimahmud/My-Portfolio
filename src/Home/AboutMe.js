import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-black">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/bXF57X6/16996454-1393343374072440-2519564583392101913-n-removebg-preview.png"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl text-white font-bold">About Me</h1>
            <p class="py-6 text-white">
              I'm Sawkot Ali Mahmud From Dhaka, Bangladesh.<br></br> I support my clients for a full web content with my team <br></br>
              I work heard to get my goal in 2022.
            </p>
            <a className="btn btn-black" href="https://drive.google.com/file/d/1MyPg_O0vjATSZkWjNLFly3rdx-_LFBRD/view?usp=sharing"> Download My Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

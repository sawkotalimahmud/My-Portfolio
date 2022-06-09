import React from "react";

const FirstBanner = () => {
    const img = `https://i.ibb.co/zGmkM34/4136918.jpg`
  return (
    <div>
      <div
        class="hero h-96"
        style={{backgroundImage: `url(${img})`}}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content  text-neutral-content">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <h2 className="text-4xl mb-2">I'm Sawkot Ali Mahmud</h2>
            <h4 className="text-3xl mb-2">Full Stack Junior Web Developer</h4>
            <p class="mb-5 text-2xl">
              I do web development and it's my passion, love, and addiction.  
            </p>
            <a className="btn btn-primary" href="https://drive.google.com/file/d/1MyPg_O0vjATSZkWjNLFly3rdx-_LFBRD/view?usp=sharing"> Download My CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;

import React from "react";
import SectionTitle from "../common/section-title";
import Counter from "./counter";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-lg-5">
        <SectionTitle frontText="Know Me More" backText="About Me" />

        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3">
              I'm <span className="text-primary">Ali Keskin,</span> a Web
              Developer
            </h2>
            <p>
              I have solid backend software development experience with more
              than 4 years working on the backend side with the projects I have
              done along with the intense bootcamp training. With the projects I
              have carried out, I have expanded my problem-solving experience in
              the field of software development. I have a detail oriented nature
              and work hard to ensure my work is complete and complete. Through
              my previous professional experience, I have also gained experience
              in working in a team. I have a nature that loves to learn new
              things and likes to share my experiences generously.I have solid
              backend software development experience with more than 4 years
              working on the backend side with the projects I've done along with
              the intense bootcamp training have performed. With the projects I
              have carried out, I have expanded my problem-solving experience in
              the field of software development. I have a detail oriented nature
              and work hard to ensure my work is complete and complete. Through
              my previous professional experience, I have also gained experience
              in working in a team. I have a nature that loves to learn new
              things and likes to share my experiences generously.
            </p>
            <p>
              Delivering work within time and budget which meets client`s
              requirements is our moto.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2">
                <li className="">
                  <span className="fw-600 me-2">Name:</span>Ali Keskin
                </li>
                <li className="">
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">alkeskn85@gmail.com</a>
                </li>
                <li className="">
                  <span className="fw-600 me-2">Age:</span>35
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Essen,
                  Deutschland
                </li>
              </ul>
              <a href="#" className="btn btn-primary rounded-pill">
                Download CV
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="brands-grid separator-border mt-5">
          <div className="row">
            <div className="col-6 col-md-3">
              <Counter name="Years Experiance" value="10" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Happy Clients" value="250" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Projects Done" value="650" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Get Awards" value="20" sign="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="heading1">About me</h1>
      </div>
      <div className="about-body">
        <p>
          I created this site as a way to keep track of my progress as a full
          stack developer, both for myself and for anyone else who may have
          taken an interest. I plan to add a blog section to the site as soon as
          possible, where I will share my experiences about my journey.
        </p>
        <p>
          Having been a tech enthusiast my whole life, and more recently a
          coding enthusiast, I am seeking an opportunity to enter into the
          software development industry. This has always been a dream of mine
          that I am now taking practical steps towards achieving. I am a
          certified software tester (ISTQB - foundation level) and enjoy coding
          whenever I have a spare moment. I have been learning to code over the
          past few months through Udemy and various other sources. I have
          aspirations to become a software developer.
        </p>
        <p>
          My medium-long term goal is to register for and complete a BSc in
          Computing or Informatics, as well as to become a competent full stack
          developer. Please have a look at{" "}
          <a href="https://github.com/markgietl">my GitHub account</a> which
          contains a few small projects I have been working as a demonstration
          of my current competency level. My legal, teaching as well as
          entrepreneurial background gives me a well-rounded outlook and has
          allowed me to develop exceptional interpersonal skills along with
          written/spoken communication skills.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from 'react'
import SectionTitle from '../common/section-title';
import ResumeCard from './resume-card';
import Skill from './skill';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container px-lg-5">
        <SectionTitle frontText="Resume" backText="Summary" />
        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">My Education</h2>
            <ResumeCard
              date="2005 - 2010"
              title=""
              subTitle="International University"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2005 - 2010"
              title="Bachelor Degree"
              subTitle="University of Marmara"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2016 - 2018"
              title="Master Degree"
              subTitle="Okan University"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">My Experience</h2>
            <ResumeCard
              date="2012 - 2013"
              title="Jr. Java Developer"
              subTitle="TechPro"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2014 - 2016"
              title="Java Developer"
              subTitle="Dribbble"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2017 - 2019"
              title="Java Developer"
              subTitle="Java"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>
        </div>

        <h2 className="text-6 fw-600 mt-4 mb-4">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <Skill name="Java" value="90" />
            <Skill name=" Spring Boot" value="80" />
            <Skill name=" Spring MVC" value="80" />
            <Skill name="Junit test" value="70" />
            <Skill name=" SQL" value="80" />
            <Skill name="Hibernat" value="75" />
            <Skill name="MongoDb" value="80" />
          </div>
          <div className="col-md-6">
            <Skill name="MultiThread" value="80" />
            <Skill name="React js" value="70" />
            <Skill name="Sass" value="90" />
            <Skill name="Bootstrap" value="99" />
            <Skill name="HTML/CSS" value="95" />
            <Skill name="Javascript" value="80" />
            <Skill name="Git-Github" value="100" />
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href="#"
            className="btn btn-outline-secondary rounded-pill shadow-none"
          >
            Download CV{" "}
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
import React from "react";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const About = ({ menu }) => {
  return (
    <>
      <div className="job-info">
        {menu.map(function (curElem, index) {
          const { id, title, dates, duties, company } = curElem;
          return (
            <div>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p> {dates}</p>
              {/* <div classsName="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duties}</p>
              </div> */}
              {duties.map((item, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item}</p>
                  </div>
                );
              })}

              <div type="button" class="btn">
                more info
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default About;

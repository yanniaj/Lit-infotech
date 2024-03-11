import "./App.css";
import React, { useEffect } from "react";

function App() {
  const handleClick = (e) => {
    let clickedLi;
    if (e.target.classList.contains("accordion-text")) {
      clickedLi = e.target.parentElement;
      // console.log(clickedLi);
    } else {
      clickedLi = e.target.parentElement.parentElement;
      // console.log(clickedLi);
    }
    clickedLi.classList.toggle("showDescription");
    const button = clickedLi.querySelector(".buttonClass");
    button.innerText = button.innerText === "+" ? "-" : "+";
  };

  useEffect(() => {
    let li = document.querySelectorAll(".jobList li");

    // Attach event listeners
    li.forEach((li) => {
      li.addEventListener("click", handleClick);
    });

    // Cleanup the event listeners when the component is unmounted
    return () => {
      li.forEach((li) => {
        li.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="heading">
        <h1>We're Hiring!</h1>
      </div>
      <div className="flexContainer">
        <div className="accordion">
          <ul className="jobList">
            <li>
              <div className="accordion-text">
                <div className="jobTitle">Full Stack Developer</div>
                <button className="buttonClass">+</button>
              </div>
              <div className="jobDetails">
                <p>
                  <span>LIT INFOTECH</span> is looking for a talented Full Stack
                  Developer to join our dynamic team. If you're passionate about
                  web development and ready to take on exciting challenges, we
                  want to hear from you!
                </p>
                <h2>Responsibilities:</h2>
                <ul>
                  <li>
                    Develop and maintain both front-end and back-end of web
                    applications.
                  </li>
                  <li>
                    Collaborate with cross-functional teams to design and
                    implement new features.
                  </li>
                  <li>Optimize applications for speed and scalability.</li>
                </ul>
                <h2>Qualifications:</h2>
                <ul>
                  <li>Proficient in HTML, CSS, and JavaScript.</li>
                  <li>
                    Experience with front-end frameworks (React, Angular, or
                    Vue.js) and back-end frameworks (Node.js, Express).
                  </li>
                  <li>Knowledge of database systems (MySQL, MongoDB).</li>
                </ul>
                <p>
                  If you're ready to make an impact, apply now by emailing
                  careers@litinfotech.co.uk with your CV.
                </p>
              </div>
              <span className="line"></span>
            </li>
            <li>
              <div className="accordion-text">
                <div className="jobTitle">Data Scientist</div>
                <button className="buttonClass">+</button>
              </div>
              <div className="jobDetails">
                <p>
                  <span>LIT INFOTECH</span> is looking for a talented Full Stack
                  Developer to join our dynamic team. If you're passionate about
                  web development and ready to take on exciting challenges, we
                  want to hear from you!
                </p>
                <h2>Responsibilities:</h2>
                <ul>
                  <li>
                    Perform exploratory data analysis (EDA) to identify patterns
                    and trends in datasets.
                  </li>
                  <li>
                    Collaborate with senior data scientists to contribute to the
                    development and implementation of machine learning models.
                  </li>
                  <li>
                    Clean and preprocess raw data to ensure its accuracy,
                    completeness, and suitability for analysis.
                  </li>
                  <li>
                    Support in developing and maintaining efficient data
                    pipelines.
                  </li>
                </ul>
                <h2>Qualifications:</h2>
                <ul>
                  <li>
                    Bachelor's or Master's degree in a relevant field such as
                    Computer Science, Statistics, or Data Science.
                  </li>
                  <li>
                    Proficiency in programming languages such as Python or R for
                    data analysis and scripting.
                  </li>
                  <li>
                    Strong analytical and problem-solving skills with an ability
                    to think critically about data-related challenges.
                  </li>
                </ul>
                <p>
                  If you're ready to make an impact, apply now by emailing
                  careers@litinfotech.co.uk with your CV.
                </p>
              </div>
              <span className="line"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

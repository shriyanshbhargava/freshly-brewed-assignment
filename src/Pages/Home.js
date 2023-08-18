import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import ProgressBar from "../Components/Progress Bar/ProgressBar";

const Home = () => {
  return (
    <div className="home">
      <h2 className="head">Featured Courses</h2>
      <div className="home-containers">
        <div className="container">
          <img
            className="con-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <span className="course-level">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;Beginner's
          </span>

          <div className="lower-part">
            <p>Music News</p>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 1h 53m
            </span>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 4.5/5
            </span>
            <button className="start-button">Start</button>
          </div>
        </div>
        <div className="container">
          <img
            className="con-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <span className="course-level">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;Beginner's
          </span>

          <div className="lower-part">
            <p>Music News</p>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 1h 53m
            </span>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 4.5/5
            </span>
            <button className="start-button">Start</button>
          </div>
        </div>
        <div className="container">
          <img
            className="con-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <span className="course-level">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;Beginner's
          </span>

          <div className="lower-part">
            <p>Music News</p>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 1h 53m
            </span>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 4.5/5
            </span>
            <button className="start-button">Start</button>
          </div>
        </div>
        <div className="container">
          <img
            className="con-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <span className="course-level">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;Beginner's
          </span>

          <div className="lower-part">
            <p>Music News</p>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 1h 53m
            </span>
            <span className="course-details">
              <FontAwesomeIcon icon={faUser} width={10} />
              &nbsp; 4.5/5
            </span>
            <button className="start-button">Start</button>
          </div>
        </div>
      </div>

      {/* containers section ended */}

      <h2 className="head">Latest News</h2>
      <div className="home-containers">
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
        <div className="news-category">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <p className="news-head">Musicians</p>
        </div>
      </div>
      {/* ------------------------MY PROGRESS----------------------- */}
      <h2 className="head">My Progress</h2>
      <div className="home-containers">
        
        <div className="progress-div">
          <img
            className="progress-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <button className="bookmark">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
          </button>
          <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
            Learning Piano Basics
            <p style={{ fontSize: "10px" }}> Author Name</p>
            <div style={{ paddingTop: "20px" }}>
              <ProgressBar />
            </div>
            <p style={{ fontSize: "12px" }}> 46% Complete</p>
          </span>
        </div>
        <div className="progress-div">
          <img
            className="progress-image"
            src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loading"
          ></img>
          <button className="bookmark">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
          </button>
          <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
            Learning Piano Basics
            <p style={{ fontSize: "10px" }}> Author Name</p>
            <div style={{ paddingTop: "20px" }}>
              <ProgressBar />
            </div>
            <p style={{ fontSize: "12px" }}> 46% Complete</p>
          </span>
        </div>
      </div>
      <button className="view-button"> View All</button>
    </div>
  );
};

export default Home;

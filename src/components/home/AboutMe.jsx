import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import ReactPlayer from 'react-player'
import myShowVideo from '../../assets/video/个人简介.mp4'
const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);
  const pics = {
    display:'flex',
    justifyContent: 'space-around',
    marginBottom:'50px',
    marginTop:'20px'
  }
  const xxContainer = {
    position: 'relative',
    // paddingBottom: '57.5%' /* 假设视频宽高比为16:9，则设置为 9/16 = 0.5625 */
  }
  return (
    <Jumbotron  className="m-0">
      <div className="container row">
        <div className="col-5 d-lg-block" style={xxContainer}>
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={require("../../assets/feature/xiaoxiang.jpg")}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${true ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead" style={{ textAlign: 'justify'}}>{message}</p>
          {/* 简历按钮 */}
          {/* {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )} */}
        </div>
        <div style={{position:"relative",margin:'auto',width:'640px',height:'368px'}}>
          {/* <ReactPlayer url={myShowVideo } controls style={{margin:'auto',width:'640px',height:'368px'}}/> */}
          <video className='myVideo'
          src={require("../../assets/video/个人简介.mp4")}
          controls>
          </video>
        </div>

        <div style={pics}>
          <img style={{width:'500px',borderRadius:'20px'}} src={require("../../assets/newImg/图片1.png")}></img>
          <img style={{width:'500px',borderRadius:'20px'}} src={require("../../assets/newImg/图片2.png")}></img>
          </div>
          <div style={{display:'flex',justifyContent: 'space-around'}}>
          <img style={{width:'500px',borderRadius:'20px'}} src={require("../../assets/newImg/图片3.png")}></img>
          <img style={{width:'500px',borderRadius:'20px'}} src={require("../../assets/newImg/图片4.png")}></img>
          </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;

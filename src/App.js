import React from "react";
import { Route, Routes ,Navigate, HashRouter,BrowserRouter } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Statement from "./components/home/Statement.jsx";
// import Experience from "./components/home/Experience";
import Background from "./components/home/Background.jsx";
import SignUp from "./components/home/SignUp.jsx";
import Caseofathlete from "./components/home/Caseofathlete.jsx"
import WhyNeeded from "./components/home/WhyNeeded.jsx";
import SignupModel from "./components/home/SignupModel.jsx";
const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      <Statement></Statement>
    
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      <Background></Background>
      <SignUp></SignUp>
    </>
  );
});
const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename='/AthletesHealingCenter'>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/caseofathletes"  element={<Caseofathlete ref={titleRef} />} />
        <Route path="/whyNeeded"  element={<WhyNeeded ref={titleRef} />} />
        <Route path="/signupModel" element={<SignupModel ref={titleRef} />} />
        {/* <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + "/"} replace />} /> 路径未匹配时重定向到首页 */}
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;

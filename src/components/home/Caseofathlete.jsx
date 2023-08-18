import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const Caseofathlete = React.forwardRef(
    ({}, ref) => {
        const card = {
            borderRadius:'20px',
            backgroundColor:'#f3f3f3',
            width:'100%',
            overflow:'hidden',
            display:'flex',
            marginBottom:'30px'
        }
        const content ={
            textAlign: 'justify',
            margin:'10px 10px 0 10px'
        }
        const title1 = {
            color:'#00aeb3',
            fontSize:'25px',
            fontWeight:'700'
        }
        const title2 = {
            fontSize:'25px',
            fontWeight:'700'
        }
  return (
    <Jumbotron
        fluid
        id="home"
      >
        <Container>
      <h2 ref={ref} className="display-4 pb-3 text-center">
        Cases of athletes recovering from mental health problems with psychotherapy: </h2>
      <div style={card}>
          <img style={{width:'500px'}} src={require("../../assets/athletes/图片1.png")}></img>
          <div style={content}>
            <span style={title1}>1.{')'}</span>
            <span style={title2}>Michael Jordan (Basketball): “Michael Jordan’s mental game, conquering challenges on and off the court”</span>
          <p className="lead pb-3" style={{marginBottom:'0px'}}>
          Michael Jordan was widely regarded as one of the greatest basketball players of all time, however, he struggled with anxiety and insomnia during his playing career. Even though MJ has not spoken publicly about his experiences with mental health issues, there have been reports that he turned to meditation and mindfulness practices to help him cope with the intense pressure and stress of his career. Through Michael Jordan, it was proven that mental health and performance are interconnected, and that addressing mental health challenges can have a positive impact on athletic performance and overall quality of life.
            </p>
          </div>
      </div>
      <div style={card}>
          <div style={content}>
            <span style={title1}>2.{')'}</span>
            <span style={title2}>Tiger Woods (Golf) “Rising above the Rough: Tiger Woods' Journey Through Mental Health Challenges"</span>
          <p className="lead pb-3" style={{marginBottom:'0px'}}>
          Tiger Woods was regarded as one of the greatest golfers and has won numerous championships and broken numerous records over the course of his career. Tiger Woods has struggled with various mental health issues throughout his career, including anxiety, depression, and sleep disorders. There have been multiple events during his professional career in which he must face media scrutiny and personal turmoil. Tiger Woods subsequently underwent therapy and has spoken openly about his struggles with mental health and addiction. He has been an advocate for mindfulness meditation and has credited it with helping him to stay focused and calm during high-pressure situations.
            </p>
          </div>
          <img style={{width:'500px'}} src={require("../../assets/athletes/图片2.png")}></img>
      </div>
      <div style={card}>
          <img style={{width:'500px'}} src={require("../../assets/athletes/图片3.png")}></img>
          <div style={content}>
            <span style={title1}>3.{')'}</span>
            <span style={title2}>Theoren Fleury (Hockey) “Theo Fleury’s comeback, overcoming trauma and addiction through mental health treatment”</span>
          <p className="lead pb-3" style={{marginBottom:'0px'}}>
          Theo Fleury was an NHL all-star 7 times from 1988 to 2003 throughout his professional Hockey career. He has been a vocal advocate for mental health awareness and support, particularly regarding the effects of childhood trauma and abuse. He struggled with addiction and mental health challenges throughout his career and has spoken openly about the lasting impact of the mental illness he suffered. In his book “Playing with fire,” Fleury details his experiences including his struggles with depression, anxiety, and PTSD. He has credited therapy and other forms of support with helping him to manage his mental health and has been an outspoken advocate for mental health treatment and support within the hockey community.
            </p>
          </div>
      </div>
      <div style={card}>
          <div style={content}>
            <span style={title1}>4.{')'}</span>
            <span style={title2}>Demar Derozan (Basketball) “Beyond basketball, Demar Derozan’s battle with depression and the fight for mental health awarness”</span>
          <p className="lead pb-3" style={{marginBottom:'0px'}}>
          Demar Derozan was one of the most open athletes regarding his struggles with mental health issues, particularly depression and anxiety. Despite his success on the court, DeRozan has faced significant challenges related to his mental health. In 2018, he opened up about his struggles with depression in an interview, in which he revealed that he had been diagnosed with depression several years earlier. He talked about the issues of mental illness in the sports world, and he urged others who are struggling with mental health issues to seek help and support. DeRozan has worked to raise awareness of the importance of mental health and has encouraged others to speak out about their own experiences with mental illness.
            </p>
          </div>
          <img style={{width:'450px'}} src={require("../../assets/athletes/图片4.png")}></img>
      </div>
      <div style={card}>
          <img style={{width:'500px'}} src={require("../../assets/athletes/图片5.png")}></img>
          <div style={content}>
            <span style={title1}>5.{')'}</span>
            <span style={title2}>Simone Biles (gymnast): “Simone Biles’ powerful journey to prioritizing mental health in elite athletics”</span>
          <p className="lead pb-3" style={{marginBottom:'0px'}}>
          Simone Biles is a world-renowned gymnast who has been very open about her struggles with mental health issues, particularly anxiety and depression. In the 2020 Tokyo Olympics, Biles made the difficult decision to withdraw from several events, citing mental health concerns and a need to prioritize her well-being. Simone Biles’ decision to prioritize her mental health received both positive support and criticism. Biles spoke openly about the pressure and stress that come with competing at the highest levels of gymnastics, and she highlighted the need for athletes to prioritize their mental health and well-being in order to perform at their best. Simone Biles’ story is a powerful example of the impact that mental health issues can have on professional athletes, and it is important seeking for help.
            </p>
          </div>
      </div>
    </Container>
      </Jumbotron>
  );
});

export default Caseofathlete;

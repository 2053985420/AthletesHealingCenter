import React from "react";
import Container from "react-bootstrap/Container";
import ScrollToTopButton from './Backtotop';

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#1F242E" ,
  height:'230px',
  paddingTop:'20px ',
  paddingBottom:'20px ' 
};
  const h2 = {
    color:'white',
    fontWeight:900
  }
  const p = {
    color:'white',
  }
  const backTop={

    // color: #2a313e,
    // font-family: rawline,sans-serif,
    // font-style: normal,
    // letter-spacing: .05em,
    // font-weight: 400,
    // box-sizing: border-box,
    display: 'block',
    zIndex: 100,
    width: '34px',
    height: '34px',
    textAlign: 'center',
    fontSize: '16px',
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    lineHeight: '32px',
    backgroundColor: '#a0a0a0',
    borderRadius: '50%',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none'
  }
  return (
    <>
    
    <footer style={bgStyle} className="mt-auto">
      <Container>
      <div>
        <h2 className="display-4 pb-3" style={h2}>Contact</h2>
        <p className="lead" style={p}>president: <a className="text-decoration-none" href={'mailto:Vic.qgh@gmail.com'}>Vic.qgh@gmail.com</a></p>
        <p className="lead" style={p}>charity manager: <a className="text-decoration-none" href={'mailto:markmo0813@gmai.com'}>markmo0813@gmai.com</a></p>
      </div>
      {/* <div className={'col-lg-6'}>
      <h2 className="display-4 pb-3">Quick links</h2>
      </div> */}
      </Container>
      {/* {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p> */}
        <ScrollToTopButton></ScrollToTopButton>
    </footer>
    </>
  );
};

export default Footer;

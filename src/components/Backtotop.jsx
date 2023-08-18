import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，控制按钮显示与隐藏
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 处理点击按钮事件，滚动到页面顶部
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 注册滚动事件监听
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={handleButtonClick}
    >
      <FontAwesomeIcon icon={faArrowUp} style={{width:'16px'}}/>
    </div>
    {/* <div id="back-to-top" style={backTop}>
      <a href="#top"><span class="material-symbols-rounded">expand_less</span>
    </a></div> */}
    </>
  );
};

export default ScrollToTopButton;

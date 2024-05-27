import { useState, useEffect } from 'react';

const DownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const detectScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', detectScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="down-arrow-container" onClick={handleClick}>
          <div className="down-arrow"></div>
        </div>
      )}
    </>
  );
};

export default DownArrow;

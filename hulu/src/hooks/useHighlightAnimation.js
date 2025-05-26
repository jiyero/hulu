import { useState, useEffect } from "react";

const useHighlightAnimation = (activeKey) => {
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
    const timer = setTimeout(() => setAnimateContent(false), 600);
    return () => clearTimeout(timer);
  }, [activeKey]);

  return animateContent;
};

export default useHighlightAnimation;

import { useState, useEffect } from "react";
import "./index.less";

const Header = () => {
  let myHeight = 300;
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(window.scrollY <= myHeight);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos <= myHeight;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(currentScrollPos <= myHeight);
      }, 1000); // 2秒延迟显
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [prevScrollPos, myHeight]);

  return (
    <div className={`headerContainer ${!visible ? "headerHide" : ""}`}>
      <div className="logo">Cosvast</div>
      <div className="headerRight">
        <div className="nav-item">关于我们</div>
        <div className="nav-item">我们的产品</div>
        <div className="nav-item">新闻动态</div>
        <div className="nav-item">企业社会责任</div>
        <div className="nav-item">加入我们</div>
      </div>
    </div>
  );
};

export default Header;

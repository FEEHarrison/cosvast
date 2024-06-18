import { useState, useEffect } from "react";
import "./index.less";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`headerContainer ${scrollY >= 200 ? "headerHide" : ""}`}>
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

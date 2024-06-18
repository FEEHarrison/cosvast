import "./index.less";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="logo">logo</div>
      <div className="nav-wrapper">
        <div className="nav-item">
          <div className="title">关于我们</div>
          <div>
            <div className="none">企业文化</div>
          </div>
          <div>
            <div className="none">行为准则</div>
          </div>
          <div>
            <div className="none">大事记</div>
          </div>
          <div>
            <div className="none">我们的产品</div>
          </div>
          <div>
            <div className="none">联系我们</div>
          </div>
        </div>
        <div className="nav-item">
          <div className="title">新闻动态</div>
          <div>
            <div className="none">公司新闻</div>
          </div>
          <div>
            <div className="none">数据报告</div>
          </div>
        </div>
        <div className="nav-item">
          <div className="title">企业社会责任</div>
          <div>
            <div className="none">社会责任动态</div>
          </div>
          <div>
            <div className="external">星图无疆公益官网</div>
          </div>
        </div>
        <div className="nav-item">
          <div className="title">加入我们</div>
          <div>
            <div className="external">招聘官网</div>
          </div>
        </div>
      </div>
      <div className="footerBox">
        <div className="locale-select">12345</div>
        <div className="copyright-wrapper">
          <div className="copyright">© 2020-2024 星图无疆</div>
          <div className="copyright-icp">
            <img
              src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/icp-9ca98112ae9d12370794027a9b22b221.png"
              className="copyright-icp-logo"
              alt="cosvast"
            ></img>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002068"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright-icp-text"
            >
              蜀ICP备2024080778号
            </a>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright-icp-text"
            >
              蜀ICP备2024080778号-1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

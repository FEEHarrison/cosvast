import { Carousel } from "antd";
import "./index.less";

const CultureSlider = () => {
  return (
    <div id="CultureSlider">
      <Carousel dots={false} arrows>
        <div className="sliderItem">
          <img
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/zh-3-5dbfa39699d9bbf71d42a40186595419.jpg"
            alt=""
          />
          <div className="itemDesc">
            <div className="title">多元兼容</div>
            <ul className="desc-container">
              <li className="desc">欣赏个体多样性，聚焦人的核心特质</li>
              <li className="desc">全球视角，理解不同文化、观点和实践</li>
              <li className="desc">善意假设，默认开放信任，有效合作</li>
            </ul>
          </div>
        </div>
        <div className="sliderItem">
          <img
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/zh-3-5dbfa39699d9bbf71d42a40186595419.jpg"
            alt=""
          />
          <div className="itemDesc">
            <div className="title">多元兼容</div>
            <ul className="desc-container">
              <li className="desc">欣赏个体多样性，聚焦人的核心特质</li>
              <li className="desc">全球视角，理解不同文化、观点和实践</li>
              <li className="desc">善意假设，默认开放信任，有效合作</li>
            </ul>
          </div>
        </div>
        <div className="sliderItem">
          <img
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/zh-3-5dbfa39699d9bbf71d42a40186595419.jpg"
            alt=""
          />
          <div className="itemDesc">
            <div className="title">多元兼容</div>
            <ul className="desc-container">
              <li className="desc">欣赏个体多样性，聚焦人的核心特质</li>
              <li className="desc">全球视角，理解不同文化、观点和实践</li>
              <li className="desc">善意假设，默认开放信任，有效合作</li>
            </ul>
          </div>
        </div>
        <div className="sliderItem">
          <img
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/zh-3-5dbfa39699d9bbf71d42a40186595419.jpg"
            alt=""
          />
          <div className="itemDesc">
            <div className="title">多元兼容</div>
            <ul className="desc-container">
              <li className="desc">欣赏个体多样性，聚焦人的核心特质</li>
              <li className="desc">全球视角，理解不同文化、观点和实践</li>
              <li className="desc">善意假设，默认开放信任，有效合作</li>
            </ul>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CultureSlider;

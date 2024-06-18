import { Carousel } from "antd";
import "./index.less";

const Slider = () => {
  return (
    <div>
      <Carousel autoplay dots={true} className="SliderStyle">
        <div className="sliderItem">
          <img
            style={{ width: "100%", height: "100vh", display: "inline-block" }}
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/3-9ea22bd593086f432ab75ee6c95c37de.png"
            alt=""
          />
        </div>
        <div className="sliderItem">
          <img
            style={{ width: "100%", height: "100vh", display: "inline-block" }}
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/0-390b5def140dc370854c98b8e82ad394.png"
            alt=""
          />
        </div>
        <div className="sliderItem">
          <img
            style={{ width: "100%", height: "100vh", display: "inline-block" }}
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/1-b4afd269ffb0ba19bd1dd33e3ed5cec3.png"
            alt=""
          />
        </div>
        <div className="sliderItem">
          <img
            style={{ width: "100%", height: "100vh", display: "inline-block" }}
            src="https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/2-468bb0555d827d48bce4e178f085bf90.png"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

import "./index.less";
import CultureSlider from "@/pages/Home/component/CultureSlider";

const Culture = () => {
  return (
    <section id="culture">
      <div className="cultureLeft">
        <div className="title">企业文化</div>
        <div className="desc">
          星图范是星图无疆企业文化的重要组成部分，是我们共同认可的行为准则。
        </div>
      </div>
      <div className="cultureRight">
        <CultureSlider />
      </div>
    </section>
  );
};

export default Culture;

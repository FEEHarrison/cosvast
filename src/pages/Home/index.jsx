import Header from "@/components/Header";
import Footer from "@/components/Footer/index.jsx";
import Culture from "@/pages/Home/component/Culture";
import Conduct from "@/pages/Home/component/Conduct";
import Slider from "@/components/Slider/index.jsx";
import "./index.less";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Slider />
      <Culture />
      <Conduct />
      <Footer />
    </div>
  );
};

export default Home;

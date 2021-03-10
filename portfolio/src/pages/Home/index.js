import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-column ">
            <About />
            <Testimonials />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      {/* <About />  */}
      <Projects />
      <Footer />
      <Contact />
    </>
  );
}

export default App;

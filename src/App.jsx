import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import AllCourses from "./components/AllCourses/AllCourses";
import LanguageLabOne from "./components/AllCourses/AllCoursesLanguageLab/LanguageLabOne";
import LanguageLabTwo from "./components/AllCourses/AllCoursesLanguageLab/LanguageLabTwo";
import CommunicationSkill from "./components/AllCourses/AllCoursesLanguageLab/CommunicationSkill";
import Practical from "./components/AllCourses/AllCoursesLanguageLab/Practical";

import Layout from "./components/layout/Layout";
import Mycourse from "./components/Mycourse";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allcourses" element={<AllCourses />} />
            <Route path="/language-lab-one" element={<LanguageLabOne />} />
            <Route path="/language-lab-two" element={<LanguageLabTwo />} />
            <Route path="/my-course" element={<Mycourse />} />
            <Route
              path="/communication-skill"
              element={<CommunicationSkill />}
            />
            <Route path="/practical" element={<Practical />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

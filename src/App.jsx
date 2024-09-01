import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { Link as Scroll } from "react-scroll";
import { useState } from "react";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";
function App() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", toggleVisible);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Scroll
        id="upper"
        activeClass={!visible && "non-active"}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <PiArrowFatLinesUpDuotone />
      </Scroll>
    </ThemeProvider>
  );
}

export default App;

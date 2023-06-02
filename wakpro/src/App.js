import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import MainPage from "./views/MainPage";


function Root() {

return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
</>
);
}

export default Root;
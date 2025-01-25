import {BrowserRouter,Routes,Route} from "react-router"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import AboutUsPage from "./pages/AboutUsPage"


function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

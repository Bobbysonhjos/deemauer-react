import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Discography from "./components/Discography";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Home from "./components/Home";
import Members from "./components/Members";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/members" element={<Members />} />
          {/* <Route path="/discography/:id" element={<DiscographyDetails />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

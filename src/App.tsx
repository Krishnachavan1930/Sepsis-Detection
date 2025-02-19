import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./admin/pages/Dashboard";
import About from "../src/pages/About";
import { Doctors } from "./user/pages/Doctors";
import Contact from "./pages/contact";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/admin"); // Hides for all admin routes

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/doctors" element={<Doctors></Doctors>} />
          <Route path="/contact" element={<Contact></Contact>} />

          {/*
           Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

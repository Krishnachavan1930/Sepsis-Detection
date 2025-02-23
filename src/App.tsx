import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./admin/pages/Dashboard";
import AddPatient from "./admin/pages/AddPatient";
import PatientDetails from "./admin/pages/PatientDetails";
import Profile from "./admin/pages/Profile"; // Import Profile Page
import About from "./pages/About";
import { Doctors } from "./user/pages/Doctors";
import Contact from "./pages/contact";
import Help from "./admin/pages/Help"

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin"); // Hide Navbar/Footer for admin pages

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-patient" element={<AddPatient />} />
          <Route path="/admin/patient-details" element={<PatientDetails />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/help" element={<Help />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

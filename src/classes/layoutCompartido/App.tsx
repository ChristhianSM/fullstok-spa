import { Routes, Route } from "react-router";
import PublicShell from "./PublicShell";
import DashboardShell from "./DashboardShell";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicShell />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/dashboard" element={<DashboardShell />}>
        <Route index element={<Overview />} /> {/* /dashboard */}
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

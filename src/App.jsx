import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Budget from "./pages/Budget";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full bg-slate-950 text-white">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

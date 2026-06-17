import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Transaction from "./components/Transaction";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full bg-slate-950 text-white">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Landmark } from "lucide-react";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  ChartPie,
  CreditCard,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-50 h-screen flex flex-col bg-slate-800 py-3">
      <div className="flex justify-center items-center gap-2 border-b border-slate-600 p-5">
        <Landmark className="text-blue-500" />
        <div className="text-2xl font-bold">
          Fin<span className="text-blue-500">ance</span>
        </div>
      </div>
      <div className="p-5 text-[0.9rem]">
        <div className="text-slate-400 uppercase">Menu</div>
        <ul className="my-3 space-y-3">
          <li>
            <a
              href="#"
              className="flex gap-3 p-2 w-full text-slate-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-blue-500 transition duration-100 rounded-xl"
            >
              <LayoutDashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-3 p-2 w-full text-slate-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-blue-500 transition duration-100 rounded-xl"
            >
              <CreditCard />
              Transaksi
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-3 p-2 w-full text-slate-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-blue-500 transition duration-100 rounded-xl"
            >
              <Wallet />
              Bajet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-3 p-2 w-full text-slate-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-blue-500 transition duration-100 rounded-xl"
            >
              <ChartPie />
              Laporan
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-3 p-2 w-full text-slate-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-blue-500 transition duration-100 rounded-xl"
            >
              <ArrowLeftRight />
              Transaksi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="text-slate-400">
      <div className="flex px-8 py-10">
        <div>
          <div className="flex justify-center items-center">
            <span className="text-4xl font-bold text-white">Dashboard</span>
            <span className="self-end ml-3 text-slate-400">Mei</span>
          </div>
          <div className="mt-3 text-slate-400">2026</div>
        </div>
        <div className="flex gap-3 ml-3 pb-6">
          <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition duration-100 text-sm">
            <Calendar size={16} />
            Bulan ini
          </button>
          <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition duration-100">
            + Tambah Transaksi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

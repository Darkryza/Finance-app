import { Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex px-8 py-10">
        <div>
          <div className="flex justify-center items-center">
            <span className="text-4xl font-bold">Dashboard</span>
            <span className="self-end ml-3 text-slate-400">Mei</span>
          </div>
          <div className="mt-3 text-slate-400">2026</div>
        </div>
        <div className="p-2 bg-gray-900 ml-5 rounded-xl text-slate-400 flex justify-center items-center">
          <Calendar />
          <div>Bulan ini</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

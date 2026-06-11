import {
  ArrowUpRight,
  Calendar,
  TrendingUp,
  Wallet,
  HandCoins,
  BanknoteArrowDown,
  TrendingDown,
  ArrowDownRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", pendapatan: 5200, perbelanjaan: 3100 },
  { month: "Feb", pendapatan: 6100, perbelanjaan: 3800 },
  { month: "Mac", pendapatan: 5800, perbelanjaan: 3200 },
  { month: "Apr", pendapatan: 7200, perbelanjaan: 4100 },
  { month: "Mei", pendapatan: 6900, perbelanjaan: 3700 },
  { month: "Jun", pendapatan: 8240, perbelanjaan: 3590 },
];

const Dashboard = () => {
  return (
    <div className="text-slate-400 px-8 pt-10 flex flex-col">
      {/* Dashboard atas */}
      <div className="flex pb-5">
        <div>
          <div className="flex justify-center items-center">
            <span className="text-4xl font-bold text-white">Dashboard</span>
            <span className="self-end ml-3 text-slate-400">May</span>
          </div>
          <div className="mt-3 text-slate-400">2026</div>
        </div>
        <div className="flex gap-3 ml-3 pb-6">
          <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition duration-100 text-sm">
            <Calendar size={16} />
            This month
          </button>
          <button className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition duration-100">
            + Add Transaction
          </button>
        </div>
      </div>
      {/* card first layer */}
      <div className="flex gap-5 pb-5">
        {/* Card Jumlah Baki */}
        <div className="bg-secondary flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
          {/* Symbol first row */}
          <div className="flex justify-between">
            <div className="bg-primary p-2 rounded-lg flex justify-center items-center">
              <Wallet className="text-bluePrimary" />
            </div>
            <div className="flex justify-center items-center">
              <TrendingUp className="text-bluePrimary w-20" size={50} />
            </div>
          </div>
          {/* Jumlah baki */}
          <div className="mt-5">
            <div className="text-text text-sm">Jumlah baki</div>
          </div>
          {/* Baki */}
          <div className="text-white font-bold text-2xl mb-2">RM24,830</div>
          {/* Peratusan */}
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <ArrowUpRight className="text-green-500" />
            </div>
            <div className="text-green-500 flex justify-center items-center">
              +2.4%
            </div>
            <div className="text-slate-500">vs bulan lalu</div>
          </div>
        </div>
        {/* Card Pendapatan */}
        <div className="bg-secondary flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
          {/* Symbol first row */}
          <div className="flex justify-between">
            <div className="bg-primary p-2 rounded-lg flex justify-center items-center">
              <HandCoins className="text-green-500" />
            </div>
            <div className="flex justify-center items-center">
              <TrendingUp className="text-green-500 w-20" size={50} />
            </div>
          </div>
          {/* Jumlah baki */}
          <div className="mt-5">
            <div className="text-text text-sm">Pendapatan</div>
          </div>
          {/* Baki */}
          <div className="text-white font-bold text-2xl mb-2">RM8,240</div>
          {/* Peratusan */}
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <ArrowUpRight className="text-green-500" />
            </div>
            <div className="text-green-500 flex justify-center items-center">
              +5.1%
            </div>
            <div className="text-slate-500">vs bulan lalu</div>
          </div>
        </div>
        {/* Card Perbelanjaan */}
        <div className="bg-secondary flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
          {/* Symbol first row */}
          <div className="flex justify-between">
            <div className="bg-primary p-2 rounded-lg flex justify-center items-center">
              <BanknoteArrowDown className="text-red-500" />
            </div>
            <div className="flex justify-center items-center">
              <TrendingDown className="text-red-500 w-20" size={50} />
            </div>
          </div>
          {/* Jumlah baki */}
          <div className="mt-5">
            <div className="text-text text-sm">Perbelanjaan</div>
          </div>
          {/* Baki */}
          <div className="text-white font-bold text-2xl mb-2">RM3,590</div>
          {/* Peratusan */}
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <ArrowDownRight className="text-red-500" />
            </div>
            <div className="text-red-500 flex justify-center items-center">
              -1.8%
            </div>
            <div className="text-slate-500">vs bulan lalu</div>
          </div>
        </div>
      </div>
      {/* card second layer */}
      <div className="flex gap-5 pb-5">
        {/* Aliran kewangan */}
        <div className="bg-secondary flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
          {/* Top */}
          <div className="flex items-center gap-3">
            {/* Title: Aliran Kewangan */}
            <h1 className="text-white font-bold">Aliran Kewangan</h1>
            {/* List button ikut hari bulan minggu */}
            <ul className="flex gap-3 bg-primary px-3 py-2 rounded-2xl ">
              <li className="px-3">Hari</li>
              <li className="selected bg-bluePrimary text-white font-bold px-3 rounded-4xl">
                Minggu
              </li>
              <li className="px-3">Bulan</li>
              <li className="px-3">Tahun</li>
            </ul>
          </div>
          {/* Text Pendapatan vs Pembayaran */}
          <div className="mt-4">
            <p>Pendapatan vs Perbelanjaan</p>
          </div>
          {/* Chart */}
          <div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={data} barSize={10}>
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: 8,
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                  itemStyle={{ color: "#e2e8f0" }}
                />
                <Bar
                  dataKey="pendapatan"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="perbelanjaan"
                  fill="#f43f5e"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        ``
      </div>
    </div>
  );
};

export default Dashboard;

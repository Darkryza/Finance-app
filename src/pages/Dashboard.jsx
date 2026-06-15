import {
  ArrowUpRight,
  Calendar,
  TrendingUp,
  Wallet,
  HandCoins,
  BanknoteArrowDown,
  TrendingDown,
  ArrowDownRight,
  MoveRight,
  ShoppingCart,
  Zap,
  House,
  Coffee,
  Car,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { month: "Jan", pendapatan: 5200, perbelanjaan: 3100 },
  { month: "Feb", pendapatan: 6100, perbelanjaan: 3800 },
  { month: "Mac", pendapatan: 5800, perbelanjaan: 3200 },
  { month: "Apr", pendapatan: 7200, perbelanjaan: 4100 },
  { month: "Mei", pendapatan: 6900, perbelanjaan: 3700 },
  { month: "Jun", pendapatan: 8240, perbelanjaan: 3590 },
];

const donutData = [
  { label: "Perumahan", pct: 38, color: "#6366f1" },
  { label: "Makanan", pct: 22, color: "#22c55e" },
  { label: "Pengangkutan", pct: 18, color: "#f59e0b" },
  { label: "Utiliti", pct: 14, color: "#3b82f6" },
  { label: "Lain-lain", pct: 8, color: "#f43f5e" },
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
        <div className="bg-secondary flex-1 flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
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
        <div className="bg-secondary flex-1 flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
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
        <div className="bg-secondary flex-1 flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
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
        <div className="bg-secondary flex-1 flex flex-col justify-center item-center rounded-md p-3 border border-slate-600">
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
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} barSize={20}>
              <XAxis
                dataKey="month"
                tick={{ fill: "#64748b", fontSize: 15 }}
                axisLine={true}
                tickLine={true}
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
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#94a3b8", fontSize: 11 }}>
                    {value === "pendapatan" ? "Pendapatan" : "Perbelanjaan"}
                  </span>
                )}
              />
              <Bar dataKey="pendapatan" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar
                dataKey="perbelanjaan"
                fill="#f43f5e"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Kategori Belanja */}
        <div className="bg-secondary flex-1 flex flex-col  rounded-md p-3 border border-slate-600">
          {/* Top layer */}
          <div className="flex flex-col gap-2 py-2">
            <h1 className="text-white font-bold">Kategori Belanja</h1>
            <p>Jun 2026</p>
          </div>
          {/* chart */}
          <div className="flex gap-3">
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={donutData}
                  dataKey="pct"
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={52}
                  strokeWidth={0}
                >
                  {donutData.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Legend manual */}
            <div className="flex flex-col gap-2 flex-1">
              {donutData.map((d, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: d.color }}
                    />
                    <span className="text-slate-400 text-xs">{d.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 text-xs">{d.amount}</span>
                    <span className="text-slate-300 text-xs font-medium">
                      {d.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* card third layer */}
      <div className="flex gap-5 pb-5">
        {/* Transaksi Terkini */}
        <div className="bg-secondary flex flex-col justify-center item-center rounded-md p-3 border border-slate-600 flex-1">
          {/* Top layer*/}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Transaksi Terkini</h1>
              <p>5 transaksi terbaru</p>
            </div>
            <div className="flex justify-center items-center gap-3 text-bluePrimary">
              <a
                href="#"
                className="flex gap-2 hover:text-blue-300 transition duration-100"
              >
                Lihat semua <MoveRight />
              </a>
            </div>
          </div>
          {/* Second layer */}
          <div className="flex flex-col gap-5 p-5 mt-5">
            <div className="flex justify-between">
              <div className="flex gap-5">
                {/* logo */}
                <div className="bg-amber-800 p-3 rounded-lg flex justify-center items-center">
                  <ShoppingCart className="text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold">Shoppee</h1>
                  <p>Membeli belah</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 text-2xl">-RM128.90</span>
                <p>Hari ini 10.23</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                {/* logo */}
                <div className="bg-[#333736] p-3 rounded-lg flex justify-center items-center">
                  <Zap className="text-[#dab01c]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold">TNB eBilling</h1>
                  <p>Utiliti</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 text-2xl">-RM87.50</span>
                <p>Semalam 06.15</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                {/* logo */}
                <div className="bg-[#3e427c] p-3 rounded-lg flex justify-center items-center">
                  <House className="text-[#e5cdf4]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold">Sewa Rumah</h1>
                  <p>Perumahan</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 text-2xl">-RM1200.00</span>
                <p>1 Jun</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                {/* logo */}
                <div className="bg-[#343536] p-3 rounded-lg flex justify-center items-center">
                  <Coffee className="text-[#eeb425]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold">Zuss Coffee</h1>
                  <p>Makanan</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 text-2xl">-RM18.50</span>
                <p>31 Mei</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-5">
                {/* logo */}
                <div className="bg-[#1c384b] p-3 rounded-lg flex justify-center items-center">
                  <Car className="text-[#22d3ee]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold">MyEG</h1>
                  <p>Pengangkutan</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 text-2xl">-RM52.00</span>
                <p>30 Mei</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

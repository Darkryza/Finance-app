import { ArrowUpRight, Download, TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Report = () => {
  const data = [
    { bulan: "Jan", pendapatan: 4200, perbelanjaan: 2800 },
    { bulan: "Feb", pendapatan: 4800, perbelanjaan: 3100 },
    { bulan: "Mac", pendapatan: 4600, perbelanjaan: 2700 },
    { bulan: "Apr", pendapatan: 5300, perbelanjaan: 3400 },
    { bulan: "Mei", pendapatan: 5100, perbelanjaan: 3300 },
    { bulan: "Jun", pendapatan: 6000, perbelanjaan: 3200 },
  ];
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* first layer */}
      <div className="flex items-center justify-between mb-5">
        {/* title */}
        <div className="flex flex-col gap-2">
          <p>Analisis kewangan</p>
          <h1 className="text-white font-bold text-3xl">Laporan</h1>
        </div>
        {/* button download pdf */}
        <div className="flex items-center gap-2 my-auto p-3 bg-bluePrimary text-white font-bold rounded-2xl cursor-pointer transition duration-300 hover:bg-blue-800">
          <Download size={32} />
          <span>Muat Turun PDF</span>
        </div>
      </div>
      {/* second layer */}
      <div className="flex gap-8 bg-secondary w-fit rounded-2xl p-4 mb-5">
        <div className="cursor-pointer">
          <span>3 Bulan</span>
        </div>
        <div className="cursor-pointer">
          <span className="bg-bluePrimary text-white font-bold p-3 rounded-2xl">
            6 Bulan
          </span>
        </div>
        <div className="cursor-pointer">
          <span>1 Tahun</span>
        </div>
      </div>
      {/* third layer */}
      <div className="flex gap-5">
        {/* jumlah pendapatan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          <div className="flex gap-2">
            <TrendingUp className="text-green-500" />
            <span>Jumlah Pendapatan</span>
          </div>
          <h1 className="text-white font-bold text-2xl">RM39,440</h1>
        </div>
        {/* jumlah perbelanjaan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          <div className="flex gap-2">
            <TrendingDown className="text-red-500" />
            <span>Jumlah Perbelanjaan</span>
          </div>
          <h1 className="text-white font-bold text-2xl">RM21,490</h1>
        </div>
        {/* kadar simpanan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          <div className="flex gap-2">
            <ArrowUpRight className="text-blue-400" />
            <span>Kadar Simpanan</span>
          </div>
          <h1 className="text-white font-bold text-2xl">46%</h1>
        </div>
      </div>
      {/* forth layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
        {/* Top line */}
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl">
              Trend Pendapatan vs Perbelanjaan
            </h1>
            <p>6 Bulan terakhir</p>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <p>Pendapatan</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <p>Perbelanjaan</p>
            </div>
          </div>
        </div>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="bulan" stroke="#94a3b8" />

              <Tooltip
                cursor={{ stroke: "#475569" }}
                contentStyle={{
                  backgroundColor: "#1e293b",
                  borderColor: "#334155",
                }}
              />
              <Line
                type="monotone"
                dataKey="pendapatan"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{ fill: "#3b82f6", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="perbelanjaan"
                stroke="#f87171"
                strokeWidth={2.5}
                dot={{ fill: "#f87171", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Report;

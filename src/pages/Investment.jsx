import { ArrowUpRight, Plus, TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const dataPortfolio = [
  { bulan: "Jan", nilai: 6800 },
  { bulan: "Feb", nilai: 7400 },
  { bulan: "Mac", nilai: 7200 }, // sikit dip macam dalam graf
  { bulan: "Apr", nilai: 7800 },
  { bulan: "Mei", nilai: 8400 },
  { bulan: "Jun", nilai: 8950 },
];

const Investment = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* top layer */}
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-2">
          <p>Portfolio anda</p>
          <h1 className="text-white font-bold text-3xl">Pelaburan</h1>
        </div>
        <div className="p-3 bg-bluePrimary text-white font-medium text-xl flex justify-center items-center gap-3 rounded-xl transition duration-300 hover:bg-blue-700 cursor-pointer">
          <Plus />
          <span>Tambah Pelaburan</span>
        </div>
      </div>
      {/* second layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
        {/* first line */}
        <div className="flex flex-col gap-3">
          <p>Jumlah Nilai Portfolio</p>
          <h1 className="text-white font-bold text-3xl">RM8,950</h1>
          <div className="flex gap-2 items-center">
            <ArrowUpRight className="text-green-500 text-xl" />
            <span className="text-green-500 text-xl">-4.3%</span>
            <p>Bulan ini</p>
          </div>
        </div>
        {/* second line (graph) */}
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataPortfolio}>
              <defs>
                <linearGradient id="colorNilai" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="bulan" axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#94a3b8" }}
                itemStyle={{ color: "#a855f7" }}
                formatter={(value) => [`RM ${value.toLocaleString()}`, "Nilai"]}
              />
              <Area
                type="monotone"
                dataKey="nilai"
                stroke="#a855f7"
                strokeWidth={2}
                fill="url(#colorNilai)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* third layer*/}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
        <h1 className="text-white font-bold text-2xl mb-5">Pegangan Anda</h1>
        <div className="pl-5">
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <div className="flex justify-center items-center p-3 bg-[#60a5fa]/20 rounded-xl">
                <span className="text-xl text-blue-400 font-medium">AS</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-white font-medium text-xl">ASB</h2>
                <span>Unit Amanah</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-medium text-xl text-end">
                RM5,200
              </h2>
              <div className="flex text-green-500 gap-2">
                <TrendingUp />
                <span className="text-lg">+3.2%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <div className="flex justify-center items-center p-3 bg-[#4ade80]/20 rounded-xl">
                <span className="text-xl text-green-500 font-medium">MA</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-white font-medium text-xl">
                  Maybank (1155)
                </h2>
                <span>Saham</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-medium text-xl text-end">
                RM1,840
              </h2>
              <div className="flex text-red-400 gap-2">
                <TrendingDown />
                <span className="text-lg">-1.4%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <div className="flex justify-center items-center p-3 bg-[#c084fc]/20 rounded-xl">
                <span className="text-xl text-purple-500 font-medium">PU</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-white font-medium text-xl">
                  Public Mutual Equity
                </h2>
                <span>Unit Amanah</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-medium text-xl text-end">
                RM1,620
              </h2>
              <div className="flex text-green-500 gap-2">
                <TrendingUp />
                <span className="text-lg">+5.8%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <div className="flex justify-center items-center p-3 bg-[#fbbf24]/20 rounded-xl">
                <span className="text-xl text-yellow-500 font-medium">BI</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-white font-medium text-xl">Bitcoin</h2>
                <span>Kripto</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-medium text-xl text-end">RM290</h2>
              <div className="flex text-green-500 gap-2">
                <TrendingUp />
                <span className="text-lg">+12.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;

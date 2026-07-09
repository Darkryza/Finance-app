import { Bus, House, Soup, Zap } from "lucide-react";

const Budget = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* first layer */}
      <div className="flex justify-between mb-5">
        {/* title */}
        <div className="flex flex-col">
          <p>Rancangan perbelanjaan</p>
          <h1 className="text-white font-bold text-4xl">Bajet</h1>
        </div>
        <div className="flex justify-center items-center gap-3 bg-bluePrimary px-4 text-white font-bold rounded-2xl transition duration-300 hover:bg-blue-800 cursor-pointer ">
          <div>+</div>
          <span>Tambah Bajet</span>
        </div>
      </div>
      {/* second layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
        {/* first line*/}
        <div className="flex justify-between mb-3">
          <div className="flex flex-col gap-2">
            <p>Jumlah Bajet Bulan ini</p>
            <h1>
              <span className="text-white font-bold text-3xl">RM3,233</span>
              <span className="text-xl">/ RM3,800</span>
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p>Baki</p>
            <span className="text-3xl text-[#4ade80] font-bold">RM567</span>
          </div>
        </div>
        {/* second line */}
        <div className="flex flex-col">
          {/* line progress */}
          <div className="w-full h-3 bg-slate-950 rounded-full">
            <div className="w-[80%] h-full bg-bluePrimary rounded-full"></div>
          </div>
          {/* description progress */}
          <div className="mt-3">
            <p>85% daripada bajet bulanan digunakan</p>
          </div>
        </div>
      </div>
      {/* third layer */}
      <div className="flex gap-5">
        {/* perumahan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          {/* first line: logo and title */}
          <div className="flex items-center gap-5 mb-2">
            <div className="bg-[#0f172a] p-3 rounded-lg">
              <House className="text-[#818cf8]" />
            </div>
            <h2 className="text-lg text-[#e2e8f0]">Perumahan</h2>
          </div>
          {/* second line: value */}
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-xl">RM1,200</span>
            <span className="text-xl">/ RM1,200</span>
          </div>
          {/* third line: progress line */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-full bg-[#818cf8]"></div>
            <span>100% digunakan</span>
          </div>
        </div>
        {/* makanan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          {/* first line: logo and title */}
          <div className="flex items-center gap-5 mb-2">
            <div className="bg-[#0f172a] p-3 rounded-lg">
              <Soup className="text-[#4ade80]" />
            </div>
            <h2 className="text-lg text-[#e2e8f0]">Makanan</h2>
          </div>
          {/* second line: value */}
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-xl">RM695</span>
            <span className="text-xl">/ RM800</span>
          </div>
          {/* third line: progress line */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-full bg-slate-950">
              <div className="w-[80%] h-3 rounded-full bg-[#4ade80]"></div>
            </div>
            <span>87% digunakan</span>
          </div>
        </div>
      </div>
      {/* forth layer */}
      <div className="flex gap-5">
        {/* Pengangkutan */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          {/* first line: logo and title */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-5">
              <div className="bg-[#0f172a] p-3 rounded-lg">
                <Bus className="text-[#fbbf24]" />
              </div>
              <h2 className="text-lg text-[#e2e8f0]">Pengangkutan</h2>
            </div>
            <div className="bg-[#f43f5e1a] px-3 rounded-full">
              <p className="text-[#fb7185]">Lebih bajet</p>
            </div>
          </div>
          {/* second line: value */}
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-xl">RM568</span>
            <span className="text-xl">/ RM500</span>
          </div>
          {/* third line: progress line */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-full bg-[#f43f5e]"></div>
            <span>114% digunakan</span>
          </div>
        </div>
        {/* Utiliti */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
          {/* first line: logo and title */}
          <div className="flex items-center gap-5 mb-2">
            <div className="bg-[#0f172a] p-3 rounded-lg">
              <Zap className="text-[#60a5fa]" />
            </div>
            <h2 className="text-lg text-[#e2e8f0]">Utiliti</h2>
          </div>
          {/* second line: value */}
          <div className="flex justify-between mb-2">
            <span className="text-white font-bold text-xl">RM442</span>
            <span className="text-xl">/ RM600</span>
          </div>
          {/* third line: progress line */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-full bg-slate-950">
              <div className="w-[70%] h-3 rounded-full bg-[#60a5fa]"></div>
            </div>
            <span>74% digunakan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;

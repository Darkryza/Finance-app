import { PiggyBank, Plus } from "lucide-react";

const Saving = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* top layer */}
      <div className="flex justify-between mb-8">
        <div className="flex flex-col">
          <span>Matlamat kewangan</span>
          <h1 className="text-white font-bold text-2xl">Simpanan</h1>
        </div>
        <div className="flex justify-center items-center gap-2 bg-bluePrimary p-3 rounded-xl text-white font-bold cursor-pointer transition duration-300 hover:bg-blue-600">
          <Plus />
          <h2>Matlamat Baharu</h2>
        </div>
      </div>
      {/* Second layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-center items-center bg-[#22c55e1a] p-3 rounded-xl">
            <PiggyBank className="text-green-400" size={50} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <span className="text-s font-light">
                Jumlah Simpanan Keseluruhan
              </span>
              <div className="flex items-center gap-3 tracking-wider">
                <span className="text-white font-bold text-xl">RM66,000</span>
                <span>/ RM128,500</span>
              </div>
              <div className="w-full h-3 bg-primary rounded-full">
                <div className="h-full w-[52%] bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Progress</span>
            <span className="text-green-400 text-3xl font-bold">52%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;

import {
  ArrowLeftRight,
  ArrowUpDown,
  ChevronDown,
  PiggyBank,
  TrendingUp,
  Wallet,
} from "lucide-react";

const Transfer = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* top layer */}
      <div className="flex flex-col mb-5">
        <p>Pindah antara akaun</p>
        <h1 className="text-white font-bold text-3xl">Pindahan</h1>
      </div>
      {/* second layer */}
      <div className="flex gap-3">
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
          {/* top line */}
          <div className="mb-3">
            <h1 className="text-white font-bold text-xl">
              Buat Pindahan Baharu
            </h1>
          </div>
          {/* second line */}
          <div className="flex flex-col gap-2 mb-3">
            <p>Daripada</p>
            <div className="bg-primary p-6 border border-slate-600 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <div className="bg-secondary p-3 rounded-xl">
                    <Wallet className="text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-lg">Akaun Semasa</span>
                    <span>RM24,830.50</span>
                  </div>
                </div>
                <ChevronDown />
              </div>
            </div>
          </div>
          {/* third line */}
          <div className="flex justify-center items-center">
            <div className="bg-slate-700 p-2 rounded-full">
              <ArrowUpDown className="text-blue-500" />
            </div>
          </div>
          {/* forth line */}
          <div className="flex flex-col gap-2 mb-5">
            <span>Kepada</span>
            <div className="bg-primary p-6 border border-slate-600 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <div className="p-3 bg-secondary rounded-xl">
                    <PiggyBank className="text-green-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-white text-lg">Simpanan</h1>
                    <span>RM15,200.00</span>
                  </div>
                </div>
                <ChevronDown />
              </div>
            </div>
          </div>
          {/* fifth line */}
          <div className="flex flex-col gap-2 mb-5">
            <span>Jumlah (RM)</span>
            <div className="bg-primary p-6 border border-slate-600 rounded-2xl">
              <h1 className="font-bold text-3xl">0.00</h1>
            </div>
            <div className="flex gap-5">
              <div className="bg-primary rounded-2xl px-5 py-2 cursor-pointer transition duration-300 hover:bg-slate-700">
                <span>RM50</span>
              </div>
              <div className="bg-primary rounded-2xl px-5 py-2 cursor-pointer transition duration-300 hover:bg-slate-700">
                <span>RM100</span>
              </div>
              <div className="bg-primary rounded-2xl px-5 py-2 cursor-pointer transition duration-300 hover:bg-slate-700">
                <span>RM500</span>
              </div>
              <div className="bg-primary rounded-2xl px-5 py-2 cursor-pointer transition duration-300 hover:bg-slate-700">
                <span>RM1000</span>
              </div>
            </div>
          </div>
          {/* sixth line */}
          <div className="w-full flex justify-center items-center bg-bluePrimary p-4 rounded-2xl transition duration-300 hover:bg-blue-800 cursor-pointer">
            <span className="text-white font-bold text-xl">
              Hantar Pindahan
            </span>
          </div>
        </div>
        <div className="bg-secondary w-[40%] flex flex-col gap-2 rounded-2xl p-5 border border-slate-600 mb-5">
          {/* first line */}
          <div className="mb-5">
            <h1 className="text-white font-bold text-xl">Akaun Saya</h1>
          </div>
          {/* second line */}
          <div className="flex gap-4 mb-3">
            <div className="p-3 bg-primary rounded-xl">
              <Wallet className="text-blue-500" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Akaun Semasa</h1>
              <span>RM24,830.50</span>
            </div>
          </div>
          {/* third line */}
          <div className="flex gap-4 mb-3">
            <div className="p-3 bg-primary rounded-xl">
              <PiggyBank className="text-green-400" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Simpanan</h1>
              <span>RM15,200.00</span>
            </div>
          </div>
          {/* forth line */}
          <div className="flex gap-4 mb-3">
            <div className="p-3 bg-primary rounded-xl">
              <TrendingUp className="text-purple-500" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Pelaburan</h1>
              <span>RM8,950.75</span>
            </div>
          </div>
        </div>
      </div>
      {/* third layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 rounded-2xl p-5 border border-slate-600 mb-5">
        {/* first line */}
        <h1 className="text-white font-bold text-xl mb-5">Pindahan Terkini</h1>
        {/* transaction */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex gap=3">
              <div className="p-3 bg-[#3b82f61a] rounded-xl">
                <ArrowLeftRight className="text-[#60a5fa]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

import {
  Car,
  GraduationCap,
  House,
  PiggyBank,
  Plane,
  Plus,
} from "lucide-react";

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
      {/* third layer */}
      <div className="flex gap-3">
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5 flex-wrap">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="p-3 bg-primary rounded-xl">
                  <Plane size={40} className="text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-medium text-lg">
                    Percutian Jepun
                  </h1>
                  <p>Sasaran Dis 2026</p>
                </div>
              </div>
              <h1 className="text-white font-medium text-xl">53%</h1>
            </div>
            <div className="w-full h-4 rounded-full bg-primary">
              <div className="w-[53%] h-4 rounded-full bg-blue-400"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl text-white font-bold">RM4,200</h1>
              <p>daripada RM8000</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5 flex-wrap">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="p-3 bg-primary rounded-xl">
                  <Car size={40} className="text-green-500" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-medium text-lg">
                    Kereta Baharu
                  </h1>
                  <p>Sasaran Jun 2027</p>
                </div>
              </div>
              <h1 className="text-white font-medium text-xl">46%</h1>
            </div>
            <div className="w-full h-4 rounded-full bg-primary">
              <div className="w-[46%] h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl text-white font-bold">RM18,500</h1>
              <p>daripada RM40,000</p>
            </div>
          </div>
        </div>
      </div>
      {/* forth layer */}
      <div className="flex gap-3">
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5 flex-wrap">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="p-3 bg-primary rounded-xl">
                  <GraduationCap size={40} className="text-purple-500" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-medium text-lg">
                    Dana Pendidikan
                  </h1>
                  <p>Sasaran Ogos 2027</p>
                </div>
              </div>
              <h1 className="text-white font-medium text-xl">65%</h1>
            </div>
            <div className="w-full h-4 rounded-full bg-primary">
              <div className="w-[65%] h-4 rounded-full bg-purple-500"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl text-white font-bold">RM9,800</h1>
              <p>daripada RM15,000</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5 flex-wrap">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="p-3 bg-primary rounded-xl">
                  <House size={40} className="text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-medium text-lg">
                    Bayaran Awal Rumah
                  </h1>
                  <p>Sasaran Mac 2028</p>
                </div>
              </div>
              <h1 className="text-white font-medium text-xl">53%</h1>
            </div>
            <div className="w-full h-4 rounded-full bg-primary">
              <div className="w-[53%] h-4 rounded-full bg-orange-400"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl text-white font-bold">RM32,000</h1>
              <p>daripada RM60,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;

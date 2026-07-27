import { Plus } from "lucide-react";

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
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5"></div>
    </div>
  );
};

export default Investment;

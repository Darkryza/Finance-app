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
        </div>
      </div>
    </div>
  );
};

export default Budget;

import {
  Download,
  Funnel,
  Search,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";

const Transaction = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* Top layer */}
      <div className="flex justify-between pb-5">
        {/* title */}
        <div className="flex flex-col">
          <p>Urus semua</p>
          <h1 className="text-white font-bold text-2xl">Transaksi</h1>
        </div>
        {/* button exports */}
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="flex gap-3 bg-bluePrimary text-white p-2 rounded-lg transition duration-200 hover:bg-blue-700"
          >
            <div>
              <Download />
            </div>
            <div>Eksport</div>
          </a>
        </div>
      </div>
      {/* Second layer */}
      <div className="flex gap-5 pb-5">
        {/* Jumlah masuk */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600">
          <div>Jumlah Masuk</div>
          <div className="text-green-400 font-bold text-2xl">+RM8,240.00</div>
        </div>
        {/* Jumlah keluar */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600">
          <div>Jumlah Keluar</div>
          <div className="text-red-400 font-bold text-2xl">-RM2,825.20</div>
        </div>
        {/* Jumlah Transaksi */}
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600">
          <div>Jumlah Transaksi</div>
          <div className="text-white font-bold text-2xl">12</div>
        </div>
      </div>
      {/* Third layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-5 border border-slate-600 mb-5">
        <div className="flex gap-2 pb-5">
          <div className="flex-1 flex gap-2 bg-slate-950 p-3 rounded-2xl border border-slate-600">
            <div>
              <Search />
            </div>
            <input
              type="text"
              placeholder="Cari transaksi..."
              className="placeholder:text-slate-400 flex-1 "
            />
          </div>
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-600 flex gap-2">
            <div>
              <Funnel />
            </div>
            <span>Tapis</span>
          </div>
        </div>
        <div className="flex gap-2 text-slate-400">
          <div className="bg-bluePrimary p-3 rounded-2xl border border-slate-600 text-white font-bold">
            Semua
          </div>
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-600 ">
            Pendapatan
          </div>
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-600 ">
            Perbelanjaan
          </div>
        </div>
      </div>
      {/* Fourth layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-lg p-8 border border-slate-600 mb-5">
        {/* item forth layer */}
        <div className="flex justify-between mb-5">
          {/* logo and title */}
          <div className="flex gap-5">
            {/* logo */}
            <div className="bg-[#343137] p-2 rounded-md">
              <ShoppingCart className="text-[#f48f3c]" size={30} />
            </div>
            {/* title */}
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Shopee</h1>
              <p>Membeli-belah</p>
            </div>
          </div>
          {/* transaction and date */}
          <div className="flex flex-col">
            <h1 className="text-xl text-[#c15e72] font-bold">-RM128.90</h1>
            <p className="text-end">17 Jun 10:23</p>
          </div>
        </div>
        {/* item forth layer */}
        <div className="flex justify-between mb-5">
          {/* logo and title */}
          <div className="flex gap-5">
            {/* logo */}
            <div className="bg-[#1e393f] p-2 rounded-md">
              <TrendingUp className="text-[#33885e]" size={30} />
            </div>
            {/* title */}
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Gaji Bulanan</h1>
              <p>Pendapatan</p>
            </div>
          </div>
          {/* transaction and date */}
          <div className="flex flex-col">
            <h1 className="text-xl text-[#48d47c] font-bold">+RM8,240.00</h1>
            <p className="text-end">16 Jun 09:00</p>
          </div>
        </div>
        {/* item forth layer */}
        <div className="flex justify-between mb-5">
          {/* logo and title */}
          <div className="flex gap-5">
            {/* logo */}
            <div className="bg-[#333736] p-2 rounded-md">
              <Zap className="text-[#dbb51a]" size={30} />
            </div>
            {/* title */}
            <div className="flex flex-col">
              <h1 className="text-white font-bold">TNB eBilling</h1>
              <p>Utiliti</p>
            </div>
          </div>
          {/* transaction and date */}
          <div className="flex flex-col">
            <h1 className="text-xl text-[#c15e72] font-bold">-RM87.50</h1>
            <p className="text-end">16 Jun 08:15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

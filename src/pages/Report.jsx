import { Download } from "lucide-react";

const Report = () => {
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
      <div className="flex gap-8 p-2 bg-secondary">
        <div>3 Bulan</div>
        <div>6 Bulan</div>
        <div>1 Tahun</div>
      </div>
    </div>
  );
};

export default Report;

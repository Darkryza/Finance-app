import { Bell } from "lucide-react";
import AndroidSwitch from "../components/AndroidSwitch";

const Setting = () => {
  return (
    <div className="flex flex-col px-8 pt-10 text-slate-400">
      {/* first layer */}
      <div className="flex flex-col mb-5">
        <span>Urus akaun anda</span>
        <h1 className="text-white text-3xl font-bold">Tetapan</h1>
      </div>
      {/* second layer */}
      <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="p-5 flex justify-center items-center bg-blue-900/40 rounded-xl">
              <h1 className="font-medium text-xl text-blue-600">MF</h1>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-md">Muhammad Fakhrullah</h1>
              <span>fakhrullah@example.com</span>
            </div>
          </div>
          <div className="px-3 py-1 bg-primary border border-slate-400 rounded-xl cursor-pointer transition duration-100 hover:bg-slate-900">
            <span className="text-sm">Edit Profil</span>
          </div>
        </div>
      </div>
      {/* third layer */}
      <div className="flex gap-3">
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5">
          {/* first line */}
          <div className="flex gap-4 items-center mb-5">
            <div className="p-3 rounded-xl bg-blue-900/20">
              <Bell className="text-blue-400" />
            </div>
            <h2 className="text-white font-medium">Notifikasi</h2>
          </div>
          {/* second line */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-white">Notifikasi E-mel</span>
              <p>Ringkasan mingguan</p>
            </div>
            <AndroidSwitch />
          </div>
        </div>
        <div className="bg-secondary flex-1 flex flex-col gap-2 justify-center item-center rounded-2xl p-5 border border-slate-600 mb-5"></div>
      </div>
    </div>
  );
};

export default Setting;

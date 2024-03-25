import SettingTab from "@/app/MaterialUI/SettingTab";
import React from "react";

const Settings = () => {
  return (
    <>
      <div className="bg-slate-100 py-5 px-8">
        <div className="bg-white p-5">
          <div>
            <h1 className="text-2xl font-semibold">Settings</h1>
          </div>
          <div className="mt-6">
            <SettingTab />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

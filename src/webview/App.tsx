import React, { useState, useEffect } from "react";

// VS Code API 型の宣言
declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  setState?: (state: any) => void;
  getState?: () => any;
};

const vscode = acquireVsCodeApi();

const App = () => {
  const [checked, setChecked] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    console.log("debug-react: bAllowUnlimitedRespecs:", newValue);
    vscode?.postMessage?.({
      command: "bAllowUnlimitedRespecs",
      value: newValue ? "True" : "False",
    });
  };


  return (
    <div>
      <h2>ARK Settings Game.ini</h2>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}

        />
        bAllowUnlimitedRespecs
      </label>
      <p>
        trueに設定すると、24時間のクールダウンなしでMindwipe Tonicを複数回使用できます。
      </p>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";

// VS Code API 型の宣言
declare function acquireVsCodeApi(): {
  postMessage: (message: any) => void;
  setState?: (state: any) => void;
  getState?: () => any;
};

const vscode = acquireVsCodeApi();

const App = () => {
  const [iniData, setIniData] = useState<IniParser | undefined>(undefined);

  // iniファイルのテキストデータを拡張から受信する処理
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      const message = event.data;
      if (message?.command === "init" && message?.data) {
        setIniData(new IniParser(message.data.fileName, message.data.settings));
      }
    };

    window.addEventListener("message", messageHandler);

    // コンポーネントマウント時に準備完了を拡張側へ通知
    vscode.postMessage({ command: "ready" });

    return () => window.removeEventListener("message", messageHandler);
  }, []);

  //チェックボックス内でcheckedステートをオーバーライドして追加すること！
  const checkBoxHandleChange = (section: string, key: string, newValue: boolean) => {
    const ini = iniData;
    iniData?.setValue(section, key, newValue ? "True" : "False");
    setIniData(ini);
    vscode?.postMessage?.({
      command: "updateIni",
      value: iniData?.getAllSettingsText(),
    });
  };

  return (
    <div>
      <h2>ARK Settings Game.ini</h2>
      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bAllowUnlimitedRespecs"
        onChange={checkBoxHandleChange}
        description="trueに設定すると、24時間のクールダウンなしでMindwipe Tonicを複数回使用できます。"
      />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { IniParser } from "../iniPerser";
import Game from "./Game";
import GameUserSettings from "./GameUserSettings";

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

  // チェックボックス内でcheckedステートをオーバーライドして追加すること！
  const checkBoxHandleChange = (section: string, key: string, newValue: boolean) => {
    if (iniData) {
      iniData.setValue(section, key, newValue ? "True" : "False");
      setIniData(iniData);
      vscode?.postMessage?.({
        command: "updateIni",
        value: iniData.getAllSettingsText(),
      });
    }
  };

    const numbericHandleChange = (section: string, key: string, newValue: string) => {
    if (iniData) {
      iniData.setValue(section, key, newValue);
      setIniData(iniData);
      vscode?.postMessage?.({
        command: "updateIni",
        value: iniData.getAllSettingsText(),
      });
    }
  };

  return (
    <div>
      <p>
        now open file: {iniData ? iniData.getFileName() : "Loading..."}
      </p>
      {
        iniData && iniData.getFileName().toLowerCase().endsWith("game.ini") ? (
          <Game 
            iniData={iniData}
            checkBoxHandleChange={checkBoxHandleChange}
            numericHandleChange={numbericHandleChange}
          />
        ) : iniData && iniData.getFileName().toLowerCase().endsWith("gameusersettings.ini") ? (
          <GameUserSettings
            iniData={iniData}
            checkBoxHandleChange={checkBoxHandleChange}
            numericHandleChange={numbericHandleChange}
          />
        ) : (
          <div>
            <h2>Unsupported File</h2>
            <p>Please open Game.ini or GameUserSettings.ini to use this extension.</p>
          </div>
        )
      }

    </div>
  );
};

export default App;
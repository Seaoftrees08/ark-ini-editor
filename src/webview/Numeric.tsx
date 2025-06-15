import React, { useState, useEffect } from "react";
import { IniParser } from "../iniPerser";

export interface NumericProps {
  iniData: IniParser | undefined;
  section: string;
  defaultValue: number;
  settingKey: string;
  onChange: (section: string, key: string, newValue: string) => void;
  description: string;
}

const Numeric: React.FC<NumericProps> = ({
  iniData,
  section,
  defaultValue,
  settingKey,
  onChange,
  description,
}) => {
  // 文字列として値を取得（元の入力値、例："4.00" を維持）
  const getInputValue = (): string => {
    const val = iniData?.getValue(settingKey, defaultValue);
    return val !== undefined ? val.toString() : defaultValue.toString();
  };

  const [inputValue, setInputValue] = useState<string>(getInputValue());

  // iniDataが変化した際に入力値を更新
  useEffect(() => {
    setInputValue(getInputValue());
  }, [iniData, settingKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 数字と小数点のみ許可する正規表現（途中状態も考慮）
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      setInputValue(value);
      // 空文字や単独の"."は変換しない
      if (value !== "" && value !== ".") {
        onChange(section, settingKey, value);
      }
    }
  };

  return (
    <div>
      <label
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <input
          type="text"
          // pattern属性は入力支援のために残しています
          pattern="^\d*\.?\d*$"
          value={inputValue}
          onChange={handleChange}
          style={{ marginRight: "0.5em", width: "6em", backgroundColor: "#333333", color: "#FFFFFF" }}
        />
        {settingKey}
      </label>
      <p style={{ marginTop: "-0.3em", marginLeft: "1.8em" }}>{description}</p>
    </div>
  );
};

export default Numeric;

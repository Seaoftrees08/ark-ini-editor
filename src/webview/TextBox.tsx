import React, { useState, useEffect } from "react";
import { IniParser } from "../iniPerser";

export interface TextBoxProps {
  iniData: IniParser | undefined;
  section: string;
  defaultValue: number;
  settingKey: string;
  onChange: (section: string, key: string, newValue: string) => void;
  description: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  iniData,
  section,
  defaultValue,
  settingKey,
  onChange,
  description,
}) => {
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
    onChange(section, settingKey, value);
    setInputValue(value);
  };

  return (
    <div>
      <label
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          style={{ marginRight: "0.5em", width: "12em", backgroundColor: "#333333", color: "#FFFFFF" }}
        />
        {settingKey}
      </label>
      <p style={{ marginTop: "-0.3em", marginLeft: "1.8em" }}>{description}</p>
    </div>
  );
};

export default TextBox;

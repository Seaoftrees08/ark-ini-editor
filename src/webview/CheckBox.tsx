import React, { useState, useEffect } from "react";
import { IniParser } from "../iniPerser";

export interface CheckboxProps {
  iniData: IniParser | undefined;
  section: string;
  settingKey: string;
  onChange: (section: string, key: string, newValue: boolean) => void;
  description: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ iniData, section, settingKey, onChange, description }) => {
  // boolean型もしくは文字列で "True" をチェックする
  const getCheckedValue = (): boolean => {
    const val = iniData?.getValue(settingKey, "False");
    return val === true || val === "True";
  };

  const [checked, setChecked] = useState<boolean>(getCheckedValue());

  // iniDataが変化した際にチェック状態を更新
  useEffect(() => {
    setChecked(getCheckedValue());
  }, [iniData, settingKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(section, settingKey, isChecked);
    setChecked(isChecked);
  };

  return (
    <div>
      <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{ marginRight: "0.5em" }}
        />
        {settingKey}
      </label>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Checkbox;

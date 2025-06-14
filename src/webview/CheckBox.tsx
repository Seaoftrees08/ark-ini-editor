import React from "react";

export interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
  description: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onChange, description }) => (
  <div>
    <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ marginRight: "0.5em" }}
      />
      {label}
    </label>
    <p>
      {description}
    </p>
  </div>
);

export default Checkbox;

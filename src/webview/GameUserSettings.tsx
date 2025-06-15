import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import React from "react";
import TextBox from "./TextBox";

export interface GameUserSettingsProps {
	iniData: IniParser | undefined;
	checkBoxHandleChange: (section: string, key: string, newValue: boolean) => void;
    textHandleChange: (section: string, key: string, newValue: string) => void;
}

const GameUserSettings: React.FC<GameUserSettingsProps> = ({ iniData, checkBoxHandleChange, textHandleChange }) => {
	return(
		<div>
			<h2>ARK Settings Game.ini</h2>
      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="AllowThirdPersonPlayer"
        onChange={checkBoxHandleChange}
        description="trueに設定すると、プレイヤーがサードパーソン視点でゲームをプレイできるようになります。"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={0}
        settingKey="ServerPassword"
        onChange={textHandleChange}
        description="サーバーにパスワードを設定します。空欄にするとパスワードなしになります。"
      />
		</div>
	)
}

export default GameUserSettings;

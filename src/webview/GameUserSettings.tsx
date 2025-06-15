import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import React from "react";

export interface GameUserSettingsProps {
	iniData: IniParser | undefined;
	checkBoxHandleChange: (section: string, key: string, newValue: boolean) => void;
}

const GameUserSettings: React.FC<GameUserSettingsProps> = ({ iniData, checkBoxHandleChange }) => {
	return(
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
	)
}

export default GameUserSettings;

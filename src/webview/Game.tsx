import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import React from "react";
import Numeric from "./Numeric";

export interface GameProps {
    iniData: IniParser | undefined;
    checkBoxHandleChange: (section: string, key: string, newValue: boolean) => void;
    textHandleChange: (section: string, key: string, newValue: string) => void;
}

const Game: React.FC<GameProps> = ({ iniData, checkBoxHandleChange, textHandleChange }) => {
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

            <Numeric
                iniData={iniData}
                section="/script/shootergame.shootergamemode"
                defaultValue={0}
                settingKey="PerLevelStatsMultiplier_Player[0]"
                onChange={(section, key, newValue) => {
                    if (iniData) {
                        // 数値の文字列表現をそのまま保持
                        iniData.setValue(section, key, newValue);
                        textHandleChange(section, key, newValue);
                    }
                }}
                description="プレイヤーの体力の増加量を設定します。0は無効、1はデフォルト値です。4.0は4倍の増加を意味します。"
            />
        </div>
    );
};

export default Game;

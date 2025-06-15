interface IniEntry {
    key: string;
    value: number | boolean | string;
    raw?: string; // 元の値の文字列表現を保持する
}

export class IniParser {
    private fileName: string = '';
    private data: Map<string, IniEntry[]> = new Map();
    private isIniFile: boolean = false;

    constructor(fileName: string, iniText: string) {
        this.fileName = fileName;
        if (fileName.toLowerCase().endsWith('game.ini') || fileName.toLowerCase().endsWith("gameusersettings.ini")) {
            this.isIniFile = true;
            this.parse(iniText);
        }
    }

    private parse(iniText: string): void {
        const lines = iniText.split(/\r?\n/);
        let currentSection = '';

        lines.forEach((line) => {
            line = line.trim();
            if (!line || line.startsWith(';')) { return; }

            if (line.startsWith('[') && line.endsWith(']')) {
                currentSection = line.slice(1, -1);
                if (!this.data.has(currentSection)) {
                    this.data.set(currentSection, []);
                }
            } else if (currentSection) {
                const index = line.indexOf('=');
                if (index === -1) {return;}
                const rawKey = line.slice(0, index).trim();
                const rawValue = line.slice(index + 1).trim();
                let value: number | boolean | string;
                if (rawValue === 'True') {
                    value = true;
                } else if (rawValue === 'False') {
                    value = false;
                } else if (!isNaN(Number(rawValue))) {
                    value = Number(rawValue);
                } else {
                    value = rawValue;
                }
                this.data.get(currentSection)!.push({ key: rawKey, value, raw: rawValue });
            }
        });
    }

    getFileName(): string {
        return this.fileName;
    }

    getValue(key: string, defaultValue: number | boolean | string): number | boolean | string {
        let foundValue: number | boolean | string | undefined;
        for (const entries of this.data.values()) {
            for (const entry of entries) {
                if (entry.key === key) {
                    foundValue = entry.raw !== undefined ? entry.raw : entry.value;
                }
            }
        }
        return foundValue !== undefined ? foundValue : defaultValue;
    }

    setValue(section: string, key: string, value: number | boolean | string): void {
        if (!this.data.has(section)) {
            this.data.set(section, []);
        }
        const entries = this.data.get(section)!;
        let updated = false;
        for (let entry of entries) {
            if (entry.key === key) {
                entry.value = typeof value === "string" ? value : value.toString();
                // raw値として文字列表現を保持する
                entry.raw = value.toString();
                updated = true;
            }
        }
        if (!updated) {
            entries.push({ key, value: typeof value === "string" ? value : value.toString(), raw: value.toString() });
        }
    }

    getAllSettingsText(): string {
        if (!this.isIniFile) {
            return "";
        }
        let result = '';
        this.data.forEach((entries, section) => {
            result += `[${section}]\n`;
            entries.forEach((entry) => {
                let valueText: string;
                if (entry.raw !== undefined) {
                    valueText = entry.raw;
                } else if (typeof entry.value === 'boolean') {
                    valueText = entry.value ? 'True' : 'False';
                } else {
                    valueText = entry.value.toString();
                }
                result += `${entry.key}=${valueText}\n`;
            });
            result += `\n`;
        });
        return result.trim();
    }
}

// // 使用例
// const iniText = `[ServerSettings]
// PreventTribeAlliances=True
// DisableFriendlyFire=True

// [/script/shootergame.shootergamemode]
// MaxTribeLogs=100
// PerLevelStatsMultiplier_Player[0]=4.0
// `;

// const parser = new IniParser(iniText);
// console.log(parser.getAllSettingsText());
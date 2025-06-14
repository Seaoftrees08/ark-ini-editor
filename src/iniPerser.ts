export class IniParser {
  private fileName: string = '';
  private data: Map<string, Map<string, number | boolean | string>> = new Map();

  constructor(fileName: string, iniText: string) {
    this.fileName = fileName;
    this.parse(iniText);
  }
  /**
   * ini形式のテキストを解析して、内部データ構造に格納します。
   * @param iniText 解析するini形式のテキスト
   */
  private parse(iniText: string): void {
    const lines = iniText.split(/\r?\n/);
    let currentSection = '';

    lines.forEach((line) => {
      line = line.trim();
      if (!line || line.startsWith(';')) {return;} // コメント行を無視

      if (line.startsWith('[') && line.endsWith(']')) {
        currentSection = line.slice(1, -1);
        if (!this.data.has(currentSection)) {
          this.data.set(currentSection, new Map());
        }
      } else if (currentSection) {
        const [key, value] = line.split('=').map((s) => s.trim());
        if (value === 'True') {
          this.data.get(currentSection)!.set(key, true);
        } else if (value === 'False') {
          this.data.get(currentSection)!.set(key, false);
        } else if (!isNaN(Number(value))) {
          this.data.get(currentSection)!.set(key, Number(value));
        } else {
          this.data.get(currentSection)!.set(key, value);
        }
      }
    });
  }

  /**
   * ファイル名を取得します。
   * @returns ファイル名
   */
  getFileName(): string {
    return this.fileName;
  }

  /**
   * 指定されたセクションのキーに対応する値を取得します。
   * @param key 設定項目のキー
   * @param defaultValue キーが存在しない場合のデフォルト値
   * @returns 
   */
  getValue(key: string, defaultValue: number | boolean | string): number | boolean | string {
    for (const section of this.data.values()) {
      if (section.has(key)) {
        return section.get(key) ?? defaultValue;
      }
    }
    return defaultValue;
  }

  /**
   * 指定されたセクションのキーに対応する値を設定します。
   * @param section セクション名
   * @param key 設定する項目名
   * @param value 設定値
   */
  setValue(section: string, key: string, value: number | string | boolean): void {
    if (!this.data.has(section)) {
      this.data.set(section, new Map());
    }
    this.data.get(section)!.set(key, value);
  }

  /**
   * 設定が終わったテキスト全文を取得します。
   * @returns 
   */
  getAllSettingsText(): string {
    let result = '';
    this.data.forEach((entries, section) => {
      result += `[${section}]\n`;
      entries.forEach((value, key) => {
        result += `${key}=${value}\n`;
      });
      result += '\n';
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
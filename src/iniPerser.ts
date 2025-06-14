interface IniEntry {
    key: string;
    value: number | boolean | string;
}

export class IniParser {
  private fileName: string = '';
  // 各セクションは複数の設定項目（重複可能）を保持する
  private data: Map<string, IniEntry[]> = new Map();

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
      if (!line || line.startsWith(';')) { return; } // コメント行を無視

      // セクションヘッダ
      if (line.startsWith('[') && line.endsWith(']')) {
        currentSection = line.slice(1, -1);
        if (!this.data.has(currentSection)) {
          this.data.set(currentSection, []);
        }
      } else if (currentSection) {
        const [rawKey, rawValue] = line.split('=').map((s) => s.trim());
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
        // 重複項目もそのまま保持
        this.data.get(currentSection)!.push({ key: rawKey, value });
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
   * 全セクションから指定されたキーの最新の値を取得します。
   * 複数存在する場合、後に出現した値を返します。
   * @param key 設定項目のキー
   * @param defaultValue キーが存在しない場合のデフォルト値
   * @returns 設定値
   */
  getValue(key: string, defaultValue: number | boolean | string): number | boolean | string {
    let foundValue: number | boolean | string | undefined;
    for (const entries of this.data.values()) {
      for (const entry of entries) {
        if (entry.key === key) {
          foundValue = entry.value;
        }
      }
    }
    return foundValue !== undefined ? foundValue : defaultValue;
  }

  /**
   * 指定されたセクションのキーに対応する値を更新します。
   * 同じキーが複数存在する場合、全て更新します。
   * 存在しない場合は新規項目を追加します。
   * @param section セクション名
   * @param key 設定する項目名
   * @param value 設定値
   */
  setValue(section: string, key: string, value: number | boolean | string): void {
    if (!this.data.has(section)) {
      this.data.set(section, []);
    }
    const entries = this.data.get(section)!;
    let updated = false;
    for (let entry of entries) {
      if (entry.key === key) {
        entry.value = value;
        updated = true;
      }
    }
    // 存在しない場合は新規追加
    if (!updated) {
      entries.push({ key, value });
    }
  }

  /**
   * 編集後のテキスト全文を取得します。
   * セクションごとにオリジナルの順序を保持します。
   * @returns iniテキスト
   */
  getAllSettingsText(): string {
    let result = '';
    // Map は挿入順を保持するのでそのまま利用
    this.data.forEach((entries, section) => {
      result += `[${section}]\n`;
      entries.forEach((entry) => {
        result += `${entry.key}=${entry.value}\n`;
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
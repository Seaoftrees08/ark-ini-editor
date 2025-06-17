import React, { useState } from "react";
import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import Numeric from "./Numeric";
import TextBox from "./TextBox";

export interface GameUserSettingsProps {
  iniData: IniParser | undefined;
  checkBoxHandleChange: (
    section: string,
    key: string,
    newValue: boolean
  ) => void;
  textHandleChange: (section: string, key: string, newValue: string) => void;
}

interface SettingItem {
  type: "checkbox" | "numeric" | "textbox";
  section: string;
  settingKey: string;
  defaultValue: any;
  description: string;
}

const GameUserSettings: React.FC<GameUserSettingsProps> = ({
  iniData,
  checkBoxHandleChange,
  textHandleChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // 各設定項目を配列にまとめる（順序もこの配列順になります）
  const settingsList: SettingItem[] = [
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "alwaysNotifyPlayerJoined",
      defaultValue: false,
      description: "誰かがサーバーに参加すると、プレイヤーに常に通知されます",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "allowThirdPersonPlayer",
      defaultValue: false,
      description: "三人称視点を有効にします",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "globalVoiceChat",
      defaultValue: false,
      description: "ボイスチャットがグローバルになります",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "ShowMapPlayerLocation",
      defaultValue: false,
      description:
        "各プレイヤーがマップを表示するときに、自分の正確な位置を表示します",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "noTributeDownloads",
      defaultValue: false,
      description: "他のサーバーからのキャラクターのダウンロードを無効にします",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "proximityChat",
      defaultValue: false,
      description:
        "チャットメッセージを見ることができるのは、互いに近いプレイヤーのみです",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "serverPVE",
      defaultValue: false,
      description: "PvPを無効にし、PvEを有効にします",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "serverHardcore",
      defaultValue: false,
      description:
        "hardcoreモードを有効にします（死亡時にプレイヤーキャラクターはレベル1に戻ります）",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "serverForceNoHud",
      defaultValue: false,
      description: "HUDは常に無効",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "bDisableStructureDecayPvE",
      defaultValue: false,
      description:
        "プレーヤーの建造物の段階的な（7日間）減衰を無効にします。 パッチ173.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "DisableDinoDecayPvE",
      defaultValue: false,
      description:
        "恐竜の所有権の段階的（7日間）の減衰を無効にします。パッチ206.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AllowFlyerCarryPvE",
      defaultValue: false,
      description:
        "PvEのプレイヤーが騎乗した場合、飛行中の恐竜が他の恐竜やプレイヤーを拾うことを許可します。パッチ173.0で導入",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TheMaxStructuresInRange",
      defaultValue: 10500,
      description:
        "特定の範囲内で構築できる建造物の最大数。パッチ252.1で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "bAllowPlatformSaddleMultiFloors",
      defaultValue: false,
      description:
        "複数のプラットフォームフロアを許可するには、trueに設定します。パッチ260.0で導入",
    },
    {
      type: "numeric",
      section: "/script/engine.gamesession",
      settingKey: "MaxPlayers",
      defaultValue: 70,
      description: "サーバーで同時にプレイできるプレーヤーの最大数を指定します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DifficultyOffset",
      defaultValue: 0.2,
      description:
        "難易度を指定します。https://ark.fandom.com/ja/wiki/難易度",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "ServerPassword",
      defaultValue: "",
      description:
        "サーバーにパスワードを設定します。空欄にするとパスワードなしになります。",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "ServerAdminPassword",
      defaultValue: "",
      description:
        "管理者以外が観戦モードを使用するには、サーバーは観戦モードのパスワードを指定する必要があります。パッチ191.0参照",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "SpectatorPassword",
      defaultValue: "",
      description:
        "指定されている場合、プレイヤーはこのパスワードを（ゲーム内コンソール経由で）入力して管理者コマンドにアクセスします。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DayCycleSpeedScale",
      defaultValue: 1.0,
      description:
        "ARKの時間経過のスケーリング係数を指定し、昼が夜に変わり、夜が昼に変わる頻度を制御します。ARKの時間経過のスケーリング係数を指定し、日が夜に変わり、夜が日に変わる頻度を制御します。デフォルト値1は、シングルプレイヤーエクスペリエンス（および公式のパブリックサーバー）と同じサイクル速度を提供します。1より小さい値はサイクルを遅くします。 値が大きいほど加速します。 値が1の場合の基準時間は、1分であるように見えます。 ゲーム時間28分。 したがって、ゲームのおよそ24時間の昼/夜サイクルでは、値に.035を使用します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "NightTimeSpeedScale",
      defaultValue: 1.0,
      description:
        "夜間のARKの時間経過のスケーリング係数を指定します。 この値は、（DayTimeSpeedScaleで指定された）各昼の長さに対する各夜の長さを決定します。この値を小さくすると、各夜の長さが長くなります。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DayTimeSpeedScale",
      defaultValue: 1.0,
      description:
        "昼間のARKの時間経過のスケーリング係数を指定します。 この値は、（NightTimeSpeedScaleで指定された）各夜の長さに対する相対的な昼の長さを決定します。この値を小さくすると、各昼の長さが長くなります。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoDamageMultiplier",
      defaultValue: 1.0,
      description:
        "恐竜が攻撃に対処するダメージのスケーリング係数を指定します。 デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerDamageMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤーが攻撃に対処するダメージの倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "StructureDamageMultiplier",
      defaultValue: 1.0,
      description:
        "攻撃に対処する損傷建造物（つまり、壁のスパイク）のスケーリング係数を指定します。デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerResistanceMultiplier",
      defaultValue: 1.0,
      description:
        "攻撃を受けたときにプレイヤーが受けるダメージに対する抵抗の倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、プレーヤーのダメージは半分になり、値が2.0の場合、通常のダメージは2倍になります。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoResistanceMultiplier",
      defaultValue: 1.0,
      description:
        "	攻撃されたときに恐竜が受けるダメージに対する耐性の倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、恐竜は半分のダメージを受け、値が2.0の場合、恐竜は通常の2倍のダメージを受けます。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "StructureResistanceMultiplier",
      defaultValue: 1.0,
      description:
        "	攻撃されたときに受ける建造物のダメージに対する耐性のスケーリング係数を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、建造物のダメージは半分になり、値が2.0の場合、建造物のダメージは通常の2倍になります。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "XPMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤー、トライブ、恐竜がさまざまなアクションで受け取る経験値のスケーリング係数を指定します。 デフォルト値1は、シングルプレイヤー経験値（および公式のパブリックサーバー）と同じ量の経験値を提供します。 値を大きくすると、さまざまなアクションに対して付与されるXP量が増加します。 値が小さいほど減少します。253.0では、追加のハードコードされた2の乗数が有効になりました。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PvEStructureDecayPeriodMultiplier",
      defaultValue: 1.0,
      description:
        "PvEモードでのプレーヤー構造の減衰率のスケーリング係数を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PvEStructureDecayDestructionPeriod",
      defaultValue: 0,
      description:
        "プレイヤーの構造がPvEモードで減衰するのに必要な時間を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PvEDinoDecayPeriodMultiplier",
      defaultValue: 1.0,
      description:
        "... パッチ206.0で導入。(推測→)PvEモードでの恐竜の減衰率のスケーリング係数を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TamingSpeedMultiplier",
      defaultValue: 1.0,
      description: "恐竜のテイム速度のスケーリング係数を指定します。 値が大きいほど、テイムが速くなります。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "HarvestAmountMultiplier",
      defaultValue: 1.0,
      description:
        "すべての収穫活動（木を切り倒したり、果実を摘んだり、死体の肉を切り分けたり、岩を採掘したりなど）からの収量の倍率を指定します。 値を大きくすると、打ち込むごとに収穫される材料の量が増えます。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "HarvestHealthMultiplier",
      defaultValue: 1.0,
      description:
        "収穫できるアイテム（樹木、岩、死体など）の「体力」のスケーリング係数を指定します。 値を大きくすると、そのようなオブジェクトが破壊される前に耐えることができるダメージの量（つまり「打ち込む数」）が増加し、全体的な収穫量が増加します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "MaxPlatformSaddleStructureLimit",
      defaultValue: 10,
      description:
        "ARKで許可されるプラットフォーム生物/いかだの最大数を変更します（潜在的なパフォーマンスコスト）例: MaxPlatformSaddleStructureLimit=10では、ARK全体で10個のプラットフォームサドル/いかだのみが許可されます。パッチ212.1で導入",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PerPlatformMaxStructuresMultiplier",
      defaultValue: 1.0,
      description:
        "サドルといかだに配置できるアイテムの最大数（パーセントスケール）の最大数。例: PerPlatformMaxStructuresMultiplier=1.5 (パッチ211.0で導入)",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "ResourcesRespawnPeriodMultiplier",
      defaultValue: 1.0,
      description:
        "リソースノード（木、岩、茂みなど）のリスポーンレートのスケーリング係数を指定します。 値を小さくすると、ノードがより頻繁に再生成されます。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerCharacterWaterDrainMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤーキャラクターの水消費量の倍率を指定します。 値を大きくすると、水の消費量が増加します（プレイヤーキャラクターの渇きが早くなります）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerCharacterFoodDrainMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤーキャラクターの食物消費のスケーリング係数を指定します。 値を大きくすると、食物消費量が増加します（プレイヤーキャラクターはより早く空腹になります）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerCharacterStaminaDrainMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤーキャラクターのスタミナ消費のスケーリング係数を指定します。 値を大きくすると、スタミナの消費が増加します（プレイヤーキャラクターの疲れが早くなります）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlayerCharacterHealthRecoveryMultiplier",
      defaultValue: 1.0,
      description:
        "プレイヤーキャラクターの体力回復の倍率を指定します。 値を大きくすると回復率が上がります（プレイヤーキャラクターの回復が速くなります）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoCharacterFoodDrainMultiplier",
      defaultValue: 1.0,
      description:
        "恐竜の食物消費の倍率を指定します。 より高い値は食物消費を増加させます（恐竜はより早く空腹になります）。 また、テイム時間にも影響します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoCharacterStaminaDrainMultiplier",
      defaultValue: 1.0,
      description:
        "恐竜のスタミナ消費のスケーリング係数を指定します。 値を大きくすると、スタミナの消費が増加します（恐竜は早く疲れます）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoCharacterHealthRecoveryMultiplier",
      defaultValue: 1.0,
      description:
        "恐竜の体力回復のスケーリング係数を指定します。 値が大きいほど回復率が高くなります（恐竜の回復が早くなります）。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "DinoCountMultiplier",
      defaultValue: 1.0,
      description: "恐竜のスポーンの倍率を指定します。 値を大きくすると、ARK全体に出現する恐竜の数が増えます。",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AllowCaveBuildingPvE",
      defaultValue: false,
      description:
        "Trueに設定すると、PvEモードも有効になっているときに洞窟内での建造が許可されます。パッチ194.0で導入",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "BanListURL",
      defaultValue: `"http://arkdedicated.com/banlist.txt"`,
      description:
        "公式のグローバル禁止リストを使用するか、必要なオンライン禁止リストを指定します。 二重引用符で囲む必要があります。279.233より前のURLはhttp://playark.com/banlist.txtでした。パッチ201.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "PvPStructureDecay",
      defaultValue: false,
      description: "PvPサーバーの建造物崩壊をオフにします。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TributeItemExpirationSeconds",
      defaultValue: 86400,
      description: "アップロードされたアイテムの有効期限タイマーを設定します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TributeDinoExpirationSeconds",
      defaultValue: 86400,
      description: "アップロードされた恐竜の有効期限タイマーを設定します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TributeCharacterExpirationSeconds",
      defaultValue: 86400,
      description: "アップロードされたサバイバーの有効期限タイマーを設定します。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "AutoSavePeriodMinutes",
      defaultValue: 15.0,
      description: "自動保存の間隔を設定する",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "NPCNetworkStasisRangeScalePlayerCountStart",
      defaultValue: ``,
      description:
        "不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "NPCNetworkStasisRangeScalePlayerCountEnd",
      defaultValue: ``,
      description:
        "不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "NPCNetworkStasisRangeScalePercentEnd",
      defaultValue: ``,
      description:
        "不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）floatとなっているがデフォルト値が空のためテキストで対応。",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "bUseCorpseLocator",
      defaultValue: false,
      description: "trueに設定されている場合、死亡した場所に緑色の光ビームが表示されます",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "CrossARKAllowForeignDinoDownloads",
      defaultValue: false,
      description: "trueに設定されている場合、Aberrationマップでダウンロードした非ネイティブ生物をトリビュートできます。パッチ275.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "DisablePvEGamma",
      defaultValue: false,
      description: "PvEモードでコンソールコマンド「gamma」を使用できないようにします。パッチ207.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "EnablePvPGamma",
      defaultValue: false,
      description: "PvPモードでコンソールコマンド「gamma」の使用を許可する。パッチ174.3で導入",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "TribeNameChangeCooldown",
      defaultValue: 15,
      description: "トライブ名の変更の間のクールダウン、分単位。パッチ278.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AllowHideDamageSourceFromLogs",
      defaultValue: false,
      description: "トライブのログにダメージ源を隠すことができます。パッチ278.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "RandomSupplyCratePoints",
      defaultValue: false,
      description:
        "trueの場合、サプライドロップはランダムな場所にあります。 注：この設定は、アクティブな場合、[Ragnarok]でアーティファクトがアクセス不能になることが知られています。パッチ278.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "DisableWeatherFog",
      defaultValue: false,
      description: "trueの場合、霧を無効にします。パッチ278.0で導入",
    },
    {
      type: "textbox",
      section: "ServerSettings",
      settingKey: "ActiveMods",
      defaultValue: ``,
      description:
        "順序とロードするmodを指定します。ModELはコンマで区切って1行にする必要があります。パッチ190.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AdminLogging",
      defaultValue: false,
      description: "すべての管理者コマンドをゲーム内チャットに記録します。パッチ206.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "ClampResourceHarvestDamage",
      defaultValue: false,
      description: "恐竜によって引き起こされるダメージを収穫のためのリソースに制限します。パッチ182.0で導入",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "PlatformSaddleBuildAreaBoundsMultiplier",
      defaultValue: 1.0,
      description: "数を増やすと、プラットフォームから離れた場所に建造物を配置できます。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "MaxTamedDinos",
      defaultValue: 4000,
      description: "サーバー上のテイムされた恐竜の最大数を設定します。これは全体での上限です。パッチ191.0で導入",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AllowMultipleTamedUnicorns",
      defaultValue: false,
      description:
        "false = 一度にマップ上の1つのユニコーン、 true = 野生の無制限の飼いならされたユニコーンがマップ上に1つあります。*現在、この設定は適切に機能していないようです。この項目はDLC Ragnarokをプレイしている場合にのみ利用可能です。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "UnicornSpawnInterval",
      defaultValue: 24,
      description:
        "野生のUnicornが殺された場合（またはAllowMultipleTamedUnicornsが有効になっている場合は飼いならされた場合）、新しいユニコーンをスポーンする前にゲームが待機する時間。 この値は最小時間（時間単位）を設定し、最大値はこの値の2倍に等しくなります。この項目はDLC Ragnarokをプレイしている場合にのみ利用可能です。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "VolcanoIntensity",
      defaultValue: 24,
      description:
        "値が低いほど、火山の噴火は激しくなります。 1のままにすることをお勧めします。最小値は0.25です。マルチプレイヤーゲームの場合、0.5未満にしないでください。 非常に高い数値は、基本的に火山から飛び出した炎のような岩を無効にします。この項目はDLC Ragnarokをプレイしている場合にのみ利用可能です。",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "VolcanoInterval",
      defaultValue: 0,
      description:
        "0 = 5000 (最小) - 15000 (最大) 火山のインスタンスがアクティブになるまでの秒数。 0を超える数値は乗数として機能し、最小値は.1です。この項目はDLC Ragnarokをプレイしている場合にのみ利用可能です。",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "EnableVolcano",
      defaultValue: false,
      description: "false = 無効 (火山は活発になりません), 有効 = enabled。この項目はDLC Ragnarokをプレイしている場合にのみ利用可能です。",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AlwaysAllowStructurePickup",
      defaultValue: false,
      description: "trueの場合、クイックピックアップシステムのタイマーが無効になります",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "StructurePickupTimeAfterPlacement",
      defaultValue: 30.0,
      description: "クイックピックアップが利用可能な配置後の秒数",
    },
    {
      type: "checkbox",
      section: "ServerSettings",
      settingKey: "AllowIntegratedSPlusStructures",
      defaultValue: true,
      description:
        "falseの場合、すべての新しいS+建造物が無効になります（主に、S+ modバージョンを使用し続けたい非公式者が、余分な重複構造なしでそれを使用し続けることを目的としています）",
    },
    {
      type: "numeric",
      section: "ServerSettings",
      settingKey: "StructurePickupHoldDuration",
      defaultValue: 0.5,
      description:
        "クイックピックアップのホールド期間を指定するために使用します。0を使用して、無効にしてインスタントピックアップを使用します",
    },
  ];

  // 検索クエリが含まれている場合、settingKeyもしくはdescriptionに検索語がある項目をフィルター
  const filteredSettings = settingsList.filter(
    (item) =>
      item.settingKey.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 各設定項目を対応するコンポーネントに変換
  const renderSetting = (item: SettingItem, index: number) => {
    switch (item.type) {
      case "checkbox":
        return (
          <Checkbox
            key={index}
            iniData={iniData}
            section={item.section}
            settingKey={item.settingKey}
            defaultValue={item.defaultValue}
            onChange={checkBoxHandleChange}
            description={item.description}
          />
        );
      case "numeric":
        return (
          <Numeric
            key={index}
            iniData={iniData}
            section={item.section}
            settingKey={item.settingKey}
            defaultValue={item.defaultValue}
            onChange={textHandleChange}
            description={item.description}
          />
        );
      case "textbox":
        return (
          <TextBox
            key={index}
            iniData={iniData}
            section={item.section}
            settingKey={item.settingKey}
            defaultValue={item.defaultValue}
            onChange={textHandleChange}
            description={item.description}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>ARK Settings GameUserSettings.ini</h2>

      {/* 検索フィールド */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="settingKeyまたはdescriptionで検索"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#333333",
            color: "#C0C0C0"
          }}
        />
      </div>

      {filteredSettings.length > 0 ? (
        filteredSettings.map((item, index) => renderSetting(item, index))
      ) : (
        <p>該当する設定項目はありません</p>
      )}

    </div>
  );
};

export default GameUserSettings;

import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import React from "react";
import TextBox from "./TextBox";
import Numeric from "./Numeric";

export interface GameUserSettingsProps {
  iniData: IniParser | undefined;
  checkBoxHandleChange: (
    section: string,
    key: string,
    newValue: boolean
  ) => void;
  textHandleChange: (section: string, key: string, newValue: string) => void;
}

const GameUserSettings: React.FC<GameUserSettingsProps> = ({
  iniData,
  checkBoxHandleChange,
  textHandleChange,
}) => {
  return (
    <div>
      <h2>ARK Settings GameUserSettings.ini</h2>

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="alwaysNotifyPlayerJoined"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="	誰かがサーバーに参加すると、プレイヤーに常に通知されます"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="allowThirdPersonPlayer"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="	三人称視点を有効にします"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="globalVoiceChat"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="ボイスチャットがグローバルになります"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="ShowMapPlayerLocation"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="各プレイヤーがマップを表示するときに、自分の正確な位置を表示します"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="noTributeDownloads"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="他のサーバーからのキャラクターのダウンロードを無効にします"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="proximityChat"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="チャットメッセージを見ることができるのは、互いに近いプレイヤーのみです"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="serverPVE"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvPを無効にし、PvEを有効にします"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="serverHardcore"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="hardcoreモードを有効にします（死亡時にプレイヤーキャラクターはレベル1に戻ります）"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="serverForceNoHud"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="HUDは常に無効"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="bDisableStructureDecayPvE"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="プレーヤーの建造物の段階的な（7日間）減衰を無効にします。パッチ173.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="DisableDinoDecayPvE"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="	恐竜の所有権の段階的（7日間）の減衰を無効にします。 これがtrueに設定されていない場合、すべての恐竜はどのプレイヤーでも獲得できます。パッチ206.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="AllowFlyerCarryPvE"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvEのプレイヤーが騎乗した場合、飛行中の恐竜が他の恐竜やプレイヤーを拾うことを許可します。パッチ173.0で導入されましたが、bAllowFlyerCarryPVEからAllowFlyerCarryPVEに変更されました"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={10500}
        settingKey="TheMaxStructuresInRange"
        onChange={textHandleChange}
        description="特定の（現在ハードコーディングされている）範囲内で構築できる建造物の最大数を指定します。パッチ252.1で導入され、古い値NewMaxStructuresInRangeを置き換えます"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="bAllowPlatformSaddleMultiFloors"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="複数のプラットフォームフロアを許可するには、trueに設定します。パッチ260.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/engine.gamesession"
        defaultValue={70}
        settingKey="MaxPlayers"
        onChange={textHandleChange}
        description="サーバーで同時にプレイできるプレーヤーの最大数を指定します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={0.2}
        settingKey="DifficultyOffset"
        onChange={textHandleChange}
        description="難易度を指定します。https://ark.fandom.com/ja/wiki/難易度"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={""}
        settingKey="ServerPassword"
        onChange={textHandleChange}
        description="サーバーにパスワードを設定します。空欄にするとパスワードなしになります。"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={""}
        settingKey="ServerAdminPassword"
        onChange={textHandleChange}
        description="管理者以外が観戦モードを使用するには、サーバーは観戦モードのパスワードを指定する必要があります。 その後、すべての来訪者がこれらのコンソールコマンドを使用できます: requestspectator <password>およびstopspectating。詳細およびホットキーについては、パッチ191.0を参照してください。"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={""}
        settingKey="SpectatorPassword"
        onChange={textHandleChange}
        description="指定されている場合、プレイヤーはこのパスワードを（ゲーム内コンソールを介して）提供して、サーバー上の管理者コマンドにアクセスする必要があります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DayCycleSpeedScale"
        onChange={textHandleChange}
        description="ARKの時間経過のスケーリング係数を指定し、昼が夜に変わり、夜が昼に変わる頻度を制御します。ARKの時間経過のスケーリング係数を指定し、日が夜に変わり、夜が日に変わる頻度を制御します。デフォルト値1は、シングルプレイヤーエクスペリエンス（および公式のパブリックサーバー）と同じサイクル速度を提供します。1より小さい値はサイクルを遅くします。 値が大きいほど加速します。 値が1の場合の基準時間は、1分であるように見えます。 ゲーム時間28分。 したがって、ゲームのおよそ24時間の昼/夜サイクルでは、値に.035を使用します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="NightTimeSpeedScale"
        onChange={textHandleChange}
        description="夜間のARKの時間経過のスケーリング係数を指定します。 この値は、（DayTimeSpeedScaleで指定された）各昼の長さに対する各夜の長さを決定します。この値を小さくすると、各夜の長さが長くなります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DayTimeSpeedScale"
        onChange={textHandleChange}
        description="昼間のARKの時間経過のスケーリング係数を指定します。 この値は、（NightTimeSpeedScaleで指定された）各夜の長さに対する相対的な昼の長さを決定します。この値を小さくすると、各昼の長さが長くなります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoDamageMultiplier"
        onChange={textHandleChange}
        description="恐竜が攻撃に対処するダメージのスケーリング係数を指定します。 デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerDamageMultiplier"
        onChange={textHandleChange}
        description="プレイヤーが攻撃に対処するダメージの倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="StructureDamageMultiplier"
        onChange={textHandleChange}
        description="攻撃に対処する損傷建造物（つまり、壁のスパイク）のスケーリング係数を指定します。デフォルト値1は通常のダメージを与えます。 値が大きいほどダメージが大きくなります。 値が小さいほど減少します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerResistanceMultiplier"
        onChange={textHandleChange}
        description="攻撃を受けたときにプレイヤーが受けるダメージに対する抵抗の倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、プレーヤーのダメージは半分になり、値が2.0の場合、通常のダメージは2倍になります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoResistanceMultiplier"
        onChange={textHandleChange}
        description="	攻撃されたときに恐竜が受けるダメージに対する耐性の倍率を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、恐竜は半分のダメージを受け、値が2.0の場合、恐竜は通常の2倍のダメージを受けます。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="StructureResistanceMultiplier"
        onChange={textHandleChange}
        description="	攻撃されたときに受ける建造物のダメージに対する耐性のスケーリング係数を指定します。 デフォルト値1は通常のダメージを与えます。 値を大きくすると抵抗が減少し、攻撃ごとのダメージが増加します。 値を小さくすると増加し、攻撃ごとのダメージが減少します。 値が0.5の場合、建造物のダメージは半分になり、値が2.0の場合、建造物のダメージは通常の2倍になります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="XPMultiplier"
        onChange={textHandleChange}
        description="プレイヤー、トライブ、恐竜がさまざまなアクションで受け取る経験値のスケーリング係数を指定します。 デフォルト値1は、シングルプレイヤー経験値（および公式のパブリックサーバー）と同じ量の経験値を提供します。 値を大きくすると、さまざまなアクションに対して付与されるXP量が増加します。 値が小さいほど減少します。253.0では、追加のハードコードされた2の乗数が有効になりました。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PvEStructureDecayPeriodMultiplier"
        onChange={textHandleChange}
        description="PvEモードでのプレーヤー構造の減衰率のスケーリング係数を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={0}
        settingKey="PvEStructureDecayDestructionPeriod"
        onChange={textHandleChange}
        description="プレイヤーの構造がPvEモードで減衰するのに必要な時間を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PvEDinoDecayPeriodMultiplier"
        onChange={textHandleChange}
        description="... パッチ206.0で導入。(推測→)PvEモードでの恐竜の減衰率のスケーリング係数を指定します。 このオプションの具体的な効果と有効な値の範囲は、この記事の執筆時点では不明です"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="TamingSpeedMultiplier"
        onChange={textHandleChange}
        description="恐竜のテイム速度のスケーリング係数を指定します。 値が大きいほど、テイムが速くなります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="HarvestAmountMultiplier"
        onChange={textHandleChange}
        description="すべての収穫活動（木を切り倒したり、果実を摘んだり、死体の肉を切り分けたり、岩を採掘したりなど）からの収量の倍率を指定します。 値を大きくすると、打ち込むごとに収穫される材料の量が増えます。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="HarvestHealthMultiplier"
        onChange={textHandleChange}
        description="収穫できるアイテム（樹木、岩、死体など）の「体力」のスケーリング係数を指定します。 値を大きくすると、そのようなオブジェクトが破壊される前に耐えることができるダメージの量（つまり「打ち込む数」）が増加し、全体的な収穫量が増加します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={10}
        settingKey="MaxPlatformSaddleStructureLimit"
        onChange={textHandleChange}
        description="ARKで許可されるプラットフォーム生物/いかだの最大数を変更します（潜在的なパフォーマンスコスト）例: MaxPlatformSaddleStructureLimit=10では、ARK全体で10個のプラットフォームサドル/いかだのみが許可されます。パッチ212.1で導入"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PerPlatformMaxStructuresMultiplier"
        onChange={textHandleChange}
        description="サドルといかだに配置できるアイテムの最大数（パーセントスケール）の最大数。例: PerPlatformMaxStructuresMultiplier=1.5 (パッチ211.0で導入)"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="ResourcesRespawnPeriodMultiplier"
        onChange={textHandleChange}
        description="リソースノード（木、岩、茂みなど）のリスポーンレートのスケーリング係数を指定します。 値を小さくすると、ノードがより頻繁に再生成されます。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerCharacterWaterDrainMultiplier"
        onChange={textHandleChange}
        description="プレイヤーキャラクターの水消費量の倍率を指定します。 値を大きくすると、水の消費量が増加します（プレイヤーキャラクターの渇きが早くなります）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerCharacterFoodDrainMultiplier"
        onChange={textHandleChange}
        description="プレイヤーキャラクターの食物消費のスケーリング係数を指定します。 値を大きくすると、食物消費量が増加します（プレイヤーキャラクターはより早く空腹になります）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerCharacterStaminaDrainMultiplier"
        onChange={textHandleChange}
        description="プレイヤーキャラクターのスタミナ消費のスケーリング係数を指定します。 値を大きくすると、スタミナの消費が増加します（プレイヤーキャラクターの疲れが早くなります）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlayerCharacterHealthRecoveryMultiplier"
        onChange={textHandleChange}
        description="プレイヤーキャラクターの体力回復の倍率を指定します。 値を大きくすると回復率が上がります（プレイヤーキャラクターの回復が速くなります）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoCharacterFoodDrainMultiplier"
        onChange={textHandleChange}
        description="恐竜の食物消費の倍率を指定します。 より高い値は食物消費を増加させます（恐竜はより早く空腹になります）。 また、テイム時間にも影響します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoCharacterStaminaDrainMultiplier"
        onChange={textHandleChange}
        description="恐竜のスタミナ消費のスケーリング係数を指定します。 値を大きくすると、スタミナの消費が増加します（恐竜は早く疲れます）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoCharacterHealthRecoveryMultiplier"
        onChange={textHandleChange}
        description="恐竜の体力回復のスケーリング係数を指定します。 値が大きいほど回復率が高くなります（恐竜の回復が早くなります）。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="DinoCountMultiplier"
        onChange={textHandleChange}
        description="恐竜のスポーンの倍率を指定します。 値を大きくすると、ARK全体に出現する恐竜の数が増えます。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="AllowCaveBuildingPvE"
        onChange={textHandleChange}
        description="Trueに設定すると、PvEモードも有効になっているときに洞窟内での建造が許可されます。パッチ194.0で導入"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={`"http://arkdedicated.com/banlist.txt"`}
        settingKey="BanListURL"
        onChange={textHandleChange}
        description="公式のグローバル禁止リストを使用するか、必要なオンライン禁止リストを指定します。 二重引用符で囲む必要があります。279.233より前のURLはhttp://playark.com/banlist.txtでした。パッチ201.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="PvPStructureDecay"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvPサーバーの建造物崩壊をオフにします。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={86400}
        settingKey="TributeItemExpirationSeconds"
        onChange={textHandleChange}
        description="アップロードされたアイテムの有効期限タイマーを設定します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={86400}
        settingKey="TributeDinoExpirationSeconds"
        onChange={textHandleChange}
        description="アップロードされた恐竜の有効期限タイマーを設定します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={86400}
        settingKey="TributeCharacterExpirationSeconds"
        onChange={textHandleChange}
        description="アップロードされたサバイバーの有効期限タイマーを設定します。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={15.0}
        settingKey="AutoSavePeriodMinutes"
        onChange={textHandleChange}
        description="自動保存の間隔を設定する"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={``}
        settingKey="NPCNetworkStasisRangeScalePlayerCountStart"
        onChange={textHandleChange}
        description="不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={``}
        settingKey="NPCNetworkStasisRangeScalePlayerCountEnd"
        onChange={textHandleChange}
        description="不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={``}
        settingKey="NPCNetworkStasisRangeScalePercentEnd"
        onChange={textHandleChange}
        description="不明（おそらく、プレイヤー数に基づいてNPCのネットワークスタシス範囲を調整するための設定）floatとなっているがデフォルト値が空のためテキストで対応。"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="bUseCorpseLocator"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueに設定されている場合、死亡した場所に緑色の光ビームが表示されます"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="CrossARKAllowForeignDinoDownloads"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueに設定されている場合、Aberrationマップでダウンロードした非ネイティブ生物をトリビュートできます。パッチ275.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="DisablePvEGamma"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvEモードでコンソールコマンド「gamma」を使用できないようにします。パッチ207.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="EnablePvPGamma"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvPモードでコンソールコマンド「gamma」の使用を許可する。パッチ174.3で導入"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={15}
        settingKey="TribeNameChangeCooldown"
        onChange={textHandleChange}
        description="トライブ名の変更の間のクールダウン、分単位。パッチ278.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="AllowHideDamageSourceFromLogs"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="トライブのログにダメージ源を隠すことができます。パッチ278.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="RandomSupplyCratePoints"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueの場合、サプライドロップはランダムな場所にあります。 注：この設定は、アクティブな場合、[Ragnarok]でアーティファクトがアクセス不能になることが知られています。パッチ278.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="DisableWeatherFog"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueの場合、霧を無効にします。パッチ278.0で導入"
      />

      <TextBox
        iniData={iniData}
        section="ServerSettings"
        defaultValue={``}
        settingKey="ActiveMods"
        onChange={textHandleChange}
        description="順序とロードするmodを指定します。ModELはコンマで区切って1行にする必要があります。パッチ190.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="AdminLogging"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="すべての管理者コマンドをゲーム内チャットに記録します。パッチ206.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="ClampResourceHarvestDamage"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="恐竜によって引き起こされるダメージを収穫のためのリソースに制限します。パッチ182.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={1.0}
        settingKey="PlatformSaddleBuildAreaBoundsMultiplier"
        onChange={textHandleChange}
        description="数を増やすと、プラットフォームから離れた場所に建造物を配置できます。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={4000}
        settingKey="MaxTamedDinos"
        onChange={textHandleChange}
        description="サーバー上のテイムされた恐竜の最大数を設定します。これは全体での上限です。パッチ191.0で導入"
      />

      <h3>以下はDLC Ragnarokをプレイしている場合にのみ利用可能です。</h3>

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="AllowMultipleTamedUnicorns"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="false = 一度にマップ上の1つのユニコーン、 true = 野生の無制限の飼いならされたユニコーンがマップ上に1つあります。*現在、この設定は適切に機能していないようです"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={24}
        settingKey="UnicornSpawnInterval"
        onChange={textHandleChange}
        description="野生のUnicornが殺された場合（またはAllowMultipleTamedUnicornsが有効になっている場合は飼いならされた場合）、新しいユニコーンをスポーンする前にゲームが待機する時間。 この値は最小時間（時間単位）を設定し、最大値はこの値の2倍に等しくなります。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={24}
        settingKey="VolcanoIntensity"
        onChange={textHandleChange}
        description="値が低いほど、火山の噴火は激しくなります。 1のままにすることをお勧めします。最小値は0.25です。マルチプレイヤーゲームの場合、0.5未満にしないでください。 非常に高い数値は、基本的に火山から飛び出した炎のような岩を無効にします。"
      />

      <Numeric
        iniData={iniData}
        section="ServerSettings"
        defaultValue={0}
        settingKey="VolcanoInterval"
        onChange={textHandleChange}
        description="0 = 5000 (最小) - 15000 (最大) 火山のインスタンスがアクティブになるまでの秒数。 0を超える数値は乗数として機能し、最小値は.1です。"
      />

      <Checkbox
        iniData={iniData}
        section="ServerSettings"
        settingKey="EnableVolcano"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="false = 無効 (火山は活発になりません), 有効 = enabled"
      />

    </div>
  );
};

export default GameUserSettings;

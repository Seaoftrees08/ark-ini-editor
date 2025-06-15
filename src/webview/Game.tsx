import { IniParser } from "../iniPerser";
import Checkbox from "./CheckBox";
import React from "react";
import Numeric from "./Numeric";
import TextBox from "./TextBox";

export interface GameProps {
  iniData: IniParser | undefined;
  checkBoxHandleChange: (
    section: string,
    key: string,
    newValue: boolean
  ) => void;
  textHandleChange: (section: string, key: string, newValue: string) => void;
}

const Game: React.FC<GameProps> = ({
  iniData,
  checkBoxHandleChange,
  textHandleChange,
}) => {
  return (
    <div>
      <h2>ARK Settings Game.ini</h2>

      {/* <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="ConfigOverrideItemMaxQuantity"
        onChange={textHandleChange}
        description="アイテムごとにアイテムのスタックサイズを手動でオーバーライドできます。参考：https://ark.fandom.com/ja/wiki/サーバー構成#Game.ini"
      /> */}

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bAllowUnlimitedRespecs"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueに設定すると、24時間のクールダウンなしでMindwipe Tonicを複数回使用できます。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bOnlyAllowSpecifiedEngrams"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueの場合、OverrideEngramEntriesまたはOverrideNamedEngramEntriesリストで明示的に指定されていないエングラムは非表示になります。 非表示のエングラムに基づくすべてのアイテムとブループリントは削除されます。パッチ187.0で導入"
      />

      {/* <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="LevelExperienceRampOverrides"
        onChange={textHandleChange}
        description="プレイヤーと恐竜が利用できるレベルの総数と、各レベルに到達するために必要な経験値を設定します。参考：https://ark.fandom.com/ja/wiki/サーバー構成#Game.ini"
      /> */}

      {/* <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="OverridePlayerLevelEngramPoints"
        onChange={textHandleChange}
        description="獲得した各レベルのプレーヤーに付与されるエングラムポイントの数を設定します。このオプションは、サーバーで構成されている各プレーヤーレベルで繰り返す必要があります。 65のプレーヤーレベルが使用可能な場合、このオプションは構成ファイルに65回表示されます。 オプションの最初の外観は、レベル1に到達するためのエングラムポイントを構成します。次のオプションは、レベル2のエングラムポイントを構成し、レベル65のエングラムポイントを構成する65番目の外観まで続きます。"
      /> */}

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="GlobalSpoilingTimeMultiplier"
        onChange={textHandleChange}
        description="生鮮食品の腐敗時間を世界規模で拡大します。 値が大きいほど時間が長くなります。 （注：パッチ196.0の時点では、この値が何に設定されていても、プレイヤーのインベントリに移動されたアイテムの腐敗時間が通常（値1.0）にリセットされるバグがまだあります。248.5 修正されました。）パッチ189.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="GlobalItemDecompositionTimeMultiplier"
        onChange={textHandleChange}
        description="ドロップされたアイテム、戦利品バッグなどの分解時間をグローバルにスケーリングします。 値が大きいほど時間が長くなります。パッチ189.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="GlobalCorpseDecompositionTimeMultiplier"
        onChange={textHandleChange}
        description="死体（プレイヤーと恐竜）の分解時間をグローバルにスケーリングします。 値が大きいほど時間が長くなります。パッチ189.0で導入"
      />

      {/* <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="HarvestResourceItemAmountClassMultipliers"
        onChange={textHandleChange}
        description="収集されるリソースの量であるリソースタイプごとにスケーリングします。 値を大きくすると、打つ/攻撃ごとの量が増えます。参考：https://ark.fandom.com/ja/wiki/サーバー構成#Game.ini"
      /> */}

      {/* <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0} //初期値不明
        settingKey="OverrideMaxExperiencePointsPlayer"
        onChange={textHandleChange}
        description="プレイヤーのそれぞれの最大XPキャップを、指定された量だけ上書きします。パッチ189.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0} //初期値不明
        settingKey="OverrideMaxExperiencePointsDino"
        onChange={textHandleChange}
        description="恐竜のそれぞれの最大XPキャップを、指定された量だけ上書きします。パッチ189.0で導入"
      /> */}

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="PreventDinoTameClassNames"
        onChange={textHandleChange}
        description="クラス名による特定の恐竜のテイムを防ぎます。 クラス名：https://ark.fandom.com/ja/wiki/Creature_IDs パッチ194.0で導入"
      />

      {/* <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="DinoClassDamageMultipliers"
        onChange={textHandleChange}
        description="クラス名を介して特定の恐竜に与えられたダメージを掛けます。 値を大きくすると、与えるダメージが増加します。 クラス名：https://ark.fandom.com/ja/wiki/Creature_IDs パッチ194.0で導入"
      />

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="DinoClassResistanceMultipliers"
        onChange={textHandleChange}
        description="クラス名を介して特定の恐竜の抵抗を掛けます。 値が大きいほど、受けるダメージが減少します。 クラス名：https://ark.fandom.com/ja/wiki/Creature_IDs パッチ194.0で導入"
      /> */}

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="ResourceNoReplenishRadiusPlayers"
        onChange={textHandleChange}
        description="リソースがプレイヤーや構造物に近づいたり遠ざかったりするのを許可します。 1より大きい値を設定すると、リソースを元に戻せないプレーヤーや構造物の周囲の距離が長くなります。 0から1の間の値はそれを減らします。パッチ196.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="ResourceNoReplenishRadiusStructures"
        onChange={textHandleChange}
        description="リソースがプレイヤーや構造物に近づいたり遠ざかったりするのを許可します。 1より大きい値を設定すると、リソースを元に戻せないプレーヤーや構造物の周囲の距離が長くなります。 0から1の間の値はそれを減らします。パッチ196.0で導入"
      />

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          PvPサーバーには、オプションの+1分の追加リスポーン(IncreasePvPRespawnIntervalBaseAmount)があり、そのチームが前に死亡してから5分(IncreasePvPRespawnIntervalCheckPeriod)以内にチームによって殺された場合、そのたびに毎回2倍(IncreasePvPRespawnIntervalMultiplier)します（Spawn
          UIに示されるタイマー）。pvpでデフォルトで有効になっており、すべての公式pvpサーバーで有効になっています。自動タレットの犠牲者のプレイヤーに繰り返し投げるPvO弾薬の消耗を防ぐのに役立ちます。
          これらのオプションをアクティブにするには、bIncreasePvPRespawnIntervalをTrueに設定する必要があります。
          パッチ196.0で導入
        </p>

        <Checkbox
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          settingKey="bIncreasePvPRespawnInterval"
          defaultValue={false}
          onChange={checkBoxHandleChange}
          description=""
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={300}
          settingKey="IncreasePvPRespawnIntervalCheckPeriod"
          onChange={textHandleChange}
          description=""
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={2}
          settingKey="IncreasePvPRespawnIntervalMultiplier"
          onChange={textHandleChange}
          description=""
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={60}
          settingKey="IncreasePvPRespawnIntervalBaseAmount"
          onChange={textHandleChange}
          description=""
        />
      </div>

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          事前に指定されたゲーム内時間または事前に指定された実世界（サーバー側）時間でPvEモードからPvPモードに切り替えることができます！
          システム時間とゲーム内時間の使用に関する詳細については、パッチノート196.0を参照してください。これらのオプションを有効にするには、bAutoPvETimerをTrueに設定する必要があります。パッチ196.0で導入
        </p>

        <Checkbox
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          settingKey="bAutoPvETimer"
          defaultValue={false}
          onChange={checkBoxHandleChange}
          description=""
        />

        <Checkbox
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          settingKey="bAutoPvEUseSystemTime"
          defaultValue={false}
          onChange={checkBoxHandleChange}
          description=""
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0}
          settingKey="AutoPvEStartTimeSeconds"
          onChange={textHandleChange}
          description=""
        />
      </div>

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bPvEDisableFriendlyFire"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvEサーバー向けのPrevent-Friendly-Fire（tribesmates / tribesdinos / tribesstructures）オプション。パッチ202.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bDisableFriendlyFire"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="PvPサーバー向けのPrevent-Friendly-Fire（tribesmates / tribesdinos / tribesstructures）オプション。パッチ228.4で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bFlyerPlatformAllowUnalignedDinoBasing"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="Quetzプラットフォームでは、飛行中に同盟のない恐竜をベースにすることはできません。 サーバーで、非同盟ディーノがQuetzプラットフォームに立つことができるようにするには、これをtrueに設定します。パッチ218.3で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="MatingIntervalMultiplier"
        onChange={textHandleChange}
        description="恐竜が交尾できる間隔が（パーセンテージで）大きくなる。例: MatingIntervalMultiplier=0.5の場合、恐竜は50％早く交尾できます。パッチ219.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="MatingSpeedMultiplier"
        onChange={textHandleChange}
        description="恐竜が互いに交尾する速度が（パーセンテージで）高くなる。例: MatingSpeedMultiplier=2.0の場合、恐竜は通常の半分の時間で交尾を完了します。パッチで導入??? （この変数はパッチノートに記載されていません）"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="EggHatchSpeedMultiplier"
        onChange={textHandleChange}
        description="数字が大きいほど、受精卵の孵化に必要な時間が短縮されます（数字）。パッチ219.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyMatureSpeedMultiplier="
        onChange={textHandleChange}
        description="数字が大きいほど、赤ちゃんの恐竜が成熟するのに必要な時間が短縮されます（パーセント）。パッチ219.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyFoodConsumptionSpeedMultiplier"
        onChange={textHandleChange}
        description="数字が小さいほど、赤ちゃんの恐竜が食べ物を食べる速度が低下します（パーセント）。パッチ222.3で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CropGrowthSpeedMultiplier"
        onChange={textHandleChange}
        description="数値が大きいほど作物の成長速度が上がります（パーセント）。パッチ218.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="LayEggIntervalMultiplier"
        onChange={textHandleChange}
        description="数字が大きいほど、卵が産卵/産卵されるまでの時間が長くなります（パーセント）。パッチ218.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="PoopIntervalMultiplier"
        onChange={textHandleChange}
        description="数字が大きくなるほど頻繁に糞をすることができます（パーセント）。パッチ218.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CropDecaySpeedMultiplier"
        onChange={textHandleChange}
        description="数値が大きいほど、プロット内の作物の腐敗の速度が低下します（パーセンテージ）。パッチ218.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="HairGrowthSpeedMultiplier"
        onChange={textHandleChange}
        description="数字が大きいほど、髪の成長速度が上がります。パッチ254.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={180}
        settingKey="StructureDamageRepairCooldown"
        onChange={textHandleChange}
        description="前回の損傷時からの構造修復のクールダウン期間のオプション。 デフォルトで180秒に設定し、無効にするには0。パッチ222.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bPvEAllowTribeWarCancel"
        defaultValue={true}
        onChange={checkBoxHandleChange}
        description="Falseの場合、トライブが相互に合意した期間に互いに戦争を公式に宣言する機能を無効にします。パッチ223.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bPvEAllowTribeWarCancel"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="Trueは、合意された戦争が実際に開始する前にキャンセルすることを許可します。パッチ223.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bPassiveDefensesDamageRiderlessDinos"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="Trueは、スパイクウォールが野生/騎乗していない恐竜にダメージを与えることを許可します。パッチ224.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CustomRecipeEffectivenessMultiplier"
        onChange={textHandleChange}
        description="数値を大きくすると、カスタムレシピの有効性が（パーセンテージで）増加します。パッチ226.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CustomRecipeSkillMultiplier"
        onChange={textHandleChange}
        description="数値を大きくすると、カスタムレシピを作成する際の数式のベースとして使用される速度レベルを作成するプレーヤーの効果が（パーセンテージで）増加します。パッチ226.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={3.2}
        settingKey="DinoHarvestingDamageMultiplier"
        onChange={textHandleChange}
        description="数字が大きいほど、ディノが収穫可能なアイテム/エンティティに与えるダメージが（パーセンテージで）増加します。 数字が大きいほど、より速く収集できます。パッチ231.1で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="PlayerHarvestingDamageMultiplier"
        onChange={textHandleChange}
        description="数字が大きくなると、プレイヤーが収穫可能なアイテム/エンティティに与えるダメージが（パーセンテージで）増加します。 数字が大きいほど、より速く収集できます。パッチ231.1で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="DinoTurretDamageMultiplier"
        onChange={textHandleChange}
        description="数字が大きくなると、タレットがディノに与えるダメージが（パーセンテージで）増加します。パッチ231.4で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="SupplyCrateLootQualityMultiplier"
        onChange={textHandleChange}
        description="供給クレートに品質があるアイテムの品質を向上させます。1~5で指定。品質は難易度オフセットにも依存します。パッチ260.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="FishingLootQualityMultiplier"
        onChange={textHandleChange}
        description="釣りの際に品質を持つアイテムの品質を向上させます。1~5で指定。パッチ260.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={3600}
        settingKey="KickIdlePlayersPeriod"
        onChange={textHandleChange}
        description="移動または相互作用していないキャラクターがキックされるまでの時間（コマンドラインパラメーターとして-EnableIdlePlayerKickが設定されている場合）。パッチ241.5で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="TribeSlotReuseCooldown"
        onChange={textHandleChange}
        description="タイマーとして機能するには、これを0より大きい数に設定します。 秒単位で値の部族スロットをロックします。したがって、3600の値は、誰かが部族を離れた場合、その場所を別のプレイヤーが1時間取得（または再参加）できないことを意味します。公式の小規模部族サーバーで使用されます。パッチ280.114で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="MaxNumberOfPlayersInTribe"
        onChange={textHandleChange}
        description="これを0より大きい数値に設定すると、制限として機能します。 1プレイヤートライブは効果的にトライブを無効にします。パッチ242.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyImprintingStatScaleMultiplier"
        onChange={textHandleChange}
        description="刷り込み品質が統計にどの程度影響するか。 0に設定すると、システムが事実上無効になります。パッチ242.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyCuddleIntervalMultiplier"
        onChange={textHandleChange}
        description="赤ちゃんが抱きしめたい頻度。より頻繁には、刷り込み品質を得るために、より頻繁に寄り添う必要があることを意味します。パッチ242.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyCuddleGracePeriodMultiplier"
        onChange={textHandleChange}
        description="刷り込み品質が低下し始める前に、赤ちゃんとの抱きしめを遅らせた後の長さの乗数。パッチ242.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="BabyCuddleLoseImprintQualitySpeedMultiplier"
        onChange={textHandleChange}
        description="まだ赤ちゃんと抱き合っていない場合、猶予期間後にインプリント品質がどれだけ速く低下するかの乗数。パッチ242.0で導入"
      />

      {/* <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="ConfigOverrideItemCraftingCosts"
        onChange={textHandleChange}
        description=""
      />

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="ConfigOverrideSupplyCrateItems"
        onChange={textHandleChange}
        description=""
      /> */}

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="ExcludeItemIndices"
        onChange={textHandleChange}
        description="供給クレートからアイテムを除外します。 このオプションは複数行にできます。ItemID: https://ark.fandom.com/ja/wiki/Item_IDs"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={100}
        settingKey="MaxTribeLogs"
        onChange={textHandleChange}
        description="各部族について表示される部族ログの数。パッチ224.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={6.0}
        settingKey="PvPZoneStructureDamageMultiplier"
        onChange={textHandleChange}
        description="構造物が洞窟内で受けるダメージのスケーリング係数を指定します。値が低いほど、構造物が受けるダメージが少なくなります（つまり、1.0に設定すると、洞窟内または洞窟の近くに構築された構造物は、サーフェスに構築されたものと同じ量のダメージを受けます）。パッチ187.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bDisableDinoRiding"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="不明。多分、恐竜に乗ることを無効にします。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bDisableDinoTaming"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="不明。多分、恐竜をテイムすることを無効にします。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bDisableStructurePlacementCollision"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="「true」の場合、構造物が地形にクリップされます。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bAllowCustomRecipes"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="不明。おそらく、カスタムレシピを許可します。パッチ224.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bAutoUnlockAllEngrams"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="利用可能なすべてのエングラムのロックを解除します。Ignores OverrideEngramEntriesおよびOverrideNamedEngramEntriesエントリを無視します。パッチ273.62で導入"
      />

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey=""
        onChange={textHandleChange}
        description="指定されたレベルに達すると、指定されたエングラムのロックを自動的に解除します。参考：https://ark.fandom.com/ja/wiki/サーバー構成#Game.ini"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bHardLimitTurretsInRange"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="不明。おそらく、タレットの範囲内のハードリミットを有効にします。パッチ278.0で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bShowCreativeMode"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="クリエイティブモードを有効にします。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={5.0}
        settingKey="PreventOfflinePvPConnectionInvincibleInterval"
        onChange={textHandleChange}
        description="不明。おそらく、オフラインPvP接続の無敵間隔を防ぎます。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="TamedDinoCharacterFoodDrainMultiplier"
        onChange={textHandleChange}
        description="飼いならされた恐竜が食物を消費する速さの乗数。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="WildDinoCharacterFoodDrainMultiplier"
        onChange={textHandleChange}
        description="野生の恐竜が食物を消費する速さの乗数。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="WildDinoTorporDrainMultiplier"
        onChange={textHandleChange}
        description="野生の恐竜がどれほど速く気絶値を失うかの乗数。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="PassiveTameIntervalMultiplier"
        onChange={textHandleChange}
        description="受動的飼いならされた恐竜の飼いならされた要求を取得する頻度の乗数。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="TamedDinoTorporDrainMultiplier"
        onChange={textHandleChange}
        description="飼い慣らされた恐竜がどれほど速く気絶値を失うかの乗数。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="KillXPMultiplier"
        onChange={textHandleChange}
        description="倒して獲得したXPの量をスケーリングする乗数。パッチ243.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="HarvestXPMultiplier"
        onChange={textHandleChange}
        description="収穫のために獲得したXPの量をスケーリングする乗数。パッチ243.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CraftXPMultiplier"
        onChange={textHandleChange}
        description="クラフトで獲得したXPの量をスケーリングする乗数。パッチ243.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="GenericXPMultiplier"
        onChange={textHandleChange}
        description="ジェネリックXPで獲得したXPの量をスケーリングする乗数（時間の経過とともに自動化）。パッチ243.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="SpecialXPMultiplier"
        onChange={textHandleChange}
        description="SpecialEventsで獲得したXPの量をスケーリングする乗数。パッチ243.0で導入"
      />

      <TextBox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={""}
        settingKey="ModIDS"
        onChange={textHandleChange}
        description="追加のSteam Workshop Mods/Maps/TC IDの手動リストを指定して、Game.iniでダウンロード/インストール/更新します（実際にゲーム内で実際に使用するには、通常どおりcommandline（-automanagedmods）を使用）。パッチ244.3で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={43200}
        settingKey="FastDecayInterval"
        onChange={textHandleChange}
        description="「高速崩壊」建造物（柱や孤立した基礎など）の固定定数減衰期間に対してこのオプションを有効にします。 値は秒単位です。"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="MaxAlliancesPerTribe"
        onChange={textHandleChange}
        description="トライブが形成または参加できる最大の同盟を定義します。"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="MaxTribesPerAlliance"
        onChange={textHandleChange}
        description="同盟内のトライブの最大数を定義します。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bUseTameLimitForStructuresOnly"
        defaultValue={false}
        onChange={checkBoxHandleChange}
        description="trueの場合、Tame Unitsは、建造物といかだを備えたプラットフォームにのみ適用および使用され、プラットフォーム建造物を持たない恐竜のTame Unitsを効果的に無効にします。"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="UseCorpseLifeSpanMultiplier"
        onChange={textHandleChange}
        description="死体を修正とドロップボックスの寿命。パッチ275.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="FuelConsumptionIntervalMultiplier"
        onChange={textHandleChange}
        description="燃料消費の間隔を定義します。パッチ264.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={4}
        settingKey="GlobalPoweredBatteryDurabilityDecreasePerSecond"
        onChange={textHandleChange}
        description="不明。おそらく、グローバルに電源供給されたバッテリーの耐久性を減少させる秒あたりの値。パッチ278.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="DestroyTamesOverLevelClamp"
        onChange={textHandleChange}
        description="そのレベルを超えるテイム生物は、サーバーの起動時に削除されます。 公式サーバーでは、449に設定されています。パッチ255.0で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="LimitNonPlayerDroppedItemsRange"
        onChange={textHandleChange}
        description="エリア内のドロップされたアイテムの数を制限します（LimitNonPlayerDroppedItemsCountとともに）。 公式サーバーでは1600に設定されています。パッチ302.4で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={0}
        settingKey="LimitNonPlayerDroppedItemsCount"
        onChange={textHandleChange}
        description="エリア内のドロップされたアイテムの数を制限します（LimitNonPlayerDroppedItemsRangeとともに）。 公式サーバーでは600に設定されています。パッチ302.4で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="MaxFallSpeedMultiplier"
        onChange={textHandleChange}
        description="プレイヤーが落下ダメージを受け始める落下速度倍率を定義します。落下速度は、Z軸の速度がマイナスされている間にプレイヤーが空中で過ごした時間に基づいており、この設定が高いほど、プレイヤーが落下ダメージを受けずに落下できる時間が長くなります。例えば、0.1に設定すると、プレイヤーは通常のジャンプでは生き残れなくなり、100.0など非常に高く設定すると、プレイヤーは上空限界からの落下などでも生き残れるようになる。この設定はプレイヤーの重力スケールには影響しないため、キャラクターの動きに物理的な違いは生じません。パッチ279.224で導入"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="MaxFallSpeedMultiplier"
        onChange={textHandleChange}
        description="プレイヤーが落下ダメージを受け始める落下速度倍率を定義します。落下速度は、Z軸の速度がマイナスされている間にプレイヤーが空中で過ごした時間に基づいており、この設定が高いほど、プレイヤーが落下ダメージを受けずに落下できる時間が長くなります。例えば、0.1に設定すると、プレイヤーは通常のジャンプでは生き残れなくなり、100.0など非常に高く設定すると、プレイヤーは上空限界からの落下などでも生き残れるようになる。この設定はプレイヤーの重力スケールには影響しないため、キャラクターの動きに物理的な違いは生じません。パッチ279.224で導入"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bIgnoreStructuresPreventionVolumes"
        defaultValue={true}
        onChange={checkBoxHandleChange}
        description="Genesis Part1で、ミッション・ボリューム内の建築を有効化する。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bGenesisUseStructuresPreventionVolumes"
        defaultValue={true}
        onChange={checkBoxHandleChange}
        description="Genesis Part1で、trueに設定されている場合、ミッション・エリア内の建築を無効化する。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bAllowFlyerSpeedLeveling"
        defaultValue={true}
        onChange={checkBoxHandleChange}
        description="trueに設定されている場合、すべての飛行生物の移動速度のレベルアップを有効化する。パッチ321.1で導入。"
      />

      <Numeric
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        defaultValue={1.0}
        settingKey="CraftingSkillBonusMultiplier"
        onChange={textHandleChange}
        description="クラフティングスキルを向上させることで得られるボーナスの倍率。パッチ259.32で導入。"
      />

      <Checkbox
        iniData={iniData}
        section="/script/shootergame.shootergamemode"
        settingKey="bDisableDefaultMapItemSets"
        defaultValue={true}
        onChange={checkBoxHandleChange}
        description="trueを指定することで、Genesis Part2でTekスーツを着用した状態でのスポーンを無効化する。パッチ329.7で適用。"
      />

      {/* タレット関連は記載してません */}

      {/* エングラムエントリ関連は記載してません */}

      {/* 生物の固定スポーン関連は記載してません */}

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          プレーヤーの基本ステータスの乗数。デフォルト値を乗算することにより、プレーヤーの基本ステータスを変更します。 新しいスポーンキャラクターの開始ステータスを意味します。パッチ254.6で導入
        </p>

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[0]"
          onChange={textHandleChange}
          description="プレーヤーの基本 体力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[1]"
          onChange={textHandleChange}
          description="プレーヤーの基本 スタミナ/充電容量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[2]"
          onChange={textHandleChange}
          description="プレーヤーの基本 気絶値 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[3]"
          onChange={textHandleChange}
          description="プレーヤーの基本 酸素量/充電速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[4]"
          onChange={textHandleChange}
          description="プレーヤーの基本 食料 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[5]"
          onChange={textHandleChange}
          description="プレーヤーの基本 水分 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PlayerBaseStatMultipliers[7]"
          onChange={textHandleChange}
          description="プレーヤーの基本 重量 の乗数"
        />

      </div>

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          各レベルで獲得するプレイヤーのステータス量を変更できます。パッチ202.0で導入
        </p>

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[0]"
          onChange={textHandleChange}
          description="プレーヤーの基本 体力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[1]"
          onChange={textHandleChange}
          description="プレーヤーの基本 スタミナ / 充電容量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[2]"
          onChange={textHandleChange}
          description="プレーヤーの基本 気絶値 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[3]"
          onChange={textHandleChange}
          description="プレーヤーの基本 酸素量 / 充電速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[4]"
          onChange={textHandleChange}
          description="プレーヤーの基本 食料 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[5]"
          onChange={textHandleChange}
          description="プレーヤーの基本 水分 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[7]"
          onChange={textHandleChange}
          description="プレーヤーの基本 重量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[8]"
          onChange={textHandleChange}
          description="プレーヤーの基本 近接攻撃力 / 放電範囲 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[9]"
          onChange={textHandleChange}
          description="プレーヤーの基本 移動速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[10]"
          onChange={textHandleChange}
          description="プレーヤーの基本 忍耐力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_Player[11]"
          onChange={textHandleChange}
          description="プレーヤーの基本 作製スキル の乗数"
        />

      </div>

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          恐竜のテイム時獲得するステータス基礎量を変更できます。パッチ202.0で導入
        </p>

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.2}
          settingKey="PerLevelStatsMultiplier_DinoTamed[0]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 体力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[1]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 スタミナ / 充電容量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[2]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 気絶値 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[3]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 酸素量 / 充電速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[4]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 食料 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[7]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 重量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.17}
          settingKey="PerLevelStatsMultiplier_DinoTamed[8]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 近接攻撃力 / 放電範囲 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed[9]"
          onChange={textHandleChange}
          description="恐竜のテイム時の基本 移動速度 の乗数"
        />

      </div>

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          テイム時に獲得する追加ステータス量を変更できます。パッチ202.0で導入
        </p>

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.14}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[0]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 体力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[1]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 スタミナ / 充電容量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[2]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 気絶値 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[3]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 酸素量 / 充電速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[4]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 食料 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[7]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 重量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.14}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[8]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 近接攻撃力 / 放電範囲 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Add[9]"
          onChange={textHandleChange}
          description="恐竜のテイム時の追加 移動速度 の乗数"
        />

      </div>

      <div
        style={{
          margin: "0.5em",
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
        }}
      >
        <p style={{ color: "#FFFFFF" }}>
          テイム時に獲得するステータス乗数を変更できます。パッチ202.0で導入
        </p>

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.44}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[0]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 体力 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[1]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 スタミナ / 充電容量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[2]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 気絶値 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[3]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 酸素量 / 充電速度 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[4]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 食料 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[7]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 重量 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={0.44}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[8]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 近接攻撃力 / 放電範囲 の乗数"
        />

        <Numeric
          iniData={iniData}
          section="/script/shootergame.shootergamemode"
          defaultValue={1.0}
          settingKey="PerLevelStatsMultiplier_DinoTamed_Affinity[9]"
          onChange={textHandleChange}
          description="恐竜のテイム時の乗数 移動速度 の乗数"
        />

      </div>
      
    </div>
  );
};

export default Game;

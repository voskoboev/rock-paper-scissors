import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type IGameItems } from "@/types/IGameItems";
import { type IResultStatuses } from "@/types/IResultStatuses";
import { type IViews } from "@/types/IViews";
import ViewGameField from "@/components/views/ViewGameField.vue";
import ViewResult from "@/components/views/ViewResult.vue";
import ViewRules from "@/components/views/ViewRules.vue";
import { LocalStorageForGameResults } from "@/api/api";

export const useStore = defineStore("store", () => {
  const scoreStep: number = 1;
  const finalScore = ref(0);
  const playerChoice = ref(0);
  const computerChoice = ref(0);
  const finalResultStatus = ref("");
  const viewName = ref("");

  const gameItems: IGameItems = {
    rock: 0,
    paper: 1,
    scissors: 2,
  };

  const resultStatuses: IResultStatuses = {
    win: "win",
    lose: "lose",
    draw: "draw",
  };

  const views: IViews = {
    ViewGameField: "ViewGameField",
    ViewResult: "ViewResult",
    ViewRules: "ViewRules",
  };

  const activeView = computed(() => {
    if (viewName.value === views.ViewRules) {
      return ViewRules;
    }

    if (viewName.value === views.ViewResult) {
      return ViewResult;
    }

    return ViewGameField;
  });

  const receiveScoreFromLocalStorage = () => {
    const loadedItems = LocalStorageForGameResults.receiveScore();
    finalScore.value = loadedItems;
  };

  const saveScoreToLocalStorage = () => {
    LocalStorageForGameResults.saveScore(finalScore.value);
  };

  const calculateResult = (gameItem: number) => {
    const maxVariantNumber = 3;

    playerChoice.value = gameItem;
    computerChoice.value = Math.floor(Math.random() * maxVariantNumber);

    const result =
      (playerChoice.value - computerChoice.value + maxVariantNumber) %
      maxVariantNumber;

    if (result === 0) {
      finalResultStatus.value = resultStatuses.draw;
      return;
    }

    if (result === 1) {
      finalScore.value += scoreStep;
      finalResultStatus.value = resultStatuses.win;
      return;
    }

    finalScore.value -= scoreStep;
    finalResultStatus.value = resultStatuses.lose;
  };

  const handleChangeView = (view: string) => {
    viewName.value = view;
  };

  const handleResult = (gameItem: number, view: string) => {
    calculateResult(gameItem);
    handleChangeView(view);
  };

  const handleResetGame = () => {
    finalScore.value = 0;
    playerChoice.value = 0;
    computerChoice.value = 0;
    finalResultStatus.value = "";
    viewName.value = "";

    LocalStorageForGameResults.deleteScore();
  };

  return {
    finalScore,
    playerChoice,
    computerChoice,
    finalResultStatus,
    gameItems,
    resultStatuses,
    views,
    activeView,
    receiveScoreFromLocalStorage,
    saveScoreToLocalStorage,
    handleChangeView,
    handleResult,
    handleResetGame,
  };
});

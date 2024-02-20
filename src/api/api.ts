import { type ILocalStorageService } from "@/types/ILocalStorageService";

class LocalStorageService implements ILocalStorageService {
  constructor(private itemName: string) {}

  public saveScore = (score: number) => {
    const stringifiedScore = JSON.stringify(score);

    localStorage.setItem(this.itemName, stringifiedScore);
  };

  public receiveScore = () => {
    const receivedScore = localStorage.getItem(this.itemName);

    if (!receivedScore) {
      return;
    }

    return JSON.parse(receivedScore);
  };

  public deleteScore = () => {
    localStorage.removeItem(this.itemName);
  };
}

export const LocalStorageForGameResults = new LocalStorageService(
  "KokocScoreResults"
);

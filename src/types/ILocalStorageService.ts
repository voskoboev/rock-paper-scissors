export interface ILocalStorageService {
  saveScore(score: number): void;
  receiveScore(): void;
  deleteScore(): void;
}

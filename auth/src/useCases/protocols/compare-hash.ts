export interface ICompareHash {
  compare(password: string, hash: string): boolean;
}

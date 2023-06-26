export interface IUpdateAccountRepository {
  update(params: IUpdateAccountParams, _id: string): Promise<void>;
}
export interface IUpdateAccountParams {
  name?: string;
  imageName?: string;
  imagePath?: string;
}

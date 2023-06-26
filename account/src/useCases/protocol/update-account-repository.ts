export interface IUpdateAccountRepository {
  update(params: IUpdateAccountParams): Promise<void>;
}
interface IUpdateAccountParams {
  _id?: string;
  name?: string;
  imageName?: string;
  imagePath?: string;
  where: {
    _id: string;
  };
}

export interface IChangePostData {
  change(
    postId: string,
    accountId: string,
    data: IChangePostDataParams
  ): Promise<void>;
}
export interface IChangePostDataParams {
  title: string;
  content: string;
}

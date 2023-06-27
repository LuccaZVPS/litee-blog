export interface IChangePostPicture {
  change(
    accountId: string,
    postId: string,
    newImagePath: string
  ): Promise<{ imageName: string }>;
}

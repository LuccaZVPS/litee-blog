export interface IChangePicture {
  change(
    accountId: string,
    newImagePath: string
  ): Promise<{ imageName: string }>;
}

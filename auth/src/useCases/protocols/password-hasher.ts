export interface IPasswordHasher {
  hash(password: string): string;
}

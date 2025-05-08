export interface AuthUserDto {
  id: number;
  wallet: {
    address: string;
    balance: number;
  };
}

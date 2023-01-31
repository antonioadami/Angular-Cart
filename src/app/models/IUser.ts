export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
}

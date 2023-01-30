export interface ICreateUser {
  firstName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}

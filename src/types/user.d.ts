export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  password: string;
};

export type UserCreated = {
  user: { first_name: string; last_name: string };
  token: string;
};

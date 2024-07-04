export type Type = {
  id: number;
  title: string;
  persons: Person[]
};

type Person = {
  name: string;
  image: string;
  designation: string;
};

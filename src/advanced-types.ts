// Q - Given the data below, define a type alias for representing users.
let users: User[] = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];

// A - Alias Types
type User = {
  name: string;
  age: number;
  occupation?: string;
};

// Q - Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these.

// A - Union Types
type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

// Q - Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
// A - Literal Types
type WeekDays =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wendnesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

// Q - Simplify the following code snippets:
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);

// A - Null Coelesing
let user = getUser();
console.log(user?.address?.street);

// Q - Simplify the following code snippets:
// let x = foo !== null && foo !== undefined ? foo : bar();

// A - Null Coelesing
let x = foo ?? bar();

// Q - What is the problem in this piece of code?
// let value: unknown = "a";
// console.log(value.toUpperCase());

// A - value is declared as an unknown type. In order to call methods on an unknown object, we have to use type narrowing first:
let value: unknown = "a";
if (typeof value == "string") {
  console.log(value.toUpperCase());
}

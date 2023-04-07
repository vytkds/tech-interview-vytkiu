export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  company: string;
}

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await fetch(url);
  const jsonResponse: UserResponse[] = await response.json();
  const results: User[] = jsonResponse.map(
    ({ id, name, email, address: { city }, company }) => ({
      id,
      name,
      email,
      city,
      company: company.name,
    })
  );

  return results;
};

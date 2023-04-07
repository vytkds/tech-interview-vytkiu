import { useEffect, useState } from "react";
import { User, fetchUsers } from "../../api/user";
import { UserForm } from "../../components/UserForm";
import { UserTable } from "../../components/UserTable";

export const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const init = async () => {
      const usersResponse = await fetchUsers();
      usersResponse.sort((a, b) => (a.name > b.name ? 1 : -1));
      setUsers(usersResponse);
    };
    init();
  }, []);

  const handleSubmit = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <UserTable users={users} />
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

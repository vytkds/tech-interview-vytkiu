import { useState } from "react";
import { User } from "../../api/user";

interface FormProps {
  onSubmit: (user: User) => void;
}

export const UserForm = ({ onSubmit }: FormProps) => {
  const [newUser, setNewUser] = useState<Partial<User> | null>(null);

  return (
    <section>
      <h2>Add new user</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newUser as User);
        }}
      >
        <div>
          <label>Name</label>
          <input
            name="name"
            value={newUser?.name}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                name: e.target.value,
              })
            }
            required
          />
        </div>
        <label>Email</label>
        <input
          name="email"
          value={newUser?.email}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              email: e.target.value,
            })
          }
          required
        />
        <div>
          <label>City</label>
          <input
            name="city"
            value={newUser?.city}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                city: e.target.value,
              })
            }
            required
          />
        </div>
        <label>Company</label>
        <div>
          <input
            name="company"
            value={newUser?.company}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                company: e.target.value,
              })
            }
            required
          />
        </div>
        <button type="submit">add</button>
      </form>
    </section>
  );
};

import { User } from "../../api/user";
import styles from './styles.module.css';

interface UserTableProps {
  users: User[];
}

export const UserTable = ({ users }: UserTableProps) => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Company</th>
      </tr>
      <tbody>
        {users.map(({ id, name, email, city, company }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <a href={`mailto:${email}`}>{email}</a>
            </td>
            <td>{city}</td>
            <td>{company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

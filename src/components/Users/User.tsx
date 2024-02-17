/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./user.css";

interface User {
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("farhan");
  const [email, setEmail] = useState<string>("");
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <div className="formWrapper">
      <h1>Testing Rect</h1>
      <h2>Testing react in h2</h2>
      <p>Enter the form data</p>
      <img
        src="https://plus.unsplash.com/premium_photo-1675484743424-288808877324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxvbmUlMjBib3l8ZW58MHx8MHx8fDA%3D"
        alt="person"
      />

      <div title="open">open</div>

      <div data-testId="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          libero omnis tenetur magnam dolores porro debitis aperiam? Vero vitae
          ad ex corrupti inventore debitis laborum iusto commodi harum facere!
          Ipsum recusandae aspernatur molestiae quia earum perspiciatis
          nesciunt, velit magnam, officia excepturi quidem adipisci expedita
          natus delectus doloremque dicta? Minus, inventore.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          placeholder="User name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
        />
        <br />
        <label>
          Terms:&nbsp;
          <input type="checkbox" />
        </label>
        <br />
        {/* <button type="submit">Submit</button> */}
        {editMode ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Edit</button>
        )}
      </form>
      {users.length > 0 && (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;

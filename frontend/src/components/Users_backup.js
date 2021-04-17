import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

import Header from './HeaderUser';
import User from './User';
// import UserCreate from './UserCreate';

import '../css/Table.css';

const GET_ALL_USER = gql`
  query GetAllUsers{
    allUser{
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

function UserCreate() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [createUser] = useMutation(CREATE_USER, {
    data: userCreated,
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    }
  });

  return (
    <div id="users">
      <form
        onSubmit={e => {
          e.preventDefault();
          createUser();
        }}
      >
        <input
          value={formState.name}
          onChange={(e) =>
            setFormState({
              ...formState,
              name: e.target.value
            })
          }
          type="text"
          placeholder="Input Name"
        />
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Input Email"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="text"
          placeholder="Input Password"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

function TableAllUser(props) {

  const { users, onUserClick } = props;

  return (
    <div id="users">
      <table className="table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/*Rendering data*/}
          {users.allUser.map((item, key) => {
            return (
              <tr key={key} >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td > <a href="#" onClick={() => { onUserClick(item.id) }}> View</a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

const Users = (props) => {

  const { error, data } = useQuery(GET_ALL_USER);
  const [selectedUser, setSelectedUser] = useState(null);

  function onUserOpenClick(theUser) {
    console.log(theUser);
    setSelectedUser(theUser);
  }

  let userView = null;
  if (selectedUser) {
    userView = <User userId={selectedUser} />;
  }

  const fn = () => {

    console.log('call useEffect');
  }

  useEffect(fn);

  return (
    <div>
      <Header />
      <UserCreate />
      <div>
        {(() => {
          if (data) {
            return <TableAllUser users={data} onUserClick={onUserOpenClick} />;
          } else {
            <h1> Loading </h1>
          }
        })()}
      </div>
      {userView}
    </div>
  );
}

export default Users;

import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Table, Container, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

import Header from './HeaderUser';
import User from './User';
// import UserCreate from './UserCreate';

// import '../css/Table.css';

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

function TableAllUser(props) {

  const { users, onUserClick } = props;

  return (
    <div>
      <Table className="w-auto" striped>
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
                <td>Delete</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

const Users = (props) => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);

  function onUserOpenClick(theUser) {
    console.log(theUser);
    setSelectedUser(theUser);
  }

  let userView = null;
  if (selectedUser) {
    userView = <User userId={selectedUser} />;
  }

  // Begin
  const {
    error: errorDataAllUser,
    data: dataAllUser,
    refetch: reDataAllUser
  } = useQuery(GET_ALL_USER, { fetchPolicy: "no-cache" });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [createUser, { data: userCreated }] = useMutation(CREATE_USER, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    }
  });

  useEffect(() => {

    setDataUsers(dataAllUser);

  }, [dataAllUser]);

  useEffect(() => {
    if (userCreated) {
      reDataAllUser();
    }
  }, [userCreated]);

  return (
    <div>
      <Header />
      {/* <UserCreate /> */}
      <Container>
        <div id="users">
          <Form
            onSubmit={e => {
              e.preventDefault();
              createUser();
            }}>
            <Row className="d-flex justify-content-center" form>
              <FormGroup className="pr-1">
                <Label for="exampleEmail" hidden>Email</Label>
                <Input
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
              </FormGroup>
              <FormGroup className="pr-1">
                <Input
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
              </FormGroup>
              <FormGroup className="pr-1">
                <Input
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
              </FormGroup>

            </Row>
            <Row form className="d-flex justify-content-center mb-2">
              <Button type="submit">Add Todo</Button>
            </Row>
          </Form>
          {/* <form
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
          </form> */}
        </div>
        <div>
          {(() => {
            if (dataAllUser) {
              return <TableAllUser users={dataAllUser} onUserClick={onUserOpenClick} />;
            } else {
              <h1> Loading </h1>
            }
          })()}
        </div>
        {userView}
      </Container>
    </div>
  );
}

export default Users;

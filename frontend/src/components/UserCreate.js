// import React from 'react';
import React, { Fragment, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import '../css/Table.css';


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

export default UserCreate;
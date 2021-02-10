// import React from 'react';
import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import '../css/Header.css';

const GET_USER = gql`
  query GetUserById($id: Int!) {
    getUserById(id: $id) {
      id
      name
    }
  }
`;

function UserById(props) {

    const { id } = props;
    const {error, data } = useQuery(GET_USER, {
        variables: { 
            id : parseInt(id)
        }
    });

    if (error) return <p>ERROR: {error.message}</p>;
	if (!data) return <p>Not found</p>;

    return (
        <div className="table">
            <p>Name : {data.getUserById.name}</p>
        </div>
    );
}

function User(props) {

    const { userId } = props;

    // const userId = props.match.params.id

    return (
        <div>
            <div className="header">
                <h1>User Detail</h1>
            </div>

            <UserById id={userId} />
        </div>
    );
}

export default User;
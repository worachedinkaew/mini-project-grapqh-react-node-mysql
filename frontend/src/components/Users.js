import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import Header from './HeaderUser';
import User from './User';
import UserCreate from './UserCreate';

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
              {users.allUser.map( (item, key) => {
                 return (
                      <tr key = {key} >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td > <a href="#" onClick={() => {onUserClick(item.id)}}> View</a></td>
                   </tr>
                 )
              })}
        </tbody>
      </table>
    </div>
  );
}

function Users() {

  const { error, data } = useQuery(GET_ALL_USER);
  const [selectedUser, setSelectedUser] = useState(null);

  function onUserOpenClick(theUser) {
    setSelectedUser(theUser);
  }

  let  userView = null;
  if(selectedUser){
    userView = <User  userId={selectedUser} />;
  }

  // useEffect(() => {

  //   console.log('App');
  // },[]);
  
  return (
    <div>
      <Header />
      <UserCreate />
      <div>
        {(() => {
          if (data) {
            return <TableAllUser users={data} onUserClick={onUserOpenClick}/>;
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

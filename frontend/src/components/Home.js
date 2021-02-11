import React from 'react';
import '../index.css';
import CardList from "./CardList";
import Header from './HeaderHome';
// import Users from './Users';


export default function Home() {
  return (
    <div>
      <Header />
      <CardList />
      {/* <Users /> */}
    </div>
  );
}
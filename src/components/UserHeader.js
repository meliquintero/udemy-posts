import React, {Component} from 'react';
import { useSelector } from "react-redux";

const UserHeader  = ({userId}) =>{
  const user = useSelector(state => {
    return state.users.find((user) => user.id === userId);
  });

  if (!user) {
    return <div className="header">melissa</div>;
  }

  return <div className="header" >{user.name}</div>
}

export default UserHeader

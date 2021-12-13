import React, { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { getUsers } from '../../services/users';


// import './advert-form.scss';

export default function Home() {
  
  const [users, setUsers] = useState([]);
  // const [page, setPage] = useState([]);
  // const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      console.log('res', res);
      setUsers(res.users);
      // setPage(res.page);
      // setTotalPages(res.totalPages);
    });
  }, [])

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map(username => {
          return (<li><Link to={username}>{username}</Link></li>)
        })}
      </ul>

    </div>
  );
}

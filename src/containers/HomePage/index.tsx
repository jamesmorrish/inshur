import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/users';

export default function HomePage() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const [page, setPage] = useState([]);
  // const [pageCount, setPageCount] = useState([]);

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res.users);
        setIsLoading(false);

        // TODO: Pagination.
        // setPage(res.page);
        // setPageCount(res.pageCount);
      });
  }, [])

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="homePage">
      <h1>All Users</h1>
      <ul>
        {users.map(username => {
          return (<li key={username}><Link to={username}>{username}</Link></li>)
        })}
      </ul>
    </div>
  );
}

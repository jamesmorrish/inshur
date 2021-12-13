import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../services/users';

export default function ProfilePage() {
  
  const [user, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  

  const { username } = useParams();

  useEffect(() => {   
    getUser(username).then(res => {
      if (res.success) {
        setUser(res);
      } else {
        setErrorMessage(res.message || 'There was an unexpected error.');
      }
    });
  }, [])

  if (errorMessage) {
    return (
      <div>
        <h1>Whoops!</h1>
        <p>{errorMessage}</p>

        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{ user.name }</h1>

      <img src={user.profilePicture} alt={`${user.username}`} />
      <dl>
        <dt>Job Title</dt>
        <dd>{ user.jobTitle }</dd>

        <dt>Favourite Food</dt>
        <dd>{ user.favouriteFood }</dd>
      </dl>

      <p></p>

      <Link to="/">Back</Link>
    </div>
  );
}

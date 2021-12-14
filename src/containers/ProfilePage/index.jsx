import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../services/users';

import './profilePage.css';

export default function ProfilePage() {
  
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  }, [username])

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (errorMessage) {
    return (
      <div>
        <h1>Whoops!</h1>
        <p>{errorMessage}</p>

        <Link className="button" to="/">Back</Link>
      </div>
    );
  }

  // TODO: Create Profile component.
  return (
    <div className="profilePage">
      <h1>{ user.name }</h1>

      <div className="box">
        <img className="profilePic" src={user.profilePicture} alt={`${user.username}`} height="100" />
        <dl>
          <dt>Job Title</dt>
          <dd>{ user.jobTitle }</dd>

          <dt>Favourite Food</dt>
          <dd>{ user.favouriteFood }</dd>
        </dl>

        <p></p>
      </div>

      <Link className="button" to="/">Back</Link>
    </div>
  );
}

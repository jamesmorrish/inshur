import { Router, Request, Response } from 'express';
import UsersRepository from '../storage/users';

const users = Router();
const userStore = new UsersRepository();

interface Pagination {
  page: number,
  limit: number,
}

users.get('/', (request: Request, response: Response) => {
  const { page = 1, limit = 20 } = request.query as unknown as Pagination;

  const users = userStore.allUsers();

  response.json({
    users: users.slice((page -1) * limit, page * limit),
    page: page,
    limit: limit,
    totalUsers: users.length,
    pageCount: Math.ceil(users.length / limit),
  });
});

users.get('/:username', (request: Request, response: Response) => {
  
  const { username } = request.params; 

  try {
    const user = userStore.find(username);

    response.send({
      success: true,
      username: user.username,
      name: user.name,
      jobTitle: user.jobTitle,
      favouriteFood: user.favouriteFood,
      profilePicture: user.profilePicture
    });

  } catch (err) {
    response
      .status(404)
      .send({
        success: false,
        message: `User ${username} not found`,
      });
  }
});

export default users;

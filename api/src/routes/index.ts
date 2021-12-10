import { Router } from 'express';
import home from './home';
import users from './users';

const routes = Router();

routes.use('/', home);

routes.use('/v1/users', users);

export default routes;

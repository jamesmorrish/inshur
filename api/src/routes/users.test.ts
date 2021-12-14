import app from '../server';
import request from 'supertest';

describe('Tesing the user API routes', () => {
  it('Returns all users', (done) => {
    // TODO: Test should mock db and check for the result.
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        users: [ 'jamesmorrish', 'alanpartridge' ],
        page: 1,
        limit: 20,
        totalUsers: 2,
        pageCount: 1
      }, done);
  });

  it('Returns a single user', (done) => {
    // TODO: Test should mock db and check for the result.
    request(app)
      .get('/api/v1/users/jamesmorrish')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
          success: true,
          username: 'jamesmorrish',
          name: 'James Morrish',
          jobTitle: 'Prisoner #4056',
          favouriteFood: 'Beef Rendang',
          profilePicture: 'https://pbs.twimg.com/profile_images/1375946996/morrish_twitter_400x400.png'
        }, done);
  });

  it('Returns a 404', (done) => {
    request(app)
      .get('/api/v1/users/not-a-user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  })
});


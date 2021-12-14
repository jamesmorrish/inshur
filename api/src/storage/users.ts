type User = {
  username: string,
  name: string,
  jobTitle: string,
  favouriteFood: string,
  profilePicture: string,
}

export default class UsersRepository {

  // private collection;

  // constructor() {
  //   this.collection = collection;
  // }

  find = (username: string): User => {

    // return this.collection.find(username);

    const user = this.dataStore.find(user => user.username === username);

    if (user === undefined) {
      throw Error(`User ${username} not found`);
    }

    return user;    
  }

  allUsers = (): string[] => {
    return this.dataStore.map(user => user.username);
  }

  private dataStore = [
    {
      username: 'jamesmorrish',
      name: 'James Morrish',
      jobTitle: 'Prisoner #4056',
      favouriteFood: 'Beef Rendang',
      profilePicture: 'https://pbs.twimg.com/profile_images/1375946996/morrish_twitter_400x400.png'
    },
    {
      username: 'alanpartridge',
      name: 'Alan Partridge',
      jobTitle: 'BBC Radio Norwich Presenter',
      favouriteFood: 'Chocolate mousse',
      profilePicture: 'https://static.independent.co.uk/2021/07/02/15/0_IM-ALAN-PARTRIDGE-NEW-SERIES%20%281%29.jpg?width=500&auto=webp&quality=75'
    }
  ]
}

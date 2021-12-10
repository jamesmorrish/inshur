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
      jobTitle: 'Prisioner #4056',
      favouriteFood: 'Something spicy',
      profilePicture: 'https://instagram.fbrs1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/25015569_1980537832198139_423254222268530688_n.jpg?_nc_ht=instagram.fbrs1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kf2Bd6i5CQIAX-8XzZF&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-zh4wH8_2G3cOyLYnOISukyuOlT2_bju9jmHyTRNmTIQ&oe=61BB0649&_nc_sid=7bff83'
    },
    {
      username: 'alanpartridge',
      name: 'Alan Partrdige',
      jobTitle: 'BBC Radio Norwich Presenter',
      favouriteFood: 'Chocolate mousse',
      profilePicture: 'https://static.independent.co.uk/2021/07/02/15/0_IM-ALAN-PARTRIDGE-NEW-SERIES%20%281%29.jpg?width=500&auto=webp&quality=75'
    }
  ]
}

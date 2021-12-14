import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import HomePage from './index';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { getUsers } from '../../services/users';
jest.mock('../../services/users');

describe('Home page', () => {

  it('should render the Home page correctly', async () => {

    const users = {
      users: ['user1', 'user2', 'user3'],
      page: 1,
      limit: 20,
      totalUsers: 3,
      pageCount: 1,
    };

    (getUsers as jest.Mock).mockReturnValue(Promise.resolve(users));
    
    const { getByText } = render(<Router><HomePage /></Router>);

    await waitForElementToBeRemoved(() => getByText('Loading...'))

    expect(screen.getByText('All Users')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('user3')).toBeInTheDocument();

    expect(screen.getByText('user3').closest('a')).toHaveAttribute('href', '/user3');
  });
});

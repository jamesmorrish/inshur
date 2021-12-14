import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import ProfilePage from './index';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { getUser } from '../../services/users';
jest.mock('../../services/users');

describe('Profile page', () => {

  it('should render the Profile page correctly', async () => {

    const user = {
      success: true,
      username: "user1",
      name: "Full Name",
      jobTitle: "Job Title 1",
      favouriteFood: "Chips",
      profilePicture: "/test.jpg"
    };

    (getUser as jest.Mock).mockReturnValue(Promise.resolve(user));
    
    const { getByText } = render(<Router><ProfilePage /></Router>);

    await waitForElementToBeRemoved(() => getByText('Loading...'))

    expect(screen.getByText('Back').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Job Title 1')).toBeInTheDocument();
    expect(screen.getByText('Chips')).toBeInTheDocument();
    expect(screen.getByAltText('user1')).toBeInTheDocument();
  });
});

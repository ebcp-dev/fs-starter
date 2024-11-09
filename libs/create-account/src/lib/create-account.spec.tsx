import { render } from '@testing-library/react';

import CreateAccount from './create-account';

describe('CreateAccount', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateAccount />);
    expect(baseElement).toBeTruthy();
  });
});

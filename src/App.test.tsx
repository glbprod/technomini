import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Basic smoke test - just verify the app renders
    expect(document.body).toBeInTheDocument();
  });
});

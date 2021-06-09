import { render } from '@testing-library/react';
import TodoApp from './TodoApp';

test('renders learn react link', () => {
  const rendered = render(<TodoApp />);
  expect(rendered.baseElement).toBeInTheDocument();
});

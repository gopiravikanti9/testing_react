import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../todo';
test('should render todo component', () => {
    const todos = { id: 1, title: "bring grocery", status: false }
    render(<Todo todo={todo} />);
    const todoElement = screen.getAllByAltText('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContext('bring grocery');
    expect(todoElement).toContainHTML('<strike');

})
test('should render todo component', () => {
    const todos = { id: 2, title: "wash dishes", status: false }
    render(<Todo todo={todo} />);
    const todoElement = screen.getAllByAltText('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContext('wash dishes');
    expect(todoElement).toContainHTML('<strike');
})
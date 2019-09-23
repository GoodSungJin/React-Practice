const React = require('react');
const { useState, useRef } = React;


const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ]);

  const [value, setValue] = useState('');

  // input의 value 저장
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  // 체크박스 변경
  const onChangeCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (id !== todo.id) return todo;
      return { ...todo, completed: !todo.completed };
    }));
  };

  // todo리스트에 추가
  const addTodo = (e) => {
    if (e.charCode !== 13) return;

    setTodos((prev) => {
      return [...prev, { id: createId(), content: value, completed: false }];
    });

    setValue('');
  };

  const createId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  // todo 삭제
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => id !== todo.id))
  };

  // 렌더링 최적화
  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <div className="ver">ver. GoodSungJin</div>

      <input className="input-todo" placeholder="What needs to be done?" autoFocus
      value={value} onChange={onChangeValue} onKeyPress={addTodo} />
      <ul className="nav">
        <li id="all" className="active">All</li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </ul>

      <ul className="todos">
        {todos.map(todo => {
          return (
            <li id={todo.id} className="todo-item" key={todo.id}>
              <input className="custom-checkbox" type="checkbox" id={`ck-${todo.id}`}
              checked={todo.completed} onChange={() => onChangeCompleted(todo.id)} />
              <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
              <i className="remove-todo far fa-times-circle"
              onClick={() => removeTodo(todo.id)}></i>
            </li> 
          )
        })}
      </ul>
      <div className="footer">
        <div className="complete-all">
          <input className="custom-checkbox" type="checkbox" id="ck-complete-all" />
          <label htmlFor="ck-complete-all">Mark all as complete</label>
        </div>
        <div className="clear-completed">
          <button className="btn">Clear completed (<span className="completed-todos">0</span>)</button>
          <strong className="active-todos">0</strong> items left
        </div>
      </div>
    </div>
  );
};

module.exports = TodoList;
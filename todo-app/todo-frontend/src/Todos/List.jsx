import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos
        .map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onClickComplete={onClickComplete}
              onClickDelete={onClickDelete}
            ></Todo>
          )
        })
        .reduce((acc, cur) => [...acc, <hr key={Math.random()} />, cur], [])}
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
}

export default TodoList

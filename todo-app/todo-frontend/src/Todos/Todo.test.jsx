import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { test, jest, expect } from '@jest/globals'
import Todo from './Todo'

test('Todo component renders correctly and handles interactions', () => {
  const mockTodo = { id: 1, text: 'Test Todo', done: false }
  const mockDelete = jest.fn()
  const mockComplete = jest.fn()

  render(
    <Todo
      todo={mockTodo}
      onClickDelete={mockDelete}
      onClickComplete={mockComplete}
    />
  )

  expect(screen.getByText('Test Todo')).toBeInTheDocument()
  expect(screen.getByText('This todo is not done')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Delete'))
  expect(mockDelete).toHaveBeenCalledWith(mockTodo)

  fireEvent.click(screen.getByText('Set as done'))
  expect(mockComplete).toHaveBeenCalledWith(mockTodo)
})

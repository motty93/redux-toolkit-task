import React from 'react'
import { useSelector } from 'react-redux'
import { selectTasks } from './taskSlice'

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      <div>hello</div>
    </>
  )
}

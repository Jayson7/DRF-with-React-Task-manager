import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewTask = () => {
  const { id } = useParams()

  const todo = useSelector((store) => store.tasks.task)

  const id_locator = todo.filter((x) => x.id === id)

  console.log(id_locator)

  return <div>viewTask</div>
}

export default ViewTask

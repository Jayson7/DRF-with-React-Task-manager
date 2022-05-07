import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewTask = () => {
  const { id } = useParams()

  const todo = useSelector((store) => store.tasks.task)

  const item = todo.find((item) => item.id === Number(id))
  console.log(item)
  return (
    <div>
      {/* display item  in a react bootstrap form */}

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card my-5">
              <div class="card-header text-center bg-success text-white">
                <h3>Task Details</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="">Task Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={item.name_of_task}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="">Task Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={item.task}
                        disabled
                      />
                    </div>
                  </div>
                  {item.date_ended ? (
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Date Ended</label>
                        <input
                          type="text"
                          class="form-control"
                          value={item.date_ended}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Date Ended</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Not Completed"
                          disabled
                        />
                      </div>
                    </div>
                  )}
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="">Done</label>
                      <input
                        type="text"
                        class="form-control"
                        value={item.done}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="">Date Created</label>
                      <input
                        type="text"
                        class="form-control"
                        value={item.date_created}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="">Task ID</label>
                      <input
                        type="text"
                        class="form-control"
                        value={item.id}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTask

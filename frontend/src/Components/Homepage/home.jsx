import { React, useEffect } from 'react'
// import { taskUpdate } from '../../actions/taskUpdate'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { taskUpdate } from '../Redux/Actions/taskUpdate'

export const Homepage = () => {
  const todo = useSelector((store) => store.tasks)
  const dispatch = useDispatch()
  const taskLoader = async () => {
    await axios
      .get('http://localhost:8000')

      .then((res) => {
        console.log(res.data)

        dispatch(taskUpdate(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    taskLoader()
  }, [])

  //   const renderList = todo.map((todoT) => {
  //     const { id, task, name_of_task, done, date_created, date_ended } = todoT
  //     return (
  //       <div>
  //         <div className="container">
  //           <div className="col">
  //             <div className="col-md-4">
  //               <div className="card">
  //                 <div className="card-body">
  //                   <h5 className="card-title">{name_of_task}</h5>
  //                   <p className="card-text">{task}</p>
  //                   <p className="card-text">
  //                     <small className="text-muted">
  //                       Created: {date_created} | Ended: {date_ended}
  //                     </small>
  //                   </p>
  //                   <button btn btn-info>
  //                     View
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   })

  return <> </>
}
export default Homepage

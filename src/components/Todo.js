import React, {useContext} from 'pureact'
import Store from '../context'
const {dispatch} = useContext(Store)
const check = ({id, checked}) => dispatch({type:'CHANGE_CHECKED', id, checked})
const remove = ({id}) => dispatch({type:'REMOVE_TODO', id})

function Todo ({todo}) {
    return (
      <li className={todo.checked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.checked} id={todo.id} onclick={({target: {checked}}) => check({...todo, checked})}/>
          <label htmlFor={todo.id}>{todo.title}</label>
          <button className="destroy" onclick={e => remove(todo)}></button>
        </div>
        <input className="edit" value={todo.title}/>
      </li>
    )

}

export default Todo
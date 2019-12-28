import React from 'react';

const Todo = (props) => {


    return (
            <tr onClick={() => props.dispatch({ type: 'COMPLETE', payload: { id: props.id }})}>
            {/* <tr onClick={() => console.log(props.id)}> */}
                <th scope="row">{props.index + 1}</th>
                <td>{props.item}</td>
                <td>{props.completed ? 'Complete' : 'Incomplete'}</td>
                {/* <td>{props.due.toString()}</td> */}
            </tr>
    )
}

export default Todo;
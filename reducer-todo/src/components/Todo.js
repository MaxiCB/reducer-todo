import React from 'react';

const Todo = (props) => {

    return (
            <tr onClick={() => console.log('click')}>
                <th scope="row">{props.index + 1}</th>
                <td>{props.item}</td>
                <td>{props.completed ? 'Complete' : 'Incomplete'}</td>
                <td>{props.due.toString()}</td>
            </tr>
    )
}

export default Todo;
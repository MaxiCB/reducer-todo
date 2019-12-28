import React from 'react';

import { Button } from 'reactstrap';

import moment  from 'moment';

const Todo = (props) => {


    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.item}</td>
            <td>{props.completed ? 'Complete' : 'Incomplete'}</td>
            <td>{moment(props.due).add(1, 'days').calendar()}</td>
            <td><Button color='primary' onClick={() => props.dispatch({ type: 'COMPLETE', payload: { id: props.id } })}>{props.completed ? 'Incomplete' : 'Complete'}</Button></td>
            <td><Button onClick={() => props.dispatch({ type: 'DELETE', payload: { id: props.id } })}>X</Button></td>
        </tr>
    )
}

export default Todo;
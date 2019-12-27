import React from 'react';

import { Table } from 'reactstrap';

import Todo from './Todo'

const TodoList = (props) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Complete</th>
                    <th>Due Date</th>
                </tr>
            </thead>

            <tbody>

            {props.tasks.map((item, index) => {
            return <Todo {...item} index={index}/>
            })}

            </tbody>
        </Table>
    )
}

export default TodoList;
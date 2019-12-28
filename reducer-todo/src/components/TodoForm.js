import React from 'react';

import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

const TodoForm = (props) => {

    let formObject = {
        item: '',
        completed: false,
        due: new Date(),
        id: new Date()
    }

    const updateTask = (e) => {
        formObject.item = e.target.value
    }

    return (
        <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">Task</InputGroupAddon>
            <Input onChange={(e) => updateTask(e)}/>
            <InputGroupAddon addonType='append'><Button color='primary' onClick={() => props.dispatch({ type: 'ADD', payload: formObject})}>Submit</Button></InputGroupAddon>
        </InputGroup>
    )
}
export default TodoForm;
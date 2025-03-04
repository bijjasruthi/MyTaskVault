import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import {UpdateTaskForm} from "./UpdateTaskForm";
import classnames from 'classnames';

export const Task = ({ task }) => {
    const {id, name, completed} = task;
    const [isComplete, SetIsComplete] = useState(completed);
    const [isDialogOpen, setisDialogOpen] = useState(false);
    
    const handleUpdateTaskCompletion = () => {
        
        SetIsComplete((prev) => !prev)
    }

    const handleDeleteTask = () => {
        console.log("delete task")
    }
  return (
    <div className="task">
        <div className={classnames("flex",{
            done: isComplete
        })}>
        <Checkbox checked={isComplete}  onChange={handleUpdateTaskCompletion}/>
        <Typography variant="h4">{name}</Typography>
        </div>
        <div className="TaskButtons">
        <Button variant="contained" onClick={() => setisDialogOpen(true)}>
            <EditIcon/>
        </Button>
        <Button colour ="error" variant="contained" onClick={handleDeleteTask}> 
            <DeleteIcon/>
        </Button>
        </div>
        
        
        <UpdateTaskForm
        isDialogOpen={isDialogOpen}
        setisDialogOpen={setisDialogOpen}
        task={task}
        />
    </div>
  )
}

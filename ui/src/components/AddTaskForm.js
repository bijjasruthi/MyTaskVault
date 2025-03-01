import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { use } from 'react';

export const AddTaskForm = () => {
    const [newTask, setnewTask] = useState("");
    const addNewTask =() => {
        console.log("add new task clicked")
        
    }
  return (
    <div> 
        <Typography align='center' variant='h2' paddingTop={2} paddingBottom={2}>
            My task List 
        </Typography> 
        <div className='addTaskForm'>
        <TextField 
        size="small" 
        label="Task" 
        variant="outlined" 
        value={newTask} 
        onChange={(e) => setnewTask(e.target.value) }
        />
        <Button 
        disabled = {!newTask.length}  
        variant="outlined" onClick={addNewTask}> 
        <AddIcon/>
        </Button>

        </div>
       
    </div>
  )
}

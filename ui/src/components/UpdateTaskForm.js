import { Dialog, Button, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";


export const UpdateTaskForm = ({
  fetchTasks, 
  isDialogOpen, 
  setisDialogOpen, 
  task,
} ) => {
  const{ id, completed }  = task;
  const [taskName, setTaskName ] = useState("");

  const handleupdateTaskName = async () => {
    try{

    }catch (err) { 

    }
    
  }
  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>Edit Task</DialogTitle>
      <div className="dialog">
        <TextField
        size = "small"
        label="Task"
        variant="outlined"
        onChange={(e) => setTaskName(e.target.value)}
        />
        <Button 
          
          variant="contained" 
          onClick={() => {
            setisDialogOpen(false);
          }}
          >
            <CheckIcon />
        </Button>
      </div>
    </Dialog>
  )
}

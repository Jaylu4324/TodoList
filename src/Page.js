import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Title } from '@mui/icons-material';
import { useState } from "react"

export default function FormDialog() {
    // let copy = []
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("")
    const [Tid, setId] = React.useState(0)
    const [arr, setArr] = React.useState([])
    const [data, setData] = React.useState("")


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd = () => {
        if (Tid) {
            let copy = [...arr]
            let index = arr.findIndex((e) => (e.id == Tid))

            copy[index].Title = title;
            copy[index].Text = data;
            setData([...copy])
            setOpen(false);



        } else {
            setId(arr.length + 1)

            setArr([...arr, { id: arr.length + 1, Text: data, Title: title }])
            setOpen(false);

        }
        setId('')
        setData("")
        setTitle("")

    };
    // console.log(arr)
    return (
        <div style={{ marginTop: "10px" }}>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Data +
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Your Details In the Below Input.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Title"
                        value={title}
                        label="Enter Title"
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="text"
                        value={data}
                        label="Enter Here"
                        type="text"

                        fullWidth
                        variant="standard"

                        onChange={(e) => { setData(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>






            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: "5px" }}>
                {arr.map((ele) => (


                    <>
                        <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        <Grid container>
                                            <Grid items xs={6}>
                                                <b>Title :</b> &nbsp;&nbsp;{ele.Title}

                                            </Grid>
                                            <Grid items xs={3}>
                                                <Button variant="outlined" onClick={() => {
                                                    setOpen(true)
                                                    setTitle(ele.Title)
                                                    setData(ele.Text)
                                                    setId(ele.id)
                                                }} >
                                                    Edit

                                                </Button>

                                            </Grid>
                                            <Grid items xs={3}>
                                                <IconButton aria-label="delete" size="small" onClick={() => {
                                                    let index = arr.findIndex((e) => (e.id == ele.id));

                                                    let copy = [...arr];

                                                    copy.splice(index, 1)
                                                    setArr(copy)

                                                    // console.log('calledd')

                                                }}>
                                                    <DeleteIcon fontSize="inherit" />
                                                </IconButton>

                                            </Grid>
                                        </Grid>


                                    </Typography>



                                    <Typography variant="body2">
                                        {ele.Text}

                                    </Typography>
                                </CardContent>

                            </Card></Grid >
                    </>))}
            </Grid >
        </div >


    );
}
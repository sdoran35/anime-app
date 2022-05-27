import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProfileInput(props) {
    const [open, setOpen] = React.useState(true);


    const onTrigger = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} onSubmit={onTrigger}>
                <DialogTitle>Input Profile Data</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Load AniList data, please input the Profile and List Type.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="profile"
                        label="Profile"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="type"
                        label="List Type"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

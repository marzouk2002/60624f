import React, { useState } from 'react';
import axios from 'axios';
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    FormControl,
    FilledInput,
    InputAdornment,
    Typography
} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { BadgeAvatar } from '../../Sidebar';

const useStyles = makeStyles(theme => ({
    content: {
        width: '500px',
        height: '400px',
        overflow: 'auto',
    },

    inputWrapper: {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        marginBottom: '20px',

        "& > form": {
            width: '100%',
        }
    },

    filledInput: {
        height: 50,
        background: "#E9EEF9",
        borderRadius: 5,
        fontSize: 13,
        fontWeight: "bold",
        color: "#99A9C4",
        letterSpacing: 0,
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
    },
    input: {
        "&::placeholder": {
            color: "#ADC0DE",
            opacity: 1,
        },
    },

    userCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    user: {
        display: 'flex',
        alignItems: 'center',
    },

    userInfo: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 20,
        flexGrow: 1,
      },
    username: {
        fontWeight: "bold",
        letterSpacing: -0.2,
      },
}));

const AddUserPopup = (props) => {
    const [ searchText, setSearchText ] = useState('');
    const [ users, setUsers ] = useState([]);

    const { open, setOpen, conversationId } = props;
    const classes = useStyles();
    

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const searchUsers = async (searchText) => {
    try {
        const { data } = await axios.get(`/api/users/${searchText}`);
        setUsers(data);
    } catch (error) {
        console.error(error);
    }
    };

    const handleInputChange = async (event) => {
        if (event.target.value === '') {
          setUsers([]);
          setSearchText('');
          return;
        }
        await searchUsers(event.target.value);
        setSearchText(event.target.value);
    };

    const addToConv = async (userId, convId) => {
        try {
            await axios.post(`/api/conversations/${convId}/addUser/${userId}`);
            handleClose();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Dialog onClose={handleClose} open={open}  className={classes.root}>
            <DialogTitle>
                Search For Other Users to Add
            </DialogTitle>
            <DialogContent dividers className={classes.content}>
                <Box className={classes.inputWrapper}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth hiddenLabel>
                            <FilledInput
                            name="search"
                            onChange={handleInputChange}
                            classes={{ root: classes.filledInput, input: classes.input }}
                            disableUnderline
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            }
                            ></FilledInput>
                        </FormControl>
                    </form>
                </Box>
                <Box className={classes.usersList}>
                    {
                        users.map(user => (
                            <Box key={user.id} className={classes.userCard}>
                                <Box className={classes.user}>
                                    <BadgeAvatar
                                    photoUrl={user.photoUrl}
                                    username={user.username}
                                    online={user.online}
                                    sidebar={true}
                                    />
                                    <Box className={classes.userInfo}>
                                            <Typography className={classes.username}>
                                            {user.username}
                                            </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => addToConv(user.id, conversationId)} color="secondary">
                                    Add
                                </Button>
                            </Box>)
                        )
                    }
                </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddUserPopup;
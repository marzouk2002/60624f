import React, { useState } from 'react';
import { 
  FormControl,
  IconButton,
  FilledInput } from '@material-ui/core';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import { makeStyles } from '@material-ui/core/styles';
import UploadPopup from './UploadDialog/UploadPopup';
import { uploadFiles } from '../../utils/functions/uploadFiles';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },

  fileInput: {
    marginRight: '10px',
  }

}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClickPopup = () => {
    setOpenPopup(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const imageUrls = await uploadFiles(images);
    console.log(imageUrls);
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickPopup}
                className={classes.fileInput}
                edge="end"
              >
                <InsertPhotoOutlinedIcon color={images.length ? 'primary' : 'inherit'}/>
              </IconButton>
          }
        />
      </FormControl>
      <UploadPopup 
        open={openPopup}
        setOpen={setOpenPopup}
        setImages={setImages}
      />
    </form>
  );
};

export default Input;

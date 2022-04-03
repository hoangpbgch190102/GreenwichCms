import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { TopicContext } from '../../../contexts/TopicContext';

import '../index.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalUpdateTopic = ({ props }) => {
    const { open, handleClose } = props;
    const { UpdateTopic, topicState: { topic } } = React.useContext(TopicContext)
    // const { title } = topic
    const [titleUpdate, setTitleUpdate] = React.useState('')
    console.log(titleUpdate);

    const handelUpdateTopic = async (e) => {
        e.preventDefault();
        await UpdateTopic({ ...topic, title: titleUpdate })
        handleClose();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="modal-create__title">Update Topic</h1>
                    <form action="" onSubmit={handelUpdateTopic}>
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="Topic"
                            name="title"
                            autoComplete="title"
                            value={titleUpdate}
                            onChange={e => setTitleUpdate(e.target.value)}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            update
                        </Button>
                    </form>
                    <div style={{ textAlign: 'right' }}>
                        <Button variant="outlined" onClick={handleClose} >Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalUpdateTopic;
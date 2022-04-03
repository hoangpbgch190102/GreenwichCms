import { useState, useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TopicContext } from '../../../../contexts/TopicContext';
import ModalUpdateTopic from '../ModalUpdateTopic'

const ListTopic = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const props = { open, handleClose }

    const { getAllTopic, topicState: { topics }, findTopic, deleteTopic } = useContext(TopicContext)
    useEffect(() => { getAllTopic() }, [])

    const chooseUpdateTopic = (id) => {
        findTopic(id)
        handleOpen()
    }

    return (
        <div >
            <ul>
                {topics.map(topic => {
                    return (
                        <li key={topic.ideaCategoryId}>
                            <span>{topic.title}</span>
                            <div className="list-topic__control">
                                <IconButton onClick={chooseUpdateTopic.bind(this, topic.ideaCategoryId)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={deleteTopic.bind(this, topic.ideaCategoryId)}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ModalUpdateTopic props={props} />
        </div>
    )
}

export default ListTopic;
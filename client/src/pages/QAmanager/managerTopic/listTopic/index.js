import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TopicContext } from '../../../../contexts/TopicContext';

const ListTopic = () => {
    const { getAllTopic, topicState: { topics } } = React.useContext(TopicContext)
    React.useEffect(() => { getAllTopic() }, [])

    return (
        <div >
            <ul>
                {topics.map(topic => {
                    return (
                        <li key={topic.ideaCategoryId}>
                            <span>{topic.title}</span>
                            <div className="list-topic__control">
                                <IconButton>
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTopic;
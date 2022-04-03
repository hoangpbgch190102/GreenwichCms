import * as React from 'react';
import TextEditor from './TextEditor'
import UploadMultiFiles from './uploadFiles'
import RulesModal from './RulesModal';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { TopicContext } from '../../../../contexts/TopicContext';

import '../PostIdea.css'

const ariaLabel = { 'aria-label': 'description' };

const CreatePost = () => {
    const { topicState: { topic }, getAllTopic } = React.useContext(TopicContext);
    React.useEffect(() => getAllTopic(), []);

    return (
        <>
            <h1 className='idea-form__title' >Create new Idea</h1>
            <FormControl sx={{ m: 1, minWidth: 250, mb: 3, zIndex: 0 }}>
                <Input disabled defaultValue={topic.title} inputProps={ariaLabel} />
            </FormControl>
            <TextEditor />
            <UploadMultiFiles />
            <RulesModal />
        </>
    );
};

export default CreatePost;
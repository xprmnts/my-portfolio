import ReactMarkdown from 'react-markdown';
import Timeline from './Timeline.js';
import classes from './Summary.module.css';

const Summary = ({ summary, timeline }) => {
    return (
        <div className={classes['summary-container']}>
            <ReactMarkdown className={classes['summary-description']}>
                {summary}
            </ReactMarkdown>
            <Timeline
                className={classes['summary-timeline']}
                timeline={timeline}
            />
        </div>
    );
};

export default Summary;

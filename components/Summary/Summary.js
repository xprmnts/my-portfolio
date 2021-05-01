import ReactMarkdown from 'react-markdown';
import Timeline from './Timeline.js';
import classes from './Summary.module.css';

const Summary = ({ summary, timeline }) => {
    console.log(timeline);
    return (
        <section className={classes['summary-container']}>
            <ReactMarkdown className={classes.summary}>{summary}</ReactMarkdown>
            <Timeline timeline={timeline} />
        </section>
    );
};

export default Summary;

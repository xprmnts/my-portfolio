import classes from './Timeline.module.css';

const Timeline = ({ timeline }) => {
    const timelineToRender = timeline.map((item, index) => {
        const from = new Date(item.from.split('-')).toLocaleDateString(
            'en-US',
            {
                month: 'short',
                year: 'numeric'
            }
        );

        const to = new Date(item.to.split('-')).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });

        return (
            <li key={index} className={classes.experience}>
                <div className={classes.date}>
                    {from} to {to}
                </div>
                <div className={classes.role}>{item.role}</div>
                <div>{item.company}</div>
            </li>
        );
    });

    return (
        <section className={classes.timeline}>
            <div className={classes['timeline-title']}>
                Brief History In Time
            </div>
            <ul>{timelineToRender}</ul>
        </section>
    );
};

export default Timeline;

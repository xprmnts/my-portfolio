import { Fragment } from 'react';
import { getFeaturedSummary, getTimeline } from '../lib/content-utils';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';

export default function Home(props) {
    return (
        <Fragment>
            <Header />
            <Summary
                summary={props.summaryDescription}
                timeline={props.timeline}
            />
        </Fragment>
    );
}

export async function getStaticProps() {
    const summaryDescription = getFeaturedSummary();
    const timeline = getTimeline();

    return {
        props: {
            summaryDescription,
            timeline
        }
    };
}

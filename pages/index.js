import { getFeaturedSummary, getTimeline } from '../lib/content-utils';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';

export default function Home(props) {
    return (
        <div>
            <Header />
            <Summary summary={props.summary} timeline={props.timeline} />
        </div>
    );
}

export async function getStaticProps() {
    const summary = getFeaturedSummary();
    const timeline = getTimeline();

    return {
        props: {
            summary,
            timeline
        }
    };
}

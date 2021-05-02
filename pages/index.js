import { Fragment } from 'react';
import {
    getFeaturedSummary,
    getExperience,
    getEducation,
    getSkills
} from '../lib/content-utils';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';
import Experience from '../components/Experience/Experience';

export default function Home(props) {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='column'>
                    <Summary summary={props.summaryDescription} />
                </div>
                <div className='column'>
                    <Experience
                        experience={props.experience}
                        education={props.education}
                        skills={props.skills}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export async function getStaticProps() {
    const summaryDescription = await getFeaturedSummary();
    const experience = await getExperience();
    const education = await getEducation();
    const skills = await getSkills();
    return {
        props: {
            summaryDescription,
            experience,
            education,
            skills
        }
    };
}

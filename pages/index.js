import { Fragment } from 'react';
import {
    getFeaturedSummary,
    getExperience,
    getEducation,
    getSkills,
    getProjects
} from '../lib/content-utils';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

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
            <Projects projects={props.projects} />
            <Footer />
        </Fragment>
    );
}

export async function getStaticProps() {
    const summaryDescription = await getFeaturedSummary();
    const experience = await getExperience();
    const education = await getEducation();
    const skills = await getSkills();
    const projects = await getProjects();

    return {
        props: {
            summaryDescription,
            experience,
            education,
            skills,
            projects
        }
    };
}

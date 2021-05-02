import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getFeaturedSummary() {
    const filePath = path.join(contentDirectory, 'summary.md');
    const summaryContent = fs.readFileSync(filePath, 'utf-8');

    return summaryContent;
}

export async function getExperience() {
    const filePath = path.join(contentDirectory, 'timeline.json');
    const data = fs.readFileSync(filePath);
    const experience = JSON.parse(data);
    return experience;
}

export async function getEducation() {
    const filePath = path.join(contentDirectory, 'education.json');
    const data = fs.readFileSync(filePath);
    const education = JSON.parse(data);
    return education;
}

export async function getSkills() {
    const filePath = path.join(contentDirectory, 'skills.json');
    const data = fs.readFileSync(filePath);
    const skills = JSON.parse(data);
    return skills;
}

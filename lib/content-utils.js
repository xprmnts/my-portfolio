import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export function getFeaturedSummary() {
    const filePath = path.join(contentDirectory, 'summary.md');
    const summaryContent = fs.readFileSync(filePath, 'utf-8');

    return summaryContent;
}

export function getTimeline() {
    const filePath = path.join(contentDirectory, 'timeline.json');
    const data = fs.readFileSync(filePath);
    const timeline = JSON.parse(data);
    return timeline;
}

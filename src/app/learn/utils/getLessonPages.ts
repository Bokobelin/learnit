import fs from 'fs';
import path from 'path';

export function getLessonPages(courseId: string ) {
    const lessonsDir = path.join(process.cwd(), `src/app/learn/lessons/${courseId}`);
    const lessonFiles = fs.readdirSync(lessonsDir);
    return lessonFiles.map(file => {
        const lessonId = path.basename(file, path.extname(file));
        return {
            id: lessonId,
            path: `/learn/lessons/${courseId}/${lessonId}`
        };
    });
}
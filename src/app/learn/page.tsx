import Link from 'next/link';
import { getLessonPages } from './utils/getLessonPages';
import { Button } from '@/components/ui/button';

export default function LearnPage() {
    const lessonPages = getLessonPages("python");

    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
            <main className="flex flex-col items-center text-center gap-8">
                <h1 className="text-4xl font-bold">
                    Python Lessons
                </h1>
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Lesson</th>
                            <th className="px-4 py-2">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessonPages.map((lesson, index) => (
                            <tr key={lesson.id} className="border-t border-gray-700">
                                <td className="px-4 py-2">{index + 1}. {lesson.id}</td>
                                <td className="px-4 py-2">
                                    <Link href={lesson.path}>
                                        <Button className="text-blue-500 hover:underline">Go to lesson</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
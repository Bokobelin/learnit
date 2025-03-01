import { Button } from '@/components/ui/button';
import { getLessonPages } from './utils/getLessons';
import Link from 'next/link';


export default function LearnPage() {
    const lessonPages = getLessonPages();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold text-center sm:text-left">
                    Start learning Python
                </h1>
                <section className="flex flex-col gap-4 items-center">
                    {lessonPages.map(lesson => (
                        <Link key={lesson.id} href={lesson.path}>
                            <Button className="text-blue-500 hover:underline w-full">{lesson.id}</Button>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}
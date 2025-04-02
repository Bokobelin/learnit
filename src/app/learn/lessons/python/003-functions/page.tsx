import LessonLayout from "@/components/lesson/LessonLayout"
import ContentSection from "@/components/lesson/ContentSection"
import CodeExample from "@/components/lesson/CodeExample"

export default function IntroPage() {
    return (
        <LessonLayout
                      title="Introduction to Python"
                      course="Python"
                      lessonNumber={3}
                      totalLessons={3}
                      nextLesson={{
                        title: "Functions",
                        path: "/learn/lessons/python/003-functions",
                      }}
                    >
                        <ContentSection>
                <h1 className="text-4xl font-bold">
                    Functions
                </h1>
                <h2>
                    Functions are blocks of reusable code.
                </h2>
                <h3>
                    You can give a function a name and a body.
                </h3>
                <h4>
                    Here&apos;s an example:
                </h4>
                <CodeExample code={`def greet():\n    print("Hello, World")`} title="functions.py" />
                <h4>
                    The code must be indented with a tab to show that it is part of the function body.
                    <br />
                    You must think that functions are useless because they do not do anything by themselves.
                    <br />
                    You need to call the function to run it.
                </h4>
                <h4>
                    Here&apos;s an example:
                </h4>
                <CodeExample code={`greet()`} title="functions.py" />
            </ContentSection>
        </LessonLayout>
    );
}
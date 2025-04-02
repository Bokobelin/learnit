import LessonLayout from "@/components/lesson/LessonLayout"
import ContentSection from "@/components/lesson/ContentSection"
import CodeExample from "@/components/lesson/CodeExample"
import Note from "@/components/lesson/Note"
import Link from "next/link"

export default function IntroPage() {
  return (
    <LessonLayout
      title="Introduction to Python"
      course="Python"
      lessonNumber={1}
      totalLessons={3}
      nextLesson={{
        title: "Variables",
        path: "/learn/lessons/python/002-variables",
      }}
    >
      <ContentSection>
        <p>
          Python is a general-purpose programming language known for its simplicity and elegance. It&apos;s designed to be
          easy to read and write, making it an excellent choice for beginners.
        </p>

        <Note type="info">
          If you do not have Python installed on your computer, you can download and install it from{" "}
          <Link
            className="underline text-blue-400 hover:text-blue-300"
            href="https://www.python.org/downloads/"
            target="_blank"
          >
            python.org
          </Link>
          .
        </Note>
      </ContentSection>

      <ContentSection title="Your First Python Program">
        <p>
          Let&apos;s start with a simple example. Create a file called <code>hello.py</code> and write the following code:
        </p>

        <CodeExample code={`print('Hello, World!')`} title="hello.py" />

        <p>
          To run the code, open a terminal and navigate to the directory where the file is located. Then run the
          following command:
        </p>

        <CodeExample code={`python hello.py`} language="bash" title="Terminal" />

        <p>
          You should see the output <code>Hello, World!</code> printed to the terminal.
        </p>
      </ContentSection>

      <ContentSection title="Understanding the Code">
        <p>Let&apos;s break down what&apos;s happening in our first program:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>print()</code> is a built-in Python function that displays text to the console.
          </li>
          <li>The text we want to display is placed inside the parentheses as an argument.</li>
          <li>
            Text in Python must be enclosed in quotes - either single quotes (<code>&apos;text&apos;</code>) or double quotes (
            <code>&quot;text&quot;</code>).
          </li>
        </ul>

        <Note type="tip">
          Python is case-sensitive, so <code>print()</code> works, but <code>Print()</code> or <code>PRINT()</code>{" "}
          would cause an error.
        </Note>
      </ContentSection>

      <ContentSection title="Try It Yourself">
        <p>Now that you understand the basics, try modifying the program to print your own message:</p>

        <CodeExample
          code={`print('Hello, Python learner!')
print("I'm excited to learn Python programming.")`}
          title="hello.py"
        />

        <p>
          Notice that we can use both single and double quotes for strings. Double quotes are useful when your text
          contains apostrophes.
        </p>
      </ContentSection>
    </LessonLayout>
  )
}


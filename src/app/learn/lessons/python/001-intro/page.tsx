import CodeBlock from "@/components/codeBlock";
import Link from "next/link";

export default function IntroPage() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
            <main className="flex flex-col items-center text-center gap-8">
                <h1 className="text-4xl font-bold">
                    Intro to Python
                </h1>
                <h2>
                    If you do not have Python installed on your computer, you can find it <Link className="underline text-blue-500" href="https://www.python.org/downloads/">here</Link>.
                </h2>
                <h3>
                    Python is a general-purpose programming language. Python is designed to be easy to read and write, and is known for its simplicity and elegance.
                </h3>
                <h4>
                    Let&apos;s start with a simple example. Create a file called <code>hello.py</code> and write the following code:
                </h4>
                <CodeBlock code={`print('Hello, World!')`} />
                <h4>
                    To run the code, open a terminal and navigate to the directory where the file is located. Then run the following command:
                </h4>
                <CodeBlock code={`python hello.py`} />
                <h4>
                    You should see the output <code>Hello, World!</code> printed to the terminal.
                </h4>
                <h4>
                    Now, let&apos;s understand the code:
                    <br />
                    <code>print</code> followed by parentheses <code>()</code> is a displays the text between the parentheses to the console. But you can&apos;t just put text like that; we need to wrap it in quotes <code>&apos;&apos;</code> or <code>&quot;&quot;</code>.
                </h4>
            </main>
        </div>
    );
}
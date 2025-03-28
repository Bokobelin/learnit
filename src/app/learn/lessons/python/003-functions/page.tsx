import CodeBlock from "@/components/codeBlock";

export default function IntroPage() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
            <main className="flex flex-col items-center text-center gap-8">
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
                <CodeBlock code={`def greet():\n    print("Hello, World")`} />
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
                <CodeBlock code={`greet()`} />
            </main>
        </div>
    );
}
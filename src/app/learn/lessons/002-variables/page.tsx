import CodeBlock from "@/components/codeBlock";

export default function IntroPage() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-black text-white">
            <main className="flex flex-col items-center text-center gap-8">
                <h1 className="text-4xl font-bold">
                    Variables
                </h1>
                <h2>
                    Variables are used to store data in a program. They are like a box that holds a value.
                </h2>
                <h3>
                    You can give a variable a name and assign a value to it.
                </h3>
                <h4>
                    Here&apos;s an example:
                </h4>
                <CodeBlock code={`x = 5`} />
                <h4>
                    This bit of code creates a variable named <code>x</code> and assigns it the value <code>5</code>.
                    <br />
                    You can then use the variable <code>x</code> in your program.
                    Here&apos;s an example:
                </h4>
                <CodeBlock code={`x = 5\nprint(x)`} />
                <h4>
                    In this code, we do not wrap the variable <code>x</code> in quotes because we want to print the value of the variable, not the variable name.
                    <br />
                    When you run this code, you should see the output <code>5</code> printed to the terminal
                </h4>
            </main>
        </div>
    );
}
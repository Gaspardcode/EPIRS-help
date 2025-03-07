import {React} from "react";
import Code from "../components/Code.jsx";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import { PrototypeMessage } from "../components/HighlightedMessage.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

function BossSection() {
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold pb-4">Boss</h2>
                <P>Seems like you deserve a trickier exercise</P>
                <div className="my-4" />
                <MasterMatcher />
            </section>
        </>
    );
}


function MasterMatcher() {
    return (
        <section className="w-full py-4">
            {/* Title */}
            <h3 className="text-4xl text-purple-600">
                <Code>findFirst/master_matcher.rs</Code>
            </h3>

            {/* Toggle Component */}
            <Toggle title="MasterMatcher" color="boss">
                {/* Description */}
                <P>
                    Congratulations on making it this far! At this point, we assume
                    you've mastered string handling in Rust. Now, it's time for the
                    final challenge—proving your worth against the <Code>master_matcher()</Code> function.
                </P>

                <P>
                    This function is a **string matcher**, originally implemented in
                    **C** (you can check it out with <Code>man fnmatch</Code>). Your
                    task is to implement a simplified version in Rust. It will compare
                    a given **pattern** with an **input string** using specific matching
                    rules.
                </P>

                {/* Explanation of special characters */}
                <P>
                    Here are the three special matching rules you'll need to handle:
                </P>
                <ul className="list-disc list-inside pl-4">
                    <li>
                        <Code>?</Code> → Matches **any single character**.
                        <br />
                        Example: <Code>"hello.?"</Code> matches <Code>"hello.c"</Code>.
                    </li>
                    <li>
                        <Code>*</Code> → Matches **any sequence of characters** (including none).
                        <br />
                        Example: <Code>"hell*"</Code> matches <Code>"hello.c"</Code>, <Code>"hello"</Code>, and <Code>"hell"</Code>.
                    </li>
                    <li>
                        <Code>\</Code> → **Escapes** special characters (`?` and `*`).
                        <br />
                        Example: <Code>"hello\*"</Code> only matches <Code>"hello*"</Code> (literally).
                    </li>
                </ul>

                <P>
                    It might seem daunting at first, but trust me, **it's doable**!
                    Mastering this function will give you a strong foundation for
                    future Rust challenges.
                </P>

                <P>Here’s the function signature you'll be implementing:</P>
                <PrototypeMessage>
                    <CodeBlock language="rust">
                        {`pub fn master_matcher(pattern: &str, string: &str) -> bool {
    unimplemented!();
}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}
export default BossSection;
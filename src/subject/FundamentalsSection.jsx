import React from "react";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import { HelpMessage, PrototypeMessage, TestMessage, WarningMessage } from "../components/HighlightedMessage.jsx";
import Code from "../components/Code.jsx";

function FundamentalsSection() {
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold pb-4">Fundamentals</h2>
                <LcsPart />
                <CountVowels />
                <Preproc />
                <FindFirst />
            </section>
        </>
    );
}

function LcsPart() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>lcp.rs</Code></h3>
            <Toggle title="LCP" color={"fundamentals"}>
                <P>The idea is simply to find the (L)ongest (C)ommon (P)refix of two String.</P> 
                <HelpMessage>
                    <P>To ease indexing, you may want to cast the Strings to Vectors of char. Look up to collect the string if you are lost. Keep in mind collect() has a cost of O(n), but index using chars().nth() also does.</P>
                </HelpMessage>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn lcp(s1: String, s2: String) -> String { /* Todo */ }`}
                    </CodeBlock>
                </PrototypeMessage>
                <TestMessage>
                    <CodeBlock language="language-rust">
                        {`
mod lcp;
#[cfg(test)]
mod lcp_test {
    use crate::lcp::lcp;

    macro_rules! lcp_tests {
        ($($decode_name:ident: $encode_name:ident: $args:expr,)*) => {
            $(
                #[test]
                fn $encode_name() {
                    let (s1, s2, expected) = $args;
                    let result = lcp(&String::from(s1), &String::from(s2));
                    assert_eq!(result, String::from(expected));
                }

                #[test]
                fn $decode_name() {
                    let (s1, s2, expected) = $args;
                    let result = lcp(&String::from(s2), &String::from(s1));
                    assert_eq!(result, String::from(expected));
                }
            )*
        }
    }

    lcp_tests! {
        lcp_same:lcp_same_reverse: (
        "i1234e",
        "i1234e",
        "i1234e",
        ),
        lcp_empty:lcp_empty_reverse: (
        "",
        "",
        "",
        ),
        lcp_subset:lcp_subset_reverse: (
        "rtyuiopiuytfghu765",
        "rtyuiopasdfghjkl",
        "rtyuiop",
        ),
        lcp_still_empty:lcp_still_empty_reverse: (
        "qwertyuiop",
        "zxcvbnmnbvcxcvbn",
        "",
        ),
        lcp_unicode:lcp_unicode_reverse: (
        "🤩🤩😇🤩😇",
        "🤩🤩😇😇😇😇😇",
        "🤩🤩😇",
        ),
    }
}`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}
function Preproc() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>preproc.rs</Code></h3>
            <Toggle title="preproc" color={"fundamentals"}>
                <P> Here you must mimic a simplified behavior of the preprocessor and remove all comments from the given string.
                    We arbitrarily define a comment as a sequence of character beginning with '#' and ending with a newline. 
                    </P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {` pub fn preproc(s: String) -> String {/*TODO*/}`}
                    </CodeBlock>
                </PrototypeMessage>
                <WarningMessage>
                <P>A nice challenge would be to make this function without if/else. Use <a className="text-green-700" href="https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html">pattern matching </a>instead.</P>
                </WarningMessage>
       
            </Toggle>
        </section>
    );
}
function CountVowels() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>findFirst/count_vowels.rs</Code></h3>
            <Toggle title="countVowels" color={"fundamentals"}>
                <P>The goal in here is to return the number of vowels of a given String
                    Return 0 if empty.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn count_vowels(s: &str) -> usize {}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function FindFirst() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>findFirst/find_first.rs</Code></h3>
            <Toggle title="FindFirst" color={"fundamentals"}>
                <P>The find_first() function takes a string as input and returns the index of the patter given as parametter.
                    If not found, you should return the len of the string.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn find_first(s: &str, pattern: &str) -> usize {}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

export default FundamentalsSection;

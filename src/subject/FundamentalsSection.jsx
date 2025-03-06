import React from "react";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {HelpMessage, PrototypeMessage, TestMessage} from "../components/HighlightedMessage.jsx";
import UL from "../UL.jsx";
import Code from "../components/Code.jsx";

function FundamentalsSection() {
  return (
    <>
        <section className="w-full px-16 py-8">
            <h2 className="text-6xl font-bold pb-4">Fundamentals</h2>
            <LcsPart />
            <HashmapPart />
            <RegexPart />
        </section>
    </>
  );
}

function LcsPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>lcs/lcs.rs</Code></h3>
            <Toggle title="LCS" color={"fundamentals"}>
                <P>Ceci est une bla bla .</P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn lcs(String a, String b) -> String { /* Todo */ }`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function HashmapPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>hashmap/hashmap.rs</Code></h3>
            <Toggle title="Hashmap" color={"fundamentals"}>
                <P>Ceci est une énumération qui représente les quatre couleurs des cartes de Uno.</P>
                <P>Vous devez définir les couleurs suivantes, leur associant la valeur entre parenthèses.</P>
                <UL>
                    <li><Code>ColorGreen</Code> (0)</li>
                    <li><Code>ColorRed</Code> (1)</li>
                    <li><Code>ColorBlue</Code> (2)</li>
                    <li><Code>ColorYellow</Code> (3)</li>
                </UL>
            </Toggle>
        </section>
    );
}

function RegexPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>regex/regex.rs</Code></h3>
            <Toggle title="Regex" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>Card</Code> qui représente une carte de Uno. Nous définirons les différents types de cartes juste après.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>Card</Code> doit avoir les attributs suivants :</u></P>
                <UL>
                    <li>Un attrubut <b>privé</b> <Code>Value</Code> de type <Code>string</Code> qui représente la valeur de la carte (exemple: "7", "Reverse", ect...).</li>
                </UL>
            </Toggle>
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>Card</Code> doit avoir un constructeur qui initialise l'attribut <Code>Value</Code> à partir de la <Code>cardValue</Code> passée en paramètre.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public Card(string cardValue) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                Wait the next function if you want to test properly the constructor.
            </Toggle>
            <Toggle title="GetCardValue" color={"fundamentals"}>
                <P>La classe <Code>Card</Code> doit avoir une méthode <Code>GetCardValue</Code> qui retourne l'attribut <Code>Value</Code> de la carte.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public string GetCardValue() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Card card = new Card("7");
Console.WriteLine(card.GetCardValue()); // Affiche "7"
Card card2 = new Card("Reverse");
Console.WriteLine(card2.GetCardValue()); // Affiche "Reverse"`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}
 export default FundamentalsSection;
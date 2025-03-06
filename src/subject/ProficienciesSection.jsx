import React from "react";
import Code from "../components/Code.jsx";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import {PrototypeMessage, TestMessage} from "../components/HighlightedMessage.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import UL from "../UL.jsx";

function ProficienciesSection()
{
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold pb-4">Proficiencies</h2>
                <P>Lorsque vous utiliserez la capacité de vos cartes, vous devrez aussi vous assurez d'enfiler le Joueur actuel dans la file de joueurs.</P>
                <div className="my-4"/>
                <PlayerPart2/>
            </section>
        </>
    );
}

function PlayerPart2()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>idk.rs</Code></h3>
            <Toggle title="DrawCard" color="proficiencies">
                <P>La méthode <Code>DrawCard</Code> prend en paramètre le paquet de cartes. Elle ajoute une carte au joueur en prenant la première carte du paquet (à l'index 0).</P>
                <P>N'oubliez pas de retirer la carte du paquet.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void DrawCard(List<Card> deck) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
List<Card> deck = new List<Card> { new BasicCard("6", ColorEnum.ColorRed), new BasicCard("6", ColorEnum.ColorBlue), new BasicCard("6", ColorEnum.ColorGreen) };
player.DrawCard(deck);
// player should have 1 card in his hand -> 6 red
// deck should have 2 cards -> 6 blue, 6 green
`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="UseCard" color="proficiencies">
                <P>La méthode <Code>UseCard</Code> prend en paramètre la carte à jouer et la pile de cartes. Elle ajoute la carte à la pile puis retire la carte de la main du joueur.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void UseCard(Card card, Stack<Card> stack) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("6", ColorEnum.ColorRed), new BasicCard("6", ColorEnum.ColorBlue) };
Stack<Card> stack = new Stack<Card>();
player.UseCard(player.Hand[0], stack);
// player should have 1 card in his hand -> 6 blue
// stack should have 1 card -> 6 red
`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}
export default ProficienciesSection;

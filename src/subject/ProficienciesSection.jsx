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
                <SpecialCardPart2/>
                <JokerCardPart2/>
                <PlayerPart3/>
                <GamePart2/>
            </section>
        </>
    );
}

function PlayerPart2()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>Player.cs</Code></h3>
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

function SpecialCardPart2()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>Card/SpecialCard.cs</Code></h3>
            <Toggle title="PickTwoCard" color="proficiencies">
                <P>La méthode <Code>PickTwoCard</Code> prend en paramètre le joueur actuel, la file de joueurs et le paquet de cartes. Elle retire le prochain joueur de la file, lui fait piocher deux cartes, puis remet le joueur actuel puis le prochain joueur dans la file.</P>
                <P>Il est important de noter que le joueur actuel doit être remis dans la file avant le prochain joueur.</P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void PickTwoCard(Player actualPlayer, Queue<Player> players, List<Card> deck) { }`}
                    </CodeBlock>
                </PrototypeMessage>

                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player actualPlayer = new Player("Alice");
actualPlayer.Hand = new Card[] { new BasicCard("7", ColorEnum.ColorRed) };
Player nextPlayer = new Player("Bob");
nextPlayer.Hand = new Card[] { new BasicCard("0", ColorEnum.ColorYellow) };
Queue<Player> players = new Queue<Player>( new List<Player> { nextPlayer, new Player("Charlie") } );
List<Card> deck = new List<Card> { new BasicCard("6", ColorEnum.ColorRed), new BasicCard("6", ColorEnum.ColorBlue), new BasicCard("6", ColorEnum.ColorGreen) };
SpecialCard card = new SpecialCard("PickTwo", ColorEnum.ColorRed);
card.PickTwoCard(actualPlayer, players, deck);
// players should be -> Bob, Alice, Charlie ->
// Bob should have 3 cards in his hand -> 0 yellow, 6 red, 6 blue`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="SkipCard" color="proficiencies">
                <P>La méthode <Code>SkipCard</Code> prend en paramètre le joueur actuel et la file de joueurs. Elle retire le prochain joueur de la file puis le remet dans la file.</P>
                <P>Il est important de noter que le joueur actuel doit être remis dans la file avant le prochain joueur.</P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void SkipCard(Player actualPlayer, Queue<Player> players) { }`}
                    </CodeBlock>
                </PrototypeMessage>

                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Queue<Player> players = new Queue<Player>( new List<Player> { new Player("Alice"), new Player("Bob"), new Player("Charlie") } );
Player actualPlayer = players.Dequeue();
SpecialCard card = new SpecialCard("Skip", ColorEnum.ColorRed);
card.SkipCard(actualPlayer, players);
// players should be -> Bob, Alice, Charlie ->
Console.WriteLine();`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>

            <Toggle title="ReverseCard" color="proficiencies">
                <P>La méthode <Code>ReverseCard</Code> prend en paramètre le joueur actuel et la file de joueurs. Elle inverse l'ordre des joueurs dans la file.</P>
                <P>Il est important de noter que le joueur actuel doit être remis dans la file après l'avoir renversée.</P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void ReverseCard(Player actualPlayer, Queue<Player> players) { }`}
                    </CodeBlock>
                </PrototypeMessage>

                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Queue<Player> players = new Queue<Player>( new List<Player> { new Player("Alice"), new Player("Bob"), new Player("Charlie") } );
Player actualPlayer = players.Dequeue();
SpecialCard card = new SpecialCard("Reverse", ColorEnum.ColorRed);
card.ReverseCard(actualPlayer, players);
// players was -> Charlie, Bob ->
// players is now -> Alice, Bob, Charlie ->`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="UseCapacity" color="proficiencies">
                <P>La méthode <Code>UseCapacity</Code> prend en paramètre le joueur actuel, la file de joueurs et le paquet de cartes. Elle appelle la méthode correspondante à la capacité de la carte.</P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void UseCapacity(Player actualPlayer, Queue<Player> players, List<Card> deck) { }`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function JokerCardPart2()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>Card/JokerCard.cs</Code></h3>
            <Toggle title="UseCapacity" color="proficiencies">
                <P>La classe <Code>JokerCard</Code> est une carte spéciale qui permet de changer la couleur du jeu. Cependant ici nous ne gèreront pas le changement de couleur (qui se fera dans une autre fonction). Nous allons simplement faire piocher des cartes au joeurs suiavnts en fonction du malus de la carte.</P>
                <P>La méthode <Code>UseCapacity</Code> prend en paramètre le joueur actuel et la file de joueurs. Elle fait piocher des cartes au joueur suivant en fonction du malus de la carte.</P>
                <P>La fonction remet ensuite le joueur actuel puis le joueur suivant dans la file.</P>
                <P>Il est important de noter que le joueur actuel doit être remis dans la file avant le prochain joueur.</P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void UseCapacity(Player actualPlayer, Queue<Player> players), List<Card> deck { }`}
                    </CodeBlock>
                </PrototypeMessage>

                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Queue<Player> players = new Queue<Player>( new List<Player> { new Player("Alice"), new Player("Bob"), new Player("Charlie") } );
List<Card> deck = new List<Card> { new BasicCard("6", ColorEnum.ColorRed), new BasicCard("6", ColorEnum.ColorBlue), new BasicCard("6", ColorEnum.ColorGreen) };
Player actualPlayer = players.Dequeue();
JokerCard jokerCard = new JokerCard(2);
jokerCard.UseCapacity(actualPlayer, players, deck);
// players should be -> Bob, Alice, Charlie ->
// Bob should have 2 cards in his hand -> 6 red, 6 blue
// deck should have 1 card -> 6 green`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function PlayerPart3()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>Player.cs</Code></h3>

            <Toggle title="Play" color="proficiencies">
                <P>La méthode <Code>Play</Code> prend en paramètre la pile de cartes, le paquet de cartes, la file de joueurs et la couleur actuelle. Elle regarde sa main de gauche à droite, s'il peut jouer une carte, il la joue. S'il ne peut pas jouer, il pioche une carte.</P>
                <P>Il peut jouer uniquement si la couleur de la carte est identique à la couleur actuelle ou que le chiffre est le même que la carte du dessus de la pile ou que la carte est un Joker.</P>
                <P>La méthode doit retourner un booléen indiquant si le joueur n'a plus de cartes en main.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public bool Play(Stack<Card> pile, List<Card> deck, Queue<Player> players, ColorEnum actualColor) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("6", ColorEnum.ColorBlue) };
Stack<Card> pile = new Stack<Card>();
pile.Push(new BasicCard("6", ColorEnum.ColorRed));
List<Card> deck = new List<Card> { new BasicCard("6", ColorEnum.ColorBlue), new BasicCard("6", ColorEnum.ColorGreen) };
Queue<Player> players = new Queue<Player>( new List<Player> { new Player("Bob"), new Player("Charlie") } );
ColorEnum actualColor = ColorEnum.ColorRed;
bool res = player.Play(pile, deck, players, actualColor);
// players should be -> Alice, Charlie, Bob ->
// Alice should have played the card and the pile should have 2 cards
// Alice should have 0 cards in her hand
// the function should return true`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function GamePart2()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>GameManager.cs</Code></h3>
            <Toggle title="ShuffleDeck" color="proficiencies">
                <P>La méthode <Code>ShuffleDeck</Code> mélange le paquet de cartes du joueur.</P>
                <P>Vous devez pour cela créer un tableau à deux dimensions de cartes de 5 colonnes et avec le nombre de lignes le plus petit possible pour contenir toutes les cartes du paquet.</P>
                <P>Vous devez ensuite parcourir le deck et placer chaque carte dans le tableau, en les remplacant colonne par colonne. (d'abord <Code>arr[0][0]</Code> puis <Code>arr[1][0]</Code> etc.)</P>
                <P>Enfin, vous devez reconstruire le deck en parcourant le tableau (ligne par ligne) et en ajoutant chaque carte non nulle dans le deck.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void ShuffleDeck() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`GameManager game = new GameManager();

game.Deck = new List<Card>
{
    new BasicCard("1", ColorEnum.ColorRed),
    new BasicCard("2", ColorEnum.ColorBlue),
    new BasicCard("3", ColorEnum.ColorGreen),
    new BasicCard("4", ColorEnum.ColorYellow),
    new BasicCard("5", ColorEnum.ColorRed),
    new BasicCard("6", ColorEnum.ColorBlue),
    new BasicCard("7", ColorEnum.ColorGreen),
    new BasicCard("8", ColorEnum.ColorYellow),
    new BasicCard("9", ColorEnum.ColorRed)
};

game.ShuffleDeck();

// deck should be:
// done later
// 1 ColorRed
// 3 ColorGreen
// 5 ColorRed
// 7 ColorGreen
// 9 ColorRed
// 2 ColorBlue
// 4 ColorYellow
// 6 ColorBlue
// 8 ColorYellow`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="CountPoints" color="proficiencies">
                <P>La méthode <Code>CountPoints</Code> retourne un dictionnaire contenant les points de chaque joueur.</P>
                <P>Chaque carte spéciale vaut 20 points, chaque carte normale vaut son chiffre et chaque Joker vaut 50 points.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public Dictionary<Player,int> CountPoints() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player1 = new Player("Alice");
player1.Hand = new Card[] { new BasicCard("6", ColorEnum.ColorRed), new BasicCard("6", ColorEnum.ColorBlue), new BasicCard("6", ColorEnum.ColorGreen) };
Player player2 = new Player("Bob");
player2.Hand = new Card[] { new SpecialCard("PickTwo", ColorEnum.ColorRed), new SpecialCard("Skip", ColorEnum.ColorBlue), new SpecialCard("Reverse", ColorEnum.ColorGreen) };
GameManager game = new GameManager();
game.AddPlayer(player1);
game.AddPlayer(player2);
Dictionary<Player,int> points = game.CountPoints();
Console.WriteLine(points[player1]); // 18
Console.WriteLine(points[player2]); // 60`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="DealCards" color="proficiencies">
                <P>La méthode <Code>DealCards</Code> distribue 7 cartes à chaque joueur. Elle doit appeler la méthode <Code>DrawCard</Code> à chaque fois.</P>
                
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void DealCards() { }`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
            
            <Toggle title="PlayGame" color="proficiencies">
                La méthode <Code>PlayGame</Code> est la méthode principale du jeu. Elle doit appeler les méthodes créées précédemment pour jouer une partie complète.
                
                Voici les différentes étapes à suivre:
                <UL>
                    <li>Appeler la méthode <Code>DealCards</Code></li>
                    <li>Créer la pile de défausse <Code>DiscardPile</Code> et y ajouter un 0 jaune (pour vous faciliter la tâche)</li>
                    <li>Créer une variable <Code>currentColor</Code> qui contiendra la couleur actuelle</li>
                    <li>Entrer dans une boucle infinie
                        <UL>
                            <li>Entrer dans une boucle tant que le paquet de cartes n'est pas vide
                                <UL>
                                    <li>Retirer le joueur actuel de la file</li>
                                    <li>Appeler la méthode <Code>Play</Code> du joueur actuel</li>
                                    <li>Si le joueur n'a plus de cartes, appeler la méthode <Code>CountPoints</Code> et retourner le résultat</li>
                                    <li>Changer la couleur actuelle en fonction de la carte du dessus de la pile</li>
                                </UL>
                            </li>
                            <li>Retirer la carte du dessus de la pile et remettre toutes les cartes de la pile dans le paquet</li>
                            <li>Mélanger le paquet</li>
                        </UL>
                    </li>
                </UL>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public Dictionary<Player,int> PlayGame() { }`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

export default ProficienciesSection;
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
            <UnoExceptionPart />
            <EnumsPart />
            <CardPart />
            <BasicCardPart />
            <SpecialCardPart />
            <JokerCardPart />
            <PlayerPart />
            <GamePart />
        </section>
    </>
  );
}

function UnoExceptionPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>UnoException.cs</Code></h3>
            <Toggle title="UnoException" color={"fundamentals"}>
                <P>Ceci est une exception que nous utiliserons tout au long du TP.</P>
                <P>Copiez là dans <Code className={"text-red-500 font-mono italic"}>UnoException.cs</Code></P>

                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public class UnoException : Exception { }`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function EnumsPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Enums.cs</Code></h3>
            <Toggle title="ColorEnum" color={"fundamentals"}>
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

function CardPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Card/Card.cs</Code></h3>
            <Toggle title="Fields" color={"fundamentals"}>
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

function BasicCardPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Card/BasicCard.cs</Code></h3>
            <Toggle title="Fields" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>BasicCard</Code> qui représente une carte de Uno avec une valeur numérique (exemple: 6 rouge).</P>
                <div className="my-4"/>
                <P>La classe <Code>BasicCard</Code> doit hériter de <Code>Card</Code>.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>BasicCard</Code> doit avoir les attributs suivants :</u></P>
                <UL>
                    <li>Un attribut <b>public</b> <Code>Color</Code> de type <Code>ColorEnum</Code> qui représente la couleur de la carte.</li>
                </UL>
            </Toggle>
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>BasicCard</Code> doit avoir un constructeur qui initialise les attributs <Code>Value</Code> et <Code>Color</Code> à partir de la <Code>cardValue</Code> et <Code>cardColor</Code> passés en paramètre.</P>
                <div className="my-4"/>
                <P>Attention, la valeur d'une carte basique ne peut pas excéder une taille de 1 et contenir une autre valeur qu'un chiffre. Sinon, levez une <Code>UnoException</Code>.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public BasicCard(string cardValue, ColorEnum cardColor) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`BasicCard card = new BasicCard("7", ColorEnum.ColorRed);
Console.WriteLine(card.GetCardValue()); // Affiche "7"
Console.WriteLine(card.Color); // Affiche "ColorRed"
BasicCard card2 = new BasicCard("Reverse", ColorEnum.ColorRed); // Lève une UnoException`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function SpecialCardPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Card/SpecialCard.cs</Code></h3>
            <Toggle title="Fields" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>SpecialCard</Code> qui représente une carte de Uno spéciale (exemple: "Reverse" bleue).</P>
                <div className="my-4"/>
                <P>La classe <Code>SpecialCard</Code> doit hériter de <Code>Card</Code>.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>SpecialCard</Code> doit avoir les attributs suivants :</u></P>
                <UL>
                    <li>Un attribut <b>public</b> <Code>Color</Code> de type <Code>ColorEnum</Code> qui représente la couleur de la carte.</li>
                </UL>
            </Toggle>
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>SpecialCard</Code> doit avoir un constructeur qui initialise les attributs <Code>Value</Code> et <Code>Color</Code> à partir de la <Code>cardValue</Code> et <Code>cardColor</Code> passés en paramètre.</P>
                <div className="my-4"/>
                <P>Attention, la valeur d'une carte spéciale ne peut etre que "Skip", "PickTwo" ou "Reverse".</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public SpecialCard(string cardValue, ColorEnum cardColor) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`SpecialCard card = new SpecialCard("Reverse", ColorEnum.ColorBlue);
Console.WriteLine(card.GetCardValue()); // Affiche "Reverse"
Console.WriteLine(card.Color); // Affiche "ColorBlue"
SpecialCard card2 = new SpecialCard("2", ColorEnum.ColorGreen); // Lève une UnoException`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function JokerCardPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Card/JokerCard.cs</Code></h3>
            <Toggle title="Fields" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>JokerCard</Code> qui représente une carte de Uno spéciale (exemple: "Joker").</P>
                <div className="my-4"/>
                <P>La classe <Code>JokerCard</Code> doit hériter de <Code>Card</Code>.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>JokerCard</Code> doit avoir les attributs suivants :</u></P>
                <UL>
                    <li>Un attribut <b>privé</b> <Code>_penalty</Code> de type <Code>ushort</Code> qui représente la pénalité de la carte. (exemple: +4)</li>
                </UL>
            </Toggle>
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>JokerCard</Code> doit avoir un constructeur qui initialise les attributs <Code>Value</Code> et <Code>_penalty</Code> à partir de <Code>penalty</Code> passé en paramètre.</P>
                <div className="my-4"/>
                <P>La valeur d'une carte Joker est <Code>{`"Joker{penalty}"`}</Code>.</P>
                <P>La pénalité doit être un multiple de 2 et ne doit pas être supérieure (strict) à 8.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public JokerCard(ushort penalty) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`JokerCard card = new JokerCard(4);
Console.WriteLine(card.GetCardValue()); // Affiche "Joker4"
JokerCard card2 = new JokerCard(0); 
Console.WriteLine(card2.GetCardValue()); // Affiche "Joker0"
JokerCard card3 = new JokerCard(7); // Lève une UnoException`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function PlayerPart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>Player.cs</Code></h3>
            <Toggle title="Propriétés" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>Player</Code> qui représente un joueur de Uno.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>Player</Code> doit avoir les propriétés suivantes :</u></P>
                <UL>
                    <li>Une propriété <b>publique</b> <Code>Name</Code> de type <Code>string</Code> qui représente le nom du joueur (n'ayant qu'un getter).</li>
                    <li>Une propriété <b>publique</b> <Code>Hand</Code> de type <Code>Card[]</Code> qui représente la main du joueur (ayant un getter et un setter).</li>
                    <li>Une propriété <b>publique</b> <Code>NbCards</Code> de type <Code>ushort</Code> n'ayant qu'un getter qui doit renvoyer le nombre de cartes que le joueur a dans sa main.</li>
                </UL>
                <HelpMessage>
                    <P>Vous devez changer le getter de base de NbCards pour qu'il puisse vous renvoyer le nombre de cartes du joueur.</P>
                </HelpMessage>
            </Toggle>
            
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>Player</Code> doit avoir un constructeur qui initialise le <Code>Name</Code> à partir du <Code>name</Code> passé en paramètre.</P>
                <div className="my-4"/>
                <P>La main du joueur doit être vide à sa création (tableau de taille 0).</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public Player(string name) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
Console.WriteLine(player.Name); // Affiche "Alice"
Console.WriteLine(player.NbCards); // Affiche 0`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="GetNumberOfCardsByColor" color={"fundamentals"}>
                <P>La classe <Code>Player</Code> doit avoir une méthode <Code>GetNumberOfCardsByColor</Code> qui retourne un dictionnaire contenant le nombre de cartes de chaque couleur que le joueur possède.</P>
                <P>Les clés du dictionnaire sont les couleurs des cartes et les valeurs associées sont le nombre de cartes de cette couleur.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public Dictionary<ColorEnum, ushort> GetNumberOfCardsByColor() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("7", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorBlue) };
Dictionary<ColorEnum, ushort> cardsByColor = player.GetNumberOfCardsByColor();
Console.WriteLine(cardsByColor[ColorEnum.ColorRed]); // Affiche 1
Console.WriteLine(cardsByColor[ColorEnum.ColorBlue]); // Affiche 1
Console.WriteLine(cardsByColor[ColorEnum.ColorGreen]); // Affiche 0
Console.WriteLine(cardsByColor[ColorEnum.ColorYellow]); // Affiche 0`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="GetBestColor" color={"fundamentals"}>
                <P>La classe <Code>Player</Code> doit avoir une méthode <Code>GetBestColor</Code> qui retourne la couleur la plus présente dans la main du joueur.</P>
                <P>Si le joueur a autant de cartes de chaque couleur, la méthode doit retourner la couleur avec la plus petite valeur associée (rien à voir avec les valeurs des cartes). Souvenez-vous, nous avons associé des valeurs à nos couleurs: 0 pour vert, 1 pour rouge, 2 pour bleu et 3 pour jaune.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public ColorEnum GetBestColor() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("7", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorBlue) };
Console.WriteLine(player.GetBestColor()); // Affiche ColorRed

Player player2 = new Player("Bob");
player2.Hand = new Card[] { new SpecialCard("PickTwo", ColorEnum.ColorRed), new BasicCard("7", ColorEnum.ColorBlue), new BasicCard("8", ColorEnum.ColorBlue) };
Console.WriteLine(player2.GetBestColor()); // Affiche ColorBlue`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="GetCardsByColor" color={"fundamentals"}>
                <P>La classe <Code>Player</Code> doit avoir une méthode <Code>GetCardsByColor</Code> qui retourne un tableau de listes de cartes. Chaque liste de cartes représente les cartes d'une couleur.</P>
                <P>Les listes doivent être ordonnées par leur valeur (ColorEnum). Le tableau doit être de taille 5 car il y a 4 couleurs et une liste pour les cartes joker.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public List<Card>[] GetCardsByColor() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("7", ColorEnum.ColorRed), new BasicCard("2", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorBlue), new JokerCard(4) };
List<Card>[] cardsByColor = player.GetCardsByColor();
Console.WriteLine(cardsByColor[(int)ColorEnum.ColorRed].Count); // Affiche 2
Console.WriteLine(cardsByColor[(int)ColorEnum.ColorBlue].Count); // Affiche 1
Console.WriteLine(cardsByColor[(int)ColorEnum.ColorGreen].Count); // Affiche 0
Console.WriteLine(cardsByColor[(int)ColorEnum.ColorYellow].Count); // Affiche 0
Console.WriteLine(cardsByColor[4].Count); // Affiche 1`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
        {/*  SELECTION SORT  */}
        {/*  public int GetMaxIndexCard(int start)  */}
        {/*  public void SortCardsWithSameColor(List<Card> cards)  */}
            <Toggle title="Selection Sort" color={"fundamentals"}>
                <P>Ici nous allons implémenter un algorithme de tri par sélection pour trier les cartes d'une couleur donnée dans l'ordre décroissant.</P>
                <div className="my-4"/>
                <P>La classe <Code>Player</Code> doit avoir une méthode <Code>GetMaxIndexCard</Code> qui retourne l'index de la carte de valeur maximale dans la liste <Code>cards</Code> à partir de l'index <Code>start</Code>.</P>
                <div className="my-4"/>
                <P>La classe <Code>Player</Code> doit aussi avoir une méthode <Code>SortCardsWithSameColor</Code> qui trie les cartes de la liste <Code>cards</Code> par ordre décroissant de valeur.</P>
                <HelpMessage>
                    <P>Parce que les valeurs des cartes sont des <Code>string</Code> (et qu'elles peuvent être des chiffres ou des mots), vous devez utiliser la méthode <Code>String.Compare</Code> pour comparer les valeurs des cartes.</P>
                    <P>La méthode <Code>String.Compare</Code> retourne un entier négatif si l'objet est inférieur à l'objet passé en paramètre, 0 si les deux objets sont égaux et un entier positif si l'objet est supérieur à l'objet passé en paramètre.</P>
                    <P>Nous choisirons la <Code>StringComparison.Ordinal</Code> pour comparer les valeurs des cartes.</P>
                    <div className="my-4"/>
                    <P>Par exemple:</P>
                    <CodeBlock language="language-csharp">
                        {`String.Compare("7", "Reverse", StringComparison.Ordinal); // Retourne un entier négatif car "7" est inférieur à "Reverse"
String.Compare("7", "7", StringComparison.Ordinal); // Retourne 0 car "7" est égal à "7"
String.Compare("Reverse", "7", StringComparison.Ordinal); // Retourne un entier positif car "Reverse" est supérieur à "7"`}
                    </CodeBlock>
                </HelpMessage>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public int GetMaxIndexCard(List<Card> cards, int start) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
List<Card> cards = new List<Card> { new BasicCard("7", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorRed), new BasicCard("2", ColorEnum.ColorRed) };
Console.WriteLine(player.GetMaxIndexCard(cards, 0)); // Affiche 1
Console.WriteLine(player.GetMaxIndexCard(cards, 2)); // Affiche 2`}
                    </CodeBlock>
                </TestMessage>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void SortCardsWithSameColor(List<Card> cards) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
List<Card> cards = new List<Card> { new BasicCard("7", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorRed), new BasicCard("2", ColorEnum.ColorRed) };
player.SortCardsWithSameColor(cards);
Console.WriteLine(cards[0].GetCardValue()); // Affiche "Reverse"
Console.WriteLine(cards[1].GetCardValue()); // Affiche "7"
Console.WriteLine(cards[2].GetCardValue()); // Affiche "2"`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>

            <Toggle title="SortHand" color={"fundamentals"}>
                <P>La classe <Code>Player</Code> doit avoir une méthode <Code>SortHand</Code> qui trie la main du joueur par couleur et par valeur décroissante.</P>
                <div className="my-4"/>
                <P>Vous devez utiliser la méthode <Code>GetCardsByColor</Code> et <Code>SortCardsWithSameColor</Code> pour trier les cartes par couleur et par valeur.</P>
                <div className="my-4"/>
                <P>Vous devez ensuite reconstruire la main du joueur en concaténant les listes afin de créer un nouveau tableau.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void SortHand() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`Player player = new Player("Alice");
player.Hand = new Card[] { new BasicCard("7", ColorEnum.ColorRed), new SpecialCard("Reverse", ColorEnum.ColorBlue), new BasicCard("2", ColorEnum.ColorRed) };
player.SortHand();
Console.WriteLine(player.Hand[0].GetCardValue()); // Affiche "7"
Console.WriteLine(player.Hand[1].GetCardValue()); // Affiche "2"
Console.WriteLine(player.Hand[2].GetCardValue()); // Affiche "Reverse"`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function GamePart()
{
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl"><Code>GameManager.cs</Code></h3>
            <Toggle title="Propriétés" color={"fundamentals"}>
                <P>Ici, nous allons définir une classe <Code>Game</Code> qui représente une partie de Uno.</P>
                <div className="my-4"/>
                <P><u>La classe <Code>GameManager</Code> doit avoir les propriétés suivantes :</u></P>
                <UL>
                    <li>Une propriété <b>publique</b> <Code>Players</Code> de type <Code>{`Queue<Player>`}</Code> qui représente les joueurs de la partie.</li>
                    <li>Une propriété <b>publique</b> <Code>Deck</Code> de type <Code>{`List<Card>`}</Code> qui représente le paquet de cartes de la partie.</li>
                    <li>Une propriété <b>publique</b> <Code>DiscardPile</Code> de type <Code>{`Stack<Card>`}</Code> qui représente la pile de défausse de la partie.</li>
                </UL>
                <P>Chacune des propriétés doit avoir un getter public et setter privé, à l'exception de <Code>Deck</Code> qui doit avoir un getter public et un setter public.</P>
            </Toggle>
                
                {/* public GameManager() */}
            <Toggle title="Constructeur" color={"fundamentals"}>
                <P>La classe <Code>GameManager</Code> doit avoir un constructeur qui initialise les propriétés <Code>Players</Code>, <Code>Deck</Code> et <Code>DiscardPile</Code>.</P>
                <div className="my-4"/>
                <P>Les joueurs doivent être ajoutés à la file dans l'ordre de leur création.</P>
                <P>Le paquet de cartes doit être initialisé vide.</P>
                <P>La pile de défausse doit être vide à la création.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public GameManager() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`GameManager game = new GameManager();
Console.WriteLine(game.Players.Count); // Affiche 0
Console.WriteLine(game.Deck.Count); // Affiche 0
Console.WriteLine(game.DiscardPile.Count); // Affiche 0`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="AddPlayer" color={"fundamentals"}>
                <P>La classe <Code>GameManager</Code> doit avoir une méthode <Code>AddPlayer</Code> qui ajoute un joueur à la partie.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void AddPlayer(Player player) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`GameManager game = new GameManager();
Player player = new Player("Alice");
Player player2 = new Player("Bob");
game.AddPlayer(player);
game.AddPlayer(player2);
Console.WriteLine(game.Players.Count); // Affiche 2
Console.WriteLine(game.Players.Peek().Name); // Affiche "Alice"
game.Players.Dequeue();
Console.WriteLine(game.Players.Peek().Name); // Affiche "Bob"`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
        {/* public void AddPlayers(Player[] players)
    {
        foreach (var player in players)
        {
            Players.Enqueue(player);
        }
    }
*/}
            <Toggle title="AddPlayers" color={"fundamentals"}>
                <P>La classe <Code>GameManager</Code> doit avoir une méthode <Code>AddPlayers</Code> qui ajoute plusieurs joueurs à la partie.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void AddPlayers(Player[] players) { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`GameManager game = new GameManager();
Player player = new Player("Alice");
Player player2 = new Player("Bob");
game.AddPlayers(new Player[] { player, player2 });
Console.WriteLine(game.Players.Count); // Affiche 2
Console.WriteLine(game.Players.Peek().Name); // Affiche "Alice"
game.Players.Dequeue();
Console.WriteLine(game.Players.Peek().Name); // Affiche "Bob"`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
            
            <Toggle title="CreateDeck" color={"fundamentals"}>
                <P>La classe <Code>GameManager</Code> doit avoir une méthode <Code>CreateDeck</Code> qui initialise le paquet de cartes de la partie.</P>
                <div className="my-4"/>
                <P>Le paquet de cartes doit contenir deux exemplaires de toutes les cartes de Uno (4 couleurs de 0 à 9, les cartes spéciales et les jokers).</P>
                <PrototypeMessage>
                    <CodeBlock language="language-csharp">
                        {`public void CreateDeck() { }`}
                    </CodeBlock>
                </PrototypeMessage>
                
                <TestMessage>
                    <CodeBlock language="language-csharp">
                        {`GameManager game = new GameManager();
game.CreateDeck();
Console.WriteLine(game.Deck.Count); // Affiche 110`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

export default FundamentalsSection;

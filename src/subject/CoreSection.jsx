import React from "react";
import Toggle from "../components/./Toggle.jsx";
import P from "../components/P.jsx";
import {
    AllowedMessage,
    ForbiddenMessage,
    HelpMessage,
    HistoryMessage,
    TestMessage, WarningMessage
} from "../components/HighlightedMessage.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import SubjectNav from "../components/SubjectNav.jsx";
import Course1 from "../courses/Course1.jsx";
import Course2 from "../courses/Course2.jsx";
import {Warning} from "postcss";
import A from "../components/A.jsx";

function CoreSection() {
  return (
      <>
          <section className="w-full px-16 py-8">
              <h2 className="text-6xl font-bold">Core Section</h2>
              <Part1/>
              <Part2/>
          </section>
          {/*<SubjectNav currentIndex={1}/>*/}
      </>
  );
}

function Part1() {
    return (
        <Toggle title="Part 1: First Parchment" color="core">
            <HistoryMessage>
                <P>In the chest that Papa Smurf handed you, there are far too many scrolls... But don't get discouraged! The Smurfs need you! So you decide to take the first scroll that comes to hand and start from there. It even seems to be older and more patched up than the others.</P>
                <div className="h-4"/>
                <P>The scroll is written in a strange language, but you manage to decipher the first lines:</P>
                <div className="h-4"/>
                <CodeBlock>
                    {`Query Syntax
How to Become a Skilled Smurf-Coder?`}
                </CodeBlock>
                <div className="h-4"/>
                <P>The scroll seems to be talking about query syntax. You wonder what that could possibly mean...</P>
                <div className="h-4"/>
                <P>In any case, you are determined to help the Smurfs, so you set out to understand what this means!</P>
                <div className="flex w-full items-center justify-center">
                    <img src="/parchment1.png" alt="parchment" className="text-center"/>
                </div>
            </HistoryMessage>
            <div className="h-4"/>
            <P>Here you learn that LINQ can come in two different forms. The first is the query syntax that you will have to use to solve this exercise.</P>
            <div className="h-4"/>
            <P>If you're not comfortable with queries, don't hesitate to consolidate your knowledge by clicking <a className="hover:underline text-blue-600" href="https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/introduction-to-linq-queries" target="_blank">here</a>.</P>
            <div className="h-4"/>

            <ForbiddenMessage>
                <P>Be careful, you are not allowed to use <code>System.Linq</code> in this part. You will have to use only the query syntax.</P>
            </ForbiddenMessage>

            <WarningMessage>
                <P>I know this tutorial can be resolve without using LINQ. But you have no choice to use them, it may be difficult for now but in the future, you will find it very useful.</P>
            </WarningMessage>

            <div className="h-4"/>
            <span className="text-3xl text-red-600">FirstParchment.cs</span>
            <CoreExo1/>
            <CoreExo2/>
            <CoreExo3/>
            <CoreExo4/>
        </Toggle>
    );
}

function CoreExo1() {
    return (
        <Toggle title="GetFood" color="core">
            <HistoryMessage>
                <P>You have several boxes with different foods inside. However, small bugs have crept into the boxes, threatening to eat all the food present. Your goal is to use the freshly learned formulas to retrieve only the food and put it in other boxes.</P>
            </HistoryMessage>

            <P>Create the function <code>GetFood</code>, using a query, which takes a box filled with food (<code>{"string[]"}</code>), a bug (<code>string</code>) as parameters and returns a bag
                (<code>{"IEnumerable<string>"}</code>) of foods without any occurrence of <code>bug</code>.</P>
            <CodeBlock language="language-csharp">
                {`public static IEnumerable<string> GetFood(string[] box, string bug)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
                    {`string[] box1 = { "apple", "worm", "banana", "worm", "carrot", "pear" };
string[] box2 = { "apple", "banana", "carrot" };
string[] box3 = { "worm", "worm" };

Tools.PrintTab(FirstParchment.GetFood(box1, "worm")); // { apple, banana, carrot, pear }
Tools.PrintTab(FirstParchment.GetFood(box2, "worm")); // { apple, banana, carrot }
Tools.PrintTab(FirstParchment.GetFood(box3, "worm")); // { }`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function CoreExo2() {
    return (
        <Toggle title="GetDescending" color="core">
            <HistoryMessage>
                <P>The Smurfs have now decided to do a bit of sorting in their boxes, help them.</P>
            </HistoryMessage>
            <P>Create the function <code>GetDescending</code>, using a query, which takes a box of food (<code>{"string[]"}</code>) as a parameter and returns a bag of food sorted in descending order (<code>{"IEnumerable<string>"}</code>).</P>
            <CodeBlock language="language-csharp">
                {`public static IEnumerable<string> GetDescending(string[] box)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
                    {`string[] box4 = { "apple", "apricot", "ambarella", "amla", "avocado" };

Tools.PrintIEnumerable(FirstParchment.GetDescending(box4)); // { avocado, apricot, apple, amla, ambarella }
Tools.PrintIEnumerable(FirstParchment.GetDescending(FirstParchment.GetFood(box1, "worm").ToArray())); // { pear, carrot, banana, apple }
Tools.PrintIEnumerable(FirstParchment.GetDescending(FirstParchment.GetFood(box3, "worm").ToArray())); // { }`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>Try to use the <code>orderby</code> keyword.</P>
            </HelpMessage>
        </Toggle>
    );
}

function CoreExo3() {
    return (
        <Toggle title="GetWormPercentage" color="core">
            <HistoryMessage>
                <P>The Smurfs have decided to find out which boxes have the most worms inside. They want to try to discover which ones are the most affected in order to be able to treat them as a priority.</P>
            </HistoryMessage>
            <P>Create the function <code>GetWormPercentage</code> which takes a box of food (<code>{"string[]"}</code>) as a parameter and returns the percentage of worms in the box (<code>{"double"}</code>). The result must be rounded down.</P>
            <CodeBlock language="language-csharp">
                {`public static double GetWormPercentage(string[] box)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
                    {`string[] box5 = {  };

Console.WriteLine(FirstParchment.GetWormPercentage(box1)); // 33.333333333333329
Console.WriteLine(FirstParchment.GetWormPercentage(box2)); // 0
Console.WriteLine(FirstParchment.GetWormPercentage(box3)); // 100
Console.WriteLine(FirstParchment.GetWormPercentage(box5)); // ArgumentException: The box is empty.`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>Try to use the <code>Count</code> method.</P>
            </HelpMessage>
        </Toggle>
    );
}

function CoreExo4() {
    return (
        <Toggle title="GetFromCategoryOnly" color="core">
            <HistoryMessage>
                <P>The Smurfs have decided to sort the boxes by category. They therefore wish to retrieve only the items from a given category.</P>
            </HistoryMessage>
            <P>Create the function <code>GetFromCategoryOnly</code> which takes a box of food (<code>{"string[]"}</code>) and a food category (<code>{"string[]"}</code>) as parameters and returns a box of food (<code>{"string[]"}</code>) belonging to the given category.</P>
            <CodeBlock language="language-csharp">
                {`public static string[] GetFromCategoryOnly(string[] box1, string[] category)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
                    {`string[] fruitCategory = { "apple", "banana", "pear" };
string[] vegetableCategory = { "carrot", "cucumber", "potato" };
string[] nutCategory = { "almond", "cashew", "walnut" };

Tools.PrintTab(FirstParchment.GetFromCategoryOnly(box1, fruitCategory)); // { apple, banana, pear }
Tools.PrintTab(FirstParchment.GetFromCategoryOnly(box1, vegetableCategory)); // { carrot }
Tools.PrintTab(FirstParchment.GetFromCategoryOnly(box1, nutCategory)); // { }`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>Try to use the <code>join</code> keyword.</P>
            </HelpMessage>
        </Toggle>
    );
}

//----------------------------------------------------------

function Part2() {
    return (
        <Toggle title="Part 2: We smurf-divide the tasks" color="core">
            <HistoryMessage>
                <P>At the end of the first parchment, you found another parchment. This one seems to be newer and in
                    better condition. You unroll it and read the first lines:</P>
                <div className="h-4"/>
                <CodeBlock>
                    {`Method Syntax
How to Become an even better Skilled Smurf-Coder?`}
                </CodeBlock>
                <div className="h-4"/>
                <P>You are so excited to learn new formulas! You get started right away!</P>
            </HistoryMessage>
            <P>From now on you will focus on the Method Syntax, although not favored by Microsoft who will prefer the
                Query Method close to SQL, it is very practical. If you still have some gaps on the Method Syntax, do
                not hesitate to read the course created especially for you <a className="hover:underline text-blue-600" href="https://www.tutorialsteacher.com/linq/linq-method-syntax"
                    target="_blank">here</a>!</P>
            <div className="h-2"/>

            <AllowedMessage>
                <P>For this part, you are allowed and <span className="font-bold">required to use</span> <code>System.Linq</code>.</P>
            </AllowedMessage>
            <div className="h-2"/>

            <ForbiddenMessage>
                <P>Be careful, in this part, you must answer the questions with only one instruction/line. You are not
                    allowed to use <code>System.Linq</code>.</P>
            </ForbiddenMessage>
            <div className="h-8"/>
            <span className="text-3xl text-red-600">Smurf.cs</span>
            <div className="h-4"/>
            <HistoryMessage>
                <P>The Smurfs have decided to divide the tasks to be more efficient. They have therefore decided to
                    create groups in order to facilitate the distribution of tasks. The Great Smurf is in charge of
                    checking that the composition of the groups meets certain criteria. He therefore needs your help and
                    your new magical powers to verify that the groups are well formed.</P>
            </HistoryMessage>
            <Annexe1/>
            <CoreExo5/>
            <CoreExo6/>
            <CoreExo7/>
            <CoreExo8/>
            <CoreExo9/>
            <CoreExo10/>
        </Toggle>
    );
}

function Annexe1() {
    return (
        <Toggle title="Smurf Class" color="core">
            <P>You can copy-paste that class in <code>Smurf.cs</code></P>
            <div className="h-4"/>
            <P>
                Each Smurf is represented by three properties:
                <ul className="list-disc pl-8">
                    <li><code>Name</code> : the Smurf's name</li>
                    <li><code>Job</code> : the Smurf's job</li>
                    <li><code>Rank</code> : the Smurf's rank</li>
                    <li><code>Age</code> : the Smurf's age</li>
                </ul>
            </P>
            <div className="h-4"/>
            <P>The <code>_ranks</code> list allows defining a hierarchical order among the different ranks, which could be useful in one of your next functions :).</P>
            <CodeBlock language="language-csharp">
                {`public class Smurf
{
    public string Name { get; set; }
    public string Job { get; set; }
    public string Rank { get; set; }
    public int Age { get; set; }
    
    private static readonly List<string> _ranks = new List<string> { "Captain", "Deputy Captain", "Worker" };

    public Smurf(string name,string job, string rank, int age)
    {
        if (!_ranks.Contains(rank))
            throw new ArgumentException("Invalid rank");
        Name = name;
        Job = job;
        Rank = rank;
        Age = age;
    }
}`}
            </CodeBlock>

            <TestMessage>
                <P>These lists will be useful to test the rest of the functions.</P>
                <CodeBlock language="language-csharp">
{`List<Smurf> smurfsList1 = new List<Smurf>
{
    new Smurf("Poet Smurf", "Scribe", "Worker", 37),
    new Smurf("Hefty Smurf", "Farmer", "Worker", 68),
    new Smurf("Doctor Smurf", "Cook", "Deputy Captain", 42),
    new Smurf("Baker Smurf", "Cook", "Worker", 18),
    new Smurf("Brainy Smurf", "Scribe", "Worker", 4),
    new Smurf("Grouchy Smurf", "Miner", "Worker", 33),
    new Smurf("Vanity Smurf", "Builder", "Worker", 76),
    new Smurf("Smurfette", "Cook", "Captain", 24),
    new Smurf("Clumsy Smurf", "Builder", "Worker", 26),
    new Smurf("Handy Smurf", "Builder", "Worker", 42),
    new Smurf("Dreamy Smurf", "Cook", "Worker", 26),
    new Smurf("Fisher Smurf", "Harvester", "Worker", 48),
    new Smurf("Tailor Smurf", "Scribe", "Worker", 29),
    new Smurf("Grandpa Smurf", "Miner", "Worker", 29),
    new Smurf("Farmer Smurf", "Farmer", "Worker", 101),
    new Smurf("Energetic Smurf", "Builder", "Worker", 74),
    new Smurf("Greedy Smurf", "Harvester", "Worker", 19),
    new Smurf("Jokey Smurf", "Scribe", "Worker", 122),
    new Smurf("Harmony Smurf", "Scribe", "Worker", 19),
    new Smurf("Inventor Smurf", "Scribe", "Worker", 8),
    new Smurf("Nimble Smurf", "Miner", "Worker", 46),
    new Smurf("Brave Smurf", "Farmer", "Worker", 54)
};
    
List<Smurf> smurfsList2 = new List<Smurf>
{
    new Smurf("Adventure Smurf", "Scribe", "Worker", 5),
    new Smurf("Brave Smurf", "Farmer", "Worker", 70),
    new Smurf("Energetic Smurf", "Cook", "Deputy Captain", 30),
    new Smurf("Friendly Smurf", "Cook", "Worker", 25),
    new Smurf("Curious Smurf", "Scribe", "Worker", 40),
    new Smurf("Dancer Smurf", "Miner", "Worker", 20),
    new Smurf("Jolly Smurf", "Builder", "Worker", 78),
    new Smurf("Happy Smurf", "Cook", "Captain", 42),
    new Smurf("Inventor Smurf", "Builder", "Worker", 67),
    new Smurf("Nimble Smurf", "Builder", "Worker", 43),
    new Smurf("Quick Smurf", "Cook", "Worker", 27),
    new Smurf("Radiant Smurf", "Harvester", "Worker", 52),
    new Smurf("Kind Smurf", "Scribe", "Worker", 31),
    new Smurf("Peaceful Smurf", "Harvester", "Worker", 29),
    new Smurf("Mighty Smurf", "Farmer", "Worker", 105),
    new Smurf("Silly Smurf", "Builder", "Worker", 70),
    new Smurf("Thoughtful Smurf", "Hunter", "Worker", 21),
    new Smurf("Valiant Smurf", "Harvester", "Worker", 61),
    new Smurf("Wise Smurf", "Scribe", "Worker", 124),
    new Smurf("Lucky Smurf", "Scribe", "Worker", 17),
    new Smurf("Optimistic Smurf", "Scribe", "Worker", 10),
    new Smurf("Unique Smurf", "Scribe", "Worker", 87),
    new Smurf("Bashful Smurf", "Harvester", "Worker", 44),
    new Smurf("Radiant Smurf", "Farmer", "Worker", 56)
};`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function CoreExo5() {
    return(
        <Toggle title="GetCaptainSmurf" color="core">
            <HistoryMessage>
                <P>The Big Smurf want to ensure that there is at least one Captain in each team, help him!</P>
            </HistoryMessage>
            <P>Create the function <code>GetCaptainSmurf</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) as a parameter and returns the first captain Smurf in the List (<code>Smurf</code>).</P>
            <CodeBlock language="language-csharp">
{`public static Smurf? GetCaptainSmurf(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Console.WriteLine(Smurf.GetCaptainSmurf(smurfsList1)?.Name); // Smurfette
Console.WriteLine(Smurf.GetCaptainSmurf(smurfsList2)?.Name); // Happy Smurf`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.firstordefault?view=net-8.0"}>FirstOrDefault</A> function :).</P>
            </HelpMessage>
        </Toggle>
    )
}

function CoreExo6() {
    return (
        <Toggle title="GetThreeYoungest" color="core">
            <HistoryMessage>
                <P>When it comes to carrying heavy loads or performing difficult tasks, it will be the responsibility of the younger ones. It would be a shame to hurt the backs of the older ones. Teach Papa Smurf a magic formula to find the three youngest members of a group as quickly as possible!</P>
            </HistoryMessage>

            <P>Create the function <code>GetThreeYoungest</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) as a parameter and returns the three youngest Smurfs in the List (<code>{"List<Smurf>"}</code>).</P>

            <CodeBlock language="language-csharp">
{`public static List<Smurf> GetThreeYoungest(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintIEnumerable(Smurf.GetThreeYoungest(smurfsList1).Select(s => s.Name)); // { Brainy Smurf, Inventor Smurf, Baker Smurf }
Tools.PrintIEnumerable(Smurf.GetThreeYoungest(smurfsList2).Select(s => s.Name)); // { Adventure Smurf, Optimistic Smurf, Lucky Smurf }`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>You may learn to use the <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.where?view=net-8.0"}>Where</A> function.</P>
            </HelpMessage>
        </Toggle>
    );
}

function CoreExo7() {
    return (
        <Toggle title="FilterByJob" color="core">
            <HistoryMessage>
                <P>When the group will have to do specific tasks, we have to spot the smurfs with the right job to handle it.</P>
            </HistoryMessage>
            <P>Create the function <code>FilterByJob</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) and a job (<code>string</code>) as parameters and returns a list of Smurfs (<code>{"List<Smurf>"}</code>) with the given job.</P>
            <CodeBlock language="language-csharp">
{`public static List<Smurf> FilterByJob(List<Smurf> smurfs, string job)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintIEnumerable(Smurf.FilterByJob(smurfsList1, "Cook").Select(s => s.Name)); // { Doctor Smurf, Baker Smurf, Smurfette, Dreamy Smurf }
Tools.PrintIEnumerable(Smurf.FilterByJob(smurfsList1, "Farmer").Select(s => s.Name)); // { Hefty Smurf, Farmer Smurf, Brave Smurf }
Tools.PrintIEnumerable(Smurf.FilterByJob(smurfsList2, "Cook").Select(s => s.Name)); // { Energetic Smurf, Friendly Smurf, Happy Smurf, Quick Smurf }
Tools.PrintIEnumerable(Smurf.FilterByJob(smurfsList2, "Scribe").Select(s => s.Name)); // { Adventure Smurf, Curious Smurf, Kind Smurf, Lucky Smurf, Optimistic Smurf, Unique Smurf }`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function CoreExo8() {
    return (
        <Toggle title="GetRankAverageAge" color="core">
            <HistoryMessage>
                <P>Papa Smurf want to find a link beetween rank and experience due to age. Help him!</P>
            </HistoryMessage>
            <P>Create the function <code>GetRankAverageAge</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) and a rank (<code>string</code>) as parameters and returns the average age of the Smurfs with the given rank (<code>double</code>). The result must be rounded to the nearest tenth.</P>
            <CodeBlock language="language-csharp">
{`public static double GetRankAverageAge(List<Smurf> smurfs, string rank)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
{`Console.WriteLine(Smurf.GetRankAverageAge(smurfsList1, "Worker")); // 44
Console.WriteLine(Smurf.GetRankAverageAge(smurfsList1, "Captain")); // 24
Console.WriteLine(Smurf.GetRankAverageAge(smurfsList2, "Worker")); // 49.2
Console.WriteLine(Smurf.GetRankAverageAge(smurfsList2, "Deputy Captain")); // 30`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>The <code>smurfs</code> list contains at least one smurf with each rank.</P>
            </HelpMessage>
            <HelpMessage>
                <P>You may learn to use the <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.average?view=net-8.0"}>Average</A> function.</P>
            </HelpMessage>
        </Toggle>
    );
}

function CoreExo9() {
    return (

        <Toggle title="OlderThan" color="core">
            <HistoryMessage>
                <P>Some tasks can't be done by young Smurf, so we must be able to quickly get all the smurfs above a certain age.</P>
            </HistoryMessage>
            <P>Create the function <code>OlderThan</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) and an age (<code>int</code>) as parameters and returns a list of Smurfs (<code>{"List<Smurf>"}</code>) older than the given age.</P>
            <CodeBlock language="language-csharp">
{`public static List<Smurf> OlderThan(List<Smurf> smurfs, int age)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintIEnumerable(Smurf.OlderThan(smurfsList1, 38).Select(s => s.Name)); // { Hefty Smurf, Doctor Smurf, Vanity Smurf, Handy Smurf, Fisher Smurf, Farmer Smurf, Energetic Smurf, Jokey Smurf, Nimble Smurf, Brave Smurf }
Tools.PrintIEnumerable(Smurf.OlderThan(smurfsList2, 50).Select(s => s.Name)); // { Brave Smurf, Jolly Smurf, Inventor Smurf, Radiant Smurf, Mighty Smurf, Silly Smurf, Valiant Smurf, Wise Smurf, Radiant Smurf }`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function CoreExo10() {
    return (
        <Toggle title="DifferentJobs" color="core">
            <HistoryMessage>
                <P>Each Smurf has a different job, it is important to know how many different jobs are present in a group and to be able to get one representative of each.</P>
            </HistoryMessage>
            <P>Create the function <code>DifferentJobs</code> which takes a list of Smurfs (<code>{"List<Smurf>"}</code>) as a parameter and returns the number of different jobs in the list (<code>int</code>).</P>
            <CodeBlock language="language-csharp">
{`public static int DifferentJobs(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Console.WriteLine(Smurf.DifferentJobs(smurfsList1)); // 6
Console.WriteLine(Smurf.DifferentJobs(smurfsList2)); // 7`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.distinct?view=net-8.0"}>Distinct</A>, <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.count?view=net-8.0"}>Count</A>  functions.</P>
            </HelpMessage>
        </Toggle>
    );
}

export default CoreSection;
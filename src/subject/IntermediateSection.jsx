import React from "react";
import Toggle from "../components/./Toggle.jsx";
import SubjectNav from "../components/SubjectNav.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {HelpMessage, HistoryMessage, TestMessage} from "../components/HighlightedMessage.jsx";
import P from "../components/P.jsx";
import A from "../components/A.jsx";

function IntermediateSection() {
  return (
      <>
          <section className="w-full px-16 py-8">
              <h2 className="text-6xl font-bold">Intermediate Section</h2>
              <Part3/>
          </section>
          {/*<SubjectNav currentIndex={2}/>*/}
      </>
  );
}

function Part3() {
  return (
      <Toggle title="Part 3: We continue to organize our teams!" color="intermediate">
          <HistoryMessage>
              <P>Let's continue to help Papa Smurf to organize the teams.</P>
          </HistoryMessage>
          <div className="h-4"/>
          <span className="text-3xl text-red-600">Smurf.cs</span>
          <IntermediateExo1/>
          <IntermediateExo2/>
          <IntermediateExo3/>
          <IntermediateExo4/>
          <IntermediateExo5/>
      </Toggle>
  );
}

function IntermediateExo1() {
    return (
        <Toggle title="AgePerRankDict" color="intermediate">
            <HistoryMessage>
                <P>
                    Previously, we created a function that returns the average age of a group of Smurfs. Now, we want to know the average age of all the ranks at one time.
                </P>
            </HistoryMessage>
            <P>
                Create a function that takes a list of Smurfs and returns a dictionary where the key is the rank and the value is the average age of the Smurfs with this rank.
            </P>
          <CodeBlock language="language-csharp">
{`public static Dictionary<string, int> AgePerRankDict(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
          </CodeBlock>

          <TestMessage>
              <CodeBlock language="language-csharp">
{`Dictionary<string, double> agePerRankDict1 = Smurf.AgePerRankDict(smurfsList1);
Dictionary<string, double> agePerRankDict2 = Smurf.AgePerRankDict(smurfsList2);

Tools.PrintDictionary(agePerRankDict1);
// {
//     Worker: 43,95
//     Deputy Captain: 42
//     Captain: 24
// }
Tools.PrintDictionary(agePerRankDict2);
// {
//     Worker: 49,18181818181818
//     Deputy Captain: 30
//     Captain: 42  
// }`}
              </CodeBlock>
          </TestMessage>
            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.groupby?view=net-8.0"}>GroupBy</A>, <A href={"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.todictionary?view=net-8.0"}>ToDictionary</A>  functions.</P>
            </HelpMessage>
      </Toggle>
  );
}

function IntermediateExo2() {
    return (
        <Toggle title="UniqueJobs" color="intermediate">
            <HistoryMessage>
                <P>
                    According to Papa Smurf, there is nothing to gain in having in a group more than one Smurf with the same job.
                </P>
            </HistoryMessage>
            <P>
                Create a function that takes a list of Smurfs and returns a list of Smurfs where each job is unique.
            </P>
            <CodeBlock language="language-csharp">
{`public static List<Smurf> UniqueJobs(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintList(Smurf.UniqueJobs(smurfsList1)); // { }
Tools.PrintList(Smurf.UniqueJobs(smurfsList2)); // { Dancer Smurf, Thoughtful Smurf }`}
                </CodeBlock>
            </TestMessage>

            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.selectmany?view=net-8.0"}>SelectMany</A> function.</P>
            </HelpMessage>
        </Toggle>
    );
}

function IntermediateExo3() {
    return (
        <Toggle title="SortSmurf" color="intermediate">
            <HistoryMessage>
                <P>
                    Papa Smurf wants to be able to sort Smurf properly. Help him!
                </P>
            </HistoryMessage>
            <P>
                Create a function that takes a list of Smurfs and returns a list of Smurfs sorted by ranks, the by age in ascending order.
            </P>
            <CodeBlock language="language-csharp">
{`public static List<Smurf> SortSmurf(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintList(Smurf.SortSmurf(smurfsList1)); 
// {
//      Smurfette,
//      Doctor Smurf,
//      Brainy Smurf,
//      Inventor Smurf,
//      Baker Smurf,
//      Greedy Smurf,
//      Harmony Smurf,
//      Clumsy Smurf,
//      Dreamy Smurf,
//      Tailor Smurf,
//      Grandpa Smurf,
//      Grouchy Smurf,
//      Poet Smurf,
//      Handy Smurf,
//      Nimble Smurf,
//      Fisher Smurf,
//      Brave Smurf,
//      Hefty Smurf,
//      Energetic Smurf,
//      Vanity Smurf,
//      Farmer Smurf,
//      Jokey Smurf
// }`}
                </CodeBlock>
            </TestMessage>
            <HelpMessage>
                <P>You may use the _ranks List to sort by ranks :).</P>
            </HelpMessage>
            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.thenby?view=net-8.0"}>ThenBy</A> function.</P>
            </HelpMessage>
        </Toggle>
    );
}

function IntermediateExo4() {
    return (
        <Toggle title="OldestPerJob" color="intermediate">
            <HistoryMessage>
                <P>
                    Papa Smurf wants to know who is most experimented Smurf in each job. Help him!
                </P>
            </HistoryMessage>
            <P>
                Create a function that takes a list of Smurfs and returns a dictionary where the key is the job and the value is the oldest Smurf with this job.
            </P>
            <CodeBlock language="language-csharp">
{`public static Dictionary<string, Smurf> OldestPerJob(List<Smurf> smurfs)
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Dictionary<string, Smurf> oldestPerJob1 = Smurf.OldestPerJob(smurfsList1);
Dictionary<string, Smurf> oldestPerJob2 = Smurf.OldestPerJob(smurfsList2);

Tools.PrintDictionary(oldestPerJob1);
// {
//      Scribe: Jokey Smurf
//      Farmer: Farmer Smurf
//      Cook: Doctor Smurf
//      Miner: Nimble Smurf
//      Builder: Vanity Smurf
//      Harvester: Fisher Smurf
// }

Tools.PrintDictionary(oldestPerJob2);
// {
//      Scribe: Wise Smurf
//      Farmer: Mighty Smurf
//      Cook: Happy Smurf
//      Miner: Dancer Smurf
//      Builder: Jolly Smurf
//      Harvester: Valiant Smurf
//      Hunter: Thoughtful Smurf
// }`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function IntermediateExo5() {
    return (
        <Toggle title="HasThisJob" color="intermediate">
            <HistoryMessage>
                <P>
                    Papa Smurf wants to know if a group of Smurfs has a specific job. Help him!
                </P>
            </HistoryMessage>
            <P>
                Create a function that takes a list of Smurfs and a job and returns a list of Smurfs where each Smurf has this job.
            </P>
            <CodeBlock language="language-csharp">
{`public static List<Smurf>[] HasThisJob(List<Smurf>[] smurfs, string job) {
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`List<Smurf>[] smurfsArray = {smurfsList1, smurfsList2};
Console.WriteLine(Smurf.HasThisJob(smurfsArray, "Cook").Length); // 2
Console.WriteLine(Smurf.HasThisJob(smurfsArray, "Hunter").Length); // 1
Console.WriteLine(Smurf.HasThisJob(smurfsArray, "Teacher").Length); // 0`}
                </CodeBlock>
            </TestMessage>

            <HelpMessage>
                <P>You may use the <A href={"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.any?view=net-8.0"}>Any</A> and <A href={"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.toarray?view=net-8.0"}>ToArray</A> functions.</P>
            </HelpMessage>
        </Toggle>
    );
}

export default IntermediateSection;
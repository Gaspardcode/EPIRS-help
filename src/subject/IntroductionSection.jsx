import React from "react";
import P from "../components/P";
import Toggle from "../components/./Toggle.jsx";
import CodeBlock from "../components/CodeBlock";
import {HelpMessage, WarningMessage} from "../components/HighlightedMessage.jsx";
import SubjectNav from "../components/SubjectNav.jsx";

function IntroductionSection() {
  return (
      <>
          <section className="w-full px-16 py-8">
              <h2 className="text-6xl font-bold">Introduction</h2>
              <Synopsis/>
              <Architecture/>
              <Tools/>
          </section>
          {/*<SubjectNav currentIndex={0}/>*/}
      </>

  );
}

function Synopsis(){
    return (
        <Toggle title="Synopsis" color="info">
            <P>Ohhhhh! What a Smurf-catastrophe! One of the Smurfs made a huge Smurf-mistake! The predictions of the
                Smurf meteorologist were wrong, and there is only one week left to prepare all the necessary provisions
                for the winter. All the Smurfs are in a panic!!</P>
            <div className="h-4"/>
            <P>Fortunately, Papa Smurf arrives to the rescue with scrolls containing magic formulas that, according to
                legend, would allow amazing feats if mastered.</P>
            <div className="h-4"/>
            <P>However, even the Smurf magician is nowhere to be found, so it’s up to you to help the Smurfs in their
                quest. You are their last hope! Good luck!</P>
            <div className="h-4"/>
            <img className="w-1/4 mx-auto mt-8"
                 src="/smurf-good-luck.png" alt="good luck"/>
        </Toggle>
    )
}

function Architecture() {
    return (
        <Toggle title="Architecture" color="info">
            <P>At the end, your git repo must follow this architecture:</P>
            <CodeBlock langage="">
                {`WinterPreparation-firstname.lastname
├── WinterPreparation
│   ├── FirstParchment.cs
│   ├── Market.cs
│   ├── Program.cs
│   ├── Smurf.cs
│   ├── Tools.cs
│   ├── Transaction.cs
│   └── WinterPreparation.csproj
├── Tests
│   └── Put your tests inside here
├── .gitignore
├── WinterPreparation.sln
└── README`}
            </CodeBlock>

            <HelpMessage>
                <P>You can check your current repository tree with the command below: </P>
                <CodeBlock langage="language-bash">
{`tree . -I 'obj|bin|.idea|.git' -a`}
                </CodeBlock>
            </HelpMessage>
            <WarningMessage>
                <P>Do not forget to check the following requirements before submitting your work:

                You shall obviously replace firstname.lastname with your login.
                The README file is mandatory.
                Remove all personal tests from your code, except those from the Tests folder.
                The given prototypes must be strictly respected.
                    The code MUST compile! Otherwise you will not receive a grade.</P>
            </WarningMessage>
            <WarningMessage>
                <P>In the <code>README</code> file, you can write any and all comments you might have about the practical, your work, or
                more generally about your strengths and weaknesses.
                <span
                    className="font-bold"> An empty <code>README</code> file will be considered as invalid (malus).</span></P>
            </WarningMessage>
        </Toggle>
    )
}

function Tools(){
    return (
        <Toggle title="Tools" color="info">
            <p className="text-3xl text-red-600">Tools.cs</p>
            <div className="h-4"/>
            <P>Here are some tools that you can use to help you in your quest:</P>
            <a
                href="/ressources/Tools.cs"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
            >
                Download
            </a>
        </Toggle>
    )
}

export default IntroductionSection;
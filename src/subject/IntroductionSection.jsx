import React from "react";
import P from "../components/P";
import Toggle from "../components/./Toggle.jsx";
import CodeBlock from "../components/CodeBlock";
import {HelpMessage, WarningMessage} from "../components/HighlightedMessage.jsx";
import SubjectNav from "../components/SubjectNav.jsx";
import UL from "../UL.jsx";

function IntroductionSection() {
  return (
      <>
          <section className="w-full px-16 py-8">
              <h2 className="text-6xl font-bold">Introduction</h2>
              <Consignes/>
              <Architecture/>
          </section>
      </>

  );
}

function Consignes(){
    return (
        <Toggle title="Consignes" color="info">
            <P>Voici un TP de soutien, faisant office d'exam blanc, vous étant proposé pour préparer l'exam.
            <div className="h-4"/>
            <P>Ce Tp est censé pouvoir être réalisé en 3h de temps, cependant aucun stress si vous ne l'avez pas fini, il est légèrement plus long que l'exam.</P>
            <div className="h-4"/>
            <P>Bonnes révisions et n'hésitez pas à poser des questions au besoin, que ce soit sur discord.
        </Toggle>
    )
}

function Architecture() {
    return (
        <Toggle title="Architecture" color="info">
            <P>At the end, your git repo must follow this architecture:</P>
            <CodeBlock langage="">
                {`.
├── .gitignore
├── README
├── UnoAdventure
│        ├── Cards
│        │       ├── BasicCard.cs
│        │       ├── Card.cs
│        │       ├── JokerCard.cs
│        │       └── SpecialCard.cs
│        ├── Enums.cs
│        ├── GameManager.cs
│        ├── Player.cs
│        ├── Program.cs
│        ├── UnoAdventure.csproj
│        └── UnoException.cs
└── UnoAdventure.sln`}
            </CodeBlock>

            <HelpMessage>
                <P>You can check your current repository tree with the command below: </P>
                <CodeBlock langage="language-bash">
{`tree . -I 'obj|bin|.idea|.git' -a`}
                </CodeBlock>
            </HelpMessage>
            <WarningMessage>
                <P>Do not forget to check the following requirements before submitting your work:</P>
                <UL>
                    <li>You shall obviously replace firstname.lastname with your login.</li>
                    <li>The README file is mandatory.</li>
                    <li>The .gitignore file is mandatory.</li>
                    <li>Remove all personal tests from your code, except those from the Tests folder.</li>
                    <li>The given prototypes must be strictly respected.</li>
                    <li>The code MUST compile! Otherwise you will not receive a grade.</li>
                </UL>
            </WarningMessage>
            
            <HelpMessage>
                <P>Here is an example of how to create your project with the proper architecture:</P>
                <CodeBlock langage="language-bash">
{`dotnet new sln --name UnoAdventure
dotnet new console -n UnoAdventure -f net7.0 -lang 'C#'
dotnet sln add UnoAdventure/UnoAdventure.csproj`}
                </CodeBlock>
            </HelpMessage>
        </Toggle>
    )
}

// function Tools(){
//     return (
//         <Toggle title="Tools" color="info">
//             <p className="text-3xl text-red-600">Tools.cs</p>
//             <div className="h-4"/>
//             <P>Here are some tools that you can use to help you in your quest:</P>
//             <a
//                 href="/ressources/Tools.cs"
//                 download
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
//             >
//                 Download
//             </a>
//         </Toggle>
//     )
// }

export default IntroductionSection;

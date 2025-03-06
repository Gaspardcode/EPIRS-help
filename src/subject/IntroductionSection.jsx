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
            <P>Voici un TP de soutien, faisant office d'exam blanc, vous étant proposé pour préparer l'exam.</P>
            <div className="h-4"/>
            <P>Ce Tp est censé pouvoir être réalisé en 3h de temps, cependant aucun stress si vous ne l'avez pas fini, il est légèrement plus long que l'exam.</P>
            <div className="h-4"/>
            <P>Bonnes révisions et n'hésitez pas à poser des questions au besoin, que ce soit sur discord.</P>
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
├── src
│    ├── lcs
│    │      │        
│    │      └── *.rs
│    ├── hashmap
│    │      │        
│    │      └── *.rs
│    └── regex
│           │        
│           └── *.rs
├── test (optionnal)
│    │        
│    └── *.rs
└── Cargo.toml`}
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
                    <li>The test folder is not mandatory, but feel free to add some tests</li>
                </UL>
            </WarningMessage>
        </Toggle>
    )
}
export default IntroductionSection;

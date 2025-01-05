import Nav from "../components/Nav.jsx";
import GitLabLinkButton from "../components/GitLabLinkButton.jsx";

function CorrectionPage() {
    document.title = "Correction | UnoAdventure";
  return (
      <>
          <Nav page="correction"/>
          <section className="w-full p-16">
              <h2 className="text-6xl font-bold">Correction</h2>
              <p className="text-2xl italic text-red-700">This part will be released later.</p>
              {/*<p className="text-2xl italic text-red-700">Ceci est une proposition de correction, ce n'est pas grave si vou n'avez pas exactement le même code.</p>*/}
              <div className="h-4"/>
              {/*<GitLabLinkButton repo="gabriel.dezon/unoadventure"/>*/}
          </section>
      </>
  );
}

export default CorrectionPage;
import Nav from "../components/Nav.jsx";
import Toggle from "../components/Toggle.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

function CorrectionPage() {
    document.title = "Correction | WinterPreparation";
  return (
      <>
          <Nav page="correction"/>
            <section className="w-full p-16">
                <h2 className="text-6xl font-bold">Correction</h2>
                <p className="text-2xl italic text-red-700">This part will be released later.</p>
            </section>
      </>
  );
}

export default CorrectionPage;
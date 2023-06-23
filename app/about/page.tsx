export default function About() {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="flex flex-col gap-y-2 p-8">
          <h1 className="text-7xl leading-tight text-white">
            About the project
          </h1>
          <p className="text-white">In question-answer format</p>
        </div>
      </header>

      <section className="mx-auto mt-6 max-w-2xl px-4 pt-6">
        <h2 className="text-4xl">What is Steez++?</h2>
        <p className="mt-4 text-lg">A blog trying to make web accessability become more accessible knowledge</p>
        <h2 className="mt-6 text-4xl">Why?</h2>
        <p className="mt-4 text-lg">Beacuse a lot of the web is is not inclusive</p>
        <ol>
          <li>Lack of awareness</li>
          <li>Time and cost constraints</li>
          <li>Complexity and technical challenges</li>
          <li>Lack of legal enforemcent</li>
          <li>Design and aesthetic considerations</li>
        </ol>
        <h2 className="mt-6 text-4xl">Where can I learn more?</h2>
        <ul>
          <li>OpenUI</li>
          <li>W3C ARIA APG</li>
        </ul>
        <h2 className="mt-6 text-4xl">Who are you?</h2>
        <p className="mt-4 text-lg">
          I&apos;m Jesse
          <br />
          Follow me on my public platforms:
        </p>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </section >
    </div >
  );
}

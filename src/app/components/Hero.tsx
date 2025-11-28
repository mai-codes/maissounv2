export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-start min-h-screen h-screen px-6"
    >
      <div className="max-w-3xl text-left">
        <p className="text-accent text-lg mb-4">Hi there! My name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4">
          Maissoun Ksara
        </h1>
        <h2 className="text-4xl sm:text-6xl font-light text-muted mb-6">
          I <span className="text-pink-500">❤</span> technology and building things for the web.
        </h2>
        <p className="max-w-xl text-lg text-muted mb-8">
          I’m a software engineer specializing in building full-stack web applications. Currently, I’m building solutions at Wells Fargo.
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="font-display text-7xl md:text-8xl font-semibold tracking-tighter text-accent mb-4">
          404
        </h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          This page seems to have wandered off on its own adventure. Let us help
          you find your way back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 active:scale-[0.97]"
        >
          Back to the story
        </Link>
      </div>
    </section>
  );
}

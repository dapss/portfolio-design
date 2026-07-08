export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Alexandr Olek. All rights reserved.
        </p>

        <p className="text-xs text-text-tertiary">
          Watercolour & Imagination
        </p>
      </div>
    </footer>
  );
}

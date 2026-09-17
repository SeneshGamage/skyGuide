export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium">
          © {new Date().getFullYear()} SkyGuide. All rights reserved. Discover your perfect weather destination.
        </p>
      </div>
    </footer>
  );
}

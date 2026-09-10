export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 Your Name. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js + Cloudflare
        </p>
      </div>
    </footer>
  );
}

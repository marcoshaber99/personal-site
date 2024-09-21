export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="max-w-3xl mx-auto py-8 px-5 md:px-0">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Marco Haber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

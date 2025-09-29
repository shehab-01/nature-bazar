"use client";

import "../../(main)/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen font-inter antialiased">
          <main className="flex-1 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

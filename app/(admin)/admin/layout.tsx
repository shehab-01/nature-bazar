"use client";

import "../../(main)/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

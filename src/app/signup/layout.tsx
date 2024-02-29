export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main id='body' className="h-screen w-full flex flex-col justify-center items-center">
        {children}
      </main>
    );
  }
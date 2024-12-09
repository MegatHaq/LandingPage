export function Badge({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-orange-400 px-4 py-1 rounded-md text-gray-100">
      {children}
    </div>
  );
}

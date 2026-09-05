const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <img
        src={`${basePath}/KS_logo.png`}
        alt="Koscon Studios"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </main>
  );
}
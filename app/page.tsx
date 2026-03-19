import Image from "next/image";
import friendPhoto from "./assets/IMG_0448.jpeg";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 py-10"
      style={{
        background:
          "linear-gradient(90deg, #ff0000, #ff7a00, #ffd500, #00d100, #00c7ff, #2b65ff, #a100ff, #ff00a8, #ff0000)",
        backgroundSize: "400% 400%",
        animation: "rainbow 12s ease-in-out infinite",
      }}
    >
      <div className="w-full max-w-md">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl bg-white/20 shadow-2xl ring-1 ring-white/40 backdrop-blur-md">
          <Image
            src={friendPhoto}
            alt="My friend"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
        </div>
      </div>
      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

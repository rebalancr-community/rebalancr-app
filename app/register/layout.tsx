import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="w-2/5 max-w-lg">{children}</div>
      <div className="w-3/5 h-full">
        <Image
          alt="login background"
          className="object-cover w-full h-full"
          height={800}
          src="/assets/ball-bouncing.jpg"
          width={1600}
        />
      </div>
    </div>
  );
}

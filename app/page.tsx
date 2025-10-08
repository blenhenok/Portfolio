import Image from "next/image";
export default function Home() {
  return (
    <main className="h-full flex items-center justify-center w-full flex-col">
      <div className="max-w-7xl mx-auto text-center flex flex-row space-x-15">
        <div className="max-w-7xl mx-auto text-center flex flex-row">
          <Image src="/icons/b.png" alt="B" width={120} height={120} />
          <Image src="/icons/l.png" alt="L" width={120} height={120} />
          <Image src="/icons/e.png" alt="E" width={120} height={120} />
          <Image src="/icons/n.png" alt="N" width={120} height={120} />
        </div>
        <div className="max-w-7xl mx-auto text-center flex flex-row">
          <Image src="/icons/h.png" alt="H" width={120} height={120} />
          <Image src="/icons/e.png" alt="E" width={120} height={120} />
          <Image src="/icons/n.png" alt="N" width={120} height={120} />
          <Image src="/icons/o.png" alt="O" width={120} height={120} />
          <Image src="/icons/k.png" alt="K" width={120} height={120} />
        </div>
      </div>
      <p className="text-8xl italic">Developer</p>
    </main>
  );
}

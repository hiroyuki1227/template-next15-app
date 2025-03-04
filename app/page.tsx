import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 mt-2">
      <Button className="rounded-full">Hello World</Button>
      <button className="rounded-lg border-2 border-black px-4 py-2">Buy Now</button>
      <ModeToggle />
    </div>
  );
}

import TurnstileWidget from "@/cloudflare/turnstile";
export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <TurnstileWidget />
    </div>
  );
}

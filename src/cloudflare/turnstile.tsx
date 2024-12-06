"use client";
import Turnstile from "react-turnstile";
import { useTurnstileAuth } from "@/query/cloudflare";
function TurnstileWidget() {
  const { mutate } = useTurnstileAuth();
  return (
    <Turnstile
      refreshExpired="auto"
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY ?? ""}
      onVerify={(token) => mutate(token)}
    />
  );
}

export default TurnstileWidget;

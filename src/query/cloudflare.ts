import { useTurnstile } from "react-turnstile";
import { useMutation } from "@tanstack/react-query";
import { cloudflareTurnstileAuth } from "@/server";
export const useTurnstileAuth = () => {
  const turnstile = useTurnstile();

  const mutationKey = ["CLOUDFLARE_TURNSTILE_AUTH"];
  const mutationFn = async (token: string) => cloudflareTurnstileAuth(token);

  return useMutation({
    mutationKey,
    mutationFn,
    onError: () => turnstile.reset(),
  });
};

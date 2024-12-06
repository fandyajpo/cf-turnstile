"use server";
import { headers } from "next/headers";

export const cloudflareTurnstileAuth = async (token: string) => {
  try {
    const header = await headers();
    const url = header.get("x-app-href");
    const response = await fetch(url + "api", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

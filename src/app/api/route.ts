import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const token = body?.token;
    const ip = request.headers.get("x-forwarded-for") ?? "";
    const formData = new FormData();
    formData.append("secret", process.env.CLOUDFLARE_SECRET_KEY ?? "");
    formData.append("response", token);
    formData.append("remoteip", ip);

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });

    const outcome = await result.json();

    if (!result.ok) {
      throw result;
    }

    console.log(outcome);
    if (!outcome.success) {
      return Response.json({ data: "failed" }, { status: 400 });
    }
    return Response.json({ data: "success" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

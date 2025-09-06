import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, telegram } = req.body;

    const form = new FormData();
    if (name) form.append("name", name);
    if (email) form.append("email", email);
    if (telegram) form.append("telegram", telegram);

    const upstream = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE}`,
      {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      }
    );

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok || data?.ok === false) {
      return res
        .status(upstream.status || 422)
        .json({ error: data?.errors ?? "Formspree error" });
    }

    return res.status(200).json({ ok: true, data });
  } catch (e) {
    return res.status(400).json({ error: "Invalid body" });
  }
}

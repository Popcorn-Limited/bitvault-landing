import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const { email, telegram, evmAddress, newsletter } = req.body;

    const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string)

    const { data, error } = await supabase
      .from('Whitelist')
      .insert([
        { email, telegram, evmAddress, newsletter },
      ])
      .select()

    if (error) {
      return res.status(422).json(
        { error: "Supabase error" },
      );
    }

    return res.status(200).json({ ok: true, data });
  } catch {
    return res.status(400).json({ error: "Invalid body" });
  }
}
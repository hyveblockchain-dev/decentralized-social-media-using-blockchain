import type { NextApiRequest, NextApiResponse } from "next";
import { sanityServerClient } from "@/lib/sanity.server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: "Missing wallet address" });
    }

    const doc = {
      _type: "user",
      walletAddress: address,
      createdAt: new Date().toISOString(),
    };

    await sanityServerClient.create(doc);

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Sanity write failed" });
  }
}

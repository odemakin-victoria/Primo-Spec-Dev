// pages/api/account/fetchAccountDetails.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const apiUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
    const username = process.env.NEXT_PUBLIC_ACCESS_USERNAME!;
    const password = process.env.NEXT_PUBLIC_ACCESS_PASSWORD!;

    const credentials = btoa(`${username}:${password}`);

    try {
      const result = await axios.get(apiUrl!, {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${credentials}`,
          "Cache-Control": "no-cache", // Optional: force fresh fetch
        },
        validateStatus: () => true, // 🚨 Allow non-200 responses (like 304)
      });

      // 🧠 Handle 304 manually
      if (result.status === 304) {
        return res.status(200).json({
          message: "Not modified — using cached data",
          fromCache: true,
          data: null,
        });
      }

      // ✅ If 200, send real data
      return res.status(result.status).json(result.data);
    } catch (error) {
      console.error("API route error:", error);

      if (axios.isAxiosError(error)) {
        return res.status(error.response?.status || 500).json({
          message: error.message,
          detail: error.response?.data || null,
        });
      }

      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  if (req.method === "POST") {
    await redis.rpush("messages", req.body.message);
    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const messages = await redis.lrange("messages", 0, -1);
    res.status(200).json(messages);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

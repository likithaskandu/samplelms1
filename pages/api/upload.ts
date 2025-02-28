import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `courses/${Date.now()}-${req.body.filename}`,
      Body: req.body.file,
    };

    try {
      const data = await s3.upload(params).promise();
      res.status(200).json({ url: data.Location });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

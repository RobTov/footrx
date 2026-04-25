import { MailtrapClient } from "mailtrap";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const getEnv = (key) => process.env[key];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = getEnv("MAILTRAP_PASS");
  const senderEmail = getEnv("MAILTRAP_SENDER") || "info@norbwebsite.com";

  console.log("Config - token:", token ? "yes" : "no");
  console.log("Config - sender:", senderEmail);

  if (!token) {
    return res.status(500).json({ error: "Missing MAILTRAP_PASS" });
  }

  try {
    const { to, subject, text, attachment } = req.body;

    const client = new MailtrapClient({ token });

    const attachments = [];
    if (attachment && attachment.base64 && attachment.filename) {
      const base64Data = attachment.base64.replace(/^data:image\/\w+;base64,/, "");
      attachments.push({
        filename: attachment.filename,
        content: base64Data,
      });
    }

    console.log("Sending email to:", to);

    await client.send({
      from: { name: "FOOTRX Contact", email: senderEmail },
      to: [{ email: to }],
      subject: subject,
      text: text,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Email sent successfully");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const getEnv = (key, fallback) => {
  return process.env[key] || fallback;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { to, subject, text, attachment } = req.body;

    const apiToken = getEnv("MAILTRAP_API_TOKEN");
    const senderEmail = getEnv("MAILTRAP_SENDER", "info@norbwebsite.com");

    if (!apiToken) {
      console.error("MAILTRAP_API_TOKEN not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    console.log("Sending via API to:", to, "subject:", subject);

    const attachments = [];
    if (attachment && attachment.base64 && attachment.filename) {
      const base64Data = attachment.base64.replace(/^data:image\/\w+;base64,/, "");
      attachments.push({
        filename: attachment.filename,
        content: base64Data,
        encoding: "base64",
      });
    }

    const response = await fetch("https://api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { name: "FOOTRX Contact", email: senderEmail },
        to: [{ email: to }],
        subject: subject,
        text: text,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Mailtrap API error:", response.status, errorData);
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Sent:", result.result);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
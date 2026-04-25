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

    const host = getEnv("MAILTRAP_HOST", "live.smtp.mailtrap.io");
    const port = parseInt(getEnv("MAILTRAP_PORT", "587"), 10);
    const user = getEnv("MAILTRAP_USER", "api");
    const pass = getEnv("MAILTRAP_PASS");
    const sender = getEnv("MAILTRAP_SENDER", "info@norbwebsite.com");

    if (!pass) {
      console.error("MAILTRAP_PASS not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    console.log("Sending to:", to, "subject:", subject, "from:", sender);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
    });

    await transporter.verify();

    const attachments = [];
    if (attachment && attachment.base64 && attachment.filename) {
      const base64Data = attachment.base64.replace(/^data:image\/\w+;base64,/, "");
      attachments.push({
        filename: attachment.filename,
        content: Buffer.from(base64Data, "base64"),
        encoding: "base64",
      });
    }

    const info = await transporter.sendMail({
      from: sender,
      to,
      subject,
      text,
      attachments,
    });

    console.log("Sent:", info.messageId);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
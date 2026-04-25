import nodemailer from "nodemailer";
import { ENVIRONMENT } from "../environment/environment";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { to, subject, text, attachment } = req.body;

    console.log("Sending to:", to, "subject:", subject);

    const transporter = nodemailer.createTransport({
      host: ENVIRONMENT.MAILTRAP_HOST,
      port: parseInt(ENVIRONMENT.MAILTRAP_PORT, 10),
      secure: false,
      auth: {
        user: ENVIRONMENT.MAILTRAP_USER,
        pass: ENVIRONMENT.MAILTRAP_PASS,
      },
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
      from: ENVIRONMENT.MAILTRAP_SENDER,
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
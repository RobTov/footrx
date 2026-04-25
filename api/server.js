import http from "http";
import { buffer } from "node:stream/consumers";
import nodemailer from "nodemailer";
import { ENVIRONMENT } from "../environment/environment";

const DEST_EMAIL = "tovelrob@proton.me";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const body = await buffer(req);
    const { to = DEST_EMAIL, subject, text, attachment } = JSON.parse(body.toString());

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
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Error:", error.message);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message }));
  }
};

const server = http.createServer(handler);

server.listen(5173, () => {
  console.log("API running on http://localhost:5173");
});
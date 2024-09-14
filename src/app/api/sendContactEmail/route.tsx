import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  try {
    const content = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error: Error | null, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Serverul este pregătit să primească mesajele noastre.");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: content.email,
      to: "andrei.andronachi95@gmail.com",
      subject: "ServiciiConectate: " + content.subject,
      html: `
        <p>Name: ${content.name} </p>
        <p>Email: ${content.email} </p>
        <p>Message: ${content.content} </p>
        `,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err: Error | null, info: string) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

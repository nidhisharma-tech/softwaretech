import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:587,
      service: 'gmail',
      auth: {
        user: 'infosoftwarecareer@gmail.com', // Your email address
        pass: 'iopg nour goqp abwx', // Your email password or app password
      },
    });

    // Define the email options
    const mailOptions = {
      from: body.email, // Sender's email address
      to: 'infosoftwarecareer@gmail.com', // Recipient's email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

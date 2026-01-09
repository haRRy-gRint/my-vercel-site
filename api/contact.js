import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        return res.status(200).json({ status: 'API is running', node_env: process.env.NODE_ENV });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    console.log('Attempting to send mail for:', email);

    // Check if credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
        console.warn('Missing environment variables');
        return res.status(500).json({
            success: false,
            message: 'Server configuration error: Missing environment variables on Vercel.'
        });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `${name} <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
        });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return res.status(500).json({
            success: false,
            message: `Failed to send message: ${error.message}`
        });
    }
}

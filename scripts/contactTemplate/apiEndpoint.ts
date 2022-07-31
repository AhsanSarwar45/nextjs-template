import { NextApiRequest, NextApiResponse } from "next";

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
    const nodeoutlook = require("nodejs-nodemailer-outlook");
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.INTERMEDIARY_EMAIL,
            pass: process.env.INTERMEDIARY_PASSWORD,
        },
        from: process.env.INTERMEDIARY_EMAIL,
        to: process.env.EMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
        <div>${req.body.message}</div>
        <p>Sent from: ${req.body.email}</p>
        `,

        onError: (error: any) => {
            res.status(400).send({});
            console.log(error);
        },
        onSuccess: (info: any) => {
            res.status(200).send({});
        },
    });
};

export default sendEmail;

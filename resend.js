import { Resend } from "resend";
// const Resend =require("resend")
const resend = new Resend("re_LWAmzvEE_H5zBsY5hSaea4n1nRvmiJqHD");

const sendMail = async ({ from, subject, html }) => {
  return await resend.emails.send({
    from: from ? from : "No Email Provided",
    to: "harpreetsinghsodi152@gmail.com",
    subject: subject ? subject : "PORTFOLIO EMAIL",
    html: `<p>${html}</strong>!</p>`,
  });
};
export { sendMail };

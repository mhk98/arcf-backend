// const nodemailer = require("nodemailer");
// module.exports = {
//   sendMail: async (mailAddress, mailerName, mailerMessage, mailerSubject) => {
//     try {
//       const transport = nodemailer.createTransport({
//         host: "host11.registrar-servers.com",
//         port: 465,
//         secure: true, // true for 465, false for other ports
//         auth: {
//           user: "_mainaccount@arcfbd.org", // generated ethereal user
//           pass: "CreateAbit2023", // generated ethereal password
//         },
//       });
//       const mailOptions = {
//         from: mailAddress, //sender mail
//         to: "<info@arcfbd.org>", //receiver mail
//         name: mailerName, //sender name
//         subject: mailerSubject, //sender mail subject
//         text: mailerMessage,
//       };
//       const result = await transport.sendMail(mailOptions);
//       console.log("result", result);
//       return result;
//     } catch (error) {
//       return error;
//     }
//   },
// };

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "host11.registrar-servers.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "_mainaccount@arcfbd.org",
    pass: "CreateAbit2023",
  },
});

// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async (
  mailAddress,
  mailerName,
  mailerSubject,
  mailerMessage
) => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${mailerName}" <${mailAddress}>`, // sender address
      to: "<info@arcfbd.org>", // list of receivers
      subject: mailerSubject, // Subject line
      text: mailerMessage, // plain text body
      // html: "<b>{mailerMessage}</b>",
    });

    console.log("Message sent: %s", info);

    return info;
  } catch (error) {
    return error;
  }

  //
};

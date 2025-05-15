const express = require("express");
const cors = require("cors");
const { sendMail } = require("./resend");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("assets"));
app.get("/lender", (req, res) => {
  let fullUrl = req.get("referer") + "lender";
  const apiURL = req.protocol + "://" + req.get("host");
  const manifest = {
    short_name: "ibankey",
    name: "ibankey Lender - Your key to the world of finance.",
    icons: [
      {
        src: apiURL + "/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: apiURL + "/logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [],
    start_url: fullUrl,
    display: "standalone",
    theme_color: "#000000",
    id: fullUrl,
    background_color: "#ffffff",
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Homepage",
        url: fullUrl + "/#/landing",
        icons: [
          {
            src: apiURL + "/logo.png",
            sizes: "144x144",
          },
        ],
      },
    ],
    description:
      "ibankey Lender application-We connect you to the right lenders/investors and arrange the best offers for you using technology, cutting down the time by 1/5th.",
  };

  console.log(fullUrl);
  res.setHeader("Content-Type", "application/json");
  res.json(manifest);
});
app.get("/borrower", (req, res) => {
  let fullUrl = req.get("referer") + "borrower";
  const apiURL = req.protocol + "://" + req.get("host");
  const manifest = {
    short_name: "ibankey",
    name: "ibankey Borrower  - Your key to the world of finance.",
    icons: [
      {
        src: apiURL + "/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: apiURL + "/logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [],
    start_url: fullUrl,
    display: "standalone",
    theme_color: "#000000",
    id: fullUrl,
    background_color: "#ffffff",
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Homepage",
        url: fullUrl + "/#/landing",
        icons: [
          {
            src: apiURL + "/logo.png",
            sizes: "144x144",
          },
        ],
      },
    ],
    description:
      "ibankey Borrower application-We connect you to the right Borrowers/investors and arrange the best offers for you using technology, cutting down the time by 1/5th.",
  };

  res.setHeader("Content-Type", "application/json");
  res.json(manifest);
});

app.post("/sendmail", async (req, res) => {
  try {
    const { from, html, subject } = await req.body;
    sendMail({ from, html, subject });
    res.status(200).send("Email Request Recieved!");
  } catch (error) {
    return (res.status = 500);
  }
});
app.listen(8000, () => console.log("RUNNING IT ON 8000🚀🚀"));

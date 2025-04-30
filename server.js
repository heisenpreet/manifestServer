const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static('assets'))
app.get("/lender", (req, res) => {
  let fullUrl = req.get("referer") + "lender";
  const manifest = {
    short_name: "ibankey",
    name: "ibankey Lender",
    icons: [
      {
        src: fullUrl + "/src/assets/icons/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "1891x1150",

        type: "image/png",
        form_factor: "wide",
        label: "ibankey Lender",
      },
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "451x992",

        type: "image/png",
        form_factor: "narrow",
        label: "ibankey Lender",
      },
    ],
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
          { src: fullUrl + "/src/assets/icons/logo.png", sizes: "144x144" },
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
  const manifest = {
    short_name: "ibankey",
    name: "ibankey Borrower",
    icons: [
      {
        src: fullUrl + "/src/assets/icons/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "1891x1150",

        type: "image/png",
        form_factor: "wide",
        label: "ibankey Borrower",
      },
      {
        src: fullUrl + "/src/assets/icons/logo.png",
        sizes: "451x992",

        type: "image/png",
        form_factor: "narrow",
        label: "ibankey Borrower",
      },
    ],
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
          { src: fullUrl + "/src/assets/icons/logo.png", sizes: "144x144" },
        ],
      },
    ],
    description:
      "ibankey Borrower application-We connect you to the right Borrowers/investors and arrange the best offers for you using technology, cutting down the time by 1/5th.",
  };

  console.log(fullUrl);
  res.setHeader("Content-Type", "application/json");
  res.json(manifest);
});
app.listen(3000, () => console.log("RUNNING IT ON 3000🚀🚀"));

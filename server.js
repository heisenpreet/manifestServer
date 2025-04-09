const express = require("express");
const cors=require("cors");


const app = express();
app.use(cors())
const manifest = {
  short_name: "ibankey",
  name: "ibankey Borrower",
  icons: [
    {
      src: "http://localhost:5173/borrower/src/assets/icons/ibankey-logo-2.svg",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      src: "http://localhost:5173/borrower/src/assets/icons/ibankey-logo-2.svg",
      sizes: "144x144",
      type: "image/png",
      purpose: "any",
    },
  ],
  screenshots: [
    {
      src: "http://localhost:5173/borrower/src/assets/icons/ibankey-logo-2.svg",
      sizes: "1891x1150",
      type: "image/webp",
      form_factor: "wide",
      label: "ibankey Borrower",
    },
    {
      src: "http://localhost:5173/borrower/src/assets/icons/ibankey-logo-2.svg",
      sizes: "451x992",
      type: "image/webp",
      form_factor: "narrow",
      label: "ibankey Borrower",
    },
  ],
  start_url: "http://localhost:5173/borrower",
  display: "standalone",
  theme_color: "#000000",
  id: "http://localhost:5173/borrower",
  background_color: "#ffffff",
  shortcuts: [
    {
      name: "Home",
      short_name: "Home",
      description: "Homepage",
      url: "http://localhost:5173/borrower/#/landing",
      icons: [{ src: "http://localhost:5173/borrower/src/assets/icons/ibankey-logo-2.svg", sizes: "144x144" }],
    },
  ],
  description:
    "ibankey Borrower application-We connect you to the right lenders/investors and arrange the best offers for you using technology, cutting down the time by 1/5th.",
};

app.get("/", (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  res.json(manifest)
});
app.listen(3000, () => console.log("RUNNING IT ON 3000🚀🚀"));

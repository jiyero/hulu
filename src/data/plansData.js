import dhImage from "../assets/dh.png";
import dheImage from "../assets/dhe.png";
import dhmImage from "../assets/dhm.png";
import hltvImage from "../assets/hltv.png";

//import check from "../assets/check.svg";
export const plansData = {
  dh: {
    titles: [
      "Monthly Price",
      "Subscriptions included in each plan",
      "Hulu streaming library with tons of episodes and movies",
      "Endless entertainment with Disney+",
      "Most new episodes on Hulu the day after they air",
      "Access to award-winning Hulu Originals",
      "Watch on your favorite devices, including TV, laptop, phone, or tablet",
      "No ads in Hulu streaming library",
      "No ads on Disney+",
      "Download and watch on Hulu",
      "Download and watch on Disney+",
    ],
    columns: [
      {
        label: "Disney+, Hulu Bundle Basic",
        price: "$10.99/MONTH",
        deal: "SAVE 44%",
        image: dhImage,
        values: [
          "$10.99/mo*",
          "Disney+ and Hulu",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "—",
          "—",
          "—",
          "—",
        ],
      },
      {
        label: "Disney+, Hulu Bundle Premium",
        price: "$19.99/MONTH",
        deal: "SAVE 42%",
        image: dhImage,
        values: [
          "$19.99/mo.",
          "Disney+ and Hulu",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "Ads will be served in select live and linear content",
          "✔",
          "✔",
        ],
      },
    ],
    disclaimer:
      "*Savings compared to regular monthly price of each service. Terms apply. \n** Switches from Live TV to Hulu take effect as of the next billing cycle \n†For current-season shows in the streaming library only \n©2025 Disney and its related entities.",
    addons: [
      {
        name: "Max™",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "CINEMAX®",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Paramount+ with SHOWTIME",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "STARZ®",
        basic: "✔",
        premium: "✔",
      },
    ],
  },

  dhe: {
    titles: [
      "Monthly price. Save up to $19.98/mo.*",
      "Subscriptions included in each plan",
      "Hulu streaming library with tons of episodes and movies",
      "Endless entertainment with Disney+",
      "Live sports with ESPN+, now in the Hulu app",
      "Most new episodes on Hulu the day after they air†",
      "Access to award-winning Hulu Originals",
      "Watch on your favorite devices, including TV, laptop, phone, or tablet",
      "No ads in Hulu streaming library",
      "No ads on Disney+",
      "Download and watch on Hulu",
      "Download and watch on Disney+",
    ],
    columns: [
      {
        label: "Basic Plan",
        image: dheImage,
        values: [
          "$16.99/mo.*",
          "Disney+, Hulu and ESPN+",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "—",
          "—",
          "—",
          "—",
        ],
      },
      {
        label: "Premium Plan",
        image: dheImage,
        values: [
          "$26.99/mo.*",
          "Disney+ and Hulu and ESPN+",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "Ads will be served in select live and linear content",
          "✔",
          "✔",
        ],
      },
    ],

    disclaimer:
      "*Savings compared to regular monthly price of each service. Terms apply. \n** Switches from Live TV to Hulu take effect as of the next billing cycle \n†For current-season shows in the streaming library only",

    addons: [
      {
        name: "Max™",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "CINEMAX®",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Paramount+ with SHOWTIME",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "STARZ®",
        basic: "✔",
        premium: "✔",
      },
    ],
  },

  dhm: {
    titles: [
      "Monthly price. Save up to $21.98/mo.*",
      "Subscriptions included in each plan",
      "Hulu streaming library with tons of episodes and movies",
      "Endless entertainment with Disney+",
      "Access to Max. Watch HBO content in the Hulu app††Access to Max. Watch HBO content in the Hulu app††",
      "Most new episodes on Hulu the day after they air†",
      "Access to award-winning Hulu Originals",
      "Watch on your favorite devices, including TV, laptop, phone, or tablet",
      "Ad-free streaming",
      "Download and watch on Hulu",
      "Download and watch on Disney+",
    ],
    columns: [
      {
        label: "Basic Plan",
        image: dhmImage,
        values: [
          "$16.99/mo.*",
          "Disney+, Hulu and Max",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "—",
          "—",
          "—",
        ],
      },
      {
        label: "Premium Plan",
        image: dhmImage,
        values: [
          "$29.99/mo.*",
          "Disney+, Hulu and Max",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "Ads will be served in select live and linear content",
          "✔",
          "✔",
        ],
      },
    ],
    disclaimer:
      "*Savings compared to regular monthly price of each service. Terms apply. \n** Switches from Live TV to Hulu take effect as of the next billing cycle \n†For current-season shows in the streaming library only \n††HBO content available on Hulu, additional content only available via Max app.",
    addons: [
      {
        name: "CINEMAX®",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Paramount+ with SHOWTIME",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "STARZ®",
        basic: "✔",
        premium: "✔",
      },
    ],
  },

  hltv: {
    titles: [
      "Monthly price",
      "Subscriptions included in each plan",
      "Hulu streaming library with tons of episodes and movies",
      "Endless entertainment with Disney+",
      "Live sports with ESPN+, now in the Hulu app",
      "Most new episodes on Hulu the day after they air†",
      "Access to award-winning Hulu Originals",
      "Watch on your favorite devices, including TV, laptop, phone, or tablet",
      "No ads in Hulu streaming library",
      "No ads on Disney+",
      "Download and watch on Hulu",
      "Download and watch on Disney+",
      "Live TV on Hulu with 100+ top channels. No cable required.",
      "Live TV guide to navigate channels",
      "Record Live TV with Unlimited DVR",
    ],
    columns: [
      {
        label: "Basic Plan",
        image: hltvImage,
        values: [
          "$16.99/mo.*",
          "Disney+, Hulu and Max",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "—",
          "—",
          "—",
        ],
      },
      {
        label: "Premium Plan",
        image: hltvImage,
        values: [
          "$29.99/mo.*",
          "Disney+, Hulu and Max",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "✔",
          "Ads will be served in select live and linear content",
          "✔",
          "✔",
        ],
      },
    ],
    disclaimer:
      "*Savings compared to regular monthly price of each service. Terms apply. \n** Switches from Live TV to Hulu take effect as of the next billing cycle \n†For current-season shows in the streaming library only \n††HBO content available on Hulu, additional content only available via Max app.",
    addons: [
      {
        name: "Max™",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "CINEMAX®",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Paramount+ with SHOWTIME",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "STARZ®",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Unlimited Screens",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Entertainment Add-on",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Español Add-on",
        basic: "✔",
        premium: "✔",
      },
      {
        name: "Sports Add-on",
        basic: "✔",
        premium: "✔",
      },
    ],
  },
};

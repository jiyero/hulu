//highlightData.js

import sports from "../assets/sports.jpeg";
import news from "../assets/news.jpeg";
import events from "../assets/events.jpeg";
import cbs from "../assets/logos/cbs.png";
import espn from "../assets/logos/espn.png";
import fs1 from "../assets/logos/fs1.svg";
import mlb from "../assets/logos/mlb.webp";
import nfl from "../assets/logos/nfl.png";

import abc from "../assets/logos/abc.png";
import cnn from "../assets/logos/cnn.svg";
import msnbc from "../assets/logos/msnbc.png";
import fox from "../assets/logos/fox.svg";

import emmy from "../assets/logos/emmy.png";
import golden from "../assets/logos/golden.png";
import grammy from "../assets/logos/grammy.png";
import oscars from "../assets/logos/oscars.png";

export const highlightData = {
  sports: {
    title: "Live Sports",
    description:
      "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
    background: sports,
    logos: [cbs, espn, fs1, nfl, mlb],
  },

  news: {
    title: "Breaking News",
    description:
      "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    background: news,
    logos: [abc, cnn, msnbc, fox],
  },

  events: {
    title: "Biggest Events",
    description:
      "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    background: events,
    logos: [emmy, golden, grammy, oscars],
  },
};

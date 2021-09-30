import React from "react";
import { Main, Global, Timeline, PageTitle,Logo } from "../components/styled";
import { Helmet } from "react-helmet";

import logo from "../images/logo.png"

const data = [
  {
    title: "We met",
    date: "Feb 09, 2021",
    detail: "At her home we met. 🧑‍💼 🧕",
  },
  {
    title: "Got Engaged",
    date: "Feb 26, 2021",
    detail: "Event at her with close relatives. 🍬🍬🍡🍡",
  },
  {
    title: "Our First Date",
    date: "Mar 14, 2021",
    detail: "Outing to some random beach. 🏖️",
  },
  {
    title: "Our Nikah",
    date: "Aug 02, 2021",
    detail: "🤴 👸",
  },
  {
    title: "Staycation",
    date: "Aug 03, 2021",
    detail: "We had the best days of our life. 🌳👩‍❤️‍👨",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Our Story  </title>
      </Helmet>
      <Main>
        <PageTitle>Our Story</PageTitle>
        <Logo src={logo} alt="logo"/>
        <Timeline>
          {data.map((event) => (
            <li className="event" data-date={event.date}>
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </li>
          ))}
        </Timeline>

        <p class="text-center">The Story Continues...</p>
      </Main>
      <Global />
    </>
  );
};

export default Home;

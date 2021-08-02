import React from "react";
import Header from "./layouts/Header";
import AboutSection from "./layouts/AboutSection";
import HistorySection from "./layouts/HistorySection";
import TeamsSection from "./layouts/TeamsSection";
import FooterSection from "./layouts/FooterSection";
import CalendarSection from "./layouts/CalendarSection";
import ArticlesSection from "./layouts/ArticlesSection";

const Landing = () => {
  return (
    <div className="bg-black">
      <Header />
      <main className="bg-black pb-7">
        <AboutSection />
        <section className="border-primary border-solid border m-3 md:p-7 md:m-7 mb-0">
          <TeamsSection />
          <CalendarSection />
          <ArticlesSection />
        </section>
        <HistorySection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
};

export default Landing;

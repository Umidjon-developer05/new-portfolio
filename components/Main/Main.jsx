import React from "react";
import { motion } from "framer-motion";
import "./Main.css";
import { useTranslation } from "react-i18next";
const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:h-full   ">
      <section id="home" className="section">
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="title"
        >
          <h1>
            <span className="mern">
              <span id="m">M</span>
              <span id="e">E</span>
              <span id="r">R</span>
              <span id="n">N</span>

              {t("sectionOne.mern")}
            </span>
            <span className="and">
              &nbsp;
              <img id="balllight" src="/knot.svg" alt="balllight" />
            </span>
            <span className="dev">
              .{t("sectionOne.developer")}&nbsp;&nbsp;&nbsp;
            </span>
            <img id="knot" src="/knot.svg" className="sm:block hidden" />
            <br />
            <span className="dev">Next & Python</span>
          </h1>
          <div className="links">
            <a href="/resume.pdf" target="_blank">
              <span>{t("sectionOne.resume")}</span>
            </a>
            <div className="dot">
              <img src="/knot.svg" />
            </div>
            <p>{t("sectionOne.hire")}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="image sm:block hidden"
        >
          <img src="/react.svg" />
        </motion.div>
      </section>
    </div>
  );
};

export default Main;

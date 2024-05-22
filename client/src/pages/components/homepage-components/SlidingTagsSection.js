import React from "react";

const TAGS = [
  "Edusify",
  "Učenje",
  "Projekti",
  "Mreže",
  "Obrazovanje",
  "Studiranje",
  "Znanost",
  "Online",
  "Besplatno",
  "Tim",
  "Vizija",
  "Cilj",
];
const DURATION = 35000;
const ROWS = 5;
const TAGS_PER_ROW = 8;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

function SlidingTagsSection() {
  return (
    <section className="slider-section">
      <h3 className="slider-main-text">Budite motivirani</h3>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </section>
  );
}

export default SlidingTagsSection;

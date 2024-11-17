import React, { useState, useEffect } from "react";

const getRandomBit = () => Math.floor(Math.random() * 2);

const getNextCharacterGlitch = (char: string) =>
  char === " " ? " " : getRandomBit().toString();

const getStringAsBit = (content: string) =>
  Array.from(content)
    .map((char) => (char === " " ? " " : getRandomBit()))
    .join("");

const getNextCharacterReveal = (
  char: string,
  index: number,
  currentIndex: number,
  content: string
): string => {
  if (index < currentIndex) {
    return content[index];
  }
  if (char === " ") {
    return " ";
  }
  return getRandomBit().toString();
};

// revealSpeed: 50 (ms) -> standard (for titles), 20 (ms) -> fast, 5 (ms) -> very fast (for paragraphs)

const Glitch: React.FC<{
  content: string;
  revealSpeed: number;
  glitchTime: number;
}> = ({ content, revealSpeed, glitchTime }) => {
  const DEFAULT_VAL = getStringAsBit(content);
  const [glitchedNumbers, setGlitchedNumbers] = useState<string>(DEFAULT_VAL);
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    const glitch = setInterval(() => {
      setGlitchedNumbers(
        Array.from(content)
          .map((char) => getNextCharacterGlitch(char))
          .join("")
      );
    }, revealSpeed);
    const timeoutForGlitch = setTimeout(() => {
      clearInterval(glitch);
      setReveal(true);
    }, glitchTime);

    let revealIndex = 0;
    if (reveal) {
      const revealChars = setInterval(() => {
        setGlitchedNumbers(
          Array.from(content)
            .map((char, index) =>
              getNextCharacterReveal(char, index, revealIndex, content)
            )
            .join("")
        );
        revealIndex++;
      }, revealSpeed);

      const revealTime = content.length * revealSpeed + glitchTime;
      const revealTimeout = setTimeout(() => {
        clearInterval(revealChars);
        setGlitchedNumbers(content);
      }, revealTime);

      return () => {
        clearInterval(revealChars);
        clearTimeout(revealTimeout);
      };
    }

    return () => {
      clearInterval(glitch);
      clearTimeout(timeoutForGlitch);
    };
  }, [content, reveal]);

  return glitchedNumbers;
};

export default Glitch;

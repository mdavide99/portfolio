import { useEffect, useState } from "react";

interface TypeAnimationProps {
  contents: Array<String>;
  speed?: number;
}

function AutoTyping(props: TypeAnimationProps) {
  const [content, setContent] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [typedFlag, setTypedFlag] = useState<boolean>(false);

  useEffect(() => {
    const timerID = setInterval(() => typeWords(), props.speed);
    return () => clearInterval(timerID);
  });

  function typeWords() {
    const lastWordIndex = props.contents.length - 1;
    const lastCharIndex = props.contents[wordIndex].length;

    if (charIndex === 0 && typedFlag) {
      if (wordIndex < lastWordIndex) {
        setContent(props.contents[wordIndex + 1][0]);
        setTypedFlag(false);
        setWordIndex(wordIndex + 1);
        setCharIndex(charIndex + 1);
      } else {
        setContent(props.contents[0][0]);
        setTypedFlag(false);
        setWordIndex(0);
        setCharIndex(1);
      }
    } else if (charIndex < lastCharIndex && !typedFlag) {
      setContent(content + props.contents[wordIndex][charIndex]);
      setCharIndex(charIndex + 1);
    } else if (charIndex <= lastCharIndex && typedFlag) {
      setContent(content.slice(0, -1));
      setCharIndex(charIndex - 1);
    } else if (charIndex === lastCharIndex && !typedFlag) {
      setTypedFlag(true);
      setContent(content.slice(0, -1));
      setCharIndex(charIndex - 1);
    }
  }

  return (
    <p>
      <span className="mr-1">You can ask me about</span>
      <span
        className="border-r-2 pr-px border-blue-500 dark:border-fuchsia-500 
                font-mono text-blue-500 dark:text-fuchsia-500"
      >
        {content}
      </span>
    </p>
  );
}

export { AutoTyping };

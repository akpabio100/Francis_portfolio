import { useEffect, useState } from "react";

/** Types and deletes words one letter at a time, forever. */
export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pause = 1500
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer: number | undefined;

    if (!deleting && text === word) {
      timer = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timer = window.setTimeout(
        () =>
          setText(
            deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
          ),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

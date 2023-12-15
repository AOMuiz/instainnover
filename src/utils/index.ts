export function humanReadableDuration(msDuration: number) {
  const h = Math.floor(msDuration / 1000 / 60 / 60);
  const m = Math.floor((msDuration / 1000 / 60 / 60 - h) * 60);
  const s = Math.floor(((msDuration / 1000 / 60 / 60 - h) * 60 - m) * 60);

  // To get time format 00:00:00
  const seconds = s < 10 ? `0${s}` : `${s}`;
  const minutes = m < 10 ? `0${m}` : `${m}`;
  const hours = h < 10 ? `0${h}` : `${h}`;

  return `${hours}:${minutes}:${seconds}`;
}

export const truncatedText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    // If the text is shorter than or equal to maxLength, display it as is.
    return text;
  } else {
    // If the text is longer than maxLength, truncate it and add an ellipsis.
    const truncatedText = text.slice(0, maxLength) + "...";
    return truncatedText;
  }
};

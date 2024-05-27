import { useState } from "react";

const useMovieTitleFormatter = () => {
  const [formatType, setFormatType] = useState("default");

  const formatTitle = (title) => {
    switch (formatType) {
      case "uppercase":
        return title.toUpperCase();
      case "lowercase":
        return title.toLowerCase();
      case "titlecase":
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
      default:
        return title;
    }
  };

  const setFormat = (type) => {
    setFormatType(type);
  };

  return {
    formatTitle,
    setFormat,
  };
};

export default useMovieTitleFormatter;

const colorUtils = {
  random: () => {
    // Generate a random color in hexadecimal format
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
  // Generate a random color in HSL format with a pastel hue
  pastel: () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 20) + 70;
    const lightness = Math.floor(Math.random() * 20) + 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  },
  // Generate a random color in HSL format with a dark hue
  text: (backgroundColor) => {
    const rgb = backgroundColor.match(/\d+/g);
    const brightness =
      (parseInt(rgb[0]) * 299 +
        parseInt(rgb[1]) * 587 +
        parseInt(rgb[2]) * 114) /
      1000;
    return brightness < 125 ? "#000000" : "#ffffff";
  },
};

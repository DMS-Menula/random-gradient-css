function randomHexColor() {
  const letters = "89ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function randomHSLColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 70 + Math.floor(Math.random() * 20);
  const l = 50 + Math.floor(Math.random() * 10);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function getPresetColors(preset, count) {
  const presets = {
    pastel: ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"],
    neon: ["#ff00ff", "#00ffff", "#39ff14", "#ff073a"],
    sunset: ["#ff7e5f", "#feb47b", "#ff9966"],
    dark: ["#232526", "#414345", "#000000"],

    ocean: ["#2193b0", "#6dd5ed", "#2E3192", "#1BFFFF"],
    forest: ["#5A3F37", "#2C7744", "#11998e", "#38ef7d"],
    fire: ["#ff4e50", "#f9d423", "#ff512f", "#dd2476"],
    ice: ["#83a4d4", "#b6fbff", "#00c6ff", "#0072ff"],
    candy: ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a18cd1"],
    gold: ["#D4AF37", "#FFD700", "#FFC30B", "#FFB300"],
    sky: ["#56ccf2", "#2f80ed", "#00c6ff", "#0072ff"],
    peach: ["#ED4264", "#FFEDBC", "#ff9a9e", "#fecfef"],
    aurora: ["#00c3ff", "#ffff1c", "#00ff87", "#60efff"],
    galaxy: ["#20002c", "#cbb4d4", "#833ab4", "#fd1d1d"],
    lava: ["#ff416c", "#ff4b2b", "#ff6a00", "#ee0979"],
    mint: ["#76b852", "#8DC26F", "#00ffcc", "#ccffdd"],
    royal: ["#141E30", "#243B55", "#4b6cb7", "#182848"]
  };

  if (!preset || !presets[preset]) {
    return Array.from({ length: count }, randomHexColor);
  }

  const colors = presets[preset];
  return Array.from({ length: count }, () =>
    colors[Math.floor(Math.random() * colors.length)]
  );
}

function getMixedColors(count) {
  return Array.from({ length: count }, () =>
    Math.random() > 0.5 ? randomHexColor() : randomHSLColor()
  );
}

function randomGradient(options = {}) {
  const count = options.colors || 2;
  const angle = options.angle || Math.floor(Math.random() * 360);
  const type = options.type || "linear";

  let colors;

  if (options.mode === "hsl") {
    colors = Array.from({ length: count }, randomHSLColor);
  } else if (options.mode === "mixed") {
    colors = getMixedColors(count);
  } else {
    colors = getPresetColors(options.preset, count);
  }

  const css =
    type === "radial"
      ? `radial-gradient(circle, ${colors.join(", ")})`
      : `linear-gradient(${angle}deg, ${colors.join(", ")})`;

  return {
    css,
    colors,
    angle,
    type
  };
}

module.exports = randomGradient;
#!/usr/bin/env node

const gradient = require("./index");

const result = gradient({
  colors: 2,
  mode: "mixed"
});

console.log("\n🎨 Random Gradient:\n");
console.log(result.css);
console.log("\nColors:", result.colors.join(", "));
console.log("");
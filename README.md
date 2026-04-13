# 🎨 random-gradient-css

![npm version](https://img.shields.io/npm/v/random-gradient-css)
![downloads](https://img.shields.io/npm/dw/random-gradient-css)

Generate **beautiful random CSS gradients** instantly for your projects.

🔥 Lightweight • 🎯 Easy to use • ⚡ No dependencies

---

## 🚀 Installation

```bash
npm install random-gradient-css
```

---

## ⚡ Quick Usage

```js
const gradient = require("random-gradient-css");

const result = gradient();

console.log(result.css);
// linear-gradient(120deg, #ff7e5f, #feb47b)
```

---

## 🎯 Example Output

```js
{
  css: "linear-gradient(210deg, #ff7e5f, #feb47b)",
  colors: ["#ff7e5f", "#feb47b"],
  angle: 210,
  type: "linear"
}
```

---

## 🛠 Options

```js
gradient({
  colors: 3,          // number of colors (default: 2)
  angle: 90,          // gradient angle
  preset: "sunset",   // color preset
  mode: "mixed",      // "hex" | "hsl" | "mixed"
  type: "radial"      // "linear" | "radial"
});
```

---

## 🎨 Available Presets

* pastel
* neon
* sunset
* dark
* ocean 🌊
* forest 🌲
* fire 🔥
* ice ❄️
* candy 🍭
* gold 🟡
* sky ☁️
* peach 🍑
* aurora 🌌
* galaxy 🚀
* lava 🌋
* mint 🌿
* royal 👑

---

## 🖥 CLI Usage

Run directly in terminal:

```bash
npx random-gradient-css
```

Example output:

```bash
🎨 Random Gradient:

linear-gradient(135deg, #ff416c, #ff4b2b)

Colors: #ff416c, #ff4b2b
```

---

## 💡 Use Cases

* 🎨 Website backgrounds
* 🧩 UI components
* 🎯 Landing pages
* 🎬 Design tools
* ⚡ Rapid prototyping

---

## 🌟 Why use this?

* No dependencies
* Super lightweight
* Multiple color modes
* Clean & modern gradients
* CLI support

---

## 🧑‍💻 Author

Made by Menula 🚀

---

## 📄 License

MIT

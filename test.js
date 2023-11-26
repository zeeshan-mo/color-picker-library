import { find_closest_color } from "./index.js";

console.log("Closest color to RGB(0,0,0) is " + find_closest_color(0, 0, 0).name);
console.log("Closest color to RGB(255,255,255) is " + find_closest_color(255, 255, 255).name);
console.log("Closest color to RGB(255,0,0) is " + find_closest_color(255, 0, 0).name);
console.log("Closest color to RGB(0,255,0) is " + find_closest_color(0, 255, 0).name);
console.log("Closest color to RGB(0,0,255) is " + find_closest_color(0, 0, 255).name);
console.log("Closest color to RGB(100,100,100) is " + find_closest_color(100, 100, 100).name);
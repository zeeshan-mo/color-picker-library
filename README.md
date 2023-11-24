**Description**
This project leverages a 3D space representation for colors, where each defined color corresponds to a point. For instance, "Black" is represented as [0, 0, 0]. The inputted color is treated as a 3D point in the same space. By performing a distance check between the input color and predefined colors, we identify the closest defined color. 
The colors.json file was derived from a project that scraped color names and RGB values. [https://github.com/codebrainz/]

**Installation**
`npm install https://github.com/zeeshan-mo/color-picker-library`

**Usage**
`import { find_closest_color } from "color-picker-library";`
`console.log(find_closest_color(0, 0, 0));`
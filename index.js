import fs from 'fs';
var colors_json = JSON.parse(fs.readFileSync('./colors.json', 'utf8'));

function dist_3d(x1, y1, z1, x2, y2, z2) {
    // First calculate the distance on the 2d plane
    var dist_2d = Math.hypot(x2 - x1, y2 - y1);
    // Then calculate the 3d distance by using the 2d distance as a base
    return Math.hypot(z2 - z1, dist_2d);
}

function find_closest_color(r, g, b) {
    // Iterate through the list of colors performing distance checks until we get the closest
    var closest_dist = Infinity;
    var closest_field = {'name':'undefined','hex':'#000000','rgb':[0,0,0]};
    
    for (var i = 0; i < colors_json.length; i++) {
        var dist = dist_3d(r, g, b, colors_json[i]['rgb'][0], colors_json[i]['rgb'][1], colors_json[i]['rgb'][2]);
        if (dist < closest_dist) {
            closest_dist = dist;
            closest_field = colors_json[i];
        }
    }
    return closest_field;
}

export {find_closest_color};
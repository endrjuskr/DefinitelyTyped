/// <reference path="../d3.d.ts" />
/// <reference path="d3.geo.tile.d.ts" />

function geo() {
    var width = 960;
    var height = 500;
    var tile = d3.geo.tile().size([width, height]);

    var scale = 5;
    var tiles = tile.scale(scale).translate([10, 10])();

    var translate = tiles.translate;
    var tilesScale = tiles.scale;

    var firstTile = tiles[0];
}

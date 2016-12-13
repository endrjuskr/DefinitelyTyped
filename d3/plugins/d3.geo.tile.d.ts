/// <reference path="../d3.d.ts" />

declare namespace d3 {
     export module geo {
        export function tile(): Tile;

        interface Tile {
            (): Tiles
            size(value: [number, number]): Tile;
            size(): [number, number];
            size(value?: [number, number]): any;

            scale(value: number): Tile;
            scale(): number;
            scale(value?: number): any;

            translate(value: [number, number]): Tile;
            translate(): [number, number];
            translate(value?: [number, number]): any;

            zoomDelta(value: number): Tile;
            zoomDelta(): number;
            zoomDelta(value?: number): any;
        }

        interface Tiles {
            [k: number]: [number, number, number];
            translate: [number, number];
            scale: number;
        }
     }
}

# geo-test-data

## geojson data

- `geojson/ok`: valid geojson files
- `geojson/problematic`: valid geojson files that may or may not be problematic depending on the use case (e.g. `crs` field, self-intersecting polygons)
- `geojson/err`: invalid
  - `geojson/err/err-structure`: invalid structurally in such a way that a json-schema can verify it
  - `geojson/err/err-geom`: invalid according to the geojson spec and NOT structurally invalid as verifyable via json-schema


Collected and cleaned up from:

- geojson-invalid-geometry repo: https://github.com/chrieke/geojson-invalid-geometry
- placemark-check-geojson repo: https://github.com/placemark/check-geojson

var lineasGeoJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              -58.639170384426095,
              -34.77598298702381
            ],
            [
              -58.64238381417539,
              -34.7782883180211
            ],
            [
              -58.64748869308136,
              -34.77429571119614
            ],
            [
              -58.64462101210209,
              -34.771839911461534
            ],
            [
              -58.639007679122244,
              -34.77588275377993
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -58.64268888662025,
            -34.770135844206145
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJson(lineasGeoJson,{}).addTo(mapa)
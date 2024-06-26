var map = L.map('map').setView([53.26066624365998, -2.509240715372458], 16);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map); // Add osm layer to the map

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});



var baseMaps = {
  "Open Street Map": osm,
  "OpenTopoMap": OpenTopoMap
};

L.control.layers(baseMaps).addTo(map);
var drawControl = new L.Control.Draw({
  draw: {
    polygon: true,
    polyline: false,
    rectangle: true,
    circle: false,
    marker: false
  }
});
map.addControl(drawControl);

var drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

map.on("draw:created", function(e){
  var type = e.layerType;
  var layer = e.layer;
  drawnFeatures.addLayer(layer);
  var seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
    console.log(seeArea)
});

var myGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -0.7513501466055175,
              52.350627437530484
            ],
            [
              -0.7539234962603653,
              52.35055018827345
            ],
            [
              -0.7564720363893709,
              52.35031918526042
            ],
            [
              -0.7589711974258366,
              52.349936655562054
            ],
            [
              -0.7613968873707172,
              52.34940628702199
            ],
            [
              -0.7637257247240326,
              52.34873319259173
            ],
            [
              -0.7659352644607776,
              52.34792386088953
            ],
            [
              -0.7680042148442803,
              52.34698609346712
            ],
            [
              -0.769912642963754,
              52.34592892939767
            ],
            [
              -0.7716421669979198,
              52.34476255792224
            ],
            [
              -0.77317613334165,
              52.34349822000739
            ],
            [
              -0.774499776886053,
              52.3421480997744
            ],
            [
              -0.7756003629124765,
              52.3407252068574
            ],
            [
              -0.7764673092456403,
              52.339243250835366
            ],
            [
              -0.7770922875084129,
              52.33771650895772
            ],
            [
              -0.7774693025284762,
              52.33615968844682
            ],
            [
              -0.7775947491630015,
              52.33458778471117
            ],
            [
              -0.7774674460292186,
              52.33301593684046
            ],
            [
              -0.7770886458540875,
              52.3314592817775
            ],
            [
              -0.7764620223829154,
              52.32993280857273
            ],
            [
              -0.7755936340124362,
              52.328451214123575
            ],
            [
              -0.7744918645364599,
              52.327028761784426
            ],
            [
              -0.7731673416095765,
              52.32567914420309
            ],
            [
              -0.7716328337446333,
              52.3244153516971
            ],
            [
              -0.7699031268609089,
              52.32324954742795
            ],
            [
              -0.7679948815903722,
              52.322192950564805
            ],
            [
              -0.7659264727275558,
              52.32125572855132
            ],
            [
              -0.7637178123729391,
              52.32044689950089
            ],
            [
              -0.7613901584690531,
              52.31977424564859
            ],
            [
              -0.7589659105616114,
              52.31924423868153
            ],
            [
              -0.7564683947338973,
              52.318861977656155
            ],
            [
              -0.753921639760486,
              52.31863114009113
            ],
            [
              -0.7513501466055175,
              52.318553946699055
            ],
            [
              -0.748778653450549,
              52.31863114009113
            ],
            [
              -0.7462318984771378,
              52.318861977656155
            ],
            [
              -0.7437343826494236,
              52.31924423868153
            ],
            [
              -0.7413101347419819,
              52.31977424564859
            ],
            [
              -0.7389824808380958,
              52.32044689950089
            ],
            [
              -0.7367738204834793,
              52.32125572855132
            ],
            [
              -0.7347054116206627,
              52.322192950564805
            ],
            [
              -0.7327971663501262,
              52.32324954742795
            ],
            [
              -0.7310674594664016,
              52.3244153516971
            ],
            [
              -0.7295329516014586,
              52.32567914420309
            ],
            [
              -0.7282084286745751,
              52.327028761784426
            ],
            [
              -0.7271066591985988,
              52.328451214123575
            ],
            [
              -0.7262382708281195,
              52.32993280857273
            ],
            [
              -0.7256116473569474,
              52.3314592817775
            ],
            [
              -0.7252328471818164,
              52.33301593684046
            ],
            [
              -0.7251055440480334,
              52.33458778471117
            ],
            [
              -0.7252309906825586,
              52.33615968844682
            ],
            [
              -0.7256080057026221,
              52.33771650895772
            ],
            [
              -0.7262329839653947,
              52.339243250835366
            ],
            [
              -0.7270999302985585,
              52.3407252068574
            ],
            [
              -0.728200516324982,
              52.3421480997744
            ],
            [
              -0.7295241598693849,
              52.34349822000739
            ],
            [
              -0.7310581262131151,
              52.34476255792224
            ],
            [
              -0.732787650247281,
              52.34592892939767
            ],
            [
              -0.7346960783667548,
              52.34698609346712
            ],
            [
              -0.7367650287502574,
              52.34792386088953
            ],
            [
              -0.7389745684870025,
              52.34873319259173
            ],
            [
              -0.7413034058403177,
              52.34940628702199
            ],
            [
              -0.7437290957851982,
              52.349936655562054
            ],
            [
              -0.746228256821664,
              52.35031918526042
            ],
            [
              -0.7487767969506698,
              52.35055018827345
            ],
            [
              -0.7513501466055175,
              52.350627437530484
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(myGeoJSON).addTo(map)

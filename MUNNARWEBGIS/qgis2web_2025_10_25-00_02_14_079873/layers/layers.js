var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_shapemunnar_1 = new ol.format.GeoJSON();
var features_shapemunnar_1 = format_shapemunnar_1.readFeatures(json_shapemunnar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shapemunnar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shapemunnar_1.addFeatures(features_shapemunnar_1);
var lyr_shapemunnar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shapemunnar_1, 
                style: style_shapemunnar_1,
                popuplayertitle: 'shapemunnar',
                interactive: true,
    title: 'shapemunnar<br />\
    <img src="styles/legend/shapemunnar_1_0.png" /> <br />\
    <img src="styles/legend/shapemunnar_1_1.png" /> CHOKKANAD<br />\
    <img src="styles/legend/shapemunnar_1_2.png" /> CHOLAMALAI<br />\
    <img src="styles/legend/shapemunnar_1_3.png" /> IKKANAGAR<br />\
    <img src="styles/legend/shapemunnar_1_4.png" /> KADALAR<br />\
    <img src="styles/legend/shapemunnar_1_5.png" /> KALLAR<br />\
    <img src="styles/legend/shapemunnar_1_6.png" /> KANNIMALA<br />\
    <img src="styles/legend/shapemunnar_1_7.png" /> LAKSHAM NAGAR<br />\
    <img src="styles/legend/shapemunnar_1_8.png" /> LAKSHMI<br />\
    <img src="styles/legend/shapemunnar_1_9.png" /> LUCKHAM<br />\
    <img src="styles/legend/shapemunnar_1_10.png" /> MOOLAKADA<br />\
    <img src="styles/legend/shapemunnar_1_11.png" /> MUNNAR COLONY<br />\
    <img src="styles/legend/shapemunnar_1_12.png" /> MUNNAR TOWN<br />\
    <img src="styles/legend/shapemunnar_1_13.png" /> NADAYAR<br />\
    <img src="styles/legend/shapemunnar_1_14.png" /> NALLATHANNI<br />\
    <img src="styles/legend/shapemunnar_1_15.png" /> PAZHAYAMUNNAR<br />\
    <img src="styles/legend/shapemunnar_1_16.png" /> PERIYAVARAI<br />\
    <img src="styles/legend/shapemunnar_1_17.png" /> RAJAMALAI<br />\
    <img src="styles/legend/shapemunnar_1_18.png" /> SEVANMALAY<br />\
    <img src="styles/legend/shapemunnar_1_19.png" /> THALAYAR<br />\
    <img src="styles/legend/shapemunnar_1_20.png" /> VAGUVARAI<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_shapemunnar_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_shapemunnar_1];
lyr_shapemunnar_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_shapemunnar_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_shapemunnar_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_shapemunnar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
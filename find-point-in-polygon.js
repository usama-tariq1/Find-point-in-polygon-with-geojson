var areas = {
"type": "FeatureCollection",
"name": "ghntaghar",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "ghntaghar", "description": null, "tessellate": 1 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 71.468864628659944, 30.198343867085391 ], [ 71.475558338351661, 30.195782285947761 ], [ 71.476949235465284, 30.20217320248641 ], [ 71.468864628659944, 30.198343867085391 ] ] ] } }
]
}

var userlocation = [71.47876, 30.20137 ];


function inside(point, vs) {
   
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};



var feature  = areas.features[0]
var coordinates = feature.geometry.coordinates[0]





 console.log(inside(userlocation , coordinates )) 


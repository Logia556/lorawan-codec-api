let watteco = require("../../codec/decode_uplink")

let batch_param=[3, [{ taglbl: 0, resol: 1, sampletype: 4,lblname: "OCC", divide: 1},
    { taglbl: 1, resol: 10, sampletype: 7,lblname: "temperature", divide: 100},
    { taglbl: 2, resol: 100, sampletype: 6,lblname: "humidity", divide: 100},
    { taglbl: 5, resol: 10, sampletype: 6,lblname: "luminosity", divide: 100}]]
let endpointCorresponder={}
function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param,endpointCorresponder);
}
exports.decodeUplink = decodeUplink;
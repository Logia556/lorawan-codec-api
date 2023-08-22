let watteco = require("../../codec/decode_uplink.js")

let batch_param = [3, [{taglbl: 0,resol: 1, sampletype: 7,lblname: "temperature", divide: 100},
    { taglbl: 1, resol: 1, sampletype: 6,lblname: "humidity", divide: 100},
    { taglbl: 2, resol: 1, sampletype: 7,lblname: "pressure", divide: 1},
    { taglbl: 3, resol: 1, sampletype: 10,lblname: "index_1", divide: 1},
    { taglbl: 4, resol: 1, sampletype: 10,lblname: "index_2", divide: 1},
    { taglbl: 5, resol: 1, sampletype: 6,lblname: "battery_voltage", divide: 1000}]];

function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
module.exports.decodeUplink = decodeUplink;
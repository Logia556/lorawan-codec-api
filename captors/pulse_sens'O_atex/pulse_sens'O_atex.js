let watteco = require("../../codec/decode_uplink")

let batch_param = [4, [{taglbl: 0,resol: 1, sampletype: 10,lblname: "index_1", divide: 1},
    { taglbl: 1, resol: 1, sampletype: 10,lblname: "index_2", divide: 1},
    { taglbl: 2, resol: 1, sampletype: 10,lblname: "index_3", divide: 1},
    { taglbl: 3, resol: 1, sampletype: 1,lblname: "state_1", divide: 1},
    { taglbl: 4, resol: 1, sampletype: 1,lblname: "state_2", divide: 1},
    { taglbl: 5, resol: 1, sampletype: 1,lblname: "state_3", divide: 1},
    { taglbl: 6, resol: 100, sampletype: 6,lblname: "battery_voltage", divide: 1000},
    { taglbl: 7, resol: 1, sampletype: 6,lblname: "multi_state", divide: 100}]];

function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
module.exports.decodeUplink = decodeUplink;
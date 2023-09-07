let watteco = require("../../codec/decode_uplink")

let batch_param = [3, [{taglbl: 0,resol: 0.02, sampletype: 12,lblname: "0-100_mV", divide: 1},
    { taglbl: 1, resol: 17, sampletype: 12,lblname: "0-70_V", divide: 1},
    { taglbl: 2, resol: 100, sampletype: 6,lblname: "battery_voltage", divide: 1000}]];

let endpointCorresponder = {
    analog:["0-100_mV","0-70_V"]
}
function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param,endpointCorresponder);
}
exports.decodeUplink = decodeUplink;



let watteco = require("../../codec/decode_uplink.js")

let batch_param = [3, [{taglbl: 0,resol: 10, sampletype: 7,lblname: "temperature", divide: 100},
    { taglbl: 5, resol: 100, sampletype: 6, lblname: "battery_voltage", divide: 1000}]];

function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
module.exports.decodeUplink = decodeUplink;
let clusters=["temperature:0402","basic:0000","lorawan:8004","configuration:0050",]
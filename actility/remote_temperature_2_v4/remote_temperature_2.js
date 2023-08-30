let watteco = require("../../codec/decode_uplink")

let batch_param = [3, [{taglbl: 0,resol: 10, sampletype: 7,lblname: "temperature_1", divide: 100},
    { taglbl: 1, resol: 10, sampletype: 7,lblname: "temperature_2", divide: 100},
    { taglbl: 5, resol: 100, sampletype: 6, lblname: "battery_voltage", divide: 1000}]];

let endpointCorresponder={
    temperature:["temperature_1","temperature_2"],
}
function decodeUplink(input) {
    if (input.bytes[2] === 0x04 && input.bytes[3] === 0x02) {
        return result = watteco.watteco_decodeUplink(input,batch_param,endpointCorresponder);
    }
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
module.exports.decodeUplink = decodeUplink;


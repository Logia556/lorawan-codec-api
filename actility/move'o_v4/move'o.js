let watteco = require("../../codec/decode_uplink")

function decodeUplink(input) {

    return result = watteco.watteco_decodeUplink(input);

}

module.exports.decodeUplink = decodeUplink;

let clusters=["basic:0000","lorawan:8004","configuration:0050","temperature:0402","humidity:0405","binary:000F","occupency:0406","illuminance:0400"]
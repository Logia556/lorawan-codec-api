let watteco = require("../../codec/watteco_decodeUplink.js")

let batch_param = [3, [{taglbl: 0,resol: 1, sampletype: 7,lblname: "temperature", divide: 100},
    { taglbl: 1, resol: 1, sampletype: 6,lblname: "humidity", divide: 100},
    { taglbl: 2, resol: 1, sampletype: 7,lblname: "pressure", divide: 1},
    { taglbl: 3, resol: 1, sampletype: 10,lblname: "index_1", divide: 1},
    { taglbl: 4, resol: 1, sampletype: 10,lblname: "index_2", divide: 1},
    { taglbl: 5, resol: 1, sampletype: 6,lblname: "battery_voltage", divide: 1000}]];

let argv= process.argv.slice(2);

let bytes = [];
bytes = watteco.strToDecimalArray(argv[1]);
let date = argv[2];

let input = {
    bytes: bytes,
    fPort: Number(argv[0]),
    recvTime: date,

};
function decodeUplink(input) {
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
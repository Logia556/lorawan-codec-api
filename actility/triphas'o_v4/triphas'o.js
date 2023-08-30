let watteco = require("../../codec/decode_uplink")

let batch_param=[]
let endpointCorresponder ={
    sum_positive_active_energy_Wh: ["sum_positive_active_energy_Wh_A","sum_positive_active_energy_Wh_B","sum_positive_active_energy_Wh_C","sum_positive_active_energy_Wh_ABC"],
    sum_negative_active_energy_Wh: ["sum_negative_active_energy_Wh_A","sum_negative_active_energy_Wh_B","sum_negative_active_energy_Wh_C","sum_negative_active_energy_Wh_ABC"],
    sum_positive_reactive_energy_Wh: ["sum_positive_reactive_energy_Wh_A","sum_positive_reactive_energy_Wh_B","sum_positive_reactive_energy_Wh_C","sum_positive_reactive_energy_Wh_ABC"],
    sum_negative_reactive_energy_Wh: ["sum_negative_reactive_energy_Wh_A","sum_negative_reactive_energy_Wh_B","sum_negative_reactive_energy_Wh_C","sum_negative_reactive_energy_Wh_ABC"],
    positive_active_power_W: ["positive_active_power_W_A","positive_active_power_W_B","positive_active_power_W_C","positive_active_power_W_ABC"],
    negative_active_power_W: ["negative_active_power_W_A","negative_active_power_W_B","negative_active_power_W_C","negative_active_power_W_ABC"],
    positive_reactive_power_W: ["positive_reactive_power_W_A","positive_reactive_power_W_B","positive_reactive_power_W_C","positive_reactive_power_W_ABC"],
    negative_reactive_power_W: ["negative_reactive_power_W_A","negative_reactive_power_W_B","negative_reactive_power_W_C","negative_reactive_power_W_ABC"],
    Vrms: ["Vrms_A","Vrms_B","Vrms_C"],
    Irms: ["Irms_A","Irms_B","Irms_C"],
    phase_angle: ["phase_angle_A","phase_angle_B","phase_angle_C"],


}
function decodeUplink(input) {
    if (input.bytes[2] === 0x80 && input.bytes[3] === 0x0A) {
        return result = watteco.watteco_decodeUplink(input,batch_param,endpointCorresponder);
    }
    if (input.bytes[2] === 0x80 && input.bytes[3] === 0x0B) {
        return result = watteco.watteco_decodeUplink(input,batch_param,endpointCorresponder);
    }
    return result = watteco.watteco_decodeUplink(input,batch_param);
}
module.exports.decodeUplink = decodeUplink;



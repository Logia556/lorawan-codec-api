const {execSync} = require('child_process')
let devices = ["atm'o","clos'o","flash'o","in'o","inclin'o","indoor_temperature","intens'o","lev'o","modbus","monit'o","move'o","outdoor_temperature","pilot_wire","press'o","pulse_sens'o_atex","pulse_sens'o","remote_temperature_2","remote_temperature","smartplug","th","tics'o","toran'o_atex","triphas'o","vaqa'o_lt","vaqa'o_plus","vaqa'o","ventil'o"]

for (let i in devices){
    let command ="npm --prefix ../actility/"+devices[i]+"_v4 run rebuild "
    console.log(command)
    execSync(command)
    let command2 = "echo exports.driver=driver >> ../actility/"+devices[i]+"_v4/main.js"
    console.log(command2)
    execSync(command2)
}
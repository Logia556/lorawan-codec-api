(()=>{var e,d={942:e=>{function d(e,d){return 2===d&&(32768&e)>0&&(e-=65536),3===d&&(8388608&e)>0&&(e-=16777216),4===d&&(2147483648&e)>0&&(e-=4294967296),e}function a(e){var d=2147483648&e?-1:1,i=(e>>23&255)-127,a=8388607&e;if(128==i)return d*(a?Number.NaN:Number.POSITIVE_INFINITY);if(-127==i){if(0==a)return 0*d;i=-126,a/=1<<23}else a=(a|1<<23)/(1<<23);return d*a*Math.pow(2,i)}function t(e,d,i,a){void 0===a&&(a=!1);var t,n,x="U"!=i.substr(0,1),r=parseInt(i.substr(1,2),10)/8,s=r;for(a?(t=-1,n=d+r-1):(t=1,n=d),tmpInt64=0,j=n;s>0;j+=t,s--)tmpInt64=(tmpInt64<<8)+e[j];return x&&r<8&&128&e[n]&&(tmpInt64-=1<<8*r),tmpInt64}function n(e,d){var i=e.toString(16).toUpperCase();for(d=null==d?d=2:d;i.length<d;)i="0"+i;return"0x"+i}function x(e,x){var r={lora:{}};r.lora.port=x;var s=e.length,u="";r.lora.payload="";for(var _=0;_<s;_++){1==(u=e[_].toString(16).toUpperCase()).length&&(u="0"+u),r.lora.payload+=u;var l=new Date;r.lora.date=l.toISOString()}if(125===x)if(batch=!(1&e[0]),!1===batch){if(r.zclheader={},r.zclheader.report="standard",attributID=-1,cmdID=-1,clusterdID=-1,r.zclheader.endpoint=(224&e[0])>>5|(6&e[0])<<2,cmdID=e[1],r.zclheader.cmdID=n(cmdID,2),clusterdID=256*e[2]+e[3],r.zclheader.clusterdID=n(clusterdID,4),10===cmdID|138===cmdID|1===cmdID){if(r.data={},attributID=256*e[4]+e[5],r.zclheader.attributID=n(attributID,4),138===cmdID&&(r.zclheader.alarm=1),10===cmdID|138===cmdID&&(index=7),1===cmdID&&(index=8,r.zclheader.status=e[6]),1026===clusterdID&0===attributID&&(r.data.temperature=d(256*e[index]+e[index+1],2)/100),1029===clusterdID&0===attributID&&(r.data.humidity=(256*e[index]+e[index+1])/100),15===clusterdID&1026===attributID&&(r.data.counter=256*e[index]*256*256+256*e[index+1]*256+256*e[index+2]+e[index+3]),15===clusterdID&85===attributID&&(r.data.pin_state=!!e[index]),19===clusterdID&85===attributID&&(r.data.value=e[index]),6===clusterdID&0===attributID&&(state=e[index],1===state?r.data.state="ON":r.data.state="OFF"),32776===clusterdID&0===attributID&&(r.data.differential_pressure=256*e[index]+e[index+1]),32773===clusterdID&0===attributID&&(r.data.pin_state_1=1==(1&e[index+1]),r.data.pin_state_2=2==(2&e[index+1]),r.data.pin_state_3=4==(4&e[index+1]),r.data.pin_state_4=8==(8&e[index+1]),r.data.pin_state_5=16==(16&e[index+1]),r.data.pin_state_6=32==(32&e[index+1]),r.data.pin_state_7=64==(64&e[index+1]),r.data.pin_state_8=128==(128&e[index+1]),r.data.pin_state_9=1==(1&e[index]),r.data.pin_state_10=2==(2&e[index])),12===clusterdID&85===attributID&&(r.data.analog=a(256*e[index]*256*256+256*e[index+1]*256+256*e[index+2]+e[index+3])),32775===clusterdID&1===attributID)for(r.data.payload="",r.data.modbus_payload="",r.data.size=e[index],r.data.modbus_float=0,_=0;_<r.data.size;_++)1==(u=e[index+_+1].toString(16).toUpperCase()).length&&(u="0"+u),r.data.payload+=u,0==_?r.data.modbus_address=e[index+_+1]:1==_?r.data.modbus_commandID=e[index+_+1]:2==_?r.data.modbus_size=e[index+_+1]:(r.data.modbus_payload+=u,1==r.data.modbus_float&&(3==_&&(r.data.fregister_00=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),7==_&&(r.data.fregister_01=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),11==_&&(r.data.fregister_02=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),15==_&&(r.data.fregister_03=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),19==_&&(r.data.fregister_04=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),23==_&&(r.data.fregister_05=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),27==_&&(r.data.fregister_06=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),31==_&&(r.data.fregister_07=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),35==_&&(r.data.fregister_08=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3])),35==_&&(r.data.fregister_09=a(256*e[index+_+1]*256*256+256*e[index+_+1+1]*256+256*e[index+_+1+2]+e[index+_+1+3]))),2==r.data.modbus_float&&(3==_&&(r.data.fregister_00=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),7==_&&(r.data.fregister_01=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),11==_&&(r.data.fregister_02=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),15==_&&(r.data.fregister_03=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),19==_&&(r.data.fregister_04=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),23==_&&(r.data.fregister_05=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),27==_&&(r.data.fregister_06=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),31==_&&(r.data.fregister_07=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),35==_&&(r.data.fregister_08=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256)),35==_&&(r.data.fregister_09=a(256*e[index+_+1]+e[index+_+1+1]+256*e[index+_+1+2]*256*256+256*e[index+_+1+3]*256))));if(32777===clusterdID&0===attributID){if(r.data.payloads="",r.data.size=e[index],r.data.multimodbus_frame_series_sent=e[index+1],r.data.multimodbus_frame_number_in_serie=(224&e[index+2])>>5,r.data.multimodbus_last_frame_of_serie=(28&e[index+2])>>2,r.data.multimodbus_EP9=1==(1&e[index+2]),r.data.multimodbus_EP8=2==(2&e[index+2]),r.data.multimodbus_EP7=128==(128&e[index+3]),r.data.multimodbus_EP6=64==(64&e[index+3]),r.data.multimodbus_EP5=32==(32&e[index+3]),r.data.multimodbus_EP4=16==(16&e[index+3]),r.data.multimodbus_EP3=8==(8&e[index+3]),r.data.multimodbus_EP2=4==(4&e[index+3]),r.data.multimodbus_EP1=2==(2&e[index+3]),r.data.multimodbus_EP0=1==(1&e[index+3]),index2=index+4,without_header=0,!0===r.data.multimodbus_EP0){if(0===without_header&&(r.data.multimodbus_EP0_slaveID=e[index2],index2+=1,r.data.multimodbus_EP0_fnctID=e[index2],index2+=1,r.data.multimodbus_EP0_datasize=e[index2],index2+=1),r.data.multimodbus_EP0_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP0_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP0_payload+=u;index2+=r.data.multimodbus_EP0_datasize}if(!0===r.data.multimodbus_EP1){if(0===without_header&&(r.data.multimodbus_EP1_slaveID=e[index2],index2+=1,r.data.multimodbus_EP1_fnctID=e[index2],index2+=1,r.data.multimodbus_EP1_datasize=e[index2],index2+=1),r.data.multimodbus_EP1_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP1_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP1_payload+=u;index2+=r.data.multimodbus_EP1_datasize}if(!0===r.data.multimodbus_EP2){if(0===without_header&&(r.data.multimodbus_EP2_slaveID=e[index2],index2+=1,r.data.multimodbus_EP2_fnctID=e[index2],index2+=1,r.data.multimodbus_EP2_datasize=e[index2],index2+=1),r.data.multimodbus_EP2_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP2_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP2_payload+=u;index2+=r.data.multimodbus_EP2_datasize}if(!0===r.data.multimodbus_EP3){if(0===without_header&&(r.data.multimodbus_EP3_slaveID=e[index2],index2+=1,r.data.multimodbus_EP3_fnctID=e[index2],index2+=1,r.data.multimodbus_EP3_datasize=e[index2],index2+=1),r.data.multimodbus_EP3_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP3_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP3_payload+=u;index2+=r.data.multimodbus_EP3_datasize}if(!0===r.data.multimodbus_EP4){if(0===without_header&&(r.data.multimodbus_EP4_slaveID=e[index2],index2+=1,r.data.multimodbus_EP4_fnctID=e[index2],index2+=1,r.data.multimodbus_EP4_datasize=e[index2],index2+=1),r.data.multimodbus_EP4_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP4_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP4_payload+=u;index2+=r.data.multimodbus_EP4_datasize}if(!0===r.data.multimodbus_EP5){if(0===without_header&&(r.data.multimodbus_EP5_slaveID=e[index2],index2+=1,r.data.multimodbus_EP5_fnctID=e[index2],index2+=1,r.data.multimodbus_EP5_datasize=e[index2],index2+=1),r.data.multimodbus_EP5_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP5_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP5_payload+=u;index2+=r.data.multimodbus_EP5_datasize}if(!0===r.data.multimodbus_EP6){if(0===without_header&&(r.data.multimodbus_EP6_slaveID=e[index2],index2+=1,r.data.multimodbus_EP6_fnctID=e[index2],index2+=1,r.data.multimodbus_EP6_datasize=e[index2],index2+=1),r.data.multimodbus_EP6_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP6_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP6_payload+=u;index2+=r.data.multimodbus_EP6_datasize}if(!0===r.data.multimodbus_EP7){if(0===without_header&&(r.data.multimodbus_EP7_slaveID=e[index2],index2+=1,r.data.multimodbus_EP7_fnctID=e[index2],index2+=1,r.data.multimodbus_EP7_datasize=e[index2],index2+=1),r.data.multimodbus_EP7_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP7_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP7_payload+=u;index2+=r.data.multimodbus_EP7_datasize}if(!0===r.data.multimodbus_EP8){if(0===without_header&&(r.data.multimodbus_EP8_slaveID=e[index2],index2+=1,r.data.multimodbus_EP8_fnctID=e[index2],index2+=1,r.data.multimodbus_EP8_datasize=e[index2],index2+=1),r.data.multimodbus_EP8_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP8_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP8_payload+=u;index2+=r.data.multimodbus_EP8_datasize}if(!0===r.data.multimodbus_EP9){if(0===without_header&&(r.data.multimodbus_EP6_slaveID=e[index2],index2+=1,r.data.multimodbus_EP6_fnctID=e[index2],index2+=1,r.data.multimodbus_EP6_datasize=e[index2],index2+=1),r.data.multimodbus_EP6_payload="",void 0===e[index2])return r;for(_=0;_<r.data.multimodbus_EP6_datasize;_++)1==(u=e[index2+_].toString(16).toUpperCase()).length&&(u="0"+u),r.data.multimodbus_EP6_payload+=u;index2+=r.data.multimodbus_EP6_datasize}}82===clusterdID&0===attributID&&(r.data.active_energy_Wh=d(256*e[index+1]*256+256*e[index+2]+e[index+3],3),r.data.reactive_energy_Varh=d(256*e[index+4]*256+256*e[index+5]+e[index+6],3),r.data.nb_samples=256*e[index+7]+e[index+8],r.data.active_power_W=d(256*e[index+9]+e[index+10],2),r.data.reactive_power_VAR=d(256*e[index+11]+e[index+12],2)),32772===clusterdID&0===attributID&&(1===e[index]&&(r.data.message_type="confirmed"),0===e[index]&&(r.data.message_type="unconfirmed")),32772===clusterdID&1===attributID&&(r.data.nb_retry=e[index]),32772===clusterdID&2===attributID&&(r.data.period_in_minutes=256*e[index+1]+e[index+2],r.data.nb_err_frames=256*e[index+3]+e[index+4]),80===clusterdID&6===attributID&&(index2=index+3,1==(1&e[index+2])&&(r.data.main_or_external_voltage=(256*e[index2]+e[index2+1])/1e3,index2+=2),2==(2&e[index+2])&&(r.data.rechargeable_battery_voltage=(256*e[index2]+e[index2+1])/1e3,index2+=2),4==(4&e[index+2])&&(r.data.disposable_battery_voltage=(256*e[index2]+e[index2+1])/1e3,index2+=2),8==(8&e[index+2])&&(r.data.solar_harvesting_voltage=(256*e[index2]+e[index2+1])/1e3,index2+=2),16==(16&e[index+2])&&(r.data.tic_harvesting_voltage=(256*e[index2]+e[index2+1])/1e3,index2+=2)),32778===clusterdID&0===attributID&&(index2=index,r.data.sum_positive_active_energy_Wh=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.sum_negative_active_energy_Wh=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.sum_positive_reactive_energy_Wh=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.sum_negative_reactive_energy_Wh=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.positive_active_power_W=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.negative_active_power_W=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.positive_reactive_power_W=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4),index2+=4,r.data.negative_reactive_power_W=d(256*e[index2+1]*256*256+256*e[index2+2]*256+256*e[index2+3]+e[index2+4],4)),32784===clusterdID&0===attributID?(r.data.ActiveEnergyWhPhaseA=Int32UnsignedToSigned(256*e[index+1]*256*256+256*e[index+2]*256+256*e[index+3]+e[index+4]),r.data.ReactiveEnergyWhPhaseA=Int32UnsignedToSigned(256*e[index+5]*256*256+256*e[index+6]*256+256*e[index+7]+e[index+8]),r.data.ActiveEnergyWhPhaseB=Int32UnsignedToSigned(256*e[index+9]*256*256+256*e[index+10]*256+256*e[index+11]+e[index+12]),r.data.ReactiveEnergyWhPhaseB=Int32UnsignedToSigned(256*e[index+13]*256*256+256*e[index+14]*256+256*e[index+15]+e[index+16]),r.data.ActiveEnergyWhPhaseC=Int32UnsignedToSigned(256*e[index+17]*256*256+256*e[index+18]*256+256*e[index+19]+e[index+20]),r.data.ReactiveEnergyWhPhaseC=Int32UnsignedToSigned(256*e[index+21]*256*256+256*e[index+22]*256+256*e[index+23]+e[index+24]),r.data.ActiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*e[index+25]*256*256+256*e[index+26]*256+256*e[index+27]+e[index+28]),r.data.ReactiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*e[index+29]*256*256+256*e[index+30]*256+256*e[index+31]+e[index+32])):32784===clusterdID&1===attributID&&(r.data.ActivePowerWPhaseA=Int32UnsignedToSigned(256*e[index+1]*256*256+256*e[index+2]*256+256*e[index+3]+e[index+4]),r.data.ReactivePowerWPhaseA=Int32UnsignedToSigned(256*e[index+5]*256*256+256*e[index+6]*256+256*e[index+7]+e[index+8]),r.data.ActivePowerWPhaseB=Int32UnsignedToSigned(256*e[index+9]*256*256+256*e[index+10]*256+256*e[index+11]+e[index+12]),r.data.ReactivePowerWPhaseB=Int32UnsignedToSigned(256*e[index+13]*256*256+256*e[index+14]*256+256*e[index+15]+e[index+16]),r.data.ActivePowerWPhaseC=Int32UnsignedToSigned(256*e[index+17]*256*256+256*e[index+18]*256+256*e[index+19]+e[index+20]),r.data.ReactivePowerWPhaseC=Int32UnsignedToSigned(256*e[index+21]*256*256+256*e[index+22]*256+256*e[index+23]+e[index+24]),r.data.ActivePowerWPhaseABC=Int32UnsignedToSigned(256*e[index+25]*256*256+256*e[index+26]*256+256*e[index+27]+e[index+28]),r.data.ReactivePowerWPhaseABC=Int32UnsignedToSigned(256*e[index+29]*256*256+256*e[index+30]*256+256*e[index+31]+e[index+32])),32779===clusterdID&0===attributID&&(index2=index,r.data.Vrms=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Irms=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.phase_angle=d(256*e[index2+1]+e[index2+2],2)),32781===clusterdID&0===attributID&&(r.data.VrmsA=d(256*e[index+1]+e[index+2],2)/10,r.data.IrmsA=d(256*e[index+3]+e[index+4],2)/10,r.data.PhaseA=d(256*e[index+5]+e[index+6],2),r.data.VrmsB=d(256*e[index+7]+e[index+8],2)/10,r.data.IrmsB=d(256*e[index+9]+e[index+10],2)/10,r.data.PhaseB=d(256*e[index+11]+e[index+12],2),r.data.VrmsC=d(256*e[index+13]+e[index+14],2)/10,r.data.IrmsC=d(256*e[index+15]+e[index+16],2)/10,r.data.PhaseC=d(256*e[index+17]+e[index+18],2)),32780===clusterdID&0===attributID&&(r.data.Concentration=256*e[index]+e[index+1]),1024===clusterdID&0===attributID&&(r.data.Illuminance=256*e[index]+e[index+1]),1027===clusterdID&0===attributID&&(r.data.Pressure=d(256*e[index]+e[index+1],2)),1030===clusterdID&0===attributID&&(r.data.Occupancy=!!e[index]),32850===clusterdID&0===attributID&&(index2=index,r.data.frequency=(d(256*e[index2+1]+e[index2+2],2)+22232)/1e3,index2+=2,r.data.frequency_min=(d(256*e[index2+1]+e[index2+2],2)+22232)/1e3,index2+=2,r.data.frequency_max=(d(256*e[index2+1]+e[index2+2],2)+22232)/1e3,index2+=2,r.data.Vrms=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Vrms_min=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Vrms_max=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Vpeak=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Vpeak_min=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.Vpeak_max=d(256*e[index2+1]+e[index2+2],2)/10,index2+=2,r.data.over_voltage=d(256*e[index2+1]+e[index2+2],2),index2+=2,r.data.sag_voltage=d(256*e[index2+1]+e[index2+2],2)),32783===clusterdID&&(i=index+1,0===attributID?(o=r.data.Last={},o.NbTriggedAcq=t(e,i,"U32"),i+=4,o.Mean_X_G=t(e,i,"U16")/100,i+=2,o.Max_X_G=t(e,i,"U16")/100,i+=2,o.Dt_X_ms=t(e,i,"U16"),i+=2,o.Mean_Y_G=t(e,i,"U16")/100,i+=2,o.Max_Y_G=t(e,i,"U16")/100,i+=2,o.Dt_Y_ms=t(e,i,"U16"),i+=2,o.Mean_Z_G=t(e,i,"U16")/100,i+=2,o.Max_Z_G=t(e,i,"U16")/100,i+=2,o.Dt_Z_ms=t(e,i,"U16")):1===attributID||2===attributID||3===attributID?(ext=1===attributID?"Stats_X":2===attributID?"Stats_Y":"Stats_Z",o=r.data[ext]={},o.NbAcq=t(e,i,"U16"),i+=2,o.MinMean_G=t(e,i,"U16")/100,i+=2,o.MinMax_G=t(e,i,"U16")/100,i+=2,o.MinDt=t(e,i,"U16"),i+=2,o.MeanMean_G=t(e,i,"U16")/100,i+=2,o.MeanMax_G=t(e,i,"U16")/100,i+=2,o.MeanDt=t(e,i,"U16"),i+=2,o.MaxMean_G=t(e,i,"U16")/100,i+=2,o.MaxMax_G=t(e,i,"U16")/100,i+=2,o.MaxDt=t(e,i,"U16"),i+=2):32768===attributID&&(o=r.data.Params={},o.WaitFreq_Hz=t(e,i,"U16")/10,i+=2,o.AcqFreq_Hz=t(e,i,"U16")/10,i+=2,delay=t(e,i,"U16"),i+=2,32768&delay&&(delay=60*(-32769&delay)),o.NewWaitDelay_s=32768&delay?delay=60*(-32769&delay):delay,o.MaxAcqDuration_ms=t(e,i,"U16"),i+=2,o.Threshold_X_G=t(e,i,"U16")/100,i+=2,o.Threshold_Y_G=t(e,i,"U16")/100,i+=2,o.Threshold_Z_G=t(e,i,"U16")/100,i+=2,o.OverThrsh_Dt_ms=t(e,i,"U16"),i+=2,o.UnderThrsh_Dt_ms=t(e,i,"U16"),i+=2,o.Range_G=t(e,i,"U16")/100,i+=2,o.FilterSmoothCoef=t(e,i,"U8"),i+=1,o.FilterGainCoef=t(e,i,"U8"),i+=1,o=r.data.Params.WorkingModes={},o.SignalEachAcq=128&e[i]?"true":"false",o.RstAftStdRpt_X=1&e[i]?"true":"false",o.RstAftStdRpt_Y=2&e[i]?"true":"false",o.RstAftStdRpt_7=4&e[i]?"true":"false"))}7===cmdID&&(attributID=256*e[6]+e[7],r.zclheader.attributID=n(attributID,4),r.zclheader.status=e[4],r.zclheader.batch=e[5]),9===cmdID&&(attributID=256*e[6]+e[7],r.zclheader.attributID=n(attributID,4),r.zclheader.status=e[4],r.zclheader.batch=e[5],r.zclheader.attribut_type=e[8],r.zclheader.min={},128==(128&e[9])?(r.zclheader.min.value=256*(e[9]-128)+e[10],r.zclheader.min.unity="minutes"):(r.zclheader.min.value=256*e[9]+e[10],r.zclheader.min.unity="seconds"),r.zclheader.max={},128==(128&e[11])?(r.zclheader.max.value=256*(e[11]-128)+e[12],r.zclheader.max.unity="minutes"):(r.zclheader.max.value=256*e[11]+e[12],r.zclheader.max.unity="seconds"),r.lora.payload="")}else r.batch={},r.batch.report="batch";return r}e.exports={Decoder:x,normalisation:function(e,d){let i=x(e.bytes,e.fPort);if(void 0!==i.zclheader){let e=i.zclheader.endpoint,a=Object.keys(i.data)[0];return{data:{variable:d[a][e],value:i.data[a],date:i.lora.date},type:"standard"}}return{type:i.batch.report,payload:i.lora.payload}}}}},a={};function t(e){var i=a[e];if(void 0!==i)return i.exports;var n=a[e]={exports:{}};return d[e](n,n.exports,t),n.exports}t.m=d,e=[],t.O=(d,i,a,n)=>{if(!i){var x=1/0;for(o=0;o<e.length;o++){for(var[i,a,n]=e[o],r=!0,s=0;s<i.length;s++)(!1&n||x>=n)&&Object.keys(t.O).every((e=>t.O[e](i[s])))?i.splice(s--,1):(r=!1,n<x&&(x=n));if(r){e.splice(o--,1);var u=a();void 0!==u&&(d=u)}}return d}n=n||0;for(var o=e.length;o>0&&e[o-1][2]>n;o--)e[o]=e[o-1];e[o]=[i,a,n]},t.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={961:0};t.O.j=d=>0===e[d];var d=(d,i)=>{var a,n,[x,r,s]=i,u=0;if(x.some((d=>0!==e[d]))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(s)var o=s(t)}for(d&&d(i);u<x.length;u++)n=x[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(o)},i=self.webpackChunklorawan=self.webpackChunklorawan||[];i.forEach(d.bind(null,0)),i.push=d.bind(null,i.push.bind(i))})();var n=t(942);n=t.O(n)})();
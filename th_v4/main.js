var driver;(()=>{var t={971:t=>{let e=6,a=10,l=12,s={0:0,1:1,2:4,3:4,4:8,5:8};s[e]=16,s[7]=16,s[8]=24,s[9]=24,s[a]=32,s[11]=32,s[l]=32;let d=14,i=[[{sz:2,lbl:0},{sz:2,lbl:1},{sz:2,lbl:3},{sz:3,lbl:5},{sz:4,lbl:9},{sz:5,lbl:17},{sz:6,lbl:33},{sz:7,lbl:65},{sz:8,lbl:129},{sz:10,lbl:512},{sz:11,lbl:1026},{sz:11,lbl:1027},{sz:11,lbl:1028},{sz:11,lbl:1029},{sz:11,lbl:1030},{sz:11,lbl:1031}],[{sz:7,lbl:111},{sz:5,lbl:26},{sz:4,lbl:12},{sz:3,lbl:3},{sz:3,lbl:7},{sz:2,lbl:2},{sz:2,lbl:0},{sz:3,lbl:2},{sz:6,lbl:54},{sz:9,lbl:443},{sz:9,lbl:441},{sz:10,lbl:885},{sz:10,lbl:884},{sz:10,lbl:880},{sz:11,lbl:1763},{sz:11,lbl:1762}],[{sz:4,lbl:9},{sz:3,lbl:5},{sz:2,lbl:0},{sz:2,lbl:1},{sz:2,lbl:3},{sz:5,lbl:17},{sz:6,lbl:33},{sz:7,lbl:65},{sz:8,lbl:129},{sz:10,lbl:512},{sz:11,lbl:1026},{sz:11,lbl:1027},{sz:11,lbl:1028},{sz:11,lbl:1029},{sz:11,lbl:1030},{sz:11,lbl:1031}]];function r(t,e,a,l){return{uncompressSamples:[{data_relative_timestamp:l,data:{value:m(t,e),label:a}}],codingType:0,codingTable:0,resolution:null}}function n(t,e){for(let a=0;a<t.length;a++)if(t[a].taglbl===e.lbl)return a;throw new Error("Batch : Cannot find i1 in argList")}function o(t,e){if(e){let a=t.getNextBifromHi(1);return u(t,e,a)}return t.getNextSample(a)}function u(t,e,l){return l>d?t.getNextSample(a):l>0?function(t,e,l){return t.getNextSample(a,l)+e+Math.pow(2,l)-1}(t,e,l):e}function m(t,e){let a=t.getNextSample(e);return e===l?function(t){let e=2147483648&t?-1:1,a=(t>>23&255)-127,l=8388607&t;if(128===a)return e*(l?Number.NaN:Number.POSITIVE_INFINITY);if(-127===a){if(0===l)return 0*e;a=-126,l/=1<<22}else l=(l|1<<23)/(1<<23);return e*l*Math.pow(2,a)}(a):a}function _(t,a,l,s,d){let i=t.getNextSample(e,d);return 0===l?function(t,e,a,l){return t>=Math.pow(2,l-1)?t*e+a:(t+1-Math.pow(2,l))*e+a}(i,s,a,d):1===l?(i+Math.pow(2,d)-1)*s+a:a-(i+(Math.pow(2,d)-1))*s}Math.trunc=Math.trunc||function(t){return isNaN(t)?NaN:t>0?Math.floor(t):Math.ceil(t)},t.exports={normalisation_batch:function(t){let e=t.date,m=function(t,e,m,p){let c=function(){let t=[],e=0;for(;e<16;)t.push({codingType:0,codingTable:0,resolution:null,uncompressSamples:[]}),e+=1;return{batch_counter:0,batch_relative_timestamp:0,series:t}}(),b=function(t){function e(t,e,a){let l=e,s=a-1;if(8*t.length<l+a)throw new Error("Batch : Verify that dest buf is large enough");let d=0,i=0;for(;a>0;)t[l>>3]&1<<(7&l)&&(i|=1<<s-d),a--,d++,l++;return i}return{i1:0,byteArray:t,getNextSample:function(t,e){let a=e||s[t],d=this.i1;if(this.i1+=a,t===l&&32!==a)throw new Error("Batch : Mauvais sampletype");let i=0,r=Math.trunc((a-1)/8)+1,n=a%8;for(0===n&&r>0&&(n=8);r>0;){let t=0;for(;n>0;){let e=d>>3;this.byteArray[e]&1<<(7&d)&&(i|=1<<8*(r-1)+t),n--,t++,d+=1}r--,n=8}if((3==t||5==t||7==t||9==t)&&i&1<<a-1)for(let t=a;t<32;t++)i|=1<<t,a++;return i},getNextBifromHi:function(t){for(let a=2;a<12;a++){let l=e(this.byteArray,this.i1,a);for(let e=0;e<i[t].length;e++)if(i[t][e].sz==a&&l==i[t][e].lbl)return this.i1+=a,e}throw new Error("Bi not found in HUFF table")}}}(function(t){for(var e=[];t.length>=2;)e.push(parseInt(t.substring(0,2),16)),t=t.substring(2,t.length);return e}(m)),f=function(t){let e=t.toString(2);for(;e.length<8;)e="0"+e;return{isCommonTimestamp:parseInt(e[e.length-2],2),hasSample:!parseInt(e[e.length-3],2),batch_req:parseInt(e[e.length-4],2),nb_of_type_measure:parseInt(e.substring(0,4),2)}}(b.getNextSample(4));c.batch_counter=b.getNextSample(4,3),b.getNextSample(4,1);let g=function(t,e,a,l,s){let d=0,i=0;for(let u=0;u<l.nb_of_type_measure;u++){let m={size:s,lbl:e.getNextSample(4,s)},_=n(a,m);0===u&&(i=_),d=o(e,d),t.series[_]=r(e,a[_].sampletype,m.lbl,d),l.hasSample&&(t.series[_].codingType=e.getNextSample(4,2),t.series[_].codingTable=e.getNextSample(4,2))}return{last_timestamp:d,i1_of_the_first_sample:i}}(c,b,e,f,t),h=g.last_timestamp,v=g.i1_of_the_first_sample;return f.hasSample&&(h=function(t,e,l,s,i,r,o){return r.isCommonTimestamp?function(t,e,l,s,i,r){let o=e.getNextSample(4,8),u={},m=function(t,e,l,s){let i=[],r=0,n=e.getNextSample(4,2);for(let o=0;o<l;o++){let l=e.getNextBifromHi(n);if(l<=d)if(0===o)i.push(t.series[s].uncompressSamples[0].data_relative_timestamp);else if(l>0){let t=i[o-1];i.push(e.getNextSample(a,l)+t+Math.pow(2,l)-1)}else i.push(precedingTimestamp);else i.push(e.getNextSample(a));r=i[o]}return{timestampCommon:i,lastTimestamp:r}}(t,e,o,l),p=m.timestampCommon,c=m.lastTimestamp;for(let a=0;a<i.nb_of_type_measure;a++){let a=1;u.lbl=e.getNextSample(4,r);let l=n(s,u);for(let i=0;i<o;i++)if(e.getNextSample(4,1)){let r=e.getNextBifromHi(t.series[l].codingTable),n={data_relative_timestamp:0,data:{}};if(r<=d){let d=t.series[l].uncompressSamples[t.series[l].uncompressSamples.length-1].data.value;if(r>0)n.data.value=_(e,d,t.series[l].codingType,s[l].resol,r);else{if(a){a=0;continue}n.data.value=d}}else n.data.value=e.getNextSample(s[l].sampletype);n.data_relative_timestamp=p[i],t.series[l].uncompressSamples.push(n)}}return c}(t,e,l,s,r,o):function(t,e,a,l,s,i){let r={};for(let o=0;o<s.nb_of_type_measure;o++){r.lbl=e.getNextSample(4,i);let s=n(a,r),o=e.getNextSample(4,8);if(o){let i=e.getNextSample(4,2);for(let r=0;r<o;r++){let r=t.series[s].uncompressSamples[t.series[s].uncompressSamples.length-1].data_relative_timestamp,n={data_relative_timestamp:0,data:{}},o=e.getNextBifromHi(i);if(n.data_relative_timestamp=u(e,r,o),n.data_relative_timestamp>l&&(l=n.data_relative_timestamp),o=e.getNextBifromHi(t.series[s].codingTable),o<=d){let l=t.series[s].uncompressSamples[t.series[s].uncompressSamples.length-1].data.value;n.data.value=o>0?_(e,l,t.series[s].codingType,a[s].resol,o):l}else n.data.value=e.getNextSample(a[s].sampletype);t.series[s].uncompressSamples.push(n)}}}return l}(t,e,s,i,r,o)}(c,b,v,e,h,f,t)),c.batch_relative_timestamp=o(b,h),function(t,e,a){let l={batch_counter:t.batch_counter,batch_relative_timestamp:t.batch_relative_timestamp};return a&&(l.batch_absolute_timestamp=a),l.dataset=t.series.reduce((function(l,s,d){return l.concat(s.uncompressSamples.map((function(l){let s={data_relative_timestamp:l.data_relative_timestamp,data:{value:e[d].divide?l.data.value/e[d].divide:l.data.value,label:e[d].taglbl}};var i,r,n;return e[d].lblname&&(s.data.label_name=e[d].lblname),a&&(s.data_absolute_timestamp=(i=a,r=t.batch_relative_timestamp,n=l.data_relative_timestamp,new Date(new Date(i)-1e3*(r-n)).toISOString())),s})))}),[]),l}(c,e,p)}(t.batch1,t.batch2,t.payload,e);console.log(m);let p=[];for(let t=0;t<m.dataset.length;t++){let e=m.dataset[t],a={variable:e.data.label_name,value:e.data.value,date:e.data_absolute_timestamp};p.push(a)}return p}}},684:(t,e,a)=>{const l=a(263),s=a(971);t.exports={watteco_decodeUplink:function(t,e,a){t.bytes,t.fPort;let d=t.recvTime;try{let i=l.normalisation_standard(t,a),r=i.payload;if("batch"!==i.type)return{data:i.data,warnings:[i.warning]};{let t={batch1:e[0],batch2:e[1],payload:r,date:d};try{return{data:s.normalisation_batch(t),warnings:[""]}}catch(t){return{error:t.message,warnings:[""]}}}}catch(t){return{error:t.message,warnings:[""]}}}}},263:t=>{function e(t,e){return 2===e&&(32768&t)>0&&(t-=65536),3===e&&(8388608&t)>0&&(t-=16777216),4===e&&(2147483648&t)>0&&(t-=4294967296),t}function a(t){let e=2147483648&t?-1:1,a=(t>>23&255)-127,l=8388607&t;if(128===a)return e*(l?Number.NaN:Number.POSITIVE_INFINITY);if(-127===a){if(0===l)return 0;a=-126,l/=1<<23}else l=(l|1<<23)/(1<<23);return e*l*Math.pow(2,a)}function l(t,e,a,l){void 0===l&&(l=!1);let s,d,i="U"!=a.substr(0,1),r=parseInt(a.substr(1,2),10)/8,n=r;for(l?(s=-1,d=e+r-1):s=1,d=e,tmpInt64=0,j=d;n>0;j+=s,n--)tmpInt64=(tmpInt64<<8)+t[j];return i&&r<8&&128&t[d]&&(tmpInt64-=1<<8*r),tmpInt64}function s(t,e){let a=t.toString(16).toUpperCase();for(e=null==e?e=2:e;a.length<e;)a="0"+a;return"0x"+a}function d(t){var e="",a=t.toString(2);return e+(8,String(a).padStart(8,"0"))}function i(t,e,a,l,s,i){let r=0;for(;0===a;){let n=l[i+3+t*r];if(void 0===n){console.log(e),s.zclheader.alarmmess=e,a=1;break}let o=d(n);if("1"===o[3]&&"0"===o[4]){let t="threshold",a="";a="1"===o[1]?"exceed":"fall";let l=a+" "+t+" detected";e.push(l)}if("0"===o[3]&&"1"===o[4]){let t="delta triggered";e.push(t)}r+=1}}function r(t,e,a,l,s,i,r){let n=0,o=0,u=t,m=0,_=0;for(;0===a;){let p=l[i+3+t*n];if(void 0===p){console.log(e),s.zclheader.alarmmess=e,a=1;break}t!==u&&(t=u);let c=d(p);if("1"===c[3]&&"0"===c[4]){"1"===d(l[i+6+t*n])[0]&&(o=1,t+=2);let a="threshold",s="";"1"===c[1]?(s="exceed",m=d(l[i+7+t*n])+d(l[i+8+t*n]),m=parseInt(m,2),1===o&&(_=d(l[i+9+t*n])+d(l[i+10+t*n]),_=parseInt(_,2))):(s="fall",1===o?(m=d(l[i+7+t*n])+d(l[i+8+t*n]),m=parseInt(m,2),_=d(l[i+9+t*n])+d(l[i+10+t*n]),_=parseInt(_,2)):(_=d(l[i+7+t*n])+d(l[i+8+t*n]),_=parseInt(_,2)));let u=a+" "+s+" detected: value: "+((256*l[i+4+t*n]+l[i+5+t*n])/r).toString()+" count_up: "+m+", count_down: "+_;e.push(u),1===o&&(t-=2,o=0)}if("0"===c[3]&&"1"===c[4]){let a="delta triggered : "+((256*l[i+4+(t-=3)*n]+l[i+5+t*n])/r).toString();e.push(a)}n+=1}}t.exports={normalisation_standard:function(t,n){let o="",u=t.bytes;console.log(t);let m=function(t,n){let o={lora:{}};o.lora.port=n;let u=t.length,m="";o.lora.payload="";for(let e=0;e<u;e++){m=t[e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.lora.payload+=m;let a=new Date;o.lora.date=a.toISOString()}if(125===n)if(0==!(1&t[0])){o.zclheader={},o.zclheader.report="standard";let n=-1,u=-1,_=-1;if(o.zclheader.endpoint=(224&t[0])>>5|(6&t[0])<<2,u=t[1],o.zclheader.cmdID=s(u,2),_=256*t[2]+t[3],o.zclheader.clustID=s(_,4),10===u|138===u|1===u){o.data={},n=256*t[4]+t[5],o.zclheader.attID=s(n,4);let p=0;if(10!==u&&138!==u||(p=7),138===u&&(o.zclheader.alarm=1),1===u&&(p=8,o.zclheader.status=t[6]),1026===_&&0===n&&(o.data.temperature=e(256*t[p]+t[p+1],2)/100,138===u)){let e="",a=[],l=0,s=100;void 0===t[p+2]?(e="none",console.log("je suis dans le test undefined")):(e=d(t[p+2]),console.log("je suis dans le test defined")),"none"===e&&(a.push("alarm triggered"),o.zclheader.alarmmess=a),"0"===e[2]&&"1"===e[3]&&i(1,a,l,t,o,p),"1"===e[2]&&"0"===e[3]&&r(6,a,l,t,o,p,s)}if(1029===_&&0===n&&(o.data.humidity=(256*t[p]+t[p+1])/100,138===u)){void 0!==t[p+2]&&d(t[p+2]);let e=[],a=0,l=100,s="";void 0===t[p+2]?(s="none",console.log("je suis dans le test undefined")):(s=d(t[p+2]),console.log("je suis dans le test defined")),"none"===s&&(e.push("alarm triggered"),o.zclheader.alarmmess=e),"0"===s[2]&&"1"===s[3]&&i(1,e,a,t,o,p),"1"===s[2]&&"0"===s[3]&&r(6,e,a,t,o,p,l)}if(15===_&&1026===n&&(o.data.counter=256*t[p]*256*256+256*t[p+1]*256+256*t[p+2]+t[p+3]),15===_&&85===n&&(o.data.pin_state=!!t[p]),19===_&&85===n&&(o.data.value=t[p]),6===_&&0===n){let e=t[p];o.data.state=1===e?"ON":"OFF"}if(32776===_&&0===n&&(o.data.differential_pressure=256*t[p]+t[p+1]),32773===_&&0===n&&(o.data.pin_state_1=1==(1&t[p+1]),o.data.pin_state_2=2==(2&t[p+1]),o.data.pin_state_3=4==(4&t[p+1]),o.data.pin_state_4=8==(8&t[p+1]),o.data.pin_state_5=16==(16&t[p+1]),o.data.pin_state_6=32==(32&t[p+1]),o.data.pin_state_7=64==(64&t[p+1]),o.data.pin_state_8=128==(128&t[p+1]),o.data.pin_state_9=1==(1&t[p]),o.data.pin_state_10=2==(2&t[p])),12===_&&85===n&&(o.data.analog=a(256*t[p]*256*256+256*t[p+1]*256+256*t[p+2]+t[p+3]),138===u)){void 0!==t[p+2]&&d(t[p+2]);let e=[],a=0,l=1,s="";void 0===t[p+2]?(s="none",console.log("je suis dans le test undefined")):(s=d(t[p+2]),console.log("je suis dans le test defined")),"none"===s&&(e.push("alarm triggered"),o.zclheader.alarmmess=e),"0"===s[2]&&"1"===s[3]&&i(1,e,a,t,o,p),"1"===s[2]&&"0"===s[3]&&r(8,e,a,t,o,p,l)}if(32775===_&&1===n){o.data.payload="",o.data.modbus_payload="",o.data.size=t[p],o.data.modbus_float=0;for(let e=0;e<o.data.size;e++)if(m=t[p+e+1].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.payload+=m,0===e)o.data.modbus_address=t[p+e+1];else if(1===e)o.data.modbus_commandID=t[p+e+1];else if(2===e)o.data.modbus_size=t[p+e+1];else{if(o.data.modbus_payload+=m,1===o.data.modbus_float){let l=a(256*t[p+e+1]*256*256+256*t[p+e+1+1]*256+256*t[p+e+1+2]+t[p+e+1+3]);3===e&&(o.data.fregister_00=l),7===e&&(o.data.fregister_01=l),11===e&&(o.data.fregister_02=l),15===e&&(o.data.fregister_03=l),19===e&&(o.data.fregister_04=l),23===e&&(o.data.fregister_05=l),27===e&&(o.data.fregister_06=l),31===e&&(o.data.fregister_07=l),35===e&&(o.data.fregister_08=l),35===e&&(o.data.fregister_09=l)}if(2===o.data.modbus_float){let l=a(256*t[p+e+1]+t[p+e+1+1]+256*t[p+e+1+2]*256*256+256*t[p+e+1+3]*256);3===e&&(o.data.fregister_00=l),7===e&&(o.data.fregister_01=l),11===e&&(o.data.fregister_02=l),15===e&&(o.data.fregister_03=l),19===e&&(o.data.fregister_04=l),23===e&&(o.data.fregister_05=l),27===e&&(o.data.fregister_06=l),31===e&&(o.data.fregister_07=l),35===e&&(o.data.fregister_08=l),35===e&&(o.data.fregister_09=l)}}}if(32777===_&&0===n){let e=t[p+2],a=t[p+3];o.data.payloads="",o.data.size=t[p],o.data.multimodbus_frame_series_sent=t[p+1],o.data.multimodbus_frame_number_in_serie=(224&e)>>5,o.data.multimodbus_last_frame_of_serie=(28&e)>>2,o.data.multimodbus_EP9=1==(1&e),o.data.multimodbus_EP8=2==(2&e),o.data.multimodbus_EP7=128==(128&a),o.data.multimodbus_EP6=64==(64&a),o.data.multimodbus_EP5=32==(32&a),o.data.multimodbus_EP4=16==(16&a),o.data.multimodbus_EP3=8==(8&a),o.data.multimodbus_EP2=4==(4&a),o.data.multimodbus_EP1=2==(2&a),o.data.multimodbus_EP0=1==(1&a);let l=p+4;if(without_header=0,!0===o.data.multimodbus_EP0){if(0===without_header&&(o.data.multimodbus_EP0_slaveID=t[l],o.data.multimodbus_EP0_fnctID=t[l+1],o.data.multimodbus_EP0_datasize=t[l+2],l+=3),o.data.multimodbus_EP0_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP0_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP0_payload+=m;l+=o.data.multimodbus_EP0_datasize}if(!0===o.data.multimodbus_EP1){if(0===without_header&&(o.data.multimodbus_EP1_slaveID=t[l],o.data.multimodbus_EP1_fnctID=t[l+1],o.data.multimodbus_EP1_datasize=t[l+2],l+=3),o.data.multimodbus_EP1_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP1_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP1_payload+=m;l+=o.data.multimodbus_EP1_datasize}if(!0===o.data.multimodbus_EP2){if(0===without_header&&(o.data.multimodbus_EP2_slaveID=t[l],o.data.multimodbus_EP2_fnctID=t[l+1],o.data.multimodbus_EP2_datasize=t[l+2],l+=3),o.data.multimodbus_EP2_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP2_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP2_payload+=m;l+=o.data.multimodbus_EP2_datasize}if(!0===o.data.multimodbus_EP3){if(0===without_header&&(o.data.multimodbus_EP3_slaveID=t[l],o.data.multimodbus_EP3_fnctID=t[l+1],o.data.multimodbus_EP3_datasize=t[l+2],l+=3),o.data.multimodbus_EP3_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP3_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP3_payload+=m;l+=o.data.multimodbus_EP3_datasize}if(!0===o.data.multimodbus_EP4){if(0===without_header&&(o.data.multimodbus_EP4_slaveID=t[l],o.data.multimodbus_EP4_fnctID=t[l+1],o.data.multimodbus_EP4_datasize=t[l+2],l+=3),o.data.multimodbus_EP4_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP4_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP4_payload+=m;l+=o.data.multimodbus_EP4_datasize}if(!0===o.data.multimodbus_EP5){if(0===without_header&&(o.data.multimodbus_EP5_slaveID=t[l],o.data.multimodbus_EP5_fnctID=t[l+1],o.data.multimodbus_EP5_datasize=t[l+2],l+=3),o.data.multimodbus_EP5_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP5_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP5_payload+=m;l+=o.data.multimodbus_EP5_datasize}if(!0===o.data.multimodbus_EP6){if(0===without_header&&(o.data.multimodbus_EP6_slaveID=t[l],o.data.multimodbus_EP6_fnctID=t[l+1],o.data.multimodbus_EP6_datasize=t[l+2],l+=3),o.data.multimodbus_EP6_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP6_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP6_payload+=m;l+=o.data.multimodbus_EP6_datasize}if(!0===o.data.multimodbus_EP7){if(0===without_header&&(o.data.multimodbus_EP7_slaveID=t[l],o.data.multimodbus_EP7_fnctID=t[l+1],o.data.multimodbus_EP7_datasize=t[l+2],l+=3),o.data.multimodbus_EP7_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP7_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP7_payload+=m;l+=o.data.multimodbus_EP7_datasize}if(!0===o.data.multimodbus_EP8){if(0===without_header&&(o.data.multimodbus_EP8_slaveID=t[l],o.data.multimodbus_EP8_fnctID=t[l+1],o.data.multimodbus_EP8_datasize=t[l+2],l+=3),o.data.multimodbus_EP8_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP8_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP8_payload+=m;l+=o.data.multimodbus_EP8_datasize}if(!0===o.data.multimodbus_EP9){if(0===without_header&&(o.data.multimodbus_EP6_slaveID=t[l],o.data.multimodbus_EP6_fnctID=t[l+1],o.data.multimodbus_EP6_datasize=t[l+2],l+=3),o.data.multimodbus_EP6_payload="",void 0===t[l])return o;for(let e=0;e<o.data.multimodbus_EP6_datasize;e++)m=t[l+e].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP6_payload+=m;l+=o.data.multimodbus_EP6_datasize}}if(82===_&&0===n&&(o.data.active_energy_Wh=e(256*t[p+1]*256+256*t[p+2]+t[p+3],3),o.data.reactive_energy_Varh=e(256*t[p+4]*256+256*t[p+5]+t[p+6],3),o.data.nb_samples=256*t[p+7]+t[p+8],o.data.active_power_W=e(256*t[p+9]+t[p+10],2),o.data.reactive_power_let=e(256*t[p+11]+t[p+12],2)),32772===_&&0===n&&(1===t[p]&&(o.data.message_type="confirmed"),0===t[p]&&(o.data.message_type="unconfirmed")),32772===_&&1===n&&(o.data.nb_retry=t[p]),32772===_&&2===n&&(o.data.period_in_minutes=256*t[p+1]+t[p+2],o.data.nb_err_frames=256*t[p+3]+t[p+4]),80===_&&6===n){let e=p+3;if(1==(1&t[p+2])&&(o.data.main_or_external_voltage=(256*t[e]+t[e+1])/1e3,e+=2),2==(2&t[p+2])&&(o.data.rechargeable_battery_voltage=(256*t[e]+t[e+1])/1e3,e+=2),4==(4&t[p+2])&&(o.data.disposable_battery_voltage=(256*t[e]+t[e+1])/1e3,e+=2),8==(8&t[p+2])&&(o.data.solar_harvesting_voltage=(256*t[e]+t[e+1])/1e3,e+=2),16==(16&t[p+2])&&(o.data.tic_harvesting_voltage=(256*t[e]+t[e+1])/1e3,e+=2),138===u){void 0!==t[p+2]&&d(t[p+2]);let e=[],a=0,l=1e3,s="";void 0===t[p+2]?(s="none",console.log("je suis dans le test undefined")):(s=d(t[p+2]),console.log("je suis dans le test defined")),"none"===s&&(e.push("alarm triggered"),o.zclheader.alarmmess=e),"0"===s[2]&&"1"===s[3]&&i(1,e,a,t,o,p),"1"===s[2]&&"0"===s[3]&&r(6,e,a,t,o,p,l)}}if(32778===_&&0===n){let a=p;o.data.sum_positive_active_energy_Wh=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.sum_negative_active_energy_Wh=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.sum_positive_reactive_energy_Wh=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.sum_negative_reactive_energy_Wh=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.positive_active_power_W=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.negative_active_power_W=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.positive_reactive_power_W=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4),a+=4,o.data.negative_reactive_power_W=e(256*t[a+1]*256*256+256*t[a+2]*256+256*t[a+3]+t[a+4],4)}if(32784===_&&0===n?(o.data.ActiveEnergyWhPhaseA=Int32UnsignedToSigned(256*t[p+1]*256*256+256*t[p+2]*256+256*t[p+3]+t[p+4]),o.data.ReactiveEnergyWhPhaseA=Int32UnsignedToSigned(256*t[p+5]*256*256+256*t[p+6]*256+256*t[p+7]+t[p+8]),o.data.ActiveEnergyWhPhaseB=Int32UnsignedToSigned(256*t[p+9]*256*256+256*t[p+10]*256+256*t[p+11]+t[p+12]),o.data.ReactiveEnergyWhPhaseB=Int32UnsignedToSigned(256*t[p+13]*256*256+256*t[p+14]*256+256*t[p+15]+t[p+16]),o.data.ActiveEnergyWhPhaseC=Int32UnsignedToSigned(256*t[p+17]*256*256+256*t[p+18]*256+256*t[p+19]+t[p+20]),o.data.ReactiveEnergyWhPhaseC=Int32UnsignedToSigned(256*t[p+21]*256*256+256*t[p+22]*256+256*t[p+23]+t[p+24]),o.data.ActiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*t[p+25]*256*256+256*t[p+26]*256+256*t[p+27]+t[p+28]),o.data.ReactiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*t[p+29]*256*256+256*t[p+30]*256+256*t[p+31]+t[p+32])):32784===_&&1===n&&(o.data.ActivePowerWPhaseA=Int32UnsignedToSigned(256*t[p+1]*256*256+256*t[p+2]*256+256*t[p+3]+t[p+4]),o.data.ReactivePowerWPhaseA=Int32UnsignedToSigned(256*t[p+5]*256*256+256*t[p+6]*256+256*t[p+7]+t[p+8]),o.data.ActivePowerWPhaseB=Int32UnsignedToSigned(256*t[p+9]*256*256+256*t[p+10]*256+256*t[p+11]+t[p+12]),o.data.ReactivePowerWPhaseB=Int32UnsignedToSigned(256*t[p+13]*256*256+256*t[p+14]*256+256*t[p+15]+t[p+16]),o.data.ActivePowerWPhaseC=Int32UnsignedToSigned(256*t[p+17]*256*256+256*t[p+18]*256+256*t[p+19]+t[p+20]),o.data.ReactivePowerWPhaseC=Int32UnsignedToSigned(256*t[p+21]*256*256+256*t[p+22]*256+256*t[p+23]+t[p+24]),o.data.ActivePowerWPhaseABC=Int32UnsignedToSigned(256*t[p+25]*256*256+256*t[p+26]*256+256*t[p+27]+t[p+28]),o.data.ReactivePowerWPhaseABC=Int32UnsignedToSigned(256*t[p+29]*256*256+256*t[p+30]*256+256*t[p+31]+t[p+32])),32779===_&&0===n){let a=p;o.data.Vrms=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Irms=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.phase_angle=e(256*t[a+1]+t[a+2],2)}if(32781===_&&0===n&&(o.data.VrmsA=e(256*t[p+1]+t[p+2],2)/10,o.data.IrmsA=e(256*t[p+3]+t[p+4],2)/10,o.data.PhaseA=e(256*t[p+5]+t[p+6],2),o.data.VrmsB=e(256*t[p+7]+t[p+8],2)/10,o.data.IrmsB=e(256*t[p+9]+t[p+10],2)/10,o.data.PhaseB=e(256*t[p+11]+t[p+12],2),o.data.VrmsC=e(256*t[p+13]+t[p+14],2)/10,o.data.IrmsC=e(256*t[p+15]+t[p+16],2)/10,o.data.PhaseC=e(256*t[p+17]+t[p+18],2)),32780===_&&0===n&&(o.data.Concentration=256*t[p]+t[p+1],138===u)){void 0!==t[p+2]&&d(t[p+2]);let e=[],a=0,l=1,s="";s=void 0===t[p+2]?"none":d(t[p+2]),"none"===s&&(e.push("alarm triggered"),o.zclheader.alarmmess=e),"0"===s[2]&&"1"===s[3]&&i(1,e,a,t,o,p),"1"===s[2]&&"0"===s[3]&&r(6,e,a,t,o,p,l)}if(1024===_&&0===n&&(o.data.Illuminance=256*t[p]+t[p+1]),1027===_&&0===n&&(o.data.Pressure=e(256*t[p]+t[p+1],2)),1030===_&&0===n&&(o.data.Occupancy=!!t[p]),32850===_&&0===n){let a=p;o.data.frequency=(e(256*t[a+1]+t[a+2],2)+22232)/1e3,a+=2,o.data.frequency_min=(e(256*t[a+1]+t[a+2],2)+22232)/1e3,a+=2,o.data.frequency_max=(e(256*t[a+1]+t[a+2],2)+22232)/1e3,a+=2,o.data.Vrms=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Vrms_min=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Vrms_max=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Vpeak=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Vpeak_min=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.Vpeak_max=e(256*t[a+1]+t[a+2],2)/10,a+=2,o.data.over_voltage=e(256*t[a+1]+t[a+2],2),a+=2,o.data.sag_voltage=e(256*t[a+1]+t[a+2],2)}if(32783===_){let e=p+1;if(0===n){let a=o.data.Last={};a.NbTriggedAcq=l(t,e,"U32"),e+=4,a.Mean_X_G=l(t,e,"U16")/100,e+=2,a.Max_X_G=l(t,e,"U16")/100,e+=2,a.Dt_X_ms=l(t,e,"U16"),e+=2,a.Mean_Y_G=l(t,e,"U16")/100,e+=2,a.Max_Y_G=l(t,e,"U16")/100,e+=2,a.Dt_Y_ms=l(t,e,"U16"),e+=2,a.Mean_Z_G=l(t,e,"U16")/100,e+=2,a.Max_Z_G=l(t,e,"U16")/100,e+=2,a.Dt_Z_ms=l(t,e,"U16")}else if(1===n||2===n||3===n){let a=1===n?"Stats_X":2===n?"Stats_Y":"Stats_Z",s=o.data[a]={};s.NbAcq=l(t,e,"U16"),e+=2,s.MinMean_G=l(t,e,"U16")/100,e+=2,s.MinMax_G=l(t,e,"U16")/100,e+=2,s.MinDt=l(t,e,"U16"),e+=2,s.MeanMean_G=l(t,e,"U16")/100,e+=2,s.MeanMax_G=l(t,e,"U16")/100,e+=2,s.MeanDt=l(t,e,"U16"),e+=2,s.MaxMean_G=l(t,e,"U16")/100,e+=2,s.MaxMax_G=l(t,e,"U16")/100,e+=2,s.MaxDt=l(t,e,"U16"),e+=2}else if(32768===n){let a=o.data.Params={};a.WaitFreq_Hz=l(t,e,"U16")/10,e+=2,a.AcqFreq_Hz=l(t,e,"U16")/10,e+=2;let s=l(t,e,"U16");e+=2,32768&s&&(s=60*(-32769&s)),a.NewWaitDelay_s=32768&s?s=60*(-32769&s):s,a.MaxAcqDuration_ms=l(t,e,"U16"),e+=2,a.Threshold_X_G=l(t,e,"U16")/100,e+=2,a.Threshold_Y_G=l(t,e,"U16")/100,e+=2,a.Threshold_Z_G=l(t,e,"U16")/100,e+=2,a.OverThrsh_Dt_ms=l(t,e,"U16"),e+=2,a.UnderThrsh_Dt_ms=l(t,e,"U16"),e+=2,a.Range_G=l(t,e,"U16")/100,e+=2,a.FilterSmoothCoef=l(t,e,"U8"),e+=1,a.FilterGainCoef=l(t,e,"U8"),e+=1,a=o.data.Params.WorkingModes={},a.SignalEachAcq=128&t[e]?"true":"false",a.RstAftStdRpt_X=1&t[e]?"true":"false",a.RstAftStdRpt_Y=2&t[e]?"true":"false",a.RstAftStdRpt_7=4&t[e]?"true":"false"}}}7===u&&(n=256*t[6]+t[7],o.zclheader.attID=s(n,4),o.zclheader.status=t[4],o.zclheader.batch=t[5]),9===u&&(n=256*t[6]+t[7],o.zclheader.attID=s(n,4),o.zclheader.status=t[4],o.zclheader.batch=t[5],o.zclheader.attribut_type=t[8],o.zclheader.min={},128==(128&t[9])?(o.zclheader.min.value=256*(t[9]-128)+t[10],o.zclheader.min.unity="minutes"):(o.zclheader.min.value=256*t[9]+t[10],o.zclheader.min.unity="seconds"),o.zclheader.max={},128==(128&t[11])?(o.zclheader.max.value=256*(t[11]-128)+t[12],o.zclheader.max.unity="minutes"):(o.zclheader.max.value=256*t[11]+t[12],o.zclheader.max.unity="seconds"),o.lora.payload="")}else o.batch={},o.batch.report="batch";return o}(u,t.fPort);if(console.log(m),void 0!==m.zclheader&&m.zclheader.alarm&&(o=m.zclheader.alarmmess,console.log(o)),7===u[1]&&u[0]%2!=0)return{data:{variable:"configure reporting response status",value:m.zclheader.status,date:t.recvTime},warning:o};if(9===u[1])return{data:{variable:"read reporting configuration response status",value:m.zclheader.status,date:t.recvTime},warning:o};if(1===u[1])return void 0===m.zclheader.data?{data:{variable:"read reporting configuration response status",value:"no data",date:t.recvTime},warning:o}:{data:{variable:"read reporting configuration response status",value:m.zclheader.data,date:t.recvTime},warning:o};if(void 0!==m.zclheader){if(void 0!==n){let e=m.zclheader.endpoint,a=Object.keys(m.data)[0];return{data:{variable:n[a][e],value:m.data[a],date:t.recvTime},type:"standard",warning:o}}{let e=Object.keys(m.data)[0];return{data:{variable:e,value:m.data[e],date:t.recvTime},type:"standard",warning:o}}}return{type:m.batch.report,payload:m.lora.payload}}}},299:(t,e,a)=>{let l=a(684),s=[2,[{taglbl:0,resol:10,sampletype:7,lblname:"temperature",divide:100},{taglbl:1,resol:100,sampletype:6,lblname:"humidity",divide:100},{taglbl:2,resol:1,sampletype:6,lblname:"battery_voltage",divide:1e3},{taglbl:3,resol:1,sampletype:1,lblname:"open_case",divide:1}]];t.exports.decodeUplink=function(t){return result=l.watteco_decodeUplink(t,s)}}},e={},a=function a(l){var s=e[l];if(void 0!==s)return s.exports;var d=e[l]={exports:{}};return t[l](d,d.exports,a),d.exports}(299);driver=a})();
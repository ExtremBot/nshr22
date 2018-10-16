const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
" لكل جوآد كبّوه " .. 
نحن لآ نفشل عندمآ نتعثر ، وإنمآ نفشل عندمآ نتوقف ..
فهآ نحن عُدنآ بحب أكثر وسيرفر جديد وروح أقوى ..
عُدنآ لموآصلة السير من نقطة الإنطلآق نحو القمة 
سيرفر Rose  جديد ويستحق الدعم..
https://discord.gg/dPjc2zM [ ${member}  ]`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
" لكل جوآد كبّوه " .. 
نحن لآ نفشل عندمآ نتعثر ، وإنمآ نفشل عندمآ نتوقف ..
فهآ نحن عُدنآ بحب أكثر وسيرفر جديد وروح أقوى ..
عُدنآ لموآصلة السير من نقطة الإنطلآق نحو القمة 
سيرفر Rose  جديد ويستحق الدعم..
https://discord.gg/dPjc2zM [ ${member}  ]`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

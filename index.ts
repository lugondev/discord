import {Discord} from "./Discord";

const CHANNEL_ID = process.env.CHANNEL_ID;
const TOKEN = process.env.TOKEN;

Discord.login(TOKEN)
    .then(() => {
        // const client = Discord.client;
        return Discord.sendToChannel("561528448003080194", "@channel hi ");
        // return Discord.getChannels();
    })
    .then(console.log)
    .catch(err => {
        console.log("Cant login Discord");
        console.log(err);
    });




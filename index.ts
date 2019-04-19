import {Discord} from "./Discord";

const CHANNEL_ID = "562206828713476096";

const TOKEN = "NTYyMjA3ODg1MTk1NDc3MDAy.XKHveA.DhvSRRcDOXkn8E2Nvu9lxDESLoU";

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




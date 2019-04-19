const Client = require("discord.js").Client;

const DISCORD_DEFAULT_CHANNEL = ["Text Channels", "Voice Channels", "General"];

export class Discord {
    private static CLIENT;
    private static isLogin: boolean = false;

    static get client() {
        return this.CLIENT;
    }

    static set client(client) {
        this.CLIENT = client;
    }

    static login(token: string) {
        this.client = new Client();
        return this.client.login(token)
            .then(() => {
                this.isLogin = true;
            })
            .catch(console.log);
    }

    static sendToChannel(channelId: string, data: any) {
        if (this.isLogin)
            return this.client.channels.get(channelId).send(data)
                .catch(console.log);
        else
            console.log("Not login.");
    }

    static sendToUser(userId: string, data: any) {
        if (this.isLogin)
            return this.client.users.get(userId).send(data)
                .catch(console.log);
        else
            console.log("Not login.");
    }

    static getChannels(all: boolean = false) {
        if (this.isLogin)
            return this.client.channels.filter(channel => (all ? [] : DISCORD_DEFAULT_CHANNEL).indexOf(channel.name) === -1)
                .map((channel) => ({id: channel.id, name: channel.name}));
        else
            console.log("Not login.");
    }


}

import { Client, Message } from "discord.js";
import { discordLogger } from "../common/log";
import { getInstanceManager } from "./InstanceManager";

export function startDiscordBot() {
  const client = new Client();
  const prefix = process.env.DISCORD_PREFIX!;

  client.on("ready", () => {
    discordLogger.info(`Logged in as ${client.user?.tag} !`);
  });

  client.on("message", (msg: Message) => {
    if (!msg.author.bot && msg.content.startsWith(prefix)) {
      const [_, action, ...args]: string[] = msg.content.split(" ");
      if (action === "config") {
        const instanceManager = getInstanceManager();
        const instanceId = msg.channel.id;
        if (!instanceManager.getInstance(instanceId)) {
          instanceManager.addInstance(instanceId);
          msg.channel.send(
            `This channel (${instanceId}) is now ready to play, welcome to the adventure !`
          );
        } else {
          msg.channel.send(
            `This channel (${instanceId}) is already set up to play.`
          );
        }
      }
    }
  });

  client.login(process.env.DISCORD_TOKEN);
}

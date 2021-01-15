import * as dotenv from "dotenv";
dotenv.config();
import { startDiscordBot } from "./discord/bot";
import { startExpressServer } from "./express/server";

// Start discord bot
startDiscordBot();

// Start express server
startExpressServer();

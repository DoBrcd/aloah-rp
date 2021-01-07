import * as dotenv from "dotenv";
import { startDiscordBot } from "./discord/bot";
import { startExpressServer } from "./express/server";

// Configure dotenv
dotenv.config();

// Start discord bot
startDiscordBot();

// Start express server
startExpressServer();

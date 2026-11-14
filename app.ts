import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function callLLM(usermessage: string[], model: string ="claude-sonnet-5-5"): Promise<string> {

    const client = new Anthropic();

    const message = await client.messages.create({
    max_tokens: 1024,
    messages: usermessage.map((message) => ({
        role: message.startsWith("assistant: ") ? "assistant" as const : "user" as const,
        content: message.slice(message.indexOf(": ") + 2)
    })),
    model: model
    });

    for (const block of message.content) {
    if (block.type === "text") {
        return block.text;
    }
    }
    throw new Error("No text response from Claude");
}

async function main():Promise<void>{
    let messages: string[] = [];
    console.log("Starting the agent....")
    const rl = readline.createInterface({ input, output });
    try {
        while(true) {
            messages.push(`user: ${await rl.question("user: ")}`);
            messages.push(`assistant: ${await callLLM(messages, "claude-haiku-5-5")}`);     
            console.log(`${messages[messages.length - 1]}`);
        }
    } finally {
        rl.close();
    }
}

await main();
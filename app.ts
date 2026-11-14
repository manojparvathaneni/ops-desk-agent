import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function callLLM(history: Anthropic.MessageParam[], model: string ="claude-sonnet-5-5"): Promise<string> {

    const client = new Anthropic();

    const message = await client.messages.create({
    max_tokens: 1024,
    messages: history,
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
   const history: Anthropic.MessageParam[] = [];
    console.log("Starting the agent....")
    const rl = readline.createInterface({ input, output });
    try {
        while(true) {
            history.push({ role: "user", content: await rl.question("user: ") });
            try {
                const llmresponse = await callLLM(history, "claude-haiku-5-5");
                if (llmresponse) {
                    if (llmresponse.trim().toLowerCase() === "exit") {
                        break;
                    }
                    history.push({ role: "assistant", content: llmresponse });     
                    console.log( `assistant: ${llmresponse}`);
                }
            } catch (error) {
                console.error("Error calling Claude:", error);
            }
        }
    } finally {
        rl.close();
    }
}

await main();
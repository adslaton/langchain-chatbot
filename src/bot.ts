// src/bot.ts
import { OpenAI } from '@langchain/openai';

// Initialize LangChain with an OpenAI LLM
const model = new OpenAI({
  temperature: 0.5,
  modelName: 'gpt-3.5-turbo',
});

async function main() {
  const response = await model.call("Why is the sky blue?");
  console.log(response);
}

main().catch(console.error);
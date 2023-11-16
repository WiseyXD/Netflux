import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

export const openai = new OpenAI({
	apiKey: "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",
	dangerouslyAllowBrowser: true,
});

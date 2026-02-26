import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getImageUrlFromPrompt(prompt: string, base64Image: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: {
      parts: [
        { text: prompt },
        { inlineData: { mimeType: "image/png", data: base64Image } }
      ]
    },
    config: {
      systemInstruction: "You are an assistant that helps extract image URLs or descriptions. If you see an image in the prompt, describe it or provide a way to reference it. But wait, I actually need to host this image. Since I can't host it, I will just use a high-quality placeholder or ask the user for a link. Actually, I will try to find the actual URL if it's a public image."
    }
  });
  return response.text || "";
}

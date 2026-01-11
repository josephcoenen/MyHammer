
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithGemini = async (messages: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: messages.map(m => ({ role: m.role, parts: m.parts })),
    config: {
      systemInstruction: "You are HammerBot, a helpful assistant for HammerMatch, a marketplace for craftsmen. You help users describe their home repair needs, give general advice on DIY vs hiring a professional, and explain how the platform works. Be professional, friendly, and concise.",
      temperature: 0.7,
    },
  });
  return response.text || "I'm sorry, I couldn't process that request.";
};

export const analyzeJobImage = async (base64Image: string, mimeType: string): Promise<string> => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType } },
        { text: "Analyze this image and describe what kind of craftsmanship work is needed. Identify the likely issue, suggest which professional category (e.g., plumber, electrician, painter) should handle it, and give a brief 2-3 sentence summary of the work involved." }
      ]
    }
  });
  return response.text || "I couldn't analyze the image. Please try a clearer photo.";
};

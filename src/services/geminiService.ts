import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function suggestSpecialty(symptoms: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Como um assistente médico angolano, sugira APENAS o nome da especialidade médica (ex: Cardiologia, Pediatria, Clínica Geral) para os seguintes sintomas: "${symptoms}". Seja breve, apenas 1 ou 2 palavras.`,
    });
    
    return response.text?.trim() || "Clínica Geral";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Clínica Geral";
  }
}

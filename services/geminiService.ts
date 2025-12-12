import { GoogleGenAI, Type } from "@google/genai";
import { LeadData, AuditResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAuditReport = async (data: LeadData): Promise<AuditResult> => {
  const model = "gemini-2.5-flash";

  const prompt = `
    Act as a senior forensic auditor for a Tax Sale Surplus Recovery firm.
    A potential client has submitted their property details for a free claim audit.
    
    Data provided:
    - Address: ${data.address}, ${data.county}, ${data.state}
    - Estimated Market Value at time of sale: $${data.estimatedValue}
    - Approximate Tax Debt Owed: $${data.approxDebt}
    
    Task:
    Analyze this information to determine if a surplus is likely. 
    1. Calculate a rough potential surplus (Value - Debt).
    2. Explain clearly and professionally why the county might be holding their money.
    3. Create a sense of urgency (mentioning expiration statutes generally).
    4. Explain the legal complexity and why they need representation.
    
    Output JSON format matching the schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "A 2-3 sentence professional analysis of their specific situation." },
            estimatedSurplusRange: { type: Type.STRING, description: "E.g., '$20,000 - $40,000' or 'Uncertain'" },
            urgencyLevel: { type: Type.STRING, enum: ["High", "Medium", "Low"] },
            nextSteps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 distinct bullet points on what happens next."
            }
          },
          required: ["analysis", "estimatedSurplusRange", "urgencyLevel", "nextSteps"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AuditResult;
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("AI Audit Error:", error);
    // Fallback if AI fails or key is missing
    return {
      analysis: "Based on the figures provided, it appears there is a significant gap between the property value and the taxes owed. This typically indicates a surplus is held by the county treasury.",
      estimatedSurplusRange: "Calculation Pending",
      urgencyLevel: "High",
      nextSteps: ["Verify county records", "File formal claim petition", "Secure funds release"]
    };
  }
};

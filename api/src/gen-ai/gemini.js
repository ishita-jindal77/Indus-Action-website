import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export default async function gemini(data) {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-1.5" });

    const prompt = "I want to get name,date of birth,gender and 16 digit number"

    const result = await model.generateContent([prompt,data]);
    const response = await result.response;
    const text = response.text();
    return text
}

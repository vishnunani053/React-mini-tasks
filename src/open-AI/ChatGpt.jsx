import React, { useState } from 'react';
import OpenAI from 'openai';

const ChatGpt = () => {
    const [aiData, setAiData] = useState("");
    const openAi = new OpenAI({
        apiKey: "your_api_key_here"
    });
    
    const handleClick = async () => {
        const result = await openAi.complete({
            engine: "text-davinci-003",
            prompt: "What are the top 10 programming languages?",
            max_tokens: 150
        });
        setAiData(result.data.choices[0].text);
    }

    return (
        <div>
            <h3>{aiData}</h3>
            <button onClick={handleClick}>Get AI</button>
        </div>
    );
}

export default ChatGpt;

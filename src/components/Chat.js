import React from 'react'
import './Chat.css'
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = openai.createCompletion({
  model: "text-davinci-003",
  prompt: "",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response)

function Chat() {
  return (
    <div>
        <h1>Chat App</h1>

        <div className='chat-header'>
            <h4>Header</h4>
        </div>
        <div className='chat-box'>

        </div>

    </div>
  )
}

export default Chat
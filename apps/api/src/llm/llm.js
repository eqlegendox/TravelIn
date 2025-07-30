"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("@langchain/openai");
var langgraph_1 = require("@langchain/langgraph");
var dotenv_1 = require("dotenv");
dotenv_1.config({ path: "C:/Users/Ananda_W297/Downloads/Intern/Project/Code/TravelIn/apps/api/.env" });
var APIKey = process.env.GEMINI_API_KEY || '';
console.log(APIKey);
var Setatoru = langgraph_1.Annotation.Root({
    messages: (0, langgraph_1.Annotation)({
        reducer: function (x, y) { return x.concat(y); },
    }),
});
var memory = new langgraph_1.MemorySaver();
var model = new openai_1.ChatOpenAI({
    apiKey: APIKey,
    configuration: ({
        baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
    }),
});

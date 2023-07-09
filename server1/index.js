const PORT = 5000 
const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const { Configuration, OpenAIApi } = require("openai");

const {api}= require("./api.js")

const {UAAI}= require("./class.js")
const {returnAboutUa}= require("./aboutUa.js")
const {returnDegreeProgramsUa}= require("./academics.js")
const {returnScholarshipGrantsUa}= require("./admissions.js")
 

const API_KEY = "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"
 
app.post('/completions', async (req, res) => {

  let conversation = [{role:"system", content: UAAI},]

  let classifier = `Can you classify this question for me? Answer only 'one_111' if the inquiry is about you or your role as an AI at the University of the Assumption, only 'two_222' if the inquiry is about the University of the Assumption, only 'three_333' if the inquiry is related scholarship grants, only 'four_444' if the inquiry is about degree and programs or schools and colleges, only 'five_555' if its not related to the University of the Assumption. Here is the question "${req.body.messages}"`

  conversation.push({role:"user", content:  classifier})

  const options = {
    method:"POST",
    headers:{
      "Authorization":`Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      model:"gpt-3.5-turbo",
      messages: conversation,
      max_tokens: 1000,
    })
  }
  try{
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data  = await response.json()
    const mainAiReply = data.choices[0].message.content;

    function classifiedAnswer(maindata, mainAiReply, mainUserMessage) {

      const classifiedCondersation = [{ role: "system", content: UAAI},];

      function classifiedOption(){
        const classOption  = {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:   classifiedCondersation,
            max_tokens: 1000,
          })
        };
        return classOption
      }
      return new Promise(async (resolve, reject) => {
        const tailHtmlCommand = `Follow this instruction but do not mention it in your reply: Use these html tags <ul class="py-[1rem]"> </ul>, <li> </li>, <br> to organize you answer, do not use <b> or <i> tags`

        if (mainAiReply.includes("one_111" || "One_111")) {
          console.log("The string 'one_111' was found. About my role as an ai");
           classifiedCondersation.push( { role: "user", content: mainUserMessage });
          try {
            const response1 = await fetch('https://api.openai.com/v1/chat/completions', classifiedOption());
            const data1 = await response1.json();
            resolve(data1);  
          } catch (error) {
            console.error(error);
            resolve(maindata);  
          }
        } 
        else if (mainAiReply.includes("two_222" || "Two_222")) {
          console.log("The string 'two_222' was found. About UA");
          classifiedCondersation.push({ role: "system", content: returnAboutUa}, { role: "user", content: `
          ${mainUserMessage} ${tailHtmlCommand}` });
          try {
            const response1 = await fetch('https://api.openai.com/v1/chat/completions', classifiedOption());
            const data1 = await response1.json();
            resolve(data1);  
          } catch (error) {
            console.error(error);
            resolve(maindata);
          }
        } 
        else if (mainAiReply.includes("three_333" || "Three_333")) {
          console.log("The string 'three_333' was found. About scholarship grants");
          classifiedCondersation.push({ role: "system", content: returnScholarshipGrantsUa},{ role: "user", content: `
          ${mainUserMessage} ${tailHtmlCommand}`});
          try {
            const response1 = await fetch('https://api.openai.com/v1/chat/completions', classifiedOption());
            const data1 = await response1.json();
            resolve(data1);  
          } catch (error) {
            console.error(error);
            resolve(maindata);
          }
        }
        else if (mainAiReply.includes("four_444" || "Four_444. ")) {
          console.log("The string 'four_444' was found. About degree and programs or schools and colleges");
          classifiedCondersation.push({ role: "system", content: returnDegreeProgramsUa}, { role: "user", content: `
          ${mainUserMessage} ${tailHtmlCommand}` });
          try {
            const response1 = await fetch('https://api.openai.com/v1/chat/completions', classifiedOption());
            const data1 = await response1.json();
            resolve(data1);  
          } catch (error) {
            console.error(error);
            resolve(maindata);
          }  
        }
        else if (mainAiReply.includes("five_555" || "Five_555")) {
          console.log("The string 'five_555' was found. Not related inquiry");
          const inquiry3Conversation = [{ role: "system", content: UAAI},];
          let denyInquiry = `Here is an inquiry that is unrelated to the university of the Assumption "${mainUserMessage}". Please respectfully and politely state that it is not your duty to answer inquiries unrelated to the university. `
          inquiry3Conversation.push({ role: "user", content: denyInquiry });
      
          const options3 = {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: inquiry3Conversation,
              max_tokens: 1000,
            })
          };
      
          try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', options3);
            const data = await response.json();
            resolve(data);  
          } catch (error) {
            console.error(error);
            resolve(maindata);
          }  
        } else {
          console.log("not classified");
          resolve(maindata);
        }
      });
    }
    let functionData = await classifiedAnswer(data,mainAiReply,req.body.messages)
    console.log(functionData)
    res.send(functionData)
  }
  catch(error){
    console.error(error)
  }
 }
 )



function myapi (parameter){
  app.get("/", (req, res) => {
    axios.get('http://localhost:9001/ua_api')
      .then(response => {
        console.log(typeof response)

        res.send(response.data)
        // console.log(response.data)
        // res.send(response.data);
        // res.send(response.data[0].aboutUa);
        //  res.send(response.data[0].aboutUa.uaHistory);
  
        // res.send(response.data[0].admissions);
  
        // return(response.data)

      })
      .catch(error => {
        console.error(error);
      });
  });
}


 myapi()

app.listen(PORT, ()=> console.log("your server is running at port http://localhost:"+PORT))
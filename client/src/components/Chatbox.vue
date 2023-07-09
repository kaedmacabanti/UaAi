<style>
  .message-container {
    margin-bottom: 1rem;
  }

  .user-message .role { 
    border-radius: 0.5rem;
    display: none;
  }

  .user-message .message {
    background-color: #0084ff;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .bot-message .role { 
    border-radius: 0.5rem;
    display: none;
  }

  .bot-message .message {
    background-color: lightgray;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: black;
  }

  .minichatheader {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  .minichatfooter {
    position: sticky;
    bottom: 0;
    z-index: 1; 
  }
</style>

<template>
  <section class="overflow-y-auto overflow-x-hidden absolute bottom-0 right-8 h-[27rem] w-[20rem] shadow-lg text-white rounded-tl-[.5rem] rounded-tr-[.5rem]">
    <div class="relative">
      <ul class="minichatheader flex justify-between rounded-tl-[.5rem] rounded-tr-[.5rem] bg-[#003075] py-[.5rem] px-[.8rem] h-[3rem]">
        <li class="flex items-center">
          <img class="w-[30.5px] h-[30.5px] rounded-full mr-[.5rem]" src="../assets/UA-logo.png" alt="">UA Assistant
        </li>
        <li class="flex items-center">
          <i class="fa-solid fa-xmark"></i>
        </li>
      </ul>

      <div class="flex flex-col justify-center">.
        <div v-for="(message, index) in conv" :key="index" class="message-container">
          <div :class="[message.role === 'user' ? 'flex user-message' : ' flex bot-message  ']">
            <span class="role w-[10%] text-black">{{message.role}}: </span>
            <span class="message w-[90%]">{{ message.content }}</span> 
          </div>
        </div>
        <div v-if="isLoading" class="loading-message text-black">Loading...</div>
      </div>

      
      <div class="minichatfooter  w-[20rem] flex bg-white">
        <input type="text" v-model="input" @keyup.enter="runBothFunctions" class="w-[85%] p-[.5rem] text-black focus:border-transparent focus:outline-none focus:ring-0 placeholder-gray" placeholder="Input question here">
        <button type="submit" @click="runBothFunctions" class="w-[15%]">
          <i class="fa-solid fa-paper-plane text-[gray]"></i>
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name : 'Chatbox',
  
  data() {
    return {
      input: '',
      isLoading: false,
      error: null,
      message: null,
      messageUser: null,
      uiData: {},
      conv:[]
    };
  },
 
  methods: {
    
     async fetchData() {
      this.isLoading = true;
  
      const options = {
        method: "POST",
        body: JSON.stringify({
          messages: this.input
        }), 
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        const response = await fetch('http://localhost:5000/completions', options);
        const data = await response.json();
        const conMessage = data.choices[0].message;

        console.log("Testing")

        this.messageUser = { role: "user", content: this.input};
        this.message = { role: conMessage.role, content: conMessage.content};
        
        this.conv.push(this.messageUser, this.message);
        this.input = ' '
 
        // console.log(this.conv) 
      } catch (error) {
        this.error = 'An error occurred while fetching data.';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUiData(){
       const options = {
        method: "POST",
        body: JSON.stringify({
          messages:"none"
        }), 
        headers: {
          "Content-Type": "application/json"
        }
      };
        try {
        const response = await fetch('http://localhost:5000/ui_data', options);
        this.uiData = await response.json();

        console.log(uiData)

      } catch (error) {
        this.error = 'An error occurred while fetching data.';
      } 
    },
     runBothFunctions() {
      this.fetchData();
      this.fetchUiData();
    },
    saveData(){
        console.log(messageUser)
        console.log(message)
    }
  }
};
</script>


 
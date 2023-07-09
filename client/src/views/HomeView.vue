
<style >

.sidebar{
  position: fixed;
  left: 0;
  
}
.topnav{
  position: fixed;
  top: 4rem;

}
 .inputcontainer{
  position: fixed;
  bottom: 0;
  
}

.message-container {
  margin-bottom: 1rem;
}

.role {
  margin: 0.5rem .7rem 0 .5rem;;
  border-radius: 0.5rem;
  color: black;
}

.user-message .message {
  background-color: #0084ff;
  padding: 0.5rem;
  border-radius: 0.5rem;
}


.bot-message .message{
  background-color: lightgray;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
@media screen and (max-width: 770px){
.chatcontainer{
  width: 100vw;
  margin: 0;  
}

.inputcontainer{
    width: 100vw;
    margin: 0;
}

.inputcontainer div{
  width: 80%;
}
}

 
</style>


<template>

<div class="flex flex-col">
  <Navbar></Navbar>
 
    <!-- MAIN CONTAINER CHAT  -->
  <div class="maincontainer flex w-[100%] ">
    <section class="flex ">
    <Sidebar></Sidebar>
 
    <div class="chatcontainer pt-[4rem] ml-[16.25rem] w-[calc(100vw-16.25rem)] h-[100vh ">
      <div class="flex flex-col ">
      <!-- CHAT CONTAINERS -->
       
      <div class="w-[100%] flex justify-center ">
      <!-- TOP PROFILE -->
     
        <!-- render all messages in the conv array -->
         <div class="w-[60%] my-[2rem]">
          <div v-for="(message, index) in conv" :key="index" class="message-container">
            <div :class="[message.role === 'user' ? 'flex user-message' : ' flex bot-message  ']">
              <span class="role w-[10%] ">{{message.role}}: </span>
              <span class="message w-[90%]" v-html="message.content">  </span>
            </div>
          </div>
          
             <div v-if="isLoading" class="loading-message text-black">Loading...</div>
           
        </div>
      </div>
      <div class="w-[100%] h-[4rem]"></div>

         <!-- INPUT CONTAINER  -->
      <div class="inputcontainer pt-[1rem] pb-[2rem]  flex justify-center  w-[calc(100vw-16.25rem)]  bg-white">
        <div class="shadow-2xl  w-[calc(80vw-16.25rem)]   ">
        
          <input  class="w-[90%]  px-[.7rem] focus:border-transparent focus:outline-none focus:ring-0 placeholder-gray" placeholder="Input question here" type="text" v-model="input" @keyup.enter="fetchData" >
          <button  class="w-[5%] p-[.7rem]" type="submit" @click="fetchData" ><i class="fa-solid fa-paper-plane text-[gray]"></i> </button>
        </div>
      </div>

    </div>
    </div>


 
      
    </section>
 
</div>
</div>
    
</template>

 
<script>
 
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: { Navbar, Sidebar },
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
        this.input = ' '
        this.conv.push(this.messageUser, this.message);
       
 
        // console.log(this.conv) 
      } catch (error) {
        this.error = 'An error occurred while fetching data.';
      } finally {
        this.isLoading = false;
      }
    },
 
    saveData(){
        console.log(messageUser)
        console.log(message)
    }
  }
};
</script>




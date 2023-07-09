 <template>
  <!-- MAIN CONTAINER  -->
  <div class="flex flex-col items-center justify-center  h-[100vh] w-[100vw]">
   <!-- INPUT CONTAINER FOR BUSINESS -->
    <div class="p-[4rem] w-[30%] ">
    
    <h1 class=" text-left text-[2rem] pb-[2rem] text-center">Set up your AI's Persona</h1>

    <!-- GRID1` -->
      <div class="grid grid-cols-1 gap-[2rem]  ">
 
        <span class="flex flex-col">
          <label class="" for="">AI Role Name</label>
          <input type="text" class="p-[.5rem] border-[2px] border-gray-400 w-[100%]" v-model="fname"   placeholder="">
        </span>

        <span class="flex flex-col">
          <label class="" for="">Role Age</label>
          <input type="number" class="p-[.5rem] border-[2px] border-gray-400 w-[100%]"   placeholder="">
        </span>

        <span class="flex flex-col">
          <label class="" for="">Persona</label>
          <input type="number" class="p-[.5rem] border-[2px] border-gray-400 w-[100%]"   placeholder="">
        </span>

        <span class="flex flex-col">
          <label class="" for="">Position</label>
          <input type="number" class="p-[.5rem] border-[2px] border-gray-400 w-[100%]"   placeholder="">
        </span>

        <span class="flex flex-col">
          <label for="description">Role Job</label>
          
          <textarea rows="4" cols="50" class="p-[.5rem] border-[2px] border-gray-400 w-[100%]">
          </textarea>
        </span>
      
      </div>

      <br>

    <button class="w-[100%] p-[.5rem] bg-gray-400 flex justify-center  "> Next </button>
    </div>
  </div>
</template>

<style >
 .background{
 
  background-image: url("./assets/bg1.jpg");
    background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100vw;
 }
</style>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const fname = ref('')
    const sname = ref('')
    const mi = ref('')
    const mnumber = ref('')
    const address = ref('')
    const email = ref('')
    const pid = ref('')
    const selectedGender = ref('');
    const birthday = ref('')
    
     const options = ref([
        { label: "Dr. Juan Enriquz", value: "Dr. Juan Enriquz" },
        { label: "Dr. Joseph Roman", value: "Dr. Joseph Roman" },
        { label: "Dr. Jack Salazar", value: "Dr. Jack Salazar" },
        { label: "Dr. Ben Alfred", value: "Dr. Ben Alfred" }
      ]);
      const selectedOptions = ref([]);

      const immunizations = [
      { id: 'Covid-19', name: 'Covid-19' },
      { id: 'Polio', name: 'Polio' },
      { id: 'measles', name: 'Measles' },
      { id: 'hepatitis-b', name: 'Hepatitis B' },
      ];
      const selectedImmunizations = ref([]);
 
 
    const updateBirthday = (event) => {
      birthday.value = event.target.value
    }

    const formattedBirthday = computed(() => {
      if (!birthday.value) return ''
      const date = new Date(birthday.value)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    })


    const bloodTypes = ref(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    const selectedBloodType = ref('')

    const message = ref('')

     const showResults = ref(false)

    function submitInputs() {
      showResults.value = true
    }

    return { fname, sname, mi, mnumber, address, email, pid, birthday, updateBirthday, formattedBirthday, options, bloodTypes, selectedBloodType,
    selectedOptions, message,  selectedGender, showResults, submitInputs, immunizations, selectedImmunizations,}
  }
}
</script>
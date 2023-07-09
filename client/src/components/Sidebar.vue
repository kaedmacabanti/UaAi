<style>
@media screen and (max-width: 770px){
.sidebar{
    display: none;
}
}
</style>

<template>
    <div class="sidebar h-[100vh] w-[16.25rem] sticky left-0 top-[4rem] bg-[#262626] text-white py-[2rem] ">
      <div class="flex flex-col items-center  px-[1rem]">
        <span class="font-semibold text-[1.2rem] text-center"> UA Support agent</span>
      </div>
        <div class="sidebar flex flex-col justify-between w-[16.25rem] h-[82vh]  px-[1rem]">
            <ul class="py-[2rem]">
            Frequently asked questions
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">Admission and enrollment</li>
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">Degrees and programs</li>
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">Scholarship and grants</li>
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">UA Google account activation </li>
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">Finance concerns</li>
            <li class="p-[.2rem] bg-[#1b1b1b] px-[.8rem] py-[1rem] my-[.7rem] hover:bg-sky-700 transition-colors duration-300">Payment options</li>
            </ul>
            <ul class="flex justify-center hover:bg-sky-700 transition-colors duration-300">
            <li class="p-[.2rem] px-[.8rem] py-[.8rem] text-[1.8rem]"> <i class="fa-brands fa-facebook"></i></li>
            <li class="p-[.2rem] px-[.8rem] py-[.8rem] text-[1.8rem]"> <i class="fa-brands fa-twitter"></i></li>
            <li class="p-[.2rem] px-[.8rem] py-[.8rem] text-[1.8rem]"> <i class="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
    </div>
</template>

 

<script>
export default {
  name : 'Sidebar',
}
</script>


 
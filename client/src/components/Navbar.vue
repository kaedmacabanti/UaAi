<style>
@media screen and (max-width: 1060px){
.navcontainer{
    display: flex;
    justify-content: space-between;
}
.navlist{
    display: none;
}
.menu{
 display: block;
}

 
}
</style>

<template>
    <nav class="w-[100vw] h-[4rem] bg-[#003075] flex justify-center items-center fixed z-10 ">
        <div class="navcontainer w-[80vw] h-[100%] flex justify-between items-center">
            <i class="menu fa-solid fa-bars text-[#9a9b9c] hover:text-[white] font-bold text-[.85rem] hidden"  @click="toggleDiv"></i>
            <img class=" w-[47.5px] h-[47.5px] rounded-full " src="../assets/UA-logo.png" alt="">
            <ul class="navlist h-full flex items-center justify-center">
                <li class="text-white px-[1.2rem] font-bold text-[.85rem]"> <i class="fa-sharp fa-solid fa-house-chimney px-[.2rem]"></i> HOME</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">ABOUT UA</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">ADMISSIONS</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">ACADEMICS</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">LIBRARY</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">UA FLEX</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">RESEARCH</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">OUTREACH</li>
                <li class="text-[#9a9b9c] hover:text-[white] px-[1.2rem] font-bold text-[.85rem]">ALUMNI</li>
             </ul>
            <i class="text-[#9a9b9c] hover:text-[white] fa-solid fa-magnifying-glass font-bold"></i>

            
        </div>
    </nav> 
</template>

<script>
export default  {
    name : 'Navbar'
}
</script>

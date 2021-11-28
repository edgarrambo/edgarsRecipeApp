<template>
<div class="bg-black text-yellow-500 font-extrabold">
<div class="container mx-auto flex items-center justify-between">
    <!-- added router link to basicrouter icon -->
    <router-link to="/">
    <h1 class="tracking-tighter text-3xl font-thin"> 
            <img src="https://img.icons8.com/plasticine/30/000000/hamburger.png"/>
        Edgar's
        <span class="font-normal">Recipe App 
        </span>
      
    </h1>
    </router-link>
    <nav>
    <ul class="flex space-x-4" >
        <!-- below are three different ways of routing, all are working -->
        <!-- notes for if need to reference later -->
        <router-link to="/">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Homepage</li></router-link>
        <router-link :to="{name: 'Salsas'}">
         <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Salsas </li>
        </router-link>
        <router-link :to="{ path: '/soups', name: 'Soups'}">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Soups </li>
        </router-link>
        <router-link to="/traditional">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Traditional</li>
        </router-link>
        <router-link to="/abroad">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Abroad</li>
        </router-link>
        
        <router-link to="/friends">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800 ">Enter your recipe</li>
        </router-link>
       
    </ul>
    </nav>
</div>
</div>
</template>
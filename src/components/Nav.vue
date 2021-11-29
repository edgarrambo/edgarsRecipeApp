<template>
<div class="font-extrabold text-yellow-500 bg-black">
<div class="container flex items-center justify-between mx-auto">
    <!-- added router link to basicrouter icon -->
    <router-link to="/">
    <h1 class="text-3xl font-thin tracking-tighter"> 
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
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Homepage</li></router-link>
        <router-link :to="{name: 'Salsas'}">
         <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Salsas </li>
        </router-link>
        <router-link :to="{ path: '/soups', name: 'Soups'}">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Soups </li>
        </router-link>
        <router-link to="/traditional">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Traditional</li>
        </router-link>
        <router-link to="/abroad">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Abroad</li>
        </router-link>
        
        <router-link to="/sides">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800 ">Sides</li>
        </router-link>
       
    </ul>
    </nav>
</div>
</div>
</template>
<template>
<div class="bg-red-800 text-blue-500 font-extrabold">
<div class="container mx-auto flex items-center justify-between">
    <!-- added router link to basicrouter icon -->
    <router-link to="/">
    <h1 class="tracking-tighter text-3xl font-thin">Basic
        <span class="font-normal">Router</span>
    </h1>
    </router-link>
    <nav>
    <ul class="flex space-x-4" >
        <!-- below are three different ways of routing, all are working -->
        <!-- notes for if need to reference later -->
        <router-link to="/">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Homepage</li></router-link>
        <router-link :to="{name: 'About'}">
         <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">About</li>
        </router-link>
        <router-link :to="{ path: '/hello', name: 'Hello'}">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-green-500 hover:text-green-800">Hello</li>
        </router-link>
    </ul>
    </nav>
</div>
</div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from '../composables/useAuth';
import useError from "../composables/useError";

const { isAuthenticated, login, signup } = useAuth();


const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = async() => {
    await login(username.value, password.value);
    goToHome();
};

const signingUp = async() => {
    await signup(username.value, password.value);
    goToHome();
};


const goToHome = () => {
    if (isAuthenticated.value) {
        router.push("/")
    } else {
    setError("Invalid Username or Password");
    start();
    }
};


const { error, setError} = useError();


 </script>

 <template>
<div class="flex items-center space-y-12 text-center bg-white border-2 h-screen-nonavmt-10 ">
Logged in: {{ isAuthenticated}}</div>
<div class="flex items-center justify-center rounded-lg shadow-2xl ">
   <form  @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4" >
      <input type="text" class="py-2 border-2 rounded-lg" placeholder="Username" v-model="username"/>
       <input type="password" class="py-2 border-2 rounded-lg" placeholder="Password" v-model="password"/>
       <div class="flex space-x-2">
    <button 
    type="submit" 
    @submit.prevent="logginIn" 
       class="w-1/2 py-2 text-yellow-500 bg-blue-500 rounded-lg" >
       Login
       </button>
       <button
       @click="signingUp" 
       class="w-1/2 py-2 text-yellow-500 bg-black rounded-lg" >
       Sign Up
       </button>
   
       </div>
    </form>
</div>
<div v-if="error" class="py-4 text-center text-white bg-red-600 rounded-lg">{{ error }}</div>

</template>
 
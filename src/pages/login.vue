<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from '../composables/useAuth';
import useError from "../composables/useError";

const { isAuthenticated, login, signup, googleLogin } = useAuth();


const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = async() => {
    login(username.value, password.value);
    if (isAuthenticated.value) {
        router.push("/")
    } else {
    setError("Invalid Username or Password");
    }
};


const signingUp = async() => {
    await signup(username.value, password.value);
    goToHome();
};

const google = async() => {
    await googleLogin();
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

<div class="flex items-center justify-center px-3 pb-8 mx-3 mt-8 mb-8 text-2xl bg-white border-2 border-yellow-500 rounded-lg flexmt-20">

   <form  @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4 text-xl" >
      <input type="text" class="py-4 text-xl border-4 rounded-lg " placeholder="Username" v-model="username"/>
       <input type="password" class="py-4 text-xl border-4 rounded-lg" placeholder="Password" v-model="password"/>
       <div class="flex space-x-2">
        <button
       @click="signingUp" 
       class="w-1/2 py-2 text-white bg-blue-700 rounded-lg hover:cursor-pointer hover:bg-yellow-500 hover:text-white" >
       Sign Up
       </button>
    <button 
    type="submit" 
    @submit.prevent="logginIn" 
       class="w-1/2 py-2 text-yellow-500 bg-black rounded-lg hover:bg-yellow-500 hover:text-white" >
       Login
       </button>
       </div>
    <button @click="google"
    class="flex justify-center bg-white rounded-lg hover:bg-grey-300">
    <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
               alt="">
      </button>
    </form>
</div>
<div v-if="error"
 class="py-4 text-center text-white bg-red-600 rounded-lg" >{{ error }}</div>
</template>
 
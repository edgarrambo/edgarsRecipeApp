import { ref } from "vue";

const isAuthenticated = ref(false);

const user = ref("");

const usersFromDB = [
  { username: "edgar", password: "password", name: "Edgarinho" },
  { username: "admin", password: "password", name: "Admin" },
];

const useAuth = () => {
  const login = (username, password) => {
    const userFromDB = usersFromDB.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDB) {
      isAuthenticated.value = true;
      user.value = usersFromDB.name;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, logout, user };
};

export default useAuth;

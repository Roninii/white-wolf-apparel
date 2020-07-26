<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "@/components/Nav/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return { unsubscribeFromAuth: null };
  },
  created() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // dispatch to vuex store
        userRef.onSnapshot((snapshot) => {
          this.$store.dispatch("user/updateCurrentUser", {
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.$store.dispatch("user/updateCurrentUser", userAuth);
      }
    });
  },
  beforeDestroy() {
    this.unsubscribeFromAuth();
  },
};
</script>

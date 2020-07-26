<template>
    <div class="sign-up">
        <h2 class="title">I do not have an account.</h2>
        <span>Sign up with your email and password.</span>

        <form class="sign-up-form" @submit.prevent="handleSubmit">
            <BaseInput
                type="text"
                name="displayName"
                label="Display Name"
                :value="displayName"
                v-model="displayName"
                required
            />
            <BaseInput
                type="email"
                name="email"
                label="Email"
                :value="email"
                v-model="email"
                required
            />
            <BaseInput
                type="password"
                name="password"
                label="Password"
                :value="password"
                v-model="password"
                required
            />
            <BaseInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                :value="confirmPassword"
                v-model="confirmPassword"
                required
            />

            <BaseButton type="submit">Sign Up</BaseButton>
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/Base/BaseInput';
import BaseButton from '@/components/Base/BaseButton';

import { auth, createUserProfileDocument } from '@/firebase/firebase.utils';

export default {
    name: 'SignUp',
    data() {
        return {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    components: {
        BaseInput,
        BaseButton,
    },
    methods: {
        async handleSubmit() {
            const { password, confirmPassword, displayName, email } = this;

            if (password !== confirmPassword) return;

            // create user record
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);

                await createUserProfileDocument(user, displayName);

                this.displayName = '';
                this.email = '';
                this.password = '';
                this.confirmPassword = '';
            } catch (e) {
                console.log('There was a problem creating the user.', e);
            }
        },
    },
};
</script>

<style lang="postcss" scoped>
.sign-up {
    display: flex;
    flex-direction: column;
    width: 380px;

    & .title {
        margin: 10px 0;
    }
}
</style>

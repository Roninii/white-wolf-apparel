<template>
    <article class="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form @submit.prevent="handleSubmit">
            <BaseInput
                id="email"
                type="email"
                name="email"
                required
                v-model="email"
                label="email"
            />

            <BaseInput
                id="password"
                type="password"
                name="password"
                required
                v-model="password"
                label="password"
            />

            <section class="button-group">
                <BaseButton type="submit">
                    Sign In
                </BaseButton>

                <BaseButton @click.prevent="signInWithGoogle" isGoogleSignIn>
                    Sign in with Google
                </BaseButton>
            </section>
        </form>
    </article>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton';
import BaseInput from '@/components/Base/BaseInput';

export default {
    name: 'SignIn',
    components: {
        BaseButton,
        BaseInput,
    },
    data() {
        return { email: '', password: '' };
    },
    methods: {
        handleSubmit() {},
        signInWithGoogle() {
            console.log('test');
        },
    },
};
</script>

<style lang="postcss" scoped>
.sign-in {
    width: 380px;
    display: flex;
    flex-direction: column;

    & .title {
        margin: 10px 0;
    }

    & .button-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.3rem;
        gap: 0.3rem;
    }
}
</style>

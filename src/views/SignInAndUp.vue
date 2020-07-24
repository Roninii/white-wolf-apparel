<template>
    <div class="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
</template>

<script>
import SignIn from '@/components/SignInUp/SignIn';
import SignUp from '@/components/SignInUp/SignUp';

export default {
    name: 'SignInAndUp',
    components: {
        SignIn,
        SignUp,
    },
};
</script>

<style lang="postcss" scoped>
.sign-in-and-sign-up {
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
}
</style>

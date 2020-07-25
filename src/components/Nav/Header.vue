<template>
    <header class="header">
        <router-link class="logo-container" to="/">
            <Logo class="logo" />
        </router-link>
        <nav class="options">
            <router-link class="option" to="/shop">
                Shop
            </router-link>
            <router-link class="option" to="/contact">
                Contact
            </router-link>

            <!-- Sign in / Sign out -->
            <button v-if="currentUser" class="option">
                Sign Out
            </button>
            <router-link v-else class="option" to="/sign-in">
                Sign In
            </router-link>

            <CartIcon />
        </nav>
        <!-- <Cart /> -->
    </header>
</template>

<script>
import Logo from '@/components/Logo';
import CartIcon from '@/components/Nav/CartIcon';

export default {
    name: 'Header',
    data() {
        return {
            currentUser: false,
        };
    },
    components: {
        Logo,
        CartIcon,
    },
};
</script>

<style lang="postcss" scoped>
.header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    line-height: 1.2rem;
    position: relative;

    & .logo-container {
        height: 100%;
        width: 70px;

        & .logo {
            width: 100%;
            height: auto;
        }
    }

    & .options {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 1rem;

        & button.option {
            height: 100%;
            line-height: 1.2rem;
            font-size: 24px;
            font-family: inherit;
            background-color: transparent;
            border: none;
            display: flex;
            align-items: flex-end;
        }

        & .option {
            padding: 10px 15px;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
}
</style>

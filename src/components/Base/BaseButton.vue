<template>
    <button
        :class="[isGoogleSignIn ? 'google-sign-in' : '', inverted ? 'inverted' : '', 'base-button']"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        isGoogleSignIn: {
            type: Boolean,
            default: false,
        },
        inverted: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="postcss" scoped>
.base-button {
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: var(--black);
    color: #fff;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #fff;
        color: var(--black);
        border: 1px solid var(--black);
    }

    &.google-sign-in {
        background-color: var(--google-blue);
        color: #fff;

        &:hover {
            background-color: var(--google-blue-darker);
            border: none;
        }
    }

    &.inverted {
        background: #fff;
        color: var(--black);
        border: 1px solid var(--black);

        &:hover {
            background-color: var(--black);
            color: #fff;
            border: 1px solid #fff;
        }
    }
}
</style>

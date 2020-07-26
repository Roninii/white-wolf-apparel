<template>
    <div class="group">
        <input :id="name" class="form-input" :value="value" v-bind="$attrs" v-on="eventListeners" />
        <label v-if="label" :for="name" :class="[value.length ? 'shrink' : '', 'form-input-label']">
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        value: {
            type: null,
        },
    },

    computed: {
        eventListeners() {
            // `Object.assign` merges objects together to form a new object
            return Object.assign(
                {},
                // We add all the listeners from the parent
                this.$listeners,
                // Then we can add custom listeners or override the
                // behavior of some listeners.
                {
                    // This ensures that the component works with v-model
                    input: e => {
                        this.$emit('input', e.target.value);
                    },
                }
            );
        },
    },
};
</script>

<style lang="postcss" scoped>
.group {
    position: relative;
    margin: 45px 0;

    & .form-input {
        background: none;
        background-color: #fff;
        color: var(--gray);
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid var(--gray);
        margin: 25px 0;

        &:focus,
        &:required {
            outline: none;
            box-shadow: none;
        }

        &:focus ~ .form-input-label {
            top: -14px;
            font-size: 12px;
            color: var(--black);
        }
    }

    & input[type='password'] {
        letter-spacing: 0.3em;
    }

    & .form-input-label {
        color: var(--gray);
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;

        &.shrink {
            top: -14px;
            font-size: 12px;
            color: var(--black);
        }
    }
}
</style>

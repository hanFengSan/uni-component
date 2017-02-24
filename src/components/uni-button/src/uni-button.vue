<template>
    <button :class="classes" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    const name = "uni-button";

    export default {
        name: name,

        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            loading: Boolean,
            disabled: Boolean
        },
        data() {
            return {

            }
        },
        computed: {
            classes() {
                return [
                    name,
                    this.type,
                    this.size ? `${name}-${this.size}` : '',
                    {
                        [`${name}-${this.loading}`]: this.loading,
                        [`${name}-${this.disabled}`]: this.disabled
                    }
                ]
            }
        }
    }
</script>
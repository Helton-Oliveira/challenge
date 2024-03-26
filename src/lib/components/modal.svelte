<script>
    import "../styles.css";

    export let active = false;
    export let disable = true;

    function colseModal() {
        active = false;
        disable = true
    }

    // @ts-ignore
    function handleClick(event) {
        console.log(event.currentTarget)
        if (event.target !== event.currentTarget) {
            colseModal()
        }
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="fixed inset-0 flex items-center justify-center z-50" class:active class:disable on:click={handleClick}>
    <div class="absolute bg-gray-900 bg-opacity-50 inset-0"></div>
    <div class="relative bg-slate-800 text-slate-50 w-60 p-4 rounded-lg z-50">
        <button class="absolute top-0 right-0 mt-1 mr-1 " on:click={colseModal}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <slot></slot>
    </div>
</div>

<style>
    .active {
        display: flex;
    }

    .disable{
        display: none;
    }
</style>


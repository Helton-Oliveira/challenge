<script>
    // @ts-nocheck
    import { timer } from "../../stores/timer";
    export let count = {} || null;
    import Timer from "./Timer.svelte";

    $: console.log(count);
    $: completeTime = `${count.minutes} : ${count.seconds}`;

    $: timer.updateTime(completeTime);
</script>

<div class="count_container">
    {#key count}
        {#if count}
            <Timer>{completeTime}</Timer>
        {/if}
    {/key}
</div>

<style>
</style>

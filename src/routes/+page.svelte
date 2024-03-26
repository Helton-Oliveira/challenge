<script>
    // @ts-nocheck
    import Count from "$lib/components/Count.svelte";
    import { goto } from "$app/navigation";
    import "../global-styles.css";
    import Form from "../lib/components/Form.svelte";
    import Modal from "$lib/components/modal.svelte";

    $: count = 0;
    $: active = false;
    $: disable = true;
    let user = null;

    function start(event) {
        count = event.detail;
    }

    function nextPage(event) {
        user = event.detail;
        active = true;
        disable = false;
        if (active && user) {
            setTimeout(() => {
                goto("/candidate");
            }, 3000);
        }
    }
</script>

<header:svelte>
    <title>challege</title>
</header:svelte>

<div>
    {#if count.seconds === 0}
        <Modal active={count.seconds === 0} disable={count.seconds > 0}
            >{"Desafio Finalizado com falha!"}</Modal
        >
    {:else if active}
        <Modal {active} {disable}>{"Desafio Finalizado com sucesso!"}</Modal>
    {/if}

    <Form on:regressiveTime={start} on:message={nextPage} />
    <Count {count} />
</div>

<script>
    // @ts-nocheck
    import { createEventDispatcher } from "svelte";
    import { countdown } from "$lib/utils/timer";
    import Button from "./Button.svelte";
    import { user } from "$lib/utils/createUser";

    let start = false;

    let inputName = "";
    let inputTel = "";
    let inputEmail = "";

    const initialize = () => {
        countdown(dispach);
        start = true;
    };

    function completeChallenge() {
        if (inputEmail !== "" && inputName !== "" && inputTel !== "") {
            localStorage.setItem(
                "user",
                JSON.stringify(user(inputName, inputTel, inputEmail)),
            ),
                dispach("message", JSON.parse(localStorage.getItem("user")));
        }
    }

    const dispach = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<Button disable={start} center="">
    <button on:click={initialize} data-btn="init">Iniciar Desafio</button>
</Button>
{#if start}
    <form action="" on:submit|preventDefault={completeChallenge} data-form="sub">
        <input type="text" placeholder="name" bind:value={inputName} data-input="name"/>
        <input
            type="text"
            placeholder="Tel"
            bind:value={inputTel}
            data-input="tel"
        />
        <input type="text" placeholder="E-mail" bind:value={inputEmail} data-input="email"/>
        <Button disable={!start} center={""}>
            <button data-btn="send">Enviar</button>
        </Button>
    </form>
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input {
        padding: 0.75em;
        width: 100%;
        border-radius: 15px;
        border: transparent;
    }

    input::placeholder {
        color: #d3bfbffe;
        text-align: center;
    }
</style>

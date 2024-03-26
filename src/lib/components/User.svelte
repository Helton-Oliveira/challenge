<script>
// @ts-nocheck

    import Button from "../../lib/components/Button.svelte";
    import { onMount } from "svelte";
    
    $: fullUser = null ;
    $: active = false;

    
    onMount(() => {
        // @ts-ignore
        fullUser = JSON.parse(localStorage.getItem('user'))
    })
    
    function backPage(){
        active = false
        localStorage.clear()
    }


</script>

{#if fullUser}
    <div>
        <!-- svelte-ignore a11y-missing-content -->
        <h2 class="nameUser">Name:  { fullUser.userName }</h2>
        <!-- svelte-ignore a11y-missing-content -->
        <h2 class="email">Tel:  { fullUser.tel }</h2>
        <!-- svelte-ignore a11y-missing-content -->
        <h2 class="tel">E-mail:  { fullUser.email }</h2>
        <Button center=''><a href="/" on:click={backPage}>Voltar</a></Button>
    </div>
{/if}

<style>

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .nameUser {
      font-size: 2rem;
      color: #333;
    }
  
    .email, .tel {
      font-size: 1.5rem;
      color: #666;
    }

    a{
        text-decoration: none;
    }
  

  </style>
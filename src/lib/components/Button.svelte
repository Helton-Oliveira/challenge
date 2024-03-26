<script>
    export let disable = false; 

    export let center = '';

</script>

<button class="btn {center}" type="submit" class:disable >
    <slot></slot>
</button>

<style>
    
    .btn{
        padding: 0.5em;
        border-radius: 15px;
        cursor: pointer;
        width: 100%;
    }

    .centerForPage{
        display: flex;
        margin: auto;
        padding-top: 15rem;
    }

    .disable{
        display: none;
    }

    Button {
      font-size: 1.2rem;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    Button:hover {
      background-color: #45a049;
      
    }
  
    Button:active {
      background-color: #3e8e41;
    }

</style>
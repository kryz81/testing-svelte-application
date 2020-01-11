<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let amount = '';
  let description = '';

  const add = () => {
    if (amount === '' || isNaN(amount) || description === '') {
      return;
    }
    dispatch('add', { amount, description });
    amount = '';
    description = '';
  };
</script>

<div class="form form-inline">
  <input type="text" class="form-control amount" bind:value={amount} />
  <strong>&euro;</strong>
  <input
    type="text"
    class="form-control description"
    bind:value={description} />
  <button class="btn btn-primary" on:click={add}>
    <strong>ADD</strong>
  </button>
</div>

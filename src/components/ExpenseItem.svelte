<script>
  import { createEventDispatcher } from 'svelte';
  import formatAmount from '../services/formatAmount';

  const dispatch = createEventDispatcher();

  export let id;
  export let amount;
  export let description = '';

  const deleteItem = () => dispatch('delete', id);
</script>

<div class="card">
  <div class="card-body">
    <strong class="item-amount">{formatAmount(amount)} &euro;</strong>
    {description}
    <span class="item-delete">
      <a href="" on:click|preventDefault={deleteItem}>
        <i class="fas fa-trash" />
      </a>
    </span>
  </div>
</div>

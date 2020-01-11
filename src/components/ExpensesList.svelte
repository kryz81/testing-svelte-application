<script>
  import { createEventDispatcher } from 'svelte';
  import ExpenseItem from './ExpenseItem';

  export let list = [];
  const dispatch = createEventDispatcher();

  const onFilter = event => dispatch('filter', event.target.value);
</script>

<div class="form-group row item-filter">
  <label for="inputFilter" class="col-sm-2 col-form-label">
    <strong>Filter</strong>
  </label>
  <div class="col-sm-10">
    <input
      type="text"
      class="form-control"
      id="inputFilter"
      on:input={onFilter} />
  </div>
</div>

{#each list as item (item.id)}
  <ExpenseItem
    id={item.id}
    amount={item.amount}
    description={item.description}
    on:delete />
{/each}

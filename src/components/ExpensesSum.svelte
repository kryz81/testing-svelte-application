<script>
  import formatAmount from '../services/formatAmount';

  export let items = [];
  let sum;

  $: sum = items.reduce((currentSum, item) => currentSum + item.amount, 0);
</script>

<h4 class="text-right">&sum; {formatAmount(sum)} &euro;</h4>

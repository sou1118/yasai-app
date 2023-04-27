<script>
    import { vegetables } from '../data';
    export let selectedVegetable;
  </script>
  
  <select bind:value={selectedVegetable} class="select select-bordered">
    <option value="">野菜を選択</option>
    {#each vegetables as vegetable}
      <option value={vegetable.id}>{vegetable.name}</option>
    {/each}
  </select>
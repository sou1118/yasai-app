<script>
    import { seasonings } from '../data';
    export let selectedSeasoning;
  </script>
  
  <select bind:value={selectedSeasoning} class="select select-bordered">
    <option value="">調味料を選択</option>
    {#each seasonings as seasoning}
      <option value={seasoning.id}>{seasoning.name}</option>
    {/each}
  </select>
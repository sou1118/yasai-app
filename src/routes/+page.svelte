<script>
    import SelectVegetable from '../components/SelectVegetable.svelte';
    import SelectSeasoning from '../components/SelectSeasoning.svelte';
    import { storageTimes } from '../data';
    
    let selectedVegetable = '';
    let selectedSeasoning = '';
    let storageTime = '';
  
    $: if (selectedVegetable && selectedSeasoning) {
      const result = storageTimes.find(
        (item) => item.vegetableId == selectedVegetable && item.seasoningId == selectedSeasoning
      );
      storageTime = result ? result.duration : '組み合わせが見つかりません';
    }
  </script>
  
  <div class="min-h-screen bg-base-100 flex items-center justify-center">
    <div class="card shadow-lg w-1/3">
      <h1 class="text-3xl font-bold mb-4">野菜と調味料の保存期限</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">野菜を選択</span>
          </label>
          <SelectVegetable bind:selectedVegetable />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">調味料を選択</span>
          </label>
          <SelectSeasoning bind:selectedSeasoning />
        </div>
  
        {#if storageTime}
          <p class="text-xl mt-4">保存期限: <span class="font-bold">{storageTime}日</span></p>
        {:else}
          <p class="text-xl mt-4">野菜と調味料を選択してください</p>
        {/if}
      </div>
    </div>
  </div>

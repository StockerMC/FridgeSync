<script lang="ts">
	import type { Tables } from "$lib/database-types.js";
    import { invalidateAll } from '$app/navigation';

	export let item:Tables<'fridge'>;
    import { getContext } from 'svelte';
    const { close } = getContext('simple-modal') as any;
</script>

<section class="container mx-auto px-4">
	<form>
		<label class="label">
			<span>Name</span>
			<input class="input" type="text" value={item.name}/>
		</label>
		<label class="label">
			<span>Category</span>
			<select class="select">
				<option value="Fruits" selected={item.type==="Fruits"}>Fruits</option>
				<option value="Vegetables" selected={item.type==="Vegetables"}>Vegetables</option>
				<option value="Grains" selected={item.type==="Grains"}>Grains</option>
				<option value="Meat" selected={item.type==="Meat"}>Meat</option>
				<option value="Dairy" selected={item.type==="Dairy"}>Dairy</option>
				<option value="Sweets" selected={item.type==="Sweets"}>Sweets</option>
				<option value="Beverages" selected={item.type==="Beverages"}>Beverages</option>
				<option value="Condiments" selected={item.type==="Condiments"}>Condiments</option>
				<option value="Other" selected={item.type==="Other"}>Other</option>
			</select>
		</label>
		<label class="label">
			<span>Quantity</span>
			<input class="input" type="number" name="quantity" min="0" step="1" value={item.quantity} />
		</label>
		<label class="label">
			<span>Calories</span>
			<input class="input" type="number" name="calories" min="0" step="1" value={item.calories} />
		</label>
		<div class="flex justify-end mt-4">
			<button class="btn variant-ghost" on:click={close}>Cancel</button>
			<button class="btn variant-filled ml-3" on:click={async () => {
				const category = document.getElementsByTagName('select')[0].value || item.type;
				const name = document.getElementsByTagName('input')[0].value || item.name;
				const quantity = document.getElementsByTagName('input')[1].value || item.quantity;
				const calories = document.getElementsByTagName('input')[2].value || item.calories;

				const response = await fetch(`/api/update-item?name=${name}&type=${category}&quantity=${quantity}&calories=${calories}&id=${item.id}`,
					{
						method: 'POST'
					}
				);
				invalidateAll()
				close();


			}}>Submit</button>
		</div>
	</form>
</section>
<script lang="ts">
	import { onMount } from 'svelte';

	const toBase64: (file: File) => any = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = reject;
	});


	onMount(() => {
		document.getElementsByTagName('button')[0].addEventListener('click', async () => {
	// @ts-ignore
	let a = document.getElementsByTagName('input')[0].files[0];
	console.log(a)
	// TODO: save image to database
  const data = new FormData();
  // @ts-ignore
  
  data.append('image', await toBase64(a));
  const response = await fetch(`/api/add-item`, {
                method: 'POST',
                body: data
            })
  console.log(await response.text())
	})
})


</script>

<input type="file"/>Test
<button>
Submit
</button>
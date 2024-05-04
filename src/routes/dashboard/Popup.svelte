<script lang="ts">
	import { onMount } from "svelte";
    import { invalidateAll } from '$app/navigation';

    export let message = 'Hi';
    import { getContext } from 'svelte';
    const { close } = getContext('simple-modal') as any;
    
    let stream: MediaStream;
    let videoRef: HTMLVideoElement;
    let canvasRef: HTMLCanvasElement;


    let width = 0;    // We will scale the photo width to this
    let height = 0;     // This will be computed based on the input stream
    async function getStream() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            videoRef.srcObject = stream;
        } catch (err) {
            console.error(err);
        }
        console.log(stream.getTracks()[0])


        videoRef.addEventListener(
            "canplay",
            (ev) => {
                // if (!streaming) {
                width = videoRef.offsetWidth;
                height = videoRef.offsetHeight;
                // height = videoRef.videoHeight / (videoRef.videoWidth / width);

                // // Firefox currently has a bug where the height can't be read from
                // // the video, so we will make assumptions if this happens.

                // if (isNaN(height)) {
                //     height = width / (4 / 3);
                // }

                videoRef.setAttribute("width", width.toString());
                videoRef.setAttribute("height", height.toString());
                canvasRef.setAttribute("width", width.toString());
                canvasRef.setAttribute("height", height.toString());
                // }
            },
            false,
            );
    }

    async function stopStream() {
        function clearphoto() {
            const context = canvasRef.getContext("2d") as CanvasRenderingContext2D;
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvasRef.width, canvasRef.height);

            // const data = canvasRef.toDataURL("image/png");
            // photo.setAttribute("src", data);
        }

        function takepicture() {
            const context = canvasRef.getContext("2d") as CanvasRenderingContext2D;
            if (width && height) {
                canvasRef.width = width;
                canvasRef.height = height;
                context.drawImage(videoRef, 0, 0, width, height);
                videoRef.classList.add('hidden')

                const base64Url = canvasRef.toDataURL("image/png");
                async function request() {
                    const data = new FormData();
                    data.append('image', base64Url);
                    const response = await fetch(`/api/add-item`, {
                        method: 'POST',
                        body: data
                    })
                    console.log(await response.text())
                    invalidateAll();
                }
                request()
            } else {
                clearphoto();
            }
            close();
        }

        takepicture();

        stream.getTracks().forEach(track => track.stop());
        videoRef.srcObject = null;
    }

    onMount(() => {
        getStream();
    })


</script>
  
<section class="container mx-auto px-4">
    <!-- <button class="rounded-sm bg-slate-600 text-white px-4 py-2" on:click={getStream}>Start Stream</button> -->
    <button class="rounded-sm bg-red-600 text-white px-4 py-2" on:click={stopStream}>Take</button>
    <video class="mt-4 rounded-sm " width="640" height="480" autoplay={true} bind:this={videoRef} />
    <canvas id="canvas" class="d-none" bind:this={canvasRef}></canvas>
    
</section>
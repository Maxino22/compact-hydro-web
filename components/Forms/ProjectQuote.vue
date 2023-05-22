<template>
	<form class="w-full px-3" @submit="handleSubmit">
		<p class="text-black text-md my-3">
			We are soo happy to hear about your project leave us a message and one of
			us will get back to you.
		</p>
		<div class="felx flex-col space-y-4">
			<input
				class="px-4 py-2 w-full border"
				type="text"
				placeholder="Your Name*"
				required
				v-model="name"
			/>
			<input
				class="px-4 py-2 w-full border"
				type="email"
				placeholder="Your Email*"
				required
				v-model="email"
			/>
			<input
				class="px-4 py-2 w-full border"
				type="text"
				placeholder="Your Company"
				v-model="company"
			/>
			<textarea
				placeholder="Project Details"
				class="w-full border p-2"
				rows="10"
				v-model="message"
			></textarea>

			<div>
				<label for="file"> Share any Document for the project</label>
				<input class="border w-full p-2" type="file" />
			</div>
		</div>
		<button class="bg-primary w-full text-white my-5 p-2 text-center">
			submit
		</button>
	</form>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')

const handleSubmit = () => {}
</script>

<style scoped></style>

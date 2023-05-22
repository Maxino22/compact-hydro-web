<template>
	<form class="w-full px-3" @submit="handleSubmit">
		<p class="text-black text-md my-3">
			If you have have an general Enquiry leave us a message and one of us will
			get back to you.
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
				placeholder="How can we Help?"
				class="w-full border p-2"
				rows="10"
				v-model="message"
			></textarea>
		</div>
		<button class="bg-primary w-full text-white p-2 text-center">submit</button>
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

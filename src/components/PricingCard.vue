<template>
    <div class="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
        :class="{ 'border-2 border-indigo-500': isPopular }">
        <span v-if="isPopular" class="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded-bl-md">
            Phổ biến
        </span>
        <h2 class="text-xl font-bold text-gray-800">{{ planName }}</h2>
        <p class="text-gray-600 text-sm mt-1">{{ formattedPrice }}</p>
        <ul class="mt-4 space-y-2">
            <li v-for="(feature, index) in features" :key="index" class="text-sm text-gray-600 flex items-center">
                <span class="text-green-500 mr-2">✔</span> {{ feature }}
            </li>
        </ul>
        <button class="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
            Chọn gói
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PricingCard",
    props: {
        planName: String,
        price: Number,
        features: Array<String>,
        isPopular: Boolean,
        month: Number
    },
    computed: {
        formattedPrice(): string {
            return this.price === 0 ? "Miễn phí" : `${this.price}K/${this.month ? this.month + " " : ''}tháng`;
        },
    },
});
</script>
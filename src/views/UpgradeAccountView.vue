<script setup lang="ts">
import PricingCard from '@/components/PricingCard.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <!-- Header -->
    <header class="w-full text-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Nâng cấp tài khoản</h1>
      <p class="text-sm text-gray-600">Trải nghiệm thêm nhiều tính năng cao cấp</p>
    </header>

    <!-- Pricing Cards -->
    <div class="w-full max-w-lg grid gap-4">
      <PricingCard
        plan-name="Free"
        :price="0"
        :features="['Truy cập cơ bản', 'Quảng cáo hạn chế']"
        :is-popular="false"
      />
      <PricingCard
        plan-name="Trả phí"
        :price="239"
        :features="['Không giới hạn truy cập', 'Hỗ trợ ưu tiên', 'Không quảng cáo']"
        :is-popular="true"
      />
      <PricingCard
        plan-name="Combo 3 tháng"
        :price="689"
        :features="['Không giới hạn truy cập', 'Hỗ trợ ưu tiên', 'Không quảng cáo']"
        :is-popular="false"
        :month="3"
      />
    </div>
  </div>
</template>

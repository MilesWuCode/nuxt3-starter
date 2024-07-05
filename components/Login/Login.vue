<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().email({ message: 'Must be a valid email' }),
    password: zod.string().min(8, { message: 'Too short' }),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="w-full max-w-xs">
    <form class="space-y-4" @submit="onSubmit">
      <!-- Email -->
      <label class="form-control" :class="{ 'label-error': errors.email }">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input
          v-model="email"
          type="text"
          placeholder="Your email"
          class="input input-bordered"
          autocomplete="email"
        />
        <div class="label">
          <span class="label-text-alt">{{ errors.email }}</span>
        </div>
      </label>

      <!-- Password -->
      <label class="form-control" :class="{ 'label-error': errors.password }">
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input
          v-model="password"
          type="password"
          placeholder="********"
          class="input input-bordered"
          autocomplete="current-password"
        />
        <div class="label">
          <span class="label-text-alt">{{ errors.password }}</span>
        </div>
      </label>

      <button type="submit" class="btn btn-primary w-full">Submit</button>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
.label-error .label-text,
.label-error .label-text-alt {
  @apply text-error;
}

.label-error .input {
  @apply input-error;
}
</style>

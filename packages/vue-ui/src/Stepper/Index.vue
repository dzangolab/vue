<template>
  <div class="stepper">
    <ul class="steps">
      <li
        v-for="(stepItem, index) in steps"
        :class="[
          'step',
          { active: index === activeIndex, completed: index < activeIndex },
        ]"
        :key="index"
      >
        <span
          :class="[
            'step-number',
            { active: index === activeIndex, completed: index < activeIndex },
          ]"
        >
          <template v-if="index < activeIndex">
            <img src="../assets/svg/tick-mark.svg" />
          </template>
          <template v-else>
            {{ stepItem.step || index + 1 }}
          </template>
        </span>
        <span
          v-if="stepItem.label"
          :class="{ active: index === activeIndex }"
          class="step-label"
        >
          {{ stepItem.label }}
        </span>
      </li>
    </ul>

    <template v-for="(stepItem, index) in steps" :key="index">
      <div v-if="index === activeIndex && stepItem.content" class="content">
        <slot :name="stepItem?.step">
          {{ stepItem.content }}
        </slot>
      </div>
    </template>

    <div class="actions">
      <ButtonElement
        :disabled="disablePrevious || previousButtonProperties?.disabled"
        :icon-left="previousButtonProperties?.iconLeft"
        :icon-right="previousButtonProperties?.iconRight"
        :label="previousButtonProperties?.label ?? 'Previous'"
        :rounded="previousButtonProperties?.rounded"
        :severity="previousButtonProperties?.severity"
        :size="previousButtonProperties?.size"
        :variant="previousButtonProperties?.variant ?? 'outlined'"
        @click="onPrevious"
      />
      <ButtonElement
        :disabled="disableNext || nextButtonProperties?.disabled"
        :icon-left="nextButtonProperties?.iconLeft"
        :icon-right="nextButtonProperties?.iconRight"
        :label="
          activeIndex === steps.length - 1
            ? 'Finish'
            : nextButtonProperties?.label ?? 'Next'
        "
        :rounded="nextButtonProperties?.rounded"
        :severity="
          activeIndex === steps.length - 1
            ? 'success'
            : nextButtonProperties?.severity ?? 'primary'
        "
        :size="nextButtonProperties?.size"
        :variant="nextButtonProperties?.variant"
        @click="onNext"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Stepper",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

import { ButtonElement } from "../index";

import type { ActionButtonProperties, StepProperties } from "../types/stepper";
import type { PropType } from "vue";

const props = defineProps({
  nextButtonProperties: {
    default: null,
    type: Object as PropType<ActionButtonProperties>,
  },
  previousButtonProperties: {
    default: null,
    type: Object as PropType<ActionButtonProperties>,
  },
  steps: {
    type: Array as PropType<StepProperties[]>,
    required: true,
  },
});

const emit = defineEmits(["complete"]);

const activeIndex = ref<number>(0);
const disableNext = ref<boolean>(false);
const disablePrevious = ref<boolean>(true);

const onNext = () => {
  if (activeIndex.value < props.steps.length - 1) {
    activeIndex.value++;
    disablePrevious.value = false;
  } else {
    emit("complete");
  }
};

const onPrevious = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
    disableNext.value = false;
  }

  if (!activeIndex.value) {
    disablePrevious.value = true;
  }
};
</script>

<style lang="css" scoped>
@import "@/assets/css/stepper.css";
</style>

<template>
  <Page :title="$t('form.label.datePicker')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker v-model="formData.noLabelInput" />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.arrivalDate"
            :label="$t('form.label.arrivalDate')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="dateOfBirth"
              :label="t('form.label.dateOfBirth')"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
          import { useI18n } from "@dzangolab/vue3-i18n";
  
          const dateOfBirth = ref(new Date());
          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.dateOfBirth"
            :label="$t('form.label.dateOfBirth')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="appointDate"
              label="Appointment date"
              disabled
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const appointmentDate = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.appointmentDate"
            :label="$t('form.label.appointmentDate')"
            disabled
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableWeekDays") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="presentationDate"
              :disabled-week-days="[6, 0]"
              label="Presentation date"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const presentationDate = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.presentationDate"
            :disabled-week-days="[6, 0]"
            :label="$t('form.label.presentationDate')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customFormat") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="dateOfBirth"
              format="yyyy/MM/dd"
              label="Date of birth"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const dateOfBirth = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.dateOfBirth"
            format="yyyy/MM/dd"
            :label="$t('form.label.dateOfBirth')"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dateRange") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="dateRange"
              label="Date range"
              range
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const dateRange = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.dateRange"
            :label="$t('form.label.dateRange')"
            range
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiCalendars") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="reportDate"
              label="Report date"
              multi-calendars
              range
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const reportDate = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.reportDate"
            :label="$t('form.label.reportDate')"
            multi-calendars
            range
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dateTimePicker") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="availableDatetime"
              label="Available datetime"
              enable-time-picker
              multi-calendars
              range
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const availableDatetime = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.availableDatetime"
            :label="$t('form.label.availableDatetime')"
            enable-time-picker
            multi-calendars
            range
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.monthPicker") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="month"
              format="MMM"
              label="Month"
              month-picker
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const month = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.month"
            format="MMM"
            :label="$t('form.label.month')"
            month-picker
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.monthAndYearPicker") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="monthAndYear"
              label="Month and year"
              month-picker
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const monthAndYear = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.month"
            :label="$t('form.label.monthAndYear')"
            month-picker
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.yearPicker") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="year"
              label="Year"
              year-picker
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const year = ref(new Date().getFullYear()),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.year"
            :label="$t('form.label.year')"
            year-picker
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.timePicker") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="appointmentTime"
              label="Appointment time"
              time-picker
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.time"
            :label="$t('form.label.appointmentTime')"
            time-picker
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="joinedDate"
              :schema="inputSchema"
              label="Joined date"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker, Form } from "@dzangolab/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z.coerce
            .date()
            .max(new Date(), { message: "Please provide a present or past date" });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.joinedDate"
            :label="$t('form.label.joinedDate')"
            :schema="inputSchema"
          />
        </Form>
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customStyleInput") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="pickupDate"
              class="custom-style-input"
              label="Pickup date"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@dzangolab/vue3-form";
          &lt;/script&gt;
  
          &lt;style lang="css"&gt;
          .custom-style-input input {
            --dp-background-color: #f3f3f3;
            --dp-border-color: var(--dz-primary-color);
            --dp-border-radius: 0.5em;
            --dp-font-size: 1rem;
            --dp-text-color: var(--dz-primary-color);
          }
  
          .custom-style-input .dp--clear-btn {
            --dp-icon-color: var(--dz-primary-color);
          }
  
          .custom-style-input .dp__input_icon {
            --dp-icon-color: var(--dz-primary-color);
          }
  
          .custom-style-input label {
            --_label-color: var(--dz-primary-color);
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Form>
          <DatePicker
            v-model="formData.pickupDate"
            :label="$t('form.label.pickupDate')"
            class="custom-style-input"
          />
        </Form>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "DatePickerInput",
};
</script>

<script setup lang="ts">
import { DatePicker, Form } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z.coerce
  .date()
  .max(new Date(), { message: t("form.errors.datePicker.invalid") });

const startDate = new Date();
const endDate = startDate;

let formData = reactive({
  appointmentDate: ref(startDate),
  arrivalDate: ref(),
  availableDatetime: ref([
    startDate,
    new Date(endDate.setDate(endDate.getDate() + 7)),
  ]),
  dateOfBirth: ref(startDate),
  dateRange: ref([startDate, new Date(endDate.setDate(endDate.getDate() + 7))]),
  joinedDate: ref(),
  month: ref(),
  monthAndYear: ref(),
  noLabelInput: ref(),
  pickupDate: ref(),
  presentationDate: ref(startDate),
  reportDate: ref([
    startDate,
    new Date(endDate.setDate(endDate.getDate() + 7)),
  ]),
  time: ref(),
  year: ref(startDate.getFullYear()),
});
</script>

<style lang="css">
.custom-style-input input {
  --dp-background-color: #f3f3f3;
  --dp-border-color: var(--dz-primary-color);
  --dp-border-radius: 0.5em;
  --dp-font-size: 1rem;
  --dp-text-color: var(--dz-primary-color);
}

.custom-style-input .dp--clear-btn {
  --dp-icon-color: var(--dz-primary-color);
}

.custom-style-input .dp__input_icon {
  --dp-icon-color: var(--dz-primary-color);
}

.custom-style-input label {
  --_label-color: var(--dz-primary-color);
}
</style>

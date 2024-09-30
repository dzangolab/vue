<template>
  <div>
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <button :disabled="disabled" @click="open">{{ selectButtonLabel }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "FileUpload",
};
</script>

<script setup lang="ts">
import { toRaw } from "vue";
import { useDropzone } from "vue3-dropzone";

const props = defineProps({
  accept: {
    default: null,
    type: [String, Array<string>],
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  selectButtonLabel: {
    default: "Select File",
    type: String,
  },
  selectFile: {
    default: true,
    type: Boolean,
  },
});

const { accept, disabled } = toRaw(props);

function onDrop(acceptedFiles: File[], rejectReasons: any[]) {
  console.log(acceptedFiles);
  console.log(rejectReasons);
}

const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  onDrop,
  accept,
  disabled,
});
</script>

<template>
    <tr ref="rowRef" class="draggable-row" v-bind="dragRef">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>
        <v-btn icon color="primary">
          <v-icon>mdi-drag</v-icon>
        </v-btn>
      </td>
    </tr>
  </template>
  
  <script >
  import { ref } from 'vue';
  import { useDraggable, useDroppable } from 'vue3-dnd';
  
  export default {
    props: ['item', 'index'],
    emits: ['move'],
    setup(props, { emit }) {
      const rowRef = ref(null);
  
      const { dragRef } = useDraggable({
        item: { type: 'row', index: props.index },
      });
  
      const { dropRef } = useDroppable({
        accept: 'row',
        drop: (dragItem) => {
          if (dragItem.index !== props.index) {
            emit('move', dragItem.index, props.index);
          }
        },
      });
  
      return { rowRef, dragRef, dropRef };
    }
  };
  </script>
  
  <style scoped>
  .draggable-row {
    cursor: grab;
  }
  </style>
  
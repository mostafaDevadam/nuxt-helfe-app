<script setup>

const users = ref([
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    exclusive: true,
    active: false,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    exclusive: false,
    active: true,
  },
])
/*
const items = ref(new Array(1000).fill(null).map((_, idx) => {
  const u = { ...(idx % 2 ? users.value[0] : users.value[1]) };
  u.id = idx;
  return u;
}))
*/

const headers = ref([
  { text: 'Dessert (100g serving)', value: 'name' },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Carbs (g)', value: 'carbs' },
  { text: 'Protein (g)', value: 'protein' },
])

const items$ = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  // Add more items as needed
])

const onDragEnd = (event) => {
  console.log('Drag ended', event);
}



const headers$ = ref([
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Actions', value: 'actions' }
])


const rows = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' }
]);

const moveRow = (dragIndex, hoverIndex) => {
  const movedItem = rows.value.splice(dragIndex, 1)[0];
  rows.value.splice(hoverIndex, 0, movedItem);
};

const onDrop = (event) => {
  const draggedItem = event.dragged;
  const targetIndex = event.targetIndex;

  // Remove the dragged item from its original position
  this.items = this.items.filter(item => item.id !== draggedItem.id);

  // Insert the dragged item at the new position
  this.items.splice(targetIndex, 0, draggedItem);
}

const k = (index, val) => `col.${index}.${val}`


</script>


<template>
  <div>
    <!--<v-data-table :items="items"></v-data-table>-->
    

  </div>
</template>
<style scoped></style>
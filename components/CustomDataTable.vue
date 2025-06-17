<template>
  <div id="block">
    <VaDataTable :columns="columns" :items="items" :wrapper-size="400" :item-size="46" virtual-scroller sticky-header
      class="tb border border-slate-900 rounded bg-slate-600 text-gray-100">

      <template #headerPrepend>
        <tr class="table-slots">
          <th colspan="6">
            <span>#headerPrepend</span> slot

          </th>
        </tr>
      </template>


      <template #cell(actions)="{ rowData }">
        <!--<VaButton
                    preset="plain"
                    icon="edit"
                
                />
                <VaButton
                    preset="plain"
                    icon="delete"
                    class="ml-3"
                    
                />-->


        <!--<VaSwitch v-model="rowData.active" />-->
        <VaCheckbox :input="checkItem" @change="checkItem" v-model="rowData.exclusive" />

      </template>

    </VaDataTable>
  </div>
</template>

<script setup lang="ts">

const switchValue = ref(false)

const columns = ref([
  { key: "name", sortable: true, },
  { key: "username", sortable: true, },
  { key: "email", sortable: true, },
  { key: "phone", width: 80, },
  { key: "website", width: 100, },
  { key: "actions", width: 80, },
])

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

const items = ref(new Array(1000).fill(null).map((_, idx) => {
  const u = { ...(idx % 2 ? users.value[0] : users.value[1]) };
  u.id = idx;
  return u;
}))


const checkItem = (e: any) => {
  e.preventDefault()
  console.log('checkItem e:', e)

}

// var --va-data-table-thead-background--computed = #ffcccb

</script>

<style scoped>
/*
.va-data-table .va-data-table__table .va-data-table__table-thead--sticky {
    background: #fff000;
 }
*/


.tb {
  --va-data-table-header-background: #ff00ff;
  --va-data-table-thead-color: #fff;
  --va-data-table-td-background: #f9f9f9;
  /* Set tbody background */
  --va-data-table-grid-tbody-gap: 1rem;
}


.table-slots {
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  @apply h-10 rounded-lg;

}
</style>
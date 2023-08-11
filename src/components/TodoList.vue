<template>
    <div class="list1">
        <div v-for="todo in allTodos" :key="todo.id">
            <TodoItem :todo="todo"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        TodoItem
    },
    computed: {
        ...mapGetters(["allTodos"]),
    },
}
</script>


<style scoped>
.list1 {
    display: flex;
    flex-direction: column;
    /* width: 27%; */
    /* background-color: greenyellow; */
}
</style>
<template>
    <div>
        <div class="item">
            <!-- <p>{{ todo.id }}</p> -->
            <h3 v-if="!editing" class="col">{{ todo.title }}</h3>
            <input v-bind:value="todoText" v-else @change="todoTextChange" class="form-control" />
            <div class="button">
                <button @click="updateTodo(todo)" class="btn btn-primary">{{ editing ? 'Update' : 'Edit' }}</button>
                <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        todo: [],
    },
    data() {
        return {
            todoText: '',
            editing: false
        };
    },

    methods: {
        ...mapActions(['deleteTodo', "updateTodo"]),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        updateTodo(todo) {
            this.editing = !this.editing;
            if (this.editing) {
                this.todoText = todo.title;
            } else {
                todo.title = this.todoText;
            }
        }
    },
}
</script>

<style scoped>
.item {
    /* width: 100%; */
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
}

.button {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    /* background-color: yellow; */

}
div{
    width: 350px;
    padding: 10px;
    /* background-color: aqua; */
}
</style>
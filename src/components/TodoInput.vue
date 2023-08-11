<template>
    <div class="input">
        <form @submit.prevent="addTodoI">
            <input @change="todoTextChange" v-bind:value="todoText" class="form-control" type="text">
            <input type="reset" value="Clear" class="btn btn-danger">
            <input type="submit" value="Add" class="btn btn-primary">
        </form>

    </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
    data() {
        return {
            todoText: "",
            todos:[],
        };
    },
    // async mounted() {
    //     const data = await localStorage.getItem('state')
    //     this.todos = JSON.parse(data);
    // },
    // created() {
    //     this.state = JSON.parse(localStorage.getItem(state));
    // },
     mounted() {
        this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    },

    methods: {
        ...mapActions(["addTodo"]),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        addTodoI() {
            if (this.todoText.length)
                this.addTodo({
                    id: v1(),
                    title: this.todoText
                    //  this.saveTodos();
                });
            this.todoText = ""
        }
    }
}
</script>

<style>
.input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    /* background-color: aqua; */
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    /* background-color: red; */
}
</style>
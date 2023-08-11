<template>
    <section>
        <div class="container">
            <div class="topp">
                <form @submit.prevent="addTodo">
                    <input v-model="newTodo" accesskey="" autofocus class="form-control" type="text"
                        placeholder="Enter a new todo">

                    <input v-model="id" type="hidden">
                    <input v-model="strike" type="hidden">
                    <button @click="clearValue" type="button" class="btn btn-danger">{{ id === null ? 'Clear' : 'Cancel'
                    }}</button>
                    <button @click="addTodo" class="btn btn-primary">{{ id === null ? 'Add' : 'Edit' }}</button>
                </form>
                <div class="name" style="display: flex; align-items: center; justify-content: space-between;">
                    <h4 style="transform: translateX(15px);">Names</h4>
                    <div class="left" style="display: flex; align-items: center; gap: 160px;">
                        <h4 style="transform: translateX(-115px);">Edit Time</h4>
                        <h4 style="transform: translate(120px);">Add Time</h4>
                        <h5 style="font-weight: bold;">Actions</h5>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="scrol" v-if="todos.length">
                    <article v-if="!editing" @change="todoTextChange" class="art" v-for="(todo, index) in todos"
                        :key="index">
                        <div class="edit">
                            <div class="top">
                                <div class="chek">
                                    <button :class="{ 'bgcolor': todo.strike }"
                                        style="width: 20px; height:20px;border-radius: 50%; border-color: blue;"
                                        @click="clickChekked(todo.id)" :checked="todo.strike"></button>
                                </div>
                                <p :class="{ 'active': todo.strike }">
                                    {{ todo?.text }}
                                </p>
                            </div>
                            <div class="data-time">
                                <div class="done_date_time">
                                    <span id="data">{{ todo?.done_date }}</span>
                                    <span id="time">{{ todo?.done_time }}</span>
                                </div>
                                <span id="data">{{ todo?.data }}</span>
                                <span id="time">{{ todo?.time }}</span>
                            </div>
                        </div>
                        <div class="btns">
                            <!-- Edit -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" class="pen" @click="editTodo(todo)"
                                width="25" height="25" viewBox="0 0 24 24">
                                <path
                                    d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                            </svg>
                            <!-- Delet -->
                            <svg clip-rule="evenodd" fill="red" @click="deleteTodo(todo?.id)" class="delet"
                                fill-rule="evenodd" stroke-linejoin="round" width="25" height="25" stroke-miterlimit="2"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                    fill-rule="nonzero" />
                            </svg>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            newTodo: '',
            todos: [],
            editing: false,
            id: null,
            strike: false,
        };
    },

    created() {
        this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    },
    methods: {
        clickChekked(id) {
            const dateTime = this.getDateTime();
            console.log(dateTime);
            this.todos = this.todos.map((item) => {
                if (item.id === id) {

                    return {
                        ...item,
                        strike: !item.strike,
                        currentTime: item.time,
                        done_date: !item.strike ? dateTime.date : null,
                        done_time: !item.strike ? dateTime.time : null
                    };
                }

                return item;

            });
            const tmp = this.todos;
            this.todos = [];
            this.todos = tmp.sort((a, b) => {
                return (a.strike === b.strike) ? 0 : a.strike ? 1 : -1;
            });
            this.saveTodos();
        },
        addTodo() {
            if (this.newTodo.trim() !== '') {
                // const dateTime = this.getDateTime()
                if (this.id !== null) {
                    this.todos = this.todos.map((item => item.id === this.id ? {
                        ...item,
                        text: this.newTodo,
                    } : item))

                    this.saveTodos()
                }
                else {
                    const dateTime = this.getDateTime()
                    // push o'rniga unshift qo'shildi 
                    this.todos.unshift({
                        id: Date.now(),
                        text: this.newTodo,
                        strike: false,
                        data: dateTime.date,
                        time: dateTime.time,
                        done_date: null,
                        done_time: null
                    });

                    this.saveTodos();
                    // this.$swal.fire({
                    //     position: 'center',
                    //     icon: 'success',
                    //     title: "Qo'shildi",
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // })
                }
                this.newTodo = '';
                this.id = null
                this.strike = false
                // this.updateDateTime();
            }
        },

        editTodo(todo) {
            this.newTodo = todo.text
            this.id = todo.id
            this.strike = todo.strike
            // this.getDateTime();
        },

        deleteTodo(id) {
            this.$swal.fire({
                title: `O'chirishni istaysizmi?`,
                text: "O'chirilgach qaytib tiklay olmaysiz!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: `Ha o'chirmoqchiman!`
            }).then((result) => {
                if (result.isConfirmed) {
                    this.todos = this.todos.filter(item => item?.id !== id);
                    this.saveTodos();
                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "O'chirildi",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })

            this.saveTodos();
        },

        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        clearValue() {
            this.newTodo = ''
        },
        getDateTime() {
            const currentDate = new Date();
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const date = currentDate.toLocaleDateString();
            const time = currentDate.toLocaleTimeString(undefined, options);
            return { date, time };
        }
    }
};
</script>

<style scoped>
section {
    width: 100%;
    min-height: 100vh;
    transform: translateY(20px);
    /* background-color: red; */
}

section .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-left: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
}

::-webkit-scrollbar {
    width: 0px;
}

section .container .topp {
    display: flex;
    gap: 10px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 111;
    /* background-color: red; */
    flex-direction: column;
}

section .container .topp .name {
    font-family: sans-serif;
    color: rgb(19, 19, 19);
    filter: drop-shadow(2px 2px 1px rgb(139, 139, 139));
    gap: 10px;
    padding-bottom: 5px;
    transform: translateY(20px);
}

section .container .topp .name h4 {
    font-weight: bold;
}

section .container form {
    display: flex;
    gap: 10px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 111;
    /* background-color: aqua; */
}

section .container .bottom {
    width: 100%;
}

section .container .bottom .scrol {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
}

section .container .bottom .scrol article {
    display: flex;
    gap: 20px;
}

section .container .bottom .scrol article .edit {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
    border-bottom: 1px solid gainsboro;

}

section .container .bottom .scrol article .edit .top {
    width: 100%;
    display: flex;
    gap: 5px;
    overflow: hidden;
    align-items: center;
}

section .container .bottom .scrol article .edit .top p {
    font-family: sans-serif;
    width: 400px;
    /* height: 30px; */
    overflow:scroll;
    scroll-behavior: smooth;
    transform: translateY(17px);
    text-shadow: 1px 1px 2px gainsboro;
    font-weight: 600;
    display: flex;
    align-items: center;
    text-align: center;
}

section .container .bottom .scrol article .edit .data-time {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: sans-serif;
    font-weight: bold;
}

section .container .bottom .scrol article .edit .data-time .done_date_time {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 5px;
    /* box-shadow: 0px 1px 1px 1px gainsboro; */
    transform: translateX(-350px);
}

section .container .bottom .scrol article .edit .top .chek {
    display: flex;
    align-items: center;
    justify-content: center;
}

section .container .bottom .scrol article .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-bottom: 1px solid gainsboro;
}


section .container .bottom .scrol article .btns svg {
    cursor: pointer;
    transition: all .3s ease-in;
}

section .container .bottom .scrol article .btns svg:hover {
    transform: scale(1.05);

}

section .container .bottom .scrol article .btns svg:active {
    transform: scale(0.95);
}

p.active {
    color: #aaa;
    text-decoration: line-through;
}

.bgcolor {
    background-color: blue;
}
</style>

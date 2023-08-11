<template>
    <div>

        <h1>{{ message }}</h1>
        <form @submit.prevent="addItem">
            <input type="text" v-model="newItem" class="form-control" />
            <input type="reset" value="Clear" class="btn btn-danger">
            <input type="submit" value="Add" class="btn btn-primary">
        </form>
        <p v-for="item in items" :key="item.id"> {{ item.text }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Birinchi Todo',
            items: [],
            newItem: ''
        };
    },
    mounted() {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    },
    methods: {
        addItem() {
            const id = Date.now();
            const newItem = { id, text: this.newItem };
            this.items.push(newItem);
            this.newItem = '';
            localStorage.setItem('items', JSON.stringify(this.items));
        }
    }
};
</script>
<template>
    <Page>
        <ActionBar title="Заказы+" class="action-bar" />
        <StackLayout backgroundColor="#3c495e">
            <Button text="Создать" @tap="$router.push('/repair-doc')" />
            <Button text="Фильтр" @tap="filter" />
            <Label v-bind:text="status" height="70" />
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from "vuex";

export default {
    computed: {        
        status(){
            return this.$store.state.repair_list.status;
        }
    },
    methods: {
        ...mapActions([
            'filter',
        ]),
        newDocument() {
            console.log("NewDocument");
        }
    }
};
</script>

<style scoped>
</style>

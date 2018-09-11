<template>
    <Page>
        <ActionBar title="Заказы+" class="action-bar" />
        <StackLayout backgroundColor="#3c495e">
            <Button text="Создать" @tap="$router.push('/repair-doc')" />
            <Button text="Фильтр" @tap="filter" />
            <Label v-bind:text="status" height="70" />
            <ListView for="repair in repairList">
                <v-template>
                    <Label :text="repair.date"/>
                    <Label :text="repair.product"/>
                    <Label :text="repair.claim"/>
                </v-template>
            </ListView>
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
            'repairList'
        ]),
    }
};
</script>

<style scoped>
</style>

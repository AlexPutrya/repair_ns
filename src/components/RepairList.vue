<template>
    <Page>
        <ActionBar title="Заказы+" class="action-bar" />
        <StackLayout>
            <Button text="Создать" @tap="$router.push('/repair-doc')" />
            <DockLayout class="filter">
                <Button dock="left" text="Фильтр" @tap="filter" />
                <Label v-bind:text="status"/>
            </DockLayout>
            <ListView for="repair in repairList">
                <v-template>
                    <StackLayout  class="list-group-item">
                        <Label :text="repair.date"/>
                        <Label :text="repair.product"/>
                        <Label :text="repair.claim"/>
                        <Label :text="repair.status"/>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'repairList'
        ]),
        status(){
            return this.$store.state.repair_list.status;
        }
    },
    methods: {
        ...mapActions([
            'filter'
        ])
    }
};
</script>

<style scoped>
.filter Button {
    background-color: steelblue;
    padding: 20px;
}
.filter Label {
    display: inline-block;
    margin: 20px;
    /* vertical-align: middle; */
}
</style>

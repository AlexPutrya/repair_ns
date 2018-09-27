<template>
    <Page class="page">
        <ActionBar title="Ремонт+" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel" verticalAlignment="center" horizontalAlignment="stretch">
                <Button class="btn" text="Ремонты" @tap="repairList" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    methods: {
        repairList(){
            this.$store.dispatch('loadRepairList');
            this.$router.push('/repair-list');
        }
    },

    data() {
        return {};
    },
}
</script>

<style scoped>
.action-bar{
    background-color: #f28500;
    color: white;
}

.page {
    background-color: #e7e7e7;
}
.btn {
    background-color: #008CBA;
    font-size: 20px;
    padding: 50px;
    color: white;
}
</style>

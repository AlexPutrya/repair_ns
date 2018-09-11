<template>
    <Page class="page">
        <ActionBar title="Ремонт+" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel" verticalAlignment="center" horizontalAlignment="stretch">
                <Button class="btn" text="Ремонты" @tap="$router.push('/repair-list')" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    methods: {
     
    },

    data() {
        return {};
    },
}
</script>

<style scoped>
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

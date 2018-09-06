<template>
    <Page class="page">
        <ActionBar title="Заказы+" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Button text="Ремонты" @tap="$router.push('/repair-list')" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    methods: {
        onButtonTap() {
            console.log("Button was pressed");
        },
    },

    data() {
        return {};
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>

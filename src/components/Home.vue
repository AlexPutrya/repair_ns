<template>
    <Page class="page">
        <ActionBar title="Ремонт+" class="action-bar" />
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
     
    },

    data() {
        return {};
    },
}
</script>

<style scoped>

</style>

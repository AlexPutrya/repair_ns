<template>
    <Page class="page">
        <ActionBar title="Ремонт+" class="action-bar" />
        <ScrollView>
            
            <StackLayout class="home-panel" verticalAlignment="center" horizontalAlignment="stretch">
                <!-- <Image src="res://icon" stretch="none"/> -->
                <Button class="btn" text="Ремонты" @tap="repairList" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    methods: {
        // Вызывем загрузку списка из бвзы данных и переходим в новое окно
        repairList(){
            this.$store.dispatch('loadRepairList');
            this.$router.push('/repair-list');
        }
    }
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

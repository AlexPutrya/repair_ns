<template>
    <Page class="page">
        <ActionBar title="Заяка на ремонт" class="action-bar" />
        <ScrollView>
            <StackLayout>
                <Label text="Дата/Время" />
                <TextField editable="false" v-bind:text="datetime" />
                <Button text="Статус" @tap="doc_filter"/>
                <Label text="Статус"/>
                <TextField editable="false" v-bind:text="status" />
                <Label text="Звонок клиенту" />
                <Switch v-model="call_to_client"/>
                <Label text="Партнер" />
                <TextField v-model="partner" />
                <Label text="Клиент" />
                <TextField v-model="client_name" />
                <Label text="Номер телефона" />
                <TextField v-model="phone"  keyboardType="phone"/>
                <Label text="Товар" />
                <TextField v-model="product" />
                <Label text="Претензия" />
                <TextView v-model="claim" />
                <Label text="Трек посылки" />
                <TextField v-model="track_number" />
                <Button text="Отправить" @tap="send" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    data() {
        return {
            call_to_client: false,
            partner: "",
            client_name: "",
            phone: "",
            product: "",
            claim: "",
            track_number: ""
        }
    },
    methods: {
        ...mapActions([
            'doc_filter'
        ]),
        send(){
            console.log(this.datetime);
            this.$router.push('/repair-list');
        } 
    },
     computed: {
        datetime(){
            let d =new Date();
            return d;
        },
        status(){
            return this.$store.state.repair_doc.status;
        }
    }
}
</script>

<style scoped>

</style>

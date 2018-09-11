<template>
    <Page class="page">
        <ActionBar title="Заяка на ремонт" class="action-bar" />
        <ScrollView>
            <StackLayout>
                <Label text="Дата/Время" />
                <TextField editable="false" v-bind:text="datetime" />
                <Button text="Статус" @tap="docFilter"/>
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
                <Button text="Отмена" @tap="cancel" />
                <Button text="Отмена" @tap="saveDoc" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions([
            'docFilter',
            'saveDoc'
        ]),
        cancel(){
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
            return this.$store.state.repair_doc.form.status;
        },
        call_to_client: {
            get(){
                return this.$store.repair_doc.state.form.call_to_client;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'call_to_client', val : value });
            }
        },
        partner: {
            get(){
                return this.$store.repair_doc.state.form.partner;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'partner', val : value });
            }
        },
        client_name: {
            get(){
                return this.$store.repair_doc.state.form.client_name;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'client_name', val : value });
            }
        },
        phone: {
            get(){
                return this.$store.repair_doc.state.form.phone;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'phone', val : value });
            }
        },
        product: {
            get(){
                return this.$store.repair_doc.state.form.product;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'product', val : value });
            }
        },
        claim: {
            get(){
                return this.$store.repair_doc.state.form.claim;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'claim', val : value });
            }
        },
        track_number: {
            get(){
                return this.$store.repair_doc.state.form.track_number;
            },
            set(value){
                this.$store.commit('changeFormValue', {param : 'track_number', val : value });
            }
        }
    }
}
</script>

<style scoped>

</style>

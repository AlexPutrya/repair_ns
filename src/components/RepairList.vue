<template>
    <Page>
        <ActionBar title="Заказы+" class="action-bar" />
        <AbsoluteLayout>
            <StackLayout class="main" width="100%" height="100%">
                <AbsoluteLayout >
                    <StackLayout class="filter" @tap="changeFilter">
                        <Image class="filter-icon" src="~/images/Filter-2-icon.png" stretch="aspectFill" />
                    </StackLayout>
                    <!-- <Button dock="left" text="Фильтр" @tap="changeFilter" /> -->
                    <!-- <Label v-bind:text="status"/> -->
                </AbsoluteLayout>
                <StackLayout class="repair-list">
                    <ListView for="repair in filteredList">
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
            </StackLayout>
            <AbsoluteLayout marginTop="87%" marginLeft="80%">
                <StackLayout class="add-button" @tap="$router.push('repair-doc')" @touch="onButtonTouch">
                        <Label text="+"/>
                </StackLayout>
            </AbsoluteLayout>
        </AbsoluteLayout>
    </Page>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'filteredList'
        ]),
        status(){
            return this.$store.state.repair_list.status;
        }
    },
    methods: {
        ...mapActions([
            'changeFilter'
        ])
    }
};
</script>

<style scoped>
.filter {
    background-color: #f28500;
    margin: 10 0 10 10;
    padding: 15 20 15 20;
    border-radius: 5;
}
.filter-icon {
   width: 35;
   height: 15; 
}
.add-button {
		width: 56;
		height: 56;
        background-color: #f28500;
		border-radius: 28;
		vertical-align: center;
        color: white;
        text-align: center;
        font-size: 20;
	}

.action-bar{
    background-color: #f28500;
    color: white;
}

.main Button {
    background-color: steelblue;
    padding: 20px;
}
.main Label {
    display: inline-block;
    margin: 20px;
    /* vertical-align: middle; */
}
</style>

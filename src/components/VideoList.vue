<template>
    <div>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
            <div v-for="item in list">
                <VideoDetail :vinfo="item"></VideoDetail>
            </div>
        </van-list>
    </div>
</template>

<script>
    import VideoDetail from "./VideoDetail.vue";
    import { queryVideoList } from "../request/QueryList";

    export default {
        name: "VideoList",
        components:{VideoDetail},
        data() {
            return {
                list: [
                    {
                        media:"https://img01.yzcdn.cn/vant/cat.jpeg",
                        title:"标题",
                        sm:"描述.........",
                        ml: '',
                        fileSize:1,
                        videoName: ''
                    }
                ],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {

            },
        },
        mounted() {
            queryVideoList(
                res =>{
                    if(res.data.success){
                        this.list = res.data.data
                    }
                }
            )
        }
    }
</script>

<style scoped>

</style>
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
    export default {
        name: "VideoList",
        components:{VideoDetail},
        data() {
            return {
                list: [
                    {
                        madia:"https://img01.yzcdn.cn/vant/cat.jpeg",
                        title:"标题",
                        dosc:"描述.........",
                        fileNum:1
                    },
                    {
                        madia:"https://img01.yzcdn.cn/vant/cat.jpeg",
                        title:"好康的",
                        dosc:"sadsadasdasdav",
                        fileNum:3
                    }
                ],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                /*// 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 30; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);*/
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <div id="dplayer" style="height: 400px;width: 800px"></div>
</template>

<script>
    import DPlayer from "dplayer";
    export default {
        name: "Player",
        mounted() {
            const options = new DPlayer({
                element: document.getElementById('dplayer'),
                autoplay: false,
                theme: '#FADFA3',
                loop: false,
                screenshot: true, //截屏
                hotkey: false,
                logo: '/public/assets/images/server/favicon.ico',
                video: {  //视频源 包含不同分辨率源
                    quality: [{
                        name: '普清',
                        url: 'https://1251316161.vod2.myqcloud.com/5f6ddb64vodsh1251316161/e67586ef5285890813381349247/qA2M7T3UetgA.mp4'
                    }],
                    defaultQuality: 0,
                    pic: '',
                    type: 'auto'
                }
            });
        }
    }
</script>

<style scoped>

</style>
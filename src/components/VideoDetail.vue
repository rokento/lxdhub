<template>

    <div id="vcrad" @click="toPlayer(vinfo)">
        <div class="vleft">
            <img style="width: 100%;height: 99%;border-radius: 5px"
                 :src="this.$store.state.host+'/media/pic/'+vinfo.ml+'/'+vinfo.media">
        </div>
        <div class="vright">
            <h3>{{vinfo.title}}</h3>
            <div class="sm"><span>{{vinfo.sm}}</span></div>
            <br>
            <div class="filenumber"><span>文件大小:{{vinfo.fileSize}} &nbsp;&nbsp;&nbsp;</span></div>
        </div>
    </div>
    <div style="height: 3px"></div>

</template>

<script>
    export default {
        name: "VideoDetail",
        props:['vinfo'],
        methods: {
            toPlayer(value){
                let source = this.$store.state.host+'/video/player/'+value.ml+'/'+value.videoName
                this.$router.push(
                    {
                        name:'Player',
                        params: {
                            source: source
                        }
                    }
                )
            }
        }
    }
</script>

<style>

    #vcrad{
        width: 100%;
        height: 100px;
        padding: 0;
        margin: 0;
        background-color: white;
        border-radius: 5px;
    }
    .vleft{
        width: 40%;
        height: 100px;
        padding: 0;
        float: left;
        margin: 0;
        text-align: left;
    }
    .vright{
        width: 60%;
        height: 100px;
        padding: 0;
        float: left;
        margin: 0;

    }
    h3{
        padding: 0;
        margin-left:20px;
        margin-top: 8px;
        margin-bottom: 3px;
        text-align: left;
    }
    .sm{
        width: 100%;
        padding: 0;
        margin-left:20px;
        text-align: left;
    }
    .filenumber{
        width: 100%;
        padding: 0;
        margin-right:20px;
        text-align: right;
        font-size: 2px;
        color: #c0c0c0;
    }

</style>
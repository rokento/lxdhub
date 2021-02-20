<template>

    <div id="vcrad">
        <div class="vleft">
            <img style="width: 100%;height: 99%;border-radius: 5px"
                 :src="vinfo.madia">
        </div>
        <div class="vright">
            <h3>{{vinfo.title}}</h3>
            <div class="sm"><span>{{vinfo.dosc}}</span></div>
            <br>
            <div class="filenumber"><span>文件数:{{vinfo.fileNum}} &nbsp;&nbsp;&nbsp;</span></div>
        </div>
    </div>
    <div style="height: 3px"></div>

</template>

<script>
    export default {
        name: "VideoDetail",
        props:['vinfo']
    }
</script>

<style>

    #vcrad{
        width: 98%;
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
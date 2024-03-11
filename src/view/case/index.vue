<template>
    <div class="case-container">
        <div class="logo-title">
            <p>智慧大屏看板</p>
        </div>
        <div class="case-sc">
            <div style="display: flex; flex-direction: row; justify-content: center;">
            <div class="container" @click="gotoUrl('ck')">
                <div class="item">
                    <img src="../../assets/images/组 1.png" style="width: 300px;height: 100px;" />
                    <p class="text">智慧仓库</p>
                </div>


            </div>
            <div class="container" style="margin-left: 100px;" @click="gotoUrl('home')">
                <div class="item">
                    <img src="../../assets/images/组 1.png" style="width: 300px;height: 100px;" />
                    <p class="text">智慧园区</p>
                </div>


            </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <div class="container">
                <div class="item">
                    <img src="../../assets/images/组 1.png" style="width: 300px;height: 100px;" />
                    <p class="text">智慧粮仓</p>
                </div>


            </div>
            <div class="container" style="margin-left: 100px;">
                <div class="item">
                    <img src="../../assets/images/组 1.png" style="width: 300px;height: 100px;" />
                    <p class="text">智慧物流</p>
                </div>
            </div>
            </div>


        </div>
    </div>

</template>

<script>

export default {
    name: "caseView",
    methods:{
        gotoUrl(url){
            this.$router.push({name:url});
        }
    }

}
</script>

<style lang="scss">
.case-container {
    display: flex;
    flex-direction: column;
    background: url(../../assets/images/bg2.png) no-repeat center;
    background-size: 105% 100%;
    width: 100%;
    height: 100%;
}

.case-sc {
    display: flex;
    flex-direction: column;
    margin-top:200px;
   
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-left: 100px;
}

.item {
    position: relative;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    position: absolute;
    font-size: 20px;
}
</style>
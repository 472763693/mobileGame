
function jqPhoto(boxfather,picbox,pic,butfather){
    var luanpo = document.getElementById(boxfather);
    var oImg = document.getElementById(picbox);
    var aImg = oImg.getElementsByTagName(pic);
    var nUms = document.getElementById(butfather).getElementsByTagName("button");

    var iNow = 0;
    var dt = null;

    //图片移动的距离
    oImg.style.width = aImg.length * aImg[0].offsetWidth + "px";

    //切换 Li 类名 来改变颜色
    function tab() {
        for (var i = 0; i < nUms.length; i++) {
            nUms[i].index = i;
            nUms[i].onmouseover = function () {
                clearInterval(dt);
                iNow = this.index;
                for (var i = 0; i < nUms.length; i++) {
                    nUms[i].className = "";
                }
                this.className = "";
                oImg.style.left = -(aImg[0].offsetWidth * iNow) + "px";
            };
            aImg[i].onmouseover = function(){
            	clearInterval(dt);
            };
            aImg[i].onmouseout = function(){
            	start();
            };
            nUms[i].onmouseout = function () {
                start();
            };
        };
    };


    function start() {
        clearInterval(dt);
        //切换图片
        dt = setInterval(function () {
            if (iNow > nUms.length - 2) {
                iNow = 0;
            } else {
                iNow++;
            };
            //切换小点颜色
            for (var k = 0; k < nUms.length; k++) {
                if (iNow == nUms[k].index) {
                    nUms[k].className = 'active';
                } else {
                    nUms[k].className = '';
                };
            };
            oImg.style.left = -(aImg[0].offsetWidth * iNow) + "px";
        }, 3000);
    };

    tab();
    start();
    
};
	
var shop_car = (function () {
    var $box = document.querySelector(".main");
    return {
        init() {
            this.getJOSN(),
                this.event()
        },
        event() {
            var _this = this;
            $box.addEventListener("click", function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'BUTTON') {
                    var index = target.parentNode.getAttribute('index');
                    //_this.data.splice(index,1);
                    _this.data.splice(index, 1);
                    //通过数据重新渲染dom
                    _this.setData();
                    _this.insertData(_this.data);
                }
            }, false)
            $box.onchange = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'INPUT') {
                    var index = target.parentNode.getAttribute('index');
                    //更新数据
                    _this.data[index].count = target.value;
                    _this.setData();
                    //通过数据重新渲染dom
                    _this.insertData(_this.data);
                }
            }
            // $("input[name=all]").click(function () {
            //     //$(this).prop("checked");
            //     $("input[name=sl").prop("checked", $(this).prop("checked"));
            // });
            // $("input[name=sl").click(function () {
            //     var flag = true;
            //     $("input[name=sl]").each(function (index, item) {
            //         if ($(item).prop("checked") == false) {
            //             flag = false;
            //             return;
            //         }
            //     });
            //     if (flag) {
            //         $("input[name=all]").prop("checked", true);
            //     } else {
            //         $("input[name=all]").prop("checked", false);
            //     }
            // })
        },//获取数据
        getJOSN() {
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            this.insertData(shopList);
        },//渲染数据
        insertData(data) {
            this.data = data;
            // console.log(data);
            //var str="";
            var $arr = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                $arr.push(`
                <div index=${i} class="shop_car">
                    <span><input type="checkbox" id="checkOne" name="l"/></span>
                    <span class="shop-name">${item.name}</span>
                    <span class="shop-size">${item.size}</span>
                    <span class="shop-price">${item.price}</span>
                    <input type="number" class="shop-count" value="${item.count}" >
                    <span class="shop-tip">${item.price * item.count}</span>
                    <button class="btn shop-btn-del" >删除</button>
                </div>
                
                `);
            }
            $box.innerHTML = $arr.join('');
        },
        setData() {
            localStorage.shopList = JSON.stringify(this.data);//?
        }
    }
}())
shop_car.init();
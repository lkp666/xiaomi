var shop=(function(){
    var $box=document.querySelector(".shop");
    return{
        init(){
            this.event();
            this.getJson();
        },
        event(){
            var _this=this;
            $box.onclick=function(e){
                e=e||window.event;
                var target=e.target || e.srcElement;
                if(target.nodeName=='BUTTON'){
                    //获取自定义属性
                    var index=target.parentNode.getAttribute('index');
                    //console.log(index);
                    var obj={
                        count:1,
                        ..._this.data[index]
                    }
                   // console.log(target.getAttribute('index'));
                  // console.log(_this.data[index]);//得到一个当前点击数组对象；
                  console.log(obj);
                  _this.setData(obj);
                }
            }
            $box.onchange=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName==='INPUT'){
                    //console.log(11);
                    var index=target.parentNode.getAttribute('index');
                    //console.log(index);
                    _this.data[index].count = Number(target.value);
                    
                }
            }
        },
        getJson(){
            var _this=this;
            sendAjax('json/goods.json',{
               success(data){
                   _this.insertData(JSON.parse(data));//将字符串转化为对象
               }
            })
        },
        insertData({code,data}){//把数据渲染到页面
           // console.log(data);
           this.data=data;//指shop、、数组对象
           if(code==200){
               //var str="";
               var arr=[];
               data.forEach((item,index)=>{
                   var $div=`
                   <div id="${item.id}" index=${index} class="shop_car">
                        <label>商品名称:</label><span class="shop-name">${item.name}</span><br/>
                        <label>数量:</label><input type="number" class="shop-count" value="1"><br/>
                        <label>商品颜色:</label><span class="shop-color">${item.color}</span><br/>
                        <label>商品尺寸:</label><span class="shop-size">${item.size}</span><br/>
                        <button class="btn shop-btn-car" >加入购物车</button>
                    </div>
                   `
                   //str+=$div;
                   arr.push($div);
               })
               //$box.innerHTML=str;
               $box.innerHTML=arr.join('');
               console.log(data);
           }else{
               alert("你没有获取的数据权限");
           }
        },
        //把数据存储到本地
        setData(data){
            var shopList=localStorage.getItem('shopList')||'[]';
            shopList=JSON.parse(shopList);
            //如果商品不存在，添加一条新的数据
            //如果商品存在，数量累加即可
            for(var i=0;i<shopList.length ;i++){
                var item=shopList[i];
                if(item.id==data.id){
                    //商品已经存在
                    item.count+=data.count;
                    break;
                }
            }
            if(i==shopList.length){
                shopList.push(data);
            //商品不存在
            }
            //shopList.push(data);
            localStorage.shopList=JSON.stringify(shopList);
            alert("添加购物车成功");
        }
    }
}())
shop.init();
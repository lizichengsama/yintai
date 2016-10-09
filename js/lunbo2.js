//   <script src="js/lunbo2.js"></script>
// 	<script src="js/lunboyongs.js"></script>

//	
window.onload=function(){
	//轮播图开始
	var mains=document.getElementsByClassName('main')[0]
	var abanner=mains.getElementsByClassName('banner')[0]
	var wheelBox=abanner.getElementsByClassName('banner2')[0]
	var alists=wheelBox.getElementsByClassName('list')[0]
	var lians=alists.getElementsByTagName('a')

	var indexBtn=wheelBox.getElementsByClassName('aindex')[0];
	var lis=indexBtn.getElementsByTagName('li')

	var index=0;

	lians[0].style.zIndex=10;
	
	lis[0].style.background="#e5004f"
	var t=setInterval(amove,2000);  //自动轮播
	function amove(){
		index++;
		if(index==lians.length){
			index=0;
		}
		for(var i=0;i<lians.length;i++){
			lians[i].style.zIndex=0
			lis[i].style.background="#211616";
		}
		lians[index].style.zIndex=10;
		lis[index].style.background="#e5004f"
	}
	wheelBox.onmouseover=function(){ //鼠标移上去停止计时
		clearInterval(t);
	}
	wheelBox.onmouseout=function(){  //鼠标移开重开计时
		t=setInterval(amove,2000);
	}
	for(var j=0;j<lis.length;j++){
		lis[j].aaa=j;
		lis[j].onmouseover=function(){
			for(var k=0;k<lians.length;k++){
				lians[k].style.zIndex=0;
				lis[k].style.background="#211616"
			}
		lians[this.aaa].style.zIndex=10;
		this.style.background="#e5004f"
		// index=this.index;
		}
	}



	var rightt=wheelBox.getElementsByClassName('btnn')[0]
	
	var righta=rightt.getElementsByClassName('right')[0];

	righta.onclick=function(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(var m=0;m<lians.length;m++){
			lians[m].style.zIndex=0;
			lis[m].style.background="#211616"
		}
		lians[index].style.zIndex=10;
		lis[index].style.background="#e5004f"
	}
	

	var lefta=rightt.getElementsByClassName('left')[0];

	lefta.onclick=function(){
		index--;
		if(index==-1){
			index=lis.length-1;
		}
		for(var m=0;m<lians.length;m++){
			lians[m].style.zIndex=0;
			lis[m].style.background="#211616"
		}
		lians[index].style.zIndex=10;
		lis[index].style.background="#e5004f"
	}

	abanner.onmouseover=function(){
		animate(lefta,{opacity:1},0)
		animate(righta,{opacity:1},0)
	}
	abanner.onmouseout=function(){
		animate(lefta,{opacity:0},0)
		animate(righta,{opacity:0},0)
	}
	// 轮播图结束




	// 下拉框开始
	var head=document.getElementsByClassName('head')[0]
	var head_top=head.getElementsByClassName('head_top')[0]
	var head_top1=head_top.getElementsByClassName('head_top1')[0]

	var wechat=head_top1.getElementsByClassName('wechat')[0]
	console.log(wechat)
	var wechatt=head_top1.getElementsByClassName('wechatt')[0]
	var t2=head_top1.getElementsByClassName('t2')[0]
	console.log(t2)
	var t3=head_top1.getElementsByClassName('t3')[0]

	var head_top12=head_top1.getElementsByClassName('head_top12')[0]
	var ul2=head_top12.getElementsByClassName('ul2')[0]
	var maxn=$('.maxn',ul2)[0]
	console.log(maxn)
	var mine=ul2.getElementsByClassName('mine')[0]
	console.log(mine)
	var downout=ul2.getElementsByClassName('downout')[0]
	console.log(downout)

	var banner_left=$('.banner_left',wheelBox)[0]
	console.log(banner_left)
	var banner_kua=$('.banner_kua',banner_left)
	var banner_leftk=$('.banner_leftk',banner_left)

	hover(maxn,function(){
		downout.style.display="block"
	},function(){
		downout.style.display="none"
	})

	hover(t2,function(){
		wechat.style.display="block"
	},function(){
		wechat.style.display="none"
	})
	
	hover(t3,function(){
		wechatt.style.display="block"
	},function(){
		wechatt.style.display="none"
	})

	for(var i=0;i<banner_kua.length;i++){
		banner_kua[i].index=i;

		hover(banner_kua[i],function(){
			banner_leftk[this.index].style.display="block"
		},function(){
			banner_leftk[this.index].style.display="none"
		})
	}


	// 下拉框结束




	// 右边图动画，向左移10px
	var baner_right=wheelBox.getElementsByClassName('banner_right')[0]
	var imges=baner_right.getElementsByTagName('img')[0]
	// console.log(imges)
	imges.onmouseover=function(){
		animate(imges,{marginLeft:-10},400)
	}
	imges.onmouseout=function(){
		animate(imges,{marginLeft:0},400)
	}

	// 右边图动画，向左移5px

	// 选项卡1开始
	//var aremai=document.getElementsByClassName('main')[0];
	var remaizuo2=mains.getElementsByClassName('remai')[0];
	var remaizuo=remaizuo2.getElementsByClassName('remai_left')[0];
	
	var butn=remaizuo.getElementsByClassName('remai2')[0];
	var triles=butn.getElementsByClassName('triggle')
	var lian=butn.getElementsByTagName('a');
	var lists=remaizuo.getElementsByClassName('list');
	
	for(var n=0;n<lists.length;n++){
				// lists[n].style.display="none";
				triles[n].style.display="none";
				// lian[n].style.background="transparent"
			}
	lian[0].style.borderBottom="3px solid #e5004f"
	triles[0].style.display="block"
	

	for(var m=0;m<lian.length;m++){
		lian[m].index=m;

		lian[m].onmouseover=function(){
			for(var n=0;n<lists.length;n++){
				lists[n].style.display="none";
				triles[n].style.display="none";
				lian[n].style.background="transparent"

			}
			lists[this.index].style.display="block"
			triles[this.index].style.display="block";
			this.style.borderBottom="3px solid #e5004f"
		}
		lian[m].onmouseout=function(){
			this.style.borderBottom="none"
		}
	}
	// 选项卡1结束
	// 选项卡2开始
	var baiduos=mains.getElementsByClassName('baihuo')[0]
	var abaihuo=baiduos.getElementsByClassName('baibody')[0]
	var abaihuos=abaihuo.getElementsByClassName('bai_right')[0]
	var abaihuos2=abaihuos.getElementsByClassName('bai_right2')[0]
	var trbs=abaihuos2.getElementsByClassName('tribble')
	var alian=abaihuos2.getElementsByTagName('a');
	var rights_bai=abaihuos.getElementsByClassName('bai_right3')

	for(var q=0;q<rights_bai.length;q++){
				trbs[q].style.display="none"
			}


	alian[0].style.borderBottom="3px solid #e5004f"
	trbs[0].style.display="block"

	for(var p=0;p<alian.length;p++){
		alian[p].index=p;
		alian[p].onmouseover=function(){
			for(var q=0;q<rights_bai.length;q++){
				rights_bai[q].style.display="none"
				trbs[q].style.display="none"
				alian[q].style.background="transparent"
			}
			rights_bai[this.index].style.display="block";
			trbs[this.index].style.display="block"
			this.style.borderBottom="3px solid #e5004f"
		}
		alian[p].onmouseout=function(){
			this.style.borderBottom="none"
		}
	}

	// 选项卡2结束

	// 小轮播图开始    封装开始
	
	var shishang=mains.getElementsByClassName('shishang');
	// console.log(shishang)
	
function lunbostart(aa){
	var shi_body=shishang[aa].getElementsByClassName('shi_body')[0];
	
	
	var shi_mid=shi_body.getElementsByClassName('shi_middle')[0];
	var mid_pics=shi_mid.getElementsByClassName('mid_pic')[0];
	var mid_pic=mid_pics.getElementsByTagName('a');
	
	var imgs=mid_pics.getElementsByTagName('img')
	var iw=parseInt(getStyle(imgs[0],'width'))
	mid_pics.style.width=iw*imgs.length+"px"
	
	var mid_dian=shi_mid.getElementsByClassName('mid_dian')[0]
	var mid_dian2=mid_dian.getElementsByTagName('li')

	mid_dian2[0].style.background="#e5004f"

	
	// 小轮播图结束

	// 左右箭头开始
	var mid_arrow=shi_mid.getElementsByClassName('mid_btn')[0];

	var lft=mid_arrow.getElementsByClassName('btn_left')[0];
	var rht=mid_arrow.getElementsByClassName('btn_right')[0];

	
	var aindexs=0;
	rht.onclick=function(){
		aindexs++;
		if(aindexs==mid_pic.length){
			aindexs=mid_pic.length-1;
		}
		animate(mid_pics,{left:-iw*aindexs},300)
		for(var t=0;t<mid_pic.length;t++){
			
			mid_dian2[t].style.background="#666"
		}
		
		mid_dian2[aindexs].style.background="#e5004f"
	}
	


	lft.onclick=function(){
		aindexs--;
		if(aindexs==-1){
			aindexs=0;
		}
		animate(mid_pics,{left:-iw*aindexs},300)
		for(var s=0;s<mid_pic.length;s++){
			
			mid_dian2[s].style.background="#666"
		}
		
		mid_dian2[aindexs].style.background="#e5004f"
	}
	// 左右箭头结束

	// 下方的点
	for(var cc=0;cc<mid_dian2.length;cc++){
		mid_dian2[cc].index=cc;
		mid_dian2[cc].onclick=function(){
			for(var dd=0;dd<imgs.length;dd++){
				mid_dian2[dd].style.background="#666"
			}
			mid_dian2[this.index].style.background="#e5004f"
			animate(mid_pics,{left:-iw*this.index},300)
		}
	}


	// 下方的点完成

	// 隐藏左右箭头
	shi_mid.onmouseover=function(){
		animate(lft,{width:32},500)
		animate(rht,{width:32},500)
	}
	shi_mid.onmouseout=function(){
		animate(lft,{width:-33},500)
		animate(rht,{width:-33},500)
	}


// 左下的无缝轮播


var shi_lefts=$('.shi_left',shi_body)[0]

var shi_lefts2=$('.shi_left2',shi_lefts)[0]

var shi_lefts3=$('.shi_left3',shi_lefts2)[0]
// function fengz(aa){
var blists=$('.listt',shi_lefts3) //要轮播的框
var arrows=$('.arrow',shi_lefts2)[0]
var left_butn2=$('.left',arrows)[0]
var right_butn2=$('.right',arrows)[0]
iws=parseInt(getStyle(blists[0],'width'))

var indexx=0;
var nextt=0;

blists[0].style.left='0px'

right_butn2.onclick=function(){
	nextt++;
	if(nextt==blists.length){
		nextt=0
	}
	blists[nextt].style.left=iws+'px'
	animate(blists[indexx],{left:-iws},500)
	animate(blists[nextt],{left:0},500)
	indexx=nextt;
}
left_butn2.onclick=function(){
	nextt--;
	if(nextt==-1){
		nextt=blists.length-1;
	}
	blists[nextt].style.left=-iws+'px'
	animate(blists[indexx],{left:iws},500)
	animate(blists[nextt],{left:0},500)
	indexx=nextt;
}


// }
// for(var k=0;k<9;k++){
// 	fengz(k);
// }

}
 for(var bb=0;bb<5;bb++){
 	lunbostart(bb)
 }



// 4个动态边框
var shi_right=document.getElementsByClassName('shi_right')[0];
var shi_rht=document.getElementsByClassName('shi_rht')

// function bor(der){
	for(var i=0;i<shi_rht.length;i++){
	shi_rht[i].onmouseover=function(){
		animate($('.dl',this)[0],{height:180},600)
		animate($('.dr',this)[0],{height:180},600)
		animate($('.dt',this)[0],{width:270},600)
		animate($('.db',this)[0],{width:270},600)
	}
	shi_rht[i].onmouseout=function(){
		animate($('.dl',this)[0],{height:0},600)
		animate($('.dr',this)[0],{height:0},600)
		animate($('.dt',this)[0],{width:0},600)
		animate($('.db',this)[0],{width:0},600)
	}
}





// 左下的无缝轮播

// function fengz(aa){
// var shi_lefts=$('.shi_left',shi_body)[0]



// var shi_lefts2=$('.shi_left2',shi_lefts)[0]

// var shi_lefts3=$('.shi_left3',shi_lefts2)[0]

// var blists=$('.listt',shi_lefts3) //要轮播的框
// var arrows=$('.arrow',shi_lefts2)[0]
// var left_butn2=$('.left',arrows)[0]
// var right_butn2=$('.right',arrows)[0]
// iws=parseInt(getStyle(blists[0],'width'))

// var indexx=0;
// var nextt=0;

// blists[0].style.left='0px'

// right_butn2.onclick=function(){
// 	nextt++;
// 	if(nextt==blists.length){
// 		nextt=0
// 	}
// 	blists[nextt].style.left=iws+'px'
// 	animate(blists[indexx],{left:-iws},500)
// 	animate(blists[nextt],{left:0},500)
// 	indexx=nextt;
// }
// left_butn2.onclick=function(){
// 	nextt--;
// 	if(nextt==-1){
// 		nextt=blists.length-1;
// 	}
// 	blists[nextt].style.left=-iws+'px'
// 	animate(blists[indexx],{left:iws},500)
// 	animate(blists[nextt],{left:0},500)
// 	indexx=nextt;
// }

// }
// for(var k=0;k<9;k++){
// 	fengz(k)
// }

// 选项卡的动态边框
for(var j=0;j<lists.length;j++){
	var bhua=$('.bianhua',lists[j])
	for(var i=0;i<bhua.length;i++){
		bhua[i].onmouseover=function(){
			animate($('.bl',this)[0],{height:262},500)
			animate($('.br',this)[0],{height:262},500)
			animate($('.bt',this)[0],{width:222},500)
			animate($('.bb',this)[0],{width:222},500)
		}
		bhua[i].onmouseout=function(){
			animate($('.bl',this)[0],{height:0},500)
			animate($('.br',this)[0],{height:0},500)
			animate($('.bt',this)[0],{width:0},500)
			animate($('.bb',this)[0],{width:0},500)
		}
	}

}

// // console.log(daohang)
// var liists=$('li',daohang)

// var newArr=[];
// for(var i=0;i<)



	
	//跳楼机开始

	var daohang=$('.daohang',document)[0]
	// console.log(daohang)
	// console.log(shishang)
	var ulis=$('ul',daohang)[0]
	// console.log(ulis)
	var clist=$('li',ulis)
	// console.log(clist)
	var spans=$('span',ulis)
	// console.log(spans)

	var newArr2=[];

	var ih=document.documentElement.clientHeight;

	for(var i=0;i<shishang.length;i++){
		newArr2.push(shishang[i].offsetTop)
	}	
	console.log(newArr2)

	window.onscroll=function(){
		var sh=document.documentElement.scrollTop||document.body.scrollTop;
		// console.log(sh)
		if(sh>1600){
			animate(ulis,{opacity:1},10)
		}else{
			animate(ulis,{opacity:0},10)
		}
		for(var j=0;j<clist.length;j++){
			clist[j].index=j;
			if(newArr2[j]<sh+300){
				for(var k=0;k<clist.length;k++){
					clist[k].style.background=""
					spans[k].style.opacity=0
				}
				clist[j].style.background="#a50000"
				spans[j].style.opacity=1
			}
		}
		// 按需加载
		// for(var m=0;m<newArr2.length;m++){
		// 	if(newArr2[m] <= sh+ih){
		// 	var img=shishang[m].getElementsByTagName('img')
		// 	for(var n=0;n<img.length;n++){
		// 		img[n].src=img[n].getAttribute("asrc")
		// 		}
		// 	}
		// }
	}
	window.onscroll()

	for(var m=0;m<clist.length-1;m++){

		clist[m].onclick=function(){
			animate(document.documentElement,{scrollTop:shishang[this.index].offsetTop},500)
			animate(document.body,{scrollTop:shishang[this.index].offsetTop},500)
		}
	}
	if(m=clist.length-1){
		clist[m].onclick=function(){
			animate(document.documentElement,{scrollTop:0},500)
			animate(document.body,{scrollTop:0},500)
		}
	}
	

	// 跳楼机结束

	// 按需加载开始，根据滚动条的位置，加载相应框内的图片，超出部分暂不加载
	// var newArr3=[];
	// console.log()
	// for(var i=0;i<shishang.length;i++){
	// 	newArr3.push(shishang[i].offsetTop)
	// }


	// console.log(head_top1)
	// var uls1=head_top1.getElementsByTagName('ul')[0]
	// console.log(uls1)
	// var t2=$('.t2',uls1)[0]
	// console.log(t2)
	// var wechat=
	
	// hover(t2,function(){

	// },function(){})




}

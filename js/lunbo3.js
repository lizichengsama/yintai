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
	var righta=rightt.getElementsByClassName('right');

	righta[0].onclick=function(){
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
	

	var leftt=wheelBox.getElementsByClassName('btnn')[0]
	var lefta=leftt.getElementsByClassName('left')

	lefta[0].onclick=function(){
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
	// 轮播图结束
	// 选项卡1开始
	//var aremai=document.getElementsByClassName('main')[0];
	var remaizuo2=mains.getElementsByClassName('remai')[0];
	var remaizuo=remaizuo2.getElementsByClassName('remai_left')[0];
	
	var butn=remaizuo.getElementsByClassName('remai2')[0];
	var trile=butn.getElementsByClassName('triggle')
	var lian=butn.getElementsByTagName('a');
	var lists=remaizuo.getElementsByClassName('list');
	lian[0].style.borderBottom="3px solid #e5004f"
	

	for(var m=0;m<lian.length;m++){
		lian[m].index=m;

		lian[m].onmouseover=function(){
			for(var n=0;n<lists.length;n++){
				lists[n].style.display="none";
				// trile[n].style.display="none";
				lian[n].style.background="transparent"
			}
			lists[this.index].style.display="block"
			// trile[n].style.display="block";
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
	var alian=abaihuos2.getElementsByTagName('a');
	var rights_bai=abaihuos.getElementsByClassName('bai_right3')

	alian[0].style.borderBottom="3px solid #e5004f"

	for(var p=0;p<alian.length;p++){
		alian[p].index=p;
		alian[p].onmouseover=function(){
			for(var q=0;q<rights_bai.length;q++){
				rights_bai[q].style.display="none"
				alian[q].style.background="transparent"
			}
			rights_bai[this.index].style.display="block";
			this.style.borderBottom="3px solid #e5004f"
		}
		alian[p].onmouseout=function(){
			this.style.borderBottom="none"
		}
	}

	// 选项卡2结束
	// 小轮播图开始    封装开始
	// function lunbostart(onece){
	var shishang=mains.getElementsByClassName('shishang')[0];
	var shi_body=shishang.getElementsByClassName('shi_body')[0];
	var shi_mid=shi_body.getElementsByClassName('shi_middle')[0];
	var mid_pics=shi_mid.getElementsByClassName('mid_pic')[0];
	var mid_pic=mid_pics.getElementsByTagName('a');
	
	var imgs=mid_pics.getElementsByTagName('img')
	var iw=parseInt(getStyle(imgs[0],'width'))
	mid_pics.style.width=iw*imgs.length+"px"
	
	var mid_dian=shi_mid.getElementsByClassName('mid_dian')[0]
	var mid_dian2=mid_dian.getElementsByTagName('li')


	
	mid_dian2[0].style.background="#e5004f"

	setInterval(function(){
		index++;
		if(index==lians.length){
			index=0;
		}
		animate(mid_pics,{length:-iw*index},500)
		for(var i=0;i<lians.length;i++){
			lis[i].style.background="#211616";
		}
		lis[index].style.background="#e5004f"
	},500)

	for(var aa=0;aa<mid_dian2.length;aa++){
		mid_dian2[aa].indexs=aa;
		mid_dian2[aa].onmouseover=function(){
			mid_pic.style.left="0"
			for(var bb=0;bb<mid_pic.length;bb++){
				
				mid_dian2[bb].style.background="#666"
			}

			this.style.background="#e5004f"
		}
	}
	// 小轮播图结束
	// 左右箭头开始
	var mid_arrow=shi_mid.getElementsByClassName('mid_btn')[0];

	var lft=mid_arrow.getElementsByClassName('btn_left')[0];
	var rht=mid_arrow.getElementsByClassName('btn_right')[0];

	
	var aindexs=0;
	rht.onclick=function(){
		aindexs++;
		if(aindexs==mid_pic.length){
			aindexs=0;
		}
		animate(mid_pics,{left:-iw*aindexs},300)
		for(var t=0;t<mid_pic.length;t++){
			
			mid_dian2[t].style.background="#666"
		}
		
		mid_dian2[aindexs].style.background="#e5004f"
	}
	rht.onmouseout=function(){
		animate(rht,{left})
	}


	lft.onclick=function(){
		aindexs--;
		if(aindexs==-1){
			aindexs=mid_pic.length-1;
		}
		animate(mid_pics,{left:-iw*aindexs},300)
		for(var s=0;s<mid_pic.length;s++){
			
			mid_dian2[s].style.background="#666"
		}
		
		mid_dian2[aindexs].style.background="#e5004f"
	}
	// 左右箭头结束
// }

for(var ii=0;ii<mains.length;ii++){
	lunbostart(shishang[ii]);
}






function getStyle(obj,attr){
     if(obj.currentStyle){
      return   obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
}



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
// }
// for(var j=0;j<shi_right.length;j++){
// 	bor()
// }





// var shi_lefts=$('.shi_left',shi_body)[0]
// var shi_lefts2=$('.shi_left2',shi_lefts)[0]
// var shi_lefts3=$('.shi_left3',shi_lefts2) //要轮播的框
// var left_butn2=$('.arrow',shi_lefts2)[0]
// var right_butn2=$('.arrow',shi_lefts2)[0]
// iws=parseInt(getStyle(shi_lefts3[0],'width'))

// var indexx=0;
// var nextt=0;

// shi_lefts3[0].style.left='0px'

// right_butn2.onclick=function(){
// 	nextt++;
// 	if(nextt==shi_lefts3.length){
// 		nextt=0
// 	}
// 	shi_lefts3[nextt].style.left=iws+'px'
// 	animate(shi_lefts3[indexx],{left:-iws},500)
// 	animate(shi_lefts3[nextt],{left:0},500)
// 	indexx=nextt;
// }
// left_butn2.onclick=function(){
// 	nextt--;
// 	if(nextt==-1){
// 		nextt=shi_lefts3.length-1;
// 	}
// 	shi_lefts3[nextt].style.left=-iws+'px'
// 	animate(shi_lefts3[indexx]{left:iws},500)
// 	animate(shi_lefts3[nextt]{left:0},500)
// 	indexx=nextt;
// }






}










// 箭头
function one(a){
	return document.querySelector(a);
}
function some(a){
	return document.querySelectorAll(a);
}

var prev=one(".prev");
var next=one(".next");
var meng1=one(".meng1");
var meng2=one(".meng2");
var lunbo=some(".lunbotu div");
var dian=some(".dian span");
var index=0;

// 客户端二维码
var phone =one(".phone");
var	appma =one(".appma");
phone.onmouseover=function(){
	appma.style.display="block"
}
phone.onmouseout=function(){
	appma.style.display="none"
}

//  轮播图 点
for(var i = 0;i<dian.length;i++){
	dian[i].index = i;
	index2=0
	dian[i].onclick = function(){
		for(var i = 0;i<dian.length;i++){
			dian[i].className = "";
			lunbo[i].className = "";
			index2=this.index;
		}
		dian[this.index].className="active";
		lunbo[this.index].className="active";
	}
}
// 轮播图 箭头
prev.onmouseover=function(){
	meng1.id="meng"
	prev.onclick=function(){
		// index --;
		index2 --;
		if(index2 < 0){
			index2 = lunbo.length -1;
		}
		for(var i = 0;i<lunbo.length;i++){
			dian[i].className= "";
			lunbo[i].className= "";	
		}
		dian[index2].className= "active";
		lunbo[index2].className= "active";
	}
}
prev.onmouseout=function(){
	meng1.id=""
}
next.onmouseover=function(){
	meng2.id="meng"
	next.onclick=function(){
		// index --;
		index2 ++;
		if(index2 > lunbo.length-1){
			index2 = 0;
		}
		for(var i = 0;i<lunbo.length;i++){
			dian[i].className= "";
			lunbo[i].className= "";	
		}
		dian[index2].className= "active";
		lunbo[index2].className= "active";
	}
}
next.onmouseout=function(){
	meng2.id=""
}


//选项卡
var li=some(".caidanlan ul li");
var tab=some(".caitab > div ");
for(var i=0;i<li.length;i++){
	li[i].index=i;
	li[i].onmouseover=function(){
		for(var i=0;i<li.length;i++){
			tab[i].style.display="none";
		}
		tab[this.index].style.display="block";
	}
	li[i].onmouseout=function(){
		for(var i=0;i<li.length;i++){
			tab[i].style.display="none";
		}
		tab[this.index].style.display="none";
	}
}
for(var i=0;i<li.length;i++){
	tab[i].index=i;
	tab[i].onmouseover=function(){
		for(var i=0;i<li.length;i++){
			tab[i].style.display="none";
		}
		tab[this.index].style.display="block";
	}
	tab[i].onmouseout=function(){
		tab[this.index].style.display="none";
	}
}

// 微信二维码
var sns=some(".sns a");
var wechat =one(".wechat");
sns[1].onmouseover=function(){
	wechat.style.display="block";
}
sns[1].onmouseout=function(){
	wechat.style.display="none";
}
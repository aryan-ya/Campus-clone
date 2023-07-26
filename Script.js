var i =0;
var imagess = [];
var time = 2000;
// image list
imagess[0] = './images/Screenshot_2023-04-07_161412.png' ;
imagess[1] = './images/Bonanza_Sale_Category_1512x.webp';
imagess[2] = './images/bg_slideshow_h1_1_1512x.webp';

// changes image

function  changeimg(){
    document.slide.src = imagess[i];

    if(i  < imagess.length- 1){
        i++;
    }else{
    i = 0;
    }
    setTimeout("changeimg()", time)
}
window.onload = changeimg;


//  move image 



let span = document.getElementsByTagName('span');
	let image = document.getElementsByClassName('image')
	let image_page = Math.ceil(image.length/4);
	let l = 0;
	let movePer = 5.34;
	let maxMove = 33;
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (image == 1){l = 0; }
		for(const i of image)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of image){
			if (image_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}



    
	
  
    
	

const secnavItems = document.querySelectorAll('.secnav li');
	const contentItems = document.querySelectorAll('.content-item');
	
	secnavItems.forEach((item) => {
	  item.addEventListener('mouseover', () => {
		const target = item.getAttribute('data-target');
		contentItems.forEach((contentItem) => {
		  if (contentItem.id === target) {
			contentItem.classList.add('active');
		  } else {
			contentItem.classList.remove('active');
		  }
		});
	  });
	
	  item.addEventListener('mouseout', () => {
		contentItems.forEach((contentItem) => {
		  contentItem.classList.remove('active');
		});
	  });
	});
	
	
  
		
 



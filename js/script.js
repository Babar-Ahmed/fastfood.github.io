//filter buttons







//filter btns
(function(){

//select all buttons
const filterBtn = document.querySelectorAll(".filter-btn");
 //console.log(filterBtn);

filterBtn.forEach(function(btn){
	btn.addEventListener("click", function(event){
		event.preventDefault();
		const value = event.target.dataset.filter;
		//console.log(value);	
const item = document.querySelectorAll('.store-item');
//console.log(item);

item.forEach(function(item){
	if(value ==='all'){
		item.style.display='block';
	}
	else
	{
		if(item.classList.contains(value)) {
			item.style.display='block';
		}
		else
		{
			item.style.display='none';
		}
	}
});

	});
});



})();

//seacrh input
(function(){

 //target search box
 const search = document.getElementById('search-item');
 search.addEventListener('keyup',function(){
 	let value = search.value.toLowerCase().trim();;
 	//console.log(value)

 	const items = document.querySelectorAll('.store-item');
 	items.forEach(function(item){
 		let type = item.dataset.item;

 		//console.log(type);
 		if(type.includes(value)){
 			item.style.display='block';
 		}
 		else
 		{
 			item.style.display='none';
 		}
 		let length = value.length;
 		let match=type.slice(0,length);
 		if(value === match){
 			item.style.display='block';
 		}
 		else{
 			item.style.display='none';
 			
 		}
 	});
 });


})();



$('body').scrollspy({target:'#main-nav'});	

	 //Add smooth scroll
	 $('#main-nav a').on('click',function(e) {
	 	if(this.hash!==''){
	 		e.preventDefault();
	 	
	 	const hash = this.hash;
	 	// body...
	 	$('html,body').animate({
	 		scrollTop:$(hash).offset().top
	 	},900,function(){
	 		window.location.hash = hash;
	 	});

}
	 });
window.onload = function() {
	window.onresize();
	setTimeout( function() {window.onresize() } , 1000);
}
window.onresize = function() {
	var b_width;
	var unit_width;
	b_width = $("div.catalog-container").width();
	unit_width = b_width/div(b_width, 200)+'px';  /*  вычисляем ширину блока    */
	unit_width = parseInt(unit_width);
	$('.catalog-item').css('width', unit_width);
	sort_block();
	
	
}	
function div(val, by){
    return (val - val % by) / by;
}
function sort_block(){
	$('#catalog-body').masonry({ // выбираем элемент-контейнер в котором расположены блоки для динамической верстки
	itemSelector: '.catalog-item', // указываем класс элемента являющегося блоком в нашей сетке
	singleMode: true, // true - если у вас все блоки одинаковой ширины
	resizeable: true, // перестраивает блоки при изменении размеров окна
	isAnimated: true, // анимируем перестроение блоков при помощи css transitions и Modernizr
	// анимируем перестроение блоков
	animationOptions: { 
		queue: false, 
		duration: 500 
		}
		// опции анимации - очередь и продолжительность анимации
	}); 
		
}
$(document).ready(function () {
	var currentFloor = 2; /*переменная, где храниться текущий этаж*/
	var floorPath = $(".home-image path"); /*каждый отдельный этаж в SVG*/
	var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
	var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/


// Функция при наведении курсора на этаж
	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor"); /*удаляем активный класс у этажей*/
		currentFloor = $(this).attr("data-floor"); /*получаем значение текущего этажа*/
		$(".counter").text(currentFloor); /*записываем значение этажа в счетчик*/
	});

//Функция увеличения счетчика
	/*отслеживаем клик по кнопке*/
	counterUp.on("click", function () {
		/*проверяем значение этажа(не дольжно быть больше 18)*/
		if (currentFloor < 18) {
			currentFloor++; /*прибовляем один этаж*/
			usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); /*форматируем переменную с этажом, чтобы было 02, а не 2*/
			$(".counter").text(usCurrentFloor); /*записываем значение в счетчик*/
			floorPath.removeClass("current-floor"); /*удаляем активный класс у этажей*/
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") /*подсвечиваем текущий этаж*/
		}
	});

//Функция уменьшения счетчика 
	/*отслеживаем клик по кнопке*/
	counterDown.on("click", function () {
		/*проверяем значение этажа(не дольжно быть меньше 2)*/
		if (currentFloor > 2) {
			currentFloor--; /*отнимаем один этаж*/
			usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); /*форматируем переменную с этажом, чтобы было 02, а не 2*/
			$(".counter").text(usCurrentFloor); /*записываем значение в счетчик*/
			floorPath.removeClass("current-floor"); /*удаляем активный класс у этажей*/
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") /*подсвечиваем текущий этаж*/
		}
	});
});	
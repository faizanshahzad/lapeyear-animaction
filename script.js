const outputEl = document.getElementById("output");
const inputYearEl = document.getElementById("inputYear");
const upEl = document.getElementById("up");
const downEl = document.getElementById("down");

let elements = document.querySelectorAll(".transformHolder");
let secondaryElements = document.querySelectorAll(".circle");
let year = 0;

upEl.addEventListener("click", function () {
	let v = inputYearEl.value;
	v++;
	inputYearEl.value = v;
	displayLeapYearText(v);
});
downEl.addEventListener("click", function () {
	let v = inputYearEl.value;
	v--;
	inputYearEl.value = v;
	displayLeapYearText(v);
});

inputYearEl.addEventListener("change", function (event) {
	year = event.target.value;
	displayLeapYearText(year);
});
function displayLeapYearText(year) {
	if (!isLeapYear(year)) {
		outputEl.innerHTML = "Is not a Leap Year";
		document.body.style.backgroundColor = "rgb(242, 177, 177)";
		anime({
			targets: elements,
			translateY: 50,
			backgroundColor: "rgba(230, 100, 100,0.3)",
			delay: anime.stagger(100)
		});
		anime({
			targets: secondaryElements,
			backgroundColor: "rgba(230, 100, 100,0.3)",
			delay: anime.stagger(100)
		});
	} else {
		outputEl.innerHTML = "Is a Leap Year";
		document.body.style.backgroundColor = "rgb(201, 242, 177)";
		anime({
			targets: elements,
			translateY: 0,
			backgroundColor: "rgba(100, 200, 100,0.3)",
			delay: anime.stagger(100)
		});
		anime({
			targets: secondaryElements,
			backgroundColor: "rgba(100, 200, 100,0.3)",
			delay: anime.stagger(100)
		});
	}
}

function isLeapYear(year) {
	return year % 4 !== 0
		? false
		: year % 100 !== 0
		? true
		: year % 400 !== 0
		? false
		: true;
}

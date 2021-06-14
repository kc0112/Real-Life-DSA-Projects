const game_clip = document.querySelectorAll(".game-clip");
const project_clip = document.querySelectorAll(".project-clip");

const home_btn = document.querySelector("#home");
const game_btn = document.querySelector("#game-section");
const live_btn1 = document.querySelector("#realLife-project-section1");
const live_btn2 = document.querySelector("#realLife-project-section2");
const about_btn = document.querySelector("#about");

const home_section = document.querySelector(".one");
const game_section = document.querySelector(".two");
const live1_section = document.querySelector(".three");
const live2_section = document.querySelector(".four");
const about_section = document.querySelector(".three");

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

// =============== NAV BAR ===================
menuIcon.addEventListener("click", function () {
    
	// game_section.scrollIntoView();
	navbar.classList.toggle("change");
});

// =============== VIDEO PAUSE PLAY ===================

for (let i = 0; i < game_clip.length; i++) {
	// console.log("He")
	game_clip[i].addEventListener("mouseenter", function (e) {
		game_clip[i].play();
	});
	game_clip[i].addEventListener("mouseout", function (e) {
		game_clip[i].pause();
	});
}

for (let i = 0; i < project_clip.length; i++) {
	project_clip[i].addEventListener("mouseenter", function (e) {
		project_clip[i].play();
	});
	project_clip[i].addEventListener("mouseout", function (e) {
		project_clip[i].pause();
	});
}

// =============== BUTTON ===================

home_btn.addEventListener("click", function (e) {
	navbar.classList.toggle("change");
	// console.log("home");
});

game_btn.addEventListener("click", function () {
	navbar.classList.toggle("change");
});

live_btn1.addEventListener("click", function () {
	navbar.classList.toggle("change");
});

live_btn2.addEventListener("click", function () {
	navbar.classList.toggle("change");
});

about_btn.addEventListener("click", function () {
	navbar.classList.toggle("change");
})

// =============== Testing ===================

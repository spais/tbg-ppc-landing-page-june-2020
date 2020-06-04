//cacheDOM

const
toggleBtn = document.querySelector(".primaryBtn"),
details = document.querySelector(".details-section"),
tabButton = document.querySelectorAll(".tabButton__btn"),
tabContent = document.querySelectorAll(".tab");


//Actions 

const scrollToDetails = () => {
    details.scrollIntoView({behavior: "smooth", block: "start"});
}

let tabMenuToggle = e => {
	let tabButtonActive = document.getElementsByClassName(
		"tabButton__btn--active"
	);
	let tabContentActive = document.querySelector(" .tab--active");

	tabButtonActive[0].classList.remove("tabButton__btn--active");
	e.target.classList.toggle("tabButton__btn--active");

	let id = e.target.id;
	tabContentActive.classList.remove("tab--active");
	for (let i = 0; i < tabContent.length; i++) {
		if (tabContent[i].id == `tab-${id}`) {
			tabContent[i].classList.add("tab--active");
		}
	}
};


//Event Listeners

toggleBtn.addEventListener("click", scrollToDetails);

for (let i = 0; i < tabButton.length; i++) {
	tabButton[i].addEventListener("click", tabMenuToggle);
}


console.clear();

const { gsap, Splitting } = window;

Splitting();

gsap.set('.cards__wrapper', { autoAlpha: 1 })

gsap.timeline({
	defaults: {
		duration: 1.25,
		stagger: 0.125,
		ease: "expo.inOut",
	},
})
	.fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
	.fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
	.set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");

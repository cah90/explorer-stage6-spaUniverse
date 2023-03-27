export function changeBackground(pathname) {
	const home = document.querySelector("#home")
	const universe = document.querySelector("#universe")
	const exploration = document.querySelector("#exploration")

	const body = document.querySelector("#body")

	const navigationItems = [home, universe, exploration]

	for (const item of navigationItems) {
		item.classList.remove("active")
		body.classList.remove(item.id)
	}

	for (const item of navigationItems) {
		if (item.pathname == pathname) {
			item.classList.add("active")
			body.classList.add(item.id)
		}
	}
}

export function changeBackground(pathname) {
	const home = document.querySelector("#home")
	const universe = document.querySelector("#universe")
	const exploration = document.querySelector("#exploration")

	const body = document.querySelector("#body")

	const navigationItems = [home, universe, exploration]

	// see here
	// https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

	for (const item of navigationItems) {
		item.classList.remove("active")

		// we take advantage here of the fact that the id (#) of each navigation item
		// is equal with the class that we activate or deactivate on body
		// For example, if we click on link with id='home' we need to add class home (same string as the id)
		// to body, and remov ethe others

		//console.log('id is')
		//console.log(item.id)

		// first we remove all classes from the body
		body.classList.remove(item.id)
	}

	for (const item of navigationItems) {
		if (item.pathname == pathname) {
			item.classList.add("active")
			body.classList.add(item.id)
		}
	} /// for
}

export class Router {
	routes = {}

	
	add(routeName, page) {
		this.routes[routeName] = page
	}

	route(event) {
		event = event || window.event

		event.preventDefault()

		window.history.pushState({}, "", event.target.href)

		this.handle()
	}

	handle() {
		const { pathname } = window.location
		const route = this.routes[pathname] || this.routes[404]
		// console.log(pathname)
		// console.log(route)

		this.highlightLink(pathname)

		fetch(route)
			.then((data) => {
				return data.text()
			})
			.then((html) => {
				//console.log(html)
				document.querySelector("#app").innerHTML = html
			})
	}

	highlightLink(pathname) {
		const home = document.querySelector("#home")
		const universe = document.querySelector("#universe")
		const exploration = document.querySelector("#exploration")

		const body = document.querySelector("#body")


		if(home.pathname == pathname) {
			home.classList.add("active")
			universe.classList.remove("active")
			exploration.classList.remove("active")

			body.classList.add("home")
			body.classList.remove("universe")
			body.classList.remove("exploration")

		} else if(universe.pathname == pathname) {
			universe.classList.add("active")
			home.classList.remove("active")
			exploration.classList.remove("active")

			body.classList.remove("home")
			body.classList.remove("exploration")
			body.classList.add("universe")
		} else {
			exploration.classList.add("active")
			universe.classList.remove("active")
			home.classList.remove("active")

			body.classList.remove("home")
			body.classList.remove("universe")
			body.classList.add("exploration")
		}
	}

}

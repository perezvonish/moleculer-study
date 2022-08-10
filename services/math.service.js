module.exports = {
	name: 'math',
	actions: {
		random() {

		},

		randomNumber: {
			rest: {
				method: "GET",
				path: "/randomNumber"
			},
			async handler(ctx) {
				return await ctx.emit("math.welcome")
			}
		},
	},

	events: {
		'math.welcome'(payload) {
			const number = Math.round(Math.random() * 10)
			return `Generated number from math.events.welcome --> ${number}`
		}
	}
}

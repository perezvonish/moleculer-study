"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	settings: {

	},

	dependencies: [],

	actions: {
		helloWorld: {
			rest: {
				method: "GET",
				path: "/helloWorld"
			},
			async handler(ctx) {
				return await ctx.emit('helper.called', this.broker.nodeID)
			}
		},
	},

	events: {

	},

	methods: {

	},

	created() {

	},

	async started() {

	},

	async stopped() {

	}
};

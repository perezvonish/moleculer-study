module.exports = {
	name: 'helper',

	actions: {

	},

	events: {
		'helper.called'(nodeId) {
			return `Hello world, I'm --> ${nodeId}!`
		},
	}
}

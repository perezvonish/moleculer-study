module.exports = {
	name: 'helper',

	actions: {
		random() {
			return Math.round(Math.random() * 10)
		}
	},

	events: {
		'helper.called'(payload) {
			this.logger.info('Helper service Caught an Event')
			this.logger.info(payload)
		},
	}
}

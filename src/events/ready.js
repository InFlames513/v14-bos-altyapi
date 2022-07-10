//bot başladığında hangi işlemlerin yapılacağını ayarlarsınız.

module.exports = {
	name: 'ready',
	once: true,
	execute() {
		console.log(`Bot hazır!`);
	},
};

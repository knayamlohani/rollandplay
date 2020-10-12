export default class Player {

	constructor(id) {
		this.name = `Player: ${id}`;
		this.points = 0;
		this.rank = 0;
		this.id = id;
		this.lastDiceGeneratedNo = null
	}
}
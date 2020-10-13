export default class QueueImmutable {


	constructor(initialData) {
		this._elements = [...initialData]
	}

	clone = (Queue) => {
		return new Queue(this._elements);
	};


	pushBack = (data) => {
		this._elements = [...this._elements, data];
		return this;
	};


	popFront = () => {

		if (this._elements.length > 0) {
			let poppedElement = this._elements[0];
			this._elements = [...this._elements].slice(1);
			return {
				poppedElement,
				queue: this
			};
		}

		return null;

	};


	getFront = () => {
		return this._elements.length > 0 ? this._elements[0] : null;
	};

	getFrontNext = () => {
		return this._elements.length > 1 ? this._elements[1] : null;
	};


	getQueueElements = () => {
		return this._elements;
	};


	isEmpty = () => {
		return this._elements === null || this._elements.length === 0;
	};


	getSize = () => {
		return this._elements.length();
	}
}
import {DICE_MAX_VALUE, DICE_MIN_VALUE} from "../constant/constant.game";


const generateRandomNoInRange = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
};


export const generateDiceNo = () => {
	return generateRandomNoInRange(DICE_MAX_VALUE, DICE_MIN_VALUE);
};



// fisher yates shuffling to generate random ordering
export const shuffle = (array)  => {
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};
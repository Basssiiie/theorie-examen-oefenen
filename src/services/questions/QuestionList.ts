import { QuestionOptions } from "./types/QuestionOptions";
import type { Question } from "./types/Question";
import type { QuestionType } from "./types/QuestionType";
import type { YesNoAnswer } from "./types/YesNoQuestion";
import type { ImageKeys } from "@services/images/ImageList";

const choices: QuestionType = "choices";
//const images: QuestionType = "images";
const yesno: QuestionType = "yesno";
const number: QuestionType = "number";

const yes: YesNoAnswer = "yes";
const no: YesNoAnswer = "no";

const G01: ImageKeys = "G01";
const G03: ImageKeys = "G03";

const questions =
{
	"snelheid.weg":
	[
		{ id: "snelweg.5h", type: number, correct: 130, image: G01 },
		{ id: "snelweg.6h", type: number, correct: 100, image: G01 },
		{ id: "snelweg.18h", type: number, correct: 100, image: G01 },
		{ id: "snelweg.19h", type: number, correct: 130, image: G01 },
		{ id: "autoweg", type: number, correct: 100, image: G03 }
	],
	"snelheid.voertuig":
	[
		{ id: "aanhangwagen.zwaar", type: number, correct: 80 },
		{ id: "aanhangwagen.licht", type: number, correct: 90 },
		{ id: "caravan.zwaar", type: number, correct: 80 },
		{ id: "caravan.licht", type: number, correct: 90 },
		{ id: "fietsendrager", type: number, correct: 100 },
		{ id: "vrachtwagen", type: number, correct: 80 }
	],
	"begrip.verkeer":
	[
		{ id: "voetganger", type: yesno, correct: yes },
		{ id: "geleider.paard", type: yesno, correct: yes },
		{ id: "geleider.schaap", type: yesno, correct: yes },
		{ id: "skateboard", type: yesno, correct: yes },
		{ id: "weggebruiker", type: yesno, correct: yes },
		{ id: "weggebruiker.voetganger", type: yesno, correct: yes },
		{ id: "weggebruiker.geleider.paard", type: yesno, correct: yes },
		{ id: "weggebruiker.geleider.koe", type: yesno, correct: yes },
	],
	"begrip.bestuurder":
	[
		{ id: "voetganger", type: yesno, correct: no },
		{ id: "skateboard", type: yesno, correct: no },
		{ id: "geleider.geit", type: yesno, correct: yes },
		{ id: "geleider.hond", type: yesno, correct: no },
		{ id: "instructeur", type: choices, correct: 1, flags: QuestionOptions.CanReverse },
	],
	"begrip.motorrijtuig":
	[
		{ id: "ebike", type: yesno, correct: no },
		{ id: "tram", type: yesno, correct: no },
		{ id: "handicap.rijtuig", type: yesno, correct: yes },
		{ id: "handicap.voertuig", type: yesno, correct: no },
		{ id: "bromfiets", type: choices, correct: 0, flags: QuestionOptions.CanRandomSort }
	],
	"begrip.wegen":
	[
		{ id: "doorgaanderijbaan", type: yesno, correct: no },
		{ id: "weefstrook", type: choices, correct: 0, flags: QuestionOptions.CanRandomSort },
		{ id: "tankstation", type: yesno, correct: no },
		{ id: "stoep", type: yesno, correct: yes },
		{ id: "berm", type: yesno, correct: yes },
	],
	"begrip.tijd":
	[
		{ id: "schemering", type: choices, correct: 0, flags: QuestionOptions.CanRandomSort },
		{ id: "nacht", type: choices, correct: 0, flags: QuestionOptions.CanRandomSort },
	],
	"begrip.parkeren":
	[
		{ id: "instappen", type: yesno, correct: no },
		{ id: "ladenlossen", type: yesno, correct: no },
		{ id: "winkelen", type: yesno, correct: yes },
	],
	"militair":
	[
		{ id: "vlag.voorkant", type: choices, correct: 1, flags: QuestionOptions.CanRandomSort },
		{ id: "vlag.midden", type: choices, correct: 1, flags: QuestionOptions.CanReverse },
		{ id: "vlag.achterkant", type: choices, correct: 0, flags: QuestionOptions.CanRandomSort },
		{ id: "lamp.voorkant", type: choices, correct: 1, flags: QuestionOptions.CanRandomSort },
		{ id: "lamp.achterkant", type: choices, correct: 2, flags: QuestionOptions.CanRandomSort }
	],
};


/**
 * Union of all available question categories in the library.
 */
export type CategoryKeys = (keyof typeof questions);


/**
 * All question definitions present in the game, bundled in various categories.
 */
export const Questions: Record<CategoryKeys, Question[]> = questions;
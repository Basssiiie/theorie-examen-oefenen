import type { ChoiceOptions } from "./types/ChoiceOptions";
import type { Question } from "./types/Question";
import type { YesNoAnswer } from "./types/YesNoQuestion";
import type { ImageKeys } from "@services/images/ImageList";

type QuestionType = Question["type"];

// Shortcuts to improve minification
const choices: QuestionType = "choices";
//const images: QuestionType = "images";
const yesno: QuestionType = "yesno";
const number: QuestionType = "number";

const yes: YesNoAnswer = "yes";
const no: YesNoAnswer = "no";

const G01: ImageKeys = "G01";
const G03: ImageKeys = "G03";

const random: ChoiceOptions = "randomize";
const reverse: ChoiceOptions = "reverse";
const group_1_2: ChoiceOptions = "group:1,2";
const group_2_1: ChoiceOptions = "group:2,1";

const questions =
{
	"snelheid.weg":
	[
		{ id: "snelweg.5h", type: number, correct: 130, image: G01 },
		{ id: "snelweg.6h", type: number, correct: 100, image: G01 },
		{ id: "snelweg.18h", type: number, correct: 100, image: G01 },
		{ id: "snelweg.19h", type: number, correct: 130, image: G01 },
		{ id: "autoweg", type: number, correct: 100, image: G03 },
		{ id: "buiten", type: number, correct: 80 },
	],
	"snelheid.voertuig":
	[
		{ id: "aanhangwagen.zwaar", type: number, correct: 80 },
		{ id: "aanhangwagen.licht", type: number, correct: 90 },
		{ id: "caravan.zwaar", type: number, correct: 80 },
		{ id: "caravan.licht", type: number, correct: 90 },
		{ id: "fietsendrager", type: number, correct: 100 },
		{ id: "vrachtwagen", type: number, correct: 80 },
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
		{ id: "instructeur", type: choices, correct: 1, reorder: random },
	],
	"begrip.motorrijtuig":
	[
		{ id: "ebike", type: yesno, correct: no },
		{ id: "tram", type: yesno, correct: no },
		{ id: "handicap.rijtuig", type: yesno, correct: yes },
		{ id: "handicap.voertuig", type: yesno, correct: no },
		{ id: "bromfiets", type: choices, correct: 0, reorder: random }
	],
	"begrip.wegen":
	[
		{ id: "doorgaanderijbaan", type: yesno, correct: no },
		{ id: "weefstrook", type: choices, correct: 0, reorder: random },
		{ id: "tankstation", type: yesno, correct: no },
		{ id: "stoep", type: yesno, correct: yes },
		{ id: "berm", type: yesno, correct: yes },
	],
	"begrip.tijd":
	[
		{ id: "schemering", type: choices, correct: 0, reorder: random },
		{ id: "nacht", type: choices, correct: 0, reorder: random },
	],
	"begrip.parkeren":
	[
		{ id: "instappen", type: yesno, correct: no },
		{ id: "ladenlossen", type: yesno, correct: no },
		{ id: "winkelen", type: yesno, correct: yes },
	],
	"militair":
	[
		{ id: "vlag.voorkant", type: choices, correct: 1, reorder: random },
		{ id: "vlag.midden", type: choices, correct: 1, reorder: group_2_1 },
		{ id: "vlag.achterkant", type: choices, correct: 0, reorder: random },
		{ id: "lamp.voorkant", type: choices, correct: 1, reorder: group_2_1 },
		{ id: "lamp.achterkant", type: choices, correct: 2, reorder: random }
	],
	"voorrang.regels":
	[
		{ id: "oprit", type: choices, correct: 1, reorder: random },
	],
	"voorrang.voetganger":
	[
		{ id: "blind", type: choices, correct: 2, reorder: group_1_2 },
		{ id: "oudere", type: yesno, correct: yes },
	],
	"slepen":
	[
		{ id: "afstand.maximum", type: number, correct: 5 },
		{ id: "vlag", type: yesno, correct: no },
		{ id: "verzekering", type: yesno, correct: yes },
		{ id: "rijbewijs", type: yesno, correct: yes },
		{ id: "wielen", type: number, correct: 3 },
		{ id: "bestuurder", type: choices, correct: 0, reorder: reverse },
		{ id: "passagiers", type: choices, correct: 1, reorder: random },
	],
	"verplichtingen":
	[
		{ id: "belasting", type: yesno, correct: no },
		{ id: "kentekencard", type: choices, correct: 2, reorder: group_2_1 },
		{ id: "kenteken.zelfmaak", type: yesno, correct: no },
		{ id: "kenteken.verschillende", type: yesno, correct: no },
		{ id: "kenteken.andere", type: yesno, correct: no },
	],
	"verboden":
	[
		{ id: "ongeluk", type: yesno, correct: no },
		{ id: "race", type: choices, correct: 1, reorder: random },
		{ id: "laadruimte.aanhanger", type: yesno, correct: no },
		{ id: "laadruimte.pickup", type: yesno, correct: no },

	],
	"gordels":
	[
		{ id: "kinderen.hals", type: choices, correct: 2, reorder: random },
		{ id: "kinderen.verhoger", type: number, correct: 135 },
	],
	"alcohol":
	[
		{ id: "afbraak1", type: number, correct: 1.5 },
		{ id: "afbraak5", type: number, correct: 7.5 },
		{ id: "controle", type: yesno, correct: yes },
		{ id: "beginner", type: choices, correct: 0, reorder: reverse },
		{ id: "ervaren", type: choices, correct: 2, reorder: reverse },
		{ id: "nullimiet", type: choices, correct: 2, reorder: reverse },
	],
	"straf":
	[
		{ id: "rijverbod", type: choices, correct: 0, reorder: reverse },
		{ id: "misdrijf", type: yesno, correct: yes },
	]
};


/**
 * Union of all available question categories in the library.
 */
export type CategoryKeys = (keyof typeof questions);


/**
 * All question definitions present in the game, bundled in various categories.
 */
export const Questions: Record<CategoryKeys, Question[]> = questions;
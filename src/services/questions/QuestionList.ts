import { QuestionOptions } from "./types/QuestionOptions";
import type { Question } from "./types/Question";
import { QuestionType } from "./types/QuestionType";
import { YesNoAnswer } from "./types/YesNoQuestion";

export const Questions: Record<string, Question[]> =
{
	"snelheid.weg":
	[
		{
			id: "snelweg.5h",
			type: QuestionType.NumberEntry,
			correct: 130
		},
		{
			id: "snelweg.6h",
			type: QuestionType.NumberEntry,
			correct: 100
		},
		{
			id: "snelweg.18h",
			type: QuestionType.NumberEntry,
			correct: 100
		},
		{
			id: "snelweg.19h",
			type: QuestionType.NumberEntry,
			correct: 130
		},
		{
			id: "autoweg",
			type: QuestionType.NumberEntry,
			correct: 100
		}
	],
	"snelheid.voertuig":
	[
		{
			id: "aanhangwagen.zwaar",
			type: QuestionType.NumberEntry,
			correct: 80
		},
		{
			id: "aanhangwagen.licht",
			type: QuestionType.NumberEntry,
			correct: 90
		},
		{
			id: "caravan.zwaar",
			type: QuestionType.NumberEntry,
			correct: 80
		},
		{
			id: "caravan.licht",
			type: QuestionType.NumberEntry,
			correct: 90
		},
		{
			id: "fietsendrager",
			type: QuestionType.NumberEntry,
			correct: 100
		},
		{
			id: "vrachtwagen",
			type: QuestionType.NumberEntry,
			correct: 80
		}
	],
	"begrip.verkeer":
	[
		{
			id: "voetganger",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "geleider.paard",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "geleider.schaap",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "skateboard",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "weggebruiker",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "weggebruiker.voetganger",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "weggebruiker.geleider.paard",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "weggebruiker.geleider.koe",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
	],
	"begrip.bestuurder":
	[
		{
			id: "voetganger",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "skateboard",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "geleider.geit",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "geleider.hond",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "instructeur",
			type: QuestionType.MultipleChoice,
			correct: 1,
			flags: QuestionOptions.CanReverse
		},
	],
	"begrip.motorrijtuig":
	[
		{
			id: "ebike",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "tram",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "handicap.rijtuig",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "handicap.voertuig",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "bromfiets",
			type: QuestionType.MultipleChoice,
			correct: 0,
			flags: QuestionOptions.CanRandomSort
		}
	],
	"begrip.wegen":
	[
		{
			id: "doorgaanderijbaan",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "weefstrook",
			type: QuestionType.MultipleChoice,
			correct: 0,
			flags: QuestionOptions.CanRandomSort
		},
		{
			id: "tankstation",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "stoep",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
		{
			id: "berm",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
	],
	"begrip.tijd":
	[
		{
			id: "schemering",
			type: QuestionType.MultipleChoice,
			correct: 0,
			flags: QuestionOptions.CanRandomSort
		},
		{
			id: "nacht",
			type: QuestionType.MultipleChoice,
			correct: 0,
			flags: QuestionOptions.CanRandomSort
		},
	],
	"begrip.parkeren":
	[
		{
			id: "instappen",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "ladenlossen",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.No
		},
		{
			id: "winkelen",
			type: QuestionType.YesNo,
			correct: YesNoAnswer.Yes
		},
	],
	"militair":
	[
		{
			id: "vlag.voorkant",
			type: QuestionType.MultipleChoice,
			correct: 1,
			flags: QuestionOptions.CanRandomSort
		},
		{
			id: "vlag.voorkant",
			type: QuestionType.MultipleChoice,
			correct: 1,
			flags: QuestionOptions.CanReverse
		},
		{
			id: "vlag.achterkant",
			type: QuestionType.MultipleChoice,
			correct: 0,
			flags: QuestionOptions.CanRandomSort
		},
		{
			id: "lamp.voorkant",
			type: QuestionType.MultipleChoice,
			correct: 1,
			flags: QuestionOptions.CanRandomSort
		},
		{
			id: "lamp.achterkant",
			type: QuestionType.MultipleChoice,
			correct: 2,
			flags: QuestionOptions.CanRandomSort
		}
	],
};
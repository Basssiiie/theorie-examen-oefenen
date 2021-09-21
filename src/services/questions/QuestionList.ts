import type { QuestionGroup } from "./types/QuestionGroup";
import { QuestionType } from "./types/QuestionType";
import { YesNoAnswer } from "./types/YesNoQuestion";

export const Questions: QuestionGroup[] =
[
	{
		id: "snelheid.weg",
		questions:
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
		]
	},
	{
		id: "snelheid.voertuig",
		questions:
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
		]
	},
	{
		id: "begrip.verkeer",
		questions:
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
		]
	},
	{
		id: "begrip.bestuurder",
		questions:
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
		]
	}
];
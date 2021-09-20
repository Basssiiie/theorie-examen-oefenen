import { QuestionType } from "./types/QuestionType";
import type { QuestionGroup } from "./types/QuestionGroup";

export const Questions: QuestionGroup[] =
[
	{
		id: "roadspeed",
		questions: [
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
		id: "vehiclespeed",
		questions: [
			{
				id: "aanhangwagen.heavy",
				type: QuestionType.NumberEntry,
				correct: 80
			},
			{
				id: "aanhangwagen.light",
				type: QuestionType.NumberEntry,
				correct: 90
			},
			{
				id: "caravan.heavy",
				type: QuestionType.NumberEntry,
				correct: 80
			},
			{
				id: "caravan.light",
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
	}
];
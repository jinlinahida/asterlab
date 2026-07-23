import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "longgang-senior-high-school",
		title: "Started Studying at Longgang Senior High School",
		description:
			"Started senior high school studies at Longgang Senior High School in Wenzhou.",
		type: "education",
		startDate: "2026-07-01",
		location: "Wenzhou, China",
		organization: "Longgang Senior High School",
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "longgang-senior-high-entrance-exam",
		title: "Longgang Senior High School Entrance Exam",
		description:
			"Participated in the Zhongkao examination in Wenzhou and received a score of 598.",
		type: "achievement",
		startDate: "2026-06-20",
		endDate: "2026-06-21",
		location: "Wenzhou, China",
		organization: "Zhongkao",
		achievements: ["Zhongkao score: 598"],
		icon: "material-symbols:emoji-events",
		color: "#F59E0B",
	},
	{
		id: "longgang-experimental-middle-school",
		title: "Studied at Longgang Experimental Middle School",
		description:
			"Studied at Longgang Experimental Middle School in Wenzhou from September 2023 to June 2026.",
		type: "education",
		startDate: "2023-09-01",
		endDate: "2026-06-30",
		location: "Wenzhou, China",
		organization: "Longgang Experimental Middle School",
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "first-programming-experience",
		title: "First Programming Experience",
		description:
			"First encountered programming and began exploring the fundamentals of coding.",
		type: "education",
		startDate: "2019-07-01",
		skills: ["Programming"],
		achievements: [
			"First encountered programming in July 2019",
			"Developed a lasting interest in technology",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
	{
		id: "jiang-lifu-primary-school",
		title: "Studied at Jiang Lifu Primary School",
		description:
			"Attended Jiang Lifu Primary School in Wenzhou from September 2017 to June 2023.",
		type: "education",
		startDate: "2017-09-01",
		endDate: "2023-06-30",
		location: "Wenzhou, China",
		organization: "Jiang Lifu Primary School",
		icon: "material-symbols:school",
		color: "#0EA5E9",
	},
	{
		id: "born-in-tianjin",
		title: "Born in Tianjin",
		description: "Born in April 2011 in Tianjin, China.",
		type: "achievement",
		startDate: "2011-04-01",
		location: "Tianjin, China",
		icon: "material-symbols:cake",
		color: "#EC4899",
		featured: true,
	},
];

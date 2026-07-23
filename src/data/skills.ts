// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "html",
		name: "HTML",
		description:
			"The standard markup language for structuring semantic and accessible web content.",
		icon: "logos:html-5",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 5 },
		color: "#E34F26",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 2, months: 0 },
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description:
			"A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
		icon: "logos:react",
		category: "frontend",
		level: "beginner",
		experience: { years: 2, months: 0 },
		color: "#61DAFB",
	},

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "advanced",
		experience: { years: 5, months: 3 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 3, months: 4 },
		color: "#ED8B00",
	},
	{
		id: "csharp",
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "beginner",
		experience: { years: 2, months: 5 },
		color: "#239120",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "beginner",
		experience: { years: 2, months: 8 },
		color: "#00599C",
	},
	{
		id: "kotlin",
		name: "Kotlin",
		description:
			"A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
		icon: "logos:kotlin-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 1, months: 6 },
		color: "#7F52FF",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 5 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 5, months: 0 },
		color: "#007ACC",
	},
	{
		id: "webstorm",
		name: "WebStorm",
		description:
			"A professional JavaScript and web development IDE developed by JetBrains with intelligent code assistance.",
		icon: "logos:webstorm",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#00CDD7",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		icon: "logos:pycharm",
		category: "tools",
		level: "advanced",
		experience: { years: 4, months: 0 },
		color: "#21D789",
	},
	{
		id: "rider",
		name: "Rider",
		description:
			"A cross-platform .NET IDE by JetBrains supporting development in C#, VB.NET, F#, and other languages.",
		icon: "logos:rider",
		category: "tools",
		level: "beginner",
		experience: { years: 2, months: 5 },
		color: "#616161",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 9 },
		color: "#2496ED",
	},
	{
		id: "android-studio",
		name: "Android Studio",
		description:
			"The official IDE for Android development, with integrated coding, debugging, and device tooling.",
		icon: "logos:android-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 6 },
		color: "#3DDC84",
	},
	{
		id: "chatgpt",
		name: "ChatGPT",
		description:
			"An AI assistant used for research, problem-solving, content creation, and development workflows.",
		icon: "simple-icons:openai",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 7 },
		color: "#10A37F",
	},
	{
		id: "codex",
		name: "Codex",
		description:
			"An AI coding agent used to understand codebases, implement changes, and automate development tasks.",
		icon: "simple-icons:openai",
		category: "tools",
		level: "expert",
		experience: { years: 0, months: 8 },
		color: "#10A37F",
	},
	{
		id: "cursor",
		name: "Cursor",
		description:
			"An AI-powered code editor for code generation, refactoring, and repository-aware development.",
		icon: "simple-icons:cursor",
		category: "tools",
		level: "expert",
		experience: { years: 2, months: 4 },
		color: "#616161",
	},
	{
		id: "trae",
		name: "Trae",
		description:
			"An AI-powered development environment for coding, project understanding, and automated assistance.",
		icon: "ri:code-box-line",
		category: "tools",
		level: "expert",
		experience: { years: 1, months: 4 },
		color: "#5B5BD6",
	},
	{
		id: "openclaw",
		name: "OpenClaw",
		description:
			"An AI agent platform used to automate workflows and complete tasks with connected tools.",
		icon: "ri:robot-2-line",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#EF4444",
	},
	{
		id: "antigravity",
		name: "Antigravity",
		description:
			"An AI-assisted development environment for planning, coding, and managing software tasks.",
		icon: "ri:rocket-2-line",
		category: "tools",
		level: "advanced",
		experience: { years: 0, months: 8 },
		color: "#4285F4",
	},
	{
		id: "figma",
		name: "Figma",
		description:
			"A collaborative interface design tool for UI/UX design and prototyping.",
		icon: "logos:figma",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 11 },
		color: "#F24E1E",
	},
	{
		id: "davinci-resolve",
		name: "DaVinci Resolve",
		description:
			"Professional software for video editing, color correction, visual effects, and audio post-production.",
		icon: "simple-icons:davinciresolve",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 7 },
		color: "#E64A35",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "Professional image editing and design software.",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "beginner",
		experience: { years: 2, months: 5 },
		color: "#31A8FF",
	},
	{
		id: "lightroom",
		name: "Lightroom",
		description:
			"Professional photo management and editing software for organizing, developing, and enhancing images.",
		icon: "logos:adobe-lightroom",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 5 },
		color: "#31A8FF",
	},
];

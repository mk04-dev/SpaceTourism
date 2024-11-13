/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			screens: {
				tablet: "940px",
			},
			fontFamily: {
				bellefair: "Bellefair",
				barlow: "Barlow",
				"barlow-condensed": "Barlow Condensed",
			},
			fontSize: {
				"desktop-1": "9rem",
				"desktop-2": "6rem",
				"desktop-3": "3.5rem",
				"desktop-4": "2rem",
				"desktop-5": [
					"1.75rem",
					{
						letterSpacing: "15%",
					},
				],
				"desktop-6": "1.75rem",
				"desktop-7": [
					"0.88rem",
					{
						letterSpacing: "2px",
					},
				],
				"desktop-8": [
					"1rem",
					{
						letterSpacing: "2px",
					},
				],
				"desktop-8": [
					"1rem",
					{
						fontWeight: "bold",
						letterSpacing: "2.7px",
					},
				],
				"desktop-9": [
					"1.12rem",
					{
						lineHeight: "180%",
					},
				],
				"tablet-2": "5rem",
				"tablet-3": "2.5rem",
				"tablet-4": "1.5rem",
				"tablet-5": "1.25rem",
				"tablet-9": [
					"1.125rem",
					{
						lineHeight: "180%",
						fontSize: "0px",
					},
				],
				"mobile-1": "5rem",
				"mobile-2": "3.5rem",
				"mobile-3": "1.5rem",
				"mobile-4": "1.12rem",
				"mobile-6": [
					"1rem",
					{
						letterSpacing: "15%",
					},
				],
				"mobile-8": "0.88rem",
				"mobile-9": [
					"0.94rem",
					{
						lineHeight: "180%",
						fontSize: "0px",
					},
				],
			},
		},
	},
	plugins: [],
};

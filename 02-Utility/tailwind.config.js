/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html, js}"],
	theme: {
		extend: {
			spacing: {
				13: "3.25rem",
			},
			fontFamily: {
				poppin: ["Poppins", "sans-serif"],
			},
			animation: {
				goyangAnim: "goyang 3s linear infinite",
			},
			keyframes: {
				goyang: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	//File html atau js yang akan menggunakan class-class tailwind
	// ./src cek dalam folder ini, ** cek semua folder di dalamnya, *cek semua file disemua folder, dengan ekstensi js dan html
	// content: ["./src/**/*.{html,js}"],
	content: ["./public/**/*.{html, js}"],
	theme: {
		extend: {},
	},
	plugins: [],
};

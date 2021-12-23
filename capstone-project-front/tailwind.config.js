module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1366px",
			"2xl": "1536px",
		},
		container: {
			center: true,
		},
		colors: {
			transparent: "transparent",
			current: "inherit",
			primary: {
				light: "#EC802C",
				DEFAULT: "#EC6E0C",
				dark: "#C65C0A",
			},
			secondary: {
				lightest: "#FFF3CD",
				DEFAULT: "#F49E00",
			},
			gray: {
				lightest: "#F5F5F5",
				light: "#5B5B5F",
				disabled: "#BCBCBC",
				DEFAULT: "#3C393C",
				dark: "#1A171B",
			},
			white: {
				DEFAULT: "#FFFFFF",
			},
			red: {
				lightest: "#EC130F1A",
				light: "#D9003C",
				DEFAULT: "#BB0034",
			},
			citrine: {
				DEFAULT: "#F9EDD3",
			},
			black: {
				DEFAULT: "#000000",
			},
			blue: {
				lightest: "#E7F2F8",
				DEFAULT: "#0B7EB5",
			},
			green: {
				lightest: "#02910F1A",
				DEFAULT: "#0B8A1C",
			},
		},
		fontFamily: {
			sans: ["Oxygen", "sans-serif"],
		},
		spacing: {
			0: "0px",
			0.5: "4px",
			0.75: "6px",
			1: "8px",
			1.5: "10px",
			2: "12px",
			2.5: "14px",
			3: "16px",
			3.5: "18px",
			4: "20px",
			4.5: "22px",
			5: "24px",
			5.5: "26px",
			6: "28px",
			6.5: "30px",
			7: "32px",
			7.5: "40px",
			8: "48px",
			8.5: "52px",
			9: "72px",
		},
		minWidth: {
			0: "0",
			"1/2": "50%",
			button: "176px",
		},
		borderRadius: {
			none: "0",
			xs: "2px",
			sm: "2px",
			DEFAULT: "4px",
			lg: "8px",
			full: "9999px",
		},
		opacity: {
			0: "0",
			10: "0.1",
			20: "0.2",
			30: "0.3",
			40: "0.4",
			50: "0.5",
			60: "0.6",
			70: "0.7",
			80: "0.8",
			90: "0.9",
			100: "1",
		},
		extend: {
			typography: {
				xs: {
					css: {
						fontSize: "12px",
					},
				},
				sm: {
					css: {
						fontSize: "14px",
					},
				},
				DEFAULT: {
					css: {
						fontSize: "16px",
					},
				},
				lg: {
					css: {
						fontSize: "18px",
					},
				},
				"2lg": {
					css: {
						fontSize: "20px",
					},
				},
				xl: {
					css: {
						fontSize: "24px",
					},
				},
				"2xl": {
					css: {
						fontSize: "36px",
					},
				},
				"3xl": {
					css: {
						fontSize: "48px",
					},
				},
				"4xl": {
					css: {
						fontSize: "60px",
					},
				},
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
			backgroundColor: ["disabled"],
			borderColor: ["disabled"],
			textColor: ["disabled"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

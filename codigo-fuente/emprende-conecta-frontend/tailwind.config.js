/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
    theme: {
        extend: {
            borderWidth: {
                1: "1px",
            },
            colors: {
                custom: {
                    blue: "#0B3954",
                    yellow: "#E0FF4F",
                    lightblue: "#64889E",
                    darkblue: "#187EBA",
                    whiteblue: "#134B6A",
                    grey: "#34596E",
                    turquoise: "#BDD6E8",
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "primary-focus": "#84CC16",
                    "custom-blue": "#0B3954",
                    "custom-yellow": "#E0FF4F",
                    "custom-lightblue": "#64889E",
                    "custom-darkblue": "#187EBA",
                },
            },
        ],
    },
};

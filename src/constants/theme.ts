import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `"Ubuntu", sans-serif`,
		body: `"Ubuntu", sans-serif`,
	},
	styles: {
		global: {
			"::-webkit-scrollbar": {
				width: "12px",
				backgroundColor: `rgba(254, 250, 224)`,
			},
			"::-webkit-scrollbar-thumb": {
				borderRadius: "4px",
				backgroundColor: `rgba(255, 183, 98)`,
			},
			"::selection": {
				backgroundColor: `rgba(255, 183, 98)`,
				color: `rgba(254, 250, 224)`,
			},
		},
	},
});

export default theme;

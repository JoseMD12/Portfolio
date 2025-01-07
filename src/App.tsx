import { Flex, Image } from "@chakra-ui/react";
import Waves from "./assets/Template/waves.png";
import ScrollUpButton from "./components/ScrollUpButton";
import { colors } from "./constants/colors";
import Home from "./Pages/Home";
import MoodBoard from "./Pages/MoodBoard";
import Skills from "./Pages/Skills";

export default function App() {
	return (
		<Flex
			minH='100%'
			maxW='100%'
			w='100%'
			bg={colors["verde-militar"]}
			color={colors["light"]}
			flexDirection='column'
			overflowX={"hidden"}
		>
			<ScrollUpButton />
			<Home />

			<Image
				zIndex={0}
				position='absolute'
				src={Waves}
				alt='Waves'
				h='59rem'
				w='100vw'
			/>

			<Flex
				flexDirection='column'
				bgGradient={colors["backgroung-grdient"]}
				h='8500px'
			>
				<MoodBoard />

				<Skills />
			</Flex>
		</Flex>
	);
}

import { Flex, Image } from "@chakra-ui/react";
import { useRef } from "react";
import MoodBoardPng from "../../assets/Mood Board/Frame 1.png";
import IntroductionText from "../../components/Introduction";

import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { colors } from "../../constants/colors";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function MoodBoard() {
	const controls = useAnimation();
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			scale.on("change", (latest) => {
				controls.start({ scale: latest, opacity: latest });
			});
		} else {
			scale.on("change", () => {
				controls.start({ scale: 1, opacity: 0 });
			});
		}
	}, [scale, controls, isInView]);

	return (
		<Flex
			pt='20rem'
			textAlign='center'
			h='fit-content'
			w='full'
			flexDirection='column'
			alignItems={"center"}
			gap='16'
		>
			<IntroductionText id='MoodBoard' title='Quem sou eu?'>
				Sou um{" "}
				<span
					style={{
						fontWeight: "bold",
						color: colors["laranja-principal"],
					}}
				>
					{" "}
					desenvolvedor de software back-end{" "}
				</span>{" "}
				que adora criar e desenvolver novos projetos de impacto. Gosto
				ainda de fazer crochê, jogar vídeo games e passear em parques
				aos domingos.
				<br />
				<br />
				Estou empolgado para fazer novas parceiras que possam
				transformar as vivências de muitas pessoas.
			</IntroductionText>

			<MotionFlex
				transition={{ type: "ease-in", duration: 0.5 }}
				ref={ref}
				animate={controls}
				w='full'
				justifyContent='center'
				pt='4rem'
				maxW='80vw'
			>
				<MotionImage w='50%' src={MoodBoardPng} alt='MoodBoard' />
			</MotionFlex>
		</Flex>
	);
}

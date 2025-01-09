import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Profile1 from "../../assets/Profile/Profile1.png";
import Header from "../../components/Header";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";

const MotionBox = motion.create(Box);

export default function Home() {
	const controlsRef = useRef<any>(null);
	const rotate = useMotionValue(335);
	useEffect(() => {
		const controls = animate(rotate, 695, {
			duration: 5,
			ease: "linear",
			repeat: Infinity,
		});

		controlsRef.current = controls;
		controls.pause();
	}, []);

	return (
		<Flex flexDirection='column' zIndex={1}>
			<Header />

			<Flex w='100vw' pt='3rem' id='Home'>
				<Flex pt='8rem' pl='12rem' flexDirection='column' w='50%'>
					<Text
						pb='1.5rem'
						fontSize={fontSize["md"]}
						color={colors["light"]}
						fontWeight={fontWeight["light"]}
					>
						Olá, sou
					</Text>

					<Text
						fontSize={fontSize["xl"]}
						color={colors["light"]}
						fontWeight={fontWeight["light"]}
					>
						José Dotta
					</Text>

					<Text
						fontSize={fontSize["xl"]}
						color={colors["laranja-principal"]}
						fontWeight={fontWeight["bold"]}
						maxW='50rem'
						lineHeight='1.2'
					>
						Desenvolvedor de Software
					</Text>

					<Text
						pt='2rem'
						fontSize={fontSize["md"]}
						color={colors["light"]}
						fontWeight={fontWeight["light"]}
						maxW='30rem'
					>
						Esse é o meu portfólio. Sinta-se a vontade para navegar
						e conhecer um pouco mais sobre mim.
					</Text>
				</Flex>

				<Flex
					position='relative'
					pt='3rem'
					pb='3.1rem'
					pl='12rem'
					w='50%'
					overflow={"hidden"}
				>
					<MotionBox
						position={"absolute"}
						ml='-1.5rem'
						mt='1.5rem'
						width='550px'
						height='450px'
						// backgroundColor='blue.300'
						border={"3.5px solid white"}
						borderRadius='50%'
						boxShadow='lg'
						onMouseEnter={() => {
							controlsRef.current.play();
						}}
						onMouseLeave={() => {
							controlsRef.current.pause();
						}}
						style={{ rotate }}
					/>

					<Image
						src={Profile1}
						alt='José Dotta'
						w='30vw'
						border='none'
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}

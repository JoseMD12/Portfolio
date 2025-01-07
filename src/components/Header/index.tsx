import { Box, Button, Flex } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";

export default function WithSubnavigation() {
	const textLabels = [
		// {
		//     Name: "Home",
		//     Id: "Home",
		// },
		{
			Name: "Quem sou eu?",
			Id: "MoodBoard",
		},
		{
			Name: "Competências",
			Id: "Skills",
		},
		{
			Name: "Experiência",
			Id: "XP",
		},
		{
			Name: "Contato",
			Id: "Contact",
		},
	];
	return (
		<Box
			bg={colors["light"]}
			w='45rem'
			h='3rem'
			p='1rem'
			display={"flex"}
			mt='3rem'
			mx='auto'
			alignItems={"center"}
			color={colors["verde-militar"]}
			borderRadius='20px'
		>
			<Flex w='full' justifyContent={"space-around"} gap='1rem'>
				{textLabels.map((text, index) => (
					<Button
						w={"full"}
						key={index}
						alignItems={"center"}
						justifyContent={"center"}
						h='1.8rem'
						borderRadius='12px'
						padding={2}
						bg='transparent'
						transition={"all ease-in-out 0.2s"}
						_hover={{
							fontWeight: fontWeight["bold"],
							cursor: "pointer",
							bg: colors["laranja-principal"],
						}}
						fontSize={fontSize["sm"]}
						color={colors["verde-militar"]}
						fontWeight={fontWeight["medium"]}
						onClick={() => {
							const element = document.querySelector(
								"#" + text.Id
							);

							element?.scrollIntoView({
								block: "start",
								behavior: "smooth",
							});
						}}
					>
						{text.Name}
					</Button>
				))}
			</Flex>
		</Box>
	);
}

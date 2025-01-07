import { InputProps as ChakraInputProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";

interface IntroductionTextProps extends ChakraInputProps {
	title: string;
	children: ReactNode;
}

export default function IntroductionText(props: IntroductionTextProps) {
	return (
		<Flex
			{...props}
			textAlign='center'
			h='fit-content'
			w='full'
			flexDirection='column'
			gap='16'
		>
			<Text
				fontSize={fontSize["xl"]}
				fontWeight={fontWeight["bold"]}
				color={colors["light"]}
				w='full'
			>
				{props.title}
			</Text>

			<Text
				fontSize={fontSize["md"]}
				fontWeight={fontWeight["light"]}
				textAlign='justify'
				color={colors["light"]}
				w='58%'
				alignSelf='center'
			>
				{props.children}
			</Text>
		</Flex>
	);
}

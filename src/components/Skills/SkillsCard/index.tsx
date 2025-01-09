import { Box, Flex } from "@chakra-ui/react";
import { colors } from "../../../constants/colors";

interface SkillsCardProps {
	children?: React.ReactNode;
	upsideDown?: boolean;
	cardDataType: "Text" | "TechCard" | "none";
}

export default function SkillsCard(props: SkillsCardProps) {
	return (
		<>
			<Flex
				transform={props.upsideDown ? "rotate(180deg)" : ""}
				ml={props.upsideDown ? "" : "-2rem"}
			>
				<Box
					left='1px'
					position='relative'
					width='0px'
					height='0px'
					borderLeft='6rem solid transparent' // Base do triângulo
					borderBottom={`17rem solid ${colors["verde-militar"]}`} // Altura do triângulo
				/>
				<Flex
					style={
						props.cardDataType === "TechCard"
							? {
									width: "30rem",
									height: "17rem",
									backgroundColor: colors["verde-militar"],
									borderRadius: "0px 30px 30px 0px",
									justifyContent: "center",
									alignItems: "center",
									gap: "2.5rem",
							  }
							: {
									width: "30rem",
									height: "17rem",
									backgroundColor: colors["verde-militar"],
									borderRadius: "0px 30px 30px 0px",
							  }
					}
				>
					{props.children}
				</Flex>
			</Flex>
		</>
	);
}

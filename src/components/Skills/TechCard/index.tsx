import { Box } from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";
import { colors } from "../../../constants/colors";

export default function TechCard() {
	return (
		<>
			<Box
				boxSize='4rem'
				border='4px solid'
				borderRadius='8px'
				color={colors["laranja-principal"]}
				alignContent='center'
				justifyItems='center'
			>
				<FaGear />
			</Box>
		</>
	);
}

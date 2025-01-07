import { Flex, Text } from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";
import IntroductionText from "../../components/Introduction";
import SkillsCard from "../../components/Skills/SkillsCard";
import TechCard from "../../components/Skills/TechCard";
import { colors } from "../../constants/colors";
export default function Skills() {
	return (
		<Flex
			pt='16rem'
			textAlign='center'
			h='fit-content'
			w='full'
			flexDirection='column'
			gap='16'
		>
			<IntroductionText id='Skills' title='Competências'>
				Sou um desenvolvedor de software back-end que adora criar e
				desenvolver novos projetos de impacto. Gosto ainda de fazer
				crochê, jogar vídeo games e passear em parques aos domingos.
				<br />
				<br />
				Estou empolgado para fazer novas parceiras que possam
				transformar as vivências de muitas pessoas.
			</IntroductionText>

			<Flex
				mt='2rem'
				w='100%'
				h='fit-content'
				flexDirection='row'
				alignItems={"center"}
				justifyContent={"center"}
			>
				<SkillsCard upsideDown />
				<Flex m='0' p='0'>
					<Flex
						mx='-5rem'
						zIndex={1}
						bg={colors["laranja-principal"]}
						w='8rem'
						h='2rem'
					/>
				</Flex>
				<SkillsCard>
					<Text
						fontSize='18px'
						color={colors["light"]}
						textAlign='justify'
						alignSelf='center'
						mx='4rem'
					>
						Sou{" "}
						<span
							style={{
								fontWeight: "bold",
								color: colors["laranja-principal"],
							}}
						>
							desenvolvedor focado em Back-end
						</span>
						. Sou familiarizado com a construção de APIs que
						suportam as operações de sites.
						<br />
						<br />
						Tenho desenvolvido também habilidades na área de
						Frontend.
					</Text>
				</SkillsCard>

				<Flex px='2rem'>
					<FaGear size='6rem' color={colors["laranja-principal"]} />
				</Flex>

				<SkillsCard upsideDown>
					<TechCard />
				</SkillsCard>
				<SkillsCard />
			</Flex>

			{/* <Board /> */}
		</Flex>
	);
}

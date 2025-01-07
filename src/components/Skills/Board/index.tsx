import { Flex, Image } from "@chakra-ui/react";
import BoardSVG from "../../../assets/Skills/board.svg";

export default function Board() {
    return (
        <Flex>
            <Image src={BoardSVG} alt='Mood Board' />
        </Flex>
    );
}

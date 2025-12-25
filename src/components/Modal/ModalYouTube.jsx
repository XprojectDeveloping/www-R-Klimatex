import {
  AspectRatio,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ModalYouTube(youtubeUrl, img) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const youtubeUrlId = youtubeUrl;
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        <img
          className="max-w-[7rem] lg:max-w-[6rem] md:max-w-[4rem]"
          src={img}
          alt="youtubeImg"
        />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <Box
                as="iframe"
                src={youtubeUrlId}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube видео"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalYouTube;

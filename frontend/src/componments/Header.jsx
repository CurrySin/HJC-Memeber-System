import React, { createElement, useMemo, useState, useRef }  from "react";
import {
    Heading, 
    Flex,
    Input,
    InputGroup,
    Button,
    Stack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    InputLeftAddon,
    Select,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter
} from "@chakra-ui/react";

const TodosContext = React.createContext({
    todos: [], fetchTodos: () => {}
})

function DownloadTestExce() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const importExcel = async () => {
        await fetch(`http://localhost:8000/excel/import`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        window.location.reload(false);
    }

    const exportReport1 = async () => {
        await fetch(`http://localhost:8000/excel/test1`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        window.location.reload(false);
    }

    const exportReport2 = async () => {
        await fetch(`http://localhost:8000/excel/test2`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
        window.location.reload(false);
    }

    return (
        <>
            <Button colorScheme='red' size="sm" onClick={onOpen}>Import Raw Excel</Button>
            <Button colorScheme='blue' h="1.5rem" size="sm" onClick={exportReport1}>Export Report 1</Button>
            <Button colorScheme='blue' h="1.5rem" size="sm" onClick={exportReport2}>Export Report 2</Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Confirm Import ?
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    Are you sure?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='red' onClick={importExcel} ml={3}>
                        Import
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

function CreateMember() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [in_hjc_id, setHJCID] = useState('')
    const [in_first_name, setFirstName] = useState('')
    const [in_last_name, setLastName] = useState('')
    const [in_gender, setGender] = useState('')
    const [in_email, setEmail] = useState('')
    const [in_phone, setPhone] = useState('')
    const {fetchTodos} = React.useContext(TodosContext)
  
const createMember = async () => {
    var obj = {
        "id": "",
        "hjc_id": in_hjc_id,
        "first_name": in_first_name,
        "last_name": in_gender,
        "gender": in_gender,
        "email": in_email,
        "phone": in_phone
    }
    console.log(obj)
    await fetch(`http://localhost:8000/member/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    onClose()
    await fetchTodos()
    window.location.reload(false);
  }

  return (
    <>
      <Button colorScheme='blue' h="1.5rem" size="sm" onClick={onOpen}>Create Member</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Create Member</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            {/* <InputGroup size="md">
              <InputLeftAddon children='ID' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Add a todo item"
                aria-label="Add a todo item"
                value={in_item_id}
                onChange={e => setItemID(e.target.value)}
              />
            </InputGroup> */}
            <InputGroup size="md">
              <InputLeftAddon children='HJC ID' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="HJC ID"
                aria-label="HJC ID"
                value={in_hjc_id}
                onChange={e => setHJCID(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon children='First Name' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                value={in_first_name}
                onChange={e => setFirstName(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon children='Last Name' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                value={in_last_name}
                onChange={e => setLastName(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon children='Email' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Email"
                aria-label="Email"
                value={in_email}
                onChange={e => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon children='Gender' />
              <Select value={in_gender} 
              onChange={e => setGender(e.target.value)}
              placeholder='Select Gender' size='md'>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </Select>
            </InputGroup>
            <InputGroup size="md">
              <InputLeftAddon children='Phone' />
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Phone"
                aria-label="Phone"
                value={in_phone}
                onChange={e => setPhone(e.target.value)}
              />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button h="1.5rem" size="sm" onClick={createMember}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function TodoHelper({item, id, fetchTodos}) {
    return (
      <Stack direction='row' spacing={4} align='center'>
        <CreateMember />
      </Stack>
    )
}

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="gray.400"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="md">HJC Member System</Heading>
      </Flex>
      <DownloadTestExce />
      <TodoHelper />
    </Flex>
  );
};

export default Header;
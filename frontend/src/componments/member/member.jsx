import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Heading,
  Spacer,
  ButtonGroup,
  InputLeftAddon,
  Select,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import MemberTable from "./memberTable";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});

function CreateMember() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [in_NOM, SetNOM] = useState("");
  const [in_NOMCode, SetNOMCode] = useState("");
  const [in_NOMID, SetNOMID] = useState("");
  const [in_MemberID, SetMemberID] = useState("");
  const [in_NOMMemberType, SetNOMMemberType] = useState("");
  const [in_LOMMemberType, SetLOMMemberType] = useState("");
  const [in_Senator, SetSenator] = useState("");
  const [in_SenatorID, SetSenatorID] = useState("");
  const [in_DatePM, SetDatePM] = useState("");
  const [in_DateInduct, SetDateInduct] = useState("");
  const [in_Title, SetTitle] = useState("");
  const [in_HON, SetHON] = useState("");
  const [in_PNP, SetPNP] = useState("");
  const [in_CurrentPosition, SetCurrentPosition] = useState("");
  const [in_FirstName, SetFirstName] = useState("");
  const [in_MidName, SetMidName] = useState("");
  const [in_LastName, SetLastName] = useState("");
  const [in_ChiName, SetChiName] = useState("");
  const [in_Gender, SetGender] = useState("");
  const [in_DOB, SetDOB] = useState("");
  const [in_HKID, SetHKID] = useState("");
  const [in_Marital, SetMarital] = useState("");
  const [in_MailingAddress, SetMailingAddress] = useState("");
  const [in_MailingProblem, SetMailingProblem] = useState("");
  const [in_HomeAdressLine1, SetHomeAdressLine1] = useState("");
  const [in_HomeAdressLine2, SetHomeAdressLine2] = useState("");
  const [in_HomeAdressLine3, SetHomeAdressLine3] = useState("");
  const [in_HomeAdressLine4, SetHomeAdressLine4] = useState("");
  const [in_HomeDistrict, SetHomeDistrict] = useState("");
  const [in_OfficeAdressLine1, SetOfficeAdressLine1] = useState("");
  const [in_OfficeAdressLine2, SetOfficeAdressLine2] = useState("");
  const [in_OfficeAdressLine3, SetOfficeAdressLine3] = useState("");
  const [in_OfficeAdressLine4, SetOfficeAdressLine4] = useState("");
  const [in_Mobile, SetMobile] = useState("");
  const [in_HomeTel, SetHomeTel] = useState("");
  const [in_OfficeTel, SetOfficeTel] = useState("");
  const [in_FaxHome, SetFaxHome] = useState("");
  const [in_FaxOffice, SetFaxOffice] = useState("");
  const [in_Email1, SetEmail1] = useState("");
  const [in_Email2, SetEmail2] = useState("");
  const [in_ComissionTDC, SetComissionTDC] = useState("");
  const [in_ComissionNBN, SetComissionNBN] = useState("");
  const [in_ComissionMainland, SetComissionMainland] = useState("");
  const [in_ComissionIA, SetComissionIA] = useState("");
  const [in_ComissionNCCC, SetComissionNCCC] = useState("");
  const [in_ComissionCorpComm, SetComissionCorpComm] = useState("");
  const [in_HighestEducation, SetHighestEducation] = useState("");
  const [in_CompanyName, SetCompanyName] = useState("");
  const [in_CompanyTitle, SetCompanyTitle] = useState("");
  const [in_Industry, SetIndustry] = useState("");
  const [in_HighestTrainerStatus, SetHighestTrainerStatus] = useState("");
  const [in_OtherSocialInvolvement1, SetOtherSocialInvolvement1] = useState("");
  const [in_OtherSocialInvolvement2, SetOtherSocialInvolvement2] = useState("");
  const [in_OtherSocialInvolvement3, SetOtherSocialInvolvement3] = useState("");
  const [in_PrintOnJCIHKDirectory, SetPrintOnJCIHKDirectory] = useState("");
  const [in_CompanyWebSite, SetCompanyWebSite] = useState("");
  const [in_HighestPositionInNOM, SetHighestPositionInNOM] = useState("");
  const [in_HighestPositionInLOM, SetHighestPositionInLOM] = useState("");
  const [
    in_HighestProfressionalQualification,
    SetHighestProfressionalQualification,
  ] = useState("");
  const [in_MailOptOut, SetMailOptOut] = useState("");
  const [in_EmailOptOut, SetEmailOptOut] = useState("");
  const [in_Photo, SetPhoto] = useState("");
  const { fetchTodos } = React.useContext(TodosContext);

  const createMember = async () => {
    var pic_base64 = null
    if (in_Photo) {
      pic_base64 = await toBase64(in_Photo);
      console.log(pic_base64);
    }
    var obj = {
      id: "",
      NOM: in_NOM,
      "NOM Code": in_NOMCode,
      "NOM ID": in_NOMID,
      "Member ID": in_MemberID,
      "NOM Member Type": in_NOMMemberType,
      "LOM Member Type": in_LOMMemberType,
      Senator: in_Senator,
      "Senator ID": in_SenatorID,
      "Date PM": in_DatePM,
      "Date Induct": in_DateInduct,
      Title: in_Title,
      HON: in_HON,
      PNP: in_PNP,
      "Current Position": in_CurrentPosition,
      "First Name": in_FirstName,
      "Mid Name": in_MidName,
      "Last Name": in_LastName,
      "Chi Name": in_ChiName,
      Gender: in_Gender,
      DOB: in_DOB,
      HKID: in_HKID,
      Marital: in_Marital,
      "Mailing Address": in_MailingAddress,
      "Mailing Problem": in_MailingProblem,
      "Home Address Line1": in_HomeAdressLine1,
      "Home Address Line2": in_HomeAdressLine2,
      "Home Address Line3": in_HomeAdressLine3,
      "Home Address Line4": in_HomeAdressLine4,
      "Home District": in_HomeDistrict,
      "Office Address Line1": in_OfficeAdressLine1,
      "Office Address Line2": in_OfficeAdressLine2,
      "Office Address Line3": in_OfficeAdressLine3,
      "Office Address Line4": in_OfficeAdressLine4,
      Mobile: in_Mobile,
      "Home Tel": in_HomeTel,
      "Office Tel": in_OfficeTel,
      "Fax Home": in_FaxHome,
      "Fax Office": in_FaxOffice,
      "Email 1": in_Email1,
      "Email 2": in_Email2,
      Comission_TDC: in_ComissionTDC,
      Comission_NBN: in_ComissionNBN,
      Comission_Mainland: in_ComissionMainland,
      Comission_IA: in_ComissionIA,
      Comission_NCCC: in_ComissionNCCC,
      Comission_CorpComm: in_ComissionCorpComm,
      "Highest Education": in_HighestEducation,
      "Company Name": in_CompanyName,
      "Company Title": in_CompanyTitle,
      Industry: in_Industry,
      "Highest Trainer Status": in_HighestTrainerStatus,
      "Other Social Involvement 1": in_OtherSocialInvolvement1,
      "Other Social Involvement 2": in_OtherSocialInvolvement2,
      "Other Social Involvement 3": in_OtherSocialInvolvement3,
      "Print on JCIHK Directory": in_PrintOnJCIHKDirectory,
      "Company Web Site": in_CompanyWebSite,
      "Highest Position in NOM": in_HighestPositionInNOM,
      "Highest Position in LOM": in_HighestPositionInLOM,
      "Highest Profressional Qualification":
        in_HighestProfressionalQualification,
      "Mail Opt-out": in_MailOptOut,
      "Email Opt-out": in_EmailOptOut,
      Photo: in_MemberID + ".png",
    };
    console.log(obj);
    await fetch(`http://localhost:8000/member`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (in_Photo) {
      await fetch(`http://localhost:8000/photo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: pic_base64,
          file_name: in_MemberID,
        }),
      });
    }
    onClose();
    await fetchTodos();
    window.location.reload(false);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <>
      <Button colorScheme="blue" h="40px" size="sm" onClick={onOpen}>
        Create Member
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Member</ModalHeader>
          <ModalCloseButton />
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
            <Box h="40px" style={{ margin: "2x" }}>
              <InputGroup size="md">
                <InputLeftAddon children="Picture" />
                <Input
                  type="file"
                  id="memberPicture"
                  name="filename"
                  accept=".png"
                  onChange={(e) => SetPhoto(e.target.files[0])}
                />
              </InputGroup>
            </Box>
            <Spacer />
          </ModalBody>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Personal Infomation Section 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%">
                    <Box h="100px" style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Title" />
                        <Select
                          value={in_Title}
                          onChange={(e) => SetTitle(e.target.value)}
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Mr">Mr</option>
                          <option value="Ms">Ms</option>
                        </Select>
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Mid Name" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Mid Name"
                          value={in_MidName}
                          onChange={(e) => SetMidName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Chinese Name" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Chinese Name"
                          value={in_ChiName}
                          onChange={(e) => SetChiName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Birthday" />
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          value={in_DOB}
                          min="1970-01-01"
                          onChange={(e) => SetDOB(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Marital" />
                        <Select
                          value={in_Marital}
                          onChange={(e) => SetMarital(e.target.value)}
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Select>
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home Addr. L1" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home Addr. L1"
                          value={in_HomeAdressLine1}
                          onChange={(e) => SetHomeAdressLine1(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home Addr. L3" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home Addr. L3"
                          value={in_HomeAdressLine3}
                          onChange={(e) => SetHomeAdressLine3(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 1 */}
                  </GridItem>
                  <GridItem w="100%">
                    <Box h={"40px"} style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="First Name" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="First Name"
                          value={in_FirstName}
                          onChange={(e) => SetFirstName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Last Name" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Last Name"
                          value={in_LastName}
                          onChange={(e) => SetLastName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Gender" />
                        <Select
                          value={in_Gender}
                          onChange={(e) => SetGender(e.target.value)}
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Male">Mr</option>
                          <option value="Female">Ms</option>
                        </Select>
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="HKID" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="HKID"
                          value={in_HKID}
                          onChange={(e) => SetHKID(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Mail Addr." />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Mailing Address"
                          value={in_MailingAddress}
                          onChange={(e) => SetMailingAddress(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home Addr. L2" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home Addr. L2"
                          value={in_HomeAdressLine2}
                          onChange={(e) => SetHomeAdressLine2(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home Addr. L4" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home Addr. L4"
                          value={in_HomeAdressLine4}
                          onChange={(e) => SetHomeAdressLine4(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 2 */}
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Personal Infomation Section 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%">
                    <Box h="100px" style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home District" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home District"
                          value={in_HomeDistrict}
                          onChange={(e) => SetHomeDistrict(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Office Addr. L1" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Office Addr. L1"
                          value={in_OfficeAdressLine1}
                          onChange={(e) => SetOfficeAdressLine1(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Office Addr. L3" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Office Addr. L3"
                          value={in_OfficeAdressLine3}
                          onChange={(e) => SetOfficeAdressLine3(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Fax Home" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Fax Home"
                          value={in_FaxHome}
                          onChange={(e) => SetFaxHome(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Email 1" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Email 1"
                          value={in_Email1}
                          onChange={(e) => SetEmail1(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Home Tel" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Home Tel"
                          value={in_HomeTel}
                          onChange={(e) => SetHomeTel(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Company Title" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Company Title"
                          value={in_CompanyTitle}
                          onChange={(e) => SetCompanyTitle(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 1 */}
                  </GridItem>
                  <GridItem w="100%">
                    <Box h={"40px"} style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Mobile" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Mobile"
                          value={in_Mobile}
                          onChange={(e) => SetMobile(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Office Addr. L2" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Office Addr. L2"
                          value={in_OfficeAdressLine2}
                          onChange={(e) => SetOfficeAdressLine2(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Office Addr. L4" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Office Addr. L4"
                          value={in_OfficeAdressLine4}
                          onChange={(e) => SetOfficeAdressLine4(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Fax Office" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Fax Office"
                          value={in_FaxOffice}
                          onChange={(e) => SetFaxOffice(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Email 2" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Email 2"
                          value={in_Email2}
                          onChange={(e) => SetEmail2(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Company Name" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Company Name"
                          value={in_CompanyName}
                          onChange={(e) => SetCompanyName(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Industry" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Industry"
                          value={in_Industry}
                          onChange={(e) => SetIndustry(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 2 */}
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Personal Infomation Section 3
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%">
                    <Box h="100px" style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Office Tel" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Office Tel"
                          value={in_OfficeTel}
                          onChange={(e) => SetOfficeTel(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Company Web Site" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Company Web Site"
                          value={in_CompanyWebSite}
                          onChange={(e) => SetCompanyWebSite(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Mail Problem" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Mail Problem"
                          value={in_MailingProblem}
                          onChange={(e) => SetMailingProblem(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 1 */}
                  </GridItem>
                  <GridItem w="100%">
                    <Box h={"40px"} style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Highest Prof. Qualif." />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Highest Profressional Qualification"
                          value={in_HighestProfressionalQualification}
                          onChange={(e) =>
                            SetHighestProfressionalQualification(e.target.value)
                          }
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Highest Education" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Highest Education"
                          value={in_HighestEducation}
                          onChange={(e) => SetHighestEducation(e.target.value)}
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 2 */}
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    JC LOM Info. Section 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%">
                    <Box h="100px" style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Member ID" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Member ID"
                          value={in_MemberID}
                          onChange={(e) => SetMemberID(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Senator ID" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Senator ID"
                          value={in_SenatorID}
                          onChange={(e) => SetSenatorID(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Date Induct" />
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          value={in_DateInduct}
                          min="1970-01-01"
                          onChange={(e) => SetDateInduct(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission TDC" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission TDC"
                          value={in_ComissionTDC}
                          onChange={(e) => SetComissionTDC(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission Mainland" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission Mainland"
                          value={in_ComissionMainland}
                          onChange={(e) => SetComissionMainland(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission NCCC" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission NCCC"
                          value={in_ComissionNCCC}
                          onChange={(e) => SetComissionNCCC(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Highest Trainer Status" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Highest Trainer Status"
                          value={in_HighestTrainerStatus}
                          onChange={(e) =>
                            SetHighestTrainerStatus(e.target.value)
                          }
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 1 */}
                  </GridItem>
                  <GridItem w="100%">
                    <Box h={"40px"} style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="LOM Mem. Type" />
                        <Select
                          value={in_LOMMemberType}
                          onChange={(e) => SetLOMMemberType(e.target.value)}
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Full">Full</option>
                          <option value="Prospective">Prospective</option>
                          <option value="Senior">Senior</option>
                          <option value="Other">Other</option>
                        </Select>
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Date PM" />
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          value={in_DatePM}
                          min="1970-01-01"
                          onChange={(e) => SetDatePM(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Current Position" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Current Position"
                          value={in_CurrentPosition}
                          onChange={(e) => SetCurrentPosition(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission NBN" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission NBN"
                          value={in_ComissionNBN}
                          onChange={(e) => SetComissionNBN(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission IA" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission IA"
                          value={in_ComissionIA}
                          onChange={(e) => SetComissionIA(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Comission CropComm" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Comission CropComm"
                          value={in_ComissionCorpComm}
                          onChange={(e) => SetComissionCorpComm(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Highest Position" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Highest Position"
                          value={in_HighestPositionInLOM}
                          onChange={(e) =>
                            SetHighestPositionInLOM(e.target.value)
                          }
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 2 */}
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    JC LOM Info. Section 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Box h="100px" style={{ margin: "2px" }}>
                  <InputGroup size="md" style={{ marginBottom: "5px" }}>
                    <InputLeftAddon children="Other Social Involvement 1" />
                    <Input
                      type="text"
                      placeholder="Enter"
                      aria-label="Other Social Involvement 1"
                      value={in_OtherSocialInvolvement1}
                      onChange={(e) =>
                        SetOtherSocialInvolvement1(e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup size="md" style={{ marginBottom: "5px" }}>
                    <InputLeftAddon children="Other Social Involvement 2" />
                    <Input
                      type="text"
                      placeholder="Enter"
                      aria-label="Other Social Involvement 2"
                      value={in_OtherSocialInvolvement2}
                      onChange={(e) =>
                        SetOtherSocialInvolvement2(e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup size="md" style={{ marginBottom: "5px" }}>
                    <InputLeftAddon children="Other Social Involvement 3" />
                    <Input
                      type="text"
                      placeholder="Enter"
                      aria-label="Other Social Involvement 3"
                      value={in_OtherSocialInvolvement3}
                      onChange={(e) =>
                        SetOtherSocialInvolvement3(e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup size="md" style={{ marginBottom: "5px" }}>
                    <InputLeftAddon children="Mail Opt-out" />
                    <Input
                      type="text"
                      placeholder="Enter"
                      aria-label="Mail Opt-out"
                      value={in_MailOptOut}
                      onChange={(e) => SetMailOptOut(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup size="md" style={{ marginBottom: "5px" }}>
                    <InputLeftAddon children="Email Opt-out" />
                    <Input
                      type="text"
                      placeholder="Enter"
                      aria-label="Email Opt-out"
                      value={in_EmailOptOut}
                      onChange={(e) => SetEmailOptOut(e.target.value)}
                    />
                  </InputGroup>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    JC NOM Info. Section 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} h={"330px"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%">
                    <Box h="100px" style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="NOM" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="NOM"
                          value={in_NOM}
                          onChange={(e) => SetNOM(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="NOM ID" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="NOM ID"
                          value={in_NOMID}
                          onChange={(e) => SetNOMID(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Senator" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Senator"
                          value={in_Senator}
                          onChange={(e) => SetSenator(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="HON" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="HOM"
                          value={in_HON}
                          onChange={(e) => SetHON(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Print on JCIHK Directory" />
                        <Select
                          value={in_PrintOnJCIHKDirectory}
                          onChange={(e) =>
                            SetPrintOnJCIHKDirectory(e.target.value)
                          }
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Select>
                      </InputGroup>
                    </Box>
                    {/* Section 1 */}
                  </GridItem>
                  <GridItem w="100%">
                    <Box h={"40px"} style={{ margin: "2px" }}>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="NOM Code" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="NOM Code"
                          value={in_NOMCode}
                          onChange={(e) => SetNOMCode(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="NOM Mem. Type" />
                        <Select
                          value={in_NOMMemberType}
                          onChange={(e) => SetNOMMemberType(e.target.value)}
                          placeholder="Select"
                          size="md"
                        >
                          <option value="Full">Full</option>
                          <option value="Prospective">Prospective</option>
                          <option value="Senior">Senior</option>
                          <option value="Other">Other</option>
                        </Select>
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="PNP" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="PNP"
                          value={in_PNP}
                          onChange={(e) => SetPNP(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" style={{ marginBottom: "5px" }}>
                        <InputLeftAddon children="Highest Position" />
                        <Input
                          type="text"
                          placeholder="Enter"
                          aria-label="Highest Position"
                          value={in_HighestPositionInNOM}
                          onChange={(e) =>
                            SetHighestPositionInNOM(e.target.value)
                          }
                        />
                      </InputGroup>
                    </Box>
                    {/* Section 2 */}
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <ModalFooter>
            <Button h="1.5rem" size="sm" onClick={createMember}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/member");
    const todos = await response.json();
    setTodos(todos.data);
  };

  useEffect(() => {
    var sessionObj = JSON.parse(localStorage.getItem("session"));
    if (!sessionObj) {
      window.location.href = "/";
    } else {
      if (new Date().getTime() > sessionObj.expire) {
        localStorage.removeItem("session");
        window.location.href = "/";
      } else {
        fetchTodos();
      }
    }
  }, []);

  return (
    <>
      <TodosContext.Provider value={{ todos, fetchTodos }}>
        <MemberTable data={todos} />
      </TodosContext.Provider>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        style={{ margin: "10px" }}
      >
        <Box p="2">
          <Heading size="md">Harbour Member</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <CreateMember />
        </ButtonGroup>
      </Flex>
    </>
  );
}

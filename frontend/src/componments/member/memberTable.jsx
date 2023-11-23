import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { ChakraProvider, Spacer } from "@chakra-ui/react";
import {
  Select,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  InputLeftAddon,
  useDisclosure,
  Tag,
  Table,
  Thead,
  Tbody,
  Box,
  Divider,
  AbsoluteCenter,
  Grid,
  GridItem,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});

const MemberTable = ({ data }) => {
  const columns = useMemo(
    () => [
      // { Header: "ID", accessor: "id", sortType: 'basic' },
      { Header: "NOM Code", accessor: "NOM Code", sortType: "basic" },
      { Header: "Member ID", accessor: "Member ID" },
      { Header: "NOM Member Type", accessor: "NOM Member Type" },
      { Header: "LOM Member Type", accessor: "LOM Member Type" },
      { Header: "First Name", accessor: "First Name" },
      { Header: "Last Name", accessor: "Last Name" },
      { Header: "Gender", accessor: "Gender" },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    page,
  } = useTable(
    { columns, data, initialState: { pageSize: 10 }, defaultColumn },
    useFilters,
    useSortBy,
    usePagination
  );

  function TextFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Filter ${count} record`}
      />
    );
  }

  function Pagination({
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    pageIndex,
  }) {
    return (
      <div>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          &lt;&lt;&lt;Previous Page
        </Button>{" "}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page&gt;&gt;&gt;
        </Button>
        <div>
          Page:{" "}
          <em>
            {pageIndex + 1} / {pageOptions.length}
          </em>{" "}
        </div>
      </div>
    );
  }

  function UpdateMember({
    NOM,
    MemberID,
    FirstName,
    LastName,
    NOMCode,
    NOMID,
    NOMMemberType,
    LOMMemberType,
    Senator,
    SenatorID,
    DatePM,
    DateInduct,
    Title,
    HON,
    PNP,
    CurrentPosition,
    MidName,
    ChiName,
    Gender,
    DOB,
    HKID,
    Marital,
    MailingAddress,
    MailingProblem,
    HomeAdressLine1,
    HomeAdressLine2,
    HomeAdressLine3,
    HomeAdressLine4,
    HomeDistrict,
    OfficeAddressLine1,
    OfficeAddressLine2,
    OfficeAddressLine3,
    OfficeAddressLine4,
    Mobile,
    HomeTel,
    OfficeTel,
    FaxHome,
    FaxOffice,
    Email1,
    Email2,
    Comission_TDC,
    Comission_NBN,
    Comission_Mainland,
    Comission_IA,
    Comission_NCCC,
    Comission_CorpComm,
    HighestEducation,
    CompanyName,
    CompanyTitle,
    Industry,
    HighestTrainerStatus,
    OtherSocialInvolvement1,
    OtherSocialInvolvement2,
    OtherSocialInvolvement3,
    PrintonJCIHKDirectory,
    CompanyWebSite,
    HighestPositioninNOM,
    HighestPositioninLOM,
    HighestProfressionalQualification,
    MailOptout,
    EmailOptout,
    Photo
  }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [in_NOM, SetNOM] = useState(NOM);
    const [in_NOMCode, SetNOMCode] = useState(NOMCode);
    const [in_NOMID, SetNOMID] = useState(NOMID);
    const [in_MemberID, SetMemberID] = useState(MemberID);
    const [in_NOMMemberType, SetNOMMemberType] = useState(NOMMemberType);
    const [in_LOMMemberType, SetLOMMemberType] = useState(LOMMemberType);
    const [in_Senator, SetSenator] = useState(Senator);
    const [in_SenatorID, SetSenatorID] = useState(SenatorID);
    const [in_DatePM, SetDatePM] = useState(DatePM);
    const [in_DateInduct, SetDateInduct] = useState(DateInduct);
    const [in_Title, SetTitle] = useState(Title);
    const [in_HON, SetHON] = useState(HON);
    const [in_PNP, SetPNP] = useState(PNP);
    const [in_CurrentPosition, SetCurrentPosition] = useState(CurrentPosition);
    const [in_FirstName, SetFirstName] = useState(FirstName);
    const [in_MidName, SetMidName] = useState(MidName);
    const [in_LastName, SetLastName] = useState(LastName);
    const [in_ChiName, SetChiName] = useState(ChiName);
    const [in_Gender, SetGender] = useState(Gender);
    const [in_DOB, SetDOB] = useState(DOB);
    const [in_HKID, SetHKID] = useState(HKID);
    const [in_Marital, SetMarital] = useState(Marital);
    const [in_MailingAddress, SetMailingAddress] = useState(MailingAddress);
    const [in_MailingProblem, SetMailingProblem] = useState(MailingProblem);
    const [in_HomeAdressLine1, SetHomeAdressLine1] = useState(HomeAdressLine1);
    const [in_HomeAdressLine2, SetHomeAdressLine2] = useState(HomeAdressLine2);
    const [in_HomeAdressLine3, SetHomeAdressLine3] = useState(HomeAdressLine3);
    const [in_HomeAdressLine4, SetHomeAdressLine4] = useState(HomeAdressLine4);
    const [in_HomeDistrict, SetHomeDistrict] = useState(HomeDistrict);
    const [in_OfficeAdressLine1, SetOfficeAdressLine1] =
      useState(OfficeAddressLine1);
    const [in_OfficeAdressLine2, SetOfficeAdressLine2] =
      useState(OfficeAddressLine2);
    const [in_OfficeAdressLine3, SetOfficeAdressLine3] =
      useState(OfficeAddressLine3);
    const [in_OfficeAdressLine4, SetOfficeAdressLine4] =
      useState(OfficeAddressLine4);
    const [in_Mobile, SetMobile] = useState(Mobile);
    const [in_HomeTel, SetHomeTel] = useState(HomeTel);
    const [in_OfficeTel, SetOfficeTel] = useState(OfficeTel);
    const [in_FaxHome, SetFaxHome] = useState(FaxHome);
    const [in_FaxOffice, SetFaxOffice] = useState(FaxOffice);
    const [in_Email1, SetEmail1] = useState(Email1);
    const [in_Email2, SetEmail2] = useState(Email2);
    const [in_ComissionTDC, SetComissionTDC] = useState(Comission_TDC);
    const [in_ComissionNBN, SetComissionNBN] = useState(Comission_NBN);
    const [in_ComissionMainland, SetComissionMainland] = useState(Comission_Mainland);
    const [in_ComissionIA, SetComissionIA] = useState(Comission_IA);
    const [in_ComissionNCCC, SetComissionNCCC] = useState(Comission_NCCC);
    const [in_ComissionCorpComm, SetComissionCorpComm] = useState(Comission_CorpComm);
    const [in_HighestEducation, SetHighestEducation] = useState(HighestEducation);
    const [in_CompanyName, SetCompanyName] = useState(CompanyName);
    const [in_CompanyTitle, SetCompanyTitle] = useState(CompanyTitle);
    const [in_Industry, SetIndustry] = useState(Industry);
    const [in_HighestTrainerStatus, SetHighestTrainerStatus] = useState(HighestTrainerStatus);
    const [in_OtherSocialInvolvement1, SetOtherSocialInvolvement1] =
      useState(OtherSocialInvolvement1);
    const [in_OtherSocialInvolvement2, SetOtherSocialInvolvement2] =
      useState(OtherSocialInvolvement2);
    const [in_OtherSocialInvolvement3, SetOtherSocialInvolvement3] =
      useState(OtherSocialInvolvement3);
    const [in_PrintOnJCIHKDirectory, SetPrintOnJCIHKDirectory] = useState(PrintonJCIHKDirectory);
    const [in_CompanyWebSite, SetCompanyWebSite] = useState(CompanyWebSite);
    const [in_HighestPositionInNOM, SetHighestPositionInNOM] = useState(HighestPositioninNOM);
    const [in_HighestPositionInLOM, SetHighestPositionInLOM] = useState(HighestPositioninLOM);
    const [
      in_HighestProfressionalQualification,
      SetHighestProfressionalQualification,
    ] = useState(HighestProfressionalQualification);
    const [in_MailOptOut, SetMailOptOut] = useState(MailOptout);
    const [in_EmailOptOut, SetEmailOptOut] = useState(EmailOptout);
    const [in_Photo, SetPhoto] = useState(Photo);
    const { fetchTodos } = React.useContext(TodosContext);

    const UpdateMember = async () => {
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
      // var obj = {
      //   id: in_item_id,
      //   hjc_id: in_hjc_id,
      //   first_name: in_first_name,
      //   last_name: in_gender,
      //   gender: in_gender,
      //   email: in_email,
      //   phone: in_phone,
      // };
      // console.log(obj);
      // await fetch(`http://localhost:8000/member/`, {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(obj),
      // });
      // onClose();
      // await fetchTodos();
      // window.location.reload(false);
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
        <Button colorScheme="gray" h="1.5rem" size="sm" onClick={onOpen}>
          Update Member
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Update Member {in_FirstName + " " + in_LastName}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{ marginBottom: "120px" }}>
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
                <Flex
                  minWidth="max-content"
                  alignItems="center"
                  gap="2"
                  style={{ marginBottom: "50px" }}
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={"./pic/" + in_MemberID + ".png"}
                    alt={in_FirstName + " " + in_LastName}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    fallbackSrc="./default.jpg"
                  />
                  <Spacer />
                  <InputGroup size="sm">
                    <InputLeftAddon children="Picture" />
                    <Input
                      type="file"
                      id="memberPicture"
                      name="filename"
                      accept=".png"
                      onChange={(e) => SetPhoto(e.target.files[0])}
                    />
                  </InputGroup>
                </Flex>
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
                            onChange={(e) =>
                              SetOfficeAdressLine1(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Office Addr. L3" />
                          <Input
                            type="text"
                            placeholder="Enter"
                            aria-label="Office Addr. L3"
                            value={in_OfficeAdressLine3}
                            onChange={(e) =>
                              SetOfficeAdressLine3(e.target.value)
                            }
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
                            onChange={(e) =>
                              SetOfficeAdressLine2(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Office Addr. L4" />
                          <Input
                            type="text"
                            placeholder="Enter"
                            aria-label="Office Addr. L4"
                            value={in_OfficeAdressLine4}
                            onChange={(e) =>
                              SetOfficeAdressLine4(e.target.value)
                            }
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
                              SetHighestProfressionalQualification(
                                e.target.value
                              )
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
                            onChange={(e) =>
                              SetHighestEducation(e.target.value)
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
                            onChange={(e) =>
                              SetComissionMainland(e.target.value)
                            }
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
                            onChange={(e) =>
                              SetComissionCorpComm(e.target.value)
                            }
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
              <Button h="1.5rem" size="sm" onClick={UpdateMember}>
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  function ViewMember(memberObj) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [in_memberObj, setMemberObj] = useState(memberObj["memberObj"]);

    return (
      <>
        <Button colorScheme="gray" h="1.5rem" size="sm" onClick={onOpen}>
          View
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>View Member</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box maxW="sm" padding="5">
                <Flex
                  minWidth="max-content"
                  alignItems="center"
                  gap="2"
                  style={{ margin: "10px" }}
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={"./pic/" + in_memberObj["Member ID"] + ".png"}
                    alt={in_memberObj["First Name"] + in_memberObj["Last Name"]}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    fallbackSrc="./default.jpg"
                  />
                  <Spacer />
                  <p id="nom">{in_memberObj["First Name"]}</p>
                  <Spacer />
                  <label htmlFor="nom">_</label>
                  <Spacer />
                  <p id="nom">{in_memberObj["Last Name"]}</p>
                </Flex>
              </Box>
              <Box position="relative" padding="5">
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          Personal Information
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={10}>
                      <InputGroup size="md">
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                          style={{ margin: "10px" }}
                        >
                          <label for="nom">Title: </label>
                          <Spacer />
                          <p id="nom">{"in_memberObj['NOM']"}</p>
                          <Spacer />
                          <label for="nom">NOM: </label>
                          <Spacer />
                          <p id="nom">{in_memberObj["NOM"]}</p>
                        </Flex>
                      </InputGroup>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  function select_member(row) {
    var result = {};
    for (var i = 0; i < data.length; i++) {
      if (data[i]["Member ID"] === row["Member ID"]) {
        result = data[i];
      }
    }
    console.log(result);
    return result;
  }

  return (
    <div className="table-container">
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td>
                  <ViewMember memberObj={select_member(row.values)} />
                </td>
                <td>
                  <UpdateMember
                    NOM={select_member(row.values)["NOM"]}
                    MemberID={select_member(row.values)["Member ID"]}
                    FirstName={select_member(row.values)["First Name"]}
                    LastName={select_member(row.values)["Last Name"]}
                    NOMCode={select_member(row.values)["NOM Code"]}
                    NOMID={select_member(row.values)["NOM ID"]}
                    NOMMemberType={select_member(row.values)["NOM Member Type"]}
                    LOMMemberType={select_member(row.values)["LOM Member Type"]}
                    Senator={select_member(row.values)["Senator"]}
                    SenatorID={select_member(row.values)["Senator ID"]}
                    DatePM={select_member(row.values)["Date PM"]}
                    DateInduct={select_member(row.values)["Date Induct"]}
                    Title={select_member(row.values)["Title"]}
                    HON={select_member(row.values)["HON"]}
                    PNP={select_member(row.values)["PNP"]}
                    CurrentPosition={
                      select_member(row.values)["Current Position"]
                    }
                    MidName={select_member(row.values)["Mid Name"]}
                    ChiName={select_member(row.values)["Chi Name"]}
                    Gender={select_member(row.values)["Gender"]}
                    DOB={select_member(row.values)["DOB"]}
                    HKID={select_member(row.values)["HKID"]}
                    Marital={select_member(row.values)["Marital"]}
                    MailingAddress={
                      select_member(row.values)["Mailing Address"]
                    }
                    MailingProblem={
                      select_member(row.values)["Mailing Problem"]
                    }
                    HomeAdressLine1={
                      select_member(row.values)["Home Adress Line1"]
                    }
                    HomeAdressLine2={
                      select_member(row.values)["Home Adress Line2"]
                    }
                    HomeAdressLine3={
                      select_member(row.values)["Home Adress Line3"]
                    }
                    HomeAdressLine4={
                      select_member(row.values)["Home Adress Line4"]
                    }
                    HomeDistrict={select_member(row.values)["Home District"]}
                    OfficeAddressLine1={
                      select_member(row.values)["Office Address Line1"]
                    }
                    OfficeAddressLine2={
                      select_member(row.values)["Office Address Line2"]
                    }
                    OfficeAddressLine3={
                      select_member(row.values)["Office Address Line3"]
                    }
                    OfficeAddressLine4={
                      select_member(row.values)["Office Address Line4"]
                    }
                    Mobile={select_member(row.values)["Mobile"]}
                    HomeTel={select_member(row.values)["Home Tel"]}
                    OfficeTel={select_member(row.values)["Office Tel"]}
                    FaxHome={select_member(row.values)["Fax Home"]}
                    FaxOffice={select_member(row.values)["Fax Office"]}
                    Email1={select_member(row.values)["Email 1"]}
                    Email2={select_member(row.values)["Email 2"]}
                    Comission_TDC={select_member(row.values)["Comission_TDC"]}
                    Comission_NBN={select_member(row.values)["Comission_NBN"]}
                    Comission_Mainland={
                      select_member(row.values)["Comission_Mainland"]
                    }
                    Comission_IA={select_member(row.values)["Comission_IA"]}
                    Comission_NCCC={select_member(row.values)["Comission_NCCC"]}
                    Comission_CorpComm={
                      select_member(row.values)["Comission_CorpComm"]
                    }
                    HighestEducation={
                      select_member(row.values)["Highest Education"]
                    }
                    CompanyName={select_member(row.values)["Company Name"]}
                    CompanyTitle={select_member(row.values)["Company Title"]}
                    Industry={select_member(row.values)["Industry"]}
                    HighestTrainerStatus={
                      select_member(row.values)["Highest Trainer Status"]
                    }
                    OtherSocialInvolvement1={
                      select_member(row.values)["Other Social Involvement 1"]
                    }
                    OtherSocialInvolvement2={
                      select_member(row.values)["Other Social Involvement 2"]
                    }
                    OtherSocialInvolvement3={
                      select_member(row.values)["Other Social Involvement 3"]
                    }
                    PrintonJCIHKDirectory={
                      select_member(row.values)["Print on JCIHK Directory"]
                    }
                    CompanyWebSite={
                      select_member(row.values)["Company Web Site"]
                    }
                    HighestPositioninNOM={
                      select_member(row.values)["Highest Position in NOM"]
                    }
                    HighestPositioninLOM={
                      select_member(row.values)["Highest Position in LOM"]
                    }
                    HighestProfressionalQualification={
                      select_member(row.values)[
                        "Highest Profressional Qualification"
                      ]
                    }
                    MailOptout={select_member(row.values)["Mail Opt-out"]}
                    EmailOptout={select_member(row.values)["Email Opt-out"]}
                    Photo={select_member(row.values)["Photo"]}
                  />
                </td>
              </tr>
            );
          })}
        </Tbody>
      </Table>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default MemberTable;

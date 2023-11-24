import React, { useEffect, useMemo, useState } from "react";
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
    ID,
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
    HomeAddressLine1,
    HomeAddressLine2,
    HomeAddressLine3,
    HomeAddressLine4,
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
    Photo,
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
    const [in_HomeAddressLine1, SetHomeAddressLine1] =
      useState(HomeAddressLine1);
    const [in_HomeAddressLine2, SetHomeAddressLine2] =
      useState(HomeAddressLine2);
    const [in_HomeAddressLine3, SetHomeAddressLine3] =
      useState(HomeAddressLine3);
    const [in_HomeAddressLine4, SetHomeAddressLine4] =
      useState(HomeAddressLine4);
    const [in_HomeDistrict, SetHomeDistrict] = useState(HomeDistrict);
    const [in_OfficeAdressLine1, SetOfficeAddressLine11] =
      useState(OfficeAddressLine1);
    const [in_OfficeAdressLine2, SetOfficeAddressLine12] =
      useState(OfficeAddressLine2);
    const [in_OfficeAdressLine3, SetOfficeAddressLine13] =
      useState(OfficeAddressLine3);
    const [in_OfficeAdressLine4, SetOfficeAddressLine14] =
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
    const [in_ComissionMainland, SetComissionMainland] =
      useState(Comission_Mainland);
    const [in_ComissionIA, SetComissionIA] = useState(Comission_IA);
    const [in_ComissionNCCC, SetComissionNCCC] = useState(Comission_NCCC);
    const [in_ComissionCorpComm, SetComissionCorpComm] =
      useState(Comission_CorpComm);
    const [in_HighestEducation, SetHighestEducation] =
      useState(HighestEducation);
    const [in_CompanyName, SetCompanyName] = useState(CompanyName);
    const [in_CompanyTitle, SetCompanyTitle] = useState(CompanyTitle);
    const [in_Industry, SetIndustry] = useState(Industry);
    const [in_HighestTrainerStatus, SetHighestTrainerStatus] =
      useState(HighestTrainerStatus);
    const [in_OtherSocialInvolvement1, SetOtherSocialInvolvement1] = useState(
      OtherSocialInvolvement1
    );
    const [in_OtherSocialInvolvement2, SetOtherSocialInvolvement2] = useState(
      OtherSocialInvolvement2
    );
    const [in_OtherSocialInvolvement3, SetOtherSocialInvolvement3] = useState(
      OtherSocialInvolvement3
    );
    const [in_PrintOnJCIHKDirectory, SetPrintOnJCIHKDirectory] = useState(
      PrintonJCIHKDirectory
    );
    const [in_CompanyWebSite, SetCompanyWebSite] = useState(CompanyWebSite);
    const [in_HighestPositionInNOM, SetHighestPositionInNOM] =
      useState(HighestPositioninNOM);
    const [in_HighestPositionInLOM, SetHighestPositionInLOM] =
      useState(HighestPositioninLOM);
    const [
      in_HighestProfressionalQualification,
      SetHighestProfressionalQualification,
    ] = useState(HighestProfressionalQualification);
    const [in_MailOptOut, SetMailOptOut] = useState(MailOptout);
    const [in_EmailOptOut, SetEmailOptOut] = useState(EmailOptout);
    const [in_Photo, SetPhoto] = useState(Photo);
    const [new_Photo, SetNewPhoto] = useState("");
    const { fetchTodos } = React.useContext(TodosContext);

    const UpdateMember = async () => {
      var pic_base64 = null;
      if (new_Photo) {
        pic_base64 = await toBase64(new_Photo);
      }
      var obj = {
        id: ID,
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
        "Home Address Line1": in_HomeAddressLine1,
        "Home Address Line2": in_HomeAddressLine2,
        "Home Address Line3": in_HomeAddressLine3,
        "Home Address Line4": in_HomeAddressLine4,
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
      console.log(Object.keys(obj).length);
      await fetch(`http://localhost:8000/member`, {
        method: "PUT",
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

    useEffect(() => {
      var sessionObj = JSON.parse(localStorage.getItem("session"));
      if (!sessionObj) {
        window.location.href = "/";
      } else {
        if (new Date().getTime() > sessionObj.expire) {
          localStorage.removeItem("session");
          window.location.href = "/";
        }
      }
    }, []);

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
          Update
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Update Member ({in_FirstName + " " + in_LastName})
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
                    src={"http://localhost:8000/pic?id=" + in_MemberID}
                    alt={in_FirstName + " " + in_LastName}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    fallbackSrc={"http://localhost:8000/pic?id=" + in_MemberID}
                  />
                  <Spacer />
                  <InputGroup size="sm">
                    <InputLeftAddon children="Picture" />
                    <Input
                      type="file"
                      id="memberPicture"
                      name="filename"
                      accept=".png"
                      onChange={(e) => SetNewPhoto(e.target.files[0])}
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
                    <Box as="span" flex="1" textAlign="cneter">
                      Personal Infomation # 1
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
                            min="1950-01-01"
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
                            value={in_HomeAddressLine1}
                            onChange={(e) =>
                              SetHomeAddressLine1(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Home Addr. L3" />
                          <Input
                            type="text"
                            placeholder="Enter"
                            aria-label="Home Addr. L3"
                            value={in_HomeAddressLine3}
                            onChange={(e) =>
                              SetHomeAddressLine3(e.target.value)
                            }
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
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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
                            value={in_HomeAddressLine2}
                            onChange={(e) =>
                              SetHomeAddressLine2(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Home Addr. L4" />
                          <Input
                            type="text"
                            placeholder="Enter"
                            aria-label="Home Addr. L4"
                            value={in_HomeAddressLine4}
                            onChange={(e) =>
                              SetHomeAddressLine4(e.target.value)
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
                    <Box as="span" flex="1" textAlign="cneter">
                      Personal Infomation # 2
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
                              SetOfficeAddressLine11(e.target.value)
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
                              SetOfficeAddressLine13(e.target.value)
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
                              SetOfficeAddressLine12(e.target.value)
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
                              SetOfficeAddressLine14(e.target.value)
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
                    <Box as="span" flex="1" textAlign="cneter">
                      Personal Infomation # 3
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
                    <Box as="span" flex="1" textAlign="cneter">
                      JC LOM Info. # 1
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
                          <Select
                            value={in_ComissionTDC}
                            onChange={(e) => SetComissionTDC(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Comission Mainland" />
                          <Select
                            value={in_ComissionMainland}
                            onChange={(e) =>
                              SetComissionMainland(e.target.value)
                            }
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Comission NCCC" />
                          <Select
                            value={in_ComissionNCCC}
                            onChange={(e) => SetComissionNCCC(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
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
                          <Select
                            value={in_ComissionNBN}
                            onChange={(e) => SetComissionNBN(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Comission IA" />
                          <Select
                            value={in_ComissionIA}
                            onChange={(e) => SetComissionIA(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
                        </InputGroup>
                        <InputGroup size="md" style={{ marginBottom: "5px" }}>
                          <InputLeftAddon children="Comission CorpComm" />
                          <Select
                            value={in_ComissionCorpComm}
                            onChange={(e) =>
                              SetComissionCorpComm(e.target.value)
                            }
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
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
                    <Box as="span" flex="1" textAlign="cneter">
                      JC LOM Info. # 2
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
                      <Select
                        value={in_MailOptOut}
                        onChange={(e) => SetMailOptOut(e.target.value)}
                        placeholder="Select"
                        size="md"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Select>
                    </InputGroup>
                    <InputGroup size="md" style={{ marginBottom: "5px" }}>
                      <InputLeftAddon children="Email Opt-out" />
                      <Select
                        value={in_EmailOptOut}
                        onChange={(e) => SetEmailOptOut(e.target.value)}
                        placeholder="Select"
                        size="md"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Select>
                    </InputGroup>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="cneter">
                      JC NOM Info. # 1
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
                          <Select
                            value={in_Senator}
                            onChange={(e) => SetSenator(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
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
                          <Select
                            value={in_PNP}
                            onChange={(e) => SetPNP(e.target.value)}
                            placeholder="Select"
                            size="md"
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Select>
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

  function ViewMember({memberObj, memberID}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [in_memberObj, setMemberObj] = useState(memberObj);
    const [in_pic, setPic] = useState("");

    useEffect(() => {
      var sessionObj = JSON.parse(localStorage.getItem("session"));
      if (!sessionObj) {
        window.location.href = "/";
      } else {
        if (new Date().getTime() > sessionObj.expire) {
          localStorage.removeItem("session");
          window.location.href = "/";
        }
      }
    }, []);

    return (
      <>
        <Button colorScheme="gray" h="1.5rem" size="sm" onClick={onOpen}>
          View
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              View Member (
              {in_memberObj["First Name"] + " " + in_memberObj["Last Name"]})
            </ModalHeader>
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
                    src={"http://localhost:8000/pic?id=" + in_memberObj["Member ID"]}
                    alt={in_memberObj["First Name"] + in_memberObj["Last Name"]}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                    fallbackSrc={"http://localhost:8000/pic?id=" + in_memberObj["Member ID"]}
                  />
                  <Spacer />
                  <h3 style={{ fontSize: "30px" }}>
                    {in_memberObj["First Name"]}
                  </h3>
                  <h3 style={{ fontSize: "30px" }}>
                    {in_memberObj["Last Name"]}
                  </h3>
                </Flex>
              </Box>
              <Box position="relative" padding="5">
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          Personal Infomation # 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"280px"}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Title: </label>
                            <p id="nom">{in_memberObj["Title"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Mid Name: </label>
                            <p id="nom">{in_memberObj["Mid Name"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Chinese Name: </label>
                            <p id="nom">{in_memberObj["Chinese Name"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Birthday: </label>
                            <p id="nom">{in_memberObj["DOB"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Marital: </label>
                            <p id="nom">{in_memberObj["Marital"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Home Addr. L1: </label>
                            <p id="nom">{in_memberObj["Home Address Line1"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Home Addr. L3: </label>
                            <p id="nom">{in_memberObj["Home Address Line3"]}</p>
                          </Flex>
                          {/* Session Left */}
                        </GridItem>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">First Name: </label>
                            <p id="nom">{in_memberObj["First Name"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Last Name: </label>
                            <p id="nom">{in_memberObj["Last Name"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Gender: </label>
                            <p id="nom">{in_memberObj["Gender"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">HKID: </label>
                            <p id="nom">{in_memberObj["HKID"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Mail Addr.: </label>
                            <p id="nom">{in_memberObj["Mailing Address"]}</p>
                          </Flex>
                          {/* Session Right */}
                        </GridItem>
                      </Grid>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Home Addr. L2: </label>
                        <p id="nom">{in_memberObj["Home Address Line2"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Home Addr. L4: </label>
                        <p id="nom">{in_memberObj["Home Address Line4"]}</p>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          Personal Infomation # 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"340px"}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Home District: </label>
                            <p id="nom">{in_memberObj["Home District"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Fax Home: </label>
                            <p id="nom">{in_memberObj["Fax Home"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Home Tel: </label>
                            <p id="nom">{in_memberObj["Home Tel"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Company Title: </label>
                            <p id="nom">{in_memberObj["Company Title"]}</p>
                          </Flex>
                          {/* Session Left */}
                        </GridItem>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Mobile: </label>
                            <p id="nom">{in_memberObj["Mobile"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Fax Office: </label>
                            <p id="nom">{in_memberObj["Fax Office"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Industry: </label>
                            <p id="nom">{in_memberObj["Industry"]}</p>
                          </Flex>
                          {/* Session Right */}
                        </GridItem>
                      </Grid>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Email 1: </label>
                        <p id="nom">{in_memberObj["Email 1"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Email 2: </label>
                        <p id="nom">{in_memberObj["Email 2"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Company Name: </label>
                        <p id="nom">{in_memberObj["Company Name"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Office Addr. L1: </label>
                        <p id="nom">{in_memberObj["Office Address Line1"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Office Addr. L2: </label>
                        <p id="nom">{in_memberObj["Office Address Line12"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Office Addr. L3: </label>
                        <p id="nom">{in_memberObj["Office Address Line13"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Office Addr. L4: </label>
                        <p id="nom">{in_memberObj["Office Address Line14"]}</p>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          Personal Infomation # 3
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"165px"}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Office Tel: </label>
                            <p id="nom">{in_memberObj["Office Tel"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Company Title: </label>
                            <p id="nom">{in_memberObj["Company Title"]}</p>
                          </Flex>
                          {/* Session Left */}
                        </GridItem>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Mail Problem: </label>
                            <p id="nom">{in_memberObj["Mail Problem"]}</p>
                          </Flex>
                          {/* Session Right */}
                        </GridItem>
                      </Grid>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Company Web Site: </label>
                        <p id="nom">{in_memberObj["Company Web Site"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Highest Prof. Qualif.: </label>
                        <p id="nom">
                          {in_memberObj["Highest Profressional Qualification"]}
                        </p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Highest Education: </label>
                        <p id="nom">{in_memberObj["Highest Education"]}</p>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          JC LOM Info. # 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"250px"}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Member ID: </label>
                            <p id="nom">{in_memberObj["Member ID"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Senator ID: </label>
                            <p id="nom">{in_memberObj["Senator ID"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Date Induct: </label>
                            <p id="nom">{in_memberObj["Date Induct"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Comission TDC: </label>
                            <p id="nom">{in_memberObj["Comission_TDC"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Comission Mainland: </label>
                            <p id="nom">{in_memberObj["Comission_Mainland"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">
                              Highest Trainer Status:{" "}
                            </label>
                            <p id="nom">
                              {in_memberObj["Highest Trainer Status"]}
                            </p>
                          </Flex>
                          {/* Session Left */}
                        </GridItem>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">LOM Mem. Type: </label>
                            <p id="nom">{in_memberObj["LOM Member Type"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Date PM: </label>
                            <p id="nom">{in_memberObj["Date PM"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Comission NBN: </label>
                            <p id="nom">{in_memberObj["Comission_NBN"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Comission IA: </label>
                            <p id="nom">{in_memberObj["Comission_IA"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Comission CorpComm: </label>
                            <p id="nom">{in_memberObj["Comission_CorpComm"]}</p>
                          </Flex>
                          {/* Session Right */}
                        </GridItem>
                      </Grid>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Current Position: </label>
                        <p id="nom">{in_memberObj["Current Position"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Highest Position: </label>
                        <p id="nom">
                          {in_memberObj["Highest Position in LOM"]}
                        </p>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          JC LOM Info. # 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"190px"}>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">
                          Other Social Involvement 1:{" "}
                        </label>
                        <p id="nom">
                          {in_memberObj["Other Social Involvement 1"]}
                        </p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">
                          Other Social Involvement 2:{" "}
                        </label>
                        <p id="nom">
                          {in_memberObj["Other Social Involvement 2"]}
                        </p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">
                          Other Social Involvement 3:{" "}
                        </label>
                        <p id="nom">
                          {in_memberObj["Other Social Involvement 3"]}
                        </p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Mail Opt-out: </label>
                        <p id="nom">{in_memberObj["Mail Opt-out"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Email Opt-out: </label>
                        <p id="nom">{in_memberObj["Email Opt-out"]}</p>
                      </Flex>
                      <Flex
                        minWidth="max-content"
                        alignItems="center"
                        gap="2"
                        style={{ margin: "5px" }}
                      >
                        <label htmlFor="nom">Highest Trainer Status: </label>
                        <p id="nom">{in_memberObj["Highest Trainer Status"]}</p>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="cneter">
                          JC NOM Info. # 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} h={"165px"}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">NOM: </label>
                            <p id="nom">{in_memberObj["NOM"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">NOM ID: </label>
                            <p id="nom">{in_memberObj["NOM ID"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Senator: </label>
                            <p id="nom">{in_memberObj["Senator"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">HON: </label>
                            <p id="nom">{in_memberObj["HON"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">
                              Print on JCIHK Directory:{" "}
                            </label>
                            <p id="nom">
                              {in_memberObj["Print on JCIHK Directory"]}
                            </p>
                          </Flex>
                          {/* Session Left */}
                        </GridItem>
                        <GridItem w="100%">
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">NOM Code: </label>
                            <p id="nom">{in_memberObj["NOM Code"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">NOM Mem. Type: </label>
                            <p id="nom">{in_memberObj["NOM Member Type"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">PNP: </label>
                            <p id="nom">{in_memberObj["PNP"]}</p>
                          </Flex>
                          <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                            style={{ margin: "5px" }}
                          >
                            <label htmlFor="nom">Highest Position: </label>
                            <p id="nom">{in_memberObj["Highest Position"]}</p>
                          </Flex>
                          {/* Session Right */}
                        </GridItem>
                      </Grid>
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
                  <ViewMember
                    memberObj={select_member(row.values)}
                    memberID={select_member(row.values)["id"]}
                  />
                </td>
                <td>
                  <UpdateMember
                    ID={select_member(row.values)["id"]}
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
                    HomeAddressLine1={
                      select_member(row.values)["Home Address Line1"]
                    }
                    HomeAddressLine2={
                      select_member(row.values)["Home Address Line2"]
                    }
                    HomeAddressLine3={
                      select_member(row.values)["Home Address Line3"]
                    }
                    HomeAddressLine4={
                      select_member(row.values)["Home Address Line4"]
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

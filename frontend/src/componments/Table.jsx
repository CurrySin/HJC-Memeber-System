import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { ChakraProvider } from "@chakra-ui/react";
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
    Tag
} from "@chakra-ui/react";

const TodosContext = React.createContext({
  todos: [], fetchTodos: () => {}
})

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      // { Header: "ID", accessor: "id", sortType: 'basic' },
      { Header: "HJC ID", accessor: "hjc_id", sortType: 'basic' },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Phone", accessor: "phone" }
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
   )

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
    page
  } = useTable({ columns, data, initialState: { pageSize: 10 }, defaultColumn }, useFilters, useSortBy, usePagination);

  function TextFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length
  
    return (
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
        placeholder={`Filter ${count} record`}
      />
    )
  }

  function Pagination({
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    pageIndex
  }) {
    return (
      <div>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          &lt;&lt;&lt;Previous Page
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page&gt;&gt;&gt;
        </Button>
        <div>
          Page: {' '}
          <em>
            {pageIndex + 1} / {pageOptions.length}
          </em>{' '}
        </div>
      </div>
    )
  }

  function UpdateTodo({item_id, hjc_id, first_name, last_name, gender, email, phone}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [in_item_id, setItemID] = useState(item_id)
    const [in_hjc_id, setHJCID] = useState(hjc_id)
    const [in_first_name, setFirstName] = useState(first_name)
    const [in_last_name, setLastName] = useState(last_name)
    const [in_gender, setGender] = useState(gender)
    const [in_email, setEmail] = useState(email)
    const [in_phone, setPhone] = useState(phone)
    const {fetchTodos} = React.useContext(TodosContext)
  
    const updateTodo = async () => {
      var obj = {
        "id": in_item_id,
        "hjc_id": in_hjc_id,
        "first_name": in_first_name,
        "last_name": in_gender,
        "gender": in_gender,
        "email": in_email,
        "phone": in_phone
      }
      console.log(obj)
      await fetch(`http://localhost:8000/member/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      })
      onClose()
      await fetchTodos()
      window.location.reload(false);
    }
  
    return (
      <>
        <Button colorScheme='gray' h="1.5rem" size="sm" onClick={onOpen}>Update Member</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Update Member</ModalHeader>
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
              <Button h="1.5rem" size="sm" onClick={updateTodo}>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                {/* <td onClick={()=>{Trigger(row.values)}}><button type="button">Visit Profile</button></td> */}
                  <td><UpdateTodo item_id={row.values.id} hjc_id={row.values.hjc_id} first_name={row.values.first_name} last_name={row.values.last_name} gender={row.values.gender} email={row.values.email} phone={row.values.phone}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
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

export default Table;

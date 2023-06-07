<script>
    import { onMount } from "svelte";
   import data from "../../../../data.json";
    const a = data;
    import {
      Table,
      TableBody,
      TableBodyCell,
      TableBodyRow,
      TableHead,
      TableHeadCell,
      TableSearch,
    } from "flowbite-svelte";
    import { identity } from "svelte/internal";
  
    let items = [];
    let filteredItems = [];
    let searchTerm = "";
  
    onMount(async function fetchData() {
    try {
      const response = await fetch("http://localhost:5000/finance/GeneralJournal", {
        method: "POST",
        body: JSON.stringify({
          UserRole: "Manager",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      items = data;
      filteredItems = items;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
  
  $: {
    filteredItems = items.filter(
      (item) => item.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  </script>
  
  <TableSearch
    placeholder="Search "
    hoverable={true}
    bind:inputValue={searchTerm}
  >
    <TableHead>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Account Title and Explanation</TableHeadCell>
      <TableHeadCell>Ref No.</TableHeadCell>
      <TableHeadCell>Debit</TableHeadCell>
      <TableHeadCell>Credit</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each filteredItems as item}
        <TableBodyRow>
          <TableBodyCell>{item.date}</TableBodyCell>
          <TableBodyCell
            >{item.expnamedebit}
            <br />{item.expnamecredit}
          </TableBodyCell>
          <TableBodyCell>{item.refponumber}</TableBodyCell>
          <TableBodyCell
            >{item.debit}
            <div class="mb-4"></div>
          </TableBodyCell>
          <TableBodyCell
            ><br />
            {item.credit}</TableBodyCell
          >
        </TableBodyRow>
  
      {/each}
    </TableBody>
  </TableSearch>
  
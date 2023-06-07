<script>
  import { Datepicker } from "flowbite-svelte";
  import { Card } from "flowbite-svelte";
  import Chart from "./chart.svelte";
  import { DateInput } from "date-picker-svelte";
    import { onMount } from "svelte";
    import data from "../../../../data.json";
  //import Chart from 'chart.js/auto';
    const a = data;
  let date = new Date();
  let selected;
  let items = a;

  async function fetchData() {
    // Fetch the data based on the selected date
    console.log(date)
    // try {
    //   const response = await fetch("http://localhost:5000/finance/GeneralJournal", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       Date: selected,
    //       UserRole: "Operator",
 
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   });
    //   const data = await response.json();
    //   items = data;
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  }
</script>

<!-- <Datepicker  /> -->
<main>
  <!-- <Datepicker datepickerButtons /> -->
  <!-- <Datepicker  /> -->
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select </label>
  <select bind:value={selected} on:change={() => fetchData()} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>DATE</option>
    <option value="week1">week1</option>
    <option value="week2">week2</option>
    <option value="week3">week3</option>
    <option value="week4">week4</option>
    <option value="week5">week5</option>
    <option value="month">monthly</option>

  </select>
  <div class="grid grid-cols-4 gap-8 mb-10 mt-10">
    {#each items as item}
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.amountdiesel}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Daily Diesel Volume
        </p>
      </Card>
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.amountgas95}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Daily Gas95 Volume
        </p>
      </Card>
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.avgcycletime}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          AVG Cycle Time
        </p>
      </Card>
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.avgwip}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          AVG WIP
        </p>
      </Card>
    {/each}
  </div>
  <!-- 
  <div class="grid2 grid-cols-2 gap-8 mb-10 mt-10">
    <div class="chart-container">
      <p />
      <Chart  />
    </div>
    <div class="chart-container">
      <p />
      <Chart  />
    </div>
  </div> -->

  <div class="grid3 grid-cols-2 gap-16 center-cards mb-10 mt-10">
    {#each items as item}
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.notruckin}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Truck in
        </p>
      </Card>
      <Card class="mr-10">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {item.notruckout}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Truck out
        </p>
      </Card>
    {/each}
  </div>
</main>

<!-- <script>
  import { Datepicker } from "flowbite-svelte";
  import { Card } from "flowbite-svelte";
  import Chart from "./chart.svelte";
</script>

<main>
  <Chart />
</main> -->

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .grid3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .chart-container {
    max-width: 400px;
    margin: 0 auto;
  }
  .center-code {
    text-align: center;
    
  }
  .center-cards {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

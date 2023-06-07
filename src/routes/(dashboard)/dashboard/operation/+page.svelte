`<script>
  import { Card } from "flowbite-svelte";
  import Chart from "./chart.svelte";
  
  import { DateInput } from "date-picker-svelte";
  import data from "../../../../data.json";
    import Chart2 from "./chart2.svelte";
  //import Chart from 'chart.js/auto';
  const a = data;
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  let items = a;

  async function fetchData() {
    // Fetch the data based on the selected date
    console.log(date)
    // try {
    //   const response = await fetch("http://localhost:5000/finance/GeneralJournal", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       Date: date.toISOString(),
    //       UserRole: "Manager",
 
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

<main>
  <DateInput bind:value={date} on:select={() => fetchData()} />

  <div class="grid grid-cols-4 gap-8 mb-10 mt-10">
    {#each items as item}
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.Amountdiesel}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Daily Diesel Volume
      </p>
    </Card>
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.Amountgas95}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Daily Gas95 Volume
      </p>
    </Card>
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.avgcycletime}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        AVG  Cycle Time
      </p>
    </Card>
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.totalwip}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Current WIP
      </p>
    </Card>

    {/each}
  </div>

  <div class="grid2 grid-cols-2 gap-8 mb-10 mt-10">
    <div class="chart-container">
      <p>Average waiting time at each station </p> 
      <Chart2 />
    </div>
    <div class="chart-container">
      <p>Number of failed time at each station </p> 
      <Chart  />
    </div>
  </div>

  <div class="grid3 grid-cols-2 gap-16 center-cards mb-10 mt-10">
    {#each items as item}
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.Notruckin}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Truck in
      </p>
    </Card>
    <Card class="mr-10">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.Notruckout}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Truck out
      </p>
    </Card>
    {/each}
  </div>

</main>

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
`
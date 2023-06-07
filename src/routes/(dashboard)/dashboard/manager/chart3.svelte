<script>
  import { Bar } from 'svelte-chartjs';
  import { data} from './data3';
  
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<div>
  <Bar {data} options={{ responsive: true }} />
</div>

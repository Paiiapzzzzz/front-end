<script>
  import "../../../app.postcss";

  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Chevron,
    MegaMenu,
    Button,
  } from "flowbite-svelte";
  let menu = [
    { name: "General Journal", href: "/dashboard/general" },
    { name: "General Ledger", href: "/dashboard/ledger" },
    { name: "Income Statement", href: "/dashboard/income" },
    { name: "Inventory Stock Card", href: "/dashboard/stock" },
    { name: "Purchase Order", href: "/dashboard/order" },
    { name: "Paid Sale Invoice", href: "/dashboard/invoice" },
  ];

  let menu2 = [
    { name: "Tracking time", href: "/dashboard/searchtrack" },
    { name: "Service time", href: "/dashboard/searchservice" },
  ];

  // import { Router, Route, Link } from "svelte-navigator";
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PTT-01.svg/512px-PTT-01.svg.png"
      class="mr-3 h-8 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >PTT TAS</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/dashboard/">Home</NavLi>
    <NavLi><Chevron aligned>Finance</Chevron></NavLi>
    <MegaMenu full items={menu} let:item>
      <a
        href={item.href}
        class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >{item.name}</a
      >
      <a
        slot="extra"
        class="block mt-4 p-4 text-left bg-local bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
        style="background-image: url(/images/nature-1.webp)"
      />
    </MegaMenu>
    <NavLi href="/dashboard/operation">Operation Dashboard</NavLi>
    <NavLi href="/dashboard/manager">Manager Dashboard</NavLi>
    
    
    <NavLi><Chevron aligned>Search Truck</Chevron></NavLi>
    <MegaMenu full items={menu2} let:item>
      <a
        href={item.href}
        class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >{item.name}</a
      >
      <a
        slot="extra"
        class="block mt-4 p-4 text-left bg-local bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
        style="background-image: url(/images/nature-1.webp)"
      />
    </MegaMenu>
    <NavLi href="/">Logout</NavLi>
  </NavUl>
</Navbar>

<slot />

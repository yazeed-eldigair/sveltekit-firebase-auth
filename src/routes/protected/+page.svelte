<script lang="ts">
  import { goto } from "$app/navigation";
  import { signOut } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";

  async function handleLogOut() {
    await signOut(auth);
    await goto('/');
  }
</script>

<svelte:head>
	<title>Protected | Auth Demo</title>
</svelte:head>

<div class="flex flex-col items-center justify-evenly h-full">
  <Card.Header class="flex-1 text-center justify-center">
    <Card.Title>You are now logged in</Card.Title>
    <Card.Description class="text-muted-foreground">
      This is a protected page
    </Card.Description>
  </Card.Header>

  <Card.Footer>
    <form on:submit={handleLogOut}>
      <Button type="submit" variant="destructive">Log out</Button>
    </form>
  </Card.Footer>
</div>

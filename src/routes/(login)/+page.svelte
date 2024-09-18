<script lang="ts">
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import * as Card from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Label } from "$lib/components/ui/label";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";
  import { goto } from "$app/navigation";

  let loading = false;

  let email = "demo-user@app.com";
  let password = "my-password-123";

  async function handleLogIn() {
    loading = true;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      await goto ('/protected');
    } catch {
      loading = false;
      alert('Invalid credentials');
    }
  }
</script>

<Card.Header>
  <Card.Title>Log in</Card.Title>
  <Card.Description class="pt-2">
    This demo showcases client-side authentaction using SvelteKit and Firebase Auth.
  </Card.Description>
</Card.Header>

<form on:submit={handleLogIn}>
  <Card.Content>
    <div class="flex flex-col w-full gap-4">
      <div class="flex flex-col space-y-1.5">
        <Label for="email">Email</Label>
        <Input id="email" bind:value={email} required />
      </div>

      <div class="flex flex-col space-y-1.5">
        <Label for="password">Password</Label>
        <Input id="password" type="password" bind:value={password} required />
      </div>
    </div>
  </Card.Content>

  <Card.Footer>
    {#if loading}
      <Button disabled class="w-full">
        <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
        Logging in...
      </Button>
    {:else} 
      <Button type="submit" class="w-full">Log in</Button>
    {/if}
  </Card.Footer>
</form>

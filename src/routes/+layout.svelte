<script lang="ts">
  import "../app.css";
  import * as Card from "$lib/components/ui/card";
  import GitHub from "$lib/icons/github.svelte";
  import X from "$lib/icons/x.svelte";
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <Card.Root class="w-[350px] min-h-[338px]">
    <slot />
  </Card.Root>
  <div class="flex pt-3 gap-3">
    <a
      href="https://github.com/yazeed-eldigair"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub repo"
    >
      <GitHub />
    </a>
    <a
      href="https://twitter.com/zeezkee"
      target="_blank"
      rel="noopener noreferrer"
      title="X"
    >
      <X />
    </a>
  </div>
</div>

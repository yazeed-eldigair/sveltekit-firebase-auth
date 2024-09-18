import { redirect } from "@sveltejs/kit";
import { user } from "$lib/state/user.svelte";
import { auth } from "$lib/firebase";

export const ssr = false

export async function load({url}) {
  await auth.authStateReady();

  if (auth.currentUser) {
    user.set({
      email: auth.currentUser.email!,
      name: auth.currentUser.displayName!,
      isVerified: auth.currentUser.emailVerified
    });

    if (!url.pathname.startsWith('/protected')) {
      throw redirect(302, '/protected');
    }

  } else {
    user.reset();

    if (url.pathname.startsWith('/protected')) {
      throw redirect(302, '/');
    }
  }
}
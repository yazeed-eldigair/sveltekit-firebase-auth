import { redirect } from "@sveltejs/kit";
import { userRune } from "$lib/state/user.svelte";
import { auth } from "$lib/firebase";

export const ssr = false

export async function load({url}) {
  await auth.authStateReady();

  if (auth.currentUser) {
    userRune.set({
      email: auth.currentUser.email!,
      name: auth.currentUser.displayName!,
      isVerified: auth.currentUser.emailVerified
    });

    if (!url.pathname.startsWith('/protected')) {
      throw redirect(302, '/protected');
    }

  } else {
    userRune.reset();

    if (url.pathname.startsWith('/protected')) {
      throw redirect(302, '/');
    }
  }
}

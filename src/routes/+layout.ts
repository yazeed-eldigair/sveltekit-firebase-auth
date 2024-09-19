import { redirect } from "@sveltejs/kit";
import { userState } from "$lib/state/user.svelte";
import { auth } from "$lib/firebase";

export const ssr = false;

export async function load({url}) {
  await auth.authStateReady();

  if (auth.currentUser) {
    userState.set({
      email: auth.currentUser.email!,
      name: auth.currentUser.displayName!,
      isVerified: auth.currentUser.emailVerified
    });

    if (!url.pathname.startsWith('/protected')) {
      throw redirect(302, '/protected');
    }

  } else {
    userState.reset();

    if (url.pathname.startsWith('/protected')) {
      throw redirect(302, '/');
    }
  }
}

function createUserState() {
  let user = $state<User | null>(null);

  return {
    get user() { return user },
    set: (newUser: User) => user = newUser,
    reset: () => user = null,
  }
}

export const userState = createUserState();

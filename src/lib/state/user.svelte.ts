function createUser() {
  let user = $state<User | null>(null);

  return {
    get: () => user,
    set: (newUser: User) => user = newUser,
    reset: () => user = null,
  }
}

export const user = createUser();

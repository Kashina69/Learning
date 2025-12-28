import { type Component, createResource, createSignal, For } from "solid-js";
import UserCard from "../common/components/UserCard";
import Loader from "../common/components/Loader";

// Function

const fetchUsers = async () => {
  const data = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  const user: User[] = data.users;
  return user;
};

const deleteUser = (setUsers: (prevUsers: any) => void, id: number) => {
  setUsers((prevUsers: User[]) =>
    prevUsers.filter((user: User) => user.id !== id)
  );
};

const UsersPage: Component = () => {
  // const [user] = createResource(fetchProducts);
  const [users, setUsers] = createSignal<User[]>([]);
  fetchUsers().then((data) => {
    setTimeout(() => {
      setUsers(data);
    }, 2000);
  });

  return (
    <div>
      {!users()?.length && <Loader />}
      <div class="flex flex-wrap justify-center">
        <For each={users()}>
          {(user: User, idx: () => number) => (
            <UserCard
              user={user}
              idx={idx}
              deleteUser={(id) => deleteUser(setUsers, id)}
            />
          )}
        </For>
      </div>
    </div>
  );
};
export default UsersPage;

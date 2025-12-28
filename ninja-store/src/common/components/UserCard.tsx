function UserCard({
  user,
  idx,
  deleteUser,
}: {
  user: User;
  idx: () => number;
  deleteUser: (id: number) => void;
}) {
  return (
    <div class="bg-white p-4 shadow-md rounded-md max-w-sm m-4 flex flex-col justify-center items-center flex-1 min-w-1/3 relative">
      <h2 class="absolute top-0 left-0 m-4 text-xl font-bold mb-2">
        {idx() + 1}
      </h2>
      <button
        onClick={() => deleteUser(user.id)}
        class="absolute top-0 right-0 m-4 text-white py-2 px-2 rounded hover:bg-red-600 transition duration-300"
      >
        🗑️
      </button>
      <img
        src={user.image}
        alt={`Profile of ${user.firstName} ${user.lastName}`}
        class="w-24 h-24 rounded-full mb-4"
      />
      <h2 class="text-xl font-bold mb-2">
        {user.id}. {user.firstName} {user.lastName}
      </h2>
      <div class="flex flex-col">
        <span class="font-bold mb-1">Username:</span>{" "}
        <span>{user.username}</span>
        <span class="font-bold mb-1">Sex:</span> <span>{user.gender}</span>
        <span class="font-bold mb-1">Address:</span>{" "}
        <span>
          {user.address.address}, {user.address.city}, {user.address.state},{" "}
          {user.address.country}
        </span>
        <span class="font-bold mb-1">Email:</span> <span>{user.email}</span>
        <span class="font-bold mb-1">Birthday:</span>{" "}
        <span>{user.birthDate}</span>
      </div>
    </div>
  );
}

export default UserCard;

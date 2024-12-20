import Link from "next/link";
import Id from "./[id]/page";


export default async function Home() {
  const url = await fetch (`https://jsonplaceholder.typicode.com/users/`)
  const response = await url.json()
  console.log(response)
  return (
   <div>
    {
      response.map((user : any) =>  (
        <div key={user.id}>
          <Link href={`${user.id}`}>
          <h1>{user.name} &nbsp; {user.id}</h1>
          </Link>
        </div>
      ))
    }
   </div>
  );
}

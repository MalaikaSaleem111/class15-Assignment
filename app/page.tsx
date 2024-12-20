import Link from "next/link";


export default async function Home() {
  const url = await fetch (`https://jsonplaceholder.typicode.com/users/`)
  const response = await url.json()
  console.log(response)
  return (
   <div>
    {
      response.map((user : any) =>  (
        <div>
          <Link href={`${user.id}`}>
          <h1>{user.name} &nbsp; {user.id}</h1>
          </Link>
        </div>
      ))
    }
   </div>
  );
}

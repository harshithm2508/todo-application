import { auth } from "@/auth"

export default async function Home() {
  const session = await auth();
  return(
    <div className="">
      {(session!=null) ? (JSON.stringify(session,null,2)) : "Landing Page"}
      <div>
        <img src={session?.user?.image!} alt="" />
      </div>
    </div>
  )
}
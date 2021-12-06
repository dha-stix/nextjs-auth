import {useEffect} from "react"
import { useRouter } from 'next/router'
import { signIn, useSession  } from "next-auth/react"

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(()=> {
    function redirect() {
        if(status === "authenticated") {
            router.push("/dashboard")
        }
    }
    redirect()
}, [status])

  return (
    <div  className="flex w-full h-screen bg-gray-700 flex-col items-center justify-center">
     <p  className="text-gray-200 mb-4"> Not signed in </p>
      <button onClick={()=> signIn()} className="text-gray-300 py-2 px-6 border">Sign in</button>
    </div>
  )
}


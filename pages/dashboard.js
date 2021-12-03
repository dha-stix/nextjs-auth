import React, {useEffect} from 'react'
import { signOut, useSession  } from "next-auth/react"
import { useRouter } from 'next/router'

const dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(()=> {
        function redirect() {
            if(!session) {
                router.push("/")
            }
        }
        redirect()
    }, [])
    return (
        <div className="flex w-full h-screen bg-gray-700 flex-col items-center justify-center">
         {session && <p  className="text-gray-200 mb-4"> Howdy, {session.user.name || session.user.email} </p>}
         <button onClick={()=> signOut()} className="text-green-300 py-2 px-6 border">Sign Out</button>
       </div>
    )
}

export default dashboard

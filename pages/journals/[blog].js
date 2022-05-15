import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FullBlog from '../../components/fullBlog'

const Journal = () => {
    const router = useRouter()
    const [journal, setJournal] = useState({})
    const { blog } = router.query

    useEffect(() => {
        async function getBlog() {
            if (blog) {
                let res = await fetch('http://localhost:3000/api/getBlog', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: blog })
                })
                let response = await res.json()
                setJournal(response.blogs)
            }
        }

        getBlog()
    }, [blog])

    return (
        <div>
            <FullBlog journal={journal}/>
        </div>
    )
}

export default Journal
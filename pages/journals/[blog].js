import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Journal = () => {
    const router = useRouter()
    const [journal, setJournal] = useState({})
    const [id, setId] = useState('')
    const { blog } = router.query

    useEffect(() => {
        async function getBlog() {
            setId(blog)
            let res = await fetch('/api/getBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            })
            let response = await res.json()
            setJournal(response.blogs)
        }

        getBlog()
    }, [blog, id])

    return (
        <div>
            {console.log(journal.title)}
        </div>
    )
}


export default Journal
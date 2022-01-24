import { Container } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function JobDetails() {

    const { jobId } = useParams()

    return (
        <Container xs="xl" style={{ margin: '3rem 0'}}> 
            Job {jobId } - No details found
        </Container>
    )
}

export interface IReduxStore {
    jobs: {
        searchQuery: string
        categories: string[]
        data: IJob[]
        fetchLoading: boolean
        fetchError: boolean
        moreDataToFetch: boolean
    }
    favourites: {
        jobs: IJob[]
    }
}

export interface IJob{
    _id: string
    url: string
    title: string
    company_name: string
    category: string
    job_type: string
    publication_date: string
    candidate_required_location: string
    salary: string
    description: string
}
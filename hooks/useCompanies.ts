"use client";

import { useQuery } from '@tanstack/react-query'
import { Company } from '@/types/companies'

export default function useCompanies() {
    const fetchCompanies = async (): Promise<Company[]> => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_COMPANIES_API}`)
        return response.json();
    }

    return useQuery({
        queryKey: ['companies'],
        queryFn: fetchCompanies,
    })
}
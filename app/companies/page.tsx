"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useCompanies from "@/hooks/useCompanies";
import { Company } from "@/types/companies";
export default function CompaniesPage() {
    const { data: companiesData, isLoading, error } = useCompanies();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (

        <div className="container mx-auto">

            <h1 className="text-2xl font-bold text-center my-4">Companies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companiesData?.map((company: Company, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{company.name}</CardTitle>
                            <CardDescription>{company.industry}</CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                            <div className="text-sm"><span className="font-bold">Employees: </span> {company.employeeCount}</div>
                            <div className="text-sm"><span className="font-bold">Market Cap: </span> {company.marketCap}</div>
                            <div className="text-sm"><span className="font-bold">Domain: </span> {company.domain}</div>
                            <div className="text-sm"><span className="font-bold">CEO: </span> {company.ceoName}</div>
                            <div className="text-sm"><span className="font-bold">Country: </span> {company.country}</div>
                            <div className="text-sm"><span className="font-bold">Zip: </span> {company.zip}</div>
                            <div className="text-sm"><span className="font-bold">Address: </span> {company.address}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>


        </div>
    );
}
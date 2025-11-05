import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
export default function CompaniesSkeleton() {
    return (
        <div className="container mx-auto">

            <h1 className="text-2xl font-bold text-center my-4">Companies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="bg-gray-200 w-1/2 h-4"></CardTitle>
                            <CardDescription className="bg-gray-200 w-1/2 h-4"></CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                            <div className="text-sm bg-gray-200 w-1/2 h-1"></div>
                        </CardContent>
                    </Card>
                ))}
            </div>


        </div>
    );
}
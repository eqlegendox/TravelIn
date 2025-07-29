import { Button } from "@workspace/ui/components/button"
import { SearchForm } from "@/components/SearchForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl primary font-bold">Hello This Is For Backend Testing</h1>
        <SearchForm />
      </div>
    </div>
  )
}

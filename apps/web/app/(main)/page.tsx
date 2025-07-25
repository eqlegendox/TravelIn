import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl primary font-bold">Hello World</h1>
        <Button size="sm">Button Wahhahaa</Button>
        <Button>A</Button>
      </div>
    </div>
  )
}

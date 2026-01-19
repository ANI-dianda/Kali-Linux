import * as React from "react"

const Sheet = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => <button ref={ref} {...props} />)
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`fixed inset-y-0 right-0 z-50 w-3/4 border-l bg-background shadow-lg ${className}`}
    {...props}
  />
))
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }

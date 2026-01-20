import * as React from "react"

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  action?: ToastActionElement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface ToastActionElement {
  altText: string
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />
  }
)
Toast.displayName = "Toast"

export const ToastAction = React.forwardRef<HTMLButtonElement, any>(
  ({ ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
ToastAction.displayName = "ToastAction"

export const ToastClose = React.forwardRef<HTMLButtonElement, any>(
  ({ ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
ToastClose.displayName = "ToastClose"

export const ToastDescription = React.forwardRef<HTMLDivElement, any>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />
  }
)
ToastDescription.displayName = "ToastDescription"

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ToastTitle = React.forwardRef<HTMLDivElement, any>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />
  }
)
ToastTitle.displayName = "ToastTitle"

export const ToastViewport = React.forwardRef<HTMLDivElement, any>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />
  }
)
ToastViewport.displayName = "ToastViewport"

export const Toaster = () => {
  return null
}
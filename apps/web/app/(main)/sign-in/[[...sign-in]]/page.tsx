import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-card border border-border shadow-lg",
              headerTitle: "text-foreground",
              headerSubtitle: "text-muted-foreground",
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
              formFieldLabel: "text-foreground",
              formFieldInput: "bg-background border border-border text-foreground",
              footerActionLink: "text-primary hover:text-primary/80",
              dividerLine: "bg-border",
              dividerText: "text-muted-foreground",
              socialButtonsBlockButton: "bg-background border border-border text-foreground hover:bg-muted",
            }
          }}
        />
      </div>
    </div>
  )
} 
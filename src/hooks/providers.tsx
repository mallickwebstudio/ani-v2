import { ThemeProvider } from "./theme-provider";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
// import Analytics from "@/components/other/analytics";
import { ReactNode } from "react";
import { SiteProvider } from "./site-provider";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
        >
            <SiteProvider>
                {children}
            </SiteProvider>
            <Toaster />
            {/* <Analytics /> */}
            {/* <VercelAnalytics /> */}
        </ThemeProvider>
    )
}

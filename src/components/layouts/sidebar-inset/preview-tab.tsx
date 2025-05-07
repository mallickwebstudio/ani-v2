import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PanelPreview from "./panel-preview";
import PanelCode from "./panel-code";
import { Animation } from "@/types";
import { Eye } from "lucide-react";
import PanelUsage from "./panel-usage";

const tabsContentClass = "relative bg-accent dark:bg-card size-full rounded-md border overflow-hidden";

export default function PreviewTab({
    data,
}: {
    data: Animation;
}) {
    const { slug, tsxFilepath, jsxFilepath, animation, title, variant } = data;

    return (
        <Tabs defaultValue="preview" className="w-full aspect-video min-w-4 scroll-m-4">

            <TabsList> {/* Triggers */}
                <TabsTrigger className="cursor-pointer" value="preview">
                    <Eye />
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="jsx">.jsx</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="tsx">.tsx</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent className={tabsContentClass} value="preview">
                <PanelPreview animation={animation} variant={variant} />
            </TabsContent>

            <TabsContent className={tabsContentClass} value="jsx">
                <PanelCode filePath={jsxFilepath} extention="jsx" fileName={slug} />
            </TabsContent>

            <TabsContent className={tabsContentClass} value="tsx">
                <PanelCode filePath={tsxFilepath} extention="tsx" fileName={slug} />
            </TabsContent>

            <TabsContent className={tabsContentClass} value="usage">
                <PanelUsage filePath={tsxFilepath} title={title} fileName={slug} />
            </TabsContent>
        </Tabs>
    )
}

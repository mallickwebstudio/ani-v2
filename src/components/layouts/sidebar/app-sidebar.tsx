"use client"

import * as React from "react"

import { SidebarNav } from "@/components/layouts/sidebar/sidebar-nav"
import { SidebarBottom } from "@/components/layouts/sidebar/sidebar-bottom"
import { SidebarTop } from "@/components/layouts/sidebar/sidebar-top"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { boxAnimations, textAnimations, masterAnimations } from "@/lib/database"

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarTop />
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav items={masterAnimations} label="Misceleneous" />
        <SidebarNav items={boxAnimations} label="Box" />
        <SidebarNav items={textAnimations} label="Text" />
      </SidebarContent>

      <SidebarFooter>
        <SidebarBottom />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

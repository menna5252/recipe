
import {  ForkKnife } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import logo from '@/assets/images/logo-BfNap0Pe.png'
import Image from "next/image"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Meals",
    url: "/",
    icon: ForkKnife,
  },
  {
    title: "Ingrediants",
    url: "/",
    icon: ForkKnife,
  },
  {
    title: "Area",
    url: "/",
    icon: ForkKnife,
  },
 
 
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
        <Image src={logo} width={200} height={200} alt="logo" className="my-8"/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={`mb-4 border-1 p-5  ${index === 0 ?'bg-amber-500 text-white rounded-lg  hover:!bg-amber-500 hover:!text-white':'' }`}>
                      <item.icon />
                      <span className="font-semibold text-lg font-cursive">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
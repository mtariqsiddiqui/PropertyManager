import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { NgClass } from "@angular/common"

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <div class="flex h-full w-[80px] flex-col items-center space-y-4 border-r bg-background py-4 md:w-[200px] md:items-start md:px-4">
      <div class="flex h-16 items-center justify-center md:justify-start md:px-6">
        <h1 class="hidden text-xl font-bold md:block">AdminCMS</h1>
        <h1 class="block text-xl font-bold md:hidden">CMS</h1>
      </div>
      <div class="space-y-2 w-full">
        @for (route of routes; track route.href) {
          <a
            [routerLink]="route.href"
            routerLinkActive="bg-muted"
            [routerLinkActiveOptions]="{exact: route.href === '/'}"
            class="flex w-full items-center justify-center md:justify-start px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
          >
            <i [ngClass]="route.icon" class="h-5 w-5 md:mr-2 {{ route.color }}"></i>
            <span class="hidden md:block">{{ route.label }}</span>
          </a>
        }
      </div>
    </div>
  `,
  styles: [
    `
    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `,
  ],
})
export class SidebarComponent {
  routes = [
    {
      label: "Dashboard",
      icon: "lucide-home",
      href: "/",
      color: "text-sky-500",
    },
    {
      label: "Complaints",
      icon: "lucide-clipboard-list",
      href: "/complaints",
      color: "text-violet-500",
    },
    {
      label: "Work Orders",
      icon: "file-text",
      href: "/work-orders",
      color: "text-pink-700",
    },
    {
      label: "Analytics",
      icon: "lucide-bar-chart-3",
      href: "/analytics",
      color: "text-orange-500",
    },
    {
      label: "Users",
      icon: "lucide-users",
      href: "/users",
      color: "text-emerald-500",
    },
    {
      label: "Settings",
      icon: "lucide-settings",
      href: "/settings",
      color: "text-gray-500",
    },
  ]
}

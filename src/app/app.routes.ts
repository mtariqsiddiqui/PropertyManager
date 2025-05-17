import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "complaints/new",
    loadComponent: () =>
      import("./pages/complaint/complaint-form/complaint-form.component").then((m) => m.ComplaintFormComponent),
  },
  {
    path: "complaints/:id",
    loadComponent: () =>
      import("./pages/complaint/complaint-detail/complaint-detail.component").then((m) => m.ComplaintDetailComponent),
  },
  {
    path: "work-orders/:id",
    loadComponent: () => import("./pages/work-order/work-order.component").then((m) => m.WorkOrderComponent),
  },
  {
    path: "analytics",
    loadComponent: () => import("./pages/analytics/analytics.component").then((m) => m.AnalyticsComponent),
  },
  {
    path: "users",
    loadComponent: () => import("./pages/users/users.component").then((m) => m.UsersComponent),
  },
  {
    path: "settings",
    loadComponent: () => import("./pages/settings/settings.component").then((m) => m.SettingsComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]

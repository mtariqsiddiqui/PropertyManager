import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { SidebarComponent } from "./components/sidebar/sidebar.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="flex h-screen overflow-hidden">
      <app-sidebar></app-sidebar>
      <main class="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {
  title = "Complaint Management System"
}

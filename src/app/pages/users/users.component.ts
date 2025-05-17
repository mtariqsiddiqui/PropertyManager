import { Component } from "@angular/core"

@Component({
  selector: "app-users",
  standalone: true,
  template: `
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Users</h2>
        <p class="text-muted-foreground">Manage system users and permissions</p>
      </div>
      
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold mb-4">User Management</h3>
        <p>User management content will be displayed here.</p>
      </div>
    </div>
  `,
})
export class UsersComponent {}

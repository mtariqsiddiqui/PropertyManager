import { Component } from "@angular/core"

@Component({
  selector: "app-analytics",
  standalone: true,
  template: `
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Analytics</h2>
        <p class="text-muted-foreground">View complaint statistics and trends</p>
      </div>
      
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold mb-4">Analytics Dashboard</h3>
        <p>Analytics content will be displayed here.</p>
      </div>
    </div>
  `,
})
export class AnalyticsComponent {}

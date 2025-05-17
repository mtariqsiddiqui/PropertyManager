import { Component, OnInit } from "@angular/core"
import { RouterLink } from "@angular/router"
import { NgClass } from "@angular/common"
import { ComplaintService } from "../../services/complaint.service"
import { Complaint, Stat } from "../../models/complaint.model"
import { LucideAngularModule, LucidePlus, LucideFilter } from 'lucide-angular';

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [RouterLink, NgClass, LucideAngularModule],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  readonly lucideplus = LucidePlus
  readonly lucidefilter = LucideFilter
  // readonly lucide = LucideAngularModule
  stats: any[] = []
  tickets: Complaint[] = []

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.complaintService.getStats().subscribe((stats: Stat[]) => {
      this.stats = stats
    })

    this.complaintService.getTickets().subscribe((tickets) => {
      this.tickets = tickets
    })
  }

  getStatusClass(status: string): string {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return ""
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case "pending":
        return "Pending"
      case "in-progress":
        return "In Progress"
      case "resolved":
        return "Resolved"
      default:
        return status
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return ""
    }
  }

  getPriorityText(priority: string): string {
    switch (priority) {
      case "high":
        return "High"
      case "medium":
        return "Medium"
      case "low":
        return "Low"
      default:
        return priority
    }
  }
}

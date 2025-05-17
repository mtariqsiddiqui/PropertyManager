import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, RouterLink } from "@angular/router"
import {CommonModule } from "@angular/common"
import { ComplaintService } from "../../../services/complaint.service"
import { Complaint } from "../../../models/complaint.model"
import {LucideAngularModule, LucideArrowLeft} from 'lucide-angular';

@Component({
  selector: "app-complaint-detail",
  standalone: true,
  imports: [RouterLink, CommonModule, LucideAngularModule],
  templateUrl: 'complaint-detail.component.html'
})
export class ComplaintDetailComponent implements OnInit {
  readonly lucidearrowleft = LucideArrowLeft
  complaint: Complaint | undefined

  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"]
      this.complaintService.getTicketById(id).subscribe((complaint) => {
        this.complaint = complaint
      })
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

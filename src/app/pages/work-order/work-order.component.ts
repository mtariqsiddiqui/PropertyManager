import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { ActivatedRoute, RouterLink } from "@angular/router"
import { NgClass, NgIf } from "@angular/common"
import { ComplaintService } from "../../services/complaint.service"
import { WorkOrder, Technician } from "../../models/complaint.model"
import {LucideAngularModule, LucideArrowLeft} from 'lucide-angular';

@Component({
  selector: "app-work-order",
  standalone: true,
  imports: [RouterLink, NgClass, NgIf, FormsModule, LucideAngularModule],
  templateUrl: 'work-order.component.html' ,
})
export class WorkOrderComponent implements OnInit {
  readonly lucidearrowleft = LucideArrowLeft
  workOrder: WorkOrder | undefined
  technicians: Technician[] = []

  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"]
      this.complaintService.getWorkOrder(id).subscribe((workOrder) => {
        this.workOrder = workOrder
      })

      this.complaintService.getTechnicians().subscribe((technicians) => {
        this.technicians = technicians
      })
    })
  }

  saveChanges(): void {
    if (this.workOrder) {
      this.complaintService.updateWorkOrder(this.workOrder).subscribe((success) => {
        if (success) {
          alert("Work order updated successfully!")
        }
      })
    }
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

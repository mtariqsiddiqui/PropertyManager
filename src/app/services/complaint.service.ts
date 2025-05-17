import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import type { Complaint, Technician, WorkOrder, Stat } from "../models/complaint.model"
import {LucideAlertCircle, LucideCheckCircle2, LucideClock} from 'lucide-angular';

@Injectable({
  providedIn: "root",
})
export class ComplaintService {
  private stats : Stat[] = [
    {
      title: "Total Tickets",
      value: "243",
      description: "All time tickets",
      icon: "lucide-clock",
      image: LucideClock,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "In Progress",
      value: "32",
      description: "Currently being handled",
      icon: "lucide-alert-circle",
      image: LucideAlertCircle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Pending",
      value: "18",
      description: "Awaiting assignment",
      icon: "lucide-clock",
      image: LucideClock,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Resolved",
      value: "193",
      description: "Successfully completed",
      icon: "lucide-check-circle-2",
      image: LucideCheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
  ]

  private tickets: Complaint[] = [
    {
      id: "TKT-001",
      subject: "Water Leakage in Bathroom",
      property: "Block A, Apt 102",
      status: "pending",
      priority: "high",
      date: "2023-05-08",
      description:
        "There is a significant water leak coming from the ceiling in the main bathroom. " +
        "The leak appears to be getting worse and has already caused damage to the ceiling paint and fixtures. " +
        "This requires immediate attention as it might lead to more serious structural damage if left unattended.",
      time: "10:30 AM",
      location: "Main Bathroom",
      reporter: {
        name: "John Smith",
        type: "Owner",
        phone: "+1 (555) 123-4567",
        email: "john.smith@example.com",
      },
      hasImage: true,
    },
    {
      id: "TKT-002",
      subject: "Electrical Outlet Not Working",
      property: "Block B, Apt 305",
      status: "in-progress",
      priority: "medium",
      date: "2023-05-07",
      description:
        "The electrical outlet in the kitchen near the refrigerator is not working. I've checked the circuit breaker and it hasn't tripped.",
      time: "14:45 PM",
      location: "Kitchen",
      reporter: {
        name: "Emily Johnson",
        type: "Tenant",
        phone: "+1 (555) 987-6543",
        email: "emily.johnson@example.com",
      },
      hasImage: false,
    },
    {
      id: "TKT-003",
      subject: "AC Not Cooling",
      property: "Block C, Apt 210",
      status: "in-progress",
      priority: "high",
      date: "2023-05-06",
      description:
        "The air conditioning unit is running but not cooling the apartment. The temperature inside is currently 85°F despite the thermostat being set to 72°F.",
      time: "09:15 AM",
      location: "Living Room",
      reporter: {
        name: "Michael Brown",
        type: "Tenant",
        phone: "+1 (555) 456-7890",
        email: "michael.brown@example.com",
      },
      hasImage: true,
    },
    {
      id: "TKT-004",
      subject: "Broken Window Handle",
      property: "Block A, Apt 115",
      status: "pending",
      priority: "low",
      date: "2023-05-05",
      description:
        "The handle on the bedroom window is broken, making it difficult to open and close the window properly.",
      time: "16:20 PM",
      location: "Bedroom",
      reporter: {
        name: "Sarah Wilson",
        type: "Owner",
        phone: "+1 (555) 234-5678",
        email: "sarah.wilson@example.com",
      },
      hasImage: false,
    },
    {
      id: "TKT-005",
      subject: "Garbage Disposal Issue",
      property: "Block D, Apt 412",
      status: "in-progress",
      priority: "medium",
      date: "2023-05-04",
      description:
        "The garbage disposal in the kitchen sink is making a loud grinding noise and not functioning properly.",
      time: "11:30 AM",
      location: "Kitchen",
      reporter: {
        name: "David Lee",
        type: "Tenant",
        phone: "+1 (555) 876-5432",
        email: "david.lee@example.com",
      },
      hasImage: false,
    },
  ]

  private technicians: Technician[] = [
    { id: "tech-1", name: "David Johnson", specialization: "Plumbing" },
    { id: "tech-2", name: "Sarah Williams", specialization: "Electrical" },
    { id: "tech-3", name: "Michael Brown", specialization: "HVAC" },
    { id: "tech-4", name: "Emily Davis", specialization: "General Maintenance" },
  ]

  constructor() {}

  getStats(): Observable<any[]> {
    return of(this.stats)
  }

  getTickets(): Observable<Complaint[]> {
    return of(this.tickets)
  }

  getTicketById(id: string): Observable<Complaint | undefined> {
    const ticket = this.tickets.find((t) => t.id === id)
    return of(ticket)
  }

  getTechnicians(): Observable<Technician[]> {
    return of(this.technicians)
  }

  getWorkOrder(id: string): Observable<WorkOrder> {
    const ticket = this.tickets.find((t) => t.id === id)
    if (!ticket) {
      return of({} as WorkOrder)
    }

    return of({
      id: `WO-${id.split("-")[1]}`,
      complaintId: ticket.id,
      subject: ticket.subject,
      description: ticket.description,
      status: ticket.status,
      priority: ticket.priority,
      date: ticket.date,
      time: ticket.time,
      property: ticket.property,
      location: ticket.location,
      reporter: ticket.reporter,
      hasImage: ticket.hasImage,
      assignedTechnician: "",
      notes: "",
    })
  }

  updateWorkOrder(workOrder: WorkOrder): Observable<boolean> {
    // In a real application, this would make an API call to update the work order
    console.log("Updating work order:", workOrder)
    return of(true)
  }
}

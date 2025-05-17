import {LucideIconData} from 'lucide-angular';

export interface Reporter {
  name: string
  type: string
  phone: string
  email: string
}

export interface Complaint {
  id: string
  subject: string
  description: string
  status: string
  priority: string
  date: string
  time: string
  property: string
  location: string
  reporter: Reporter
  hasImage: boolean
}

export interface Technician {
  id: string
  name: string
  specialization: string
}

export interface WorkOrder extends Complaint {
  complaintId: string
  assignedTechnician: string
  notes: string
}

export interface Stat {
  title: string
  value: string
  description: string
  icon: string
  image: LucideIconData
  color: string
  bgColor: string
}

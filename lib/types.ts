export type BuildingStatus = 'identified' | 'contacted' | 'assessment' | 'negotiating' | 'client' | 'lost' | 'dormant'
export type RelationshipStatus = 'new' | 'talking' | 'warm' | 'hot' | 'client' | 'cold'
export type DealStage = 'identified' | 'contacted' | 'assessment' | 'negotiating' | 'won' | 'lost'
export type InteractionType = 'call' | 'meeting' | 'visit' | 'email' | 'whatsapp' | 'assessment'
export type ContractStatus = 'draft' | 'active' | 'renewal_due' | 'ended' | 'paused'

export interface Building {
  id: string
  name: string
  address: string
  district: string
  building_type: string
  floors: number | null
  facade_material: string[]
  last_cleaned: string | null
  cleaning_frequency: string | null
  current_provider: string | null
  estimated_value: number | null
  status: BuildingStatus
  lat: number | null
  lng: number | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  name: string
  role: string | null
  company: string | null
  phone: string | null
  email: string | null
  linkedin: string | null
  how_we_met: string | null
  referred_by: string | null
  relationship_status: RelationshipStatus
  preferred_contact: string | null
  decision_power: string | null
  pain_points: string[]
  notes: string | null
  last_contact: string | null
  next_followup: string | null
  created_at: string
  updated_at: string
}

export interface Interaction {
  id: string
  contact_id: string
  building_id: string | null
  type: InteractionType
  summary: string
  outcome: string | null
  next_step: string | null
  followup_date: string | null
  created_at: string
}

export interface Deal {
  id: string
  building_id: string
  contact_id: string
  title: string
  service_type: string[]
  frequency: string | null
  value: number | null
  stage: DealStage
  start_date: string | null
  end_date: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface Contract {
  id: string
  deal_id: string | null
  building_id: string
  contact_id: string
  service_type: string[]
  frequency: string | null
  value: number | null
  monthly_revenue: number | null
  status: ContractStatus
  start_date: string | null
  end_date: string | null
  renewal_date: string | null
  document_url: string | null
  notes: string | null
  created_at: string
}

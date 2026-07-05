-- Bezliny CRM Database Schema
-- Run this in Supabase SQL Editor

-- Buildings registry
CREATE TABLE buildings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  district TEXT NOT NULL DEFAULT 'Śródmieście',
  building_type TEXT DEFAULT 'Office Tower',
  floors INTEGER,
  facade_material TEXT[] DEFAULT '{}',
  last_cleaned DATE,
  cleaning_frequency TEXT,
  current_provider TEXT,
  estimated_value NUMERIC,
  status TEXT NOT NULL DEFAULT 'identified',
  lat NUMERIC,
  lng NUMERIC,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Facility Manager contacts
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  phone TEXT,
  email TEXT,
  linkedin TEXT,
  how_we_met TEXT,
  referred_by UUID REFERENCES contacts(id),
  relationship_status TEXT NOT NULL DEFAULT 'new',
  preferred_contact TEXT,
  decision_power TEXT,
  pain_points TEXT[] DEFAULT '{}',
  notes TEXT,
  last_contact DATE,
  next_followup DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Junction: which FM manages which building
CREATE TABLE building_contacts (
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  PRIMARY KEY (building_id, contact_id)
);

-- Interaction log
CREATE TABLE interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  building_id UUID REFERENCES buildings(id) ON DELETE SET NULL,
  type TEXT NOT NULL DEFAULT 'call',
  summary TEXT NOT NULL,
  outcome TEXT,
  next_step TEXT,
  followup_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Deals pipeline
CREATE TABLE deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  service_type TEXT[] DEFAULT '{}',
  frequency TEXT,
  value NUMERIC,
  stage TEXT NOT NULL DEFAULT 'identified',
  start_date DATE,
  end_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contracts (won deals)
CREATE TABLE contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
  building_id UUID REFERENCES buildings(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  service_type TEXT[] DEFAULT '{}',
  frequency TEXT,
  value NUMERIC,
  monthly_revenue NUMERIC GENERATED ALWAYS AS (
    CASE 
      WHEN frequency = 'monthly' THEN value
      WHEN frequency = 'quarterly' THEN value / 3
      WHEN frequency = 'bi-annual' THEN value / 6
      WHEN frequency = 'annual' THEN value / 12
      ELSE value
    END
  ) STORED,
  status TEXT NOT NULL DEFAULT 'draft',
  start_date DATE,
  end_date DATE,
  renewal_date DATE,
  document_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER buildings_updated_at BEFORE UPDATE ON buildings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER contacts_updated_at BEFORE UPDATE ON contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER deals_updated_at BEFORE UPDATE ON deals FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security (only authenticated users)
ALTER TABLE buildings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE building_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE contracts ENABLE ROW LEVEL SECURITY;

-- Policies: allow all for authenticated users
CREATE POLICY "Authenticated full access" ON buildings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated full access" ON contacts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated full access" ON building_contacts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated full access" ON interactions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated full access" ON deals FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated full access" ON contracts FOR ALL USING (auth.role() = 'authenticated');

-- Indexes for performance
CREATE INDEX idx_buildings_district ON buildings(district);
CREATE INDEX idx_buildings_status ON buildings(status);
CREATE INDEX idx_contacts_relationship ON contacts(relationship_status);
CREATE INDEX idx_contacts_next_followup ON contacts(next_followup);
CREATE INDEX idx_deals_stage ON deals(stage);
CREATE INDEX idx_interactions_contact ON interactions(contact_id);
CREATE INDEX idx_contracts_status ON contracts(status);

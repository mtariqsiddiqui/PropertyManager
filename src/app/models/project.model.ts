export interface Project {
  project_id?: number;
  project_name: string;
}

export interface Block {
  block_id?: number;
  block_name: string;
  project_id?: number;
}

export interface Unit {
  unit_id?: number;
  unit_name: string;
  project_id?: number;
  block_id?: number;
}

export interface UnitType {
  unit_id_type?: number;
  unit_description: string;
  unit_id?: number;
}

export interface BlockConfig {
  numberOfBlocks: number;
  prefixType: 'Block' | 'Building';
  suffixType: 'Letter' | 'Number';
}

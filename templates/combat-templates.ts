export interface CombatTemplate {
  id: string;
  name: string;
  combatStyle: string;
  description: string;
  visualEffects: string[];
  audioSuggestions: string[];
  textOverlayStyles: {
    hook: { font: string; color: string; animation: string };
    caption: { font: string; color: string; position: string };
  };
}

export const COMBAT_TEMPLATES: CombatTemplate[] = [
  {
    id: 'boxing-shadow',
    name: 'Shadow Boxing',
    combatStyle: 'BOXING',
    description: 'Dramatic shadow effects with footwork highlights',
    visualEffects: ['shadow_trail', 'speed_lines', 'impact_sparks'],
    audioSuggestions: ['hard_hype', 'hip_hop_fight', 'epic_drums'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#ff3333', animation: 'type_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'boxing-heavybag',
    name: 'Heavy Bag Power',
    combatStyle: 'BOXING',
    description: 'Power shots on heavy bag with impact effects',
    visualEffects: ['impact_flash', 'shake', 'combo_counter'],
    audioSuggestions: ['heavy_hits', 'warehouse_echo', 'punch_power'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#ff3333', animation: 'slide_up' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'mma-cage',
    name: 'Cage Combat',
    combatStyle: 'MMA',
    description: 'Cage backdrop with ground-and-pound highlights',
    visualEffects: ['cage_bars', 'impact_sparks', 'blood_effect'],
    audioSuggestions: ['cage_fighter', 'heavy_metal_mma', 'octagon_intro'],
    textOverlayStyles: {
      hook: { font: 'Oswald Bold', color: '#ff6600', animation: 'slam' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'mma-clinch',
    name: 'Clinch Control',
    combatStyle: 'MMA',
    description: 'Clinch work with knee and elbow emphasis',
    visualEffects: ['knee_flash', 'elbow_slash', 'control_indicator'],
    audioSuggestions: ['dirty_shots', 'grappling_anthem', 'control'],
    textOverlayStyles: {
      hook: { font: 'Oswald Bold', color: '#ff6600', animation: 'type_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'bjj-mat',
    name: 'BJJ Mat Work',
    combatStyle: 'BJJ',
    description: 'Mat texture with submission highlights',
    visualEffects: ['mat_texture', 'submission_lock', 'tap_effect'],
    audioSuggestions: ['grappling_intense', 'mat_warriors', 'submission'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#00ff88', animation: 'fade_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'bjj-guard',
    name: 'Guard Passing',
    combatStyle: 'BJJ',
    description: 'Guard passing sequences with positional dominance',
    visualEffects: ['passing_trail', 'position_indicator', 'control_timer'],
    audioSuggestions: ['technical_grappling', 'mat_warriors', 'passing'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#00ff88', animation: 'slide_up' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'kickboxing-strikes',
    name: 'Kickboxing Kombos',
    combatStyle: 'KICKBOXING',
    description: 'Multi-hit combinations with defensive shell work',
    visualEffects: ['combo_trail', 'kickflash', 'shell_deflect'],
    audioSuggestions: ['electronic_fight', 'kickboxing_anthem', 'striking_intense'],
    textOverlayStyles: {
      hook: { font: 'Oswald Bold', color: '#ffcc00', animation: 'type_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'wrestling-takedown',
    name: 'Takedown King',
    combatStyle: 'WRESTLING',
    description: 'Takedown setups with pinning combinations',
    visualEffects: ['takedown_trail', 'slam_impact', 'pin_timer'],
    audioSuggestions: ['wrestling_anthem', 'epic_wrestle', 'wwe_style'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#3366ff', animation: 'slam' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'muaythai-elbows',
    name: 'Elbow & Knee',
    combatStyle: 'MUAY_THAI',
    description: 'Elbow slash effects with knee strike emphasis',
    visualEffects: ['elbow_slash', 'knee_flash', 'damage_indicator'],
    audioSuggestions: ['muay_thai_fight', 'thai_boxing', 'elbow_strike'],
    textOverlayStyles: {
      hook: { font: 'Oswald Bold', color: '#ff0066', animation: 'type_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'judo-throws',
    name: 'Judo Throws',
    combatStyle: 'JUDO',
    description: 'Throw sequences with ippon effects',
    visualEffects: ['throw_arc', 'ippon_burst', 'balance_indicator'],
    audioSuggestions: ['judo_anthem', 'japanese_fight', 'throw_power'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#ff3333', animation: 'slam' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
  {
    id: 'taekwondo-kicks',
    name: 'Precision Kicks',
    combatStyle: 'TAEKWONDO',
    description: 'Kick precision with spinning technique highlights',
    visualEffects: ['kick_trail', 'spin_blur', 'precision_marker'],
    audioSuggestions: ['korean_fight', 'spinning_kick', 'taekwondo_anthem'],
    textOverlayStyles: {
      hook: { font: 'Bebas Neue', color: '#00ccff', animation: 'fade_in' },
      caption: { font: 'Roboto Condensed', color: '#ffffff', position: 'bottom' },
    },
  },
];

export function getTemplatesByStyle(combatStyle: string): CombatTemplate[] {
  return COMBAT_TEMPLATES.filter(t => t.combatStyle === combatStyle);
}

export function getTemplateById(id: string): CombatTemplate | undefined {
  return COMBAT_TEMPLATES.find(t => t.id === id);
}

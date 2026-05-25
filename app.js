// ═══════════════════════════════════════════════════════════
// AUDIT DATA — All sections, clauses, references
// ═══════════════════════════════════════════════════════════

let currentAuditId = localStorage.getItem('electro-current-audit-id') || '';

const SECTIONS = {
  'general-safety': {
    label: 'General Safety',
    color: '#00d4ff',
    clauses: [
      { ref: 'GS-01', std: 'IE Rule 50', sev: 'critical', desc: 'Valid Electrical Inspector approval obtained for all LT/HT installations above 500V' },
      { ref: 'GS-02', std: 'IE Rule 51', sev: 'critical', desc: 'Periodic inspection certificate from CEA/Electrical Inspector available and current' },
      { ref: 'GS-03', std: 'IS 5578', sev: 'major', desc: 'All danger boards and warning signs in place at all electrical panels, substations and HT areas' },
      { ref: 'GS-04', std: 'IS 5578', sev: 'major', desc: 'Shock treatment charts (Hindi & English) displayed prominently near HT and LT panels' },
      { ref: 'GS-05', std: 'NBC P8 S2', sev: 'critical', desc: 'Electrical clearance maintained as per IS/NBC: min 600mm front clearance for LT panels' },
      { ref: 'GS-06', std: 'IE Rule 63', sev: 'major', desc: 'All live parts properly guarded/enclosed; no open live conductors accessible' },
      { ref: 'GS-07', std: 'IS 1646', sev: 'major', desc: 'Approved electrical layout drawings available and up to date (As-Built drawings)' },
      { ref: 'GS-08', std: 'CEA 2010', sev: 'critical', desc: 'Licensed Electrical Supervisor / Electrical Engineer in charge appointed with valid license' },
      { ref: 'GS-09', std: 'IE Rule 67', sev: 'critical', desc: 'Permit-to-Work (PTW) system implemented for all HV works and outage tasks' },
      { ref: 'GS-10', std: 'IS 15652', sev: 'major', desc: 'Lockout-Tagout (LOTO) procedures documented and practiced for all isolation tasks' },
      { ref: 'GS-11', std: 'NBC P8 S2', sev: 'major', desc: 'Electrical room doors have self-closing mechanism and are kept locked; access restricted' },
      { ref: 'GS-12', std: 'IS 1646', sev: 'major', desc: 'Electrical maintenance logbook maintained with dates, findings, and corrective actions' },
      { ref: 'GS-13', std: 'IE Rule 65', sev: 'major', desc: 'No unauthorized modification or temporary wiring observed in any electrical installation' },
      { ref: 'GS-14', std: 'IS 5578', sev: 'minor', desc: 'Emergency contact numbers (TNEB/MSEB/utility, fire, electrical supervisor) posted at main panel' },
      { ref: 'GS-15', std: 'NBC P8 S2', sev: 'major', desc: 'Cable schedule, single-line diagram and load schedule updated and available at main LT panel' },
    ]
  },
  'earthing-lightning': {
    label: 'Earthing & Lightning',
    color: '#00d4ff',
    clauses: [
      { ref: 'EL-01', std: 'IS 3043', sev: 'critical', desc: 'System/equipment earthing resistance ≤ 1Ω for HT systems, ≤ 5Ω for LT systems verified by test' },
      { ref: 'EL-02', std: 'IS 3043', sev: 'critical', desc: 'Minimum two independent earth electrodes provided and connected in parallel for main system earth' },
      { ref: 'EL-03', std: 'IS 3043', sev: 'major', desc: 'Earth electrode inspection pit provided; earth connection visible, accessible and tested annually' },
      { ref: 'EL-04', std: 'IS 3043', sev: 'major', desc: 'Size of earth conductor adequate per IS 3043 Table 3 relative to supply cable cross-section' },
      { ref: 'EL-05', std: 'IS 3043', sev: 'critical', desc: 'Neutral earthing provided at transformer LV neutral; solid or resistance earthed as per system design' },
      { ref: 'EL-06', std: 'IS 3043', sev: 'major', desc: 'Earth continuity conductor (ECC) intact and continuous throughout installation; no breaks or bypasses' },
      { ref: 'EL-07', std: 'IS 2309', sev: 'major', desc: 'Lightning protection system (LPS) installed for building >15m height or as per IS 2309 risk assessment' },
      { ref: 'EL-08', std: 'IS 2309', sev: 'major', desc: 'Lightning arresters on HT incoming line; surge protection devices (SPD) on LV panels' },
      { ref: 'EL-09', std: 'IS 2309', sev: 'major', desc: 'Down conductors for LPS properly routed, bonded and connected to earth electrode system' },
      { ref: 'EL-10', std: 'IS 3043', sev: 'major', desc: 'Anti-static earthing provided for fuel storage, flammable chemical areas and DG fuel tanks' },
      { ref: 'EL-11', std: 'NBC P8 S2', sev: 'major', desc: 'Equipotential bonding provided in wet areas (bathrooms, pump rooms, kitchens, medical areas)' },
      { ref: 'EL-12', std: 'IS 3043', sev: 'minor', desc: 'Earth resistance test records available for at least last two years; test done pre-monsoon annually' },
      { ref: 'EL-13', std: 'IE Rule 90', sev: 'major', desc: 'Earthing of all metallic enclosures, cable trays, conduits and equipment frames verified' },
    ]
  },
  'wiring-installation': {
    label: 'Wiring & Installation',
    color: '#00d4ff',
    clauses: [
      { ref: 'WI-01', std: 'IS 732', sev: 'critical', desc: 'Cables selected with adequate current carrying capacity per IS 732 for actual load with derating factors' },
      { ref: 'WI-02', std: 'IS 694', sev: 'major', desc: 'Only BIS-marked cables (IS 694, IS 1554) used; FRLS/LSZH cables in public/fire-sensitive areas' },
      { ref: 'WI-03', std: 'IS 732', sev: 'major', desc: 'Cable routing in fire-rated cable trays where passing through fire compartment walls (1–2 hr rating)' },
      { ref: 'WI-04', std: 'NBC P8 S2', sev: 'major', desc: 'Fire stopping/sealing at all cable penetrations through walls, slabs, and fire compartment barriers' },
      { ref: 'WI-05', std: 'IS 1554', sev: 'major', desc: 'Armoured cable used for all direct-buried or outdoor underground cable installations' },
      { ref: 'WI-06', std: 'IS 732', sev: 'major', desc: 'Voltage drop in sub-circuit not exceeding 3%, and main distribution circuit not exceeding 2.5%' },
      { ref: 'WI-07', std: 'IS 732', sev: 'major', desc: 'Minimum bending radius of cables maintained during installation (typically 12× overall diameter)' },
      { ref: 'WI-08', std: 'NBC P8 S2', sev: 'minor', desc: 'Cable trays at least 300mm away from gas lines, water pipes and air ducts where parallel routed' },
      { ref: 'WI-09', std: 'IS 1667', sev: 'major', desc: 'All conduit installations using ISI-marked PVC/MS conduits with proper bends and saddles' },
      { ref: 'WI-10', std: 'IS 732', sev: 'major', desc: 'Color coding of conductors maintained: Red/Yellow/Blue (phases), Black/Grey (neutral), Green/Yellow (earth)' },
      { ref: 'WI-11', std: 'IS 8061', sev: 'major', desc: 'Ferrule numbering on all control wiring; cables labeled at both ends with permanent markers' },
      { ref: 'WI-12', std: 'NBC P8 S2', sev: 'major', desc: 'No joints in cable within conduit or within the span; joints only in accessible junction boxes' },
      { ref: 'WI-13', std: 'IS 732', sev: 'critical', desc: 'Insulation resistance of all circuits ≥ 1 MΩ (at 500V DC test); test records available' },
      { ref: 'WI-14', std: 'IS 732', sev: 'minor', desc: 'Socket outlets with adequate capacity for connected load; no multi-point adapters used as permanent solution' },
      { ref: 'WI-15', std: 'NBC P8 S2', sev: 'major', desc: 'Junction boxes with IP rating appropriate for installation environment (IP54 for outdoor/wet areas)' },
    ]
  },
  'protection-systems': {
    label: 'Protection Systems',
    color: '#00d4ff',
    clauses: [
      { ref: 'PS-01', std: 'IS 13947', sev: 'critical', desc: 'MCBs/MCCBs with correct breaking capacity rated for available fault level at point of installation' },
      { ref: 'PS-02', std: 'IS 13947', sev: 'critical', desc: 'Earth Leakage Circuit Breaker (ELCB/RCCB) ≤ 30mA provided for all socket outlets and wet areas' },
      { ref: 'PS-03', std: 'IS 13947', sev: 'major', desc: 'Overcurrent protection (OCP) coordination ensured; discrimination between upstream and downstream breakers' },
      { ref: 'PS-04', std: 'IS 2705', sev: 'major', desc: 'Current transformers (CT) and PT ratios correct; metering class vs protection class CTs used properly' },
      { ref: 'PS-05', std: 'IS 3231', sev: 'major', desc: 'Relays (OC, EF, differential) tested and calibrated; relay test records available within last year' },
      { ref: 'PS-06', std: 'IS 13947', sev: 'critical', desc: 'HT VCB/ACB breaker interlocks functional; bus-coupler interlocking verified by test' },
      { ref: 'PS-07', std: 'NBC P8 S2', sev: 'major', desc: 'Surge protection devices (Type 1 + Type 2 SPD) installed at main LT panel and critical sub-panels' },
      { ref: 'PS-08', std: 'IS 8623', sev: 'major', desc: 'All HT/LT switchgear rated for system fault level; short-circuit withstand capacity documented' },
      { ref: 'PS-09', std: 'IS 13947', sev: 'major', desc: 'Motor protection relay (MPR) with phase failure, overload, under-voltage protection for all motors >5kW' },
      { ref: 'PS-10', std: 'IS 3231', sev: 'major', desc: 'Distance protection or differential protection for HT feeders/transformers ≥ 1 MVA provided' },
      { ref: 'PS-11', std: 'IS 13947', sev: 'major', desc: 'All fuses of correct rating and type; no rewirable or makeshift fuses in use anywhere' },
      { ref: 'PS-12', std: 'IS 13947', sev: 'critical', desc: 'Short circuit fault level study (SCFL) conducted; updated within 3 years or after major load change' },
    ]
  },
  'dg-sets': {
    label: 'DG Sets',
    color: '#ff6b35',
    clauses: [
      { ref: 'DG-01', std: 'CPCB Norms', sev: 'critical', desc: 'DG set emission compliance certificate from CPCB/SPCB; emission standards (Tier I/II/III) met' },
      { ref: 'DG-02', std: 'CPCB Norms', sev: 'critical', desc: 'Acoustic enclosure fitted; ambient noise ≤ 75 dB(A) at 1m as per CPCB DG notification 2002' },
      { ref: 'DG-03', std: 'IS 10000', sev: 'critical', desc: 'Anti-paralleling interlock between DG and EB (utility) supply functional; tested and documented' },
      { ref: 'DG-04', std: 'IS 10000', sev: 'critical', desc: 'DG earthing resistance ≤ 1Ω; neutral earthing solidly connected and verified' },
      { ref: 'DG-05', std: 'IS 13991', sev: 'major', desc: 'Automatic Mains Failure (AMF) / ATS panel operational; changeover time ≤ 15 seconds tested' },
      { ref: 'DG-06', std: 'BEE Star', sev: 'major', desc: 'DG operating load factor maintained 70–80% of rated capacity; under/over loading documented' },
      { ref: 'DG-07', std: 'IS 10000', sev: 'major', desc: 'Fuel consumption log maintained; specific fuel consumption (SFC) recorded and within rated limits' },
      { ref: 'DG-08', std: 'PESO Rules', sev: 'critical', desc: 'Day tank capacity ≤ 1000L within building; bulk tank outside with safe bund and vent as per PESO' },
      { ref: 'DG-09', std: 'NBC P4', sev: 'major', desc: 'DG room fire protection: CO2 system or FM200 installed; fire damper on ventilation opening' },
      { ref: 'DG-10', std: 'IS 10000', sev: 'major', desc: 'Exhaust stack height minimum 3m above adjacent roof level; exhaust directed away from openings' },
      { ref: 'DG-11', std: 'IS 10000', sev: 'major', desc: 'Vibration isolation mounts in good condition; anti-vibration pads under DG set; no structural cracks' },
      { ref: 'DG-12', std: 'BEE', sev: 'minor', desc: 'Power factor of DG output monitored; AVR functional and maintaining voltage within ±5% of rated' },
      { ref: 'DG-13', std: 'IS 10000', sev: 'major', desc: 'DG maintenance schedule followed; oil analysis report available; coolant level and belt condition OK' },
      { ref: 'DG-14', std: 'CPCB', sev: 'major', desc: 'Used oil disposal records maintained; no oil spillage in DG room; oil drip tray in place' },
      { ref: 'DG-15', std: 'IS 13991', sev: 'critical', desc: 'Load bank testing of DG at rated kVA annually; test records with voltage/frequency/load readings available' },
    ]
  },
  'transformers': {
    label: 'Transformers',
    color: '#a78bfa',
    clauses: [
      { ref: 'TX-01', std: 'IS 2026', sev: 'critical', desc: 'Transformer nameplate data correct; operating voltage, kVA rating, vector group as per design' },
      { ref: 'TX-02', std: 'IS 1866', sev: 'critical', desc: 'Transformer oil BDV (Breakdown Voltage) ≥ 40 kV (new oil) or ≥ 30 kV (service); tested annually' },
      { ref: 'TX-03', std: 'PCB Rules', sev: 'critical', desc: 'Transformer oil tested for PCB (Polychlorinated Biphenyl); PCB-free certificate available' },
      { ref: 'TX-04', std: 'IS 10028', sev: 'major', desc: 'Transformer room ventilation adequate; ambient temperature inside room ≤ 45°C during operation' },
      { ref: 'TX-05', std: 'IS 2026', sev: 'critical', desc: 'Oil-filled transformer: oil containment bund/sump of 110% oil volume capacity provided' },
      { ref: 'TX-06', std: 'IS 1866', sev: 'major', desc: 'Buchholz relay, PRV, OTI, WTI alarms/trips connected, calibrated and tested' },
      { ref: 'TX-07', std: 'IS 2026', sev: 'major', desc: 'Silica gel breather active (blue/orange); moisture indicator glass in good condition' },
      { ref: 'TX-08', std: 'IS 2026', sev: 'critical', desc: 'Transformer winding insulation resistance (IR) test: value ≥ 500 MΩ; records from last 2 years' },
      { ref: 'TX-09', std: 'BEE Star', sev: 'major', desc: 'Transformer loading 70–80% of rated kVA; total harmonic distortion (THD) measured and ≤ 5%' },
      { ref: 'TX-10', std: 'IS 2026', sev: 'major', desc: 'OLTC (On-Load Tap Changer) operation log maintained; contact resistance measurement done annually' },
      { ref: 'TX-11', std: 'NBC P4', sev: 'major', desc: 'Fire protection for transformer room: deluge/CO2 system; flame-proof wall or 2-hour fire barrier' },
      { ref: 'TX-12', std: 'IS 2026', sev: 'major', desc: 'Termination cables with proper gland; cable boxes sealed against moisture ingress' },
      { ref: 'TX-13', std: 'IS 1866', sev: 'major', desc: 'Dissolved Gas Analysis (DGA) of transformer oil done annually; no fault gas trends observed' },
      { ref: 'TX-14', std: 'PCB Rules', sev: 'critical', desc: 'Transformer oil spillage/leakage management plan available; no ground contamination observed' },
      { ref: 'TX-15', std: 'IS 2026', sev: 'minor', desc: 'Transformer efficiency tested or rated efficiency (BEE 2-star or above) confirmed from manufacturer' },
    ]
  },
  'hvac': {
    label: 'HVAC Systems',
    color: '#00d4ff',
    clauses: [
      { ref: 'HV-01', std: 'BEE Star', sev: 'major', desc: 'Air-conditioning units: BEE 3-star or above rated (ISEER/EER value documented); non-compliant units identified for replacement' },
      { ref: 'HV-02', std: 'ECBC 2017', sev: 'major', desc: 'Chiller COP ≥ 5.0 (for centrifugal) or ≥ 4.2 (screw type) as per ECBC energy efficiency requirements' },
      { ref: 'HV-03', std: 'IS 1239', sev: 'major', desc: 'Refrigerant type documented; ODP (Ozone Depletion Potential) refrigerants (R-22) phase-out plan in place' },
      { ref: 'HV-04', std: 'NBC P8 S1', sev: 'major', desc: 'Fresh air supply ≥ 10% of total air supply or as per ASHRAE 62.1; CO2 levels in occupied areas ≤ 1000 ppm' },
      { ref: 'HV-05', std: 'BEE ECBC', sev: 'major', desc: 'Variable Frequency Drives (VFD) installed on AHU fans, chilled water pumps, condenser water pumps >7.5kW' },
      { ref: 'HV-06', std: 'IE Rules', sev: 'critical', desc: 'HVAC electrical connections: earthing of compressors, AHUs, chiller panels verified; no exposed conductors' },
      { ref: 'HV-07', std: 'NBC P8 S1', sev: 'major', desc: 'Ventilation system for electrical rooms, server rooms, DG rooms, battery rooms — capacity and operation verified' },
      { ref: 'HV-08', std: 'NBC P4', sev: 'critical', desc: 'Fire dampers on all HVAC ducts passing through fire compartment walls; damper operation tested' },
      { ref: 'HV-09', std: 'ECBC', sev: 'major', desc: 'Automatic temperature controls (BMS/SCADA) operational; setpoints optimized (24–26°C comfort, 18°C server)' },
      { ref: 'HV-10', std: 'IS 5111', sev: 'major', desc: 'Motor control panel for HVAC: proper overload protection, phase sequence relay, MCCB with correct rating' },
      { ref: 'HV-11', std: 'BEE', sev: 'minor', desc: 'Cooling tower drift eliminators in good condition; water treatment records maintained; TDS within limits' },
      { ref: 'HV-12', std: 'BEE ECBC', sev: 'major', desc: 'Thermal insulation on all chilled water piping adequate and intact (no moisture/condensation on pipes)' },
      { ref: 'HV-13', std: 'NBC P8', sev: 'minor', desc: 'HVAC maintenance log: filter cleaning/replacement schedule, coil cleaning, refrigerant charge records' },
    ]
  },
  'pumps': {
    label: 'Pumps & Motors',
    color: '#00ff8c',
    clauses: [
      { ref: 'PM-01', std: 'BEE IE3', sev: 'major', desc: 'All motors >0.75kW are IE2 efficiency class or above; motors >37kW are IE3 (as per BEE mandatory schedule)' },
      { ref: 'PM-02', std: 'IS 325', sev: 'critical', desc: 'Motor nameplate data matches application: voltage, HP/kW, RPM, frame size, insulation class (min F)' },
      { ref: 'PM-03', std: 'IS 9283', sev: 'major', desc: 'Pump operated near BEP (Best Efficiency Point); pump curve vs system curve available and reviewed' },
      { ref: 'PM-04', std: 'BEE', sev: 'major', desc: 'VFD installed on pumps >7.5kW with variable flow requirement; VFD operating correctly and energy saving measured' },
      { ref: 'PM-05', std: 'IS 325', sev: 'critical', desc: 'Motor insulation resistance ≥ 1 MΩ (at 500V DC); PI (Polarization Index) ≥ 2 for motors >25kW' },
      { ref: 'PM-06', std: 'IS 325', sev: 'major', desc: 'Motor protection: thermal overload relay correctly set to 1.05–1.1× FLA; phase failure relay provided' },
      { ref: 'PM-07', std: 'IS 1520', sev: 'major', desc: 'Pump mechanical seals/glands in good condition; no excessive leakage from gland packing' },
      { ref: 'PM-08', std: 'IS 325', sev: 'major', desc: 'Motor vibration levels within limits: ≤ 4.5 mm/s RMS for motors < 15kW; bearing temperature ≤ 90°C' },
      { ref: 'PM-09', std: 'IS 325', sev: 'major', desc: 'Motor alignment (direct coupled or belt driven) checked and within tolerance; flexible coupling in good condition' },
      { ref: 'PM-10', std: 'BEE', sev: 'major', desc: 'Power factor of motor measured at actual load ≥ 0.85; power factor correction capacitors provided if needed' },
      { ref: 'PM-11', std: 'IS 325', sev: 'major', desc: 'Earth continuity from motor body to main earth verified; earth conductor size adequate per IS 3043' },
      { ref: 'PM-12', std: 'IS 9283', sev: 'minor', desc: 'Pump head and flow measurement done periodically; pump efficiency calculated and recorded' },
      { ref: 'PM-13', std: 'IS 325', sev: 'minor', desc: 'Motor rewinding history documented; rewound motors tested for efficiency before reuse' },
      { ref: 'PM-14', std: 'BEE', sev: 'major', desc: 'Energy meters installed on all major pump motor feeders; kWh/m³ or specific energy calculated' },
    ]
  },
  'energy-audit': {
    label: 'BEE Energy Audit',
    color: '#ffb800',
    clauses: [
      { ref: 'EA-01', std: 'EC Act 2001', sev: 'critical', desc: 'Designated Consumer (DC) designation confirmed; mandatory energy audit conducted by BEE-accredited EA' },
      { ref: 'EA-02', std: 'EC Act 2001', sev: 'critical', desc: 'Energy Audit Report submitted to BEE within prescribed timeline; recommendations implemented or action plan available' },
      { ref: 'EA-03', std: 'BEE', sev: 'major', desc: 'Energy Manager appointed (Certified Energy Manager/Auditor); role documented and empowered' },
      { ref: 'EA-04', std: 'ISO 50001', sev: 'major', desc: 'Energy Management System (EnMS) established; energy policy, objectives and targets defined' },
      { ref: 'EA-05', std: 'BEE ECBC', sev: 'major', desc: 'Energy Performance Index (EPI) established and tracked monthly; trend improving year-on-year' },
      { ref: 'EA-06', std: 'BEE', sev: 'major', desc: 'Maximum demand (MD) management: power factor maintained ≥ 0.95; MD within sanctioned limit' },
      { ref: 'EA-07', std: 'EC Act', sev: 'major', desc: 'Automatic Power Factor Correction (APFC) panel installed, operational; target PF ≥ 0.97' },
      { ref: 'EA-08', std: 'BEE', sev: 'major', desc: 'Energy metering at all major consuming equipment (feeders): transformer, DG, HVAC, lighting, pumps' },
      { ref: 'EA-09', std: 'ECBC', sev: 'major', desc: 'Building automation/energy monitoring system (BMS/SCADA) operational with energy dashboards' },
      { ref: 'EA-10', std: 'BEE', sev: 'minor', desc: 'Renewable energy (solar/wind) integration: rooftop solar commissioned; net metering connection made' },
      { ref: 'EA-11', std: 'EC Act', sev: 'major', desc: 'Load scheduling implemented: heavy loads shifted to off-peak hours; night/weekend load curtailment' },
      { ref: 'EA-12', std: 'BEE', sev: 'minor', desc: 'Waste heat recovery: DG exhaust heat utilized; chiller heat rejection reused where feasible' },
      { ref: 'EA-13', std: 'BEE', sev: 'major', desc: 'Annual energy consumption report prepared and submitted; PAT (Perform Achieve Trade) targets met' },
    ]
  },
  'pcb-environment': {
    label: 'PCB Environment',
    color: '#00ff8c',
    clauses: [
      { ref: 'EN-01', std: 'EPA 1986', sev: 'critical', desc: 'Consent to Operate (CTO) from SPCB/CPCB valid and displayed; conditions of consent complied with' },
      { ref: 'EN-02', std: 'HW Rules 2016', sev: 'critical', desc: 'Hazardous waste (transformer oil, used oil, batteries) registered with SPCB; manifest system maintained' },
      { ref: 'EN-03', std: 'HW Rules 2016', sev: 'critical', desc: 'Authorised recycler/TSDF for disposal of used transformer oil, battery acid, and spent chemicals identified' },
      { ref: 'EN-04', std: 'E-Waste 2016', sev: 'major', desc: 'E-waste management plan: old electrical equipment, PCBs, wiring disposed through authorised PRO/recycler' },
      { ref: 'EN-05', std: 'E-Waste 2016', sev: 'major', desc: 'Producer Responsibility Organisation (PRO) enrollment for electrical equipment procurement and disposal' },
      { ref: 'EN-06', std: 'Noise Rules 2000', sev: 'major', desc: 'Ambient noise levels measured: Industrial zone ≤ 75 dB(A) day, 70 dB(A) night; residential areas accordingly' },
      { ref: 'EN-07', std: 'CPCB', sev: 'major', desc: 'Stack emission monitoring of DG sets: PM ≤ 150 mg/Nm³, SO₂ ≤ 600 mg/Nm³, NOₓ ≤ 600 mg/Nm³' },
      { ref: 'EN-08', std: 'PCB Regs', sev: 'critical', desc: 'PCB-containing equipment (old transformers/capacitors) identified; phase-out/replacement plan submitted to SPCB' },
      { ref: 'EN-09', std: 'HW Rules', sev: 'major', desc: 'Used/waste oil storage: labelled containers, drip trays, secondary containment; no soil contamination' },
      { ref: 'EN-10', std: 'EPA 1986', sev: 'major', desc: 'Ambient air quality monitored quarterly; SPM, SO₂, NOₓ within National Ambient Air Quality Standards' },
      { ref: 'EN-11', std: 'HW Rules', sev: 'critical', desc: 'Annual return to SPCB submitted on schedule; waste inventory matches records and physical stocks' },
      { ref: 'EN-12', std: 'ODS Rules', sev: 'major', desc: 'Refrigerant log maintained; R-22 quantities tracked; recovery equipment available; no venting to atmosphere' },
    ]
  },
  'fire-safety': {
    label: 'Fire Safety (NBC)',
    color: '#ff3b5c',
    clauses: [
      { ref: 'FS-01', std: 'NBC P4', sev: 'critical', desc: 'NOC from Fire Department obtained and valid; fire safety certificate renewed annually' },
      { ref: 'FS-02', std: 'NBC P4', sev: 'critical', desc: 'Fire detection system (smoke/heat detectors) connected to FACP; coverage as per NBC Part 4 Cl.5' },
      { ref: 'FS-03', std: 'NBC P4', sev: 'critical', desc: 'Automatic fire suppression system in HT room, DG room, UPS room, server room — operational and commissioned' },
      { ref: 'FS-04', std: 'IS 2190', sev: 'critical', desc: 'Fire extinguishers: correct type (CO2 for electrical fires), adequate quantity, tested within last year' },
      { ref: 'FS-05', std: 'NBC P4', sev: 'critical', desc: 'Emergency exit signs illuminated; escape routes unobstructed; width of escape corridors ≥ 1.5m' },
      { ref: 'FS-06', std: 'NBC P4', sev: 'major', desc: 'Emergency lighting: battery-backed lighting in escape routes; minimum 10 lux on escape path' },
      { ref: 'FS-07', std: 'NBC P4', sev: 'critical', desc: 'Main electrical panel isolator accessible and labeled; emergency power cut-off operational' },
      { ref: 'FS-08', std: 'IS 1646', sev: 'major', desc: 'Cable route integrity: fire barriers at all penetrations; intumescent seals fitted and documented' },
      { ref: 'FS-09', std: 'NBC P4', sev: 'major', desc: 'Fire mock drill conducted at least twice a year; records with date, participants, findings available' },
      { ref: 'FS-10', std: 'NBC P4', sev: 'major', desc: 'Fire hydrant system: pressure ≥ 3.5 kg/cm² at terrace level; pumps tested monthly; hose reels functional' },
      { ref: 'FS-11', std: 'NBC P4', sev: 'major', desc: 'Sprinkler system (if provided): coverage, water supply tested; no obstruction within 450mm of sprinkler heads' },
      { ref: 'FS-12', std: 'IS 2217', sev: 'minor', desc: 'Foam system for transformer/DG/fuel areas: medium-expansion foam system commissioned and tested' },
      { ref: 'FS-13', std: 'NBC P4', sev: 'critical', desc: 'No storage of combustible materials in electrical rooms, DG room, substation, or transformer bays' },
      { ref: 'FS-14', std: 'NBC P4', sev: 'major', desc: 'Smoke exhaust/pressurization system for staircases and basements: operation tested and documented' },
    ]
  },
  'ppe-safety': {
    label: 'PPE & Safety',
    color: '#ffb800',
    clauses: [
      { ref: 'PP-01', std: 'IS 1989', sev: 'critical', desc: 'Insulated rubber gloves (Class 2: 17kV test) available and within test date for HT work; tested every 6 months' },
      { ref: 'PP-02', std: 'IS 1989', sev: 'critical', desc: 'Insulated rubber mats (IS 15652) of appropriate class laid at all HT and LT panel fronts (≥ 900mm wide)' },
      { ref: 'PP-03', std: 'IS 1989', sev: 'major', desc: 'Insulating pole/discharge rod, HV tester, voltage indicators available for HT switching operations' },
      { ref: 'PP-04', std: 'Factories Act', sev: 'major', desc: 'Safety helmets (IS 2925), safety shoes (IS 5852), arc flash suits (cal/cm² rating documented) provided to all electrical staff' },
      { ref: 'PP-05', std: 'IS 15652', sev: 'major', desc: 'Arc flash hazard analysis conducted; arc flash labels with incident energy on all panels ≥ 240V' },
      { ref: 'PP-06', std: 'IE Rule 67', sev: 'critical', desc: 'Earthing leads / earth clamps available for temporary earthing after isolation during maintenance' },
      { ref: 'PP-07', std: 'CEA 2010', sev: 'major', desc: 'Electrical safety training records: all electrical staff trained; refresher training every 2 years documented' },
      { ref: 'PP-08', std: 'Factories Act', sev: 'major', desc: 'First aid kit with burns treatment supplies accessible near each electrical room; trained first aider assigned' },
      { ref: 'PP-09', std: 'IS 15652', sev: 'critical', desc: 'Shock treatment poster and CPR procedure displayed; AED (defibrillator) accessible within 3 minutes response time' },
      { ref: 'PP-10', std: 'IE Rule 29', sev: 'major', desc: 'Electrical accidents/near-misses logged and reported to CEA within 24 hours; investigation records available' },
      { ref: 'PP-11', std: 'IS 15652', sev: 'major', desc: 'Barricading system for live work zones; safety barriers and danger tape available for isolation of work area' },
      { ref: 'PP-12', std: 'BIS', sev: 'minor', desc: 'PPE inspection register maintained; damaged or out-of-test-date PPE disposed and replaced promptly' },
    ]
  },
  'mdb-panels': {
    label: 'MDB / Panels',
    color: '#00d4ff',
    clauses: [
      { ref: 'MB-01', std: 'IS 8623', sev: 'critical', desc: 'Main LT Panel (MDB) designed and type-tested as per IS 8623; Form of Separation documented' },
      { ref: 'MB-02', std: 'IS 13947', sev: 'major', desc: 'Panel busbar rated for system fault current; busbar joints tight and torqued; no discoloration from overheating' },
      { ref: 'MB-03', std: 'IS 8623', sev: 'major', desc: 'Panel IP rating appropriate: IP42 minimum indoors; IP54 for wet/outdoor locations; gaskets intact' },
      { ref: 'MB-04', std: 'NBC P8', sev: 'major', desc: 'Clear space maintained: 1000mm front, 600mm rear/sides; nothing stored against or on panels' },
      { ref: 'MB-05', std: 'IS 8623', sev: 'major', desc: 'Terminal markings clear and legible; circuit directory on panel door accurate and up to date' },
      { ref: 'MB-06', std: 'IS 13947', sev: 'critical', desc: 'Incomer MCCB rating does not exceed cable ampacity; upstream-downstream discrimination maintained' },
      { ref: 'MB-07', std: 'IS 8623', sev: 'major', desc: 'Panel internal wiring neat; cable trunking used; no loose wires; all unused knockouts sealed' },
      { ref: 'MB-08', std: 'IS 13947', sev: 'major', desc: 'All circuit breakers load-tested or rated; tripping tested (at least sampled 10%) annually' },
      { ref: 'MB-09', std: 'BEE', sev: 'minor', desc: 'Energy meter (class 0.5 or better) with CT/PT on main incomer; meter calibration certificate current' },
      { ref: 'MB-10', std: 'IS 8623', sev: 'major', desc: 'APFC panel capacitor bank: capacitor condition, contactor operation, THD filter if harmonic load present' },
      { ref: 'MB-11', std: 'NBC P8', sev: 'critical', desc: 'HT RMU/panel: SF6 gas pressure normal; cable termination boxes sealed; interlock operational' },
      { ref: 'MB-12', std: 'IS 8061', sev: 'minor', desc: 'Control wiring ferrules and terminal block labeling complete; drawing matches physical configuration' },
    ]
  },
  'ups-batteries': {
    label: 'UPS & Batteries',
    color: '#00ff8c',
    clauses: [
      { ref: 'UB-01', std: 'IS 16046', sev: 'major', desc: 'UPS capacity adequate for connected critical load with 30% spare; input/output voltage regulation ±2%' },
      { ref: 'UB-02', std: 'IS 1651', sev: 'critical', desc: 'Battery room ventilation: H₂ gas dilution; explosion-proof fittings; no ignition sources in battery room' },
      { ref: 'UB-03', std: 'IS 1651', sev: 'critical', desc: 'Battery specific gravity 1.21–1.26 (charged); cell voltage 2.0–2.1V/cell; electrolyte level marked' },
      { ref: 'UB-04', std: 'IS 1651', sev: 'major', desc: 'Battery capacity test (discharge at C10 or C20 rate) performed annually; capacity ≥ 80% of rated' },
      { ref: 'UB-05', std: 'IS 16046', sev: 'critical', desc: 'UPS bypass switch operational; bypass mode tested; critical load transfers without interruption' },
      { ref: 'UB-06', std: 'NBC P8', sev: 'major', desc: 'Battery room floor: acid-resistant coating; spill containment; eyewash station within 10 seconds reach' },
      { ref: 'UB-07', std: 'IS 16046', sev: 'major', desc: 'UPS output THD ≤ 5% at full linear load; harmonic filter operational if connected to sensitive equipment' },
      { ref: 'UB-08', std: 'BEE', sev: 'major', desc: 'UPS efficiency ≥ 94% at 50% load; energy-saving ECO mode assessed for non-critical loads' },
      { ref: 'UB-09', std: 'IS 1651', sev: 'major', desc: 'Float charging voltage correctly set (2.23V/cell); equalizing charge schedule maintained' },
      { ref: 'UB-10', std: 'E-Waste 2016', sev: 'major', desc: 'Battery disposal through authorized lead recycler (SPCB approved); battery exchange receipt available' },
      { ref: 'UB-11', std: 'IS 1651', sev: 'minor', desc: 'Corroded/bulging battery cells identified and replaced; intercell connection resistance measured annually' },
    ]
  },
  'lighting': {
    label: 'Lighting Systems',
    color: '#ffb800',
    clauses: [
      { ref: 'LT-01', std: 'NBC P8 S1', sev: 'major', desc: 'Illuminance levels meet NBC/SP 72 requirements: offices ≥500 lux, corridors ≥100 lux, parking ≥50 lux' },
      { ref: 'LT-02', std: 'BEE ECBC', sev: 'major', desc: 'Lighting Power Density (LPD) ≤ NBC limits: office ≤ 10 W/m², industrial ≤ 12 W/m², common areas ≤ 5 W/m²' },
      { ref: 'LT-03', std: 'BEE', sev: 'major', desc: 'LED luminaires used throughout; no T12/T8 fluorescent or incandescent lamps in use (mandated by BEE)' },
      { ref: 'LT-04', std: 'ECBC', sev: 'minor', desc: 'Daylight sensors and occupancy sensors installed in perimeter zones and corridors; auto-dimming operational' },
      { ref: 'LT-05', std: 'NBC P8 S1', sev: 'major', desc: 'Emergency/escape route lighting: maintained illuminance ≥ 10 lux; battery backup ≥ 3 hours' },
      { ref: 'LT-06', std: 'IS 1944', sev: 'major', desc: 'External/outdoor lighting: IP65-rated luminaires; control by timer/photocell; no over-lighting of areas' },
      { ref: 'LT-07', std: 'NBC P8 S1', sev: 'major', desc: 'Glare index (UGR) within limits for task areas; luminaire CRI ≥ 80 for workspaces' },
      { ref: 'LT-08', std: 'IS 5572', sev: 'critical', desc: 'Hazardous area lighting: flameproof/Zone-1/Zone-2 rated fixtures in DG room, fuel storage, battery room' },
      { ref: 'LT-09', std: 'BEE', sev: 'minor', desc: 'Lighting energy sub-metered separately; kWh/m² tracked monthly and benchmarked against ECBC norms' },
      { ref: 'LT-10', std: 'NBC P8', sev: 'major', desc: 'Control wiring for lighting panels: MCB protection on each circuit; load balanced across three phases (≤ 10% imbalance)' },
      { ref: 'LT-11', std: 'IS 3646', sev: 'minor', desc: 'Lamp replacement schedule maintained; group relamping practiced to maintain design illuminance levels' },
    ]
  },
};

// ═══════════════════════════════════════════════════════════
// BUILD TABLE ROWS
// ═══════════════════════════════════════════════════════════

function buildTables() {
  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    const tbody = document.getElementById('rows-' + secId);
    if (!tbody) return;
    sec.clauses.forEach(c => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><span class="clause-ref">${c.ref}</span></td>
        <td><span class="clause-desc">${c.desc}</span></td>
        <td><span class="clause-std">${c.std}</span></td>
        <td>
          <span class="severity-dot sev-${c.sev}"></span>
          <span style="font-size:10px; font-family:'IBM Plex Mono',monospace; color:var(--text-dim); text-transform:capitalize;">${c.sev}</span>
        </td>
        <td>
          <select class="status-select" data-sec="${secId}" data-ref="${c.ref}" data-sev="${c.sev}" onchange="onStatusChange(this)">
            <option value="">— Select —</option>
            <option value="C">✓ Compliant</option>
            <option value="NC">✗ Non-Conform</option>
            <option value="OBS">⊛ Observation</option>
            <option value="NA">○ Not Applicable</option>
          </select>
        </td>
        <td>
          <input type="text" class="reading-value" placeholder="—" data-sec="${secId}" data-ref="${c.ref}" title="Enter measured value">
        </td>
        <td>
          <input type="text" class="remarks-input" placeholder="Add remarks…" data-sec="${secId}" data-ref="${c.ref}">
        </td>
      `;
      tbody.appendChild(row);

      // Create details row
      const detailsRow = document.createElement('tr');
      detailsRow.className = 'nc-details-row';
      detailsRow.id = 'details-row-' + c.ref;
      detailsRow.style.display = 'none';
      detailsRow.style.background = 'rgba(255,255,255,0.01)';
      
      const sevColor = c.sev === 'critical' ? 'var(--red)' : c.sev === 'major' ? 'var(--yellow)' : 'var(--blue)';

      detailsRow.innerHTML = `
        <td colspan="7" style="padding: 10px 16px 16px 40px; border-top: none;">
          <div class="nc-details-box" style="
            background: var(--surface2);
            border: 1px solid var(--border);
            border-left: 3px solid ${sevColor};
            border-radius: 6px;
            padding: 16px;
          ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px;">
                Detailed Non-Conformance / Observation Record
              </span>
              <button class="btn btn-outline" style="font-size: 10px; padding: 4px 10px; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: var(--bg); border: none; border-radius: 4px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 4px;" onclick="generateAIFinding('${secId}', '${c.ref}')">
                ✨ Ask Gemini AI (1-Click CAPA)
              </button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
              <div>
                <label style="font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">
                  Finding Details (What is the deficiency?)
                </label>
                <textarea class="nc-finding-input" data-sec="${secId}" data-ref="${c.ref}" placeholder="Describe the specific finding details..." style="width:100%; height:70px; background:var(--surface); border:1px solid var(--border); color:var(--text); padding:8px; border-radius:4px; font-family:sans-serif; font-size:12px; outline:none; resize:vertical;"></textarea>
              </div>
              <div>
                <label style="font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">
                  Evidence (What is the proof / observation?)
                </label>
                <textarea class="nc-evidence-input" data-sec="${secId}" data-ref="${c.ref}" placeholder="e.g. Photo Ref 03, Mat thickness measured 1.2mm instead of 2.0mm, Mat is cracked near breaker..." style="width:100%; height:70px; background:var(--surface); border:1px solid var(--border); color:var(--text); padding:8px; border-radius:4px; font-family:sans-serif; font-size:12px; outline:none; resize:vertical;"></textarea>
              </div>
            </div>
            <div>
              <label style="font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--text-muted); text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">
                Recommended Corrective & Preventive Action (CAPA)
              </label>
              <input type="text" class="nc-capa-input" data-sec="${secId}" data-ref="${c.ref}" placeholder="Provide detailed corrective action recommendations..." style="width:100%; background:var(--surface); border:1px solid var(--border); color:var(--text); padding:8px; border-radius:4px; font-family:sans-serif; font-size:12px; outline:none;">
            </div>
          </div>
        </td>
      `;
      tbody.appendChild(detailsRow);
    });
  });
}

// ═══════════════════════════════════════════════════════════
// STATUS CHANGE HANDLER
// ═══════════════════════════════════════════════════════════

function onStatusChange(sel) {
  const val = sel.value;
  const ref = sel.getAttribute('data-ref');
  sel.className = 'status-select';
  if (val) sel.classList.add('status-' + val);
  
  // Toggle detailed row
  const detailsRow = document.getElementById('details-row-' + ref);
  if (detailsRow) {
    if (val === 'NC' || val === 'OBS') {
      detailsRow.style.display = 'table-row';
    } else {
      detailsRow.style.display = 'none';
    }
  }

  updateScores();
  updateNCReport();
}

// ═══════════════════════════════════════════════════════════
// SCORES
// ═══════════════════════════════════════════════════════════

function updateScores() {
  let totalC = 0, totalNC = 0, totalOBS = 0, totalNA = 0;
  let totalAnswered = 0;
  let critNC = 0, majorNC = 0;

  const catScores = {};

  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    const selects = document.querySelectorAll(`select[data-sec="${secId}"]`);
    let c = 0, nc = 0, obs = 0, na = 0;
    selects.forEach(s => {
      if (s.value === 'C') c++;
      else if (s.value === 'NC') nc++;
      else if (s.value === 'OBS') obs++;
      else if (s.value === 'NA') na++;
    });
    const answered = c + nc + obs + na;
    const eligible = c + nc + obs; // NA excluded from score
    const pct = eligible > 0 ? Math.round((c / eligible) * 100) : null;
    catScores[secId] = { c, nc, obs, na, pct, answered, total: selects.length };

    totalC += c; totalNC += nc; totalOBS += obs; totalNA += na;
    totalAnswered += answered;

    // critical/major NC count
    if (nc > 0) {
      sec.clauses.forEach(cl => {
        const s = document.querySelector(`select[data-sec="${secId}"][data-ref="${cl.ref}"]`);
        if (s && s.value === 'NC') {
          if (cl.sev === 'critical') critNC++;
          else if (cl.sev === 'major') majorNC++;
        }
      });
    }

    // Update sidebar
    const sb = document.getElementById('sb-' + secId);
    if (sb) {
      if (pct === null) {
        sb.textContent = '—';
        sb.className = 'sidebar-score score-na';
      } else {
        sb.textContent = pct + '%';
        sb.className = 'sidebar-score ' + (pct >= 85 ? 'score-good' : pct >= 60 ? 'score-warn' : 'score-bad');
      }
    }

    // Section score badge
    const badge = document.getElementById('score-badge-' + secId);
    if (badge) {
      if (pct === null) {
        badge.textContent = '—';
        badge.style.color = 'var(--text-muted)';
        badge.style.borderColor = 'var(--border)';
      } else {
        badge.textContent = pct + '%';
        badge.style.color = pct >= 85 ? 'var(--green)' : pct >= 60 ? 'var(--yellow)' : 'var(--red)';
        badge.style.borderColor = pct >= 85 ? 'rgba(0,255,140,0.3)' : pct >= 60 ? 'rgba(255,184,0,0.3)' : 'rgba(255,59,92,0.3)';
      }
    }
  });

  // Overall score
  const totalEligible = totalC + totalNC + totalOBS;
  const overallPct = totalEligible > 0 ? Math.round((totalC / totalEligible) * 100) : null;

  document.getElementById('tot-c').textContent = totalC;
  document.getElementById('tot-nc').textContent = totalNC;
  document.getElementById('tot-obs').textContent = totalOBS;
  document.getElementById('tot-na').textContent = totalNA;
  document.getElementById('dash-total-checks').textContent = Object.values(SECTIONS).reduce((a, s) => a + s.clauses.length, 0);
  document.getElementById('dash-critical-nc').textContent = critNC;
  document.getElementById('dash-major-nc').textContent = majorNC;

  const pctEl = document.getElementById('overall-pct');
  const tagEl = document.getElementById('compliance-tag');
  const ring = document.getElementById('ring-progress');
  const circumference = 351.86;

  if (overallPct !== null) {
    pctEl.textContent = overallPct + '%';
    const offset = circumference - (overallPct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = overallPct >= 85 ? '#00ff8c' : overallPct >= 60 ? '#ffb800' : '#ff3b5c';

    tagEl.textContent = overallPct >= 85 ? '✓ COMPLIANT' : overallPct >= 60 ? '⚠ PARTIALLY COMPLIANT' : '✗ NON-COMPLIANT';
    tagEl.className = 'compliance-tag ' + (overallPct >= 85 ? 'tag-compliant' : overallPct >= 60 ? 'tag-partial' : 'tag-noncompliant');
  } else {
    pctEl.textContent = '—';
    ring.style.strokeDashoffset = circumference;
    tagEl.textContent = 'NOT STARTED';
    tagEl.className = 'compliance-tag tag-partial';
  }

  // Category scores grid
  const grid = document.getElementById('cat-scores-grid');
  grid.innerHTML = '';
  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    const d = catScores[secId];
    const pct = d.pct;
    const color = pct === null ? '#4a5568' : pct >= 85 ? '#00ff8c' : pct >= 60 ? '#ffb800' : '#ff3b5c';
    grid.innerHTML += `
      <div class="cat-score-item">
        <div class="cat-score-header">
          <span class="cat-name">${sec.label.toUpperCase()}</span>
          <span class="cat-pct" style="color:${color}">${pct !== null ? pct + '%' : '—'}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct || 0}%; background:${color}"></div>
        </div>
        <div style="font-family:'IBM Plex Mono',monospace; font-size:9px; color:var(--text-muted); margin-top:4px;">
          ${d.c}C · ${d.nc}NC · ${d.obs}OBS · ${d.na}NA / ${d.total} total
        </div>
      </div>
    `;
  });

  // NC sidebar badge
  document.getElementById('sb-nc-count').textContent = totalNC + ' NC';
  document.getElementById('sb-nc-count').className = 'sidebar-score ' + (totalNC === 0 ? 'score-good' : totalNC <= 5 ? 'score-warn' : 'score-bad');
}

// ═══════════════════════════════════════════════════════════
// NC REPORT
// ═══════════════════════════════════════════════════════════

function updateNCReport() {
  const ncList = document.getElementById('nc-list-container');
  const obsList = document.getElementById('obs-list-container');
  const ncCount = document.getElementById('nc-total-count');
  const obsCount = document.getElementById('obs-total-count');

  let ncs = [], obss = [];

  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    sec.clauses.forEach(cl => {
      const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const rem = document.querySelector(`input.remarks-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      if (!sel) return;
      const remark = rem ? rem.value : '';
      if (sel.value === 'NC') {
        ncs.push({ ref: cl.ref, desc: cl.desc, sev: cl.sev, std: cl.std, sec: sec.label, remark });
      } else if (sel.value === 'OBS') {
        obss.push({ ref: cl.ref, desc: cl.desc, sev: cl.sev, std: cl.std, sec: sec.label, remark });
      }
    });
  });

  ncCount.textContent = ncs.length + ' NC Found';
  obsCount.textContent = obss.length + ' Observations';

  if (ncs.length === 0) {
    ncList.innerHTML = '<div class="empty-nc">✓ No non-conformances recorded yet.</div>';
  } else {
    ncList.innerHTML = ncs.map(n => `
      <div class="nc-item ${n.sev === 'critical' ? 'critical' : n.sev === 'major' ? 'major' : 'minor'}">
        <div>
          <div class="nc-ref">${n.ref}</div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:9px; color:var(--text-muted);">${n.std}</div>
        </div>
        <div>
          <div class="nc-desc">${n.desc}</div>
          ${n.remark ? `<div style="font-size:11px; color:var(--accent); margin-top:3px;">→ ${n.remark}</div>` : ''}
        </div>
        <span class="nc-sev sev-tag-${n.sev === 'critical' ? 'critical' : n.sev === 'major' ? 'major' : 'minor'}">${n.sev}</span>
      </div>
    `).join('');
  }

  if (obss.length === 0) {
    obsList.innerHTML = '<div class="empty-nc">No observations recorded yet.</div>';
  } else {
    obsList.innerHTML = obss.map(n => `
      <div class="nc-item major">
        <div>
          <div class="nc-ref">${n.ref}</div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:9px; color:var(--text-muted);">${n.std}</div>
        </div>
        <div>
          <div class="nc-desc">${n.desc}</div>
          ${n.remark ? `<div style="font-size:11px; color:var(--accent); margin-top:3px;">→ ${n.remark}</div>` : ''}
        </div>
        <span class="nc-sev sev-tag-major">OBS</span>
      </div>
    `).join('');
  }
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function showSection(id) {
  document.querySelectorAll('.audit-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  event.currentTarget.classList.add('active');
  if (id === 'nc-report') updateNCReport();
}

// ═══════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════

function exportReport() {
  const facility = document.getElementById('facility-name').value || 'Unnamed Facility';
  const auditDate = document.getElementById('audit-date').value || new Date().toLocaleDateString();
  const auditor = document.getElementById('auditor-name').value || 'N/A';
  const auditType = document.getElementById('audit-type').value;

  let totalC = 0, totalNC = 0, totalOBS = 0, totalNA = 0;
  let rows = '';

  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    sec.clauses.forEach(cl => {
      const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const rdg = document.querySelector(`input.reading-value[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const rem = document.querySelector(`input.remarks-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      
      const findingVal = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const evidenceVal = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const capaVal = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      
      const findingText = findingVal ? findingVal.value.replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';
      const evidenceText = evidenceVal ? evidenceVal.value.replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';
      const capaText = capaVal ? capaVal.value.replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';

      const status = sel ? sel.value || '—' : '—';
      if (status === 'C') totalC++;
      else if (status === 'NC') totalNC++;
      else if (status === 'OBS') totalOBS++;
      else if (status === 'NA') totalNA++;
      const statusLabel = { C: 'Compliant', NC: 'Non-Conformance', OBS: 'Observation', NA: 'N/A', '—': 'Not Assessed' }[status] || status;
      
      let detailsBlock = '';
      if ((status === 'NC' || status === 'OBS') && (findingText || evidenceText || capaText)) {
        detailsBlock = `
          <div style="margin-top: 6px; padding: 6px 10px; background: #f3f4f6; border-left: 3px solid ${status==='NC'?'#ef4444':'#f59e0b'}; border-radius: 4px; font-size: 9.5px; color: #374151;">
            ${findingText ? `<div><strong>Deficiency Details:</strong> ${findingText}</div>` : ''}
            ${evidenceText ? `<div style="margin-top: 3px;"><strong>Evidence / Proof:</strong> ${evidenceText}</div>` : ''}
            ${capaText ? `<div style="margin-top: 3px; color: #1e3a8a;"><strong>Recommended CAPA:</strong> ${capaText}</div>` : ''}
          </div>
        `;
      }

      rows += `<tr>
        <td>${cl.ref}</td>
        <td>${sec.label}</td>
        <td>
          <div style="font-weight: 500;">${cl.desc.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
          ${detailsBlock}
        </td>
        <td>${cl.std}</td>
        <td style="text-transform:capitalize">${cl.sev}</td>
        <td style="font-weight:bold; color:${status==='C'?'green':status==='NC'?'red':status==='OBS'?'orange':'gray'}">${statusLabel}</td>
        <td>${rdg ? rdg.value : ''}</td>
        <td>${rem ? rem.value : ''}</td>
      </tr>`;
    });
  });

  const eligible = totalC + totalNC + totalOBS;
  const overallPct = eligible > 0 ? Math.round((totalC / eligible) * 100) : 0;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Electrical Audit Report — ${facility}</title>
  <style>
    body{font-family:Arial,sans-serif;font-size:11px;color:#1a1a2e;margin:0;padding:0;}
    .cover{background:linear-gradient(135deg,#0a0e17,#1a2235);color:white;padding:60px 40px;text-align:center;}
    .cover h1{font-size:28px;margin-bottom:8px;color:#00d4ff;}
    .cover p{color:#aaa;font-size:13px;}
    .meta{display:flex;gap:20px;justify-content:center;margin:20px 0;flex-wrap:wrap;}
    .meta-item{background:rgba(255,255,255,0.1);padding:10px 20px;border-radius:6px;text-align:center;}
    .meta-item .val{font-size:18px;font-weight:bold;color:white;}
    .meta-item .lbl{font-size:9px;color:#aaa;letter-spacing:1px;text-transform:uppercase;}
    .section{margin:20px 40px;}
    h2{font-size:14px;color:#0a0e17;border-bottom:2px solid #00d4ff;padding-bottom:6px;margin-bottom:10px;}
    table{width:100%;border-collapse:collapse;font-size:10px;}
    th{background:#0a0e17;color:white;padding:7px 8px;text-align:left;font-size:9px;letter-spacing:0.5px;}
    td{border:1px solid #ddd;padding:6px 8px;vertical-align:top;}
    tr:nth-child(even){background:#f8f9fa;}
    .summary{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:20px 40px;}
    .summary-box{text-align:center;padding:16px;border-radius:8px;border:1px solid #ddd;}
    .summary-box .n{font-size:32px;font-weight:bold;}
    .summary-box .l{font-size:10px;color:#666;text-transform:uppercase;letter-spacing:1px;}
    @media print{body{margin:0}table{page-break-inside:auto}tr{page-break-inside:avoid}}
  </style></head><body>
  <div class="cover">
    <h1>⚡ Electrical Compliance Audit Report</h1>
    <p>Standards: BIS · PCB · BEE · NBC 2016</p>
    <div class="meta">
      <div class="meta-item"><div class="val">${facility}</div><div class="lbl">Facility</div></div>
      <div class="meta-item"><div class="val">${auditDate}</div><div class="lbl">Audit Date</div></div>
      <div class="meta-item"><div class="val">${auditor}</div><div class="lbl">Auditor</div></div>
      <div class="meta-item"><div class="val">${auditType}</div><div class="lbl">Audit Type</div></div>
    </div>
    <div style="font-size:40px;font-weight:bold;color:${overallPct>=85?'#00ff8c':overallPct>=60?'#ffb800':'#ff3b5c'};margin-top:20px;">${overallPct}%</div>
    <div style="color:#aaa;font-size:12px;margin-top:4px;">${overallPct>=85?'COMPLIANT':overallPct>=60?'PARTIALLY COMPLIANT':'NON-COMPLIANT'}</div>
  </div>
  <div class="summary">
    <div class="summary-box"><div class="n" style="color:#00d4ff">${totalC+totalNC+totalOBS+totalNA}</div><div class="l">Total Checked</div></div>
    <div class="summary-box"><div class="n" style="color:green">${totalC}</div><div class="l">Compliant</div></div>
    <div class="summary-box"><div class="n" style="color:red">${totalNC}</div><div class="l">Non-Conformances</div></div>
    <div class="summary-box"><div class="n" style="color:orange">${totalOBS}</div><div class="l">Observations</div></div>
  </div>
  <div class="section">
    <h2>Detailed Audit Findings</h2>
    <table>
      <thead><tr><th>Ref</th><th>Section</th><th>Checkpoint</th><th>Standard</th><th>Severity</th><th>Status</th><th>Reading</th><th>Remarks</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
  <div class="section" style="margin-top:30px;color:#666;font-size:10px;border-top:1px solid #ddd;padding-top:12px;">
    Generated by ElectroAudit Pro | Audit Date: ${auditDate} | Auditor: ${auditor}
  </div>
  </body></html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ElectricalAuditReport_${facility.replace(/\s+/g,'-')}_${auditDate}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportNCReport() {
  let ncs = [];
  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    sec.clauses.forEach(cl => {
      const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const rem = document.querySelector(`input.remarks-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      
      const findingVal = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const evidenceVal = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const capaVal = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);

      if (sel && (sel.value === 'NC' || sel.value === 'OBS')) {
        ncs.push({
          ...cl,
          sec: sec.label,
          status: sel.value,
          remark: rem ? rem.value : '',
          finding: findingVal ? findingVal.value.trim() : '',
          evidence: evidenceVal ? evidenceVal.value.trim() : '',
          capa: capaVal ? capaVal.value.trim() : ''
        });
      }
    });
  });

  const escapeHtml = (text) => text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let rows = ncs.map(n => {
    const escapedFinding = n.finding ? escapeHtml(n.finding) : '';
    const escapedEvidence = n.evidence ? escapeHtml(n.evidence) : '';
    const escapedCapa = n.capa ? escapeHtml(n.capa) : '';

    let detailsBlock = '';
    if (escapedFinding || escapedEvidence || escapedCapa) {
      detailsBlock = `
        <div style="margin-top: 6px; padding: 6px 10px; background: #f9fafb; border-left: 3px solid ${n.status==='NC'?'#ef4444':'#f59e0b'}; border-radius: 4px; font-size: 10px; color: #374151;">
          ${escapedFinding ? `<div><strong>Finding Details:</strong> ${escapedFinding}</div>` : ''}
          ${escapedEvidence ? `<div style="margin-top: 3px;"><strong>Evidence / Proof:</strong> ${escapedEvidence}</div>` : ''}
          ${escapedCapa ? `<div style="margin-top: 3px; color: #1e3a8a;"><strong>Recommended CAPA:</strong> ${escapedCapa}</div>` : ''}
        </div>
      `;
    }

    return `<tr>
      <td>${n.ref}</td>
      <td>${n.sec}</td>
      <td>
        <div style="font-weight:bold;">${n.desc}</div>
        ${detailsBlock}
      </td>
      <td>${n.std}</td>
      <td style="text-transform:capitalize">${n.sev}</td>
      <td style="font-weight:bold;color:${n.status==='NC'?'red':'orange'}">${n.status}</td>
      <td>${n.remark}</td>
    </tr>`;
  }).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>NC Report</title>
  <style>body{font-family:Arial,sans-serif;font-size:11px;padding:20px;}h1{color:#cc0000;font-size:16px;}table{width:100%;border-collapse:collapse;}th{background:#0a0e17;color:white;padding:7px;font-size:9px;}td{border:1px solid #ddd;padding:6px;vertical-align:top;}</style>
  </head><body><h1>⚠ Non-Conformance & Observation Report</h1><p>Generated: ${new Date().toLocaleDateString()}</p>
  <table><thead><tr><th>Ref</th><th>Section</th><th>Checkpoint</th><th>Standard</th><th>Severity</th><th>Status</th><th>Remarks</th></tr></thead><tbody>${rows}</tbody></table>
  </body></html>`;
  
  const blob = new Blob([html], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'NC_Report.html';
  a.click();
}

function resetAll() {
  if (!confirm('Reset all audit data? This cannot be undone.')) return;
  document.querySelectorAll('.status-select').forEach(s => { s.value = ''; s.className = 'status-select'; });
  document.querySelectorAll('.reading-value').forEach(i => i.value = '');
  document.querySelectorAll('.remarks-input').forEach(i => i.value = '');
  localStorage.removeItem('electro-audit-data');
  
  currentAuditId = '';
  localStorage.removeItem('electro-current-audit-id');
  updateActiveSessionStatusLabel('');

  updateScores();
  updateNCReport();
  renderSavedAuditsList();
  showToast('Form reset successfully.', 'info');
}

// ═══════════════════════════════════════════════════════════
// LOCAL STORAGE AUTO-SAVE & LOAD
// ═══════════════════════════════════════════════════════════

let autoSaveTimeout = null;
function saveAuditData() {
  const pulseDot = document.getElementById('save-pulse-dot');
  const statusText = document.getElementById('save-status-text');
  
  if (pulseDot && statusText) {
    pulseDot.className = 'save-pulse-dot pulse-saving';
    statusText.textContent = 'Saving...';
  }

  const auditData = {
    facilityName: document.getElementById('facility-name').value,
    auditDate: document.getElementById('audit-date').value,
    auditorName: document.getElementById('auditor-name').value,
    auditType: document.getElementById('audit-type').value,
    responses: {}
  };

  document.querySelectorAll('.status-select').forEach(sel => {
    const sec = sel.getAttribute('data-sec');
    const ref = sel.getAttribute('data-ref');
    
    if (!auditData.responses[sec]) {
      auditData.responses[sec] = {};
    }
    
    const rdgInput = document.querySelector(`.reading-value[data-sec="${sec}"][data-ref="${ref}"]`);
    const remInput = document.querySelector(`.remarks-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const findingInput = document.querySelector(`.nc-finding-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const evidenceInput = document.querySelector(`.nc-evidence-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const capaInput = document.querySelector(`.nc-capa-input[data-sec="${sec}"][data-ref="${ref}"]`);
    
    auditData.responses[sec][ref] = {
      status: sel.value,
      reading: rdgInput ? rdgInput.value : '',
      remarks: remInput ? remInput.value : '',
      finding: findingInput ? findingInput.value : '',
      evidence: evidenceInput ? evidenceInput.value : '',
      capa: capaInput ? capaInput.value : ''
    };
  });

  localStorage.setItem('electro-audit-data', JSON.stringify(auditData));

  if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    if (pulseDot && statusText) {
      pulseDot.className = 'save-pulse-dot pulse-success';
      statusText.textContent = 'Saved to draft';
    }
  }, 600);
}

function loadAuditData() {
  currentAuditId = localStorage.getItem('electro-current-audit-id') || '';
  
  const dataJson = localStorage.getItem('electro-audit-data');
  if (!dataJson) {
    updateActiveSessionStatusLabel('');
    return;
  }

  try {
    const auditData = JSON.parse(dataJson);
    if (auditData.facilityName) document.getElementById('facility-name').value = auditData.facilityName;
    if (auditData.auditDate) document.getElementById('audit-date').value = auditData.auditDate;
    if (auditData.auditorName) document.getElementById('auditor-name').value = auditData.auditorName;
    if (auditData.auditType) document.getElementById('audit-type').value = auditData.auditType;

    if (auditData.responses) {
      Object.entries(auditData.responses).forEach(([secId, secResponses]) => {
        Object.entries(secResponses).forEach(([ref, res]) => {
          const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${ref}"]`);
          const rdgInput = document.querySelector(`.reading-value[data-sec="${secId}"][data-ref="${ref}"]`);
          const remInput = document.querySelector(`.remarks-input[data-sec="${secId}"][data-ref="${ref}"]`);
          const findingInput = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${ref}"]`);
          const evidenceInput = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${ref}"]`);
          const capaInput = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${ref}"]`);

          if (sel) {
            sel.value = res.status || '';
            sel.className = 'status-select';
            if (res.status) sel.classList.add('status-' + res.status);
            
            // Set details-row display properties on page load
            const detailsRow = document.getElementById('details-row-' + ref);
            if (detailsRow) {
              if (res.status === 'NC' || res.status === 'OBS') {
                detailsRow.style.display = 'table-row';
              } else {
                detailsRow.style.display = 'none';
              }
            }
          }
          if (rdgInput) rdgInput.value = res.reading || '';
          if (remInput) remInput.value = res.remarks || '';
          if (findingInput) findingInput.value = res.finding || '';
          if (evidenceInput) evidenceInput.value = res.evidence || '';
          if (capaInput) capaInput.value = res.capa || '';
        });
      });
    }
    
    updateActiveSessionStatusLabel(auditData.facilityName);
  } catch (e) {
    console.error("Failed to load saved audit data:", e);
  }
}

// ═══════════════════════════════════════════════════════════
// TOAST NOTIFICATIONS
// ═══════════════════════════════════════════════════════════

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.style.pointerEvents = 'auto'; // allow clicking toast buttons
  
  toast.innerHTML = `
    <div class="toast-content">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'toastFadeOut 0.3s forwards';
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 300);
  }, 4000);
}

// ═══════════════════════════════════════════════════════════
// GEMINI API SETTINGS & GENERATOR
// ═══════════════════════════════════════════════════════════

function openGeminiSettings() {
  const modal = document.getElementById('gemini-modal');
  if (modal) {
    modal.style.display = 'flex';
    const key = localStorage.getItem('electro-gemini-key') || '';
    document.getElementById('gemini-key-input').value = key;
  }
}

function closeGeminiSettings() {
  const modal = document.getElementById('gemini-modal');
  if (modal) modal.style.display = 'none';
}

function saveGeminiKey() {
  const key = document.getElementById('gemini-key-input').value.trim();
  localStorage.setItem('electro-gemini-key', key);
  closeGeminiSettings();
  if (key) {
    showToast('Gemini API key saved successfully!', 'success');
  } else {
    showToast('Gemini API key removed.', 'info');
  }
}

async function generateAIFinding(secId, ref) {
  const apiKey = localStorage.getItem('electro-gemini-key');
  if (!apiKey) {
    showToast('Gemini API key is not configured. Please set it in settings.', 'warning');
    openGeminiSettings();
    return;
  }

  const clause = SECTIONS[secId].clauses.find(c => c.ref === ref);
  if (!clause) return;

  const rdgInput = document.querySelector(`.reading-value[data-sec="${secId}"][data-ref="${ref}"]`);
  const remInput = document.querySelector(`.remarks-input[data-sec="${secId}"][data-ref="${ref}"]`);
  const findingInput = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${ref}"]`);
  const evidenceInput = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${ref}"]`);
  const capaInput = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${ref}"]`);

  const reading = rdgInput ? rdgInput.value : '';
  const remarks = remInput ? remInput.value : '';

  // Show loading state on the button clicked
  const btn = event.currentTarget || document.querySelector(`button[onclick*="generateAIFinding('${secId}', '${ref}')"]`);
  let originalHtml = '';
  if (btn) {
    originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '⚡ Generating AI CAPA...';
    btn.style.opacity = '0.7';
  }

  const promptText = `
    You are an expert electrical compliance auditor. Create a highly professional, detail-oriented audit finding, evidence details, and Corrective and Preventive Action (CAPA) recommendation for the following non-conformance:
    - Category: ${SECTIONS[secId].label}
    - Checkpoint: ${clause.desc}
    - Standard Reference: ${clause.std}
    - Severity: ${clause.sev}
    - Measured Reading: ${reading || 'No reading provided'}
    - Auditor Remarks: ${remarks || 'None'}

    Provide realistic, highly specific evidence notes (e.g. details of visual damage, specific measurement deviations, or document reference gaps) and actionable corrective/preventive recommendations.

    You must respond ONLY with a raw JSON object containing exactly these three fields:
    {
      "finding": "Detailed finding description here...",
      "evidence": "Realistic evidence description, measurements or photo references...",
      "capa": "Actionable corrective and preventive action recommendations..."
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: promptText
          }]
        }],
        generationConfig: {
          responseMimeType: 'application/json'
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const resData = await response.json();
    const text = resData.candidates[0].content.parts[0].text.trim();
    
    // Parse JSON from Gemini response
    const cleanJson = JSON.parse(text);
    
    if (findingInput) findingInput.value = cleanJson.finding || '';
    if (evidenceInput) evidenceInput.value = cleanJson.evidence || '';
    if (capaInput) capaInput.value = cleanJson.capa || '';

    // Trigger auto-save
    saveAuditData();
    showToast('AI analysis completed successfully!', 'success');
  } catch (error) {
    console.error("Gemini call failed:", error);
    showToast('Gemini API call failed. Verify your key and connection.', 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
      btn.style.opacity = '1';
    }
  }
}

// Global scope export for HTML event handlers
window.openGeminiSettings = openGeminiSettings;
window.closeGeminiSettings = closeGeminiSettings;
window.saveGeminiKey = saveGeminiKey;
window.generateAIFinding = generateAIFinding;

// ═══════════════════════════════════════════════════════════
// MULTI-SESSION SAVE / LOAD DATABASE
// ═══════════════════════════════════════════════════════════

function updateActiveSessionStatusLabel(facilityName) {
  const el = document.getElementById('active-session-status');
  if (el) {
    if (facilityName) {
      el.textContent = `EDITING DRAFT: ${facilityName.toUpperCase()}`;
      el.style.color = 'var(--accent)';
    } else {
      el.textContent = 'NEW AUDIT';
      el.style.color = 'var(--text-muted)';
    }
  }
}

function saveAuditSession() {
  const facility = document.getElementById('facility-name').value.trim();
  const date = document.getElementById('audit-date').value;
  const auditor = document.getElementById('auditor-name').value.trim();
  const type = document.getElementById('audit-type').value;

  if (!facility) {
    showToast('Please enter a Facility / Plant Name before saving.', 'warning');
    return;
  }

  // Gather responses
  const responses = {};
  document.querySelectorAll('.status-select').forEach(sel => {
    const sec = sel.getAttribute('data-sec');
    const ref = sel.getAttribute('data-ref');
    
    if (!responses[sec]) {
      responses[sec] = {};
    }
    
    const rdgInput = document.querySelector(`.reading-value[data-sec="${sec}"][data-ref="${ref}"]`);
    const remInput = document.querySelector(`.remarks-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const findingInput = document.querySelector(`.nc-finding-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const evidenceInput = document.querySelector(`.nc-evidence-input[data-sec="${sec}"][data-ref="${ref}"]`);
    const capaInput = document.querySelector(`.nc-capa-input[data-sec="${sec}"][data-ref="${ref}"]`);
    
    responses[sec][ref] = {
      status: sel.value,
      reading: rdgInput ? rdgInput.value : '',
      remarks: remInput ? remInput.value : '',
      finding: findingInput ? findingInput.value : '',
      evidence: evidenceInput ? evidenceInput.value : '',
      capa: capaInput ? capaInput.value : ''
    };
  });

  // Calculate scores
  let totalC = 0, totalNC = 0, totalOBS = 0, totalNA = 0;
  Object.values(responses).forEach(secResponses => {
    Object.values(secResponses).forEach(res => {
      if (res.status === 'C') totalC++;
      else if (res.status === 'NC') totalNC++;
      else if (res.status === 'OBS') totalOBS++;
      else if (res.status === 'NA') totalNA++;
    });
  });

  const eligible = totalC + totalNC + totalOBS;
  const complianceScore = eligible > 0 ? Math.round((totalC / eligible) * 100) : 0;

  const savedJson = localStorage.getItem('electro-audits-list');
  let savedAudits = savedJson ? JSON.parse(savedJson) : [];

  let isNew = false;
  if (!currentAuditId) {
    currentAuditId = 'audit-' + Date.now();
    localStorage.setItem('electro-current-audit-id', currentAuditId);
    isNew = true;
  }

  const sessionRecord = {
    id: currentAuditId,
    facilityName: facility,
    auditDate: date,
    auditorName: auditor,
    auditType: type,
    updatedAt: new Date().toISOString(),
    complianceScore: complianceScore,
    stats: { c: totalC, nc: totalNC, obs: totalOBS, na: totalNA },
    responses: responses
  };

  const existingIdx = savedAudits.findIndex(a => a.id === currentAuditId);
  if (existingIdx >= 0) {
    savedAudits[existingIdx] = sessionRecord;
  } else {
    savedAudits.push(sessionRecord);
  }

  localStorage.setItem('electro-audits-list', JSON.stringify(savedAudits));
  
  // Also sync active draft
  localStorage.setItem('electro-audit-data', JSON.stringify({
    facilityName: facility,
    auditDate: date,
    auditorName: auditor,
    auditType: type,
    responses: responses
  }));

  updateActiveSessionStatusLabel(facility);
  renderSavedAuditsList();
  showToast(isNew ? `Session created: "${facility}"` : `Session updated: "${facility}"`, 'success');
}

function loadSavedAudit(id) {
  const savedJson = localStorage.getItem('electro-audits-list');
  if (!savedJson) return;

  const savedAudits = JSON.parse(savedJson);
  const audit = savedAudits.find(a => a.id === id);
  if (!audit) return;

  if (!confirm(`Load audit session for "${audit.facilityName}"? This will overwrite your current screen.`)) return;

  currentAuditId = id;
  localStorage.setItem('electro-current-audit-id', id);

  // Set fields
  document.getElementById('facility-name').value = audit.facilityName || '';
  document.getElementById('audit-date').value = audit.auditDate || '';
  document.getElementById('auditor-name').value = audit.auditorName || '';
  document.getElementById('audit-type').value = audit.auditType || '';

  // Clear inputs
  document.querySelectorAll('.status-select').forEach(s => { s.value = ''; s.className = 'status-select'; });
  document.querySelectorAll('.reading-value').forEach(i => i.value = '');
  document.querySelectorAll('.remarks-input').forEach(i => i.value = '');
  document.querySelectorAll('.nc-finding-input').forEach(i => i.value = '');
  document.querySelectorAll('.nc-evidence-input').forEach(i => i.value = '');
  document.querySelectorAll('.nc-capa-input').forEach(i => i.value = '');

  // Populate responses
  if (audit.responses) {
    Object.entries(audit.responses).forEach(([secId, secResponses]) => {
      Object.entries(secResponses).forEach(([ref, res]) => {
        const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${ref}"]`);
        const rdgInput = document.querySelector(`.reading-value[data-sec="${secId}"][data-ref="${ref}"]`);
        const remInput = document.querySelector(`.remarks-input[data-sec="${secId}"][data-ref="${ref}"]`);
        const findingInput = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${ref}"]`);
        const evidenceInput = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${ref}"]`);
        const capaInput = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${ref}"]`);

        if (sel) {
          sel.value = res.status || '';
          sel.className = 'status-select';
          if (res.status) sel.classList.add('status-' + res.status);
          
          // Toggle sub-row visibility
          const detailsRow = document.getElementById('details-row-' + ref);
          if (detailsRow) {
            if (res.status === 'NC' || res.status === 'OBS') {
              detailsRow.style.display = 'table-row';
            } else {
              detailsRow.style.display = 'none';
            }
          }
        }
        if (rdgInput) rdgInput.value = res.reading || '';
        if (remInput) remInput.value = res.remarks || '';
        if (findingInput) findingInput.value = res.finding || '';
        if (evidenceInput) evidenceInput.value = res.evidence || '';
        if (capaInput) capaInput.value = res.capa || '';
      });
    });
  }

  // Save to active draft
  saveAuditData();

  updateScores();
  updateNCReport();
  updateActiveSessionStatusLabel(audit.facilityName);
  renderSavedAuditsList();
  showToast(`Loaded session: "${audit.facilityName}"`, 'success');
}

function deleteSavedAudit(id) {
  const savedJson = localStorage.getItem('electro-audits-list');
  if (!savedJson) return;

  const savedAudits = JSON.parse(savedJson);
  const audit = savedAudits.find(a => a.id === id);
  if (!audit) return;

  if (!confirm(`Are you sure you want to delete the audit session for "${audit.facilityName}"? This cannot be undone.`)) return;

  const updatedAudits = savedAudits.filter(a => a.id !== id);
  localStorage.setItem('electro-audits-list', JSON.stringify(updatedAudits));

  if (currentAuditId === id) {
    currentAuditId = '';
    localStorage.removeItem('electro-current-audit-id');
    updateActiveSessionStatusLabel('');
  }

  renderSavedAuditsList();
  showToast(`Deleted session: "${audit.facilityName}"`, 'info');
}

function clearSavedAuditsList() {
  if (!confirm('Are you sure you want to delete ALL saved audits in the database? This cannot be undone.')) return;

  localStorage.removeItem('electro-audits-list');
  currentAuditId = '';
  localStorage.removeItem('electro-current-audit-id');
  
  updateActiveSessionStatusLabel('');
  renderSavedAuditsList();
  showToast('Saved audits database cleared.', 'info');
}

function renderSavedAuditsList() {
  const container = document.getElementById('saved-audits-list');
  if (!container) return;

  const savedJson = localStorage.getItem('electro-audits-list');
  const savedAudits = savedJson ? JSON.parse(savedJson) : [];

  if (savedAudits.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:20px; color:var(--text-muted); font-size:12px; font-family:'IBM Plex Mono',monospace;">
        No saved audits in database.
      </div>
    `;
    return;
  }

  savedAudits.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  container.innerHTML = savedAudits.map(audit => {
    const isCurrent = audit.id === currentAuditId;
    return `
      <div class="saved-audit-card" style="
        background:${isCurrent ? 'rgba(56,189,248,0.05)' : 'var(--surface2)'};
        border:1px solid ${isCurrent ? 'var(--accent)' : 'var(--border)'};
        border-radius:6px;
        padding:12px 16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        transition:all 0.2s;
      ">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-family:'Rajdhani',sans-serif; font-size:14px; font-weight:700; color:var(--text);">${audit.facilityName}</span>
            <span class="badge" style="font-size:8px; padding:1px 5px; color:${audit.complianceScore >= 85 ? 'var(--green)' : audit.complianceScore >= 60 ? 'var(--yellow)' : 'var(--red)'}; border-color:${audit.complianceScore >= 85 ? 'rgba(16,185,129,0.2)' : audit.complianceScore >= 60 ? 'rgba(245,158,11,0.2)' : 'rgba(239,68,68,0.2)'}; background:transparent;">
              ${audit.complianceScore}% Score
            </span>
            ${isCurrent ? '<span style="font-family:\'IBM Plex Mono\',monospace; font-size:8px; color:var(--accent); background:rgba(56,189,248,0.1); padding:1px 5px; border-radius:3px; border:1px solid rgba(56,189,248,0.2)">Active Draft</span>' : ''}
          </div>
          <div style="font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-dim); display:flex; gap:12px; flex-wrap:wrap;">
            <span>📅 ${audit.auditDate}</span>
            <span>👤 ${audit.auditorName || 'Unknown'}</span>
            <span>🔧 ${audit.auditType}</span>
            <span>Updated: ${new Date(audit.updatedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-outline" style="font-size:11px; padding:5px 12px; border-color:var(--accent); color:var(--accent);" onclick="loadSavedAudit('${audit.id}')">Load</button>
          <button class="btn btn-outline" style="font-size:11px; padding:5px 12px; border-color:var(--danger); color:var(--danger);" onclick="deleteSavedAudit('${audit.id}')">Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

// ═══════════════════════════════════════════════════════════
// DIRECT PDF GENERATION WITH html2pdf.js
// ═══════════════════════════════════════════════════════════

function downloadReportPdf() {
  const facility = document.getElementById('facility-name').value || 'Unnamed Facility';
  const auditDate = document.getElementById('audit-date').value || new Date().toLocaleDateString();
  const auditor = document.getElementById('auditor-name').value || 'N/A';
  const auditType = document.getElementById('audit-type').value;

  showToast('Generating PDF report...', 'info');

  let totalC = 0, totalNC = 0, totalOBS = 0, totalNA = 0;
  let critNC = 0, majorNC = 0;
  let categorySummaryRows = '';
  let ncRows = '';
  let findingsRows = '';

  Object.entries(SECTIONS).forEach(([secId, sec]) => {
    const selects = document.querySelectorAll(`select[data-sec="${secId}"]`);
    let secC = 0, secNC = 0, secOBS = 0, secNA = 0;
    
    selects.forEach(s => {
      if (s.value === 'C') secC++;
      else if (s.value === 'NC') secNC++;
      else if (s.value === 'OBS') secOBS++;
      else if (s.value === 'NA') secNA++;
    });
    
    totalC += secC;
    totalNC += secNC;
    totalOBS += secOBS;
    totalNA += secNA;

    const secEligible = secC + secNC + secOBS;
    const secPct = secEligible > 0 ? Math.round((secC / secEligible) * 100) : '—';
    const secColor = secPct === '—' ? '#4b5563' : secPct >= 85 ? '#057a55' : secPct >= 60 ? '#b45309' : '#991b1b';

    categorySummaryRows += `
      <tr>
        <td style="font-weight: bold; color: #1e3a8a;">${sec.label}</td>
        <td>${sec.clauses.length}</td>
        <td style="color: #057a55; font-weight: bold;">${secC}</td>
        <td style="color: #b91c1c; font-weight: bold;">${secNC}</td>
        <td style="color: #d97706; font-weight: bold;">${secOBS}</td>
        <td style="color: #4b5563;">${secNA}</td>
        <td style="font-weight: bold; color: ${secColor};">${secPct}${secPct !== '—' ? '%' : ''}</td>
      </tr>
    `;

    sec.clauses.forEach(cl => {
      const sel = document.querySelector(`select[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const rdgInput = document.querySelector(`.reading-value[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const remInput = document.querySelector(`.remarks-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const status = sel ? sel.value : '';
      const reading = rdgInput ? rdgInput.value : '';
      const remarks = remInput ? remInput.value : '';

      const findingVal = document.querySelector(`.nc-finding-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const evidenceVal = document.querySelector(`.nc-evidence-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);
      const capaVal = document.querySelector(`.nc-capa-input[data-sec="${secId}"][data-ref="${cl.ref}"]`);

      const findingText = findingVal ? findingVal.value.trim() : '';
      const evidenceText = evidenceVal ? evidenceVal.value.trim() : '';
      const capaText = capaVal ? capaVal.value.trim() : '';

      const escapeHtml = (text) => text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escapedFinding = findingText ? escapeHtml(findingText) : '';
      const escapedEvidence = evidenceText ? escapeHtml(evidenceText) : '';
      const escapedCapa = capaText ? escapeHtml(capaText) : '';

      if (status === 'NC') {
        if (cl.sev === 'critical') critNC++;
        else if (cl.sev === 'major') majorNC++;

        let detailsBlock = '';
        if (escapedFinding || escapedEvidence || escapedCapa) {
          detailsBlock = `
            <div style="margin-top: 6px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #fde8e8; border-left: 3px solid #b91c1c; border-radius: 4px; font-size: 9px; color: #374151;">
              ${escapedFinding ? `<div style="margin-bottom: 3px;"><strong>Finding Details:</strong> ${escapedFinding}</div>` : ''}
              ${escapedEvidence ? `<div style="margin-bottom: 3px;"><strong>Evidence:</strong> ${escapedEvidence}</div>` : ''}
              ${escapedCapa ? `<div style="color: #1e3a8a;"><strong>Recommended CAPA:</strong> ${escapedCapa}</div>` : ''}
            </div>
          `;
        }

        ncRows += `
          <tr>
            <td><span class="pdf-badge pdf-badge-nc">NC</span> <strong style="font-family: monospace;">${cl.ref}</strong></td>
            <td><strong>${sec.label}</strong></td>
            <td>
              <div style="font-weight: bold; margin-bottom: 4px;">${cl.desc}</div>
              ${detailsBlock}
            </td>
            <td style="font-family: monospace; font-size: 10px;">${cl.std}</td>
            <td><span class="pdf-sev-${cl.sev}">${cl.sev.toUpperCase()}</span></td>
            <td style="color: #b91c1c;">${reading || '—'}</td>
            <td style="font-style: italic; color: #4b5563;">${remarks || '—'}</td>
          </tr>
        `;
      } else if (status === 'OBS') {
        let detailsBlock = '';
        if (escapedFinding || escapedEvidence || escapedCapa) {
          detailsBlock = `
            <div style="margin-top: 6px; padding: 6px 10px; background: #fffbeb; border: 1px solid #fef3c7; border-left: 3px solid #d97706; border-radius: 4px; font-size: 9px; color: #374151;">
              ${escapedFinding ? `<div style="margin-bottom: 3px;"><strong>Finding Details:</strong> ${escapedFinding}</div>` : ''}
              ${escapedEvidence ? `<div style="margin-bottom: 3px;"><strong>Evidence:</strong> ${escapedEvidence}</div>` : ''}
              ${escapedCapa ? `<div style="color: #92400e;"><strong>Recommended CAPA:</strong> ${escapedCapa}</div>` : ''}
            </div>
          `;
        }

        ncRows += `
          <tr>
            <td><span class="pdf-badge pdf-badge-obs">OBS</span> <strong style="font-family: monospace;">${cl.ref}</strong></td>
            <td><strong>${sec.label}</strong></td>
            <td>
              <div style="font-weight: bold; margin-bottom: 4px;">${cl.desc}</div>
              ${detailsBlock}
            </td>
            <td style="font-family: monospace; font-size: 10px;">${cl.std}</td>
            <td><span class="pdf-sev-major">OBSERVATION</span></td>
            <td style="color: #d97706;">${reading || '—'}</td>
            <td style="font-style: italic; color: #4b5563;">${remarks || '—'}</td>
          </tr>
        `;
      }

      if (status && status !== 'NA') {
        const statusBadge = status === 'C' ? '<span class="pdf-badge pdf-badge-c">Compliant</span>' : status === 'NC' ? '<span class="pdf-badge pdf-badge-nc">Non-Conform</span>' : '<span class="pdf-badge pdf-badge-obs">Observation</span>';
        
        let detailsBlock = '';
        if ((status === 'NC' || status === 'OBS') && (escapedFinding || escapedEvidence || escapedCapa)) {
          const borderColor = status === 'NC' ? '#b91c1c' : '#d97706';
          const bgColor = status === 'NC' ? '#fdf2f2' : '#fffbeb';
          const borderStyle = status === 'NC' ? '1px solid #fde8e8' : '1px solid #fef3c7';
          const capaColor = status === 'NC' ? '#1e3a8a' : '#92400e';
          detailsBlock = `
            <div style="margin-top: 6px; padding: 6px 10px; background: ${bgColor}; border: ${borderStyle}; border-left: 3px solid ${borderColor}; border-radius: 4px; font-size: 9px; color: #374151;">
              ${escapedFinding ? `<div style="margin-bottom: 3px;"><strong>Finding Details:</strong> ${escapedFinding}</div>` : ''}
              ${escapedEvidence ? `<div style="margin-bottom: 3px;"><strong>Evidence:</strong> ${escapedEvidence}</div>` : ''}
              ${escapedCapa ? `<div style="color: ${capaColor};"><strong>Recommended CAPA:</strong> ${escapedCapa}</div>` : ''}
            </div>
          `;
        }

        findingsRows += `
          <tr>
            <td style="font-family: monospace;">${cl.ref}</td>
            <td>
              <div style="font-weight: bold; margin-bottom: 4px;">${cl.desc}</div>
              ${detailsBlock}
            </td>
            <td style="font-family: monospace; font-size: 9px;">${cl.std}</td>
            <td>${statusBadge}</td>
            <td>${reading || '—'}</td>
            <td>${remarks || '—'}</td>
          </tr>
        `;
      }
    });
  });

  const eligible = totalC + totalNC + totalOBS;
  const overallPct = eligible > 0 ? Math.round((totalC / eligible) * 100) : 0;
  const overallColor = overallPct >= 85 ? '#057a55' : overallPct >= 60 ? '#b45309' : '#991b1b';
  const overallStatus = overallPct >= 85 ? 'COMPLIANT' : overallPct >= 60 ? 'PARTIALLY COMPLIANT' : 'NON-COMPLIANT';

  // Build the print layout HTML
  const printEl = document.createElement('div');
  printEl.innerHTML = `
    <style>
      .pdf-wrapper {
        font-family: Arial, sans-serif;
        color: #1f2937;
        background: white;
        padding: 20px;
        line-height: 1.4;
      }
      .pdf-header-table {
        width: 100%;
        border-bottom: 3px solid #1e3a8a;
        padding-bottom: 12px;
        margin-bottom: 20px;
      }
      .pdf-title-large {
        font-size: 26px;
        font-weight: bold;
        color: #1e3a8a;
        margin: 0;
      }
      .pdf-subtitle {
        font-size: 11px;
        color: #4b5563;
        margin: 4px 0 0 0;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      .pdf-meta-box {
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 12px 18px;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      .pdf-meta-col {
        display: flex;
        flex-direction: column;
      }
      .pdf-meta-lbl {
        font-size: 9px;
        color: #6b7280;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 3px;
      }
      .pdf-meta-val {
        font-size: 13px;
        font-weight: bold;
        color: #111827;
      }
      .pdf-exec-summary {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 20px;
        margin-bottom: 24px;
      }
      .pdf-score-box {
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fafafa;
      }
      .pdf-score-value {
        font-size: 48px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 4px;
      }
      .pdf-score-lbl {
        font-size: 10px;
        font-weight: bold;
        color: #4b5563;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .pdf-score-status {
        font-size: 12px;
        font-weight: bold;
        padding: 3px 10px;
        border-radius: 20px;
        margin-top: 8px;
      }
      .pdf-stats-table {
        width: 100%;
        border-collapse: collapse;
      }
      .pdf-stats-table td {
        padding: 10px 14px;
        border: 1px solid #e5e7eb;
      }
      .pdf-stat-val {
        font-size: 20px;
        font-weight: bold;
      }
      .pdf-section-title {
        font-size: 15px;
        font-weight: bold;
        color: #1e3a8a;
        border-bottom: 2px solid #3b82f6;
        padding-bottom: 5px;
        margin-top: 30px;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .pdf-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 10px;
        margin-bottom: 20px;
      }
      .pdf-table th {
        background: #1e3a8a;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 8.5px;
        padding: 7px 10px;
        border: 1px solid #1e3a8a;
      }
      .pdf-table td {
        padding: 6px 10px;
        border: 1px solid #e5e7eb;
        vertical-align: top;
      }
      .pdf-table tr:nth-child(even) {
        background: #f9fafb;
      }
      .pdf-badge {
        display: inline-block;
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 8px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .pdf-badge-c { background: #def7ec; color: #03543f; }
      .pdf-badge-nc { background: #fde8e8; color: #9b1c1c; }
      .pdf-badge-obs { background: #fef3c7; color: #92400e; }
      .pdf-badge-na { background: #f3f4f6; color: #4b5563; }
      .pdf-sev-critical { color: #b91c1c; font-weight: bold; }
      .pdf-sev-major { color: #d97706; font-weight: bold; }
      .pdf-sev-minor { color: #2563eb; font-weight: bold; }
      .pdf-footer {
        font-size: 9px;
        color: #9ca3af;
        border-top: 1px solid #e5e7eb;
        padding-top: 8px;
        margin-top: 30px;
        text-align: center;
      }
      .page-break {
        page-break-before: always;
      }
    </style>
    <div class="pdf-wrapper">
      <table class="pdf-header-table">
        <tr>
          <td>
            <div class="pdf-title-large">⚡ ELECTROAUDIT PRO</div>
            <div class="pdf-subtitle">Electrical Compliance Audit Report</div>
          </td>
          <td style="text-align: right; font-size: 10px; color: #6b7280; font-family: monospace;">
            Report: PDF_EXPORT_v1.0<br>
            Generated: ${new Date().toLocaleDateString()}<br>
            Time: ${new Date().toLocaleTimeString()}
          </td>
        </tr>
      </table>

      <div class="pdf-meta-box">
        <div class="pdf-meta-col">
          <span class="pdf-meta-lbl">Facility / Plant</span>
          <span class="pdf-meta-val">${facility}</span>
        </div>
        <div class="pdf-meta-col">
          <span class="pdf-meta-lbl">Audit Date</span>
          <span class="pdf-meta-val">${auditDate}</span>
        </div>
        <div class="pdf-meta-col">
          <span class="pdf-meta-lbl">Auditor Name</span>
          <span class="pdf-meta-val">${auditor}</span>
        </div>
        <div class="pdf-meta-col">
          <span class="pdf-meta-lbl">Audit Type</span>
          <span class="pdf-meta-val">${auditType}</span>
        </div>
      </div>

      <div class="pdf-exec-summary">
        <div class="pdf-score-box">
          <div class="pdf-score-value" style="color: ${overallColor};">${overallPct}%</div>
          <div class="pdf-score-lbl">Compliance Score</div>
          <div class="pdf-score-status" style="background: ${overallColor}15; color: ${overallColor}; border: 1px solid ${overallColor}30;">
            ${overallStatus}
          </div>
        </div>
        <div style="flex: 1;">
          <table class="pdf-stats-table">
            <tr>
              <td style="width: 50%;">
                <span class="pdf-meta-lbl">Compliant Items</span>
                <div class="pdf-stat-val" style="color: #057a55;">${totalC}</div>
              </td>
              <td style="width: 50%;">
                <span class="pdf-meta-lbl">Non-Conformances (NC)</span>
                <div class="pdf-stat-val" style="color: #b91c1c;">${totalNC}</div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="pdf-meta-lbl">Observations Recorded</span>
                <div class="pdf-stat-val" style="color: #d97706;">${totalOBS}</div>
              </td>
              <td>
                <span class="pdf-meta-lbl">Critical / Major NCs</span>
                <div class="pdf-stat-val" style="color: #991b1b;">
                  <span style="color: #b91c1c;">${critNC} Crit</span> &nbsp;|&nbsp; <span style="color: #d97706;">${majorNC} Maj</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="pdf-section-title">Compliance Summary by Category</div>
      <table class="pdf-table">
        <thead>
          <tr>
            <th>Audit Category</th>
            <th>Total Checkpoints</th>
            <th>Compliant (C)</th>
            <th>Non-Conform (NC)</th>
            <th>Observation (OBS)</th>
            <th>Not Applicable (NA)</th>
            <th>Category Score</th>
          </tr>
        </thead>
        <tbody>
          ${categorySummaryRows}
        </tbody>
      </table>

      ${ncRows ? `
        <div class="page-break"></div>
        <div class="pdf-section-title" style="color: #b91c1c;">Detailed Deficiencies (Non-Conformances & Observations)</div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th style="width: 80px;">Ref / Code</th>
              <th style="width: 100px;">Category</th>
              <th>Checkpoint Description</th>
              <th style="width: 80px;">Standard</th>
              <th style="width: 80px;">Severity</th>
              <th style="width: 80px;">Reading</th>
              <th style="width: 120px;">Remarks / Comments</th>
            </tr>
          </thead>
          <tbody>
            ${ncRows}
          </tbody>
        </table>
      ` : ''}

      ${findingsRows ? `
        <div class="page-break"></div>
        <div class="pdf-section-title">Detailed Audit Findings Log (Assessed Items)</div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th style="width: 70px;">Ref</th>
              <th>Checkpoint Description</th>
              <th style="width: 80px;">Standard</th>
              <th style="width: 80px;">Status</th>
              <th style="width: 80px;">Reading</th>
              <th style="width: 150px;">Remarks</th>
            </tr>
          </thead>
          <tbody>
            ${findingsRows}
          </tbody>
        </table>
      ` : ''}

      <div class="pdf-footer">
        ElectroAudit Pro — Electrical Compliance Audit Platform | Built to satisfy BEE, IS, NBC, BIS, and PCB frameworks
      </div>
    </div>
  `;

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     `ElectricalAuditReport_${facility.replace(/\s+/g,'-')}_${auditDate}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(printEl).set(opt).save().then(() => {
    showToast('PDF report downloaded successfully.', 'success');
  }).catch(err => {
    console.error("PDF generation failed:", err);
    showToast('PDF generation failed. Check console for details.', 'danger');
  });
}

// Global scope export for HTML event handlers
window.saveAuditSession = saveAuditSession;
window.loadSavedAudit = loadSavedAudit;
window.deleteSavedAudit = deleteSavedAudit;
window.clearSavedAuditsList = clearSavedAuditsList;
window.downloadReportPdf = downloadReportPdf;
window.showToast = showToast;
window.resetAll = resetAll;

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  buildTables();
  loadAuditData();
  updateScores();
  updateNCReport();
  renderSavedAuditsList();
  
  if (!document.getElementById('audit-date').value) {
    document.getElementById('audit-date').value = new Date().toISOString().split('T')[0];
  }
  document.getElementById('print-date').textContent = new Date().toLocaleDateString();

  // Highlight indicator green initially if data exists
  const pulseDot = document.getElementById('save-pulse-dot');
  const statusText = document.getElementById('save-status-text');
  if (pulseDot && statusText) {
    pulseDot.className = 'save-pulse-dot pulse-success';
    statusText.textContent = localStorage.getItem('electro-audit-data') ? 'Saved to draft' : 'Ready';
  }

  // Attach change/input listeners for auto-save
  document.getElementById('facility-name').addEventListener('input', saveAuditData);
  document.getElementById('audit-date').addEventListener('change', saveAuditData);
  document.getElementById('auditor-name').addEventListener('input', saveAuditData);
  document.getElementById('audit-type').addEventListener('change', saveAuditData);

  document.addEventListener('change', e => {
    if (e.target.classList.contains('status-select') || 
        e.target.classList.contains('reading-value') || 
        e.target.classList.contains('remarks-input')) {
      saveAuditData();
    }
  });

  document.addEventListener('input', e => {
    if (e.target.classList.contains('reading-value') || 
        e.target.classList.contains('remarks-input')) {
      saveAuditData();
    }
  });
});

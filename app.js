// Standards database definition
const auditStandards = [
    {
        id: "IS-1",
        category: "IS",
        clause: "IS 3043 Clause 5.2",
        title: "Earthing System Resistance & Continuity",
        question: "Is the earth pit resistance within acceptable limits (< 1.0 ohm for electrical substations / power systems) and is the grid continuity verified?",
        defaultRisk: "Critical",
        guideline: "Verify earth pit logs and measure resistance at neutral and body pits."
    },
    {
        id: "IS-2",
        category: "IS",
        clause: "IS 3043 / IS 732",
        title: "Double Earthing of Three-Phase Equipment",
        question: "Are all three-phase motors, transformers, and control panels provided with double independent connections to the main earth grid?",
        defaultRisk: "High",
        guideline: "Check body connections of motors, DBs, and machinery. Single earthing is non-compliant."
    },
    {
        id: "IS-3",
        category: "IS",
        clause: "IS 732 Clause 6.3",
        title: "Insulation Resistance (IR) Testing",
        question: "Has periodic Megger insulation resistance testing been carried out and logged for all incoming and outgoing power cables?",
        defaultRisk: "High",
        guideline: "Review the annual test reports. Insulation resistance should be greater than 1 MΩ."
    },
    {
        id: "IS-4",
        category: "IS",
        clause: "IS 2309 / IS/IEC 62305",
        title: "Lightning Protection System (LPS)",
        question: "Are lightning protection conductors routed cleanly to dedicated earthing pits without sharp bends or mechanical joints?",
        defaultRisk: "Medium",
        guideline: "Verify roof conductors, testing joints, down-conductors, and dedicated earth pits."
    },
    {
        id: "BEE-1",
        category: "BEE",
        clause: "BEE Schedule 5",
        title: "Distribution Transformer Star Rating",
        question: "Are active liquid-immersed distribution transformers certified with a minimum BEE 3-Star Rating (or meeting equivalent efficiency criteria)?",
        defaultRisk: "Medium",
        guideline: "Inspect the transformer rating plate and check BEE registration labels."
    },
    {
        id: "BEE-2",
        category: "BEE",
        clause: "BEE Energy Audit Guidelines",
        title: "Power Factor Correction (APFC)",
        question: "Is the average monthly power factor maintained above 0.95 lag, and is the APFC panel operational without harmonic overheating?",
        defaultRisk: "High",
        guideline: "Review electricity bills from the past 6 months and examine capacitor current draw."
    },
    {
        id: "BEE-3",
        category: "BEE",
        clause: "ECBC Code Section 6.2",
        title: "Lighting Power Density (LPD)",
        question: "Does the lighting design meet the Energy Conservation Building Code (ECBC) LPD limits (e.g. < 0.8 W/sq.ft for office areas)?",
        defaultRisk: "Low",
        guideline: "Calculate total lighting load divided by carpet area or verify smart sensor integration."
    },
    {
        id: "BEE-4",
        category: "BEE",
        clause: "ECBC Code Section 8",
        title: "Energy Efficient Motors (IE3/IE4)",
        question: "Are auxiliary motors (HVAC fans, large pumps, compressors) rated IE3 (Premium) or IE4 efficiency class?",
        defaultRisk: "Medium",
        guideline: "Check motor nameplates in utility rooms."
    },
    {
        id: "NBC-1",
        category: "NBC",
        clause: "NBC Part 8 Section 2",
        title: "Clear Working Clearances",
        question: "Is a minimum working clearance of 1.0 meter (or 1.2 meters for live exposed parts) maintained in front of all MV/HV distribution panels?",
        defaultRisk: "Critical",
        guideline: "Measure space in front of control panels. Check that aisles are clear of obstructions."
    },
    {
        id: "NBC-2",
        category: "NBC",
        clause: "NBC Part 4 Fire Safety",
        title: "Fire Signal Breaker Trip Integration",
        question: "Are the main supply breakers integrated to automatically trip upon activation of the building's fire alarm system?",
        defaultRisk: "Critical",
        guideline: "Test the shunt-trip coil wiring of incoming MCCBs/ACBs against the fire panel outputs."
    },
    {
        id: "NBC-3",
        category: "NBC",
        clause: "NBC Part 4 Section 3.4",
        title: "Emergency Exit Lighting & Signs",
        question: "Are all exit paths equipped with self-contained, battery-backed emergency luminaires rated for at least 90 minutes of autonomy?",
        defaultRisk: "High",
        guideline: "Perform a simulated power failure check on exit path lighting."
    },
    {
        id: "NBC-4",
        category: "NBC",
        clause: "NBC Part 8 Sec 2 Clause 4.2",
        title: "Electrical Substation Layout & Fire Doors",
        question: "Are electrical control rooms and indoor substations separated by 2-hour fire-rated partition walls and self-closing fire doors?",
        defaultRisk: "High",
        guideline: "Inspect door rating labels and ensure self-closing mechanisms are functional."
    },
    {
        id: "BIS-1",
        category: "BIS",
        clause: "IS 694 / IS 1554 (Part-1)",
        title: "Flame Retardant Low Smoke (FRLS) Cabling",
        question: "Do power and control cables routed in vertical shafts, ducts, or false ceilings comply with FRLS specifications?",
        defaultRisk: "High",
        guideline: "Check printing on cable sheaths for FRLS/FRLSH markers and BIS certification stamps."
    },
    {
        id: "BIS-2",
        category: "BIS",
        clause: "IS 15652 Regulations",
        title: "Insulating Mats in Panel Rooms",
        question: "Are BIS-approved elastomer/insulating mats (conforming to IS 15652) of appropriate class placed in front of all live electrical panels?",
        defaultRisk: "Critical",
        guideline: "Check the thickness, class, and testing date stamp printed on the insulation mats."
    },
    {
        id: "BIS-3",
        category: "BIS",
        clause: "IS/IEC 60898-1",
        title: "Switchgear Short-Circuit & Certification",
        question: "Are all installed MCBs, RCCBs, and MCCBs ISI-certified and rated adequately for the panel's prospective fault current level?",
        defaultRisk: "High",
        guideline: "Confirm breaker kA rating is sufficient (minimum 10kA for industrial distribution DBs)."
    },
    {
        id: "PCB-1",
        category: "PCB",
        clause: "CPCB Air Emission Rules",
        title: "DG Set Stack (Exhaust) Height",
        question: "Does the DG set exhaust stack height comply with the formula H = h + 0.2 * sqrt(kVA) (where h = building height in meters)?",
        defaultRisk: "Medium",
        guideline: "Verify exhaust pipe height above the building's roof level."
    },
    {
        id: "PCB-2",
        category: "PCB",
        clause: "CPCB Noise Standards",
        title: "DG Set Acoustic Enclosure & Noise Attenuation",
        question: "Is the DG set housed in an acoustic enclosure reducing noise levels by at least 25 dBA or limiting sound levels to 75 dBA at 1 meter?",
        defaultRisk: "Medium",
        guideline: "Review noise inspection certificates or conduct a spot test with a sound level meter during operation."
    },
    {
        id: "PCB-3",
        category: "PCB",
        clause: "Hazardous Waste Rules 2016",
        title: "Battery & E-waste Containment Log",
        question: "Are used lead-acid batteries and e-waste stored in a secure ventilated area with spill containment, and logged for disposal via authorized recyclers?",
        defaultRisk: "Low",
        guideline: "Check disposal manifest register and inspect battery room flooring for acid-resistant coating."
    },
    {
        id: "PCB-4",
        category: "PCB",
        clause: "PCB Environment Guidelines",
        title: "Transformer Oil Drainage Containment",
        question: "Is there a brick-lined oil soak pit or containment tray designed to hold 110% of the transformer oil volume in case of catastrophic leak?",
        defaultRisk: "High",
        guideline: "Inspect the physical dimensions of the drainage tray/soak pit around outdoor transformers."
    }
];

// App State
let currentAudit = {
    id: "",
    facilityName: "",
    auditorName: "",
    auditDate: "",
    scope: "Full Site Audit",
    responses: {}, // format: { "IS-1": { status: "Compliant" | "Non-Compliant" | "N/A", severity: "...", observation: "...", capa: "...", owner: "...", targetDate: "..." } }
};

let savedAudits = [];
let complianceChart = null;
let riskChart = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    // Load Saved Audits
    loadSavedAuditsList();
    
    // Create new blank audit
    createNewAudit();
    
    // Set default audit date
    document.getElementById("auditDate").valueAsDate = new Date();
    currentAudit.auditDate = document.getElementById("auditDate").value;

    // Set theme from local storage
    if (localStorage.getItem("electrical-audit-theme") === "light") {
        document.body.classList.add("light-theme");
        document.getElementById("theme-icon").setAttribute("data-lucide", "sun");
    }

    // Set up tabs navigation
    setupNavigation();
    
    // Render Checklist
    renderChecklist();
    
    // Bind metadata events
    bindMetadataEvents();
    
    // Initial Dashboard calculations
    updateDashboardMetrics();

    // Render icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

// Setup Tab Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });
}

function switchTab(tabId) {
    // Update active nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("data-tab") === tabId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Hide all tab sections
    document.querySelectorAll(".tab-content").forEach(section => {
        section.style.display = "none";
    });

    // Show targeted tab
    const targetSection = document.getElementById(tabId + "-section");
    if (targetSection) {
        targetSection.style.display = "block";
    }

    // If report section, build dynamic report view
    if (tabId === "report") {
        buildReportPreview();
    }
}

// Create new audit draft
function createNewAudit() {
    currentAudit = {
        id: "audit_" + Date.now(),
        facilityName: "",
        auditorName: "",
        auditDate: document.getElementById("auditDate").value || new Date().toISOString().split('T')[0],
        scope: "Full Site Audit",
        responses: {}
    };

    // Pre-populate response objects
    auditStandards.forEach(std => {
        currentAudit.responses[std.id] = {
            status: "Compliant", // default
            severity: std.defaultRisk,
            observation: "",
            capa: "",
            owner: "",
            targetDate: ""
        };
    });

    // Reset UI Inputs
    document.getElementById("facilityName").value = "";
    document.getElementById("auditorName").value = "";
    document.getElementById("auditScope").value = "Full Site Audit";
    
    renderChecklist();
    updateDashboardMetrics();
    showToast("New audit template loaded.", "info");
}

// Bind Facility info inputs to state
function bindMetadataEvents() {
    const facilityInput = document.getElementById("facilityName");
    const auditorInput = document.getElementById("auditorName");
    const dateInput = document.getElementById("auditDate");
    const scopeInput = document.getElementById("auditScope");

    facilityInput.addEventListener("input", () => currentAudit.facilityName = facilityInput.value);
    auditorInput.addEventListener("input", () => currentAudit.auditorName = auditorInput.value);
    dateInput.addEventListener("change", () => currentAudit.auditDate = dateInput.value);
    scopeInput.addEventListener("change", () => currentAudit.scope = scopeInput.value);
}

// Render Checklist UI
function renderChecklist(filterCategory = "All") {
    const container = document.getElementById("checklist-container");
    container.innerHTML = "";

    // Render category sidebar buttons inside the panel
    const sidebar = document.getElementById("category-sidebar");
    if (sidebar) {
        const categories = ["All", "IS", "BEE", "NBC", "BIS", "PCB"];
        sidebar.innerHTML = "<h4>Standard Categories</h4>";
        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.className = `btn btn-secondary ${filterCategory === cat ? 'active' : ''}`;
            btn.style.justifyContent = "flex-start";
            btn.style.width = "100%";
            btn.textContent = cat === "All" ? "All Standards" : `${cat} Compliance`;
            btn.addEventListener("click", () => renderChecklist(cat));
            sidebar.appendChild(btn);
        });
    }

    // Filter items
    const filteredStandards = filterCategory === "All" 
        ? auditStandards 
        : auditStandards.filter(s => s.category === filterCategory);

    if (filteredStandards.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No checklist items found.</div>`;
        return;
    }

    filteredStandards.forEach(std => {
        const response = currentAudit.responses[std.id];
        const card = document.createElement("div");
        card.className = "checklist-item";
        card.id = `card-${std.id}`;

        // Get risk badge styling
        const riskClass = response.severity.toLowerCase();

        card.innerHTML = `
            <div class="item-header">
                <div class="item-meta">
                    <span class="badge badge-standard">${std.category}</span>
                    <span class="badge badge-clause">${std.clause}</span>
                    <span class="badge badge-risk ${riskClass}">${response.severity} Risk</span>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">ID: ${std.id}</div>
            </div>
            
            <div class="item-question">
                <strong>${std.title}</strong><br>
                <span style="font-size: 0.95rem; font-weight: 300; display: inline-block; margin-top: 0.4rem;">${std.question}</span>
            </div>
            
            <div style="font-size: 0.8rem; color: var(--text-muted); background: rgba(255,255,255,0.02); padding: 0.5rem; border-radius: 4px;">
                <strong>Guideline:</strong> ${std.guideline}
            </div>

            <div class="item-options">
                <button type="button" class="option-btn option-compliant ${response.status === 'Compliant' ? 'active-compliant' : ''}" onclick="setResponseStatus('${std.id}', 'Compliant')">
                    <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i> Compliant
                </button>
                <button type="button" class="option-btn option-non-compliant ${response.status === 'Non-Compliant' ? 'active-non-compliant' : ''}" onclick="setResponseStatus('${std.id}', 'Non-Compliant')">
                    <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i> Non-Compliant
                </button>
                <button type="button" class="option-btn option-na ${response.status === 'N/A' ? 'active-na' : ''}" onclick="setResponseStatus('${std.id}', 'N/A')">
                    <i data-lucide="minus-circle" style="width: 16px; height: 16px;"></i> N/A
                </button>
            </div>

            <div class="nc-details-box" id="nc-box-${std.id}" style="display: ${response.status === 'Non-Compliant' ? 'flex' : 'none'};">
                <div class="form-grid">
                    <div class="form-group">
                        <label>Risk / Severity Level</label>
                        <select onchange="updateNcField('${std.id}', 'severity', this.value)">
                            <option value="Low" ${response.severity === 'Low' ? 'selected' : ''}>Low Risk</option>
                            <option value="Medium" ${response.severity === 'Medium' ? 'selected' : ''}>Medium Risk</option>
                            <option value="High" ${response.severity === 'High' ? 'selected' : ''}>High Risk</option>
                            <option value="Critical" ${response.severity === 'Critical' ? 'selected' : ''}>Critical Risk</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>CAPA Owner</label>
                        <input type="text" placeholder="e.g. Electrical Safety Lead" value="${response.owner}" oninput="updateNcField('${std.id}', 'owner', this.value)">
                    </div>
                    <div class="form-group">
                        <label>Target Closure Date</label>
                        <input type="date" value="${response.targetDate}" onchange="updateNcField('${std.id}', 'targetDate', this.value)">
                    </div>
                </div>
                <div class="form-group">
                    <label>Auditor Observation / Remarks</label>
                    <textarea rows="2" placeholder="Describe the deficiency found..." oninput="updateNcField('${std.id}', 'observation', this.value)">${response.observation}</textarea>
                </div>
                <div class="form-group">
                    <label>Corrective & Preventive Action (CAPA) Plan</label>
                    <textarea rows="2" placeholder="List immediate repairs & preventive controls..." oninput="updateNcField('${std.id}', 'capa', this.value)">${response.capa}</textarea>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

// State modification handlers
function setResponseStatus(stdId, status) {
    const response = currentAudit.responses[stdId];
    response.status = status;

    // Toggle styling of the options buttons directly
    const card = document.getElementById(`card-${stdId}`);
    if (card) {
        const btnComp = card.querySelector('.option-compliant');
        const btnNonComp = card.querySelector('.option-non-compliant');
        const btnNa = card.querySelector('.option-na');
        
        btnComp.className = 'option-btn option-compliant';
        btnNonComp.className = 'option-btn option-non-compliant';
        btnNa.className = 'option-btn option-na';

        if (status === 'Compliant') btnComp.classList.add('active-compliant');
        if (status === 'Non-Compliant') btnNonComp.classList.add('active-non-compliant');
        if (status === 'N/A') btnNa.classList.add('active-na');

        // Toggle NC Detail entry form
        const ncBox = document.getElementById(`nc-box-${stdId}`);
        if (ncBox) {
            ncBox.style.display = status === 'Non-Compliant' ? 'flex' : 'none';
        }
    }

    updateDashboardMetrics();
    updateStandardProgressBars();
}

function updateNcField(stdId, field, value) {
    currentAudit.responses[stdId][field] = value;
    
    // Update risk badge on card if severity changes
    if (field === 'severity') {
        const card = document.getElementById(`card-${stdId}`);
        if (card) {
            const badge = card.querySelector('.badge-risk');
            if (badge) {
                badge.className = `badge badge-risk ${value.toLowerCase()}`;
                badge.textContent = `${value} Risk`;
            }
        }
    }
    updateDashboardMetrics();
}

// Calculate Compliance Rates & Counts
function updateDashboardMetrics() {
    let totalItems = auditStandards.length;
    let compliantCount = 0;
    let nonCompliantCount = 0;
    let naCount = 0;

    let criticalNc = 0;
    let highNc = 0;
    let mediumNc = 0;
    let lowNc = 0;

    Object.keys(currentAudit.responses).forEach(id => {
        const res = currentAudit.responses[id];
        if (res.status === 'Compliant') compliantCount++;
        else if (res.status === 'Non-Compliant') {
            nonCompliantCount++;
            if (res.severity === 'Critical') criticalNc++;
            else if (res.severity === 'High') highNc++;
            else if (res.severity === 'Medium') mediumNc++;
            else if (res.severity === 'Low') lowNc++;
        }
        else if (res.status === 'N/A') naCount++;
    });

    const auditableItems = totalItems - naCount;
    const complianceRate = auditableItems > 0 
        ? Math.round((compliantCount / auditableItems) * 100) 
        : 100;

    // Update Dashboard Metrics Cards
    document.getElementById("metric-compliance-rate").textContent = `${complianceRate}%`;
    document.getElementById("metric-total-ncs").textContent = nonCompliantCount;
    document.getElementById("metric-critical-ncs").textContent = criticalNc;
    document.getElementById("metric-completed").textContent = `${compliantCount + nonCompliantCount}/${auditableItems}`;

    // Highlight metrics based on values
    const rateCard = document.getElementById("metric-compliance-rate").closest('.stat-card');
    const ncCard = document.getElementById("metric-total-ncs").closest('.stat-card');
    
    if (complianceRate < 70) {
        document.getElementById("metric-compliance-rate").style.color = "var(--danger)";
    } else if (complianceRate < 90) {
        document.getElementById("metric-compliance-rate").style.color = "var(--warning)";
    } else {
        document.getElementById("metric-compliance-rate").style.color = "var(--success)";
    }

    if (nonCompliantCount > 0) {
        document.getElementById("metric-total-ncs").style.color = "var(--danger)";
    } else {
        document.getElementById("metric-total-ncs").style.color = "var(--success)";
    }

    updateStandardProgressBars();
}

// Update specific standard horizontal indicators
function updateStandardProgressBars() {
    const categories = ["IS", "BEE", "NBC", "BIS", "PCB"];
    categories.forEach(cat => {
        const catItems = auditStandards.filter(s => s.category === cat);
        let compliantCount = 0;
        let naCount = 0;

        catItems.forEach(s => {
            const res = currentAudit.responses[s.id];
            if (res.status === 'Compliant') compliantCount++;
            else if (res.status === 'N/A') naCount++;
        });

        const activeCount = catItems.length - naCount;
        const score = activeCount > 0 ? Math.round((compliantCount / activeCount) * 100) : 100;

        const fill = document.getElementById(`progress-fill-${cat.toLowerCase()}`);
        const text = document.getElementById(`progress-text-${cat.toLowerCase()}`);
        if (fill) fill.style.width = `${score}%`;
        if (text) text.textContent = `${score}% Compliance`;
    });
}

// Build NC Report tab and charts dynamically
function buildReportPreview() {
    // Facility Metadata details
    document.getElementById("rep-facility-name").textContent = currentAudit.facilityName || "Unspecified Facility";
    document.getElementById("rep-auditor-name").textContent = currentAudit.auditorName || "Unspecified Auditor";
    document.getElementById("rep-audit-date").textContent = currentAudit.auditDate || "Unspecified Date";
    document.getElementById("rep-scope").textContent = currentAudit.scope;

    // Filter responses to get non-compliance array
    const ncList = [];
    let compliantCount = 0;
    let naCount = 0;

    let lowCount = 0, medCount = 0, highCount = 0, critCount = 0;
    let isNc = 0, beeNc = 0, nbcNc = 0, bisNc = 0, pcbNc = 0;

    Object.keys(currentAudit.responses).forEach(id => {
        const item = auditStandards.find(s => s.id === id);
        const res = currentAudit.responses[id];
        
        if (res.status === "Non-Compliant") {
            ncList.push({
                id: id,
                clause: item.clause,
                title: item.title,
                category: item.category,
                severity: res.severity,
                observation: res.observation || "No observation recorded.",
                capa: res.capa || "CAPA plan pending.",
                owner: res.owner || "Unassigned",
                targetDate: res.targetDate || "Not Set"
            });

            // Count for charts
            if (res.severity === 'Low') lowCount++;
            else if (res.severity === 'Medium') medCount++;
            else if (res.severity === 'High') highCount++;
            else if (res.severity === 'Critical') critCount++;

            if (item.category === 'IS') isNc++;
            else if (item.category === 'BEE') beeNc++;
            else if (item.category === 'NBC') nbcNc++;
            else if (item.category === 'BIS') bisNc++;
            else if (item.category === 'PCB') pcbNc++;

        } else if (res.status === "Compliant") {
            compliantCount++;
        } else if (res.status === "N/A") {
            naCount++;
        }
    });

    const auditableCount = auditStandards.length - naCount;
    const compRate = auditableCount > 0 ? Math.round((compliantCount / auditableCount) * 100) : 100;
    
    // Fill stats
    document.getElementById("rep-stat-rate").textContent = `${compRate}%`;
    document.getElementById("rep-stat-total").textContent = ncList.length;

    // Populate Report NC Table
    const tableBody = document.getElementById("report-nc-table-body");
    tableBody.innerHTML = "";

    if (ncList.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--success); font-weight: 600; padding: 2rem;">
                    <i data-lucide="shield-check" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"></i>
                    All items compliant! No Non-Conformances found.
                </td>
            </tr>
        `;
    } else {
        // Sort Critical first, then High, Med, Low
        const priority = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
        ncList.sort((a,b) => priority[b.severity] - priority[a.severity]);

        ncList.forEach(nc => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td style="white-space: nowrap;">
                    <span class="severity-indicator ${nc.severity.toLowerCase()}"></span>
                    <strong>${nc.id}</strong><br>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${nc.clause}</span>
                </td>
                <td>
                    <strong>${nc.title}</strong><br>
                    <p style="font-size: 0.85rem; margin-top: 4px; color: var(--text-muted);">${nc.observation}</p>
                </td>
                <td>
                    <span class="badge badge-risk ${nc.severity.toLowerCase()}">${nc.severity}</span>
                </td>
                <td>
                    <p style="font-size: 0.85rem; font-style: italic;">${nc.capa}</p>
                </td>
                <td style="white-space: nowrap;">
                    <span style="font-size: 0.85rem; font-weight: 500;">${nc.owner}</span>
                </td>
                <td style="white-space: nowrap;">
                    <span style="font-size: 0.85rem;">${nc.targetDate}</span>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    if (window.lucide) {
        lucide.createIcons();
    }

    // Render Dashboard & Report charts using Chart.js
    renderCharts(compliantCount, ncList.length, naCount, critCount, highCount, medCount, lowCount, isNc, beeNc, nbcNc, bisNc, pcbNc);
}

// Chart.js helper to avoid overlapping instances
function renderCharts(comp, nc, na, crit, high, med, low, is, bee, nbc, bis, pcb) {
    if (typeof Chart === 'undefined') return;

    // 1. Compliance rate Chart (Doughnut)
    const ctxComp = document.getElementById("chart-compliance-rate");
    if (ctxComp) {
        if (complianceChart) complianceChart.destroy();
        complianceChart = new Chart(ctxComp, {
            type: 'doughnut',
            data: {
                labels: ['Compliant', 'Non-Compliant', 'N/A'],
                datasets: [{
                    data: [comp, nc, na],
                    backgroundColor: ['#10b981', '#ef4444', '#64748b'],
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted').trim() }
                    }
                }
            }
        });
    }

    // 2. Risk breakdown Chart (Bar)
    const ctxRisk = document.getElementById("chart-risk-breakdown");
    if (ctxRisk) {
        if (riskChart) riskChart.destroy();
        riskChart = new Chart(ctxRisk, {
            type: 'bar',
            data: {
                labels: ['Critical', 'High', 'Medium', 'Low'],
                datasets: [{
                    label: 'NC Count',
                    data: [crit, high, med, low],
                    backgroundColor: ['#7f1d1d', '#9a3412', '#78350f', '#14532d'],
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted').trim() },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    x: {
                        ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted').trim() },
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// LocalStorage Persistence Actions
function saveCurrentAuditDraft() {
    // Validate facility name before saving
    if (!currentAudit.facilityName) {
        showToast("Please enter a Facility Name before saving.", "warning");
        switchTab("setup");
        document.getElementById("facilityName").focus();
        return;
    }

    // Load current list
    const auditsJson = localStorage.getItem("electrical-audits-list");
    savedAudits = auditsJson ? JSON.parse(auditsJson) : [];

    // Check if existing audit needs updating
    const existingIndex = savedAudits.findIndex(a => a.id === currentAudit.id);
    if (existingIndex >= 0) {
        savedAudits[existingIndex] = currentAudit;
    } else {
        savedAudits.push(currentAudit);
    }

    localStorage.setItem("electrical-audits-list", JSON.stringify(savedAudits));
    loadSavedAuditsList();
    showToast("Audit report saved successfully to browser local database.", "success");
}

function loadSavedAuditsList() {
    const listContainer = document.getElementById("saved-audits-list");
    if (!listContainer) return;

    const auditsJson = localStorage.getItem("electrical-audits-list");
    savedAudits = auditsJson ? JSON.parse(auditsJson) : [];

    listContainer.innerHTML = "";
    if (savedAudits.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No saved audits found.</div>`;
        return;
    }

    savedAudits.forEach(audit => {
        // Calculate dynamic compliance for the card summary
        let comp = 0, na = 0;
        Object.keys(audit.responses).forEach(k => {
            if (audit.responses[k].status === "Compliant") comp++;
            else if (audit.responses[k].status === "N/A") na++;
        });
        const active = auditStandards.length - na;
        const rate = active > 0 ? Math.round((comp / active) * 100) : 100;

        const card = document.createElement("div");
        card.className = "saved-audit-card";
        card.innerHTML = `
            <div class="saved-audit-info">
                <h4>${audit.facilityName || "Unnamed Facility"}</h4>
                <p>Auditor: ${audit.auditorName || "Unknown"} | Date: ${audit.auditDate} | Compliance: <strong>${rate}%</strong></p>
            </div>
            <div class="saved-audit-actions">
                <button class="btn btn-secondary" onclick="loadSavedAudit('${audit.id}')">
                    <i data-lucide="edit" style="width: 14px; height: 14px;"></i> Load
                </button>
                <button class="btn btn-danger" onclick="deleteSavedAudit('${audit.id}')">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
            </div>
        `;
        listContainer.appendChild(card);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
}

function loadSavedAudit(id) {
    const target = savedAudits.find(a => a.id === id);
    if (!target) return;

    // Deep copy load to prevent direct ref bugs
    currentAudit = JSON.parse(JSON.stringify(target));

    // Populate Setup inputs
    document.getElementById("facilityName").value = currentAudit.facilityName;
    document.getElementById("auditorName").value = currentAudit.auditorName;
    document.getElementById("auditDate").value = currentAudit.auditDate;
    document.getElementById("auditScope").value = currentAudit.scope;

    // Re-render
    renderChecklist();
    updateDashboardMetrics();
    switchTab("setup");
    showToast(`Loaded report: ${currentAudit.facilityName}`, "success");
}

function deleteSavedAudit(id) {
    if (confirm("Are you sure you want to permanently delete this saved audit?")) {
        savedAudits = savedAudits.filter(a => a.id !== id);
        localStorage.setItem("electrical-audits-list", JSON.stringify(savedAudits));
        loadSavedAuditsList();
        
        // If deleting active loaded audit, reset
        if (currentAudit.id === id) {
            createNewAudit();
        }
        showToast("Audit deleted.", "warning");
    }
}

// Export/Import JSON Config
function exportAuditJson() {
    if (!currentAudit.facilityName) {
        showToast("Enter a facility name before exporting.", "warning");
        return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentAudit, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Electrical_Audit_${currentAudit.facilityName.replace(/\s+/g, '_')}_${currentAudit.auditDate}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Audit JSON exported.", "success");
}

function triggerImportJson() {
    document.getElementById("import-file-input").click();
}

function importAuditJson(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed.id || !parsed.responses) {
                throw new Error("Invalid format. Missing required audit properties.");
            }
            
            // Check compatibility with existing template
            currentAudit = parsed;
            
            // Fill missing standard responses if importing older/different template
            auditStandards.forEach(std => {
                if (!currentAudit.responses[std.id]) {
                    currentAudit.responses[std.id] = {
                        status: "N/A",
                        severity: std.defaultRisk,
                        observation: "",
                        capa: "",
                        owner: "",
                        targetDate: ""
                    };
                }
            });

            // Populate form fields
            document.getElementById("facilityName").value = currentAudit.facilityName || "";
            document.getElementById("auditorName").value = currentAudit.auditorName || "";
            document.getElementById("auditDate").value = currentAudit.auditDate || "";
            document.getElementById("auditScope").value = currentAudit.scope || "Full Site Audit";

            renderChecklist();
            updateDashboardMetrics();
            switchTab("setup");
            showToast("Audit JSON imported successfully.", "success");
        } catch (err) {
            showToast("Failed to parse JSON file: " + err.message, "danger");
        }
    };
    reader.readAsText(file);
    event.target.value = ""; // Clear file selector input
}

// Print / PDF Export trigger
function exportReportPdf() {
    window.print();
}

// Premium visual features - Light / Dark toggle
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        localStorage.setItem("electrical-audit-theme", "dark");
        themeIcon.setAttribute("data-lucide", "moon");
    } else {
        body.classList.add("light-theme");
        localStorage.setItem("electrical-audit-theme", "light");
        themeIcon.setAttribute("data-lucide", "sun");
    }
    
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Re-draw charts with colors corresponding to new theme background text styles
    if (document.getElementById("report-section").style.display !== "none") {
        buildReportPreview();
    }
}

// Show beautiful Toast Alert
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconName = "info";
    if (type === "success") iconName = "check-circle";
    if (type === "warning") iconName = "alert-triangle";
    if (type === "danger") iconName = "x-circle";

    toast.innerHTML = `
        <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    if (window.lucide) {
        lucide.createIcons();
    }

    setTimeout(() => {
        toast.style.animation = "slideIn 0.3s ease reverse forwards";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * Multi-Language Clinical Diagnostic Translation Engine
 * Languages Supported: English (en), Kannada (kn - ಕನ್ನಡ), Hindi (hi - हिन्दी)
 */

const I18N_DATA = {
  en: {
    langName: "English",
    brandTitle: "Edge Based Clinical AI",
    brandSubtitle: "Unified Multi-Disease Diagnostic Suite",
    modelsActive: "15 Clinical Models Active",
    homePortal: "Home Portal",
    manualBtn: "📚 Disease & Treatment Manual",
    samplesGalleryBtn: "Benchmark Gallery (121)",
    pageTitle: "Unified Multi-Disease Clinical Diagnostic Platform",
    pageSubtitle: "High-precision AI medical imaging diagnostics with real-time clinical uncertainty quantification and evidence-based treatment guidelines. Select a disease modality below to initiate analysis.",
    step1Title: "Select Clinical Disease Modality",
    selectModality: "Select Modality:",
    step2Title: "Upload Clinical Scan & Run Inference",
    dropzoneTitle: "Upload Clinical Image",
    browseBtn: "Browse Files",
    removeBtn: "✕ Remove & Select Different Scan",
    targetDisease: "Target Disease",
    diagnosticModality: "Diagnostic Modality",
    uncertaintyMetric: "Uncertainty Metric",
    shannonEntropy: "Diagnostic Uncertainty Score",
    deepLearningCore: "Deep Learning Core",
    edgeConvNet: "Edge Convolutional Network",
    runAnalysisBtn: "Run Clinical AI Analysis",
    analyzingTicker: "Analyzing clinical scan and calculating diagnostics...",
    reportTitle: "AI Clinical Diagnostic Report",
    caseId: "Case ID",
    timestamp: "Timestamp",
    patientDetailsTitle: "Patient Demographics & Clinical Information",
    patientRecordVerified: "Verified Electronic Health Record (EHR)",
    patientName: "Patient Name",
    patientAge: "Age",
    patientSex: "Sex / Gender",
    patientAddress: "Residential Address",
    patientIntakeTitle: "Patient Demographic Intake",
    pathologyDetectedTag: "PATHOLOGY DETECTED — CLINICAL INTERVENTION ADVISED",
    normalScanTag: "NORMAL SCAN — NEGATIVE FOR PATHOLOGY",
    modelConfidenceTitle: "Model Confidence Score",
    modelConfidenceDesc: "Statistical confidence of predicted pathology across neural layers.",
    highConfidenceBadge: "High Confidence",
    uncertaintyTitle: "Diagnostic Uncertainty Index",
    uncertaintyDesc: "Quantified diagnostic uncertainty across all possible clinical classes.",
    highReliabilityBadge: "High Reliability",
    moderateReliabilityBadge: "Moderate Reliability",
    lowReliabilityBadge: "Clinical Review Advised",
    classProbabilitiesTitle: "Diagnostic Class Probabilities",
    probVectorLabel: "Probability (%)",
    diagnosticSummaryTitle: "Clinical Guidance & Diagnostic Summary",
    treatmentSectionTitle: "Clinical Disease Explanation & Suggested Treatment Protocols",
    tabPharmacotherapy: "Pharmacotherapy",
    tabSurgery: "Surgical & Interventions",
    tabSurveillance: "Surveillance & Care",
    medsTitle: "Pharmacotherapy — Primary Regimens & Medications",
    surgeryTitle: "Interventional & Surgical Procedures",
    monitorTitle: "Surveillance and Care — Monitoring & Lifestyle",
    printReportBtn: "🖨️ Print / Export Medical Report",
    analyzeAnotherBtn: "🔄 Analyze Another Scan",
    voiceReaderTitle: "AI Clinical Voice Reader",
    readReportBtn: "🔊 Read Report Aloud",
    pauseAudioBtn: "⏸️ Pause Voice",
    resumeAudioBtn: "▶️ Resume Voice",
    stopAudioBtn: "⏹️ Stop Voice",
    readSpeedLabel: "Voice Speed",
    voiceStatusReady: "Ready to read clinical report aloud",
    voiceStatusPlaying: "Reading clinical report aloud in English...",
    voiceStatusPaused: "Voice narration paused",
    readVerdictBtn: "Listen to Verdict",
    readMetricsBtn: "Listen to Metrics",
    readGuidanceBtn: "Listen to Guidance",
    readExplanationBtn: "Listen to Explanation",
    readTreatmentBtn: "Listen to Treatment",
    modalPathologyHeading: "Pathophysiology & Disease Description:",
    modalSymptomsHeading: "Typical Clinical Symptoms & Hallmarks:",
    modalMedsHeading: "Recommended Pharmacotherapy",
    modalSurgeryHeading: "Surgical & Interventional Procedures",
    modalMonitorHeading: "Monitoring, Prevention & Care",
    unifiedSectionTitle: "Unified Multi-Disease Clinical Diagnostic Workspace",
    unifiedSectionSubtitle: "Select any of the 15 clinical categories (Brain MRI, Parkinson Drawing, Alzheimer MRI, Stroke CT, Spinal Cord Tumor MRI, Chest X-Ray, Tuberculosis, Lung Cancer, Pancreatic Cancer, Liver Tumor, Bone Tumor, Breast Biopsy, Retinal OCT, Fundus, or Smear), upload the medical scan, and run deep learning inference with uncertainty quantification, GradCAM explainability, and multi-lingual voice narration.",
    sampleScansTitle: "🚀 Instant Sample Scans (Click to Test Any Disease):",
    visualInspectionTitle: "Exact Scan Inspection & Modality Verification",
    visualInspectionSubtitle: "Direct visual side-by-side comparison between the patient's analyzed scan and the canonical clinical reference.",
    allSixActive: "All 15 Disease Models Online & Active",
    dropAnyPrompt: "Upload medical scan for the selected clinical category (PNG/JPG)",
    homeBadge: "Unified Clinical Diagnostic Suite • 15 Disease Models Online",
    homeHeadline: "Uncertainty-Aware Explainable Deep Learning Framework for Edge-Based Clinical Diagnosis",
    homeSubtitle: "An integrated multi-disease clinical intelligence platform consolidating neurological, cerebrovascular, spinal, pulmonary, oncological, orthopedic, ophthalmological, and haematological diagnostics with real-time epistemic uncertainty quantification.",
    homeEnterBtn: "Enter All-In-One Diagnostic Application",
    footerText: "NeuroEdge Clinical AI • Uncertainty-Aware Explainable Deep Learning System • Edge Diagnostic Architecture",

    // Auto-Detect & Kaggle Benchmark Gallery Translations
    autoDetectModality: "⚡ Auto-Detect Modality (All 15 Kaggle Datasets)",
    autoDetectBadge: "AI Auto-Classifier",
    aiModalityIdentified: "AI Modality Identified",
    showcaseBadgePill: "48 Authentic Medical Benchmark Scans",
    showcaseTitle: "Kaggle Clinical Dataset Benchmark Gallery",
    showcaseDesc: "8 verified clinical sample scans from each of the 6 Kaggle datasets (48 total). Click any image to instantly test AI auto-detection and generate full uncertainty diagnostics.",
    filterAll: "All 48 Kaggle Scans",
    autoDetectedModality: "Auto-Detected Modality",
    testAutoDetectBtn: "⚡ Test in Auto-Detect",

    // Disease Specific Content
    diseases: {
      auto: {
        title: "AI Auto-Detect (All 6 Datasets)",
        modality: "Multi-Modal Medical Image Classifier",
        badge: "Auto-Detect",
        desc: "Upload any medical scan (Brain MRI, Chest X-Ray, Retinal OCT, Fundus, Breast Histology, or Blood Smear). Neural vision heuristics automatically classify the disease modality and route to the specialized diagnostic model.",
        samplePrompt: "Upload any clinical scan — AI will automatically identify disease modality (PNG/JPG)"
      },
      brain: {
        title: "Brain Tumor Detection",
        modality: "Brain MRI (Magnetic Resonance Imaging)",
        badge: "MRI Scan",
        desc: "Axial or coronal T1, T2, or FLAIR brain MRI scan. Evaluates intracranial mass lesions and neoplasm margins.",
        samplePrompt: "Upload axial or coronal Brain MRI scan (PNG/JPG)",
        classes: ["Brain Tumor Lesion", "Normal Brain Anatomy"],
        explanation: "Brain tumors represent abnormal collections of neoplastic cells within the cranial cavity. Infiltrative primary neoplasms such as High-Grade Gliomas (Glioblastoma Multiforme) and Astrocytomas disrupt neural parenchyma and compromise the blood-brain barrier. This provokes vasogenic edema, mass effect, elevated intracranial pressure (ICP), focal deficits, and seizure foci.",
        symptoms: [
          "Progressive early-morning tension headaches with projectile nausea or vomiting",
          "New-onset focal or generalized tonic-clonic seizures without prior epilepsy history",
          "Unilateral hemiparesis, sensory loss, visual field cuts (hemianopia), or aphasia",
          "Subtle cognitive slowing, memory disturbances, and personality alterations"
        ],
        meds: [
          "Dexamethasone (4-8 mg QDS): Potent synthetic glucocorticoid initiated immediately to downregulate tumor VEGF expression and reduce peritumoral vasogenic edema.",
          "Levetiracetam (Keppra 500-1000 mg BD): First-line anticonvulsant prophylaxis with minimal hepatic cytochrome P450 interactions and low drug-interaction profile.",
          "Temozolomide (TMZ): Oral DNA-alkylating chemotherapeutic agent administered concomitantly with cranial radiation followed by adjuvant maintenance (Stupp Protocol).",
          "Bevacizumab (Avastin 10 mg/kg Q2W): Humanized anti-VEGF monoclonal antibody for recurrent glioblastoma refractory to initial chemoradiation."
        ],
        surgery: [
          "Image-Guided Craniotomy: Maximal safe neurosurgical resection utilizing neuronavigation, 5-ALA fluorescence, and intraoperative cortical mapping.",
          "Stereotactic Biopsy: Indicated for deep thalamic, basal ganglia, or brainstem lesions to obtain tissue for molecular grading (IDH1/2 mutation, MGMT methylation, 1p/19q co-deletion).",
          "Stereotactic Radiosurgery (SRS / Gamma Knife / CyberKnife): High-dose ablative radiation for localized brain metastases or skull-base meningiomas."
        ],
        monitoring: [
          "Surveillance Contrast MRI: T1+Gadolinium, T2/FLAIR, and DWI every 8 to 12 weeks to distinguish true tumor progression from pseudoprogression.",
          "Neuro-Rehabilitation: Structured physical therapy, occupational therapy, and speech therapy for focal motor and language deficits.",
          "Endocrine Surveillance: Pituitary and hypothalamic axis monitoring if tumor is perisellar or following cranial irradiation."
        ]
      },
      pnm: {
        title: "Chest Pneumonia Analysis",
        modality: "Chest Radiography (X-Ray PA/AP View)",
        badge: "Chest X-Ray",
        desc: "Posterior-anterior (PA) or anterior-posterior (AP) chest radiograph. Screens for pulmonary consolidation.",
        samplePrompt: "Upload digital PA/AP Chest X-Ray radiograph",
        classes: ["Pneumonia Infiltrate", "Normal Lung Fields"],
        explanation: "Pneumonia is an acute inflammatory infection of the pulmonary parenchyma characterized by exudative alveolar filling and consolidation. Pathogens (most commonly Streptococcus pneumoniae, Haemophilus influenzae, or respiratory viruses) proliferate in alveolar sacs, inciting an intense neutrophilic response that impedes ventilation-perfusion matching and induces hypoxemia.",
        symptoms: [
          "Productive cough with purulent, green, or rust-colored sputum",
          "High fever, rigor, night sweats, diaphoresis, and sharp pleuritic chest pain",
          "Tachypnea (respiratory rate > 20/min), dyspnea, and respiratory muscle fatigue",
          "Auscultatory crackles / rales, bronchial breath sounds, and dullness to percussion"
        ],
        meds: [
          "Outpatient Community-Acquired (CAP): Amoxicillin-Clavulanate (875/125 mg BD) combined with Azithromycin (500 mg Day 1, then 250 mg daily) or Doxycycline (100 mg BD).",
          "Inpatient CAP (Non-ICU): IV Ceftriaxone (1-2 g daily) plus Azithromycin (500 mg daily), or respiratory monotherapy with Levofloxacin (750 mg daily) / Moxifloxacin (400 mg daily).",
          "Hospital-Acquired (HAP / VAP) or MRSA Risk: Piperacillin-Tazobactam (Zosyn 4.5 g Q6H) or Cefepime (2 g Q8H) plus Vancomycin (15-20 mg/kg BD with trough monitoring).",
          "Viral Etiology (Influenza): Oral Oseltamivir (Tamiflu 75 mg BD for 5 days) commenced within 48 hours of symptom onset."
        ],
        surgery: [
          "Thoracentesis: Diagnostic pleural sampling and therapeutic evacuation for suspected parapneumonic effusion or frank empyema.",
          "Chest Tube (Tube Thoracostomy): Intercostal catheter placement with underwater seal drainage for loculated empyema (pH < 7.2, glucose < 2.2 mmol/L).",
          "High-Flow Nasal Cannula (HFNC) or Mechanical Ventilation: For acute hypoxemic respiratory failure requiring positive end-expiratory pressure."
        ],
        monitoring: [
          "Continuous Pulse Oximetry: Titrate supplemental oxygen to maintain target SpO2 94-98% (88-92% in chronic hypercapnia).",
          "Repeat Radiography: Follow-up chest X-ray at 6-8 weeks post-recovery to confirm radiographic clearing and exclude endobronchial malignancy.",
          "Preventive Immunization: Administer pneumococcal conjugate vaccine (PCV20) and annual influenza vaccination upon recovery."
        ]
      },
      oct: {
        title: "Retinal Diseases (OCT)",
        modality: "Optical Coherence Tomography (B-Scan)",
        badge: "Retinal OCT",
        desc: "High-resolution cross-sectional OCT B-scan through fovea. Detects CNV, DME, and Hard Drusen.",
        samplePrompt: "Upload macular OCT B-Scan cross section",
        classes: ["CNV", "DME", "Hard Drusen", "Normal Retinal Epithelium"],
        explanation: "Optical Coherence Tomography (OCT) resolves microstructural retinal pathology across the macula and retinal pigment epithelium (RPE). Conditions include Choroidal Neo-Vascularization (CNV / exudative Wet AMD), Diabetic Macular Edema (DME), and Hard Drusen (precursor to geographic atrophy). Unchecked subretinal neovascularization leads to disciform scarring and irreversible central scotoma.",
        symptoms: [
          "Metamorphopsia (straight lines appearing wavy or distorted on Amsler grid)",
          "Central visual field blur or dark central blind spot (scotoma)",
          "Impaired color perception and contrast sensitivity",
          "Difficulty reading or recognizing faces in photopic conditions"
        ],
        meds: [
          "Anti-VEGF Intravitreal Therapy: Aflibercept (Eylea 2 mg), Ranibizumab (Lucentis 0.5 mg), or Faricimab (Vabysmo 6 mg) on monthly or Treat-and-Extend protocols to halt CNV angiogenesis and dry macular fluid.",
          "Intravitreal Corticosteroid Implants: Dexamethasone implant (Ozurdex 0.7 mg) or Fluocinolone acetonide (Iluvien 0.19 mg) for persistent inflammatory Diabetic Macular Edema.",
          "AREDS2 Antioxidant Formulation: Vitamin C (500mg), Vitamin E (400 IU), Lutein (10mg), Zeaxanthin (2mg), Zinc (80mg), Copper (2mg) to decrease 5-year intermediate-to-late AMD progression risk by 25%."
        ],
        surgery: [
          "Photodynamic Therapy (PDT): Intravenous Verteporfin infusion followed by non-thermal 689 nm laser activation to selectively occlude polypoidal choroidal neovascular networks.",
          "Focal Macular Laser Photocoagulation: Argon green laser to direct micro-pulses at leaking microaneurysms >500 µm from the foveal center.",
          "Pars Plana Vitrectomy (PPV): Surgical excision of vitreomacular traction (VMT) or epiretinal membranes contributing to cystoid macular edema."
        ],
        monitoring: [
          "Daily Amsler Grid Self-Testing: Monocular home testing under good lighting; immediate evaluation if new distortion or dark spot occurs.",
          "Serial OCT Imaging: Quantitative optical coherence tomography central subfield thickness (CST) measurements every 4 to 8 weeks during active injection phase.",
          "Complete Tobacco Cessation: Smoking increases AMD progression and wet conversion risk four-fold; UV400 sunglass protection recommended."
        ]
      },
      dia_ret: {
        title: "Diabetic Retinopathy",
        modality: "Color Fundus Photography",
        badge: "Fundus Photo",
        desc: "Digital retinal fundus photograph. Evaluates microaneurysms, hemorrhages, and exudates.",
        samplePrompt: "Upload 45° or 50° digital retinal fundus photograph",
        classes: ["Mild NPDR", "Moderate NPDR", "Normal Fundus", "Severe NPDR"],
        explanation: "Diabetic Retinopathy (DR) is a microvascular complication of chronic hyperglycemia causing pericyte loss, capillary basement membrane thickening, and microvascular non-perfusion. Stages range from Non-Proliferative (NPDR with microaneurysms and exudates) to Proliferative Diabetic Retinopathy (PDR), where retinal ischemia triggers vascular endothelial growth factor (VEGF) secretion and fragile neovascularization, predisposing to catastrophic vitreous hemorrhage and retinal detachment.",
        symptoms: [
          "Asymptomatic in early non-proliferative stages",
          "Fluctuating blurred vision related to blood glucose shifts",
          "Sudden shower of dark floaters or 'cobwebs' (vitreous hemorrhage)",
          "Sudden partial or complete visual curtain loss (retinal detachment)"
        ],
        meds: [
          "Intensive Glycemic Optimization: Lowering HbA1c to target < 7.0% (individualized) halves diabetic microvascular progression risk.",
          "Strict Systemic Hemodynamic Control: Blood pressure target < 130/80 mmHg using ACE inhibitors (Lisinopril) or ARBs (Losartan) to reduce retinal capillary shear stress.",
          "Lipid-Lowering Statin Therapy: Atorvastatin (20-40 mg) reduces hard lipid exudate deposition and microvascular permeability.",
          "Intravitreal Anti-VEGF (Aflibercept / Ranibizumab): Primary therapy for center-involving macular edema and adjunct before PDR laser surgery."
        ],
        surgery: [
          "Panretinal Photocoagulation (PRP Laser): Targeted laser ablation of hypoxic peripheral retina to quench VEGF drive and induce neovascular regression in severe NPDR and PDR.",
          "Focal/Grid Laser Photocoagulation: Treats leaking microaneurysms in non-center-involved clinically significant macular edema.",
          "Pars Plana Vitrectomy (PPV): Indicated for non-clearing vitreous hemorrhage (> 1-3 months), tractional retinal detachment threatening the macula, or dense fibrovascular proliferation."
        ],
        monitoring: [
          "Dilated Retinal Surveillance: Mild NPDR: annual exam; Moderate NPDR: every 6 months; Severe NPDR: every 2-3 months; PDR: every 4-6 weeks.",
          "Renal & Cardiovascular Surveillance: Regular urine albumin-to-creatinine ratio (ACR) and eGFR monitoring; diabetic retinopathy strongly correlates with diabetic nephropathy.",
          "Valsalva Precautions: Avoid heavy straining, head-down inversions, or vigorous isometric exercise when untreated active neovascularization is present."
        ]
      },
      breast: {
        title: "Breast Cancer (IDC) Analysis",
        modality: "Histopathology Biopsy (H&E Stain)",
        badge: "Biopsy Slide",
        desc: "Hematoxylin & Eosin (H&E) stained histopathology biopsy patch. Detects Invasive Ductal Carcinoma.",
        samplePrompt: "Upload high-power field (HPF) histopathology image",
        classes: ["Invasive Ductal Carcinoma", "Benign / Normal Tissue"],
        explanation: "Invasive Ductal Carcinoma (IDC), also known as Infiltrating Ductal Carcinoma, is the most prevalent malignant epithelial breast neoplasm (~80% of invasive breast cancers). Tumor cells originating in the mammary lactiferous ductal system traverse the basement membrane, invading the stroma with potential for regional axillary lymph node and hematogenous dissemination. Prognosis and therapeutics depend upon Nottingham Histologic Grade, TNM Stage, and molecular biomarkers (ER, PR, HER2, Ki-67).",
        symptoms: [
          "Painless, firm, irregular solitary breast mass with distinct borders",
          "Skin dimpling, retraction, or peau d'orange texture (dermal lymphatic invasion)",
          "Recent nipple inversion, scaling, or spontaneous serosanguinous nipple discharge",
          "Palpable, matted ipsilateral axillary lymphadenopathy"
        ],
        meds: [
          "Endocrine (Hormone) Therapy for ER+/PR+: Tamoxifen (20 mg daily for premenopausal); Aromatase Inhibitors (Letrozole 2.5 mg / Anastrozole 1 mg) combined with ovarian function suppression (Leuprolide) for postmenopausal women.",
          "Targeted Anti-HER2 Monoclonal Antibodies: Trastuzumab (Herceptin) plus Pertuzumab (Perjeta) in HER2-amplified malignancies, significantly reducing metastatic recurrence.",
          "Cytotoxic Chemotherapy: Neoadjuvant or adjuvant regimens such as AC-T (Doxorubicin + Cyclophosphamide followed by Paclitaxel), or Docetaxel + Carboplatin + Trastuzumab + Pertuzumab (TCHP).",
          "Immune Checkpoint Inhibitors: Pembrolizumab (Keytruda) in combination with chemotherapy for high-risk early-stage Triple-Negative Breast Cancer (TNBC)."
        ],
        surgery: [
          "Breast-Conserving Surgery (Lumpectomy / Partial Mastectomy): Wide local excision with clean negative surgical margins (no ink on tumor).",
          "Sentinel Lymph Node Biopsy (SLNB): Radiotracer and blue dye localization to stage axillary nodal metastasis and minimize lymphedema risk.",
          "Total / Modified Radical Mastectomy: Removal of all breast parenchyma and axillary levels I/II dissection when extensive multicentricity exists, with options for immediate autologous (DIEP flap) or implant reconstruction."
        ],
        monitoring: [
          "Adjuvant Radiation Therapy: Whole-breast radiotherapy (WBRT) with tumor-bed boost following lumpectomy, or post-mastectomy radiation (PMRT) for positive nodes or tumors > 5 cm.",
          "Diagnostic Surveillance: Annual bilateral mammography and dynamic contrast-enhanced breast MRI for dense breast tissue or BRCA mutation carriers.",
          "DEXA Bone Mineral Density Scans: Baseline and biennial bone density surveillance during aromatase inhibitor therapy to prevent osteopenia."
        ]
      },
      mal: {
        title: "Malaria Parasite Smear",
        modality: "Peripheral Blood Smear (Giemsa)",
        badge: "Blood Smear",
        desc: "Giemsa-stained thin peripheral blood smear micrograph. Identifies intracellular Plasmodium trophozoites.",
        samplePrompt: "Upload Giemsa-stained thin blood smear cell image",
        classes: ["Parasitized Red Blood Cell", "Uninfected Normal Cell"],
        explanation: "Malaria is a life-threatening protozoan infection caused by Plasmodium parasites (predominantly P. falciparum, P. vivax, P. malariae, P. ovale, P. knowlesi) transmitted via the bite of infective female Anopheles mosquitoes. Sporozoites invade hepatocytes, undergo exoerythrocytic schizogony, and emerge as merozoites invading erythrocytes. Intra-erythrocytic replication leads to cyclical hemolysis, inflammatory cytokine cascades, and in P. falciparum, microvascular cytoadherence and sequestration causing severe cerebral malaria, severe anemia, and acute kidney injury.",
        symptoms: [
          "Cyclical paroxysms: cold rigors followed by high fever spikes (39-41°C) and profuse diaphoresis",
          "Severe headache, generalized arthralgia, myalgia, nausea, and vomiting",
          "Hepatosplenomegaly, jaundice, and hemolytic pallor",
          "In severe malaria: altered sensorium, generalized seizures, respiratory distress, dark 'blackwater' hemoglobinuria"
        ],
        meds: [
          "First-Line ACT for Uncomplicated P. falciparum: Artemether-Lumefantrine (Coartem: 6-dose regimen over 3 days) or Artesunate-Amodiaquine, achieving rapid clearance of blood parasitemia within 24-48 hours.",
          "Radical Cure for P. vivax / P. ovale: Chloroquine (or ACT) plus Primaquine (0.25 - 0.5 mg/kg daily for 14 days) or single-dose Tafenoquine to eradicate hypnozoites; strict prior G6PD enzyme assay mandatory to prevent severe intravascular hemolysis.",
          "Intravenous Artesunate for Severe Malaria: IV Artesunate 2.4 mg/kg given at 0, 12, and 24 hours, continuing once daily until oral ACT can be tolerated (superior to intravenous quinine in survival).",
          "Supportive Antipyretics: Paracetamol (10-15 mg/kg every 4-6 hours); avoid NSAIDs (aspirin, ibuprofen) due to acute thrombocytopenia risk."
        ],
        surgery: [
          "Intensive Care Hemodynamic & Airway Management: For cerebral malaria or respiratory distress; endotracheal intubation, glycemic correction (prevent hypoglycemia), and careful fluid restriction to prevent non-cardiogenic pulmonary edema.",
          "Emergency Packed Red Cell Transfusion: Indicated for severe malarial anemia with hematocrit < 20% (Hb < 7 g/dL) or clinical hemodynamic instability.",
          "Renal Replacement Therapy (Hemodialysis / CRRT): For acute tubular necrosis and malarial acute renal failure."
        ],
        monitoring: [
          "Serial Parasitological Monitoring: Thick and thin Giemsa smears evaluated every 12 to 24 hours until parasitemia drops to 0% and clinical defervescence occurs.",
          "Blood Glucose Monitoring: Check blood glucose every 4-6 hours; quinine and severe malaria frequently provoke profound hypoglycemia.",
          "Chemoprophylaxis & Vector Defense: Doxycycline (100 mg daily), Atovaquone-Proguanil (Malarone), or Mefloquine for travelers; pyrethroid-treated bed nets (LLINs) and indoor residual spraying in endemic regions."
        ]
      },
      parkinson: {
        title: "Parkinson's Disease Detection",
        modality: "Spiral & Wave Kinematic Drawings",
        badge: "Drawing Test",
        desc: "Kinematic drawing analysis evaluating involuntary resting tremor, velocity perturbation, and dysgraphia micrographia.",
        samplePrompt: "Upload spiral or wave pen-and-paper drawing (PNG/JPG)",
        classes: ["Parkinson's Disease Detected", "Normal Healthy Drawing"],
        explanation: "Parkinson's Disease is a progressive neurodegenerative movement disorder characterized by the loss of dopaminergic neurons in the substantia nigra pars compacta and intracellular accumulation of Lewy bodies (alpha-synuclein). Motor hallmarks include bradykinesia, 4-6 Hz resting 'pill-rolling' tremor, cogwheel rigidity, and postural instability. Digital drawing kinematics reliably quantify motor dysgraphia and micro-oscillations.",
        symptoms: [
          "Resting unilateral pill-rolling tremor exacerbated by anxiety or mental stress",
          "Bradykinesia (progressive slowing and amplitude decrement of repetitive manual movements)",
          "Rigidity and stiffness in upper limb musculature (lead-pipe or cogwheel resistance)",
          "Micrographia (handwriting becoming progressively smaller and cramped)"
        ],
        meds: [
          "Levodopa-Carbidopa (Sinemet 25/100 mg TDS): Standard gold precursor replacement therapy to restore striatal dopamine concentrations.",
          "Dopamine Agonists (Pramipexole 0.125-0.75 mg TDS, Ropinirole 0.25-3 mg TDS): First-line options in younger onset to delay motor fluctuations.",
          "MAO-B Inhibitors (Rasagiline 1 mg daily): Protects synaptic dopamine from enzymatic breakdown; effective early monotherapy.",
          "COMT Inhibitors (Entacapone 200 mg per levodopa dose): Prolongs plasma half-life of levodopa and reduces motor 'wearing-off'."
        ],
        surgery: [
          "Deep Brain Stimulation (DBS): Bilateral subthalamic nucleus (STN) or globus pallidus internus (GPi) neurostimulation for motor fluctuations and refractory tremor.",
          "MR-Guided Focused Ultrasound (MRgFUS): Incisionless unilateral thermal ablation of ventral intermediate thalamic nucleus for refractory tremor.",
          "Continuous Levodopa Enteral Infusion (Duodopa / Duopa): Continuous intrajejunal administration via PEG-J for advanced motor fluctuations."
        ],
        monitoring: [
          "Serial UPDRS Motor Assessment: Regular formal scoring of motor and non-motor complications every 3-6 months.",
          "Physical & Occupational Therapy: LSVT BIG targeted high-amplitude physical training to maintain mobility and gait stability.",
          "Speech & Swallowing Surveillance: LSVT LOUD vocal therapy and swallowing screening to prevent aspiration pneumonia."
        ]
      },
      alzheimer: {
        title: "Alzheimer's Disease & Dementia Staging",
        modality: "Brain MRI (Axial Neurodegenerative View)",
        badge: "Dementia MRI",
        desc: "Axial T1/T2 weighted neurodegenerative brain MRI scan. Evaluates hippocampal volume loss and dementia stages across 4 classes.",
        samplePrompt: "Upload axial brain MRI scan for dementia staging (PNG/JPG)",
        classes: ["Mild Demented", "Moderate Demented", "Non Demented", "Very Mild Demented"],
        explanation: "Alzheimer's Disease is a progressive neurodegenerative pathology and the primary etiology of clinical dementia (~60-70% of cases). Extracellular amyloid-beta (Abeta) senile plaque deposition and hyperphosphorylated tau neurofibrillary tangle formation induce progressive synaptic disconnect, neuroinflammation, and selective neuronal death targeting the entorhinal cortex, hippocampus, and cerebral neocortex.",
        symptoms: [
          "Progressive anterograde episodic memory loss and difficulty encoding new information",
          "Executive dysfunction, spatial disorientation, and wandering behavior",
          "Nominal aphasia (word-finding pauses) and semantic conversational difficulties",
          "Behavioral disturbances including apathy, agitation, and circadian sleep-wake disruptions"
        ],
        meds: [
          "Cholinesterase Inhibitors (Donepezil 5-10 mg nocte, Rivastigmine 1.5-6 mg BD, Galantamine 8-24 mg daily): Enhance synaptic acetylcholine to stabilize cognitive decline in mild-to-moderate AD.",
          "NMDA Receptor Antagonist (Memantine 10-20 mg daily): Protects against chronic glutamate excitotoxicity in moderate-to-severe AD.",
          "Disease-Modifying Anti-Amyloid Monoclonal Antibodies (Lecanemab / Leqembi 10 mg/kg IV every 2 weeks, Donanemab): Facilitate protofibrillar amyloid clearance in confirmed mild cognitive impairment / mild AD.",
          "Adjunctive Neuropsychiatric Agents: Selective serotonin reuptake inhibitors (Sertraline / Escitalopram) for comorbid depressive symptoms; minimize sedating anticholinergic agents."
        ],
        surgery: [
          "Evaluation for Ventriculoperitoneal (VP) Shunting: If comorbid normal pressure hydrocephalus (NPH) triadic gait/urinary signs coexist.",
          "Focused Ultrasound Blood-Brain Barrier Disruption (Research Protocols): Non-invasive localized BBB permeability enhancement for targeted therapeutics.",
          "Percutaneous Endoscopic Gastrostomy (PEG): Reserved strictly for advanced palliative dysphagia following multidisciplinary ethical review."
        ],
        monitoring: [
          "Standardized Neuropsychological Battery: Serial Mini-Mental State Examination (MMSE) and Montreal Cognitive Assessment (MoCA) every 6 months.",
          "MRI Volumetric & ARIA Surveillance: Tracking hippocampal volume atrophy and monitoring amyloid-related imaging abnormalities (ARIA-E / ARIA-H) on T2*/SWI MRI.",
          "Caregiver Support & Cognitive Stimulation: Structured daily cognitive therapy, fall risk mitigation, and continuous social engagement."
        ]
      },
      stroke: {
        title: "Brain Stroke Detection",
        modality: "Brain CT / MRI (Axial Neurovascular Scan)",
        badge: "Stroke Scan",
        desc: "Axial non-contrast CT or diffusion-weighted MRI brain scan. Detects acute ischemic hypoattenuation and hemorrhagic stroke lesions.",
        samplePrompt: "Upload axial brain CT or diffusion MRI scan (PNG/JPG)",
        classes: ["Brain Stroke Lesion", "Normal Brain CT/MRI"],
        explanation: "Acute Cerebrovascular Accident (Stroke) occurs when cerebral blood supply is acutely interrupted (Ischemic Stroke ~87%) via arterial thrombosis or thromboembolism, or when an intracranial cerebral vessel ruptures (Hemorrhagic Stroke ~13%). Rapid loss of oxygen and glucose triggers energy failure, cytotoxic edema, and rapid expansion of the ischemic core into salvageable penumbral brain tissue ('Time is Brain').",
        symptoms: [
          "Sudden facial droop, unilateral arm or leg weakness/plegia (FAST criteria)",
          "Acute dysarthria (slurred speech) or expressive/receptive aphasia",
          "Sudden loss of visual field, diplopia, or severe vertigo with ataxia",
          "Thunderclap headache ('worst headache of life') suggestive of subarachnoid hemorrhage"
        ],
        meds: [
          "Intravenous Thrombolytic Therapy: IV Alteplase (rt-PA 0.9 mg/kg, max 90 mg) or Tenecteplase (TNK 0.25 mg/kg) administered within 4.5 hours of ischemic symptom onset.",
          "Dual Antiplatelet Therapy (DAPT): Aspirin (300 mg loading, then 75 mg) plus Clopidogrel (300 mg loading, then 75 mg) for 21 days in minor ischemic stroke (NIHSS <= 3) or high-risk TIA.",
          "High-Intensity Statin: Atorvastatin (80 mg daily) initiated acutely for plaque stabilization and neuroprotection.",
          "Hemodynamic Blood Pressure Control: Maintain BP < 185/110 mmHg prior to thrombolysis (IV Labetalol / Nicardipine); target SBP 130-140 mmHg in acute intracerebral hemorrhage."
        ],
        surgery: [
          "Mechanical Endovascular Thrombectomy (EVT): Stent-retriever or direct catheter aspiration for Large Vessel Occlusion (LVO) of anterior or posterior circulation up to 24 hours.",
          "Decompressive Hemicraniectomy: Urgent craniotomy flap elevation within 48 hours for malignant middle cerebral artery (MCA) infarction to alleviate fatal herniation.",
          "Stereotactic or Open Hematoma Evacuation: Evacuation of large supratentorial or cerebellar hematomas (>3 cm) with progressive brainstem compression."
        ],
        monitoring: [
          "Continuous Telemetric Monitoring: Cardiac rhythm surveillance for minimum 72 hours to identify occult paroxysmal atrial fibrillation (indicating oral DOAC therapy).",
          "Carotid Duplex Ultrasound and CTA/MRA: Assess extracranial and intracranial arterial stenosis (evaluating carotid endarterectomy CEA if stenosis > 70%).",
          "Early Multidisciplinary Neuro-Rehabilitation: Physiotherapy, speech pathology swallowing screen, and occupational therapy within 24 to 48 hours."
        ]
      },
      tb: {
        title: "Tuberculosis Detection (TB)",
        modality: "Chest Radiography (X-Ray PA View)",
        badge: "TB Chest X-Ray",
        desc: "Posterior-anterior chest radiograph evaluating apical fibro-cavitary infiltrates, lymphadenopathy, and Mycobacterium tuberculosis infection.",
        samplePrompt: "Upload PA Chest X-Ray radiograph (PNG/JPG)",
        classes: ["Active Pulmonary TB", "Normal Healthy Lungs"],
        explanation: "Pulmonary Tuberculosis is an airborne infectious disease caused by Mycobacterium tuberculosis. Bacilli reach the pulmonary alveoli and proliferate, eliciting a cell-mediated type IV hypersensitivity response leading to caseating granulomas, apical consolidation, and cavitation that can erode pulmonary vessels and airways.",
        symptoms: [
          "Chronic persistent cough lasting greater than 2-3 weeks",
          "Hemoptysis (coughing up blood or blood-streaked sputum)",
          "Unexplained drenching night sweats, low-grade fevers, and chills",
          "Unintentional significant weight loss and progressive asthenia / fatigue"
        ],
        meds: [
          "First-Line Intensive Phase (2 Months): Rifampicin (10 mg/kg), Isoniazid (5 mg/kg) + Pyridoxine (B6 25 mg), Pyrazinamide (25 mg/kg), Ethambutol (15 mg/kg) daily.",
          "Continuation Phase (4 Months): Rifampicin and Isoniazid daily for standard 6-month DOTS course.",
          "Second-Line MDR-TB Regimen: Bedaquiline, Linezolid, Clofazimine, and Fluoroquinolone (Levofloxacin) based on molecular drug susceptibility testing.",
          "Adjunctive Corticosteroid Therapy: Dexamethasone or Prednisolone for tuberculous pericarditis or tuberculous meningitis."
        ],
        surgery: [
          "Therapeutic Pleural Decortication: Video-assisted thoracoscopy for trapped lung or chronic tuberculous empyema.",
          "Bronchoscopy with Transbronchial Biopsy: Diagnostic BAL and GeneXpert MTB/RIF confirmation for smear-negative suspected TB.",
          "Elective Anatomic Resection: Segmentectomy or lobectomy for localized multi-drug resistant cavitary destruction or massive life-threatening hemoptysis."
        ],
        monitoring: [
          "Serial Sputum AFB Smear & Culture: Evaluated monthly until consecutive negative cultures demonstrate bacteriological cure.",
          "Hepatic Function Panel: Routine ALT, AST, and total bilirubin monitoring every 2-4 weeks during intensive therapy.",
          "Airway Isolation Precautions: Airborne negative-pressure isolation and N95 respiratory protection until sputum smear conversion."
        ]
      },
      pancreatic_cancer: {
        title: "Pancreatic Cancer Staging",
        modality: "Abdominal Contrast CT Scan",
        badge: "Abdominal CT",
        desc: "Contrast-enhanced axial abdominal CT scan evaluating pancreatic parenchymal masses, ductal dilation, and vascular abutment across 5 stages.",
        samplePrompt: "Upload axial abdominal contrast CT scan (PNG/JPG)",
        classes: ["Stage I", "Stage II", "Stage III", "Stage IV", "Normal Pancreas"],
        explanation: "Pancreatic Ductal Adenocarcinoma (PDAC) is an aggressive malignancy originating in the ductal epithelium of the pancreas. Characterized by extensive desmoplasia, early retroperitoneal vascular invasion (celiac trunk, SMA, portal vein), and resistance to conventional chemotherapy, early radiological staging is pivotal for resectability assessment.",
        symptoms: [
          "Painless progressive obstructive jaundice with pruritus and dark urine",
          "Epigastric abdominal pain radiating through to the mid-back",
          "Unexplained significant weight loss and profound anorexia",
          "Recent-onset atypical diabetes mellitus or migratory superficial thrombophlebitis (Trousseau sign)"
        ],
        meds: [
          "Neoadjuvant / Adjuvant FOLFIRINOX: Oxaliplatin, Irinotecan, Leucovorin, and Fluorouracil for robust performance status patients.",
          "Gemcitabine + Nab-Paclitaxel: First-line doublet therapy for advanced or metastatic pancreatic adenocarcinoma.",
          "Targeted Maintenance PARP Inhibitor: Olaparib (300 mg BD) for germline BRCA1/2 mutated metastatic disease with prior platinum response.",
          "Pancreatic Enzyme Replacement Therapy (PERT): Pancrelipase (Creon 25,000-50,000 units with meals) to manage exocrine insufficiency."
        ],
        surgery: [
          "Pancreaticoduodenectomy (Whipple Procedure): Resection of pancreatic head, duodenum, gallbladder, and regional lymph nodes.",
          "Distal Pancreatectomy with Splenectomy: For resectable tumors situated in the pancreatic body or tail.",
          "Palliative Biliary Stenting: Endoscopic deployment of self-expanding metal stents (SEMS) to relieve malignant biliary obstruction."
        ],
        monitoring: [
          "Serum CA 19-9 Monitoring: Baseline and serial CA 19-9 measurements every 2-3 months to evaluate disease progression.",
          "Pancreatic Protocol Multiphase CT / MRI: Serial high-resolution cross-sectional surveillance every 8-12 weeks.",
          "Early Palliative Neurolysis: Celiac plexus block for intractable visceral neuropathic pain."
        ]
      },
      lung_cancer: {
        title: "Lung Cancer Carcinoma Detection",
        modality: "Thoracic High-Resolution CT Scan",
        badge: "Chest CT",
        desc: "High-resolution thoracic axial CT scan evaluating pulmonary nodules, spiculation, pleural tethering, and malignant lung carcinoma.",
        samplePrompt: "Upload axial chest CT lung-window scan (PNG/JPG)",
        classes: ["Malignant Lung Carcinoma", "Normal Pulmonary CT"],
        explanation: "Primary lung carcinoma includes Non-Small Cell Lung Cancer (NSCLC: Adenocarcinoma, Squamous Cell, Large Cell) and Small Cell Lung Cancer (SCLC). Malignant transformation driven by oncogenic driver mutations triggers uncontrolled proliferation, local parenchymal invasion, and early mediastinal lymphatic spread.",
        symptoms: [
          "Persistent worsening cough or changes in chronic smoker's cough",
          "Hemoptysis (blood in sputum) and localized thoracic pleuritic pain",
          "Unexplained shortness of breath, wheezing, or stridor",
          "Hoarseness (recurrent laryngeal nerve palsy) or facial/neck swelling (SVC syndrome)"
        ],
        meds: [
          "Targeted Tyrosine Kinase Inhibitors: Osimertinib (Tagrisso 80 mg) for EGFR-mutant NSCLC; Alectinib (600 mg BD) for ALK-positive tumors.",
          "Immune Checkpoint Inhibitor: Pembrolizumab (Keytruda 200 mg Q3W) with or without platinum-doublet chemotherapy.",
          "Platinum-Doublet Chemotherapy: Cisplatin or Carboplatin plus Pemetrexed / Paclitaxel for driver-negative advanced lung carcinomas.",
          "Anti-Angiogenic Monoclonal Antibody: Bevacizumab added to first-line chemotherapy in non-squamous histology."
        ],
        surgery: [
          "Anatomic VATS Lobectomy: Minimally invasive lobectomy with systematic mediastinal lymphadenectomy for early-stage operable NSCLC.",
          "Stereotactic Body Radiotherapy (SBRT / SABR): Ablative radiation (50-60 Gy in 3-5 fractions) for medically inoperable early-stage lesions.",
          "Endobronchial Stenting & Tumor Debulking: Interventional bronchoscopy for central airway tumor encroachment."
        ],
        monitoring: [
          "Serial Thoracic CT Surveillance: High-resolution chest CT every 3-6 months for 3 years post-treatment.",
          "Comprehensive Smoking Cessation: Essential intervention to improve treatment efficacy and minimize secondary malignancies.",
          "Pulmonary Rehabilitation: Exercise training and spirometry monitoring to optimize functional lung capacities."
        ]
      },
      liver_tumor: {
        title: "Liver Tumor & Hepatic Lesion Detection",
        modality: "Abdominal Contrast-Enhanced CT Scan",
        badge: "Liver CT",
        desc: "Abdominal contrast-enhanced CT scan evaluating hepatocellular carcinoma (HCC), hepatic metastases, and focal liver lesions with SegFormer AI.",
        samplePrompt: "Upload abdominal contrast-enhanced CT scan (PNG/JPG)",
        classes: ["Liver Tumor / Neoplasm", "Normal Liver Tissue"],
        explanation: "Hepatocellular Carcinoma (HCC) and metastatic liver lesions represent hypervascular neoplasms arising against a background of cirrhosis, hepatitis B/C, or metabolic steatohepatitis. Early arterial phase hyperenhancement and rapid venous washout are diagnostic hallmarks of malignant hepatic tumors.",
        symptoms: [
          "Right upper quadrant abdominal fullness, dull ache, or palpable hepatomegaly",
          "New-onset worsening ascites or jaundice in a patient with chronic liver disease",
          "Hepatic encephalopathy, lethargy, or spider angiomas",
          "Unintentional cachexia, anorexia, and unexplained fevers"
        ],
        meds: [
          "First-Line Immunotherapy Doublet: Atezolizumab (1200 mg) + Bevacizumab (15 mg/kg) IV Q3W (IMbrave150 protocol).",
          "Dual Checkpoint Inhibitors: Durvalumab plus Tremelimumab for unresectable hepatocellular carcinoma.",
          "Tyrosine Kinase Inhibitors: Sorafenib (400 mg BD) or Lenvatinib (8-12 mg daily) for patients unsuitable for immunotherapy.",
          "Antiviral Suppressive Therapy: Entecavir or Tenofovir for chronic hepatitis B to prevent background hepatic decompensation."
        ],
        surgery: [
          "Orthotopic Liver Transplantation (OLT): Curative treatment for solitary lesions <= 5 cm or up to 3 lesions <= 3 cm (Milan criteria).",
          "Anatomic Hepatic Resection: Partial hepatectomy for patients with preserved liver function (Child-Pugh A) and no portal hypertension.",
          "Transarterial Chemoembolization (TACE) / Radioembolization (TARE Y-90): Catheter-based arterial embolization for intermediate-stage HCC.",
          "Thermal Ablation (RFA / Microwave MWA): Percutaneous image-guided thermal coagulative necrosis for lesions <= 3 cm."
        ],
        monitoring: [
          "Serum Alpha-Fetoprotein (AFP) Surveillance: Measured every 3-6 months alongside multiphasic imaging.",
          "Dynamic Liver MRI / CT: Surveillance using LI-RADS criteria every 3-6 months following curative intervention.",
          "Strict Avoidance of Hepatotoxins: Complete alcohol abstinence and avoidance of hepatotoxic medications."
        ]
      },
      bone_tumor: {
        title: "Bone Tumor & Osteosarcoma Detection",
        modality: "Orthopedic Skeletal Radiograph (X-Ray)",
        badge: "Bone X-Ray",
        desc: "Orthopedic musculoskeletal X-ray evaluating cortical breach, sunburst periosteal reaction, Codman triangle, and osteosarcoma.",
        samplePrompt: "Upload orthopedic bone radiograph (PNG/JPG)",
        classes: ["Bone Tumor (Osteosarcoma)", "Normal Skeletal Bone"],
        explanation: "Primary malignant bone neoplasms (Osteosarcoma, Ewing Sarcoma, Chondrosarcoma) originate from mesenchymal osteoid-producing cells. Rapid infiltrative cortical destruction, aggressive periosteal reactions ('sunburst' spiculation, Codman triangle), and soft tissue mass extension signify high-grade malignancy.",
        symptoms: [
          "Localized, deep bone pain worsening at night or during physical weight-bearing",
          "Progressive swelling, tenderness, or palpable firm mass overlying bone metaphysis",
          "Pathological fracture occurring with minimal trauma or normal mechanical stress",
          "Restricted joint range of motion and antalgic limping gait"
        ],
        meds: [
          "MAP Chemotherapy Regimen: High-dose Methotrexate, Doxorubicin (Adriamycin), and Cisplatin given as neoadjuvant and adjuvant therapy.",
          "VDC/IE Alternating Regimen: Vincristine, Doxorubicin, Cyclophosphamide alternating with Ifosfamide/Etoposide for Ewing Sarcoma.",
          "Receptor Tyrosine Kinase Inhibitors: Regorafenib or Cabozantinib for refractory or relapsed osteosarcoma.",
          "Targeted Monoclonal Antibody: Denosumab (Rank-ligand inhibitor) for Giant Cell Tumors of Bone and bone metastases."
        ],
        surgery: [
          "Limb-Salving Wide En-Bloc Resection: Anatomic oncological resection of tumor-bearing bone with clean margins followed by modular endoprosthetic reconstruction.",
          "Custom 3D-Printed Titanium Implants: Patient-specific trabecular metallic prostheses for complex pelvic or joint reconstructions.",
          "Rotationplasty or Amputation: Indicated for extensive neurovascular bundle infiltration or recurrent intractable infections."
        ],
        monitoring: [
          "High-Resolution Chest CT Surveillance: Evaluated every 3 months for early detection of asymptomatic pulmonary metastases.",
          "Local Plain Radiography & Limb MRI: Evaluated at 3, 6, 12, 18, and 24 months to confirm modular prosthesis integrity and exclude local recurrence.",
          "Musculoskeletal Functional Rehabilitation: Specialized physiotherapy to restore joint mobility, muscle strength, and independent gait."
        ]
      },
      spinal_tumor: {
        title: "Spinal Cord Tumor Detection",
        modality: "Spinal Column MRI (Sagittal / Axial View)",
        badge: "Spine MRI",
        desc: "Sagittal and axial T1/T2-weighted spinal column MRI evaluating intramedullary, extramedullary, and extradural spinal neoplasms.",
        samplePrompt: "Upload sagittal or axial spine MRI scan (PNG/JPG)",
        classes: ["Spinal Cord Tumor", "Normal Spinal Cord MRI"],
        explanation: "Spinal cord neoplasms comprise intramedullary tumors (Ependymoma, Astrocytoma), intradural-extramedullary tumors (Meningioma, Schwannoma), and extradural metastases. Progressive tumoral mass effect compresses thecal spinal tracts, provoking sensory-motor myelopathy and irreversible paraparesis.",
        symptoms: [
          "Persistent localized spinal or radiating radicular neuropathic pain refractory to analgesics",
          "Progressive lower extremity paraparesis, sensory loss, or gait ataxia",
          "Sphincteric dysfunction including urinary retention, frequency, or fecal incontinence (conus / cauda equina syndrome)",
          "Brisk deep tendon reflexes, clonus, and positive extensor plantar (Babinski) response"
        ],
        meds: [
          "High-Dose Intravenous Glucocorticoids: Dexamethasone (10-16 mg bolus, then 4-8 mg Q6H) to reduce spinal cord vasogenic edema and halt compressive myelopathy.",
          "Adjuvant Chemotherapy: Temozolomide (TMZ) or Carboplatin for high-grade infiltrative spinal astrocytomas.",
          "Targeted Monoclonal Antibody: Bevacizumab (Avastin) to alleviate tumoral syrinx expansion and perilesional spinal cord edema.",
          "Neuropathic Pain Regimens: Pregabalin or Gabapentin combined with scheduled analgesics for refractory radicular pain."
        ],
        surgery: [
          "Microsurgical Resection with Neuro-Monitoring: Posterior laminectomy/laminoplasty with continuous intraoperative monitoring (MEP/SSEP) for maximal safe resection.",
          "Gross Total Resection (GTR): Primary curative intent for well-circumscribed spinal ependymomas and schwannomas.",
          "Stereotactic Spine Radiosurgery (Spine SBRT / CyberKnife): Precision single-fraction ablative radiotherapy for metastatic epidural cord compression.",
          "Spinal Instrumented Fusion: Pedicle screw and rod reconstruction to stabilize spinal segments following multi-level laminectomy."
        ],
        monitoring: [
          "Whole-Neuraxis Contrast MRI Surveillance: Brain and complete spinal cord MRI every 3-6 months to assess local tumor bed and exclude drop metastases.",
          "Serial ASIA Impairment Scoring: Quantitative neurological impairment tracking every 3 months.",
          "Comprehensive Neuro-Spine Rehabilitation: Focused spinal cord injury physical therapy, neurogenic bladder care, and functional mobility restoration."
        ]
      }
    }
  },

  // KANNADA TRANSLATIONS
  kn: {
    langName: "ಕನ್ನಡ (Kannada)",
    brandTitle: "ನ್ಯೂರೋಎಡ್ಜ್ ಕ್ಲಿನಿಕಲ್ AI",
    brandSubtitle: "ಸಂಯೋಜಿತ ಬಹು-ರೋಗ ರೋಗನಿರ್ಣಯ ಸೂಟ್",
    modelsActive: "15 ಕ್ಲಿನಿಕಲ್ ಮಾದರಿಗಳು ಸಕ್ರಿಯವಾಗಿವೆ",
    homePortal: "ಮುಖಪುಟ ಪೋರ್ಟಲ್",
    manualBtn: "📚 ರೋಗ ಮತ್ತು ಚಿಕಿತ್ಸಾ ಕೈಪಿಡಿ",
    samplesGalleryBtn: "ಬೆಂಚ್‌ಮಾರ್ಕ್ ಗ್ಯಾಲರಿ (೧೨೧)",
    pageTitle: "ಸಂಯೋಜಿತ ಬಹು-ರೋಗ ಕ್ಲಿನಿಕಲ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
    pageSubtitle: "ನೈಜ-ಸಮಯದ ಕ್ಲಿನಿಕಲ್ ಅನಿಶ್ಚಿತತೆಯ ಪರಿಮಾಣ ಮತ್ತು ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸಾ ಮಾರ್ಗಸೂಚಿಗಳೊಂದಿಗೆ ಸುಧಾರಿತ AI ರೋಗನಿರ್ಣಯ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್. ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಲು ಕೆಳಗಿನ ರೋಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    step1Title: "ರೋಗ ಪರೀಕ್ಷಾ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectModality: "ರೋಗ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    step2Title: "ಕ್ಲಿನಿಕಲ್ ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ವಿಶ್ಲೇಷಿಸಿ",
    dropzoneTitle: "ಕ್ಲಿನಿಕಲ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    browseBtn: "ಫೈಲ್‌ಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
    removeBtn: "✕ ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಬೇರೆ ಸ್ಕ್ಯಾನ್ ಆಯ್ಕೆಮಾಡಿ",
    targetDisease: "ಗುರಿ ರೋಗ",
    diagnosticModality: "ರೋಗನಿರ್ಣಯ ವಿಧಾನ",
    uncertaintyMetric: "ಅನಿಶ್ಚಿತತೆಯ ಮಾನದಂಡ",
    shannonEntropy: "ರೋಗನಿರ್ಣಯದ ಅನಿಶ್ಚಿತತೆಯ ಅಂಕ",
    deepLearningCore: "ಡೀಪ್ ಲರ್ನಿಂಗ್ ಕೋರ್",
    edgeConvNet: "ಎಡ್ಜ್ ಕನ್ವಲ್ಯೂಷನಲ್ ನೆಟ್‌ವರ್ಕ್",
    runAnalysisBtn: "ಕ್ಲಿನಿಕಲ್ AI ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ",
    analyzingTicker: "ಕ್ಲಿನಿಕಲ್ ಸ್ಕ್ಯಾನ್ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    reportTitle: "AI ಕ್ಲಿನಿಕಲ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ವರದಿ",
    caseId: "ಕೇಸ್ ಐಡಿ",
    timestamp: "ಸಮಯ ಮುದ್ರೆ",
    patientDetailsTitle: "ರೋಗಿಯ ವಿವರಗಳು ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಮಾಹಿತಿ",
    patientRecordVerified: "ದೃಢೀಕರಿಸಿದ ಆರೋಗ್ಯ ದಾಖಲೆ (EHR)",
    patientName: "ರೋಗಿಯ ಹೆಸರು",
    patientAge: "ವಯಸ್ಸು",
    patientSex: "ಲಿಂಗ",
    patientAddress: "ವಿಳಾಸ",
    patientIntakeTitle: "ರೋಗಿಯ ನೋಂದಣಿ ವಿವರಗಳು",
    pathologyDetectedTag: "ರೋಗಲಕ್ಷಣ ಪತ್ತೆಯಾಗಿದೆ — ತುರ್ತು ಚಿಕಿತ್ಸಾ ಕ್ರಮ ಅಗತ್ಯ",
    normalScanTag: "ಸಾಮಾನ್ಯ ಸ್ಕ್ಯಾನ್ — ಯಾವುದೇ ರೋಗಲಕ್ಷಣಗಳಿಲ್ಲ",
    modelConfidenceTitle: "ಮಾದರಿ ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಅಂಕ (Confidence)",
    modelConfidenceDesc: "ರೋಗನಿರ್ಣಯದ ಗರಿಷ್ಠ ಸಂಭವನೀಯತೆಯ ಅಂಕ.",
    highConfidenceBadge: "ಹೆಚ್ಚಿನ ವಿಶ್ವಾಸಾರ್ಹತೆ",
    uncertaintyTitle: "ರೋಗನಿರ್ಣಯದ ಅನಿಶ್ಚಿತತೆಯ ಸೂಚ್ಯಂಕ",
    uncertaintyDesc: "ಎಲ್ಲಾ ಸಂಭಾವ್ಯ ವರ್ಗಗಳಲ್ಲಿ ರೋಗನಿರ್ಣಯದ ಅನಿಶ್ಚಿತತೆಯ ಪ್ರಮಾಣ.",
    highReliabilityBadge: "ಹೆಚ್ಚಿನ ನಿಖರತೆ",
    moderateReliabilityBadge: "ಮಧ್ಯಮ ನಿಖರತೆ",
    lowReliabilityBadge: "ವೈದ್ಯಕೀಯ ಮರುಪರಿಶೀಲನೆ ಅಗತ್ಯ",
    classProbabilitiesTitle: "ವರ್ಗವಾರು ರೋಗನಿರ್ಣಯ ಸಂಭವನೀಯತೆ",
    probVectorLabel: "ಸಂಭವನೀಯತೆ (%)",
    diagnosticSummaryTitle: "ಕ್ಲಿನಿಕಲ್ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ರೋಗನಿರ್ಣಯ ಸಾರಾಂಶ",
    treatmentSectionTitle: "ರೋಗದ ವಿವರಣೆ ಮತ್ತು ಸೂಚಿಸಲಾದ ಚಿಕಿತ್ಸಾ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು",
    tabPharmacotherapy: "ಔಷಧೋಪಚಾರ",
    tabSurgery: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆಗಳು",
    tabSurveillance: "ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ಆರೈಕೆ",
    medsTitle: "ಪ್ರಾಥಮಿಕ ಔಷಧಗಳು ಮತ್ತು ಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳು",
    surgeryTitle: "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ವಿಧಾನಗಳು",
    monitorTitle: "ದೀರ್ಘಕಾಲೀನ ಮೇಲ್ವಿಚಾರಣೆ, ಫಾಲೋ-ಅಪ್ ಮತ್ತು ಜೀವನಶೈಲಿ",
    printReportBtn: "🖨️ ವೈದ್ಯಕೀಯ ವರದಿಯನ್ನು ಮುದ್ರಿಸಿ / ರಫ್ತು ಮಾಡಿ",
    analyzeAnotherBtn: "🔄 ಮತ್ತೊಂದು ಸ್ಕ್ಯಾನ್ ವಿಶ್ಲೇಷಿಸಿ",
    voiceReaderTitle: "AI ಕ್ಲಿನಿಕಲ್ ಧ್ವನಿ ರೀಡರ್",
    readReportBtn: "🔊 ವರದಿಯನ್ನು ಆಲಿಸಿ",
    pauseAudioBtn: "⏸️ ವಿರಾಮ",
    resumeAudioBtn: "▶️ ಮುಂದುವರಿಸಿ",
    stopAudioBtn: "⏹️ ಧ್ವನಿ ನಿಲ್ಲಿಸಿ",
    readSpeedLabel: "ಧ್ವನಿ ವೇಗ",
    voiceStatusReady: "ಕ್ಲಿನಿಕಲ್ ವರದಿಯನ್ನು ಗಟ್ಟಿಯಾಗಿ ಓದಲು ಸಿದ್ಧವಾಗಿದೆ",
    voiceStatusPlaying: "ವರದಿಯನ್ನು ಕನ್ನಡದಲ್ಲಿ ಓದಲಾಗುತ್ತಿದೆ...",
    voiceStatusPaused: "ಧ್ವನಿ ಪ್ಲೇಬ್ಯಾಕ್ ವಿರಾಮಗೊಳಿಸಲಾಗಿದೆ",
    readVerdictBtn: "ತೀರ್ಪನ್ನು ಆಲಿಸಿ",
    readMetricsBtn: "ಅಂಕಿಅಂಶಗಳನ್ನು ಆಲಿಸಿ",
    readGuidanceBtn: "ಮಾರ್ಗದರ್ಶನ ಆಲಿಸಿ",
    readExplanationBtn: "ವಿವರಣೆಯನ್ನು ಆಲಿಸಿ",
    readTreatmentBtn: "ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಆಲಿಸಿ",
    modalPathologyHeading: "ರೋಗದ ವಿವರಣೆ ಮತ್ತು ಕಾರ್ಯವಿಧಾನ:",
    modalSymptomsHeading: "ಪ್ರಮುಖ ರೋಗ ಲಕ್ಷಣಗಳು:",
    modalMedsHeading: "ಶಿಫಾರಸು ಮಾಡಲಾದ ಔಷಧೋಪಚಾರ",
    modalSurgeryHeading: "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಮತ್ತು ವೈದ್ಯಕೀಯ ವಿಧಾನಗಳು",
    modalMonitorHeading: "ಮೇಲ್ವಿಚಾರಣೆ, ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ರಕ್ಷಣೆ",
    unifiedSectionTitle: "ಆಲ್-ಇನ್-ಒನ್ 15-ರೋಗಗಳ ಸಮಗ್ರ ತಪಾಸಣಾ ಕೇಂದ್ರ",
    unifiedSectionSubtitle: "ಯಾವುದೇ 15 ರೋಗಗಳ ವಿಭಾಗವನ್ನು (ಮೆದುಳು, ಪಾರ್ಕಿನ್ಸನ್, ಆಲ್ಝೈಮರ್, ಪಾರ್ಶ್ವವಾಯು, ಬೆನ್ನುಹುರಿ, ನ್ಯುಮೋನಿಯಾ, ಟಿಬಿ, ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್, ಮೇದೋಜೀರಕ ಕ್ಯಾನ್ಸರ್, ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ, ಮೂಳೆ ಗೆಡ್ಡೆ, ಸ್ತನ ಕ್ಯಾನ್ಸರ್, ರೆಟಿನಾ OCT, ಕಣ್ಣಿನ ಫಂಡಸ್ ಅಥವಾ ರಕ್ತದ ಸ್ಮೀಯರ್) ಆಯ್ಕೆಮಾಡಿ, ಸ್ಕ್ಯಾನ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ರೋಗನಿರ್ಣಯವನ್ನು ಪಡೆಯಿರಿ.",
    sampleScansTitle: "🚀 ತ್ವರಿತ ಮಾದರಿ ಪರೀಕ್ಷೆ (ಯಾವುದೇ ರೋಗವನ್ನು ಪರೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ):",
    visualInspectionTitle: "ನಿಖರವಾದ ಸ್ಕ್ಯಾನ್ ತಪಾಸಣೆ ಮತ್ತು ಮಾದರಿ ಪರಿಶೀಲನೆ",
    visualInspectionSubtitle: "ರೋಗಿಯ ವಿಶ್ಲೇಷಿಸಿದ ಸ್ಕ್ಯಾನ್ ಮತ್ತು ಅಧಿಕೃತ ಕ್ಲಿನಿಕಲ್ ಮಾದರಿಯ ನಡುವಿನ ನೇರ ದೃಶ್ಯ ಹೋಲಿಕೆ.",
    allSixActive: "ಎಲ್ಲಾ 15 ಕ್ಲಿನಿಕಲ್ ಮಾದರಿಗಳು ಸಕ್ರಿಯವಾಗಿವೆ",
    dropAnyPrompt: "ಆಯ್ಕೆಮಾಡಿದ ರೋಗ ವಿಭಾಗದ ವೈದ್ಯಕೀಯ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಇಲ್ಲಿ ಅಪ್ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
    homeBadge: "ಸಂಯೋಜಿತ ಕ್ಲಿನಿಕಲ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಸೂಟ್ • 15 ರೋಗ ಮಾದರಿಗಳು ಆನ್‌ಲೈನ್",
    homeHeadline: "ಎಡ್ಜ್-ಆಧಾರಿತ ಕ್ಲಿನಿಕಲ್ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಅನಿಶ್ಚಿತತೆ-ಅರಿವಿನ ವಿವರಿಸಬಹುದಾದ ಡೀಪ್ ಲರ್ನಿಂಗ್ ಫ್ರೇಮ್‌ವರ್ಕ್",
    homeSubtitle: "ನರವಿಜ್ಞಾನ, ಬೆನ್ನುಹುರಿ, ಶ್ವಾಸಕೋಶ, ಆಂಕೊಲಾಜಿ, ನೇತ್ರವಿಜ್ಞಾನ, ಮೂಳೆಶಾಸ್ತ್ರ ಮತ್ತು ರಕ್ತಶಾಸ್ತ್ರದ ರೋಗನಿರ್ಣಯಗಳನ್ನು ನೈಜ-ಸಮಯದ ಅನಿಶ್ಚಿತತೆಯೊಂದಿಗೆ ಒಂದುಗೂಡಿಸುವ ಸಮಗ್ರ ವೈದ್ಯಕೀಯ ಬುದ್ಧಿಮತ್ತೆ ವೇದಿಕೆ.",
    homeEnterBtn: "ಆಲ್-ಇನ್-ಒನ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಅಪ್ಲಿಕೇಶನ್ ಪ್ರವೇಶಿಸಿ",
    footerText: "ನ್ಯೂರೋಎಡ್ಜ್ ಕ್ಲಿನಿಕಲ್ AI • ಅನಿಶ್ಚಿತತೆ-ಅರಿವಿನ ಡೀಪ್ ಲರ್ನಿಂಗ್ ಸಿಸ್ಟಮ್ • ಎಡ್ಜ್ ಆರ್ಕಿಟೆಕ್ಚರ್",

    // Auto-Detect & Kaggle Benchmark Gallery Translations
    autoDetectModality: "⚡ ಸ್ವಯಂಚಾಲಿತ ರೋಗ ಪತ್ತೆ (ಎಲ್ಲಾ 15 ಕ್ಯಾಗಲ್ ಡೇಟಾಸೆಟ್‌ಗಳು)",
    autoDetectBadge: "AI ಸ್ವಯಂ-ವರ್ಗೀಕರಣ",
    aiModalityIdentified: "AI ಮಾದರಿ ಗುರುತಿಸಲಾಗಿದೆ",
    showcaseBadgePill: "48 ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ಮಾನದಂಡ ಸ್ಕ್ಯಾನ್‌ಗಳು",
    showcaseTitle: "ಕ್ಯಾಗಲ್ ಕ್ಲಿನಿಕಲ್ ಡೇಟಾಸೆಟ್ ಮಾನದಂಡ ಗ್ಯಾಲರಿ",
    showcaseDesc: "6 ಕ್ಯಾಗಲ್ ಡೇಟಾಸೆಟ್‌ಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದ 8 ಅಧಿಕೃತ ಮಾದರಿ ಸ್ಕ್ಯಾನ್‌ಗಳು (ಒಟ್ಟು 48). AI ಸ್ವಯಂ-ಪತ್ತೆ ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಸಂಪೂರ್ಣ ಅನಿಶ್ಚಿತತೆಯ ರೋಗನಿರ್ಣಯ ಪಡೆಯಲು ಯಾವುದೇ ಚಿತ್ರವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
    filterAll: "ಎಲ್ಲಾ 48 ಕ್ಯಾಗಲ್ ಸ್ಕ್ಯಾನ್‌ಗಳು",
    autoDetectedModality: "ಸ್ವಯಂ ಪತ್ತೆಯಾದ ರೋಗ ವಿಧಾನ",
    testAutoDetectBtn: "⚡ ಸ್ವಯಂ-ಪತ್ತೆಯಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ",

    // Disease Specific Content in Kannada
    diseases: {
      auto: {
        title: "AI ಸ್ವಯಂ-ಪತ್ತೆ (ಎಲ್ಲಾ 6 ಡೇಟಾಸೆಟ್‌ಗಳು)",
        modality: "ಮಲ್ಟಿ-ಮೋಡಲ್ ವೈದ್ಯಕೀಯ ಚಿತ್ರ ವರ್ಗೀಕರಣ",
        badge: "ಸ್ವಯಂ-ಪತ್ತೆ",
        desc: "ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. AI ವ್ಯವಸ್ಥೆಯು ರೋಗ ವಿಧಾನವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ಸೂಕ್ತವಾದ ಮಾದರಿಗೆ ರವಾನಿಸುತ್ತದೆ.",
        samplePrompt: "ಯಾವುದೇ ಕ್ಲಿನಿಕಲ್ ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ — AI ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗುರುತಿಸುತ್ತದೆ (PNG/JPG)"
      },
      brain: {
        title: "ಮೆದುಳಿನ ಗೆಡ್ಡೆ ಪತ್ತೆ",
        modality: "ಮೆದುಳಿನ MRI (ಮ್ಯಾಗ್ನೆಟಿಕ್ ರೆಸೋನೆನ್ಸ್)",
        badge: "MRI ಸ್ಕ್ಯಾನ್",
        desc: "ಮೆದುಳಿನ T1, T2 ಅಥವಾ FLAIR MRI ಸ್ಕ್ಯಾನ್. ತಲೆಬುರುಡೆಯೊಳಗಿನ ಗೆಡ್ಡೆಯ ಗಡಿಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
        samplePrompt: "ಮೆದುಳಿನ MRI ಸ್ಕ್ಯಾನ್ (PNG/JPG) ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಮೆದುಳಿನ ಗೆಡ್ಡೆ", "ಸಾಮಾನ್ಯ ಮೆದುಳಿನ ಅಂಗಾಂಶ"],
        explanation: "ಮೆದುಳಿನ ಗೆಡ್ಡೆಗಳು ತಲೆಬುರುಡೆಯೊಳಗಿನ ಜೀವಕೋಶಗಳ ಅಸಹಜ ಸಂಗ್ರಹ ಅಥವಾ ಬೆಳವಣಿಗೆಯಾಗಿದೆ. ಹೈ-ಗ್ರೇಡ್ ಗ್ಲಿಯೊಮಾ ಮತ್ತು ಆಸ್ಟ್ರೊಸೈಟೋಮಾಗಳಂತಹ ಗೆಡ್ಡೆಗಳು ಮೆದುಳಿನ ಅಂಗಾಂಶಗಳನ್ನು ಆಕ್ರಮಿಸುತ್ತವೆ ಮತ್ತು ರಕ್ತ-ಮೆದುಳಿನ ತಡೆಗೋಡೆಯನ್ನು (BBB) ಹಾನಿಗೊಳಿಸುತ್ತವೆ. ಇದು ಮೆದುಳಿನಲ್ಲಿ ತೀವ್ರ ಊತ (ಎಡಿಮಾ) ಮತ್ತು ತಲೆಬುರುಡೆಯೊಳಗಿನ ಒತ್ತಡವನ್ನು ಹೆಚ್ಚಿಸಿ ಪಾರ್ಶ್ವವಾಯು ಮತ್ತು ಫಿಟ್ಸ್‌ಗೆ ಕಾರಣವಾಗುತ್ತದೆ.",
        symptoms: [
          "ಮುಂಜಾನೆ ತೀವ್ರ ತಲೆನೋವು ಮತ್ತು ವಾಂತಿ",
          "ಹೊಸದಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಫಿಟ್ಸ್ (ಸೆಳವು/ದೌರ್ಬಲ್ಯ)",
          "ದೇಹದ ಒಂದು ಬದಿಯ ದೌರ್ಬಲ್ಯ (ಪಾರ್ಶ್ವವಾಯು), ಮಾತು ಮತ್ತು ದೃಷ್ಟಿಯಲ್ಲಿ ವ್ಯತ್ಯಾಸ",
          "ಜ್ಞಾಪಕ ಶಕ್ತಿ ಕುಂದುವಿಕೆ ಮತ್ತು ನಡವಳಿಕೆಯಲ್ಲಿ ಹಠಾತ್ ಬದಲಾವಣೆಗಳು"
        ],
        meds: [
          "ಡೆಕ್ಸಾಮೆಥಾಸೋನ್ (Dexamethasone 4-8 mg): ಗೆಡ್ಡೆಯ ಸುತ್ತಲಿನ ತೀವ್ರ ಊತವನ್ನು ತಕ್ಷಣ ಕಡಿಮೆ ಮಾಡಲು ನೀಡಲಾಗುವ ಗ್ಲುಕೋಕಾರ್ಟಿಕಾಯ್ಡ್.",
          "ಲೆವೆಟಿರಾಸೆಟಮ್ (Levetiracetam / Keppra 500-1000 mg): ಫಿಟ್ಸ್ ತಡೆಗಟ್ಟಲು ಬಳಸಲಾಗುವ ಮೊದಲ ಹಂತದ ಔಷಧ.",
          "ಟೆಮೋಜೊಲೊಮೈಡ್ (Temozolomide / TMZ): ರೇಡಿಯೇಶನ್ ಜೊತೆಗೆ ನೀಡಲಾಗುವ ಬಾಯಿಯ ಕ್ಯಾನ್ಸರ್ ನಿರೋಧಕ ಕೀಮೋಥೆರಪಿ ಔಷಧ (Stupp Protocol).",
          "ಬೆವಾಸಿಸುಮಾಬ್ (Bevacizumab / Avastin): ಮರುಕಳಿಸುವ ಗ್ಲಿಯೊಬ್ಲಾಸ್ಟೊಮಾಗೆ ನೀಡಲಾಗುವ ಆಂಟಿ-VEGF ಮೊನೊಕ್ಲೋನಲ್ ಆಂಟಿಬಾಡಿ."
        ],
        surgery: [
          "ಇಮೇಜ್-ಗೈಡೆಡ್ ಕ್ರ್ಯಾನಿಯೊಟಮಿ: ನರಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಮೂಲಕ ಮೆದುಳಿನ ಕಾರ್ಯಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ ಗೆಡ್ಡೆಯನ್ನು ಗರಿಷ್ಠ ಪ್ರಮಾಣದಲ್ಲಿ ತೆಗೆಯುವುದು.",
          "ಸ್ಟೀರಿಯೊಟಾಕ್ಟಿಕ್ ಬಯಾಪ್ಸಿ: ಆಳವಾದ ಮೆದುಳಿನ ಗೆಡ್ಡೆಗಳ ಅಂಗಾಂಶವನ್ನು ಪರೀಕ್ಷಿಸಿ ಸೂಕ್ಷ್ಮ ವರ್ಗೀಕರಣ (IDH, MGMT) ನಿರ್ಧರಿಸಲು.",
          "ಗಾಮಾ ನೈಫ್ / ಸೈಬರ್‌ನೈಫ್ ರೇಡಿಯೊಸರ್ಜರಿ: ಸಣ್ಣ ಗೆಡ್ಡೆಗಳಿಗೆ ನೀಡಲಾಗುವ ಕೇಂದ್ರೀಕೃತ ಹೈ-ಡೋಸ್ ರೇಡಿಯೇಶನ್."
        ],
        monitoring: [
          "ಪ್ರತಿ 2 ರಿಂದ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ಕಾಂಟ್ರಾಸ್ಟ್ ಎಂಆರ್‌ಐ (MRI) ಸ್ಕ್ಯಾನ್ ತಪಾಸಣೆ.",
          "ಫಿಸಿಯೋಥೆರಪಿ, ಮಾತು ಮತ್ತು ದೈಹಿಕ ಪುನರ್ವಸತಿ ತರಬೇತಿ.",
          "ಪಿಟ್ಯುಟರಿ ಮತ್ತು ಹಾರ್ಮೋನ್ ಮಟ್ಟಗಳ ನಿಯಮಿತ ರಕ್ತ ತಪಾಸಣೆ."
        ]
      },
      pnm: {
        title: "ಎದೆ ನ್ಯುಮೋನಿಯಾ ಪರೀಕ್ಷೆ",
        modality: "ಎದೆ ರೇಡಿಯೋಗ್ರಫಿ (X-Ray PA/AP)",
        badge: "ಎದೆ ಎಕ್ಸ್-ರೇ",
        desc: "ಎದೆಯ ಪೋಸ್ಟೀರಿಯರ್-ಆಂಟೀರಿಯರ್ ಎಕ್ಸ್-ರೇ. ಶ್ವಾಸಕೋಶದ ಕಫ ಮತ್ತು ಗಟ್ಟಿಯಾಗುವಿಕೆಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
        samplePrompt: "ಡಿಜಿಟಲ್ ಎದೆ ಎಕ್ಸ್-ರೇ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ನ್ಯುಮೋನಿಯಾ ಸೋಂಕು", "ಸಾಮಾನ್ಯ ಶ್ವಾಸಕೋಶ"],
        explanation: "ನ್ಯುಮೋನಿಯಾವು ಶ್ವಾಸಕೋಶದ ಗಂಭೀರ ಸಾಂಕ್ರಾಮಿಕ ಸೋಂಕಾಗಿದ್ದು, ಶ್ವಾಸಕೋಶದ ಸೂಕ್ಷ್ಮ ಗಾಳಿಕೋಶಗಳಲ್ಲಿ ಕಫ, ಕೀವು ಮತ್ತು ಉರಿಯೂತದ ದ್ರವ ತುಂಬಿಕೊಳ್ಳುತ್ತದೆ. ಬ್ಯಾಕ್ಟೀರಿಯಾ (Streptococcus pneumoniae) ಅಥವಾ ವೈರಸ್‌ಗಳು ಶ್ವಾಸಕೋಶವನ್ನು ಆಕ್ರಮಿಸಿ ಆಮ್ಲಜನಕ ಹೀರಿಕೊಳ್ಳುವ ಪ್ರಕ್ರಿಯೆಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತವೆ, ಇದರಿಂದ ರಕ್ತದಲ್ಲಿ ಆಮ್ಲಜನಕದ ಮಟ್ಟ ಕುಸಿಯುತ್ತದೆ.",
        symptoms: [
          "ಹಳದಿ, ಹಸಿರು ಅಥವಾ ಕಂದು ಬಣ್ಣದ ಕಫದೊಂದಿಗೆ ನಿರಂತರ ಕೆಮ್ಮು",
          "ತೀವ್ರ ಜ್ವರ, ನಡುಕ, ವಿಪರೀತ ಬೆವರು ಮತ್ತು ಎದೆನೋವು",
          "ಉಸಿರಾಟದ ತೊಂದರೆ, ವೇಗವಾದ ಉಸಿರಾಟ ಮತ್ತು ಎದೆ ಬಿಗಿತ",
          "ಸ್ಟೆತೊಸ್ಕೋಪ್‌ನಲ್ಲಿ ಕೇಳಿಸುವ ಕರ್ಕಶ ಶಬ್ದ (Crackles / Rales)"
        ],
        meds: [
          "ಹೊರರೋಗಿಗಳಿಗೆ: ಅಮಾಕ್ಸಿಸಿಲಿನ್-ಕ್ಲಾವ್ಯುಲನೇಟ್ (Amoxicillin-Clavulanate 1g) ಜೊತೆಗೆ ಅಜಿಥ್ರೊಮೈಸಿನ್ (Azithromycin 500mg) ಅಥವಾ ಡಾಕ್ಸಿಸೈಕ್ಲಿನ್.",
          "ಒಳರೋಗಿಗಳಿಗೆ (ಆಸ್ಪತ್ರೆ): IV ಸೆಫ್ಟ್ರಿಯಾಕ್ಸೋನ್ (Ceftriaxone 1-2g) ಜೊತೆಗೆ ಅಜಿಥ್ರೊಮೈಸಿನ್ ಅಥವಾ ಲೆವೊಫ್ಲೋಕ್ಸಾಸಿನ್.",
          "ಆಸ್ಪತ್ರೆ ಸೋಂಕುಗಳಿಗೆ (MRSA): ಪೈಪೆರಾಸಿಲಿನ್-ಟ್ಯಾಜೋಬ್ಯಾಕ್ಟಮ್ (Zosyn) ಅಥವಾ ವ್ಯಾಂಕೊಮೈಸಿನ್.",
          "ವೈರಲ್ ಫ್ಲೂ ನ್ಯುಮೋನಿಯಾಗೆ: ಓಸೆಲ್ಟಾಮಿವಿರ್ (Tamiflu 75mg) ಮಾತ್ರೆಗಳು."
        ],
        surgery: [
          "ಥೊರಾಸೆಂಟೆಸಿಸ್: ಶ್ವಾಸಕೋಶದ ಸುತ್ತ ಶೇಖರಣೆಯಾದ ಕೀವು ಅಥವಾ ನೀರನ್ನು ಸೂಜಿಯ ಮೂಲಕ ಹೊರತೆಗೆಯುವುದು.",
          "ಎದೆ ನಳಿಗೆ ಅಳವಡಿಕೆ (Chest Tube): ಶ್ವಾಸಕೋಶದ ಹೊರಪದರದ ಕೀವಿನ ಗಡ್ಡೆಯನ್ನು (Empyema) ಸಂಪೂರ್ಣವಾಗಿ ಹೊರಹಾಕಲು.",
          "ಹೈ-ಫ್ಲೋ ಆಕ್ಸಿಜನ್ ಅಥವಾ ವೆಂಟಿಲೇಟರ್ ಬೆಂಬಲ: ತೀವ್ರ ಉಸಿರಾಟದ ವೈಫಲ್ಯ ಉಂಟಾದಾಗ."
        ],
        monitoring: [
          "ಪಲ್ಸ್ ಆಕ್ಸಿಮೀಟರ್ ಮೂಲಕ ಆಮ್ಲಜನಕದ ಮಟ್ಟವನ್ನು (SpO2 94-98%) ನಿರಂತರವಾಗಿ ಪರೀಕ್ಷಿಸುವುದು.",
          "ಚಿಕಿತ್ಸೆಯ 6-8 ವಾರಗಳ ನಂತರ ಶ್ವಾಸಕೋಶ ಸಂಪೂರ್ಣ ಗುಣಮುಖವಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಪುನಃ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆ.",
          "ನ್ಯುಮೋಕೊಕಲ್ ಮತ್ತು ವಾರ್ಷಿಕ ಇನ್‌ಫ್ಲುಯೆಂಜಾ ಲಸಿಕೆ ಪಡೆಯುವುದು."
        ]
      },
      oct: {
        title: "ರೆಟಿನಾ ಒಸಿಟಿ (ಕಣ್ಣಿನ ರೋಗಗಳು)",
        modality: "ಆಪ್ಟಿಕಲ್ ಕೊಹೆರೆನ್ಸ್ ಟೊಮೊಗ್ರಫಿ (B-Scan)",
        badge: "ರೆಟಿನಲ್ OCT",
        desc: "ಕಣ್ಣಿನ ಮ್ಯಾಕ್ಯುಲಾದ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಅಡ್ಡ-ವಿಭಾಗದ B-ಸ್ಕ್ಯಾನ್. CNV, DME ಮತ್ತು ಡ್ರೂಸೆನ್ ಪತ್ತೆ ಮಾಡುತ್ತದೆ.",
        samplePrompt: "ಕಣ್ಣಿನ ಮ್ಯಾಕ್ಯುಲಾರ್ OCT B-ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಸಿಎನ್‌ವಿ (CNV)", "ಡಿಎಂಇ (DME)", "ಡ್ರೂಸೆನ್ (Drusen)", "ಸಾಮಾನ್ಯ ರೆಟಿನಾ"],
        explanation: "ಆಪ್ಟಿಕಲ್ ಕೊಹೆರೆನ್ಸ್ ಟೊಮೊಗ್ರಫಿ (OCT) ಕಣ್ಣಿನ ರೆಟಿನಾ ಮತ್ತು ಮ್ಯಾಕ್ಯುಲಾದ ಸೂಕ್ಷ್ಮ ಪದರಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಸಿಎನ್‌ವಿ (ಅಸಹಜ ರಕ್ತನಾಳಗಳ ಬೆಳವಣಿಗೆ), ಡಯಾಬಿಟಿಕ್ ಮ್ಯಾಕ್ಯುಲರ್ ಎಡಿಮಾ (ಊತ) ಮತ್ತು ಡ್ರೂಸೆನ್ (ಹಳದಿ ಪ್ರೋಟೀನ್ ನಿಕ್ಷೇಪಗಳು) ದೃಷ್ಟಿ ಕಳೆದುಕೊಳ್ಳುವ ಪ್ರಮುಖ ಕಾರಣಗಳಾಗಿವೆ. ಚಿಕಿತ್ಸೆ ನೀಡದಿದ್ದರೆ ಕೇಂದ್ರ ದೃಷ್ಟಿ ಶಾಶ್ವತವಾಗಿ ಕಳೆದುಹೋಗಬಹುದು.",
        symptoms: [
          "ನೇರ ರೇಖೆಗಳು ವಕ್ರವಾಗಿ ಅಥವಾ ಅಲೆಯಂತೆ ಕಾಣಿಸುವುದು (ಮೆಟಾಮಾರ್ಫಾಪ್ಸಿಯಾ)",
          "ಕೇಂದ್ರ ದೃಷ್ಟಿಯಲ್ಲಿ ಮಂಜಾಗುವಿಕೆ ಅಥವಾ ಕಪ್ಪು ಚುಕ್ಕೆ ಮೂಡುವುದು (ಸ್ಕಾಟೊಮಾ)",
          "ಬಣ್ಣಗಳನ್ನು ಗುರುತಿಸುವಲ್ಲಿ ಮತ್ತು ಬೆಳಕಿನಲ್ಲಿ ಓದುವುದರಲ್ಲಿ ಕಷ್ಟವಾಗುವುದು",
          "ಮುಖಗಳನ್ನು ಗುರುತಿಸಲು ತೊಂದರೆ ಉಂಟಾಗುವುದು"
        ],
        meds: [
          "ಆಂಟಿ-ವಿಇಜಿಎಫ್ ಕಣ್ಣಿನ ಚುಚ್ಚುಮದ್ದು: ಅಫ್ಲಿಬರ್ಸೆಪ್ಟ್ (Eylea 2mg), ರಾನಿಬಿಜುಮಾಬ್ (Lucentis) ಅಥವಾ ಫಾರಿಸಿಮಾಬ್ (Vabysmo) ಅನ್ನು ಕಣ್ಣಿನೊಳಗೆ ನೀಡಿ ರಕ್ತನಾಳಗಳ ಸೋರಿಕೆಯನ್ನು ತಡೆಯುವುದು.",
          "ಸ್ಟೀರಾಯ್ಡ್ ಇಂಪ್ಲಾಂಟ್: ದೀರ್ಘಕಾಲದ ಮಧುಮೇಹದ ಊತಕ್ಕೆ ಡೆಕ್ಸಾಮೆಥಾಸೋನ್ ಇಂಪ್ಲಾಂಟ್ (Ozurdex 0.7mg).",
          "AREDS2 ಪೌಷ್ಟಿಕಾಂಶ ಸೂತ್ರ: ವಿಟಮಿನ್ ಸಿ, ಇ, ಲ್ಯೂಟಿನ್, ಜಿಯಾಕ್ಸಾಂಥಿನ್ ಮತ್ತು ಸತು ಮಾತ್ರೆಗಳು ಡ್ರೂಸೆನ್ ಹೆಚ್ಚಾಗುವುದನ್ನು ಶೇ. 25 ರಷ್ಟು ತಡೆಯುತ್ತವೆ."
        ],
        surgery: [
          "ಫೋಟೊಡೈನಾಮಿಕ್ ಥೆರಪಿ (PDT): ಇಂಟ್ರಾವೀನಸ್ ವರ್ಟೆಪೋರ್ಫಿನ್ ಔಷಧ ನೀಡಿ ಲೇಸರ್ ಮೂಲಕ ಅಸಹಜ ರಕ್ತನಾಳಗಳನ್ನು ನಾಶಪಡಿಸುವುದು.",
          "ಫೋಕಲ್ ಮ್ಯಾಕ್ಯುಲಾರ್ ಲೇಸರ್: ಸೋರುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ರಕ್ತನಾಳಗಳನ್ನು ಲೇಸರ್ ಮೂಲಕ ಮುಚ್ಚುವುದು.",
          "ಪಾರ್ಸ್ ಪ್ಲಾನಾ ವಿಟ್ರೆಕ್ಟಮಿ (PPV): ಕಣ್ಣಿನ ರೆಟಿನಾವನ್ನು ಎಳೆಯುತ್ತಿರುವ ಪೊರೆಯನ್ನು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ಸರಿಪಡಿಸುವುದು."
        ],
        monitoring: [
          "ಆಮ್ಸ್ಲರ್ ಗ್ರಿಡ್ (Amsler Grid) ಚಾರ್ಟ್ ಬಳಸಿ ಪ್ರತಿದಿನ ಮನೆಯಲ್ಲಿಯೇ ಸ್ವಯಂ ದೃಷ್ಟಿ ಪರೀಕ್ಷೆ.",
          "ಇಂಜೆಕ್ಷನ್ ಪಡೆಯುವ ಸಮಯದಲ್ಲಿ ಪ್ರತಿ 4 ರಿಂದ 8 ವಾರಗಳಿಗೊಮ್ಮೆ ಮ್ಯಾಕ್ಯುಲಾರ್ OCT ಸ್ಕ್ಯಾನ್ ತಪಾಸಣೆ.",
          "ಧೂಮಪಾನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತ್ಯಜಿಸುವುದು ಮತ್ತು ಯುವಿ (UV400) ರಕ್ಷಣಾತ್ಮಕ ಕನ್ನಡಕ ಧರಿಸುವುದು."
        ]
      },
      dia_ret: {
        title: "ಮಧುಮೇಹ ರೆಟಿನೋಪತಿ",
        modality: "ಡಿಜಿಟಲ್ ಬಣ್ಣದ ಫಂಡಸ್ ಛಾಯಾಗ್ರಹಣ",
        badge: "ಫಂಡಸ್ ಫೋಟೋ",
        desc: "ಡಿಜಿಟಲ್ ರೆಟಿನಲ್ ಫಂಡಸ್ ಛಾಯಾಚಿತ್ರ. ರಕ್ತನಾಳಗಳ ಸೋರಿಕೆ ಮತ್ತು ಎಕ್ಸ್ಯುಡೇಟ್‌ಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
        samplePrompt: "ಡಿಜಿಟಲ್ ಕಣ್ಣಿನ ಫಂಡಸ್ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಮೈಲ್ಡ್ NPDR", "ಮಾಡರೇಟ್ NPDR", "ಸಾಮಾನ್ಯ ರೆಟಿನಾ", "ತೀವ್ರ NPDR"],
        explanation: "ಮಧುಮೇಹ ರೆಟಿನೋಪತಿ (DR) ದೀರ್ಘಕಾಲದ ರಕ್ತದ ಸಕ್ಕರೆ ಕಾಯಿಲೆಯಿಂದ ಕಣ್ಣಿನ ರಕ್ತನಾಳಗಳು ದುರ್ಬಲಗೊಳ್ಳುವ ಗಂಭೀರ ಸ್ಥಿತಿಯಾಗಿದೆ. ರೆಟಿನಾದ ಸೂಕ್ಷ್ಮ ರಕ್ತನಾಳಗಳು ಮುಚ್ಚಿಹೋಗಿ, ರಕ್ತ ಮತ್ತು ಪ್ರೋಟೀನ್ ಸೋರಿಕೆಯಾಗುತ್ತದೆ. ಮುಂದುವರಿದ ಹಂತದಲ್ಲಿ ಹೊಸ ದುರ್ಬಲ ರಕ್ತನಾಳಗಳು ಹುಟ್ಟಿಕೊಂಡು ಕಣ್ಣಿನೊಳಗೆ ರಕ್ತಸ್ರಾವವಾಗಿ ರೆಟಿನಾ ಬೇರ್ಪಟ್ಟು ಶಾಶ್ವತ ಅಂಧತ್ವಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.",
        symptoms: [
          "ಆರಂಭಿಕ ಹಂತಗಳಲ್ಲಿ ಯಾವುದೇ ರೋಗಲಕ್ಷಣಗಳು ಕಾಣಿಸುವುದಿಲ್ಲ",
          "ದೃಷ್ಟಿಯಲ್ಲಿ ಏರಿಳಿತ ಮತ್ತು ಮಂಜಾದ ನೋಟ",
          "ಕಣ್ಣಿನ ಮುಂದೆ ಕಪ್ಪು ಚುಕ್ಕೆಗಳು ಅಥವಾ ಜೇಡರ ಬಲೆಯಂತಹ ಕಲೆಗಳು ತೇಲಾಡುವುದು",
          "ದೃಷ್ಟಿಯ ಒಂದು ಭಾಗದಲ್ಲಿ ಕತ್ತಲೆ ಕವಿದಂತೆ ಭಾಸವಾಗುವುದು (ರೆಟಿನಾ ಡಿಟ್ಯಾಚ್‌ಮೆಂಟ್)"
        ],
        meds: [
          "ಸಕ್ಕರೆ ಕಾಯಿಲೆಯ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಂತ್ರಣ: HbA1c ಮಟ್ಟವನ್ನು 7.0% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇಟ್ಟುಕೊಳ್ಳುವುದು ರೋಗ ಉಲ್ಬಣಿಸುವುದನ್ನು ಅರ್ಧದಷ್ಟು ತಡೆಯುತ್ತದೆ.",
          "ರಕ್ತದೊತ್ತಡ ನಿಯಂತ್ರಣ: ರಕ್ತದೊತ್ತಡವನ್ನು 130/80 mmHg ಗಿಂತ ಕಡಿಮೆ ಇರಿಸಲು ACE ಇನ್ಹಿಬಿಟರ್‌ಗಳು (Lisinopril).",
          "ಕೊಲೆಸ್ಟ್ರಾಲ್ ನಿಯಂತ್ರಣ: ಸ್ಟ್ಯಾಟಿನ್ ಮಾತ್ರೆಗಳು (Atorvastatin) ರೆಟಿನಾದಲ್ಲಿ ಕೊಬ್ಬಿನ ಕಲೆಗಳು ಶೇಖರಣೆಯಾಗುವುದನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
          "ಆಂಟಿ-ವಿಇಜಿಎಫ್ ಕಣ್ಣಿನ ಚುಚ್ಚುಮದ್ದು: ರೆಟಿನಾದ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಊತವಿದ್ದಾಗ ಅಫ್ಲಿಬರ್ಸೆಪ್ಟ್ ಚುಚ್ಚುಮದ್ದು."
        ],
        surgery: [
          "ಪ್ಯಾನ್-ರೆಟಿನಲ್ ಫೋಟೊಕೊಯಾಗ್ಯುಲೇಶನ್ (PRP ಲೇಸರ್): ರಕ್ತನಾಳಗಳು ಒಡೆಯದಂತೆ ತಡೆಯಲು ರೆಟಿನಾದ ಹೊರಭಾಗಕ್ಕೆ ಲೇಸರ್ ಚಿಕಿತ್ಸೆ ನೀಡುವುದು.",
          "ಫೋಕಲ್ ಲೇಸರ್: ಸೋರುತ್ತಿರುವ ಸೂಕ್ಷ್ಮ ರಕ್ತನಾಳಗಳನ್ನು ಮುಚ್ಚುವುದು.",
          "ವಿಟ್ರೆಕ್ಟಮಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (PPV): ಕಣ್ಣಿನೊಳಗೆ ತುಂಬಿರುವ ಹಳೆಯ ರಕ್ತವನ್ನು ಹೊರತೆಗೆಯುವುದು ಮತ್ತು ರೆಟಿನಾವನ್ನು ಮರುಜೋಡಿಸುವುದು."
        ],
        monitoring: [
          "ಕಣ್ಣಿನ ಹಿಂಬದಿಯ ನಿಯಮಿತ ತಪಾಸಣೆ: ಮೈಲ್ಡ್ (ವರ್ಷಕ್ಕೊಮ್ಮೆ), ಮಾಡರೇಟ್ (6 ತಿಂಗಳಿಗೊಮ್ಮೆ), ತೀವ್ರ ಹಂತ (2-3 ತಿಂಗಳಿಗೊಮ್ಮೆ).",
          "ಮೂತ್ರಪಿಂಡದ ತಪಾಸಣೆ: ಮೂತ್ರದಲ್ಲಿ ಅಲ್ಬುಮಿನ್ ಪರೀಕ್ಷೆ (ಕಣ್ಣಿನ ರೋಗಕ್ಕೂ ಮೂತ್ರಪಿಂಡಕ್ಕೂ ನೇರ ಸಂಬಂಧವಿದೆ).",
          "ಸಕ್ರಿಯ ರಕ್ತಸ್ರಾವವಿದ್ದಾಗ ಭಾರ ಎತ್ತುವುದು ಅಥವಾ ತಲೆಕೆಳಗಾಗುವ ವ್ಯಾಯಾಮಗಳನ್ನು ತಪ್ಪಿಸುವುದು."
        ]
      },
      breast: {
        title: "ಸ್ತನ ಕ್ಯಾನ್ಸರ್ ಐಡಿಸಿ ಪರೀಕ್ಷೆ",
        modality: "ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಬಯಾಪ್ಸಿ (H&E ಸ್ಟೇನ್)",
        badge: "ಬಯಾಪ್ಸಿ ಸ್ಲೈಡ್",
        desc: "ಎಚ್&ಇ ಸ್ಟೇನ್ ಮಾಡಿದ ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಬಯಾಪ್ಸಿ ಪ್ಯಾಚ್. ಇನ್ವೇಸಿವ್ ಡಕ್ಟಲ್ ಕಾರ್ಸಿನೋಮಾವನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ.",
        samplePrompt: "ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಬಯಾಪ್ಸಿ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಇನ್ವೇಸಿವ್ ಡಕ್ಟಲ್ ಕಾರ್ಸಿನೋಮಾ (ಕ್ಯಾನ್ಸರ್)", "ಸಾಮಾನ್ಯ ಅಂಗಾಂಶ"],
        explanation: "ಇನ್ವೇಸಿವ್ ಡಕ್ಟಲ್ ಕಾರ್ಸಿನೋಮಾ (IDC) ಅತ್ಯಂತ ಸಾಮಾನ್ಯವಾದ ಸ್ತನ ಕ್ಯಾನ್ಸರ್ ಆಗಿದೆ (ಶೇ. 80 ರಷ್ಟು ಪ್ರಕರಣಗಳು). ಸ್ತನದ ಹಾಲಿನ ನಾಳಗಳಲ್ಲಿ ಉತ್ಪತ್ತಿಯಾಗುವ ಕ್ಯಾನ್ಸರ್ ಜೀವಕೋಶಗಳು ತಡೆಗೋಡೆಯನ್ನು ಭೇದಿಸಿ ಸುತ್ತಮುತ್ತಲಿನ ಕೊಬ್ಬು ಮತ್ತು ಸ್ನಾಯು ಅಂಗಾಂಶಗಳನ್ನು ಆಕ್ರಮಿಸುತ್ತವೆ. ಇವು ದುಗ್ಧರಸ ಗ್ರಂಥಿಗಳು ಮತ್ತು ರಕ್ತನಾಳಗಳ ಮೂಲಕ ದೇಹದ ಇತರ ಭಾಗಗಳಿಗೂ ಹರಡಬಹುದು.",
        symptoms: [
          "ಸ್ತನದಲ್ಲಿ ನೋವಿಲ್ಲದ, ಗಟ್ಟಿಯಾದ, ಅಸಮಪಾರ್ಶ್ವದ ಗಡ್ಡೆ",
          "ಸ್ತನದ ಚರ್ಮದ ಮೇಲೆ ಸುಕ್ಕು, ಕಿತ್ತಳೆ ಸಿಪ್ಪೆಯಂತಹ ಬದಲಾವಣೆ (Peau d'orange)",
          "ಮೊಲೆತೊಟ್ಟು ಒಳಮುಖವಾಗಿ ತಿರುಗುವುದು ಅಥವಾ ರಕ್ತಮಿಶ್ರಿತ ದ್ರವ ಸೋರುವುದು",
          "ಕಂಕುಳಿನಲ್ಲಿ ಗಂಟಿನಂತಹ ದುಗ್ಧರಸ ಗ್ರಂಥಿಗಳು ಊದಿಕೊಳ್ಳುವುದು"
        ],
        meds: [
          "ಹಾರ್ಮೋನ್ ಥೆರಪಿ (ER+/PR+ ಗೆ): ಟ್ಯಾಮೋಕ್ಸಿಫೆನ್ (Tamoxifen 20mg) ಅಥವಾ ಲೆಟ್ರೊಜೋಲ್ / ಅನಾಸ್ಟ್ರೋಜೋಲ್ ಮಾತ್ರೆಗಳು.",
          "ಟಾರ್ಗೆಟೆಡ್ ಥೆರಪಿ (HER2+ ಗೆ): ಟ್ರಾಸ್ಟುಜುಮಾಬ್ (Herceptin) ಮತ್ತು ಪರ್ಟುಜುಮಾಬ್ (Perjeta).",
          "ಕೀಮೋಥೆರಪಿ: ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಮುನ್ನ ಅಥವಾ ನಂತರ ನೀಡಲಾಗುವ AC-T ಕೀಮೋಥೆರಪಿ ಚಿಕಿತ್ಸೆ.",
          "ಇಮ್ಯುನೊಥೆರಪಿ: ಟ್ರಿಪಲ್-ನೆಗಟಿವ್ ಕ್ಯಾನ್ಸರ್‌ಗೆ ಪೆಂಬ್ರೊಲಿಜುಮಾಬ್ (Keytruda)."
        ],
        surgery: [
          "ಲಂಪೆಕ್ಟಮಿ (ಸ್ತನ ಸಂರಕ್ಷಣಾ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ): ಗೆಡ್ಡೆಯನ್ನು ಮತ್ತು ಸುತ್ತಲಿನ ಸಣ್ಣ ಭಾಗವನ್ನು ಮಾತ್ರ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ತೆಗೆಯುವುದು.",
          "ಸೆಂPhaseನಲ್ ಲಿಂಫ್ ನೋಡ್ ಬಯಾಪ್ಸಿ (SLNB): ಕ್ಯಾನ್ಸರ್ ಕಂಕುಳಿನ ಗ್ರಂಥಿಗಳಿಗೆ ಹರಡಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸುವುದು.",
          "ಮಾಸ್ಟೆಕ್ಟಮಿ: ಕ್ಯಾನ್ಸರ್ ಹರಡಿದ್ದರೆ ಸಂಪೂರ್ಣ ಸ್ತನವನ್ನು ತೆಗೆದುಹಾಕುವುದು ಮತ್ತು ಪುನರ್ನಿರ್ಮಾಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಲಂಪೆಕ್ಟಮಿ ನಂತರ ಕ್ಯಾನ್ಸರ್ ಮರುಕಳಿಸದಂತೆ ತಡೆಯಲು ರೇಡಿಯೇಶನ್ ಥೆರಪಿ.",
          "ವಾರ್ಷಿಕ ಮ್ಯಾಮೊಗ್ರಫಿ ಮತ್ತು ಎಂಆರ್‌ಐ (MRI) ಸ್ಕ್ಯಾನ್ ತಪಾಸಣೆ.",
          "ಹಾರ್ಮೋನ್ ಮಾತ್ರೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವಾಗ ಮೂಳೆಯ ಸಾಂದ್ರತೆ ಪರೀಕ್ಷೆ (DEXA ಸ್ಕ್ಯಾನ್)."
        ]
      },
      mal: {
        title: "ಮಲೇರಿಯಾ ರಕ್ತ ಪರೀಕ್ಷೆ",
        modality: "ರಕ್ತದ ಲೇಪನ ಸೂಕ್ಷ್ಮದರ್ಶಕ (Giemsa)",
        badge: "ರಕ್ತದ ಲೇಪನ",
        desc: "ಗೀಮ್ಸಾ-ಸ್ಟೇನ್ ಮಾಡಿದ ತೆಳುವಾದ ರಕ್ತದ ಲೇಪನ ಚಿತ್ರ. ಪ್ಲಾಸ್ಮೋಡಿಯಂ ಪರಾವಲಂಬಿಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
        samplePrompt: "ಗೀಮ್ಸಾ ರಕ್ತದ ಲೇಪನದ ಸೂಕ್ಷ್ಮದರ್ಶಕ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಮಲೇರಿಯಾ ಸೋಂಕಿತ ಕೋಶ", "ಸಾಮಾನ್ಯ ರಕ್ತ ಕಣ"],
        explanation: "ಮಲೇರಿಯಾವು ಹೆಣ್ಣು ಅನಾಫಿಲಿಸ್ ಸೊಳ್ಳೆಯ ಕಡಿತದ ಮೂಲಕ ಹರಡುವ ಪ್ಲಾಸ್ಮೋಡಿಯಂ (P. falciparum, P. vivax) ಪ್ರೊಟೊಜೋವನ್ ಪರಾವಲಂಬಿ ಸೋಂಕಾಗಿದೆ. ಈ ಪರಾವಲಂಬಿಗಳು ಯಕೃತ್ತಿನಲ್ಲಿ ಬೆಳೆದು ನಂತರ ಕೆಂಪು ರಕ್ತಕಣಗಳನ್ನು (RBC) ಆಕ್ರಮಿಸಿ ನಾಶಮಾಡುತ್ತವೆ. ಫಾಲ್ಸಿಪ್ಯಾರಮ್ ಮಲೇರಿಯಾ ರಕ್ತನಾಳಗಳನ್ನು ಕಟ್ಟಿಹಾಕಿ ಮೆದುಳಿನ ಮಲೇರಿಯಾ, ತೀವ್ರ ರಕ್ತಹೀನತೆ ಮತ್ತು ಮೂತ್ರಪಿಂಡ ವೈಫಲ್ಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.",
        symptoms: [
          "ನಡುಕದೊಂದಿಗೆ ವಿಪರೀತ ಚಳಿ, ನಂತರ ತೀವ್ರ ಜ್ವರ (39-41°C) ಮತ್ತು ಅತಿಯಾದ ಬೆವರು",
          "ತೀವ್ರ ತಲೆನೋವು, ಮೈಕೈನೋವು, ವಾಂತಿ ಮತ್ತು ಕೀಲುನೋವು",
          "ಕಾಮಾಲೆ (ಕಣ್ಣು ಹಳದಿಯಾಗುವುದು), ರಕ್ತಹೀನತೆ ಮತ್ತು ಗುಲ್ಮದ ಊತ",
          "ಗಂಭೀರ ಸ್ಥಿತಿಯಲ್ಲಿ: ಪ್ರಜ್ಞಾಹೀನತೆ, ಫಿಟ್ಸ್ ಮತ್ತು ಕಪ್ಪು ಬಣ್ಣದ ಮೂತ್ರ"
        ],
        meds: [
          "ಮೊದಲ ಹಂತದ ACT ಚಿಕಿತ್ಸೆ: ಆರ್ಟೆಮೆಥರ್-ಲ್ಯೂಮೆಫ್ಯಾಂಟ್ರಿನ್ (Coartem: 3 ದಿನಗಳ ಕೋರ್ಸ್) ಅಥವಾ ಆರ್ಟೆಸುನೇಟ್-ಅಮೊಡಿಯಾಕ್ವಿನ್.",
          "ಪಿ. ವೈವಾಕ್ಸ್ ಮಲೇರಿಯಾ ಮರುಕಳಿಸದಂತೆ: ಕ್ಲೋರೊಕ್ವಿನ್ ಜೊತೆಗೆ ಪ್ರೈಮಾಕ್ವಿನ್ (Primaquine: 14 ದಿನಗಳು - G6PD ಪರೀಕ್ಷೆ ಕಡ್ಡಾಯ).",
          "ತೀವ್ರ ಮಲೇರಿಯಾಕ್ಕೆ: IV ಆರ್ಟೆಸುನೇಟ್ (Artesunate 2.4 mg/kg) ಇಂಜೆಕ್ಷನ್ ತಕ್ಷಣ ಪ್ರಾರಂಭಿಸಬೇಕು.",
          "ಜ್ವರ ನಿವಾರಣೆಗೆ ಪ್ಯಾರಸಿಟಮೋಲ್ (10-15 mg/kg); ಪ್ಲೇಟ್‌ಲೆಟ್ಸ್ ಕಡಿಮೆಯಾಗುವುದರಿಂದ ಆಸ್ಪಿರಿನ್/ಐಬುಪ್ರೊಫೇನ್ ನೀಡಬಾರದು."
        ],
        surgery: [
          "ಐಸಿಯು (ICU) ತುರ್ತು ನಿಗಾ: ಮೆದುಳಿನ ಮಲೇರಿಯಾ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆಗೆ ವೆಂಟಿಲೇಟರ್ ಮತ್ತು ನಿಖರ ಗ್ಲೂಕೋಸ್ ನಿರ್ವಹಣೆ.",
          "ತುರ್ತು ರಕ್ತ ವರ್ಗಾವಣೆ (Blood Transfusion): ರಕ್ತಹೀನತೆ ತೀವ್ರವಾದಾಗ (Hb < 7 g/dL).",
          "ಡಯಾಲಿಸಿಸ್ ಚಿಕಿತ್ಸೆ: ಮೂತ್ರಪಿಂಡದ ವೈಫಲ್ಯ ಉಂಟಾದಾಗ."
        ],
        monitoring: [
          "ಪರಾವಲಂಬಿಗಳು ಸಂಪೂರ್ಣ ನಾಶವಾಗುವವರೆಗೆ ಪ್ರತಿ 12-24 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ರಕ್ತ ಪರೀಕ್ಷೆ (Giemsa Smear).",
          "ಪ್ರತಿ 4-6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಅಂಶದ ಪರೀಕ್ಷೆ (ಹೈಪೊಗ್ಲಿಸಿಮಿಯಾ ತಡೆಯಲು).",
          "ಔಷಧೋಪಚಾರಿತ ಸೊಳ್ಳೆ ಪರದೆಗಳ ಬಳಕೆ (LLINs) ಮತ್ತು ಸೊಳ್ಳೆ ನಿವಾರಕ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು."
        ]
      },
      parkinson: {
        title: "ಪಾರ್ಕಿನ್ಸನ್ ಕಾಯಿಲೆ ಪತ್ತೆ",
        modality: "ಕೈಬರಹ ಮತ್ತು ಸುರುಳಿ ರೇಖಾಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
        badge: "ರೇಖಾಚಿತ್ರ ಪರೀಕ್ಷೆ",
        desc: "ಕೈಬರಹದಲ್ಲಿನ ಅಸಹಜ ನಡುಕ, ಅಸ್ಥಿರ ವೇಗ ಮತ್ತು ಮೈಕ್ರೋಗ್ರಾಫಿಯಾ ಲಕ್ಷಣಗಳ ಡಿಜಿಟಲ್ ವಿಶ್ಲೇಷಣೆ.",
        samplePrompt: "ಸುರುಳಿ ಅಥವಾ ಅಲೆಯಂತಹ ಕೈಬರಹದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಪಾರ್ಕಿನ್ಸನ್ ರೋಗದ ಲಕ್ಷಣ ಪತ್ತೆ", "ಆರೋಗ್ಯಕರ ಕೈಬರಹ (ಸಾಮಾನ್ಯ)"],
        explanation: "ಪಾರ್ಕಿನ್ಸನ್ ಕಾಯಿಲೆಯು ಮೆದುಳಿನ ಸಬ್‌ಸ್ಟ್ಯಾನ್ಷಿಯಾ ನೈಗ್ರಾದಲ್ಲಿ ಡೋಪಮೈನ್ ಉತ್ಪಾದಿಸುವ ನರಕೋಶಗಳ ನಾಶದಿಂದ ಉಂಟಾಗುವ ಪ್ರಗತಿಪರ ನರವೈಜ್ಞಾನಿಕ ಕಾಯಿಲೆಯಾಗಿದೆ. ಇದರ ಪ್ರಮುಖ ಲಕ್ಷಣಗಳಲ್ಲಿ ಕೈ-ಕಾಲುಗಳಲ್ಲಿ ನಡುಕ (Tremor), ನಿಧಾನ ಚಲನೆ (Bradykinesia), ಸ್ನಾಯುಗಳ ಬಿಗಿತ (Rigidity) ಮತ್ತು ಸಮತೋಲನ ತಪ್ಪುವುದು ಸೇರಿವೆ. ಡಿಜಿಟಲ್ ಡ್ರಾಯಿಂಗ್ ವಿಶ್ಲೇಷಣೆಯು ಸೂಕ್ಷ್ಮ ನಡುಕವನ್ನು ನಿಖರವಾಗಿ ಗುರುತಿಸುತ್ತದೆ.",
        symptoms: [
          "ವಿಶ್ರಾಂತಿಯಲ್ಲಿರುವಾಗ ಕೈಬೆರಳುಗಳಲ್ಲಿ ಅನೈಚ್ಛಿಕ ನಡುಕ (Pill-rolling tremor)",
          "ಚಲನೆಗಳಲ್ಲಿ ತೀವ್ರ ಮಂದಗತಿ ಮತ್ತು ದೈನಂದಿನ ಕೆಲಸಗಳಲ್ಲಿ ನಿಧಾನತೆ",
          "ಕೈಕಾಲುಗಳ ಸ್ನಾಯುಗಳಲ್ಲಿ ಬಿಗಿತ ಮತ್ತು ನಡೆಯುವಾಗ ಕೈಗಳ ತೂಗಾಟ ಕಡಿಮೆಯಾಗುವುದು",
          "ಮೈಕ್ರೋಗ್ರಾಫಿಯಾ (ಬರೆಯುತ್ತಾ ಹೋದಂತೆ ಅಕ್ಷರಗಳು ಸಣ್ಣದಾಗುವುದು ಮತ್ತು ನಡುಗುವುದು)"
        ],
        meds: [
          "ಲೆವೊಡೋಪಾ-ಕಾರ್ಬಿಡೋಪಾ (Sinemet): ಮೆದುಳಿನಲ್ಲಿ ಡೋಪಮೈನ್ ಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸುವ ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಔಷಧಿ.",
          "ಡೋಪಮೈನ್ ಅಗೊನಿಸ್ಟ್‌ಗಳು (Pramipexole / Ropinirole): ನರಕೋಶಗಳ ಡೋಪಮೈನ್ ಗ್ರಾಹಕಗಳನ್ನು ಪ್ರಚೋದಿಸಲು.",
          "ಎಂಎಒ-ಬಿ ಇನ್ಹಿಬಿಟರ್ಸ್ (Rasagiline 1 mg): ಡೋಪಮೈನ್ ವಿಘಟನೆಯಾಗುವುದನ್ನು ತಡೆಗಟ್ಟಲು.",
          "ಸಿಒಎಂಟಿ ಇನ್ಹಿಬಿಟರ್ಸ್ (Entacapone): ಲೆವೊಡೋಪಾ ಪರಿಣಾಮವನ್ನು ದೀರ್ಘಕಾಲದವರೆಗೆ ವಿಸ್ತರಿಸಲು."
        ],
        surgery: [
          "ಡೀಪ್ ಬ್ರೈನ್ ಸ್ಟಿಮ್ಯುಲೇಶನ್ (DBS): ಮೆದುಳಿನಲ್ಲಿ ವಿದ್ಯುತ್ ತಂತಿಗಳನ್ನು ಅಳವಡಿಸಿ ನಡುಕವನ್ನು ನಿಯಂತ್ರಿಸುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಫೋಕಸ್ಡ್ ಅಲ್ಟ್ರಾಸೌಂಡ್ (MRgFUS): ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಲ್ಲದೆ ನಡುಕ ಉಂಟುಮಾಡುವ ಭಾಗವನ್ನು ರೇಡಿಯೇಷನ್ ಮುಖಾಂತರ ಸರಿಪಡಿಸುವುದು.",
          "ಡ್ಯುಯೊಡೋಪಾ ಜೆಲ್ ಇನ್ಫ್ಯೂಷನ್: ಕರುಳಿಗೆ ನೇರವಾಗಿ ಪಂಪ್ ಮೂಲಕ ಔಷಧಿಯನ್ನು ನಿರಂತರವಾಗಿ ಪೂರೈಸುವುದು."
        ],
        monitoring: [
          "ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ನರರೋಗ ತಜ್ಞರಿಂದ ಯುಪಿಡಿಆರ್‌ಎಸ್ (UPDRS) ಚಲನಾ ಪರೀಕ್ಷೆ.",
          "ಎಲ್‌ಎಸ್‌ವಿಟಿ ಬಿಗ್ (LSVT BIG) ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳುವ ದೈಹಿಕ ವ್ಯಾಯಾಮ.",
          "ಧ್ವನಿ ಮತ್ತು ನುಂಗುವಿಕೆಯ ತಪಾಸಣೆ (LSVT LOUD) - ಆಹಾರ ಶ್ವಾಸಕೋಶಕ್ಕೆ ಹೋಗದಂತೆ ತಡೆಯಲು."
        ]
      },
      alzheimer: {
        title: "ಅಲ್ಝೈಮರ್ಸ್ ಮತ್ತು ಬುದ್ಧಿಮಾಂದ್ಯತೆ ತಪಾಸಣೆ",
        modality: "ಮೆದುಳಿನ ಎಂಆರ್‌ಐ (ನರಕ್ಷೀಣತೆ ಸ್ಕ್ಯಾನ್)",
        badge: "ಬುದ್ಧಿಮಾಂದ್ಯತೆ MRI",
        desc: "ಮೆದುಳಿನ ಹಿಪೊಕ್ಯಾಂಪಸ್ ಕುಗ್ಗುವಿಕೆ ಮತ್ತು 4 ಹಂತಗಳ ಅಲ್ಝೈಮರ್ಸ್ ಬುದ್ಧಿಮಾಂದ್ಯತೆ ವಿಶ್ಲೇಷಣೆ.",
        samplePrompt: "ಬುದ್ಧಿಮಾಂದ್ಯತೆ ಪರೀಕ್ಷೆಗೆ ಮೆದುಳಿನ ಅಕ್ಷೀಯ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಸೌಮ್ಯ ಬುದ್ಧಿಮಾಂದ್ಯತೆ", "ಮಧ್ಯಮ ಬುದ್ಧಿಮಾಂದ್ಯತೆ", "ಸಾಮಾನ್ಯ ಮೆದುಳು", "ಅತ್ಯಂತ ಸೌಮ್ಯ ಬುದ್ಧಿಮಾಂದ್ಯತೆ"],
        explanation: "ಅಲ್ಝೈಮರ್ಸ್ ಕಾಯಿಲೆಯು ಜ್ಞಾಪಕ ಶಕ್ತಿ, ಆಲೋಚನಾ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ದೈನಂದಿನ ನಡವಳಿಕೆಯನ್ನು ನಾಶಪಡಿಸುವ ಸಾಮಾನ್ಯ ಬುದ್ಧಿಮಾಂದ್ಯತೆ ರೋಗವಾಗಿದೆ (೬೦-೭೦% ಪ್ರಕರಣಗಳು). ಮೆದುಳಿನ ಕೋಶಗಳಲ್ಲಿ ಅಮಿಲಾಯ್ಡ್ ಪ್ಲೇಕ್‌ಗಳು ಮತ್ತು ಟೌ ಪ್ರೋಟೀನ್‌ಗಳ ಅಸಹಜ ಶೇಖರಣೆಯಿಂದ ನರಕೋಶಗಳು ನಶಿಸಿ, ಹಿಪೊಕ್ಯಾಂಪಸ್ ಮತ್ತು ಸೆರೆಬ್ರಲ್ ಕಾರ್ಟೆಕ್ಸ್ ಭಾಗಗಳು ತೀವ್ರವಾಗಿ ಕುಗ್ಗುತ್ತವೆ.",
        symptoms: [
          "ಇತ್ತೀಚಿನ ಘಟನೆಗಳು, ಹೆಸರುಗಳು ಮತ್ತು ಸಂಭಾಷಣೆಗಳನ್ನು ಮರೆತುಹೋಗುವುದು",
          "ಪರಿಚಿತ ದಾರಿಗಳು ಮತ್ತು ಸ್ಥಳಗಳಲ್ಲಿ ದಾರಿ ತಪ್ಪುವುದು (Wandering)",
          "ಸರಿಯಾದ ಪದಗಳನ್ನು ಹುಡುಕಲು ಕಷ್ಟಪಡುವುದು ಮತ್ತು ಮಾತನಾಡುವಾಗ ನಿಲ್ಲುವುದು",
          "ಮನಸ್ಥಿತಿ ಬದಲಾವಣೆ, ಆತಂಕ, ಭ್ರಮೆ ಮತ್ತು ದಿನಚರಿಗಳಲ್ಲಿ ಗೊಂದಲ"
        ],
        meds: [
          "ಕೊಲಿನೆಸ್ಟರೇಸ್ ಇನ್ಹಿಬಿಟರ್ಸ್ (Donepezil 5-10 mg, Rivastigmine): ಅಸಿಟೈಲ್‌ಕೋಲಿನ್ ಹೆಚ್ಚಿಸಿ ಜ್ಞಾಪಕ ಶಕ್ತಿ ಕುಸಿತವನ್ನು ನಿಧಾನಗೊಳಿಸಲು.",
          "ಮೆಮಂಟೈನ್ (Memantine 10-20 mg): ಮೆದುಳಿನಲ್ಲಿ ಗ್ಲುಟಮೇಟ್ ವಿಷತ್ವವನ್ನು ತಡೆಯಲು ಮಧ್ಯಮ-ತೀವ್ರ ಹಂತದಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.",
          "ಆಂಟಿ-ಅಮಿಲಾಯ್ಡ್ ಮೊನೊಕ್ಲೋನಲ್ ಆಂಟಿಬಾಡಿಗಳು (Lecanemab / Leqembi): ಮೆದುಳಿನಲ್ಲಿರುವ ಅಮಿಲಾಯ್ಡ್ ಪ್ರೋಟೀನ್ ಪ್ಲೇಕ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಲು.",
          "ಖಿನ್ನತೆ ನಿವಾರಕ ಔಷಧಿಗಳು: ವರ್ತನೆಯ ತೊಂದರೆಗಳು ಮತ್ತು ಆತಂಕವನ್ನು ನಿಯಂತ್ರಿಸಲು."
        ],
        surgery: [
          "ವಿಪಿ ಷಂಟ್ (Ventriculoperitoneal Shunting) ಮೌಲ್ಯಮಾಪನ: ಸಾಮಾನ್ಯ ಒತ್ತಡದ ಜಲಶಿರೋಗ (NPH) ಕಂಡುಬಂದರೆ.",
          "ರಕ್ತ-ಮೆದುಳಿನ ತಡೆಗೋಡೆ ತೆರೆಯುವ ಅಲ್ಟ್ರಾಸೌಂಡ್ ತಂತ್ರಜ್ಞಾನ (ಸಂಶೋಧನಾ ಹಂತದಲ್ಲಿದೆ).",
          "ಅಂತಿಮ ಹಂತದಲ್ಲಿ ಪೌಷ್ಟಿಕಾಂಶ ನೀಡಲು ಎಂಡೋಸ್ಕೋಪಿಕ್ ಗ್ಯಾಸ್ಟ್ರೋಸ್ಟಮಿ (PEG Tube)."
        ],
        monitoring: [
          "ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಎಂಎಂಎಸ್‌ಇ (MMSE) ಮತ್ತು ಮೊಕಾ (MoCA) ಕಾಗ್ನಿಟಿವ್ ಪರೀಕ್ಷೆಗಳು.",
          "ಮೆದುಳಿನ ಹಿಪೊಕ್ಯಾಂಪಸ್ ಪರಿಮಾಣದ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನಿಂಗ್ ನಿಯಮಿತವಾಗಿ ಮಾಡಿಸುವುದು.",
          "ಬುದ್ಧಿಮತ್ತೆ ಪ್ರಚೋದಕ ಆಟಗಳು, ದೈಹಿಕ ನಡಿಗೆ ಮತ್ತು ಮೆಡಿಟರೇನಿಯನ್-ಮೈಂಡ್ ಆಹಾರ ಶೈಲಿ."
        ]
      },
      stroke: {
        title: "ಮೆದುಳಿನ ಪಾರ್ಶ್ವವಾಯು (ಸ್ಟ್ರೋಕ್) ಪರೀಕ್ಷೆ",
        modality: "ಮೆದುಳಿನ ಸಿಟಿ / ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್",
        badge: "ಸ್ಟ್ರೋಕ್ ಸ್ಕ್ಯಾನ್",
        desc: "ತೀವ್ರ ಇಸ್ಕೆಮಿಕ್ ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ ಅಥವಾ ಹೆಮರಾಜಿಕ್ ರಕ್ತಸ್ರಾವದ ತುರ್ತು ಪತ್ತೆ.",
        samplePrompt: "ಮೆದುಳಿನ ಸಿಟಿ ಅಥವಾ ಡಿಫ್ಯೂಷನ್ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        classes: ["ಪಾರ್ಶ್ವವಾಯು ರಕ್ತನಾಳ ಹಾನಿ ಪತ್ತೆ", "ಸಾಮಾನ್ಯ ಮೆದುಳಿನ ಸಿಟಿ ಸ್ಕ್ಯಾನ್"],
        explanation: "ಮೆದುಳಿನ ಪಾರ್ಶ್ವವಾಯು (Stroke) ಒಂದು ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿಯಾಗಿದೆ. ಇದು ರಕ್ತನಾಳದಲ್ಲಿ ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ ಉಂಟಾಗಿ ರಕ್ತಪರಿಚಲನೆ ಸ್ಥಗಿತಗೊಂಡಾಗ (ಇಸ್ಕೆಮಿಕ್ ಸ್ಟ್ರೋಕ್ ~೮೭%) ಅಥವಾ ರಕ್ತನಾಳ ಒಡೆದು ರಕ್ತಸ್ರಾವವಾದಾಗ (ಹೆಮರಾಜಿಕ್ ಸ್ಟ್ರೋಕ್ ~೧೩%) ಸಂಭವಿಸುತ್ತದೆ. ಆಮ್ಲಜನಕ ಸಿಗದೆ ಪ್ರತಿ ನಿಮಿಷಕ್ಕೆ ಲಕ್ಷಾಂತರ ಮೆದುಳಿನ ನರಕೋಶಗಳು ನಾಶವಾಗುತ್ತವೆ (Time is Brain).",
        symptoms: [
          "ಮುಖದ ಒಂದು ಬದಿಯು ವಕ್ರವಾಗುವುದು ಅಥವಾ ಜೋತುಬೀಳುವುದು (Face drooping)",
          "ಒಂದು ಕೈ ಅಥವಾ ಕಾಲಿನಲ್ಲಿ ಹಠಾತ್ ದೌರ್ಬಲ್ಯ ಅಥವಾ ಬಲಹೀನತೆ (Arm weakness)",
          "ಮಾತು ತೊದಲಾಗುವುದು ಅಥವಾ ಮಾತನಾಡಲು ಬಾರದಿರುವುದು (Slurred speech)",
          "ಹಠಾತ್ ತೀವ್ರ ತಲೆನೋವು, ತಲೆತಿರುಗುವಿಕೆ ಮತ್ತು ಸಮತೋಲನ ತಪ್ಪುವುದು"
        ],
        meds: [
          "ಕ್ಲಾಟ್-ಕರಗಿಸುವ ಚಿಕಿತ್ಸೆ: ರೋಗಲಕ್ಷಣಗಳು ಆರಂಭವಾದ ೪.೫ ಗಂಟೆಗಳ ಒಳಗೆ IV ಆಲ್ಟೆಪ್ಲೇಸ್ (rtPA) ಅಥವಾ ಟೆನೆಕ್ಟೆಪ್ಲೇಸ್ ನೀಡಬೇಕು.",
          "ಆಂಟಿಪ್ಲೇಟ್‌ಲೆಟ್ ಥೆರಪಿ: ಆಸ್ಪಿರಿನ್ ಮತ್ತು ಕ್ಲೋಪಿಡೋಗ್ರೆಲ್ ಸಂಯೋಜನೆ (DAPT) ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವುದನ್ನು ತಡೆಯಲು.",
          "ಹೈ-ಇಂಟೆನ್ಸಿಟಿ ಸ್ಟ್ಯಾಟಿನ್: ಅಟೋರ್ವಾಸ್ಟಾಟಿನ್ (80 mg) ರಕ್ತನಾಳಗಳಲ್ಲಿ ಪ್ಲೇಕ್ ಸ್ಥಿರಗೊಳಿಸಲು.",
          "ರಕ್ತದೊತ್ತಡ ನಿಯಂತ್ರಣ: ಇಂಜೆಕ್ಷನ್ ಲ್ಯಾಬೆಟಾಲಾಲ್ ಮೂಲಕ ರಕ್ತದೊತ್ತಡವನ್ನು ತುರ್ತಾಗಿ ಸುರಕ್ಷಿತ ಮಟ್ಟದಲ್ಲಿಡುವುದು."
        ],
        surgery: [
          "ಮೆಕ್ಯಾನಿಕಲ್ ಥ್ರಂಬೆಕ್ಟಮಿ (EVT): ಕ್ಯಾತಿಟರ್ ಮೂಲಕ ಮೆದುಳಿನ ದೊಡ್ಡ ರಕ್ತನಾಳದಲ್ಲಿ ಸಿಲುಕಿರುವ ಹೆಪ್ಪುಗಟ್ಟಿದ ರಕ್ತವನ್ನು ಹೊರತೆಗೆಯುವುದು (೨೪ ಗಂಟೆಗಳ ಒಳಗೆ).",
          "ಡಿಕಂಪ್ರೆಸಿವ್ ಹೆಮಿಕ್ರೇನಿಯಕ್ಟಮಿ: ಮೆದುಳಿನ ತೀವ್ರ ಊತದಿಂದ ಪ್ರಾಣಾಪಾಯ ಉಂಟಾದಾಗ ತಲೆಬುರುಡೆಯ ಮೂಳೆಯನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ತೆರೆಯುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಹೆಮಟೋಮಾ ತೆರವುಗೊಳಿಸುವಿಕೆ: ರಕ್ತಸ್ರಾವದ ದೊಡ್ಡ ಗಡ್ಡೆಯನ್ನು ಹೊರತೆಗೆದು ಮೆದುಳಿನ ಮೇಲಿನ ಒತ್ತಡ ಕಡಿಮೆ ಮಾಡುವುದು."
        ],
        monitoring: [
          "ಕನಿಷ್ಠ 72 ಗಂಟೆಗಳ ಕಾಲ ಸ್ಟ್ರೋಕ್ ಐಸಿಯುನಲ್ಲಿ ನಿರಂತರ ಇಸಿಜಿ ಮತ್ತು ಹೃದಯ ಬಡಿತದ ಟೆಲಿಮೆಟ್ರಿ.",
          "ಕತ್ತಿನ ಕ್ಯಾರೊಟಿಡ್ ರಕ್ತನಾಳಗಳ ಡಾಪ್ಲರ್ ಸ್ಕ್ಯಾನ್ (Carotid Doppler) ಮತ್ತು ಸಿಟಿ ಆಂಜಿಯೋಗ್ರಫಿ.",
          "೨೪-೪೮ ಗಂಟೆಗಳಲ್ಲಿ ಆರಂಭಿಕ ಫಿಸಿಯೋಥೆರಪಿ, ಸ್ಪೀಚ್ ಥೆರಪಿ ಮತ್ತು ನುಂಗುವಿಕೆಯ ಪುನಶ್ಚೇತನ."
        ]
      },
      tb: {
        title: "ಕ್ಷಯರೋಗ ಪತ್ತೆ (ಟಿಬಿ - TB)",
        modality: "ಎದೆಯ ಕ್ಷ-ಕಿರಣ (Chest X-Ray PA View)",
        badge: "ಟಿಬಿ ಎಕ್ಸ್-ರೇ",
        desc: "ಮೈಕೋಬ್ಯಾಕ್ಟೀರಿಯಂ ಟ್ಯೂಬರ್‌ಕ್ಯುಲೋಸಿಸ್ ಸೋಂಕು ಮತ್ತು ಶ್ವಾಸಕೋಶದ ಗಾಯಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಎದೆಯ ಕ್ಷ-ಕಿರಣ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಎದೆಯ ಕ್ಷ-ಕಿರಣ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಸಕ್ರಿಯ ಶ್ವಾಸಕೋಶದ ಟಿಬಿ (Active TB)", "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯಕರ ಶ್ವಾಸಕೋಶ"],
        explanation: "ಶ್ವಾಸಕೋಶದ ಕ್ಷಯರೋಗ (ಟಿಬಿ) ಮೈಕೋಬ್ಯಾಕ್ಟೀರಿಯಂ ಟ್ಯೂಬರ್‌ಕ್ಯುಲೋಸಿಸ್‌ನಿಂದ ಉಂಟಾಗುವ ಗಾಳಿಯ ಮೂಲಕ ಹರಡುವ ಸಾಂಕ್ರಾಮಿಕ ರೋಗವಾಗಿದೆ. ಬ್ಯಾಸಿಲ್ಲಿ ಶ್ವಾಸಕೋಶವನ್ನು ತಲುಪಿ ಗ್ರ್ಯಾನುಲೋಮಾಗಳು ಮತ್ತು ಗಾಯಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.",
        symptoms: [
          "2-3 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ನಿರಂತರ ಕೆಮ್ಮು",
          "ಕಫದಲ್ಲಿ ರಕ್ತ ಅಥವಾ ರಕ್ತ ಮಿಶ್ರಿತ ಕೆಮ್ಮು (ಹಿಮೋಪ್ಟಿಸಿಸ್)",
          "ರಾತ್ರಿಯಲ್ಲಿ ಅತಿಯಾದ ಬೆವರು, ಸಂಜೆ ಜ್ವರ ಮತ್ತು ಚಳಿ",
          "ವಿವರಿಸಲಾಗದ ಗಣನೀಯ ತೂಕ ನಷ್ಟ ಮತ್ತು ತೀವ್ರ ಸುಸ್ತು"
        ],
        meds: [
          "ಮೊದಲ ಹಂತ (2 ತಿಂಗಳು): ರಿಫಾಂಪಿಸಿನ್, ಐಸೋನಿಯಾಜಿಡ್, ಪೈರಜಿನಾಮೈಡ್ ಮತ್ತು ಎಥಾಂಬ್ಯುಟಾಲ್ ದೈನಂದಿನ ಡೋಸ್.",
          "ಮುಂದುವರಿಕೆ ಹಂತ (4 ತಿಂಗಳು): ರಿಫಾಂಪಿಸಿನ್ ಮತ್ತು ಐಸೋನಿಯಾಜಿಡ್ ನಿಯಮಿತ 6 ತಿಂಗಳ DOTS ಕೋರ್ಸ್.",
          "ಎಂಡಿಆರ್-ಟಿಬಿ (MDR-TB): ಬೆಡಾಕ್ವಿಲಿನ್, ಲಿನೆಜೋಲಿಡ್ ಮತ್ತು ಲೆವೊಫ್ಲೋಕ್ಸಾಸಿನ್ ವಿಶೇಷ ಚಿಕಿತ್ಸೆ.",
          "ಸಹಾಯಕ ಸ್ಟೀರಾಯ್ಡ್ ಚಿಕಿತ್ಸೆ: ಪೆರಿಕಾರ್ಡಿಟಿಸ್ ಅಥವಾ ಮೆನಿಂಜೈಟಿಸ್‌ಗಾಗಿ ಡೆಕ್ಸಾಮೆಥಾಸೋನ್."
        ],
        surgery: [
          "ಪ್ಲುರಲ್ ಡಿಕೋರ್ಟಿಕೇಶನ್: ದೀರ್ಘಕಾಲದ ಕೀವು ತುಂಬಿದ ಶ್ವಾಸಕೋಶಕ್ಕೆ ಥೋರಾಕೋಸ್ಕೋಪಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಬ್ರಾಂಕೋಸ್ಕೋಪಿ ಮತ್ತು ಬಯಾಪ್ಸಿ: ನಿಖರವಾದ ಜೀನ್ ಎಕ್ಸ್‌ಪರ್ಟ್ (GeneXpert MTB/RIF) ದೃಢೀಕರಣಕ್ಕಾಗಿ.",
          "ಲೋಬೆಕ್ಟಮಿ: ತೀವ್ರ ಹಾನಿಗೊಳಗಾದ ಶ್ವಾಸಕೋಶದ ಭಾಗವನ್ನು ತೆಗೆದುಹಾಕುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ ತಿಂಗಳು ಕಫದ ಎಎಫ್‌ಬಿ (AFB) ಪರೀಕ್ಷೆ ಮತ್ತು ಕಲ್ಚರ್.",
          "ಯಕೃತ್ತಿನ ಕ್ರಿಯೆಯ ಪರೀಕ್ಷೆಗಳು (LFT) ಪ್ರತಿ 2-4 ವಾರಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ಗಾಳಿಯ ಮೂಲಕ ಸೋಂಕು ಹರಡದಂತೆ ನೆಗೆಟಿವ್ ಪ್ರೆಶರ್ ಐಸೋಲೇಷನ್ ಮತ್ತು N95 ಮಾಸ್ಕ್."
        ]
      },
      pancreatic_cancer: {
        title: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ ಕ್ಯಾನ್ಸರ್ ಹಂತ (Pancreatic Cancer)",
        modality: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Abdominal CT)",
        badge: "ಹೊಟ್ಟೆಯ ಸಿಟಿ",
        desc: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ಗೆಡ್ಡೆಗಳು ಮತ್ತು ರಕ್ತನಾಳಗಳ ಹಾನಿಯನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಆಕ್ಸಿಯಲ್ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಹಂತ I", "ಹಂತ II", "ಹಂತ III", "ಹಂತ IV", "ಸಾಮಾನ್ಯ ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ"],
        explanation: "ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಡಕ್ಟಲ್ ಅಡಿನೊಕಾರ್ಸಿನೋಮ (PDAC) ಅತ್ಯಂತ ಗಂಭೀರ ರೂಪದ ಕ್ಯಾನ್ಸರ್ ಆಗಿದೆ. ಇದು ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ನಾಳಗಳಿಂದ ಆರಂಭವಾಗಿ ಸುತ್ತಮುತ್ತಲಿನ ರಕ್ತನಾಳಗಳಿಗೆ ಶೀಘ್ರವಾಗಿ ಹರಡುತ್ತದೆ.",
        symptoms: [
          "ನೋವಿಲ್ಲದ ಕಾಮಾಲೆ (Jaundice), ತುರಿಕೆ ಮತ್ತು ಗಾಢ ಬಣ್ಣದ ಮೂತ್ರ",
          "ಹೊಟ್ಟೆಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೋವು, ಬೆನ್ನಿನ ಹಿಂಭಾಗಕ್ಕೆ ಹರಡುವುದು",
          "ವಿವರಿಸಲಾಗದ ಗಣನೀಯ ತೂಕ ನಷ್ಟ ಮತ್ತು ಹಸಿವಿನ ಕೊರತೆ",
          "ಹಠಾತ್ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಹೊಸ ಮಧುಮೇಹ ಲಕ್ಷಣಗಳು"
        ],
        meds: [
          "FOLFIRINOX ಕಿಮೊಥೆರಪಿ: ಆಕ್ಸಾಲಿಪ್ಲಾಟಿನ್, ಇರಿನೊಟೆಕನ್, ಲ್ಯುಕೋವೊರಿನ್ ಮತ್ತು ಫ್ಲೋರೋಯುರಾಸಿಲ್.",
          "ಜೆಮ್ಸಿಟಾಬೈನ್ + ನ್ಯಾಬ್-ಪ್ಯಾಕ್ಲಿಟಾಕ್ಸೆಲ್: ಮುಂದುವರಿದ ಹಂತದ ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಕ್ಯಾನ್ಸರ್‌ಗೆ ಸಂಯೋಜಿತ ಚಿಕಿತ್ಸೆ.",
          "ಟಾರ್ಗೆಟೆಡ್ PARP ಇನ್ಹಿಬಿಟರ್: BRCA ರೂಪಾಂತರ ಹೊಂದಿರುವ ರೋಗಿಗಳಿಗೆ ಒಲಾಪರಿಬ್ (Olaparib 300 mg).",
          "ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಕಿಣ್ವ ಬದಲಿ ಚಿಕಿತ್ಸೆ (PERT): ಜೀರ್ಣಕ್ರಿಯೆ ಸುಧಾರಿಸಲು ಕ್ರಿಯಾನ್ (Creon) ಮಾತ್ರೆಗಳು."
        ],
        surgery: [
          "ವಿಪ್ಪಲ್ ವಿಧಾನ (Whipple Procedure): ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ತಲೆಭಾಗ, ಡ್ಯುಯೊಡಿನಮ್ ಮತ್ತು ಪಿತ್ತಕೋಶವನ್ನು ತೆಗೆಯುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಡಿಸ್ಟಲ್ ಪ್ಯಾಂಕ್ರಿಯಾಟೆಕ್ಟಮಿ: ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ಬಾಲ ಮತ್ತು ಗುಲ್ಮವನ್ನು ತೆಗೆಯುವುದು.",
          "ಪಿತ್ತನಾಳ ಸ್ಟೆಂಟ್ (Biliary Stenting): ಕಾಮಾಲೆ ನಿವಾರಿಸಲು ಎಂಡೋಸ್ಕೋಪಿಕ್ ಲೋಹದ ಸ್ಟೆಂಟ್ ಅಳವಡಿಕೆ."
        ],
        monitoring: [
          "ರಕ್ತದ CA 19-9 ಟ್ಯೂಮರ್ ಮಾರ್ಕರ್ ಪ್ರತಿ 2-3 ತಿಂಗಳಿಗೊಮ್ಮೆ ತಪಾಸಣೆ.",
          "ಮಲ್ಟಿಫೇಸ್ ಸಿಟಿ ಅಥವಾ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ ಮೂಲಕ ಪ್ರತಿ 8-12 ವಾರಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ತೀವ್ರ ನೋವು ನಿವಾರಣೆಗಾಗಿ ಸಿಲಿಯಾಕ್ ಪ್ಲೆಕ್ಸಸ್ ಬ್ಲಾಕ್ ಚಿಕಿತ್ಸೆ."
        ]
      },
      lung_cancer: {
        title: "ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್ ಪತ್ತೆ (Lung Cancer)",
        modality: "ಎದೆಯ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Chest CT)",
        badge: "ಎದೆಯ ಸಿಟಿ",
        desc: "ಶ್ವಾಸಕೋಶದ ಗಂಟುಗಳು ಮತ್ತು ಮಾರಕ ಗಡ್ಡೆಗಳನ್ನು ಗುರುತಿಸುವ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಆಕ್ಸಿಯಲ್ ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಮಾರಕ ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್", "ಸಾಮಾನ್ಯ ಶ್ವಾಸಕೋಶದ ಸಿಟಿ"],
        explanation: "ಪ್ರಾಥಮಿಕ ಶ್ವಾಸಕೋಶದ ಕಾರ್ಸಿನೋಮ (ನಾನ್-ಸ್ಮಾಲ್ ಸೆಲ್ ಮತ್ತು ಸ್ಮಾಲ್ ಸೆಲ್ ಲಂಗ್ ಕ್ಯಾನ್ಸರ್) ಶ್ವಾಸಕೋಶದ ಜೀವಕೋಶಗಳಲ್ಲಿ ಅನಿಯಂತ್ರಿತ ಕೋಶ ವಿಭಜನೆಯಿಂದ ಉಂಟಾಗುತ್ತದೆ ಮತ್ತು ಮೆಡಿಯಾಸ್ಟೈನಲ್ ದುಗ್ಧರಸ ಗ್ರಂಥಿಗಳಿಗೆ ಹರಡುತ್ತದೆ.",
        symptoms: [
          "ನಿರಂತರ ಹೆಚ್ಚಾಗುವ ಕೆಮ್ಮು ಅಥವಾ ಧೂಮಪಾನಿಗಳಲ್ಲಿ ಕೆಮ್ಮಿನ ಬದಲಾವಣೆ",
          "ಕಫದಲ್ಲಿ ರಕ್ತ ಬೀಳುವುದು (ಹಿಮೋಪ್ಟಿಸಿಸ್) ಮತ್ತು ಎದೆ ನೋವು",
          "ಉಸಿರಾಟದ ತೊಂದರೆ, ಉಬ್ಬಸ ಮತ್ತು ಉಸಿರುಕಟ್ಟುವಿಕೆ",
          "ಧ್ವನಿಯಲ್ಲಿ ಗಡಸುತನ ಅಥವಾ ಮುಖ/ಕುತ್ತಿಗೆಯಲ್ಲಿ ಊತ (SVC ಸಿಂಡ್ರೋಮ್)"
        ],
        meds: [
          "ಟಾರ್ಗೆಟೆಡ್ ಥೆರಪಿ: EGFR ರೂಪಾಂತರಕ್ಕೆ ಒಸಿಮೆರ್ಟಿನಿಬ್ (Osimertinib 80 mg) ಮತ್ತು ALK ಗಾಗಿ ಅಲೆಕ್ಟಿನಿಬ್.",
          "ಇಮ್ಯುನೊಥೆರಪಿ: ಪೆಂಬ್ರೊಲಿಜುಮಾಬ್ (Keytruda 200 mg) ಚೆಕ್‌ಪಾಯಿಂಟ್ ಇನ್ಹಿಬಿಟರ್ ಚಿಕಿತ್ಸೆ.",
          "ಪ್ಲಾಟಿನಂ ಕಿಮೊಥೆರಪಿ: ಸಿಸ್ಪ್ಲಾಟಿನ್ ಅಥವಾ ಕಾರ್ಬೊಪ್ಲಾಟಿನ್ ಜೊತೆಗೆ ಪೆಮೆಟ್ರೆಕ್ಸೆಡ್ / ಪ್ಯಾಕ್ಲಿಟಾಕ್ಸೆಲ್.",
          "ಆಂಟಿ-ಆಂಜಿಯೋಜೆನಿಕ್ ಆಂಟಿಬಾಡಿ: ಬೆವಾಸಿಸುಮಾಬ್ (Avastin) ರಕ್ತನಾಳಗಳ ಬೆಳವಣಿಗೆಯನ್ನು ತಡೆಯಲು."
        ],
        surgery: [
          "ವಿಡಿಯೋ-ಸಹಾಯಿತ ಲೋಬೆಕ್ಟಮಿ (VATS Lobectomy): ಶ್ವಾಸಕೋಶದ ಹಾನಿಗೊಳಗಾದ ಭಾಗವನ್ನು ಕನಿಷ್ಠ ಗಾಯದೊಂದಿಗೆ ತೆಗೆಯುವುದು.",
          "ಸ್ಟೀರಿಯೊಟ್ಯಾಕ್ಟಿಕ್ ರೇಡಿಯೊಥೆರಪಿ (SBRT / SABR): ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ ನಿಖರವಾದ ವಿಕಿರಣ ಚಿಕಿತ್ಸೆ.",
          "ಎಂಡೋಬ್ರಾಂಕಿಯಲ್ ಸ್ಟೆಂಟ್: ಶ್ವಾಸನಾಳವನ್ನು ಮುಕ್ತವಾಗಿಡಲು ಇಂಟರ್ವೆನ್ಷನಲ್ ಬ್ರಾಂಕೋಸ್ಕೋಪಿಕ್ ಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಚಿಕಿತ್ಸೆಯ ನಂತರ ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ಸಂಪೂರ್ಣ ಧೂಮಪಾನ ತ್ಯಾಗ ಕಾರ್ಯಕ್ರಮ.",
          "ಶ್ವಾಸಕೋಶದ ಕಾರ್ಯಕ್ಷಮತೆ ಸುಧಾರಿಸಲು ಪಲ್ಮನರಿ ರಿಹ್ಯಾಬಿಲಿಟೇಶನ್ ಮತ್ತು ಸ್ಪೈರೋಮೆಟ್ರಿ ತಪಾಸಣೆ."
        ]
      },
      liver_tumor: {
        title: "ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ ಪತ್ತೆ (Liver Tumor / LiTS)",
        modality: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್-ವರ್ಧಿತ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Liver CT)",
        badge: "ಯಕೃತ್ತಿನ ಸಿಟಿ",
        desc: "ಹೆಪಾಟೊಸೆಲ್ಯುಲರ್ ಕಾರ್ಸಿನೋಮ (HCC) ಮತ್ತು ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವ SegFormer AI ಆಧಾರಿತ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ (Liver Tumor)", "ಸಾಮಾನ್ಯ ಯಕೃತ್ತಿನ ಅಂಗಾಂಶ"],
        explanation: "ಹೆಪಾಟೊಸೆಲ್ಯುಲರ್ ಕಾರ್ಸಿನೋಮ (HCC) ಸಿರೋಸಿಸ್ ಅಥವಾ ಹೆಪಟೈಟಿಸ್ ಬಿ/ಸಿ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಉದ್ಭವಿಸುವ ಯಕೃತ್ತಿನ ಪ್ರಾಥಮಿಕ ಕ್ಯಾನ್ಸರ್ ಆಗಿದೆ. ಅಪಧಮನಿಯ ಹಂತದಲ್ಲಿ ಹೈಪರ್-ವರ್ಧನೆ ಮತ್ತು ಸಿರೆಯ ಹಂತದಲ್ಲಿ ಕ್ಷಿಪ್ರ ವಾಶ್‌ಔಟ್ ಇದರ ವಿಶಿಷ್ಟ ಲಕ್ಷಣಗಳಾಗಿವೆ.",
        symptoms: [
          "ಹೊಟ್ಟೆಯ ಬಲ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೋವು, ಭಾರ ಅಥವಾ ಮುಟ್ಟಿದರೆ ಊತ",
          "ದೀರ್ಘಕಾಲದ ಯಕೃತ್ತಿನ ಕಾಯಿಲೆಯಲ್ಲಿ ಕಾಮಾಲೆ ಅಥವಾ ಹೊಟ್ಟೆಯಲ್ಲಿ ನೀರು (Ascites) ಹಠಾತ್ ಉಲ್ಬಣಿಸುವುದು",
          "ಯಕೃತ್ತಿನ ಎನ್ಸೆಫಲೋಪತಿ, ಆಯಾಸ ಮತ್ತು ಸ್ಪೈಡರ್ ಆಂಜಿಯೋಮಾ",
          "ಹಸಿವಿಲ್ಲದಿರುವುದು ಮತ್ತು ವಿವರಿಸಲಾಗದ ತೂಕ ನಷ್ಟ"
        ],
        meds: [
          "ಮೊದಲ ಸಾಲಿನ ಇಮ್ಯುನೊಥೆರಪಿ: ಅಟೆಜೊಲಿಜುಮಾಬ್ (1200 mg) + ಬೆವಾಸಿಸುಮಾಬ್ (15 mg/kg) IV (IMbrave150 ಪ್ರೋಟೋಕಾಲ್).",
          "ಚೆಕ್‌ಪಾಯಿಂಟ್ ಇನ್ಹಿಬಿಟರ್‌ಗಳು: ಡರ್ವಾಲುಮಾಬ್ ಜೊತೆಗೆ ಟ್ರೆಮೆಲಿಮುಮಾಬ್ ಸಂಯೋಜನೆ.",
          "ಟೈರೋಸಿನ್ ಕೈನೇಸ್ ಇನ್ಹಿಬಿಟರ್: ಸೊರಾಫೆನಿಬ್ (400 mg) ಅಥವಾ ಲೆನ್ವಾಟಿನಿಬ್ (8-12 mg) ಮಾತ್ರೆಗಳು.",
          "ಆಂಟಿವೈರಲ್ ಚಿಕಿತ್ಸೆ: ಹೆಪಟೈಟಿಸ್ ಬಿ ನಿಯಂತ್ರಣಕ್ಕೆ ಎಂಟೆಕಾವಿರ್ ಅಥವಾ ಟೆನೊಫೊವಿರ್."
        ],
        surgery: [
          "ಯಕೃತ್ತಿನ ಕಸಿ (Orthotopic Liver Transplant): ಮಿಲನ್ ಮಾನದಂಡಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಂಪೂರ್ಣ ಯಕೃತ್ತು ಕಸಿ.",
          "ಭಾಗಶಃ ಹೆಪಾಟೆಕ್ಟಮಿ: ಯಕೃತ್ತಿನ ಹಾನಿಗೊಳಗಾದ ಭಾಗವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆಯುವುದು.",
          "ಕೀಮೊಎಂಬೋಲೈಸೇಶನ್ (TACE): ಕ್ಯಾತಿಟರ್ ಮೂಲಕ ರಕ್ತನಾಳ ಮುಚ್ಚಿ ಗೆಡ್ಡೆಗೆ ನೇರ ಕಿಮೊ ನೀಡುವ ವಿಧಾನ.",
          "ರೇಡಿಯೋಫ್ರೀಕ್ವೆನ್ಸಿ ಅಬ್ಲೇಶನ್ (RFA / MWA): ಶಾಖದ ಮೂಲಕ ಗೆಡ್ಡೆಯನ್ನು ನಾಶಪಡಿಸುವ ಸೂಕ್ಷ್ಮ ಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಸೀರಮ್ ಆಲ್ಫಾ-ಫೆಟೊಪ್ರೋಟೀನ್ (AFP) ರಕ್ತ ಪರೀಕ್ಷೆ.",
          "ಡೈನಾಮಿಕ್ ಲಿವರ್ ಎಂಆರ್ಐ ಅಥವಾ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ನಿಯಮಿತ ಪರಿಶೀಲನೆ (LI-RADS ಮಾನದಂಡ).",
          "ಮದ್ಯಪಾನ ಸಂಪೂರ್ಣ ವರ್ಜ್ಯ ಮತ್ತು ಯಕೃತ್ತಿಗೆ ಹಾನಿಕಾರಕ ಔಷಧಿಗಳ ನಿಷೇಧ."
        ]
      },
      bone_tumor: {
        title: "ಮೂಳೆ ಗೆಡ್ಡೆ ಮತ್ತು ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ (Bone Tumor)",
        modality: "ಆರ್ಥೋಪೆಡಿಕ್ ಎಕ್ಸ್-ರೇ (Orthopedic Bone X-Ray)",
        badge: "ಮೂಳೆ ಎಕ್ಸ್-ರೇ",
        desc: "ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ, ಮೂಳೆ ಮುರಿತ ಮತ್ತು ಕಾರ್ಟಿಕಲ್ ಹಾನಿಯನ್ನು ನಿರ್ಣಯಿಸುವ ಮಸ್ಕ್ಯುಲೋಸ್ಕೆಲಿಟಲ್ ಎಕ್ಸ್-ರೇ.",
        samplePrompt: "ಮೂಳೆಯ ಎಕ್ಸ್-ರೇ ರೇಡಿಯೋಗ್ರಾಫ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಮೂಳೆ ಗೆಡ್ಡೆ (ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ)", "ಸಾಮಾನ್ಯ ಅಸ್ಥಿಪಂಜರದ ಮೂಳೆ"],
        explanation: "ಪ್ರಾಥಮಿಕ ಮಾರಕ ಮೂಳೆ ಗೆಡ್ಡೆಗಳು (ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ, ಈವಿಂಗ್ ಸಾರ್ಕೋಮಾ) ಮೂಳೆ ಅಂಗಾಂಶ ಕೋಶಗಳಿಂದ ಉತ್ಪತ್ತಿಯಾಗುತ್ತವೆ. ಇವು ಮೂಳೆಗಳನ್ನು ದುರ್ಬಲಗೊಳಿಸಿ ತ್ವರಿತವಾಗಿ ಪಸರಿಸುತ್ತವೆ.",
        symptoms: [
          "ರಾತ್ರಿಯಲ್ಲಿ ಅಥವಾ ಚಲಿಸುವಾಗ ಉಲ್ಬಣಗೊಳ್ಳುವ ಆಳವಾದ ಮೂಳೆ ನೋವು",
          "ಮೂಳೆಯ ಜಂಟಿ ಬಳಿ ಪ್ರಗತಿಪರ ಊತ ಮತ್ತು ಮೃದುತ್ವ",
          "ಸಣ್ಣ ಪೆಟ್ಟಿನಿಂದಲೂ ಮೂಳೆ ಮುರಿತ ಸಂಭವಿಸುವುದು (ರೋಗಶಾಸ್ತ್ರೀಯ ಮುರಿತ)",
          "ಕೀಲುಗಳ ಚಲನೆ ಕಡಿಮೆಯಾಗುವುದು ಮತ್ತು ಕುಂಟುವ ನಡಿಗೆ"
        ],
        meds: [
          "MAP ಕಿಮೊಥೆರಪಿ: ಹೈ-ಡೋಸ್ ಮೆಥೊಟ್ರೆಕ್ಸೇಟ್, ಡಾಕ್ಸೊರುಬಿಸಿನ್ ಮತ್ತು ಸಿಸ್ಪ್ಲಾಟಿನ್ ನಿಯಮಿತ ಚಿಕಿತ್ಸೆ.",
          "VDC/IE ಚಿಕಿತ್ಸೆ: ಈವಿಂಗ್ ಸಾರ್ಕೋಮಾಗಾಗಿ ಆಲ್ಟರ್ನೇಟಿಂಗ್ ಕಿಮೊಥೆರಪಿ ಕ್ರಮ.",
          "ಟೈರೋಸಿನ್ ಕೈನೇಸ್ ಇನ್ಹಿಬಿಟರ್: ರೆಗೊರಾಫೆನಿಬ್ ಅಥವಾ ಕ್ಯಾಬೋಜಾಂಟಿನಿಬ್.",
          "ಟಾರ್ಗೆಟೆಡ್ ಆಂಟಿಬಾಡಿ: ಡೆನೊಸುಮಾಬ್ (Denosumab) ಮೂಳೆ ನಾಶವನ್ನು ತಡೆಯುವ ಚಿಕಿತ್ಸೆ."
        ],
        surgery: [
          "ಅಂಗಾಂಗ ರಕ್ಷಣಾ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (Limb-Salving Surgery): ಗೆಡ್ಡೆ ಇರುವ ಮೂಳೆಯನ್ನು ತೆಗೆದು ಕೃತಕ ಲೋಹದ ಪ್ರೊಸ್ಥೆಸಿಸ್ ಅಳವಡಿಸುವುದು.",
          "3D-ಪ್ರಿಂಟೆಡ್ ಟೈಟಾನಿಯಂ ಇಂಪ್ಲಾಂಟ್ಸ್: ಕ್ಲಿಷ್ಟಕರ ಕೀಲುಗಳ ಪುನರ್ನಿರ್ಮಾಣಕ್ಕಾಗಿ.",
          "ಆಂಪ್ಯುಟೇಶನ್: ರಕ್ತನಾಳಗಳು ಮತ್ತು ನರಗಳಿಗೆ ವ್ಯಾಪಕ ಹಾನಿಯಾದಾಗ ಜೀವ ರಕ್ಷಣೆಗಾಗಿ ಅಂಗ ಛೇದನ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ಎದೆಯ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಸಿಟಿ (ಶ್ವಾಸಕೋಶಕ್ಕೆ ಹರಡುವಿಕೆ ತಡೆಯಲು).",
          "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಸ್ಥಳದ ನಿಯಮಿತ ಎಕ್ಸ್-ರೇ ಮತ್ತು ಎಂಆರ್ಐ ತಪಾಸಣೆ (3, 6, 12, 18, 24 ತಿಂಗಳು).",
          "ಕೀಲುಗಳ ಚಲನಶೀಲತೆ ಮತ್ತು ಶಕ್ತಿ ಸುಧಾರಿಸಲು ವಿಶೇಷ ಆರ್ಥೋಪೆಡಿಕ್ ಫಿಸಿಯೋಥೆರಪಿ."
        ]
      },
      spinal_tumor: {
        title: "ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆ ಪತ್ತೆ (Spinal Cord Tumor)",
        modality: "ಬೆನ್ನುಮೂಳೆಯ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ (Spine MRI)",
        badge: "ಸ್ಪೈನ್ ಎಂಆರ್ಐ",
        desc: "ಇಂಟ್ರಾಮೆಡುಲ್ಲರಿ, ಎಕ್ಸ್‌ಟ್ರಾಮೆಡುಲ್ಲರಿ ಮತ್ತು ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಸ್ಯಾಗಿಟಲ್ ಮತ್ತು ಆಕ್ಸಿಯಲ್ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಬೆನ್ನುಮೂಳೆಯ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆ (Spinal Tumor)", "ಸಾಮಾನ್ಯ ಬೆನ್ನುಹುರಿ"],
        explanation: "ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಗಳು (ಎಪೆಂಡಿಮೋಮಾ, ಆಸ್ಟ್ರೊಸೈಟೋಮಾ, ಮೆನಿಂಜಿಯೋಮಾ) ಬೆನ್ನುಹುರಿಯ ನರಗಳ ಮೇಲೆ ತೀವ್ರ ಒತ್ತಡವನ್ನು ಹೇರುತ್ತವೆ, ಇದು ಪಾರ್ಶ್ವವಾಯು ಮತ್ತು ನರವೈಜ್ಞಾನಿಕ ದೌರ್ಬಲ್ಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.",
        symptoms: [
          "ನೋವು ನಿವಾರಕಗಳಿಂದಲೂ ಕಡಿಮೆಯಾಗದ ನಿರಂತರ ಬೆನ್ನು ಅಥವಾ ಕುತ್ತಿಗೆ ನೋವು",
          "ಕಾಲುಗಳಲ್ಲಿ ಪ್ರಗತಿಪರ ದೌರ್ಬಲ್ಯ, ಮರಗಟ್ಟುವಿಕೆ ಅಥವಾ ನಡೆಯಲು ಅಸಮತೋಲನ",
          "ಮೂತ್ರ ಅಥವಾ ಮಲ ವಿಸರ್ಜನೆಯ ಮೇಲಿನ ನಿಯಂತ್ರಣ ಕಳೆದುಕೊಳ್ಳುವುದು (ಕೌಡಾ ಇಕ್ವಿನಾ)",
          "ಕೈಕಾಲುಗಳಲ್ಲಿ ಅತಿಯಾದ ಸಂವೇದನಾ ನಷ್ಟ ಮತ್ತು ರಿಫ್ಲೆಕ್ಸ್ ಏರಿಳಿತಗಳು"
        ],
        meds: [
          "ಹೈ-ಡೋಸ್ ಸ್ಟೀರಾಯ್ಡ್: ಬೆನ್ನುಹುರಿಯ ಊತ ಕಡಿಮೆ ಮಾಡಲು ಡೆಕ್ಸಾಮೆಥಾಸೋನ್ (10-16 mg ಬೋಲಸ್, ನಂತರ ಪ್ರತಿ 6 ಗಂಟೆಗೆ 4-8 mg).",
          "ಕಿಮೊಥೆರಪಿ: ಆಕ್ರಮಣಕಾರಿ ಬೆನ್ನುಹುರಿಯ ಆಸ್ಟ್ರೊಸೈಟೋಮಾಗಳಿಗೆ ಟೆಮೋಜೊಲೊಮೈಡ್ (TMZ) ಅಥವಾ ಕಾರ್ಬೊಪ್ಲಾಟಿನ್.",
          "ಟಾರ್ಗೆಟೆಡ್ ಆಂಟಿಬಾಡಿ: ಬೆವಾಸಿಸುಮಾಬ್ (Avastin) ಬೆನ್ನುಹುರಿಯ ಊತ ಕಡಿಮೆ ಮಾಡಲು.",
          "ನರ ನೋವು ನಿವಾರಕಗಳು: ಪ್ರಿಗಾಬಾಲಿನ್ ಅಥವಾ ಗ್ಯಾಬಾಪೆಂಟಿನ್ ನಿಯಮಿತ ಚಿಕಿತ್ಸೆ."
        ],
        surgery: [
          "ಮೈಕ್ರೋಸರ್ಜಿಕಲ್ ರಿಸೆಕ್ಷನ್: ನ್ಯೂರೋ-ಮಾನಿಟರಿಂಗ್ (MEP/SSEP) ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆಯುವುದು.",
          "ಗ್ರೋಸ್ ಟೋಟಲ್ ರಿಸೆಕ್ಷನ್ (GTR): ಎಪೆಂಡಿಮೋಮಾಗಳಿಗೆ ಸಂಪೂರ್ಣ ನಿವಾರಣೆ.",
          "ಸ್ಪೈನ್ ರೇಡಿಯೋಸರ್ಜರಿ (CyberKnife SBRT): ಮುಟ್ಟಲಾಗದ ಗೆಡ್ಡೆಗಳಿಗೆ ನಿಖರ ವಿಕಿರಣ ಚಿಕಿತ್ಸೆ.",
          "ಸ್ಪೈನಲ್ ಇನ್ಸ್ಟ್ರುಮೆಂಟೆಡ್ ಫ್ಯೂಷನ್: ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಬೆನ್ನುಮೂಳೆಯನ್ನು ಸ್ಥಿರಗೊಳಿಸಲು ರಾಡ್ ಮತ್ತು ಸ್ಕ್ರೂ ಅಳವಡಿಕೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಕಾಂಟ್ರಾಸ್ಟ್ ಬೆನ್ನುಮೂಳೆ ಮತ್ತು ಮೆದುಳಿನ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್.",
          "ಪ್ರತಿ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ASIA ನರವೈಜ್ಞಾನಿಕ ಕಾರ್ಯಕ್ಷಮತೆಯ ಅಂಕ ಪರಿಶೀಲನೆ.",
          "ನರ-ಬೆನ್ನುಹುರಿ ಪುನರ್ವಸತಿ: ಸಮಗ್ರ ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಚಲನಶೀಲತೆಯ ತರಬೇತಿ."
        ]
      },
      tb: {
        title: "ಕ್ಷಯರೋಗ ಪತ್ತೆ (ಟಿಬಿ - TB)",
        modality: "ಎದೆಯ ಕ್ಷ-ಕಿರಣ (Chest X-Ray PA View)",
        badge: "ಟಿಬಿ ಎಕ್ಸ್-ರೇ",
        desc: "ಮೈಕೋಬ್ಯಾಕ್ಟೀರಿಯಂ ಟ್ಯೂಬರ್‌ಕ್ಯುಲೋಸಿಸ್ ಸೋಂಕು ಮತ್ತು ಶ್ವಾಸಕೋಶದ ಗಾಯಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಎದೆಯ ಕ್ಷ-ಕಿರಣ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಎದೆಯ ಕ್ಷ-ಕಿರಣ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಸಕ್ರಿಯ ಶ್ವಾಸಕೋಶದ ಟಿಬಿ (Active TB)", "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯಕರ ಶ್ವಾಸಕೋಶ"],
        explanation: "ಶ್ವಾಸಕೋಶದ ಕ್ಷಯರೋಗ (ಟಿಬಿ) ಮೈಕೋಬ್ಯಾಕ್ಟೀರಿಯಂ ಟ್ಯೂಬರ್‌ಕ್ಯುಲೋಸಿಸ್‌ನಿಂದ ಉಂಟಾಗುವ ಗಾಳಿಯ ಮೂಲಕ ಹರಡುವ ಸಾಂಕ್ರಾಮಿಕ ರೋಗವಾಗಿದೆ. ಬ್ಯಾಸಿಲ್ಲಿ ಶ್ವಾಸಕೋಶವನ್ನು ತಲುಪಿ ಗ್ರ್ಯಾನುಲೋಮಾಗಳು ಮತ್ತು ಗಾಯಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.",
        symptoms: [
          "2-3 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ನಿರಂತರ ಕೆಮ್ಮು",
          "ಕಫದಲ್ಲಿ ರಕ್ತ ಅಥವಾ ರಕ್ತ ಮಿಶ್ರಿತ ಕೆಮ್ಮು (ಹಿಮೋಪ್ಟಿಸಿಸ್)",
          "ರಾತ್ರಿಯಲ್ಲಿ ಅತಿಯಾದ ಬೆವರು, ಸಂಜೆ ಜ್ವರ ಮತ್ತು ಚಳಿ",
          "ವಿವರಿಸಲಾಗದ ಗಣನೀಯ ತೂಕ ನಷ್ಟ ಮತ್ತು ತೀವ್ರ ಸುಸ್ತು"
        ],
        meds: [
          "ಮೊದಲ ಹಂತ (2 ತಿಂಗಳು): ರಿಫಾಂಪಿಸಿನ್, ಐಸೋನಿಯಾಜಿಡ್, ಪೈರಜಿನಾಮೈಡ್ ಮತ್ತು ಎಥಾಂಬ್ಯುಟಾಲ್ ದೈನಂದಿನ ಡೋಸ್.",
          "ಮುಂದುವರಿಕೆ ಹಂತ (4 ತಿಂಗಳು): ರಿಫಾಂಪಿಸಿನ್ ಮತ್ತು ಐಸೋನಿಯಾಜಿಡ್ ನಿಯಮಿತ 6 ತಿಂಗಳ DOTS ಕೋರ್ಸ್.",
          "ಎಂಡಿಆರ್-ಟಿಬಿ (MDR-TB): ಬೆಡಾಕ್ವಿಲಿನ್, ಲಿನೆಜೋಲಿಡ್ ಮತ್ತು ಲೆವೊಫ್ಲೋಕ್ಸಾಸಿನ್ ವಿಶೇಷ ಚಿಕಿತ್ಸೆ.",
          "ಸಹಾಯಕ ಸ್ಟೀರಾಯ್ಡ್ ಚಿಕಿತ್ಸೆ: ಪೆರಿಕಾರ್ಡಿಟಿಸ್ ಅಥವಾ ಮೆನಿಂಜೈಟಿಸ್‌ಗಾಗಿ ಡೆಕ್ಸಾಮೆಥಾಸೋನ್."
        ],
        surgery: [
          "ಪ್ಲುರಲ್ ಡಿಕೋರ್ಟಿಕೇಶನ್: ದೀರ್ಘಕಾಲದ ಕೀವು ತುಂಬಿದ ಶ್ವಾಸಕೋಶಕ್ಕೆ ಥೋರಾಕೋಸ್ಕೋಪಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಬ್ರಾಂಕೋಸ್ಕೋಪಿ ಮತ್ತು ಬಯಾಪ್ಸಿ: ನಿಖರವಾದ ಜೀನ್ ಎಕ್ಸ್‌ಪರ್ಟ್ (GeneXpert MTB/RIF) ದೃಢೀಕರಣಕ್ಕಾಗಿ.",
          "ಲೋಬೆಕ್ಟಮಿ: ತೀವ್ರ ಹಾನಿಗೊಳಗಾದ ಶ್ವಾಸಕೋಶದ ಭಾಗವನ್ನು ತೆಗೆದುಹಾಕುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ ತಿಂಗಳು ಕಫದ ಎಎಫ್‌ಬಿ (AFB) ಪರೀಕ್ಷೆ ಮತ್ತು ಕಲ್ಚರ್.",
          "ಯಕೃತ್ತಿನ ಕ್ರಿಯೆಯ ಪರೀಕ್ಷೆಗಳು (LFT) ಪ್ರತಿ 2-4 ವಾರಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ಗಾಳಿಯ ಮೂಲಕ ಸೋಂಕು ಹರಡದಂತೆ ನೆಗೆಟಿವ್ ಪ್ರೆಶರ್ ಐಸೋಲೇಷನ್ ಮತ್ತು N95 ಮಾಸ್ಕ್."
        ]
      },
      pancreatic_cancer: {
        title: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ ಕ್ಯಾನ್ಸರ್ ಹಂತ (Pancreatic Cancer)",
        modality: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Abdominal CT)",
        badge: "ಹೊಟ್ಟೆಯ ಸಿಟಿ",
        desc: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ಗೆಡ್ಡೆಗಳು ಮತ್ತು ರಕ್ತನಾಳಗಳ ಹಾನಿಯನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಆಕ್ಸಿಯಲ್ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಹಂತ I", "ಹಂತ II", "ಹಂತ III", "ಹಂತ IV", "ಸಾಮಾನ್ಯ ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ"],
        explanation: "ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಡಕ್ಟಲ್ ಅಡಿನೊಕಾರ್ಸಿನೋಮ (PDAC) ಅತ್ಯಂತ ಗಂಭೀರ ರೂಪದ ಕ್ಯಾನ್ಸರ್ ಆಗಿದೆ. ಇದು ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ನಾಳಗಳಿಂದ ಆರಂಭವಾಗಿ ಸುತ್ತಮುತ್ತಲಿನ ರಕ್ತನಾಳಗಳಿಗೆ ಶೀಘ್ರವಾಗಿ ಹರಡುತ್ತದೆ.",
        symptoms: [
          "ನೋವಿಲ್ಲದ ಕಾಮಾಲೆ (Jaundice), ತುರಿಕೆ ಮತ್ತು ಗಾಢ ಬಣ್ಣದ ಮೂತ್ರ",
          "ಹೊಟ್ಟೆಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೋವು, ಬೆನ್ನಿನ ಹಿಂಭಾಗಕ್ಕೆ ಹರಡುವುದು",
          "ವಿವರಿಸಲಾಗದ ಗಣನೀಯ ತೂಕ ನಷ್ಟ ಮತ್ತು ಹಸಿವಿನ ಕೊರತೆ",
          "ಹಠಾತ್ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಹೊಸ ಮಧುಮೇಹ ಲಕ್ಷಣಗಳು"
        ],
        meds: [
          "FOLFIRINOX ಕಿಮೊಥೆರಪಿ: ಆಕ್ಸಾಲಿಪ್ಲಾಟಿನ್, ಇರಿನೊಟೆಕನ್, ಲ್ಯುಕೋವೊರಿನ್ ಮತ್ತು ಫ್ಲೋರೋಯುರಾಸಿಲ್.",
          "ಜೆಮ್ಸಿಟಾಬೈನ್ + ನ್ಯಾಬ್-ಪ್ಯಾಕ್ಲಿಟಾಕ್ಸೆಲ್: ಮುಂದುವರಿದ ಹಂತದ ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಕ್ಯಾನ್ಸರ್‌ಗೆ ಸಂಯೋಜಿತ ಚಿಕಿತ್ಸೆ.",
          "ಟಾರ್ಗೆಟೆಡ್ PARP ಇನ್ಹಿಬಿಟರ್: BRCA ರೂಪಾಂತರ ಹೊಂದಿರುವ ರೋಗಿಗಳಿಗೆ ಒಲಾಪರಿಬ್ (Olaparib 300 mg).",
          "ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಕಿಣ್ವ ಬದಲಿ ಚಿಕಿತ್ಸೆ (PERT): ಜೀರ್ಣಕ್ರಿಯೆ ಸುಧಾರಿಸಲು ಕ್ರಿಯಾನ್ (Creon) ಮಾತ್ರೆಗಳು."
        ],
        surgery: [
          "ವಿಪ್ಪಲ್ ವಿಧಾನ (Whipple Procedure): ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ತಲೆಭಾಗ, ಡ್ಯುಯೊಡಿನಮ್ ಮತ್ತು ಪಿತ್ತಕೋಶವನ್ನು ತೆಗೆಯುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
          "ಡಿಸ್ಟಲ್ ಪ್ಯಾಂಕ್ರಿಯಾಟೆಕ್ಟಮಿ: ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ಬಾಲ ಮತ್ತು ಗುಲ್ಮವನ್ನು ತೆಗೆಯುವುದು.",
          "ಪಿತ್ತನಾಳ ಸ್ಟೆಂಟ್ (Biliary Stenting): ಕಾಮಾಲೆ ನಿವಾರಿಸಲು ಎಂಡೋಸ್ಕೋಪಿಕ್ ಲೋಹದ ಸ್ಟೆಂಟ್ ಅಳವಡಿಕೆ."
        ],
        monitoring: [
          "ರಕ್ತದ CA 19-9 ಟ್ಯೂಮರ್ ಮಾರ್ಕರ್ ಪ್ರತಿ 2-3 ತಿಂಗಳಿಗೊಮ್ಮೆ ತಪಾಸಣೆ.",
          "ಮಲ್ಟಿಫೇಸ್ ಸಿಟಿ ಅಥವಾ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ ಮೂಲಕ ಪ್ರತಿ 8-12 ವಾರಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ತೀವ್ರ ನೋವು ನಿವಾರಣೆಗಾಗಿ ಸಿಲಿಯಾಕ್ ಪ್ಲೆಕ್ಸಸ್ ಬ್ಲಾಕ್ ಚಿಕಿತ್ಸೆ."
        ]
      },
      lung_cancer: {
        title: "ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್ ಪತ್ತೆ (Lung Cancer)",
        modality: "ಎದೆಯ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Chest CT)",
        badge: "ಎದೆಯ ಸಿಟಿ",
        desc: "ಶ್ವಾಸಕೋಶದ ಗಂಟುಗಳು ಮತ್ತು ಮಾರಕ ಗಡ್ಡೆಗಳನ್ನು ಗುರುತಿಸುವ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಆಕ್ಸಿಯಲ್ ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಮಾರಕ ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್", "ಸಾಮಾನ್ಯ ಶ್ವಾಸಕೋಶದ ಸಿಟಿ"],
        explanation: "ಪ್ರಾಥಮಿಕ ಶ್ವಾಸಕೋಶದ ಕಾರ್ಸಿನೋಮ (ನಾನ್-ಸ್ಮಾಲ್ ಸೆಲ್ ಮತ್ತು ಸ್ಮಾಲ್ ಸೆಲ್ ಲಂಗ್ ಕ್ಯಾನ್ಸರ್) ಶ್ವಾಸಕೋಶದ ಜೀವಕೋಶಗಳಲ್ಲಿ ಅನಿಯಂತ್ರಿತ ಕೋಶ ವಿಭಜನೆಯಿಂದ ಉಂಟಾಗುತ್ತದೆ ಮತ್ತು ಮೆಡಿಯಾಸ್ಟೈನಲ್ ದುಗ್ಧರಸ ಗ್ರಂಥಿಗಳಿಗೆ ಹರಡುತ್ತದೆ.",
        symptoms: [
          "ನಿರಂತರ ಹೆಚ್ಚಾಗುವ ಕೆಮ್ಮು ಅಥವಾ ಧೂಮಪಾನಿಗಳಲ್ಲಿ ಕೆಮ್ಮಿನ ಬದಲಾವಣೆ",
          "ಕಫದಲ್ಲಿ ರಕ್ತ ಬೀಳುವುದು (ಹಿಮೋಪ್ಟಿಸಿಸ್) ಮತ್ತು ಎದೆ ನೋವು",
          "ಉಸಿರಾಟದ ತೊಂದರೆ, ಉಬ್ಬಸ ಮತ್ತು ಉಸಿರುಕಟ್ಟುವಿಕೆ",
          "ಧ್ವನಿಯಲ್ಲಿ ಗಡಸುತನ ಅಥವಾ ಮುಖ/ಕುತ್ತಿಗೆಯಲ್ಲಿ ಊತ (SVC ಸಿಂಡ್ರೋಮ್)"
        ],
        meds: [
          "ಟಾರ್ಗೆಟೆಡ್ ಥೆರಪಿ: EGFR ರೂಪಾಂತರಕ್ಕೆ ಒಸಿಮೆರ್ಟಿನಿಬ್ (Osimertinib 80 mg) ಮತ್ತು ALK ಗಾಗಿ ಅಲೆಕ್ಟಿನಿಬ್.",
          "ಇಮ್ಯುನೊಥೆರಪಿ: ಪೆಂಬ್ರೊಲಿಜುಮಾಬ್ (Keytruda 200 mg) ಚೆಕ್‌ಪಾಯಿಂಟ್ ಇನ್ಹಿಬಿಟರ್ ಚಿಕಿತ್ಸೆ.",
          "ಪ್ಲಾಟಿನಂ ಕಿಮೊಥೆರಪಿ: ಸಿಸ್ಪ್ಲಾಟಿನ್ ಅಥವಾ ಕಾರ್ಬೊಪ್ಲಾಟಿನ್ ಜೊತೆಗೆ ಪೆಮೆಟ್ರೆಕ್ಸೆಡ್ / ಪ್ಯಾಕ್ಲಿಟಾಕ್ಸೆಲ್.",
          "ಆಂಟಿ-ಆಂಜಿಯೋಜೆನಿಕ್ ಆಂಟಿಬಾಡಿ: ಬೆವಾಸಿಸುಮಾಬ್ (Avastin) ರಕ್ತನಾಳಗಳ ಬೆಳವಣಿಗೆಯನ್ನು ತಡೆಯಲು."
        ],
        surgery: [
          "ವಿಡಿಯೋ-ಸಹಾಯಿತ ಲೋಬೆಕ್ಟಮಿ (VATS Lobectomy): ಶ್ವಾಸಕೋಶದ ಹಾನಿಗೊಳಗಾದ ಭಾಗವನ್ನು ಕನಿಷ್ಠ ಗಾಯದೊಂದಿಗೆ ತೆಗೆಯುವುದು.",
          "ಸ್ಟೀರಿಯೊಟ್ಯಾಕ್ಟಿಕ್ ರೇಡಿಯೊಥೆರಪಿ (SBRT / SABR): ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ ನಿಖರವಾದ ವಿಕಿರಣ ಚಿಕಿತ್ಸೆ.",
          "ಎಂಡೋಬ್ರಾಂಕಿಯಲ್ ಸ್ಟೆಂಟ್: ಶ್ವಾಸನಾಳವನ್ನು ಮುಕ್ತವಾಗಿಡಲು ಇಂಟರ್ವೆನ್ಷನಲ್ ಬ್ರಾಂಕೋಸ್ಕೋಪಿಕ್ ಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಚಿಕಿತ್ಸೆಯ ನಂತರ ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಮೇಲ್ವಿಚಾರಣೆ.",
          "ಸಂಪೂರ್ಣ ಧೂಮಪಾನ ತ್ಯಾಗ ಕಾರ್ಯಕ್ರಮ.",
          "ಶ್ವಾಸಕೋಶದ ಕಾರ್ಯಕ್ಷಮತೆ ಸುಧಾರಿಸಲು ಪಲ್ಮನರಿ ರಿಹ್ಯಾಬಿಲಿಟೇಶನ್ ಮತ್ತು ಸ್ಪೈರೋಮೆಟ್ರಿ ತಪಾಸಣೆ."
        ]
      },
      liver_tumor: {
        title: "ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ ಪತ್ತೆ (Liver Tumor / LiTS)",
        modality: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್-ವರ್ಧಿತ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ (Liver CT)",
        badge: "ಯಕೃತ್ತಿನ ಸಿಟಿ",
        desc: "ಹೆಪಾಟೊಸೆಲ್ಯುಲರ್ ಕಾರ್ಸಿನೋಮ (HCC) ಮತ್ತು ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವ SegFormer AI ಆಧಾರಿತ ಸಿಟಿ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಹೊಟ್ಟೆಯ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ (Liver Tumor)", "ಸಾಮಾನ್ಯ ಯಕೃತ್ತಿನ ಅಂಗಾಂಶ"],
        explanation: "ಹೆಪಾಟೊಸೆಲ್ಯುಲರ್ ಕಾರ್ಸಿನೋಮ (HCC) ಸಿರೋಸಿಸ್ ಅಥವಾ ಹೆಪಟೈಟಿಸ್ ಬಿ/ಸಿ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಉದ್ಭವಿಸುವ ಯಕೃತ್ತಿನ ಪ್ರಾಥಮಿಕ ಕ್ಯಾನ್ಸರ್ ಆಗಿದೆ. ಅಪಧಮನಿಯ ಹಂತದಲ್ಲಿ ಹೈಪರ್-ವರ್ಧನೆ ಮತ್ತು ಸಿರೆಯ ಹಂತದಲ್ಲಿ ಕ್ಷಿಪ್ರ ವಾಶ್‌ಔಟ್ ಇದರ ವಿಶಿಷ್ಟ ಲಕ್ಷಣಗಳಾಗಿವೆ.",
        symptoms: [
          "ಹೊಟ್ಟೆಯ ಬಲ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೋವು, ಭಾರ ಅಥವಾ ಮುಟ್ಟಿದರೆ ಊತ",
          "ದೀರ್ಘಕಾಲದ ಯಕೃತ್ತಿನ ಕಾಯಿಲೆಯಲ್ಲಿ ಕಾಮಾಲೆ ಅಥವಾ ಹೊಟ್ಟೆಯಲ್ಲಿ ನೀರು (Ascites) ಹಠಾತ್ ಉಲ್ಬಣಿಸುವುದು",
          "ಯಕೃತ್ತಿನ ಎನ್ಸೆಫಲೋಪತಿ, ಆಯಾಸ ಮತ್ತು ಸ್ಪೈಡರ್ ಆಂಜಿಯೋಮಾ",
          "ಹಸಿವಿಲ್ಲದಿರುವುದು ಮತ್ತು ವಿವರಿಸಲಾಗದ ತೂಕ ನಷ್ಟ"
        ],
        meds: [
          "ಮೊದಲ ಸಾಲಿನ ಇಮ್ಯುನೊಥೆರಪಿ: ಅಟೆಜೊಲಿಜುಮಾಬ್ (1200 mg) + ಬೆವಾಸಿಸುಮಾಬ್ (15 mg/kg) IV (IMbrave150 ಪ್ರೋಟೋಕಾಲ್).",
          "ಚೆಕ್‌ಪಾಯಿಂಟ್ ಇನ್ಹಿಬಿಟರ್‌ಗಳು: ಡರ್ವಾಲುಮಾಬ್ ಜೊತೆಗೆ ಟ್ರೆಮೆಲಿಮುಮಾಬ್ ಸಂಯೋಜನೆ.",
          "ಟೈರೋಸಿನ್ ಕೈನೇಸ್ ಇನ್ಹಿಬಿಟರ್: ಸೊರಾಫೆನಿಬ್ (400 mg) ಅಥವಾ ಲೆನ್ವಾಟಿನಿಬ್ (8-12 mg) ಮಾತ್ರೆಗಳು.",
          "ಆಂಟಿವೈರಲ್ ಚಿಕಿತ್ಸೆ: ಹೆಪಟೈಟಿಸ್ ಬಿ ನಿಯಂತ್ರಣಕ್ಕೆ ಎಂಟೆಕಾವಿರ್ ಅಥವಾ ಟೆನೊಫೊವಿರ್."
        ],
        surgery: [
          "ಯಕೃತ್ತಿನ ಕಸಿ (Orthotopic Liver Transplant): ಮಿಲನ್ ಮಾನದಂಡಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಂಪೂರ್ಣ ಯಕೃತ್ತು ಕಸಿ.",
          "ಭಾಗಶಃ ಹೆಪಾಟೆಕ್ಟಮಿ: ಯಕೃತ್ತಿನ ಹಾನಿಗೊಳಗಾದ ಭಾಗವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆಯುವುದು.",
          "ಕೀಮೊಎಂಬೋಲೈಸೇಶನ್ (TACE): ಕ್ಯಾತಿಟರ್ ಮೂಲಕ ರಕ್ತನಾಳ ಮುಚ್ಚಿ ಗೆಡ್ಡೆಗೆ ನೇರ ಕಿಮೊ ನೀಡುವ ವಿಧಾನ.",
          "ರೇಡಿಯೋಫ್ರೀಕ್ವೆನ್ಸಿ ಅಬ್ಲೇಶನ್ (RFA / MWA): ಶಾಖದ ಮೂಲಕ ಗೆಡ್ಡೆಯನ್ನು ನಾಶಪಡಿಸುವ ಸೂಕ್ಷ್ಮ ಚಿಕಿತ್ಸೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಸೀರಮ್ ಆಲ್ಫಾ-ಫೆಟೊಪ್ರೋಟೀನ್ (AFP) ರಕ್ತ ಪರೀಕ್ಷೆ.",
          "ಡೈನಾಮಿಕ್ ಲಿವರ್ ಎಂಆರ್ಐ ಅಥವಾ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ನಿಯಮಿತ ಪರಿಶೀಲನೆ (LI-RADS ಮಾನದಂಡ).",
          "ಮದ್ಯಪಾನ ಸಂಪೂರ್ಣ ವರ್ಜ್ಯ ಮತ್ತು ಯಕೃತ್ತಿಗೆ ಹಾನಿಕಾರಕ ಔಷಧಿಗಳ ನಿಷೇಧ."
        ]
      },
      bone_tumor: {
        title: "ಮೂಳೆ ಗೆಡ್ಡೆ ಮತ್ತು ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ (Bone Tumor)",
        modality: "ಆರ್ಥೋಪೆಡಿಕ್ ಎಕ್ಸ್-ರೇ (Orthopedic Bone X-Ray)",
        badge: "ಮೂಳೆ ಎಕ್ಸ್-ರೇ",
        desc: "ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ, ಮೂಳೆ ಮುರಿತ ಮತ್ತು ಕಾರ್ಟಿಕಲ್ ಹಾನಿಯನ್ನು ನಿರ್ಣಯಿಸುವ ಮಸ್ಕ್ಯುಲೋಸ್ಕೆಲಿಟಲ್ ಎಕ್ಸ್-ರೇ.",
        samplePrompt: "ಮೂಳೆಯ ಎಕ್ಸ್-ರೇ ರೇಡಿಯೋಗ್ರಾಫ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಮೂಳೆ ಗೆಡ್ಡೆ (ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ)", "ಸಾಮಾನ್ಯ ಅಸ್ಥಿಪಂಜರದ ಮೂಳೆ"],
        explanation: "ಪ್ರಾಥಮಿಕ ಮಾರಕ ಮೂಳೆ ಗೆಡ್ಡೆಗಳು (ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ, ಈವಿಂಗ್ ಸಾರ್ಕೋಮಾ) ಮೂಳೆ ಅಂಗಾಂಶ ಕೋಶಗಳಿಂದ ಉತ್ಪತ್ತಿಯಾಗುತ್ತವೆ. ಇವು ಮೂಳೆಗಳನ್ನು ದುರ್ಬಲಗೊಳಿಸಿ ತ್ವರಿತವಾಗಿ ಪಸರಿಸುತ್ತವೆ.",
        symptoms: [
          "ರಾತ್ರಿಯಲ್ಲಿ ಅಥವಾ ಚಲಿಸುವಾಗ ಉಲ್ಬಣಗೊಳ್ಳುವ ಆಳವಾದ ಮೂಳೆ ನೋವು",
          "ಮೂಳೆಯ ಜಂಟಿ ಬಳಿ ಪ್ರಗತಿಪರ ಊತ ಮತ್ತು ಮೃದುತ್ವ",
          "ಸಣ್ಣ ಪೆಟ್ಟಿನಿಂದಲೂ ಮೂಳೆ ಮುರಿತ ಸಂಭವಿಸುವುದು (ರೋಗಶಾಸ್ತ್ರೀಯ ಮುರಿತ)",
          "ಕೀಲುಗಳ ಚಲನೆ ಕಡಿಮೆಯಾಗುವುದು ಮತ್ತು ಕುಂಟುವ ನಡಿಗೆ"
        ],
        meds: [
          "MAP ಕಿಮೊಥೆರಪಿ: ಹೈ-ಡೋಸ್ ಮೆಥೊಟ್ರೆಕ್ಸೇಟ್, ಡಾಕ್ಸೊರುಬಿಸಿನ್ ಮತ್ತು ಸಿಸ್ಪ್ಲಾಟಿನ್ ನಿಯಮಿತ ಚಿಕಿತ್ಸೆ.",
          "VDC/IE ಚಿಕಿತ್ಸೆ: ಈವಿಂಗ್ ಸಾರ್ಕೋಮಾಗಾಗಿ ಆಲ್ಟರ್ನೇಟಿಂಗ್ ಕಿಮೊಥೆರಪಿ ಕ್ರಮ.",
          "ಟೈರೋಸಿನ್ ಕೈನೇಸ್ ಇನ್ಹಿಬಿಟರ್: ರೆಗೊರಾಫೆನಿಬ್ ಅಥವಾ ಕ್ಯಾಬೋಜಾಂಟಿನಿಬ್.",
          "ಟಾರ್ಗೆಟೆಡ್ ಆಂಟಿಬಾಡಿ: ಡೆನೊಸುಮಾಬ್ (Denosumab) ಮೂಳೆ ನಾಶವನ್ನು ತಡೆಯುವ ಚಿಕಿತ್ಸೆ."
        ],
        surgery: [
          "ಅಂಗಾಂಗ ರಕ್ಷಣಾ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (Limb-Salving Surgery): ಗೆಡ್ಡೆ ಇರುವ ಮೂಳೆಯನ್ನು ತೆಗೆದು ಕೃತಕ ಲೋಹದ ಪ್ರೊಸ್ಥೆಸಿಸ್ ಅಳವಡಿಸುವುದು.",
          "3D-ಪ್ರಿಂಟೆಡ್ ಟೈಟಾನಿಯಂ ಇಂಪ್ಲಾಂಟ್ಸ್: ಕ್ಲಿಷ್ಟಕರ ಕೀಲುಗಳ ಪುನರ್ನಿರ್ಮಾಣಕ್ಕಾಗಿ.",
          "ಆಂಪ್ಯುಟೇಶನ್: ರಕ್ತನಾಳಗಳು ಮತ್ತು ನರಗಳಿಗೆ ವ್ಯಾಪಕ ಹಾನಿಯಾದಾಗ ಜೀವ ರಕ್ಷಣೆಗಾಗಿ ಅಂಗ ಛೇದನ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ಎದೆಯ ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಸಿಟಿ (ಶ್ವಾಸಕೋಶಕ್ಕೆ ಹರಡುವಿಕೆ ತಡೆಯಲು).",
          "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಸ್ಥಳದ ನಿಯಮಿತ ಎಕ್ಸ್-ರೇ ಮತ್ತು ಎಂಆರ್ಐ ತಪಾಸಣೆ (3, 6, 12, 18, 24 ತಿಂಗಳು).",
          "ಕೀಲುಗಳ ಚಲನಶೀಲತೆ ಮತ್ತು ಶಕ್ತಿ ಸುಧಾರಿಸಲು ವಿಶೇಷ ಆರ್ಥೋಪೆಡಿಕ್ ಫಿಸಿಯೋಥೆರಪಿ."
        ]
      },
      spinal_tumor: {
        title: "ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆ ಪತ್ತೆ (Spinal Cord Tumor)",
        modality: "ಬೆನ್ನುಮೂಳೆಯ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ (Spine MRI)",
        badge: "ಸ್ಪೈನ್ ಎಂಆರ್ಐ",
        desc: "ಇಂಟ್ರಾಮೆಡುಲ್ಲರಿ, ಎಕ್ಸ್‌ಟ್ರಾಮೆಡುಲ್ಲರಿ ಮತ್ತು ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಸ್ಯಾಗಿಟಲ್ ಮತ್ತು ಆಕ್ಸಿಯಲ್ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್.",
        samplePrompt: "ಬೆನ್ನುಮೂಳೆಯ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (PNG/JPG)",
        classes: ["ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆ (Spinal Tumor)", "ಸಾಮಾನ್ಯ ಬೆನ್ನುಹುರಿ"],
        explanation: "ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಗಳು (ಎಪೆಂಡಿಮೋಮಾ, ಆಸ್ಟ್ರೊಸೈಟೋಮಾ, ಮೆನಿಂಜಿಯೋಮಾ) ಬೆನ್ನುಹುರಿಯ ನರಗಳ ಮೇಲೆ ತೀವ್ರ ಒತ್ತಡವನ್ನು ಹೇರುತ್ತವೆ, ಇದು ಪಾರ್ಶ್ವವಾಯು ಮತ್ತು ನರವೈಜ್ಞಾನಿಕ ದೌರ್ಬಲ್ಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.",
        symptoms: [
          "ನೋವು ನಿವಾರಕಗಳಿಂದಲೂ ಕಡಿಮೆಯಾಗದ ನಿರಂತರ ಬೆನ್ನು ಅಥವಾ ಕುತ್ತಿಗೆ ನೋವು",
          "ಕಾಲುಗಳಲ್ಲಿ ಪ್ರಗತಿಪರ ದೌರ್ಬಲ್ಯ, ಮರಗಟ್ಟುವಿಕೆ ಅಥವಾ ನಡೆಯಲು ಅಸಮತೋಲನ",
          "ಮೂತ್ರ ಅಥವಾ ಮಲ ವಿಸರ್ಜನೆಯ ಮೇಲಿನ ನಿಯಂತ್ರಣ ಕಳೆದುಕೊಳ್ಳುವುದು (ಕೌಡಾ ಇಕ್ವಿನಾ)",
          "ಕೈಕಾಲುಗಳಲ್ಲಿ ಅತಿಯಾದ ಸಂವೇದನಾ ನಷ್ಟ ಮತ್ತು ರಿಫ್ಲೆಕ್ಸ್ ಏರಿಳಿತಗಳು"
        ],
        meds: [
          "ಹೈ-ಡೋಸ್ ಸ್ಟೀರಾಯ್ಡ್: ಬೆನ್ನುಹುರಿಯ ಊತ ಕಡಿಮೆ ಮಾಡಲು ಡೆಕ್ಸಾಮೆಥಾಸೋನ್ (10-16 mg ಬೋಲಸ್, ನಂತರ ಪ್ರತಿ 6 ಗಂಟೆಗೆ 4-8 mg).",
          "ಕಿಮೊಥೆರಪಿ: ಆಕ್ರಮಣಕಾರಿ ಬೆನ್ನುಹುರಿಯ ಆಸ್ಟ್ರೊಸೈಟೋಮಾಗಳಿಗೆ ಟೆಮೋಜೊಲೊಮೈಡ್ (TMZ) ಅಥವಾ ಕಾರ್ಬೊಪ್ಲಾಟಿನ್.",
          "ಟಾರ್ಗೆಟೆಡ್ ಆಂಟಿಬಾಡಿ: ಬೆವಾಸಿಸುಮಾಬ್ (Avastin) ಬೆನ್ನುಹುರಿಯ ಊತ ಕಡಿಮೆ ಮಾಡಲು.",
          "ನರ ನೋವು ನಿವಾರಕಗಳು: ಪ್ರಿಗಾಬಾಲಿನ್ ಅಥವಾ ಗ್ಯಾಬಾಪೆಂಟಿನ್ ನಿಯಮಿತ ಚಿಕಿತ್ಸೆ."
        ],
        surgery: [
          "ಮೈಕ್ರೋಸರ್ಜಿಕಲ್ ರಿಸೆಕ್ಷನ್: ನ್ಯೂರೋ-ಮಾನಿಟರಿಂಗ್ (MEP/SSEP) ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಬೆನ್ನುಹುರಿಯ ಗೆಡ್ಡೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆಯುವುದು.",
          "ಗ್ರೋಸ್ ಟೋಟಲ್ ರಿಸೆಕ್ಷನ್ (GTR): ಎಪೆಂಡಿಮೋಮಾಗಳಿಗೆ ಸಂಪೂರ್ಣ ನಿವಾರಣೆ.",
          "ಸ್ಪೈನ್ ರೇಡಿಯೋಸರ್ಜರಿ (CyberKnife SBRT): ಮುಟ್ಟಲಾಗದ ಗೆಡ್ಡೆಗಳಿಗೆ ನಿಖರ ವಿಕಿರಣ ಚಿಕಿತ್ಸೆ.",
          "ಸ್ಪೈನಲ್ ಇನ್ಸ್ಟ್ರುಮೆಂಟೆಡ್ ಫ್ಯೂಷನ್: ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಬೆನ್ನುಮೂಳೆಯನ್ನು ಸ್ಥಿರಗೊಳಿಸಲು ರಾಡ್ ಮತ್ತು ಸ್ಕ್ರೂ ಅಳವಡಿಕೆ."
        ],
        monitoring: [
          "ಪ್ರತಿ 3-6 ತಿಂಗಳಿಗೊಮ್ಮೆ ಕಾಂಟ್ರಾಸ್ಟ್ ಬೆನ್ನುಮೂಳೆ ಮತ್ತು ಮೆದುಳಿನ ಎಂಆರ್ಐ ಸ್ಕ್ಯಾನ್.",
          "ಪ್ರತಿ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ASIA ನರವೈಜ್ಞಾನಿಕ ಕಾರ್ಯಕ್ಷಮತೆಯ ಅಂಕ ಪರಿಶೀಲನೆ.",
          "ನರ-ಬೆನ್ನುಹುರಿ ಪುನರ್ವಸತಿ: ಸಮಗ್ರ ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಚಲನಶೀಲತೆಯ ತರಬೇತಿ."
        ]
      }
    }
  },

  // HINDI TRANSLATIONS
  hi: {
    langName: "हिन्दी (Hindi)",
    brandTitle: "न्यूरोएज क्लिनिकल AI",
    brandSubtitle: "एकीकृत बहु-रोग नैदानिक ​​सूट",
    modelsActive: "15 क्लिनिकल मॉडल सक्रिय हैं",
    homePortal: "होम पोर्टल",
    manualBtn: "📚 रोग एवं उपचार नियमावली",
    samplesGalleryBtn: "बेंचमार्क गैलरी (121)",
    pageTitle: "एकीकृत बहु-रोग क्लिनिकल डायग्नोस्टिक प्लेटफॉर्म",
    pageSubtitle: "वास्तविक समय नैदानिक अनिश्चितता परिमाणीकरण और साक्ष्य-आधारित उपचार दिशानिर्देशों के साथ उच्च-सटीक AI मेडिकल इमेजिंग निदान। विश्लेषण शुरू करने के लिए नीचे रोग का चयन करें।",
    step1Title: "रोग परीक्षण मोडालिटी चुनें",
    selectModality: "मोडालिटी चुनें:",
    step2Title: "क्लिनिकल स्कैन अपलोड करें और विश्लेषण करें",
    dropzoneTitle: "क्लिनिकल छवि अपलोड करें",
    browseBtn: "फ़ाइलें ब्राउज़ करें",
    removeBtn: "✕ हटाएं और दूसरा स्कैन चुनें",
    targetDisease: "लक्षित रोग",
    diagnosticModality: "नैदानिक ​​पद्धति",
    uncertaintyMetric: "अनिश्चितता मीट्रिक",
    shannonEntropy: "नैदानिक अनिश्चितता स्कोर",
    deepLearningCore: "डीप लर्निंग कोर",
    edgeConvNet: "एज कन्वेन्शनल नेटवर्क",
    runAnalysisBtn: "क्लिनिकल AI विश्लेषण चलाएं",
    analyzingTicker: "क्लिनिकल स्कैन का विश्लेषण किया जा रहा है...",
    reportTitle: "AI क्लिनिकल डायग्नोस्टिक रिपोर्ट",
    caseId: "केस आईडी",
    timestamp: "समय",
    patientDetailsTitle: "रोगी जनसांख्यिकी एवं नैदानिक जानकारी",
    patientRecordVerified: "सत्यापित स्वास्थ्य रिकॉर्ड (EHR)",
    patientName: "रोगी का नाम",
    patientAge: "उम्र",
    patientSex: "लिंग",
    patientAddress: "पता",
    patientIntakeTitle: "रोगी विवरण प्रविष्टि",
    pathologyDetectedTag: "रोग का पता चला — तत्काल चिकित्सा हस्तक्षेप की सलाह",
    normalScanTag: "सामान्य स्कैन — कोई रोग लक्षण नहीं",
    modelConfidenceTitle: "मॉडल विश्वास स्कोर (Confidence)",
    modelConfidenceDesc: "अनुमानित स्थिति के लिए उच्चतम सांख्यिकीय विश्वास स्तर।",
    highConfidenceBadge: "उच्च विश्वास",
    uncertaintyTitle: "नैदानिक अनिश्चितता सूचकांक",
    uncertaintyDesc: "सभी संभावित वर्गों में नैदानिक अनिश्चितता का स्तर।",
    highReliabilityBadge: "उच्च विश्वसनीयता",
    moderateReliabilityBadge: "मध्यम विश्वसनीयता",
    lowReliabilityBadge: "चिकित्सकीय समीक्षा अनुशंसित",
    classProbabilitiesTitle: "नैदानिक वर्ग संभावना वितरण",
    probVectorLabel: "संभावना (%)",
    diagnosticSummaryTitle: "क्लिनिकल मार्गदर्शन एवं नैदानिक ​​सारांश",
    treatmentSectionTitle: "रोग का विवरण और सुझाई गई उपचार नियमावली",
    tabPharmacotherapy: "औषधोपचार",
    tabSurgery: "सर्जिकल एवं हस्तक्षेप",
    tabSurveillance: "निगरानी एवं देखभाल",
    medsTitle: "प्राथमिक औषधीय उपचार और दवाएं",
    surgeryTitle: "सर्जिकल और नैदानिक ​​प्रक्रियाएं",
    monitorTitle: "दीर्घकालिक निगरानी, फॉलो-अप एवं जीवनशैली",
    printReportBtn: "🖨️ मेडिकल रिपोर्ट प्रिंट / निर्यात करें",
    analyzeAnotherBtn: "🔄 अन्य स्कैन का विश्लेषण करें",
    voiceReaderTitle: "AI क्लिनिकल वॉयस रीडर",
    readReportBtn: "🔊 रिपोर्ट सुनें",
    pauseAudioBtn: "⏸️ रोकें",
    resumeAudioBtn: "▶️ जारी रखें",
    stopAudioBtn: "⏹️ आवाज बंद करें",
    readSpeedLabel: "आवाज की गति",
    voiceStatusReady: "क्लिनिकल रिपोर्ट पढ़ने के लिए तैयार",
    voiceStatusPlaying: "रिपोर्ट को हिंदी में पढ़ा जा रहा है...",
    voiceStatusPaused: "वॉयस नैरेशन रुका हुआ है",
    readVerdictBtn: "निर्णय सुनें",
    readMetricsBtn: "मीट्रिक्स सुनें",
    readGuidanceBtn: "मार्गदर्शन सुनें",
    readExplanationBtn: "रोग विवरण सुनें",
    readTreatmentBtn: "उपचार योजना सुनें",
    modalPathologyHeading: "रोग का विवरण और कार्यप्रणाली:",
    modalSymptomsHeading: "प्रमुख लक्षण एवं संकेत:",
    modalMedsHeading: "अनुशंसित औषधोपचार",
    modalSurgeryHeading: "सर्जिकल और नैदानिक ​​प्रक्रियाएं",
    modalMonitorHeading: "निगरानी, रोकथाम और बचाव",
    unifiedSectionTitle: "ऑल-इन-वन 15-रोग व्यापक निदान केंद्र",
    unifiedSectionSubtitle: "15 रोगों में से किसी भी श्रेणी (ब्रेन एमआरआई, पार्किंसन, अल्जाइमर, स्ट्रोक, स्पाइनल ट्यूमर, निमोनिया, टीबी, लंग कैंसर, पैनक्रियाटिक कैंसर, लिवर ट्यूमर, बोन ट्यूमर, ब्रेस्ट बायोप्सी, रेटिना ओसीटी, फंडस या ब्लड स्मीयर) को चुनें, स्कैन अपलोड करें और पूर्ण क्लिनिकल रिपोर्ट प्राप्त करें।",
    sampleScansTitle: "🚀 त्वरित सैंपल टेस्ट (किसी भी रोग की जांच के लिए क्लिक करें):",
    visualInspectionTitle: "सटीक स्कैन निरीक्षण एवं पद्धति सत्यापन",
    visualInspectionSubtitle: "मरीज के विश्लेषित स्कैन और प्रामाणिक नैदानिक संदर्भ के बीच सीधा तुलनात्मक दृश्य।",
    allSixActive: "सभी 15 रोग मॉडल सक्रिय हैं",
    dropAnyPrompt: "चयनित रोग श्रेणी की मेडिकल इमेज यहां अपलोड करें (PNG/JPG)",
    homeBadge: "एकीकृत क्लिनिकल डायग्नोस्टिक सूट • 15 रोग मॉडल ऑनलाइन",
    homeHeadline: "एज-आधारित क्लिनिकल डायग्नोसिस के लिए अनिश्चितता-जागरूक व्याख्यात्मक डीप लर्निंग फ्रेमवर्क",
    homeSubtitle: "न्यूरोलॉजिकल, स्पाइनल, पल्मोनरी, ऑन्कोलॉजिकल, आर्थोपेडिक, ऑप्थल्मोलॉजिकल और हेमेटोलॉजिकल डायग्नोस्टिक्स को वास्तविक समय की अनिश्चितता के साथ एकजुट करने वाला व्यापक मेडिकल इंटेलिजेंस प्लेटफॉर्म।",
    homeEnterBtn: "ऑल-इन-वन डायग्नोस्टिक एप्लीकेशन में प्रवेश करें",
    footerText: "न्यूरोएज क्लिनिकल AI • अनिश्चितता-जागरूक डीप लर्निंग सिस्टम • एज आर्किटेक्चर",

    // Auto-Detect & Kaggle Benchmark Gallery Translations
    autoDetectModality: "⚡ स्वचालित रोग पहचान (सभी 15 कैगल डेटासेट)",
    autoDetectBadge: "AI ऑटो-वर्गीकरण",
    aiModalityIdentified: "AI द्वारा पहचानी गई विधा",
    showcaseBadgePill: "48 प्रामाणिक क्लिनिकल बेंचमार्क स्कैन",
    showcaseTitle: "कैगल क्लिनिकल डेटासेट बेंचमार्क गैलरी",
    showcaseDesc: "प्रत्येक 6 कैगल डेटासेट से 8 प्रामाणिक नमूना स्कैन (कुल 48)। AI ऑटो-डिटेक्ट का परीक्षण करने और पूर्ण अनिश्चितता डायग्नोस्टिक्स उत्पन्न करने के लिए किसी भी छवि पर क्लिक करें।",
    filterAll: "सभी 48 कैगल स्कैन",
    autoDetectedModality: "स्वतः पहचानी गई विधा",
    testAutoDetectBtn: "⚡ ऑटो-डिटेक्ट में परीक्षण करें",

    // Disease Specific Content in Hindi
    diseases: {
      auto: {
        title: "AI ऑटो-डिटेक्ट (सभी 6 डेटासेट)",
        modality: "मल्टी-मॉडल मेडिकल इमेज क्लासिफायर",
        badge: "ऑटो-डिटेक्ट",
        desc: "कोई भी मेडिकल स्कैन अपलोड करें। AI स्वचालित रूप से बीमारी की विधा की पहचान करेगा और संबंधित डायग्नोस्टिक मॉडल को अग्रेषित करेगा।",
        samplePrompt: "कोई भी मेडिकल स्कैन अपलोड करें — AI स्वचालित रूप से पहचान करेगा (PNG/JPG)"
      },
      brain: {
        title: "ब्रेन ट्यूमर जांच",
        modality: "मस्तिष्क एमआरआई (Magnetic Resonance Imaging)",
        badge: "MRI स्कैन",
        desc: "अक्षीय या कोरोनल T1, T2 या FLAIR मस्तिष्क MRI स्कैन। ट्यूमर की सीमाओं और सूजन की जांच करता है।",
        samplePrompt: "मस्तिष्क MRI स्कैन (PNG/JPG) अपलोड करें",
        classes: ["ब्रेन ट्यूमर घाव", "सामान्य मस्तिष्क ऊतक"],
        explanation: "ब्रेन ट्यूमर कपाल गुहा के भीतर कोशिकाओं का असामान्य और अनियंत्रित संग्रह है। हाई-ग्रेड ग्लिओमा और एस्ट्रोसाइटोमा मस्तिष्क के ऊतकों में घुसपैठ करते हैं और रक्त-मस्तिष्क बाधा (BBB) को नुकसान पहुंचाते हैं। इससे मस्तिष्क में वैसोजेनिक सूजन (एडिमा) और दबाव (ICP) बढ़ता है, जिससे दौरे और पक्षाघात का खतरा उत्पन्न होता है।",
        symptoms: [
          "सुबह के समय तेज सिरदर्द और बिना कारण उल्टी होना",
          "अचानक दौरे (दौरा/मिर्गी/फिट्स) पड़ना",
          "शरीर के एक हिस्से में कमजोरी या सुन्नपन (लकवा), बोलने में रुकावट",
          "स्मृति दोष, भ्रम और व्यवहार में अचानक बदलाव"
        ],
        meds: [
          "डेक्सामेथासोन (Dexamethasone 4-8 mg): ट्यूमर के आसपास मस्तिष्क की सूजन और दबाव को तेजी से कम करने के लिए।",
          "लेवेतिरासिटम (Levetiracetam / Keppra 500-1000 mg): दौरे रोकने के लिए प्रथम पंक्ति की सुरक्षित दवा।",
          "टेमोज़ोलोमाइड (Temozolomide / TMZ): विकिरण चिकित्सा के साथ दी जाने वाली ओरल कीमोथेरेपी (Stupp Protocol)।",
          "बेवासीज़ुमाब (Bevacizumab / Avastin): बार-बार लौटने वाले ग्लिओब्लास्टोमा के लिए एंटी-VEGF दवा।"
        ],
        surgery: [
          "इमेज-गाइडेड क्रेनियोटॉमी: न्यूरोनेविगेशन और मैपिंग का उपयोग करके मस्तिष्क को नुकसान पहुंचाए बिना ट्यूमर निकालना।",
          "स्टीरियोटैक्टिक बायोप्सी: गहरे ट्यूमर के ऊतकों की जांच करके आणविक ग्रेडिंग (IDH, MGMT) तय करना।",
          "गामा नाइफ / साइबरनाइफ रेडियोसर्जरी: छोटे ट्यूमर के लिए केंद्रित उच्च-खुराक रेडिएशन।"
        ],
        monitoring: [
          "हर 8 से 12 सप्ताह में कंट्रास्ट एमआरआई (MRI) जांच।",
          "फिजियोथेरेपी, स्पीच थेरेपी और न्यूरो-पुनर्वास सहायता।",
          "पिट्यूटरी और हार्मोनल स्तर की नियमित जांच।"
        ]
      },
      pnm: {
        title: "सीने का निमोनिया",
        modality: "चेस्ट रेडियोग्राफी (X-Ray PA/AP View)",
        badge: "चेस्ट एक्स-रे",
        desc: "सीने का पीए या एपी एक्स-रे। फेफड़ों में जमाव और बलगम की जांच करता है।",
        samplePrompt: "डिजिटल चेस्ट एक्स-रे इमेज अपलोड करें",
        classes: ["निमोनिया संक्रमण", "सामान्य फेफड़े"],
        explanation: "निमोनिया फेफड़ों का एक तीव्र संक्रामक रोग है जिसमें फेफड़ों की छोटी वायु थैलियों (एल्वियोली) में सूजन, बलगम और मवाद भर जाता है। स्ट्रेप्टोकोकस न्यूमोनिया बैक्टीरिया या वायरस फेफड़ों पर हमला करते हैं, जिससे गैसों का आदान-प्रदान बाधित होता है और रक्त में ऑक्सीजन की कमी हो जाती है।",
        symptoms: [
          "पीले, हरे या जंग जैसे रंग के बलगम वाली तेज खांसी",
          "कंपकंपी के साथ तेज बुखार, अत्यधिक पसीना और सीने में चुभने वाला दर्द",
          "सांस फूलना, तेजी से सांस लेना और सांस लेने में थकान",
          "स्टेथोस्कोप से सुनने पर फेफड़ों में खरखराहट की आवाज (Crackles / Rales)"
        ],
        meds: [
          "ओपीडी मरीजों के लिए: एमोक्सिसिलिन-क्लैवुलैनेट (1g) + एज़िथ्रोमाइसिन (500mg) या डॉक्सीसाइक्लिन।",
          "अस्पताल के मरीजों के लिए: IV सेफ्ट्रिएक्सोन (1-2g) + एज़िथ्रोमाइसिन या लेवोफ़्लॉक्सासिन।",
          "गंभीर अस्पताल संक्रमण (MRSA) के लिए: पाइपेरासिलिन-टैज़ोबैक्टम (Zosyn) या वैनकोमाइसिन।",
          "वायरल इन्फ्लूएंजा फ्लू के लिए: ओसल्टामिविर (Tamiflu 75mg) कैप्सूल।"
        ],
        surgery: [
          "थोरैसेन्टेसिस: फेफड़ों के चारों ओर जमे मवाद या पानी को सुई डालकर बाहर निकालना।",
          "चेस्ट ट्यूब ड्रेनेज: फेफड़ों में जमे गंभीर मवाद (Empyema) को बाहर निकालने के लिए पाइप डालना।",
          "हाई-फ्लो ऑक्सीजन या वेंटिलेटर: जब मरीज का ऑक्सीजन स्तर बहुत गिर जाए।"
        ],
        monitoring: [
          "पल्स ऑक्सीमीटर से ऑक्सीजन स्तर (SpO2 94-98%) की निरंतर निगरानी।",
          "उपचार के 6-8 सप्ताह बाद एक्स-रे दोहराना ताकि फेफड़े पूरी तरह साफ होने की पुष्टि हो सके।",
          "निमोनिया और इन्फ्लूएंजा का टीका लगवाना।"
        ]
      },
      oct: {
        title: "रेटिना ओसीटी (आंख के रोग)",
        modality: "ऑप्टिकल कोहेरेंस टोमोग्राफी (B-Scan)",
        badge: "रेटिनल OCT",
        desc: "मैक्युला का उच्च-रिज़ॉल्यूशन क्रॉस-सेक्शनल बी-स्कैन। CNV, DME और ड्रूसन की पहचान करता है।",
        samplePrompt: "मैक्युलर OCT B-स्कैन छवि अपलोड करें",
        classes: ["सीएनवी (CNV)", "डीएमई (DME)", "ड्रूसन (Drusen)", "सामान्य रेटिना"],
        explanation: "ऑप्टिकल कोहेरेंस टोमोग्राफी (OCT) आंख की रेटिना और मैक्युला की सूक्ष्म परतों की जांच करता है। सीएनवी (असामान्य रक्त वाहिकाओं का बनना), डायबिटिक मैक्युलर एडिमा (सूजन) और ड्रूसन (पीले प्रोटीन जमाव) अंधेपन के प्रमुख कारण हैं। समय पर इलाज न मिलने पर केंद्रीय दृष्टि हमेशा के लिए जा सकती है।",
        symptoms: [
          "सीधी रेखाएं टेढ़ी-मेढ़ी दिखना (मेटामॉर्फोप्सिया)",
          "दृष्टि के केंद्र में धुंधलापन या काला धब्बा नजर आना",
          "रंगों की पहचान और रोशनी में बारीक चीजें पढ़ने में कठिनाई",
          "चेहरे पहचानने में परेशानी होना"
        ],
        meds: [
          "एंटी-वीईजीएफ इंजेक्शन: एफ्लिबरसेप्ट (Eylea 2mg), रैनिबिज़ुमाब (Lucentis) या फैरिसिमैब आंख के अंदर लगाकर लीकेज रोकना।",
          "स्टेरॉयड इम्प्लांट: लंबे समय की सूजन के लिए डेक्सामेथासोन इम्प्लांट (Ozurdex 0.7mg)।",
          "AREDS2 एंटीऑक्सीडेंट सप्लीमेंट: विटामिन सी, ई, ल्यूटिन और जिंक गोलियां रोग बढ़ने के खतरे को 25% कम करती हैं।"
        ],
        surgery: [
          "फोटोडायनामिक थेरेपी (PDT): वर्टेपोर्फिन दवा देकर लेजर से असामान्य नसों को बंद करना।",
          "फोकल मैक्युलर लेजर: लीक हो रही सूक्ष्म नसों को लेजर से सील करना।",
          "पार्स प्लाना विट्रेक्टोमी (PPV): रेटिना पर खिंचाव पैदा कर रही झिल्ली को सर्जरी से हटाना।"
        ],
        monitoring: [
          "एम्सलर ग्रिड (Amsler Grid) चार्ट से रोजाना घर पर अपनी दृष्टि की जांच करना।",
          "इंजेक्शन के दौरान हर 4 से 8 सप्ताह में ओसीटी स्कैन की पुनरावृत्ति।",
          "धूम्रपान पूरी तरह बंद करना और धूप का चश्मा (UV400) पहनना।"
        ]
      },
      dia_ret: {
        title: "डायबिटिक रेटिनोपैथी",
        modality: "डिजिटल कलर फंडस फोटोग्राफी",
        badge: "फंडस फोटो",
        desc: "डिजिटल रेटिनल फंडस तस्वीर। माइक्रोएन्यूरिज्म, रक्तस्राव और एक्सयूडेट्स की जांच करता है।",
        samplePrompt: "डिजिटल रेटिनल फंडस फोटो अपलोड करें",
        classes: ["माइल्ड NPDR", "मॉडरेट NPDR", "सामान्य रेटिना", "गंभीर NPDR"],
        explanation: "डायबिटिक रेटिनोपैथी (DR) लंबे समय तक शुगर अनियंत्रित रहने से आंख की रेटिना की रक्त वाहिकाओं को नुकसान पहुंचने की बीमारी है। छोटी नसें बंद हो जाती हैं और खून का रिसाव होने लगता है। उन्नत चरण में कमजोर नई नसें फूटकर आंख में भारी रक्तस्राव और रेटिना अलग (डिटैच) होने से स्थायी अंधापन हो सकता है।",
        symptoms: [
          "शुरुआती चरणों में कोई स्पष्ट लक्षण दिखाई नहीं देते",
          "नजर में उतार-चढ़ाव और चीजें धुंधली दिखाई देना",
          "आंखों के आगे काले धब्बे या मकड़ी के जाले तैरना (फ्लोटर्स)",
          "नजर के किसी हिस्से में अचानक पर्दा या अंधेरा छा जाना"
        ],
        meds: [
          "ब्लड शुगर का सख्त नियंत्रण: HbA1c स्तर को 7.0% से नीचे रखने से रोग की रफ्तार आधी हो जाती है।",
          "ब्लड प्रेशर का नियंत्रण: ब्लड प्रेशर को 130/80 mmHg से कम रखने के लिए एसीई इनहिबिटर्स।",
          "कोलेस्ट्रॉल की दवाएं: एटोरवास्टेटिन (Atorvastatin) रेटिना में चर्बी के जमाव को कम करता है।",
          "एंटी-वीईजीएफ इंजेक्शन: रेटिना के केंद्र में सूजन होने पर आंख में एफ्लिबरसेप्ट का इंजेक्शन।"
        ],
        surgery: [
          "पैन-रेटिनल फोटोकोआग्यूलेशन (PRP लेजर): कमजोर नसों को खत्म करने और रक्तस्राव रोकने के लिए लेजर उपचार।",
          "फोकल लेजर: लीक कर रही छोटी रक्त वाहिकाओं को बंद करना।",
          "विट्रेक्टोमी सर्जरी (PPV): आंख के अंदर भरे खून को निकालना और रेटिना को अपनी जगह चिपकाना।"
        ],
        monitoring: [
          "नियमित पुतली फैलाकर रेटिना जांच: शुरुआती (साल में एक बार), मध्यम (6 महीने में), गंभीर (2-3 महीने में)।",
          "किडनी की जांच: पेशाब में प्रोटीन (एल्ब्यूमिन) की जांच (आंख और किडनी की नसें एक साथ खराब होती हैं)।",
          "सक्रिय रक्तस्राव होने पर भारी वजन उठाने या झुकने वाले व्यायाम से बचना।"
        ]
      },
      breast: {
        title: "स्तन कैंसर आईडीसी जांच",
        modality: "हिस्टोपैथोलॉजी बायोप्सी (H&E स्टेन)",
        badge: "बायोप्सी स्लाइड",
        desc: "एचएंडई बायोप्सी स्लाइड पैच। इनवेसिव डक्टल कार्सिनोमा की पहचान करता है।",
        samplePrompt: "हिस्टोपैथोलॉजी बायोप्सी छवि अपलोड करें",
        classes: ["इनवेसिव डक्टल कार्सिनोमा (कैंसर)", "सामान्य ऊतक"],
        explanation: "इनवेसिव डक्टल कार्सिनोमा (IDC) स्तन कैंसर का सबसे आम प्रकार है (लगभग 80% मामले)। दूध की नलिकाओं से शुरू होने वाली कैंसर कोशिकाएं नलिका की दीवार तोड़कर स्तन की वसा और मांसपेशियों में फैल जाती हैं। ये कोशिकाएं बगल की लिम्फ ग्रंथियों और रक्त के जरिए शरीर के अन्य अंगों में भी फैल सकती हैं।",
        symptoms: [
          "स्तन में बिना दर्द वाली, कठोर, अनियमित आकार की गांठ",
          "स्तन की त्वचा का अंदर खिंचना या संतरे के छिलके जैसा होना (Peau d'orange)",
          "निप्पल का अंदर मुड़ जाना या निप्पल से खून जैसा स्राव आना",
          "बगल (कांख) में लिम्फ नोड्स में गांठ महसूस होना"
        ],
        meds: [
          "हार्मोन थेरेपी (ER+/PR+ के लिए): टैमोक्सीफेन (Tamoxifen 20mg) या लेट्रोज़ोल / एनास्ट्रोज़ोल गोलियां।",
          "टार्गेटेड थेरेपी (HER2+ के लिए): ट्रैस्टुजुमाब (Herceptin) और पर्टुजुमाब (Perjeta)।",
          "कीमोथेरेपी: सर्जरी से पहले या बाद में दी जाने वाली एसी-टी (AC-T) कीमोथेरेपी।",
          "इम्यूनोथेरेपी: ट्रिपल-नेगेटिव कैंसर के लिए पेम्ब्रोलिज़ुमाब (Keytruda)।"
        ],
        surgery: [
          "लंपेक्टॉमी (स्तन संरक्षण सर्जरी): केवल ट्यूमर और उसके आसपास के थोड़े से हिस्से को निकालना।",
          "सेंटिनल लिम्फ नोड बायोप्सी (SLNB): यह जांचना कि क्या कैंसर बगल की ग्रंथियों में फैला है।",
          "मास्टेक्टॉमी: यदि ट्यूमर बड़ा हो तो पूरे स्तन को निकालना और साथ में नया स्तन बनाने की सर्जरी।"
        ],
        monitoring: [
          "लंपेक्टॉमी के बाद कैंसर दोबारा न लौटे इसके लिए रेडिएशन थेरेपी।",
          "हर साल मैमोग्राफी और जरूरत पड़ने पर एमआरआई (MRI) जांच।",
          "हार्मोन की दवाओं के दौरान हड्डियों की मजबूती की जांच (DEXA स्कैन)।"
        ]
      },
      mal: {
        title: "मलेरिया परजीवी रक्त जांच",
        modality: "पेरिफेरल ब्लड स्मीयर (Giemsa स्टेन)",
        badge: "ब्लड स्मीयर",
        desc: "गीम्सा-स्टेन्ड ब्लड स्मीयर माइक्रोस्कोप छवि। प्लाज्मोडियम परजीवी की पहचान करता है।",
        samplePrompt: "ब्लड स्मीयर माइक्रोस्कोप छवि अपलोड करें",
        classes: ["मलेरिया संक्रमित कोशिका", "सामान्य लाल रक्त कोशिका"],
        explanation: "मलेरिया मादा एनाफिलीज मच्छर के काटने से फैलने वाला प्लाज्मोडियम (P. falciparum, P. vivax) परजीवी संक्रमण है। ये परजीवी पहले लिवर में बढ़ते हैं और फिर लाल रक्त कोशिकाओं (RBC) में घुसकर उन्हें फोड़ देते हैं। फाल्सीपेरम मलेरिया दिमाग की नसों को जाम करके दिमागी मलेरिया, भारी एनीमिया और गुर्दे की विफलता का कारण बन सकता है।",
        symptoms: [
          "तेज कंपकंपी के साथ भीषण ठंड, उसके बाद 104°F तक तेज बुखार और अत्यधिक पसीना आना",
          "गंभीर सिरदर्द, पूरे शरीर और जोड़ों में दर्द, उल्टी और कमजोरी",
          "पीलिया (आंखों में पीलापन), खून की कमी और तिल्ली का बढ़ना",
          "गंभीर स्थिति में: बेहोशी, दौरे पड़ना और काला पेशाब आना (ब्लैकवाटर फीवर)"
        ],
        meds: [
          "प्रथम पंक्ति की ACT दवा: आर्टेमेथर-ल्यूमेफेंट्रिन (Coartem: 3 दिन का कोर्स) या आर्टेसुनेट-एमोडियाक्वीन।",
          "मलेरिया दोबारा न लौटने के लिए: क्लोरोक्वीन के साथ प्राइमाक्वीन (Primaquine: 14 दिन - G6PD जांच आवश्यक)।",
          "गंभीर मलेरिया के लिए: तुरंत IV आर्टेसुनेट (Artesunate 2.4 mg/kg) का इंजेक्शन शुरू करना।",
          "बुखार के लिए पैरासिटामोल (10-15 mg/kg); प्लेटलेट्स कम होने के कारण एस्पिरिन/आइबुप्रोफेन बिल्कुल न लें।"
        ],
        surgery: [
          "आईसीयू (ICU) आपातकालीन निगरानी: दिमागी मलेरिया या सांस फूलने पर वेंटिलेटर और शुगर की निरंतर जांच।",
          "आपातकालीन खून चढ़ाना (Blood Transfusion): यदि हीमोग्लोबिन 7 g/dL से कम हो जाए।",
          "डायलिसिस थेरेपी: यदि मलेरिया के कारण गुर्दे (किडनी) काम करना बंद कर दें।"
        ],
        monitoring: [
          "परजीवी पूरी तरह खत्म होने तक हर 12-24 घंटे में खून की जांच (स्लाइड टेस्ट)।",
          "हर 4-6 घंटे में ब्लड शुगर की जांच (शुगर अचानक गिरने से बचाने के लिए)।",
          "कीटनाशक युक्त मच्छरदानी (LLINs) का उपयोग और यात्रा के दौरान बचाव की गोलियां लेना।"
        ]
      },
      parkinson: {
        title: "पार्किंसंस रोग जांच",
        modality: "हैंडराइटिंग और स्पाइरल ड्राइंग टेस्ट",
        badge: "ड्राइंग टेस्ट",
        desc: "अनैच्छिक कंपन, रेखाओं की अनियमितता और माइक्रोग्राफिया लक्षणों का डिजिटल विश्लेषण।",
        samplePrompt: "स्पाइरल या वेव ड्राइंग टेस्ट की तस्वीर अपलोड करें",
        classes: ["पार्किंसंस के लक्षण मिले", "सामान्य स्वस्थ ड्राइंग"],
        explanation: "पार्किंसंस रोग मस्तिष्क के सब्सटेंशिया निग्रा में डोपामाइन उत्पन्न करने वाली तंत्रिका कोशिकाओं के नष्ट होने से होने वाला एक न्यूरोडीजेनेरेटिव विकार है। इसके मुख्य लक्षणों में विश्राम के समय हाथ का कांपना (कंपन), अंगों में अकड़न (रिजिडिटी), धीमी गति (ब्रैडीकिनेसिया) और संतुलन बिगड़ना शामिल हैं। डिजिटल ड्राइंग एनालिसिस मोटर कौशल की सूक्ष्म अनियमितताओं को सटीकता से पकड़ता है।",
        symptoms: [
          "हाथ या उंगलियों में विश्राम के समय अनैच्छिक कंपन (पिल-रोलिंग ट्रेमर)",
          "रोजमर्रा के कामों में अत्यधिक धीमापन और चलने-फिरने में रुकावट",
          "हाथ-पैरों में मांसपेशियों की जकड़न और दर्द",
          "माइक्रोग्राफिया (लिखते समय अक्षरों का अत्यधिक छोटा और विकृत हो जाना)"
        ],
        meds: [
          "लेवोडोपा-कार्बिडोपा (Sinemet): डोपामाइन की कमी को पूरा करने वाली प्राथमिक और सबसे प्रभावी दवा।",
          "डोपामाइन एगोनिस्ट (Pramipexole / Ropinirole): शुरुआती उम्र के मरीजों में डोपामाइन रिसेप्टर्स को उत्तेजित करने के लिए।",
          "MAO-B इनहिबिटर्स (Rasagiline 1 mg): डोपामाइन को मस्तिष्क में टूटने से बचाने के लिए।",
          "COMT इनहिबिटर्स (Entacapone): लेवोडोपा के असर को लंबे समय तक बनाए रखने के लिए।"
        ],
        surgery: [
          "डीप ब्रेन स्टिमुलेशन (DBS): मस्तिष्क में इलेक्ट्रोड लगाकर कंपन को नियंत्रित करने वाली सर्जरी।",
          "एमआर-गाइडेड फोकस्ड अल्ट्रासाउंड (MRgFUS): बिना चीरे के अत्यधिक कंपन वाले हिस्से को अल्ट्रासाउंड से ठीक करना।",
          "डुओडोपा आंतों का जेल: लगातार पंप द्वारा आंत में सीधे दवा पहुंचाना।"
        ],
        monitoring: [
          "हर 3-6 महीने में न्यूरोलॉजिस्ट से UPDRS मोटर परीक्षण और फॉलो-अप।",
          "LSVT BIG फिजियोथेरेपी और मांसपेशियों के संतुलन के लिए नियमित अभ्यास।",
          "आवाज और निगलने की क्षमता की निगरानी (LSVT LOUD) ताकि भोजन सांस की नली में न जाए।"
        ]
      },
      alzheimer: {
        title: "अल्जाइमर और डिमेंशिया जांच",
        modality: "मस्तिष्क एमआरआई (न्यूरोडीजेनेरेटिव स्कैन)",
        badge: "डिमेंशिया MRI",
        desc: "हिप्पोकैम्पस में सिकुड़न और 4 चरणों के अल्जाइमर डिमेंशिया का विस्तृत न्यूरोलॉजिकल विश्लेषण।",
        samplePrompt: "डिमेंशिया जांच के लिए मस्तिष्क का अक्षीय एमआरआई स्कैन अपलोड करें",
        classes: ["हल्का डिमेंशिया", "मध्यम डिमेंशिया", "सामान्य मस्तिष्क", "अति-हल्का डिमेंशिया"],
        explanation: "अल्जाइमर रोग डिमेंशिया (स्मृति लोप) का सबसे आम कारण है (60-70% मामले)। मस्तिष्क में अमाइलॉइड-बीटा प्लाक और टाऊ प्रोटीन के असामान्य जमाव से तंत्रिका कनेक्शन नष्ट होने लगते हैं। सबसे पहले याददाश्त को नियंत्रित करने वाला हिप्पोकैम्पस सिकुड़ता है, जिसके बाद धीरे-धीरे पूरा मस्तिष्क प्रभावित हो जाता है।",
        symptoms: [
          "हाल ही की बातें, नाम, तारीखें और जरूरी बातचीत भूल जाना",
          "परिचित रास्तों पर भटक जाना और समय/स्थान का भ्रम होना",
          "बातचीत करते समय सही शब्द ढूंढने में अत्यधिक कठिनाई होना",
          "मूड में बदलाव, भ्रम, अविश्वास और रोजमर्रा के कार्यों में अरुचि"
        ],
        meds: [
          "कोलिनस्टरेज़ इनहिबिटर्स (Donepezil 5-10 mg, Rivastigmine): स्मृति ह्रास की गति को धीमा करने के लिए।",
          "मेमेंटाइन (Memantine 10-20 mg): मध्यम से गंभीर अल्जाइमर में मस्तिष्क को विषाक्त ग्लूटामेट से बचाने के लिए।",
          "एंटी-अमाइलॉइड मोनोक्लोनल एंटीबॉडी (Lecanemab / Leqembi): मस्तिष्क से अमाइलॉइड प्रोटीन साफ करने वाली नई दवा।",
          "व्यवहार और डिप्रेशन की दवाएं: चिंता और चिड़चिड़ापन शांत करने के लिए।"
        ],
        surgery: [
          "वीपी शंट (VP Shunt) की जांच: यदि नॉर्मल प्रेशर हाइड्रोसिफैलस (NPH) के लक्षण हों।",
          "रक्त-मस्तिष्क बाधा (BBB) खोलने वाली आधुनिक अल्ट्रासाउंड तकनीक (रिसर्च ट्रायल)।",
          "अंतिम चरण में पोषण के लिए गैस्ट्रोस्टॉमी (PEG Tube) की आवश्यकता।"
        ],
        monitoring: [
          "हर 6 महीने में MMSE और MoCA संज्ञानात्मक (मेमोरी) टेस्ट कराना।",
          "मस्तिष्क के हिप्पोकैम्पस का वॉल्यूमेट्रिक एमआरआई स्कैन कराना।",
          "माइंड डाइट (MIND Diet), पहेलियां सुलझाना और सामाजिक रूप से सक्रिय रहना।"
        ]
      },
      stroke: {
        title: "ब्रेन स्ट्रोक (लकवा) जांच",
        modality: "मस्तिष्क सीटी / एमआरआई स्कैन",
        badge: "स्ट्रोक स्कैन",
        desc: "मस्तिष्क की नसों में थक्का (इस्कीमिक) या रक्तस्राव (हेमरेजिक स्ट्रोक) की आपातकालीन पहचान।",
        samplePrompt: "मस्तिष्क का सीटी या डिफ्यूजन एमआरआई स्कैन अपलोड करें",
        classes: ["स्ट्रोक क्षति के लक्षण मिले", "सामान्य मस्तिष्क सीटी स्कैन"],
        explanation: "ब्रेन स्ट्रोक एक अत्यंत गंभीर आपातकालीन स्थिति है। यह तब होता है जब मस्तिष्क को रक्त पहुंचाने वाली नस में खून का थक्का जम जाए (इस्कीमिक स्ट्रोक ~87%) या कोई नस फट जाए (हेमरेजिक स्ट्रोक ~13%)। ऑक्सीजन न मिलने से प्रति मिनट लाखों ब्रेन सेल्स मरने लगते हैं (Time is Brain)।",
        symptoms: [
          "चेहरे का एक तरफ झुक जाना या टेढ़ा हो जाना (Face Drooping)",
          "शरीर के एक हिस्से (हाथ या पैर) में अचानक कमजोरी या सुन्नपन (Arm Weakness)",
          "बोलने में भारीपन, तुतलाना या बात समझ न पाना (Speech Difficulty)",
          "अचानक अत्यधिक भयंकर सिरदर्द, चक्कर आना और आंखों के आगे अंधेरा छाना"
        ],
        meds: [
          "क्लॉट-बस्टिंग इंजेक्शन: लक्षण शुरू होने के 4.5 घंटे के भीतर IV Alteplase (rtPA) या Tenecteplase देना अनिवार्य।",
          "एंटीप्लेटलेट दवाएं: नए थक्के बनने से रोकने के लिए एस्पिरिन और क्लोपिडोग्रेल (DAPT)।",
          "हाई-डोज स्टेटिन: एटरवास्टेटिन (Atorvastatin 80 mg) नसों की सूजन कम करने और उन्हें स्थिर रखने के लिए।",
          "ब्लड प्रेशर नियंत्रण: इंजेक्शन लैबेटालोल से तुरंत सुरक्षित सीमा में बीपी लाना।"
        ],
        surgery: [
          "मैकेनिकल थ्रोम्बेक्टमी (EVT): कैथेटर डालकर मस्तिष्क की बड़ी नस से सीधे थक्का बाहर निकालना (24 घंटे के भीतर)।",
          "डिकम्प्रेसिव हेमीक्रैनिएक्टॉमी: मस्तिष्क में भारी सूजन और दबाव जानलेवा होने पर खोपड़ी की हड्डी खोलना।",
          "हेमेटोमा निकासी: बड़े रक्तस्राव के थक्के को सर्जरी द्वारा निकालकर दबाव कम करना।"
        ],
        monitoring: [
          "कम से कम 72 घंटे तक स्ट्रोक आईसीयू में हृदय गति और दिल की धड़कन (ECG) की निरंतर निगरानी।",
          "गर्दन की कैरोटिड नसों की डॉपलर अल्ट्रासाउंड जांच और सीटी एंजियोग्राफी (CTA)।",
          "24-48 घंटे के भीतर फिजियोथेरेपी, स्पीच थेरेपी और निगलने का पुनर्वास शुरू करना।"
        ]
      },
      tb: {
        title: "तपेदिक (टीबी) का पता लगाना",
        modality: "छाती का एक्स-रे (Chest X-Ray PA View)",
        badge: "टीबी चेस्ट एक्स-रे",
        desc: "माइकोबैक्टीरियम ट्यूबरकुलोसिस संक्रमण और फेफड़ों के घावों का मूल्यांकन करने वाला छाती का एक्स-रे।",
        samplePrompt: "छाती का एक्स-रे स्कैन अपलोड करें (PNG/JPG)",
        classes: ["सक्रिय फुफ्फुसीय टीबी (Active TB)", "सामान्य स्वस्थ फेफड़े"],
        explanation: "फुफ्फुसीय तपेदिक (टीबी) माइकोबैक्टीरियम ट्यूबरकुलोसिस के कारण होने वाला एक संक्रामक रोग है। यह फेफड़ों में कैविटेशन और संक्रामक घाव उत्पन्न करता है।",
        symptoms: [
          "2-3 सप्ताह से अधिक समय तक लगातार रहने वाली खांसी",
          "खांसी में खून आना (हेमोप्टाइसिस)",
          "रात में अत्यधिक पसीना आना और हल्का बुखार",
          "अचानक वजन कम होना और अत्यधिक कमजोरी"
        ],
        meds: [
          "प्रथम चरण (2 महीने): रिफैम्पिसिन (10 mg/kg), आइसोनियाज़िड (5 mg/kg), पाइराज़िनामाइड और एथमब्यूटोल की दैनिक खुराक।",
          "निरंतरता चरण (4 महीने): रिफैम्पिसिन और आइसोनियाज़िड का 6 महीने का डॉट्स (DOTS) कोर्स।",
          "एमडीआर-टीबी (MDR-TB): बेडाक्विलिन, लिनेज़ोलिड, क्लोफज़िमाइन और लेवोफ़्लॉक्सासिन आधारित विशेष चिकित्सा।",
          "सहायक कॉर्टिकोस्टेरॉइड थेरेपी: ट्यूबरकुलस पेरिकार्डिटिस या मैनिंजाइटिस के लिए डेक्सामेथासोन।"
        ],
        surgery: [
          "प्लूरल डिकॉर्टिकेशन: गंभीर संक्रामक द्रव के लिए थोरैकोस्कोपिक सर्जरी।",
          "ब्रोंकोस्कोपी और बायोप्सी: सटीक जीन-एक्सपर्ट (GeneXpert MTB/RIF) जांच के लिए।",
          "लोबेक्टॉमी: फेफड़े के अत्यधिक क्षतिग्रस्त हिस्से को हटाने की सर्जरी।"
        ],
        monitoring: [
          "मासिक बलगम (Sputum AFB) और कल्चर परीक्षण।",
          "यकृत क्रिया परीक्षण (LFT) की हर 2-4 सप्ताह में नियमित निगरानी।",
          "संक्रमण रोकथाम के लिए एन95 मास्क और नेगेटिव-प्रेशर आइसोलेशन।"
        ]
      },
      pancreatic_cancer: {
        title: "अग्नाशय कैंसर स्टेजिंग (Pancreatic Cancer)",
        modality: "पेट का कंट्रास्ट सीटी स्कैन (Abdominal CT)",
        badge: "एब्डॉमिनल सीटी",
        desc: "अग्नाशय के ट्यूमर और संवहनी फैलाव का मूल्यांकन करने वाला कंट्रास्ट सीटी स्कैन।",
        samplePrompt: "पेट का कंट्रास्ट सीटी स्कैन अपलोड करें (PNG/JPG)",
        classes: ["स्टेज I", "स्टेज II", "स्टेज III", "स्टेज IV", "सामान्य अग्नाशय"],
        explanation: "अग्नाशय डक्टल एडेनोकार्सिनोमा (PDAC) एक आक्रामक कैंसर है। यह प्रारंभिक चरण में रक्त वाहिकाओं पर दबाव डालकर जटिलताएं पैदा करता है।",
        symptoms: [
          "बिना दर्द वाला पीलिया (Jaundice), त्वचा में खुजली और गहरा पेशाब",
          "पेट के ऊपरी हिस्से में दर्द जो पीठ की ओर फैलता है",
          "अचानक अत्यधिक वजन घटना और भूख न लगना",
          "हाल ही में विकसित असामान्य मधुमेह (Diabetes)"
        ],
        meds: [
          "FOLFIRINOX कीमोथेरेपी: ऑक्सिप्लेटिन, इरिनोटेकेन, ल्यूकोवोरिन और फ्लूरोरासिल का संयोजन।",
          "जेमसाइटैबिन + नैब-पैक्लिटैक्सेल: उन्नत अग्नाशय कैंसर के लिए प्रथम पंक्ति की चिकित्सा।",
          "लक्षित PARP इनहिबिटर: BRCA म्यूटेशन वाले रोगियों के लिए ओलापारिब (Olaparib 300 mg BD)।",
          "अग्नाशय एंजाइम रिप्लेसमेंट थेरेपी (PERT): पाचन सुधारने के लिए क्रिएन (Creon) दवाएं।"
        ],
        surgery: [
          "व्हिपल प्रक्रिया (Whipple Procedure): अग्नाशय के सिर, ग्रहणी और पित्ताशय का सर्जिकल निष्कासन।",
          "डिस्टल पैनक्रिएटेक्टॉमी: अग्नाशय के शरीर या पूंछ के ट्यूमर के लिए सर्जरी।",
          "पित्त नली स्टेंटिंग: पीलिया से राहत पाने के लिए एंडोस्कोपिक मेटल स्टेंटिंग।"
        ],
        monitoring: [
          "सीरम CA 19-9 ट्यूमर मार्कर की हर 2-3 महीने में निगरानी।",
          "हर 8-12 सप्ताह में हाई-रेजोल्यूशन एब्डॉमिनल सीटी / एमआरआई।",
          "असहनीय दर्द नियंत्रण के लिए सीलिएक प्लेक्सस न्यूरोलिसिस।"
        ]
      },
      lung_cancer: {
        title: "फेफड़ों के कैंसर का पता लगाना (Lung Cancer)",
        modality: "छाती का हाई-रेजोल्यूशन सीटी स्कैन (Chest CT)",
        badge: "चेस्ट सीटी",
        desc: "फेफड़ों के नोड्यूल और घातक ट्यूमर का मूल्यांकन करने वाला अक्षीय छाती सीटी स्कैन।",
        samplePrompt: "छाती का सीटी स्कैन अपलोड करें (PNG/JPG)",
        classes: ["घातक फेफड़ों का कैंसर (Carcinoma)", "सामान्य फेफड़े का सीटी"],
        explanation: "प्राथमिक फेफड़ों का कैंसर (NSCLC और SCLC) फेफड़ों के ऊतकों में असामान्य कोशिका वृद्धि के कारण होता है, जो आसपास के अंगों में तेजी से फैल सकता है।",
        symptoms: [
          "लगातार बिगड़ने वाली पुरानी खांसी या खांसी के पैटर्न में बदलाव",
          "बलगम में खून आना (हेमोप्टाइसिस) और सीने में दर्द",
          "सांस लेने में अत्यधिक तकलीफ या घरघराहट",
          "आवाज बैठना या चेहरे और गर्दन में सूजन (SVC सिंड्रोम)"
        ],
        meds: [
          "लक्षित चिकित्सा (Targeted Therapy): EGFR म्यूटेशन के लिए ओसिमर्टिनिब (Osimertinib 80 mg) और ALK के लिए अलेक्टिनिब।",
          "इम्यूनोथेरेपी: पेम्ब्रोलिज़ुमाब (Keytruda 200 mg) चेकपॉइंट इनहिबिटर।",
          "प्लैटिनम-आधारित कीमोथेरेपी: सिस्प्लैटिन या कार्बोप्लाटिन के साथ पेमेट्रेक्सेड।",
          "एंटी-एंजियोजेनिक एंटीबॉडी: रक्त वाहिकाओं के विकास को रोकने के लिए बेवाकिज़ुमाब (Avastin)।"
        ],
        surgery: [
          "VATS लोबेक्टॉमी: फेफड़े के प्रभावित हिस्से को न्यूनतम चीरे द्वारा निकालने की सर्जरी।",
          "स्टीरियोटैक्टिक बॉडी रेडियोथेरेपी (SBRT / SABR): सटीक और केंद्रित रेडिएशन थेरेपी।",
          "एंडोब्रोंकियल स्टेंटिंग: अवरुद्ध श्वासनली को खोलने के लिए ब्रोंकोस्कोपिक प्रक्रिया।"
        ],
        monitoring: [
          "उपचार के बाद हर 3-6 महीने में हाई-रेजोल्यूशन चेस्ट सीटी स्कैन।",
          "धूम्रपान का पूर्ण त्याग और श्वास पुनर्वास।",
          "फेफड़ों की क्षमता बढ़ाने के लिए पल्मोनरी रिहैबिलिटेशन।"
        ]
      },
      liver_tumor: {
        title: "लिवर ट्यूमर का पता लगाना (Liver Tumor / LiTS)",
        modality: "पेट का कंट्रास्ट-एन्हांस्ड सीटी स्कैन (Liver CT)",
        badge: "लिवर सीटी",
        desc: "हेपेटोसेलुलर कार्सिनोमा (HCC) और यकृत के घावों का मूल्यांकन करने वाला सीटी स्कैन।",
        samplePrompt: "पेट का कंट्रास्ट सीटी स्कैन अपलोड करें (PNG/JPG)",
        classes: ["लिवर ट्यूमर (Neoplasm)", "सामान्य यकृत ऊतक"],
        explanation: "हेपेटोसेलुलर कार्सिनोमा (HCC) प्राथमिक यकृत कैंसर है, जो सिरोसिस, हेपेटाइटिस बी/सी या फैटी लिवर की पृष्ठभूमि में विकसित होता है। धमनी चरण में हाइपर-एन्हांसमेंट इसका प्रमुख लक्षण है।",
        symptoms: [
          "पेट के ऊपरी दाहिने हिस्से में भारीपन, हल्का दर्द या यकृत का बढ़ना",
          "क्रोनिक लिवर रोग में अचानक पीलिया या पेट में पानी (Ascites) भरना",
          "अत्यधिक कमजोरी, भूख न लगना और वजन कम होना",
          "त्वचा पर मकड़ी के जाले जैसी नसें दिखना (Spider Angioma)"
        ],
        meds: [
          "प्रथम पंक्ति इम्यूनोथेरेपी: एटेज़ोलिज़ुमाब (1200 mg) + बेवाकिज़ुमाब (15 mg/kg) IV (IMbrave150 प्रोटोकॉल)।",
          "दोहरे चेकपॉइंट इनहिबिटर: डुरवालुमाब और ट्रेमलिमुमाब।",
          "टायरोसिन किनेज इनहिबिटर: सोराफेनिब (400 mg) या लेन्वाटिनिब (8-12 mg) की दैनिक खुराक।",
          "एंटीवायरल थेरेपी: हेपेटाइटिस बी के लिए एंटेकाविर या टेनोफोविर।"
        ],
        surgery: [
          "लिवर प्रत्यारोपण (Orthotopic Liver Transplant): मिलान मानदंडों के तहत उपचारात्मक यकृत प्रत्यारोपण।",
          "आंशिक हेपेटेक्टॉमी: ट्यूमर वाले हिस्से को सुरक्षित रूप से निकालने की सर्जरी।",
          "टीएसीई (TACE): कैथेटर द्वारा ट्यूमर की रक्त आपूर्ति बंद करके सीधे कीमोथेरेपी देना।",
          "रेडियोफ्रीक्वेंसी एब्लेशन (RFA / MWA): गर्मी द्वारा 3 सेमी से छोटे ट्यूमर को नष्ट करना।"
        ],
        monitoring: [
          "हर 3-6 महीने में सीरम अल्फा-फेटोप्रोटीन (AFP) ट्यूमर मार्कर की जांच।",
          "नियमित डायनेमिक लिवर एमआरआई / सीटी स्कैन (LI-RADS मानदंड)।",
          "शराब का पूर्ण परहेज और लिवर के लिए सुरक्षित जीवनशैली।"
        ]
      },
      bone_tumor: {
        title: "हड्डी का ट्यूमर और ऑस्टियोसारकोमा (Bone Tumor)",
        modality: "ऑर्थोपेडिक कंकाल एक्स-रे (Bone X-Ray)",
        badge: "हड्डी एक्स-रे",
        desc: "कॉर्टिकल क्षति, पेरीओस्टियल रिएक्शन और ऑस्टियोसारकोमा का मूल्यांकन करने वाला एक्स-रे।",
        samplePrompt: "हड्डी का एक्स-रे स्कैन अपलोड करें (PNG/JPG)",
        classes: ["हड्डी का ट्यूमर (ऑस्टियोसारकोमा)", "सामान्य स्वस्थ हड्डी"],
        explanation: "प्राथमिक घातक हड्डी के ट्यूमर (ऑस्टियोसारकोमा, इविंग सारकोमा) हड्डी बनाने वाली मेसेनकाइमल कोशिकाओं से उत्पन्न होते हैं और तेजी से हड्डियों को नष्ट करते हैं।",
        symptoms: [
          "गहरा हड्डी का दर्द जो रात में या वजन उठाने पर अधिक बढ़ जाता है",
          "जोड़ों या हड्डी के ऊपर बढ़ती हुई सूजन और संवेदनशीलता",
          "मामूली चोट या सामान्य दबाव से भी हड्डी टूटना (पैथोलॉजिकल फ्रैक्चर)",
          "जोड़ों के हिलने-डुलने में कठिनाई और लंगड़ाकर चलना"
        ],
        meds: [
          "MAP कीमोथेरेपी: हाई-डोज़ मेथोट्रेक्सेट, डॉक्सोरूबिसिन और सिस्प्लैटिन का संयोजन।",
          "VDC/IE प्रोटोकॉल: इविंग सारकोमा के लिए विशेष चक्रीय कीमोथेरेपी।",
          "टायरोसिन किनेज इनहिबिटर: रीगोराफेनिब या काबोज़ैंटिनिब।",
          "लक्षित एंटीबॉडी: डेनोसुमाब (Denosumab) हड्डी के विनाश को रोकने के लिए।"
        ],
        surgery: [
          "लिम्ब-साल्वेजिंग सर्जरी: ट्यूमर वाली हड्डी को निकालकर मॉड्यूलर एंडोप्रोस्थेटिक अंग प्रत्यारोपण।",
          "3D-प्रिंटेड टाइटेनियम इम्प्लांट: जटिल पेल्विक या संयुक्त पुनर्निर्माण के लिए।",
          "रोटेशनप्लास्टी या विच्छेदन (Amputation): व्यापक तंत्रिका फैलाव में जीवन रक्षक शल्यक्रिया।"
        ],
        monitoring: [
          "फेफड़ों में मेटास्टेसिस की जांच के लिए हर 3 महीने में हाई-रेजोल्यूशन चेस्ट सीटी।",
          "ऑपरेशन वाले अंग का 3, 6, 12, 18 और 24 महीने में नियमित एक्स-रे और एमआरआई।",
          "गतिशीलता और ताकत वापस पाने के लिए व्यापक मस्कुलोस्केलेटल फिजियोथेरेपी।"
        ]
      },
      spinal_tumor: {
        title: "रीढ़ की हड्डी के ट्यूमर का पता लगाना (Spinal Cord Tumor)",
        modality: "रीढ़ की हड्डी का एमआरआई स्कैन (Spine MRI)",
        badge: "स्पाइन एमआरआई",
        desc: "इंट्रामेडुलरी और एक्स्ट्राड्यूरल रीढ़ के ट्यूमर का मूल्यांकन करने वाला टी1/टी2 एमआरआई स्कैन।",
        samplePrompt: "रीढ़ की हड्डी का एमआरआई स्कैन अपलोड करें (PNG/JPG)",
        classes: ["रीढ़ की हड्डी का ट्यूमर", "सामान्य रीढ़ की हड्डी"],
        explanation: "रीढ़ की हड्डी के ट्यूमर (एपेंडिमोमा, एस्ट्रोसाइटोमा, मेनिनजियोमा) रीढ़ की नसों पर दबाव डालते हैं, जिससे संवेदी-मोटर माइलोपैथी और पक्षाघात का खतरा उत्पन्न होता है।",
        symptoms: [
          "दर्द निवारक दवाओं से ठीक न होने वाला रीढ़ का गंभीर दर्द",
          "पैरों में कमजोरी, सुन्नपन और चलने में लड़खड़ाहट",
          "मूत्राशय या आंत्र नियंत्रण खोना (कॉनस या कौडा इक्विना सिंड्रोम)",
          "हाथ-पैरों में झनझनाहट और सजगता (Reflexes) में परिवर्तन"
        ],
        meds: [
          "हाई-डोज ग्लूकोकोर्टिकोइड्स: रीढ़ की हड्डी की सूजन रोकने के लिए डेक्सामेथासोन (10-16 mg बोलस, फिर 4-8 mg Q6H)।",
          "कीमोथेरेपी: आक्रामक एस्ट्रोसाइटोमा के लिए टेमोज़ोलोमाइड (TMZ) या कार्बोप्लाटिन।",
          "लक्षित मोनोक्लोनल एंटीबॉडी: सूजन कम करने के लिए बेवाकिज़ुमाब (Avastin)।",
          "न्यूरोपैथिक दर्द की दवाएं: प्रीगैबलिन या गैबापेंटिन का नियमित उपयोग।"
        ],
        surgery: [
          "माइक्रोसर्जिकल रिसेक्शन: न्यूरो-मॉनिटरिंग (MEP/SSEP) की सहायता से अधिकतम सुरक्षित सर्जिकल निष्कासन।",
          "ग्रॉस टोटल रिसेक्शन (GTR): एपेंडिमोमा के लिए पूर्ण उपचारात्मक सर्जरी।",
          "स्टीरियोटैक्टिक स्पाइन रेडियोसर्जरी (CyberKnife SBRT): अचूक और केंद्रित रेडिएशन थेरेपी।",
          "स्पाइनल इंस्ट्रुमेंटेड फ्यूजन: सर्जरी के बाद रीढ़ की स्थिरता के लिए पेडीकल स्क्रू और रॉड लगाना।"
        ],
        monitoring: [
          "हर 3-6 महीने में पूरे न्यूरैक्सिस का कंट्रास्ट एमआरआई स्कैन।",
          "हर 3 महीने में मात्रात्मक न्यूरोलॉजिकल मूल्यांकन (ASIA स्कोर)।",
          "व्यापक न्यूरो-स्पाइन पुनर्वास: चलने की क्षमता और मूत्राशय नियंत्रण के लिए फिजियोथेरेपी।"
        ]
      }
    }
  }
};

var currentLang = "en";
try {
  currentLang = localStorage.getItem("preferred_lang") || "en";
} catch (e) {
  currentLang = "en";
}
if (typeof window !== "undefined") {
  window.currentLang = currentLang;
}

function setLanguage(lang) {
  if (!I18N_DATA[lang]) return;
  if (typeof stopTextReader === "function") {
    stopTextReader();
  }
  currentLang = lang;
  if (typeof window !== "undefined") {
    window.currentLang = lang;
  }
  try {
    localStorage.setItem("preferred_lang", lang);
  } catch (e) {
    console.warn("Could not save preferred language", e);
  }

  // Update language selector dropdown / active buttons
  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = lang;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  applyTranslations();
}

function applyTranslations() {
  const t = I18N_DATA[currentLang] || I18N_DATA.en;

  // 1. General UI labels with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (t[key]) {
      const dot = elem.querySelector(".pulse-dot");
      if (dot) {
        elem.innerHTML = `<div class="pulse-dot"></div> ${t[key]}`;
      } else {
        elem.textContent = t[key];
      }
    }
  });

  // 2. Placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      elem.placeholder = t[key];
    }
  });

  // 3. Update strip-pills in checkup.html
  document.querySelectorAll(".strip-pill[data-disease]").forEach(pill => {
    const dKey = pill.getAttribute("data-disease");
    if (dKey === "auto") {
      const sp = pill.querySelector("[data-i18n]");
      if (sp && t.autoDetectModality) sp.textContent = t.autoDetectModality;
      return;
    }
    if (t.diseases && t.diseases[dKey]) {
      const icon = pill.querySelector("span") ? pill.querySelector("span").textContent : "";
      pill.innerHTML = `<span>${icon}</span> ${t.diseases[dKey].badge || t.diseases[dKey].title}`;
    }
  });

  // 4. Update index.html disease quick pills if present
  document.querySelectorAll(".disease-pill[data-disease]").forEach(pill => {
    const dKey = pill.getAttribute("data-disease");
    if (dKey === "auto") {
      pill.innerHTML = `<span>⚡</span> <strong>${t.autoDetectModality || "AI Auto-Detect Modality"}</strong>`;
      return;
    }
    if (t.diseases && t.diseases[dKey]) {
      const icon = pill.querySelector("span") ? pill.querySelector("span").textContent : "";
      pill.innerHTML = `<span>${icon}</span> ${t.diseases[dKey].title}`;
    }
  });

  // 5. Update synced dropdown options in checkup.html
  const selectElem = document.getElementById("id_one");
  if (selectElem && t.diseases) {
    const emojis = {
      auto: "⚡", brain: "🧠", pnm: "🫁", oct: "👁️", dia_ret: "🩺", breast: "🔬",
      mal: "🩸", parkinson: "🌀", alzheimer: "🧩", stroke: "⚡", tb: "🫁",
      pancreatic_cancer: "🔬", lung_cancer: "🫁", liver_tumor: "🩺",
      bone_tumor: "🦴", spinal_tumor: "🧬"
    };
    Array.from(selectElem.options).forEach(opt => {
      const dKey = opt.value;
      if (t.diseases[dKey]) {
        opt.textContent = `${emojis[dKey] || ""} ${t.diseases[dKey].title} (${t.diseases[dKey].badge})`;
      }
    });
  }

  // 6. Update modal pills in disease guide modal
  document.querySelectorAll(".modal-nav-pill").forEach(pill => {
    const dKey = pill.getAttribute("data-modal-disease");
    if (t.diseases && t.diseases[dKey]) {
      const icon = {
        auto: "⚡", brain: "🧠", pnm: "🫁", oct: "👁️", dia_ret: "🩺", breast: "🔬",
        mal: "🩸", parkinson: "🌀", alzheimer: "🧩", stroke: "⚡", tb: "🫁",
        pancreatic_cancer: "🔬", lung_cancer: "🫁", liver_tumor: "🩺",
        bone_tumor: "🦴", spinal_tumor: "🧬"
      }[dKey] || "";
      pill.textContent = `${icon} ${t.diseases[dKey].title}`;
    }
  });

  // 7. Update sample card button labels if present
  document.querySelectorAll(".sample-card-btn").forEach(btn => {
    if (t.testAutoDetectBtn) {
      btn.textContent = t.testAutoDetectBtn;
    }
  });

  // 8. Re-update active disease display if selectDisease / setScannerMode exists
  if (typeof currentDisease !== "undefined" && typeof setScannerMode === "function") {
    if (typeof scannerMode !== "undefined" && scannerMode === "manual") {
      const cfg = (typeof getLocalizedDisease === "function") ? getLocalizedDisease(currentDisease) : null;
      if (cfg) {
        const text = document.getElementById("mode-status-text");
        if (text) text.innerHTML = `<strong>${(currentLang === 'kn' ? 'ಹಸ್ತಚಾಲಿತ ಆಯ್ಕೆ ಸಕ್ರಿಯವಾಗಿದೆ' : (currentLang === 'hi' ? 'मैनुअल चयन सक्रिय है' : 'Manual Entry Active'))} (${cfg.icon || ''} ${cfg.title}):</strong> ${cfg.title}`;
        const guideTitle = document.getElementById("guide-modality-title");
        const guideDesc = document.getElementById("guide-modality-desc");
        const specActive = document.getElementById("spec-active-disease");
        const specModality = document.getElementById("spec-active-modality");
        const dropzonePrompt = document.getElementById("dropzone-prompt");
        if (guideTitle) guideTitle.textContent = `${cfg.icon || ''} ${cfg.title}`;
        if (guideDesc) guideDesc.textContent = cfg.desc;
        if (specActive) specActive.textContent = `${cfg.icon || ''} ${cfg.title}`;
        if (specModality) specModality.textContent = cfg.modality;
        if (dropzonePrompt) dropzonePrompt.textContent = cfg.samplePrompt || dropzonePrompt.textContent;
      }
    }
  }

  // 9. Update reference modal if function exists
  if (typeof populateReferenceModal === "function" && typeof currentDisease !== "undefined") {
    populateReferenceModal(currentDisease);
  }

  // 10. Re-render active diagnostic report if visible and lastReportData is present
  if (typeof lastReportData !== "undefined" && lastReportData && typeof renderReport === "function") {
    const repContainer = document.getElementById("report-container");
    if (repContainer && repContainer.classList.contains("active")) {
      renderReport(lastReportData);
    }
  } else if (typeof currentDisease !== "undefined" && t.diseases && t.diseases[currentDisease]) {
    const d = t.diseases[currentDisease];
    const repExp = document.getElementById("rep-disease-explanation");
    if (repExp) {
      repExp.innerHTML = `<strong>${t.modalPathologyHeading || "Pathological Overview:"}</strong> ${d.explanation}`;
    }
    const listMeds = document.getElementById("protocol-list-meds");
    const listSurgery = document.getElementById("protocol-list-surgery");
    const listMonitoring = document.getElementById("protocol-list-monitoring");
    if (listMeds && d.meds) {
      listMeds.innerHTML = d.meds.map(m => `<li>${m}</li>`).join("");
    }
    if (listSurgery && d.surgery) {
      listSurgery.innerHTML = d.surgery.map(s => `<li>${s}</li>`).join("");
    }
    if (listMonitoring && d.monitoring) {
      listMonitoring.innerHTML = d.monitoring.map(mon => `<li>${mon}</li>`).join("");
    }
  }
}

// Global window exposure
window.setLanguage = setLanguage;
window.applyTranslations = applyTranslations;
window.currentLang = currentLang;
window.I18N_DATA = I18N_DATA;

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Sync buttons to stored currentLang
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = currentLang;

  applyTranslations();
});

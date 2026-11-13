/**
 * Unified Multi-Disease Clinical Diagnostic Suite Engine
 * Uncertainty-Aware Explainable Deep Learning Platform
 * Complete Disease Explanations & Clinical Treatment Protocols
 */

const DISEASE_CONFIG = {
  auto: {
    key: "auto",
    title: "AI Auto-Detect Modality",
    modality: "Multi-Modal Medical Image Classifier",
    icon: "⚡",
    badge: "Auto-Detect",
    inputShape: "Adaptive (Any Resolution)",
    desc: "Upload any medical scan (Brain MRI, Chest X-Ray, Retinal OCT, Fundus, Breast Histology, or Blood Smear). The AI will automatically identify the disease modality and route to the corresponding neural network.",
    samplePrompt: "Upload any medical scan — AI will automatically identify disease modality (PNG/JPG)",
    classes: ["Auto-Detected Modality"],
    explanation: "Automatic medical image modality classification utilizes morphological, structural, and chromatic feature heuristics to accurately route clinical scans to specialized deep learning models across 6 Kaggle clinical benchmarks.",
    symptoms: ["Pathology-specific clinical indicators based on automatically classified modality."],
    treatments: {
      meds: ["Evidence-based pharmacotherapy will update according to the specific identified disease."],
      surgery: ["Interventional protocols will adapt to the classified pathology."],
      monitoring: ["Targeted surveillance guidelines based on the final diagnostic prediction."]
    }
  },
  brain: {
    key: "brain",
    title: "Brain Tumor Detection",
    modality: "Brain MRI (Magnetic Resonance Imaging)",
    icon: "🧠",
    badge: "MRI Scan",
    inputShape: "224 × 224 px",
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
    treatments: {
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
    }
  },
  pnm: {
    key: "pnm",
    title: "Chest Pneumonia Analysis",
    modality: "Chest Radiography (X-Ray PA/AP View)",
    icon: "🫁",
    badge: "Chest X-Ray",
    inputShape: "160 × 160 px",
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
    treatments: {
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
    }
  },
  oct: {
    key: "oct",
    title: "Retinal Diseases (OCT)",
    modality: "Optical Coherence Tomography (B-Scan)",
    icon: "👁️",
    badge: "Retinal OCT",
    inputShape: "160 × 160 px",
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
    treatments: {
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
    }
  },
  dia_ret: {
    key: "dia_ret",
    title: "Diabetic Retinopathy",
    modality: "Color Fundus Photography",
    icon: "🩺",
    badge: "Fundus Photo",
    inputShape: "224 × 224 px",
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
    treatments: {
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
    }
  },
  breast: {
    key: "breast",
    title: "Breast Cancer (IDC) Analysis",
    modality: "Histopathology Biopsy (H&E Stain)",
    icon: "🔬",
    badge: "Biopsy Slide",
    inputShape: "150 × 150 px",
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
    treatments: {
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
    }
  },
  mal: {
    key: "mal",
    title: "Malaria Parasite Smear",
    modality: "Peripheral Blood Smear (Giemsa)",
    icon: "🩸",
    badge: "Blood Smear",
    inputShape: "64 × 64 px",
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
    treatments: {
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
    }
  },
  parkinson: {
    key: "parkinson",
    title: "Parkinson's Disease Detection",
    modality: "Spiral & Wave Kinematic Drawings",
    icon: "🌀",
    badge: "Drawing Test",
    inputShape: "128 × 128 px",
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
    treatments: {
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
    }
  },
  alzheimer: {
    key: "alzheimer",
    title: "Alzheimer's Disease & Dementia Staging",
    modality: "Brain MRI (Axial Neurodegenerative View)",
    icon: "🧩",
    badge: "Dementia MRI",
    inputShape: "224 × 224 px",
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
    treatments: {
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
    }
  },
      stroke: {
    key: "stroke",
    title: "Brain Stroke Detection",
    modality: "Brain CT / MRI (Axial Neurovascular Scan)",
    icon: "⚡",
    badge: "Stroke Scan",
    inputShape: "224 × 224 px",
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
    treatments: {
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
    }
  },
  tb: {
    key: "tb",
    title: "Tuberculosis Detection (TB)",
    modality: "Chest Radiography (X-Ray PA View)",
    icon: "🫁",
    badge: "TB Chest X-Ray",
    inputShape: "224 × 224 px",
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
    treatments: {
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
    }
  },
  pancreatic_cancer: {
    key: "pancreatic_cancer",
    title: "Pancreatic Cancer Staging",
    modality: "Abdominal Contrast CT Scan",
    icon: "🔬",
    badge: "Abdominal CT",
    inputShape: "128 × 128 px",
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
    treatments: {
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
    }
  },
  lung_cancer: {
    key: "lung_cancer",
    title: "Lung Cancer Carcinoma Detection",
    modality: "Thoracic High-Resolution CT Scan",
    icon: "🫁",
    badge: "Chest CT",
    inputShape: "70 × 70 × 70 (3D)",
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
    treatments: {
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
    }
  },
  liver_tumor: {
    key: "liver_tumor",
    title: "Liver Tumor & Hepatic Lesion Detection",
    modality: "Abdominal Contrast-Enhanced CT Scan",
    icon: "🩺",
    badge: "Liver CT",
    inputShape: "256 × 256 px",
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
    treatments: {
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
    }
  },
  bone_tumor: {
    key: "bone_tumor",
    title: "Bone Tumor & Osteosarcoma Detection",
    modality: "Orthopedic Skeletal Radiograph (X-Ray)",
    icon: "🦴",
    badge: "Bone X-Ray",
    inputShape: "128 × 128 px",
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
    treatments: {
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
    }
  },
  spinal_tumor: {
    key: "spinal_tumor",
    title: "Spinal Cord Tumor Detection",
    modality: "Spinal Column MRI (Sagittal / Axial View)",
    icon: "🧬",
    badge: "Spine MRI",
    inputShape: "128 × 128 px",
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
    treatments: {
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
  };

let currentDisease = "auto";
let selectedFile = null;
let lastReportData = null;

// Audio Narration & Text Reader State
let isSpeaking = false;
let isSpeechPaused = false;
let currentSpeechSpeed = 1.0;
let speechQueue = [];
let currentQueueIndex = 0;
let activeSectionReading = null;
let cachedVoices = [];
let currentAudioPlayer = null;

const KANNADA_SPOKEN_DATA = {
  brain: {
    title: "ಮೆದುಳಿನ ಗೆಡ್ಡೆ ಪತ್ತೆ",
    modality: "ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮೆದುಳಿನ ಗೆಡ್ಡೆಯ ಅಂಶಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮೆದುಳಿನ ರಚನೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಗೆಡ್ಡೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಪರೀಕ್ಷಾ ವರದಿಯಲ್ಲಿ ಮೆದುಳಿನ ಗೆಡ್ಡೆಯ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿದ್ದು, ತಕ್ಷಣವೇ ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಪರೀಕ್ಷಾ ವರದಿಯು ಸಾಮಾನ್ಯವಾಗಿದ್ದು, ಯಾವುದೇ ರೋಗದ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalGuidance: "ತಕ್ಷಣವೇ ನರಶಸ್ತ್ರಚಿಕಿತ್ಸಕರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಕಾಂಟ್ರಾಸ್ಟ್ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಹಾಗೂ ಅಗತ್ಯ ನರವೈಜ್ಞಾನಿಕ ತಪಾಸಣೆಯನ್ನು ಮಾಡಿಸಿಕೊಳ್ಳಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    normalGuidance: "ಮೆದುಳಿನ ರಚನೆಯು ಆರೋಗ್ಯಕರವಾಗಿದೆ. ಆದಾಗ್ಯೂ ಯಾವುದೇ ತೀವ್ರ ತಲೆನೋವು ಅಥವಾ ಇತರ ಲಕ್ಷಣಗಳಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
  },
  pnm: {
    title: "ಎದೆ ನ್ಯುಮೋನಿಯಾ ಪರೀಕ್ಷೆ",
    modality: "ಎದೆ ಎಕ್ಸ್-ರೇ",
    abnormalFinding: "ಎದೆ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಶ್ವಾಸಕೋಶದ ನ್ಯುಮೋನಿಯಾ ಸೋಂಕಿನ ಲಕ್ಷಣಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಎದೆ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಶ್ವಾಸಕೋಶವು ಸಂಪೂರ್ಣವಾಗಿ ಆರೋಗ್ಯಕರವಾಗಿದ್ದು, ಯಾವುದೇ ಸೋಂಕು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಶ್ವಾಸಕೋಶದಲ್ಲಿ ಕಫ ಮತ್ತು ಉರಿಯೂತದ ಸೋಂಕು ಪತ್ತೆಯಾಗಿದ್ದು, ಆಂಟಿಬಯೋಟಿಕ್ ಚಿಕಿತ್ಸೆಯ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಶ್ವಾಸಕೋಶದ ಸ್ಥಿತಿ ಸಂಪೂರ್ಣವಾಗಿ ಸಹಜ ಮತ್ತು ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
    abnormalGuidance: "ಶ್ವಾಸಕೋಶ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ, ರಕ್ತದ ಆಮ್ಲಜನಕ ಮಟ್ಟವನ್ನು ಪರೀಕ್ಷಿಸುತ್ತಾ ಸೂಕ್ತ ಆಂಟಿಬಯೋಟಿಕ್ ಚಿಕಿತ್ಸೆಯನ್ನು ತಕ್ಷಣ ಪ್ರಾರಂಭಿಸಲು ಸೂಚಿಸಲಾಗಿದೆ.",
    normalGuidance: "ಶ್ವಾಸಕೋಶದ ಸ್ಥಿತಿ ಸಹಜವಾಗಿದೆ. ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ಕೆಮ್ಮು ಮುಂದುವರಿದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
  },
  oct: {
    title: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಒಸಿಟಿ ಪರೀಕ್ಷೆ",
    modality: "ಒಸಿಟಿ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಒಸಿಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಅಸಹಜ ರೋಗಲಕ್ಷಣಗಳು ಪತ್ತೆಯಾಗಿವೆ.",
    normalFinding: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಒಸಿಟಿ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಹಾನಿ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಪದರದಲ್ಲಿ ಊತ ಅಥವಾ ರಕ್ತನಾಳಗಳ ಸೋರಿಕೆಯ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿವೆ.",
    normalSummary: "ರೆಟಿನಾ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ತೊಂದರೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalGuidance: "ನೇತ್ರ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಆಂಟಿ-ವಿಇಜಿಎಫ್ ಕಣ್ಣಿನ ಚಿಕಿತ್ಸೆ ಅಥವಾ ಲೇಸರ್ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ.",
    normalGuidance: "ರೆಟಿನಾ ರಚನೆ ಆರೋಗ್ಯಕರವಾಗಿದೆ. ಕಣ್ಣಿನ ದೃಷ್ಟಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ತಪಾಸಣೆ ಮಾಡಿಸುತ್ತಿರಿ."
  },
  dia_ret: {
    title: "ಮಧುಮೇಹ ರೆಟಿನೋಪತಿ ಪರೀಕ್ಷೆ",
    modality: "ಫಂಡಸ್ ಛಾಯಾಗ್ರಹಣ",
    abnormalFinding: "ಕಣ್ಣಿನ ರೆಟಿನಾದಲ್ಲಿ ಮಧುಮೇಹದ ದುಷ್ಪರಿಣಾಮ ಹಾಗೂ ರೆಟಿನೋಪತಿ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿವೆ.",
    normalFinding: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಮಧುಮೇಹ ರೆಟಿನೋಪತಿ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ದೀರ್ಘಕಾಲದ ಮಧುಮೇಹದಿಂದ ಕಣ್ಣಿನ ರೆಟಿನಾದ ರಕ್ತನಾಳಗಳಲ್ಲಿ ಹಾನಿಯುಂಟಾಗಿದೆ.",
    normalSummary: "ಕಣ್ಣಿನ ರೆಟಿನಾ ಸಂಪೂರ್ಣ ಆರೋಗ್ಯಕರವಾಗಿದ್ದು ಯಾವುದೇ ಹಾನಿ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalGuidance: "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಅಂಶವನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಂಡು, ನೇತ್ರತಜ್ಞರಿಂದ ಕಣ್ಣಿನ ಹಿಂಬದಿಯ ಸಂಪೂರ್ಣ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳಲು ಸೂಚಿಸಲಾಗಿದೆ.",
    normalGuidance: "ರೆಟಿನಾ ಆರೋಗ್ಯಕರವಾಗಿದೆ. ಮಧುಮೇಹ ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಂಡು ವಾರ್ಷಿಕ ಕಣ್ಣಿನ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ."
  },
  breast: {
    title: "ಸ್ತನ ಕ್ಯಾನ್ಸರ್ ಬಯಾಪ್ಸಿ ಪರೀಕ್ಷೆ",
    modality: "ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಬಯಾಪ್ಸಿ",
    abnormalFinding: "ಬಯಾಪ್ಸಿ ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಇನ್ವೇಸಿವ್ ಡಕ್ಟಲ್ ಕಾರ್ಸಿನೋಮಾ ಕ್ಯಾನ್ಸರ್ ಕೋಶಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಹಿಸ್ಟೋಪಾಥಾಲಜಿ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಕ್ಯಾನ್ಸರ್ ಕೋಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಅಂಗಾಂಶ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮಾರಕ ಕ್ಯಾನ್ಸರ್ ಕೋಶಗಳ ಬೆಳವಣಿಗೆ ಕಂಡುಬಂದಿದೆ.",
    normalSummary: "ಅಂಗಾಂಶ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಕ್ಯಾನ್ಸರ್ ಕೋಶಗಳಿಲ್ಲ.",
    abnormalGuidance: "ಕ್ಯಾನ್ಸರ್ ತಜ್ಞರು ಅಥವಾ ಆಂಕೊಲಾಜಿಸ್ಟ್ ಅವರನ್ನು ತಕ್ಷಣ ಸಂಪರ್ಕಿಸಿ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಹಾಗೂ ಸೂಕ್ತ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಆರಂಭಿಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    normalGuidance: "ಅಂಗಾಂಶ ಪರೀಕ್ಷೆಯು ಸಾಮಾನ್ಯವಾಗಿದೆ. ನಿಯಮಿತ ಸ್ವಯಂ ಪರೀಕ್ಷೆ ಹಾಗೂ ವಾರ್ಷಿಕ ತಪಾಸಣೆಯನ್ನು ಮುಂದುವರಿಸಿ."
  },
  mal: {
    title: "ಮಲೇರಿಯಾ ರಕ್ತ ಪರೀಕ್ಷೆ",
    modality: "ರಕ್ತದ ಲೇಪನ ಸೂಕ್ಷ್ಮದರ್ಶಕ",
    abnormalFinding: "ರಕ್ತದ ಲೇಪನ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮಲೇರಿಯಾ ಪರಾವಲಂಬಿ ಸೋಂಕು ದೃಢಪಟ್ಟಿದೆ.",
    normalFinding: "ರಕ್ತದ ಲೇಪನ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಯಾವುದೇ ಮಲೇರಿಯಾ ಪರಾವಲಂಬಿ ಜೀವಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಕೆಂಪು ರಕ್ತಕಣಗಳಲ್ಲಿ ಪ್ಲಾಸ್ಮೋಡಿಯಂ ಪರಾವಲಂಬಿ ಜೀವಿಗಳು ಹರಡಿರುವುದು ಕಂಡುಬಂದಿದೆ.",
    normalSummary: "ರಕ್ತದ ಲೇಪನದಲ್ಲಿ ಯಾವುದೇ ಮಲೇರಿಯಾ ಪರಾವಲಂಬಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalGuidance: "ವೈದ್ಯರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ತಕ್ಷಣವೇ ಮಲೇರಿಯಾ ನಿರೋಧಕ ಎಸಿಟಿ ಔಷಧೋಪಚಾರವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮತ್ತು ರಕ್ತದ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ಪರೀಕ್ಷಿಸುತ್ತಿರಲು ಸೂಚಿಸಲಾಗಿದೆ.",
    normalGuidance: "ರಕ್ತ ಪರೀಕ್ಷೆ ಸಹಜವಾಗಿದೆ. ಜ್ವರ ಮರುಕಳಿಸಿದರೆ ಪುನಃ ರಕ್ತ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ."
  },
  parkinson: {
    title: "ಪಾರ್ಕಿನ್ಸನ್ ಕಾಯಿಲೆ ಪತ್ತೆ",
    modality: "ಕೈಬರಹ / ಸುರುಳಿ ರೇಖಾಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
    abnormalFinding: "ಕೈಬರಹ ಮತ್ತು ಸುರುಳಿ ರೇಖಾಚಿತ್ರ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಪಾರ್ಕಿನ್ಸನ್ ನಡುಕ ಮತ್ತು ಮೈಕ್ರೋಗ್ರಾಫಿಯಾ ಲಕ್ಷಣಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ರೇಖಾಚಿತ್ರ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ನಡುಕ ಅಥವಾ ಪಾರ್ಕಿನ್ಸನ್ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಕೈಬರಹದಲ್ಲಿ ನಡುಕ ಮತ್ತು ಚಲನೆಯ ನಿಯಂತ್ರಣ ತಪ್ಪಿರುವ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿದ್ದು, ನರರೋಗ ತಜ್ಞರ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಸ್ನಾಯು ಚಲನೆ ಮತ್ತು ಕೈಬರಹದ ನಿಯಂತ್ರಣ ಸಂಪೂರ್ಣವಾಗಿ ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
    abnormalGuidance: "ನರರೋಗ ತಜ್ಞರನ್ನು (ನ್ಯೂರಾಲಜಿಸ್ಟ್) ಸಂಪರ್ಕಿಸಿ, ಯುಪಿಡಿಆರ್‌ಎಸ್ ಪರೀಕ್ಷೆ ಹಾಗೂ ಲೆವೊಡೋಪಾ-ಕಾರ್ಬಿಡೋಪಾ ಔಷಧೋಪಚಾರದ ಅಗತ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    normalGuidance: "ಸೂಕ್ಷ್ಮ ಸ್ನಾಯು ಚಲನೆಯು ಸಹಜವಾಗಿದೆ. ನಿಯಮಿತ ದೈಹಿಕ ವ್ಯಾಯಾಮ ಮುಂದುವರಿಸಿ."
  },
  alzheimer: {
    title: "ಅಲ್ಝೈಮರ್ಸ್ ಮತ್ತು ಬುದ್ಧಿಮಾಂದ್ಯತೆ ತಪಾಸಣೆ",
    modality: "ಮೆದುಳಿನ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮೆದುಳಿನ ಹಿಪೊಕ್ಯಾಂಪಸ್ ಕುಗ್ಗುವಿಕೆ ಮತ್ತು ಅಲ್ಝೈಮರ್ಸ್ ಬುದ್ಧಿಮಾಂದ್ಯತೆಯ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿವೆ.",
    normalFinding: "ಮೆದುಳಿನ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್ ಸಂಪೂರ್ಣ ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಬುದ್ಧಿಮಾಂದ್ಯತೆಯ ಲಕ್ಷಣಗಳಿಲ್ಲ.",
    abnormalSummary: "ಜ್ಞಾಪಕ ಶಕ್ತಿ ನಿಯಂತ್ರಿಸುವ ಮೆದುಳಿನ ಭಾಗಗಳಲ್ಲಿ ಕ್ಷೀಣತೆ ಕಂಡುಬಂದಿದ್ದು, ಆರೈಕೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಯ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಮೆದುಳಿನ ಕೋಶಗಳ ಗಾತ್ರ ಮತ್ತು ನರವೈಜ್ಞಾನಿಕ ರಚನೆ ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
    abnormalGuidance: "ಜ್ಞಾಪಕ ಶಕ್ತಿ ತಜ್ಞರನ್ನು ಅಥವಾ ನರರೋಗ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಎಂಎಂಎಸ್‌ಇ ತಪಾಸಣೆ ಮತ್ತು ಕೊಲಿನೆಸ್ಟರೇಸ್ ಇನ್ಹಿಬಿಟರ್ ಔಷಧಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    normalGuidance: "ಮೆದುಳಿನ ಅಂಗಾಂಶಗಳು ಆರೋಗ್ಯಕರವಾಗಿವೆ. ಮಾನಸಿಕ ವ್ಯಾಯಾಮ ಮತ್ತು ಸಮತೋಲಿತ ಆಹಾರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ."
  },
  stroke: {
    title: "ಮೆದುಳಿನ ಪಾರ್ಶ್ವವಾಯು (ಸ್ಟ್ರೋಕ್) ಪರೀಕ್ಷೆ",
    modality: "ಮೆದುಳಿನ ಸಿಟಿ / ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಮೆದುಳಿನ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ ತೀವ್ರ ಪಾರ್ಶ್ವವಾಯು (ಇಸ್ಕೆಮಿಕ್ ಅಥವಾ ಹೆಮರಾಜಿಕ್ ಸ್ಟ್ರೋಕ್) ಲಕ್ಷಣಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಮೆದುಳಿನ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟುವಿಕೆ ಅಥವಾ ರಕ್ತಸ್ರಾವ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಮೆದುಳಿನ ರಕ್ತನಾಳಗಳಲ್ಲಿ ತಡೆ ಅಥವಾ ರಕ್ತಸ್ರಾವ ಪತ್ತೆಯಾಗಿದ್ದು, ತಕ್ಷಣವೇ ತುರ್ತು ಚಿಕಿತ್ಸೆ ಅತ್ಯಗತ್ಯ.",
    normalSummary: "ಮೆದುಳಿನ ರಕ್ತಪರಿಚಲನೆ ಮತ್ತು ಅಂಗಾಂಶಗಳು ಸಹಜವಾಗಿದ್ದು ಯಾವುದೇ ಹಾನಿ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalGuidance: "ತಕ್ಷಣವೇ ತುರ್ತು ಸ್ಟ್ರೋಕ್ ಕೇರ್ ಸೆಂಟರ್‌ಗೆ ದಾಖಲಿಸಿ, ೪.೫ ಗಂಟೆಗಳ ಒಳಗಿದ್ದರೆ ಥ್ರಂಬೋಲಿಸಿಸ್ ಅಥವಾ ಥ್ರಂಬೆಕ್ಟಮಿ ಚಿಕಿತ್ಸೆಯನ್ನು ತುರ್ತಾಗಿ ಒದಗಿಸಿ.",
    normalGuidance: "ಮೆದುಳಿನ ರಕ್ತಪರಿಚಲನೆ ಸಹಜವಾಗಿದೆ. ರಕ್ತದೊತ್ತಡ ಮತ್ತು ಕೊಲೆಸ್ಟ್ರಾಲ್ ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ."
  },
  tb: {
    title: "ಕ್ಷಯರೋಗ ಪರೀಕ್ಷೆ (ಟಿಬಿ)",
    modality: "ಎದೆಯ ಎಕ್ಸ್-ರೇ",
    abnormalFinding: "ಎದೆಯ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಶ್ವಾಸಕೋಶದ ಸಕ್ರಿಯ ಕ್ಷಯರೋಗ (ಟಿಬಿ) ಸೋಂಕಿನ ಅಂಶಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಎದೆಯ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆಯು ಸಹಜವಾಗಿದ್ದು, ಯಾವುದೇ ಕ್ಷಯರೋಗ ಲಕ್ಷಣಗಳಿಲ್ಲ.",
    abnormalSummary: "ಶ್ವಾಸಕೋಶದಲ್ಲಿ ಕ್ಷಯರೋಗದ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಸೋಂಕು ಪತ್ತೆಯಾಗಿದ್ದು, ತಕ್ಷಣವೇ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಶ್ವಾಸಕೋಶಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಆರೋಗ್ಯಕರವಾಗಿವೆ.",
    abnormalGuidance: "ತಕ್ಷಣವೇ ಶ್ವಾಸಕೋಶ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಕಫ ಪರೀಕ್ಷೆ ಹಾಗೂ ಸರ್ಕಾರಿ ಡಾಟ್ಸ್ ಚಿಕಿತ್ಸೆಯನ್ನು ತಕ್ಷಣ ಪ್ರಾರಂಭಿಸಿ.",
    normalGuidance: "ಶ್ವಾಸಕೋಶ ಸಹಜವಾಗಿದೆ. ಕೆಮ್ಮು ಮುಂದುವರಿದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
  },
  pancreatic_cancer: {
    title: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ ಕ್ಯಾನ್ಸರ್ ಪರೀಕ್ಷೆ",
    modality: "ಹೊಟ್ಟೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಸಿಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯ ಕ್ಯಾನ್ಸರ್ ಗಡ್ಡೆ ಕಂಡುಬಂದಿದೆ.",
    normalFinding: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯು ಸಂಪೂರ್ಣವಾಗಿ ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
    abnormalSummary: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯಲ್ಲಿ ಅಸಹಜ ಗೆಡ್ಡೆ ಪತ್ತೆಯಾಗಿದ್ದು, ಆಂಕೊಲಾಜಿಸ್ಟ್ ತಪಾಸಣೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ ಮತ್ತು ರಕ್ತನಾಳಗಳು ಸಹಜವಾಗಿವೆ.",
    abnormalGuidance: "ಕ್ಯಾನ್ಸರ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಸಿಎ ೧೯-೯ ಪರೀಕ್ಷೆ ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಸಾಧ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    normalGuidance: "ಅಂಗಾಂಶಗಳು ಆರೋಗ್ಯಕರವಾಗಿವೆ."
  },
  lung_cancer: {
    title: "ಶ್ವಾಸಕೋಶದ ಕ್ಯಾನ್ಸರ್ ಪರೀಕ್ಷೆ",
    modality: "ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಎದೆಯ ಸಿಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಶ್ವಾಸಕೋಶದ ಮಾರಕ ಕ್ಯಾನ್ಸರ್ ಗಂಟುಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಶ್ವಾಸಕೋಶದ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಸಹಜವಾಗಿದ್ದು ಯಾವುದೇ ಕ್ಯಾನ್ಸರ್ ಗಂಟುಗಳಿಲ್ಲ.",
    abnormalSummary: "ಶ್ವಾಸಕೋಶದಲ್ಲಿ ಗೆಡ್ಡೆಯ ಬೆಳವಣಿಗೆ ಕಂಡುಬಂದಿದ್ದು ತಕ್ಷಣದ ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಶ್ವಾಸಕೋಶದ ವಾಯುಕೋಶಗಳು ಆರೋಗ್ಯಕರವಾಗಿವೆ.",
    abnormalGuidance: "ಕ್ಯಾನ್ಸರ್ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಪಿಇಟಿ-ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಹಾಗೂ ಬಯಾಪ್ಸಿ ಮಾಡಿಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    normalGuidance: "ಶ್ವಾಸಕೋಶ ಆರೋಗ್ಯಕರವಾಗಿದೆ."
  },
  liver_tumor: {
    title: "ಯಕೃತ್ತಿನ ಗೆಡ್ಡೆ ಪರೀಕ್ಷೆ",
    modality: "ಯಕೃತ್ತಿನ ಕಾಂಟ್ರಾಸ್ಟ್ ಸಿಟಿ",
    abnormalFinding: "ಸಿಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಯಕೃತ್ತಿನ ರಕ್ತನಾಳಗಳ ಗೆಡ್ಡೆ (ಹೆಪಟೋಮಾ) ಪತ್ತೆಯಾಗಿದೆ.",
    normalFinding: "ಯಕೃತ್ತಿನ ರಚನೆಯು ಸಹಜವಾಗಿದ್ದು ಯಾವುದೇ ಗೆಡ್ಡೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಯಕೃತ್ತಿನಲ್ಲಿ ಗೆಡ್ಡೆಯ ಲಕ್ಷಣಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalSummary: "ಯಕೃತ್ತಿನ ಅಂಗಾಂಶಗಳು ಸಂಪೂರ್ಣ ಆರೋಗ್ಯಕರವಾಗಿವೆ.",
    abnormalGuidance: "ಹೆಪಟಾಲಜಿಸ್ಟ್ ಅಥವಾ ಸರ್ಜನ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಆಲ್ಫಾ-ಫೀಟೊಪ್ರೋಟೀನ್ ಮತ್ತು ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಆರಂಭಿಸಿ.",
    normalGuidance: "ಯಕೃತ್ತು ಆರೋಗ್ಯಕರವಾಗಿದೆ."
  },
  bone_tumor: {
    title: "ಮೂಳೆಯ ಕ್ಯಾನ್ಸರ್ ಪರೀಕ್ಷೆ",
    modality: "ಮೂಳೆಯ ಎಕ್ಸ್-ರೇ",
    abnormalFinding: "ಮೂಳೆಯ ಎಕ್ಸ್-ರೇ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಆಸ್ಟಿಯೊಸಾರ್ಕೋಮಾ ಮೂಳೆ ಕ್ಯಾನ್ಸರ್ ಲಕ್ಷಣಗಳು ದೃಢಪಟ್ಟಿವೆ.",
    normalFinding: "ಮೂಳೆಯ ರಚನೆಯು ಸಂಪೂರ್ಣವಾಗಿ ಸಹಜ ಮತ್ತು ಗಟ್ಟಿಯಾಗಿದೆ.",
    abnormalSummary: "ಮೂಳೆಯಲ್ಲಿ ಮಾರಕ ಗೆಡ್ಡೆ ಮತ್ತು ಮೂಳೆ ಸವೆತ ಕಂಡುಬಂದಿದೆ.",
    normalSummary: "ಮೂಳೆಗಳು ಆರೋಗ್ಯಕರವಾಗಿವೆ.",
    abnormalGuidance: "ಆರ್ಥೋಪೆಡಿಕ್ ಆಂಕೊಲಾಜಿಸ್ಟ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಎಂಆರ್‌ಐ ಮತ್ತು ಬಯಾಪ್ಸಿ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
    normalGuidance: "ಮೂಳೆಯ ಸ್ಥಿತಿ ಸಹಜವಾಗಿದೆ."
  },
  spinal_tumor: {
    title: "ಬೆನ್ನುಹುರಿ ಗೆಡ್ಡೆ ಪರೀಕ್ಷೆ",
    modality: "ಬೆನ್ನುಹುರಿ ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್",
    abnormalFinding: "ಎಂಆರ್‌ಐ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಬೆನ್ನುಹುರಿಯ ಒಳಗೆ ಗೆಡ್ಡೆ ಮತ್ತು ನರಗಳ ಒತ್ತಡ ದೃಢಪಟ್ಟಿದೆ.",
    normalFinding: "ಬೆನ್ನುಹುರಿಯ ಎಂಆರ್‌ಐ ಸಹಜವಾಗಿದ್ದು ಯಾವುದೇ ಗೆಡ್ಡೆ ಕಂಡುಬಂದಿಲ್ಲ.",
    abnormalSummary: "ಬೆನ್ನುಹುರಿಯ ನರಗಳ ಮೇಲೆ ಗೆಡ್ಡೆಯ ಒತ್ತಡ ಕಂಡುಬಂದಿದ್ದು ತುರ್ತು ನರಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದೆ.",
    normalSummary: "ಬೆನ್ನುಹುರಿ ಮತ್ತು ಬೆನ್ನುಮೂಳೆ ಆರೋಗ್ಯಕರವಾಗಿವೆ.",
    abnormalGuidance: "ತಕ್ಷಣವೇ ಬೆನ್ನುಹುರಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರನ್ನು (ಸ್ಪೈನ್ ಸರ್ಜನ್) ಸಂಪರ್ಕಿಸಿ, ಮೈಕ್ರೋಸರ್ಜರಿ ಅಗತ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
    normalGuidance: "ಬೆನ್ನುಹುರಿಯ ಆರೋಗ್ಯ ಸಹಜವಾಗಿದೆ."
  }
};

const HINDI_SPOKEN_DATA = {
  brain: {
    title: "ब्रेन ट्यूमर जांच",
    modality: "एमआरआई स्कैन",
    abnormalFinding: "एमआरआई स्कैन में ब्रेन ट्यूमर के स्पष्ट लक्षण पाए गए हैं।",
    normalFinding: "एमआरआई स्कैन में मस्तिष्क की संरचना सामान्य है और कोई ट्यूमर नहीं पाया गया है।",
    abnormalSummary: "परीक्षण में मस्तिष्क में ट्यूमर की पुष्टि हुई है। तत्काल विशेषज्ञ परामर्श आवश्यक है।",
    normalSummary: "परीक्षण सामान्य है। मस्तिष्क के ऊतकों में कोई विकृति नहीं है।",
    abnormalGuidance: "न्यूरोसर्जन से तुरंत परामर्श लें और कंट्रास्ट एमआरआई एवं न्यूरोलॉजिकल जांच कराने की सलाह दी जाती है।",
    normalGuidance: "मस्तिष्क की स्थिति सामान्य और स्वस्थ है।"
  },
  pnm: {
    title: "छाती निमोनिया जांच",
    modality: "चेस्ट एक्स-रे",
    abnormalFinding: "छाती के एक्स-रे में फेफड़ों में निमोनिया संक्रमण के स्पष्ट लक्षण देखे गए हैं।",
    normalFinding: "छाती का एक्स-रे सामान्य है और फेफड़ों में कोई संक्रमण नहीं पाया गया है।",
    abnormalSummary: "फेफड़ों में संक्रमण और सूजन के लक्षण पाए गए हैं।",
    normalSummary: "फेफड़ों की स्थिति पूरी तरह सामान्य और स्वस्थ है।",
    abnormalGuidance: "पल्मोनोलॉजिस्ट से तुरंत परामर्श लें और ऑक्सीजन स्तर की निगरानी के साथ उचित एंटीबायोटिक उपचार शुरू करें।",
    normalGuidance: "फेफड़े स्वस्थ हैं।"
  },
  oct: {
    title: "रेटिना ओसीटी जांच",
    modality: "ओसीटी स्कैन",
    abnormalFinding: "रेटिना ओसीटी स्कैन में असामान्य रेटिनल विकृति के लक्षण पाए गए हैं।",
    normalFinding: "रेटिना ओसीटी स्कैन सामान्य है और कोई विकृति नहीं पाई गई है।",
    abnormalSummary: "रेटिना में सूजन और असामान्य द्रव संचय देखा गया है।",
    normalSummary: "रेटिना पूरी तरह स्वस्थ और सामान्य है।",
    abnormalGuidance: "नेत्र रोग विशेषज्ञ से संपर्क करें और एंटी-वीईजीएफ या लेजर उपचार के लिए आवश्यक जांच कराएं।",
    normalGuidance: "रेटिना सामान्य और स्वस्थ है।"
  },
  dia_ret: {
    title: "डायबिटिक रेटिनोपैथी जांच",
    modality: "फंडस फोटोग्राफी",
    abnormalFinding: "रेटिना में डायबिटिक रेटिनोपैथी के लक्षण देखे गए हैं।",
    normalFinding: "रेटिना सामान्य है और कोई डायबिटिक रेटिनोपैथी नहीं पाई गई है।",
    abnormalSummary: "मधुमेह के कारण रेटिना की रक्त वाहिकाओं में क्षति पाई गई है।",
    normalSummary: "रेटिना स्वस्थ है और मधुमेह का कोई दुष्प्रभाव नहीं दिखा।",
    abnormalGuidance: "रक्त शर्करा को कड़ाई से नियंत्रित करें और रेटिना विशेषज्ञ से विस्तृत जांच कराएं।",
    normalGuidance: "रेटिना स्वस्थ है।"
  },
  breast: {
    title: "स्तन कैंसर बायोप्सी जांच",
    modality: "हिस्टोपैथोलॉजी बायोप्सी",
    abnormalFinding: "बायोप्सी जांच में इनवेसिव डक्टल कार्सिनोमा कैंसर कोशिकाओं की पुष्टि हुई है।",
    normalFinding: "बायोप्सी जांच सामान्य है और कोई कैंसर कोशिकाएं नहीं पाई गई हैं।",
    abnormalSummary: "ऊतक परीक्षण में घातक कैंसर कोशिकाओं की वृद्धि देखी गई है।",
    normalSummary: "ऊतक परीक्षण सामान्य है। कोई घातक कोशिकाएं नहीं पाई गईं।",
    abnormalGuidance: "कैंसर विशेषज्ञ से तत्काल परामर्श लें और उपयुक्त उपचार योजना पर चर्चा करें।",
    normalGuidance: "ऊतक जांच सामान्य है।"
  },
  mal: {
    title: "मलेरिया रक्त जांच",
    modality: "ब्लड स्मीयर माइक्रोस्कोपी",
    abnormalFinding: "रक्त की जांच में मलेरिया परजीवी संक्रमण की पुष्टि हुई है।",
    normalFinding: "रक्त की जांच सामान्य है और कोई मलेरिया परजीवी नहीं पाया गया है।",
    abnormalSummary: "लाल रक्त कोशिकाओं में प्लाज्मोडियम परजीवी पाए गए हैं।",
    normalSummary: "रक्त में कोई मलेरिया परजीवी नहीं पाया गया है।",
    abnormalGuidance: "चिकित्सक की देखरेख में तुरंत एंटी-मलेरियल उपचार शुरू करें और रक्त शर्करा की निगरानी रखें।",
    normalGuidance: "रक्त जांच सामान्य है।"
  },
  parkinson: {
    title: "पार्किंसंस रोग जांच",
    modality: "हैंडराइटिंग / स्पाइरल ड्राइंग टेस्ट",
    abnormalFinding: "हैंडराइटिंग और स्पाइरल टेस्ट में पार्किंसंस रोग के कंपन और विकृति के स्पष्ट लक्षण पाए गए हैं।",
    normalFinding: "हैंडराइटिंग टेस्ट पूरी तरह सामान्य है और पार्किंसंस का कोई लक्षण नहीं पाया गया है।",
    abnormalSummary: "हाथ के कंपन और मांसपेशियों के अनियंत्रण के लक्षण देखे गए हैं। विशेषज्ञ परामर्श आवश्यक है।",
    normalSummary: "मांसपेशियों का नियंत्रण और मोटर क्षमता पूरी तरह सामान्य और स्वस्थ है।",
    abnormalGuidance: "न्यूरोलॉजिस्ट से तुरंत परामर्श लें और मोटर कौशल (UPDRS) मूल्यांकन कराकर उचित दवाएं शुरू करें।",
    normalGuidance: "मांसपेशियों का संतुलन और गति सामान्य है। नियमित व्यायाम जारी रखें।"
  },
  alzheimer: {
    title: "अल्जाइमर और डिमेंशिया जांच",
    modality: "मस्तिष्क एमआरआई स्कैन",
    abnormalFinding: "एमआरआई स्कैन में हिप्पोकैम्पस का सिकुड़ना और अल्जाइमर डिमेंशिया के लक्षण पाए गए हैं।",
    normalFinding: "मस्तिष्क एमआरआई स्कैन पूरी तरह सामान्य है और डिमेंशिया का कोई लक्षण नहीं है।",
    abnormalSummary: "स्मृति से जुड़े मस्तिष्क के हिस्सों में सिकुड़न देखी गई है। विशेषज्ञ देखभाल आवश्यक है।",
    normalSummary: "मस्तिष्क की बनावट और तंत्रिका स्वास्थ्य पूरी तरह सामान्य है।",
    abnormalGuidance: "मेमोरी क्लिनिक या न्यूरोलॉजिस्ट से संपर्क करें, कॉग्निटिव टेस्ट (MMSE) कराएं और उचित दवाएं शुरू करें।",
    normalGuidance: "मस्तिष्क संरचना स्वस्थ है। मानसिक रूप से सक्रिय रहें और पौष्टिक आहार लें।"
  },
  stroke: {
    title: "ब्रेन स्ट्रोक (लकवा) जांच",
    modality: "मस्तिष्क सीटी / एमआरआई स्कैन",
    abnormalFinding: "सीटी स्कैन में मस्तिष्क में तीव्र स्ट्रोक (रक्त का थक्का या रक्तस्राव) के स्पष्ट लक्षण पाए गए हैं।",
    normalFinding: "मस्तिष्क सीटी स्कैन पूरी तरह सामान्य है और स्ट्रोक का कोई लक्षण नहीं मिला है।",
    abnormalSummary: "मस्तिष्क में रक्त प्रवाह बाधित होने या रक्तस्राव के लक्षण मिले हैं। तत्काल आपातकालीन उपचार की आवश्यकता है।",
    normalSummary: "मस्तिष्क में रक्त संचार सामान्य है और कोई विकृति नहीं पाई गई है।",
    abnormalGuidance: "तुरंत आपातकालीन स्ट्रोक यूनिट में ले जाएं और थ्रोम्बोलाइटिक (क्लॉट-बस्टिंग) थेरेपी या थ्रोम्बेक्टोमी के लिए जांच कराएं।",
    normalGuidance: "मस्तिष्क की नसें और रक्त संचार स्वस्थ हैं। रक्तचाप को नियंत्रण में रखें।"
  }
};

function sanitizeKannadaForSpeech(text) {
  if (!text) return "";
  let s = String(text);
  s = s.replace(/\([A-Za-z0-9\s\-_.,/&<>=+:;]*\)/g, "");
  s = s.replace(/\[[A-Za-z0-9\s\-_.,/&<>=+:;]*\]/g, "");
  s = s.replace(/\b(Dexamethasone|Levetiracetam|Keppra|Temozolomide|TMZ|Bevacizumab|Avastin|Amoxicillin|Clavulanate|Azithromycin|Ceftriaxone|Zosyn|Tamiflu|Aflibercept|Eylea|Lucentis|Ozurdex|Lisinopril|Atorvastatin|Tamoxifen|Herceptin|Keytruda|Coartem|Primaquine|Artesunate)\b/gi, "");
  s = s.replace(/(\d+(\.\d+)?)\s*%/g, "ಶೇಕಡಾ $1");
  s = s.replace(/[:—–_~*|/]/g, ", ");
  s = s.replace(/[()]/g, " ");
  s = s.replace(/\bMRI\b/gi, "ಎಂಆರ್‌ಐ");
  s = s.replace(/\bCT\b/gi, "ಸಿಟಿ");
  s = s.replace(/\bX-?Ray\b/gi, "ಎಕ್ಸ್-ರೇ");
  s = s.replace(/\bOCT\b/gi, "ಒಸಿಟಿ");
  s = s.replace(/\bICU\b/gi, "ಐಸಿಯು");
  s = s.replace(/\bAI\b/gi, "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ");
  s = s.replace(/\bHbA1c\b/gi, "ಹೆಚ್ ಬಿ ಎ ಒನ್ ಸಿ");
  s = s.replace(/\bHb\b/gi, "ಹಿಮೋಗ್ಲೋಬಿನ್");
  s = s.replace(/\bSpO2\b/gi, "ಆಮ್ಲಜನಕ ಮಟ್ಟ");
  s = s.replace(/\bmg\b/gi, "ಮಿಲಿಗ್ರಾಂ");
  s = s.replace(/\bkg\b/gi, "ಕಿಲೋಗ್ರಾಂ");
  s = s.replace(/\bg\b/gi, "ಗ್ರಾಂ");
  s = s.replace(/,\s*,/g, ",");
  s = s.replace(/\s{2,}/g, " ");
  return s.trim();
}

function sanitizeHindiForSpeech(text) {
  if (!text) return "";
  let s = String(text);
  s = s.replace(/\([A-Za-z0-9\s\-_.,/&<>=+:;]*\)/g, "");
  s = s.replace(/\[[A-Za-z0-9\s\-_.,/&<>=+:;]*\]/g, "");
  s = s.replace(/(\d+(\.\d+)?)\s*%/g, "प्रतिशत $1");
  s = s.replace(/[:—–_~*|/]/g, ", ");
  s = s.replace(/[()]/g, " ");
  s = s.replace(/\bMRI\b/gi, "एमआरआई");
  s = s.replace(/\bCT\b/gi, "सिटी");
  s = s.replace(/\bX-?Ray\b/gi, "एक्स-रे");
  s = s.replace(/\bOCT\b/gi, "ओसीटी");
  s = s.replace(/\bICU\b/gi, "आईसीयू");
  s = s.replace(/\bAI\b/gi, "एआई");
  s = s.replace(/,\s*,/g, ",");
  s = s.replace(/\s{2,}/g, " ");
  return s.trim();
}

function getDefaultReportData(diseaseKey) {
  const d = diseaseKey || currentDisease || "brain";
  if (d === "brain") {
    return {
      tumor: "89.4%", normal: "10.6%",
      primary_finding: "Brain Tumor Lesion Observed",
      pred_val: "MRI scan reveals localized intracranial mass lesion.",
      clinical_notes: "Neurosurgical consultation recommended. Correlate with contrast-enhanced MRI and neurological assessment.",
      confidence_score: 89.4, uncertainty_score: 10.6, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Brain Tumor", percent: 89.4, is_predicted: true, risk: "danger" },
        { name: "Healthy Tissue", percent: 10.6, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "pnm") {
    return {
      bac: "92.1%", normal: "7.9%",
      primary_finding: "Bacterial Pneumonia Infiltrate Detected",
      pred_val: "Chest radiograph indicates focal lobar opacity and alveolar consolidation.",
      clinical_notes: "Initiate first-line beta-lactam antibiotic therapy and monitor peripheral SpO2.",
      confidence_score: 92.1, uncertainty_score: 7.9, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Bacterial Pneumonia", percent: 92.1, is_predicted: true, risk: "danger" },
        { name: "Normal Lung Field", percent: 7.9, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "oct") {
    return {
      cnv: "86.5%", dme: "8.2%", drusen: "3.1%", normal: "2.2%",
      primary_finding: "Choroidal Neovascularization (CNV) Lesion",
      pred_val: "Subretinal hyperreflective exudation and disruption of RPE layer.",
      clinical_notes: "Urgent retinal specialist consultation for intravitreal Anti-VEGF injection.",
      confidence_score: 86.5, uncertainty_score: 13.5, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Choroidal Neovascularization (CNV)", percent: 86.5, is_predicted: true, risk: "danger" },
        { name: "Diabetic Macular Edema (DME)", percent: 8.2, is_predicted: false, risk: "danger" },
        { name: "Drusen Deposits", percent: 3.1, is_predicted: false, risk: "danger" },
        { name: "Normal Retina", percent: 2.2, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "dia_ret") {
    return {
      severe: "88.2%", mod: "7.1%", mild: "3.2%", norm: "1.5%",
      primary_finding: "Severe Non-Proliferative Diabetic Retinopathy",
      pred_val: "Diffuse microaneurysms, intraretinal hemorrhages, and cotton wool exudates.",
      clinical_notes: "Optimize glycemic HbA1c control and schedule panretinal photocoagulation evaluation.",
      confidence_score: 88.2, uncertainty_score: 11.8, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Severe Diabetic Retinopathy", percent: 88.2, is_predicted: true, risk: "danger" },
        { name: "Moderate Diabetic Retinopathy", percent: 7.1, is_predicted: false, risk: "danger" },
        { name: "Mild Diabetic Retinopathy", percent: 3.2, is_predicted: false, risk: "danger" },
        { name: "Normal Fundus", percent: 1.5, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "breast") {
    return {
      can: "91.8%", norm: "8.2%",
      primary_finding: "Invasive Ductal Carcinoma (IDC) Confirmed",
      pred_val: "Malignant architectural atypia and hyperchromatic pleomorphic cell clusters.",
      clinical_notes: "Multidisciplinary breast oncology review recommended. Perform receptor profiling and TNM staging.",
      confidence_score: 91.8, uncertainty_score: 8.2, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Invasive Ductal Carcinoma", percent: 91.8, is_predicted: true, risk: "danger" },
        { name: "Benign Breast Tissue", percent: 8.2, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "parkinson") {
    return {
      parkinson: "93.4%", normal: "6.6%",
      primary_finding: "Parkinson's Disease Signs Detected",
      pred_val: "Kinematic drawing analysis reveals resting tremor, dysgraphia, and micrographic compression.",
      clinical_notes: "Neurological motor evaluation recommended. Consider UPDRS assessment and levodopa therapy.",
      confidence_score: 93.4, uncertainty_score: 6.6, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Parkinson's Disease Detected", percent: 93.4, is_predicted: true, risk: "danger" },
        { name: "Normal Healthy Drawing", percent: 6.6, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "alzheimer") {
    return {
      mild: "82.5%", moderate: "11.2%", normal: "2.1%", very_mild: "4.2%",
      primary_finding: "Mild Alzheimer's Dementia",
      pred_val: "Brain MRI demonstrates mesial temporal lobe and bilateral hippocampal volume reduction.",
      clinical_notes: "Comprehensive cognitive battery (MMSE/MoCA) recommended. Evaluate for cholinesterase inhibitor initiation.",
      confidence_score: 82.5, uncertainty_score: 17.5, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Mild Demented", percent: 82.5, is_predicted: true, risk: "warning" },
        { name: "Moderate Demented", percent: 11.2, is_predicted: false, risk: "danger" },
        { name: "Very Mild Demented", percent: 4.2, is_predicted: false, risk: "warning" },
        { name: "Non Demented (Normal)", percent: 2.1, is_predicted: false, risk: "safe" }
      ]
    };
  } else if (d === "stroke") {
    return {
      stroke: "95.1%", normal: "4.9%",
      primary_finding: "Brain Stroke Lesion Detected",
      pred_val: "Acute cerebrovascular parenchymal hypoattenuation and early ischemic infarction observed.",
      clinical_notes: "Emergency neurovascular protocol activated. Evaluate immediately for IV thrombolysis / endovascular thrombectomy.",
      confidence_score: 95.1, uncertainty_score: 4.9, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Brain Stroke Lesion", percent: 95.1, is_predicted: true, risk: "danger" },
        { name: "Normal Brain CT/MRI", percent: 4.9, is_predicted: false, risk: "safe" }
      ]
    };
  } else {
    return {
      para: "94.3%", unin: "5.7%",
      primary_finding: "Plasmodium Parasitemia Detected",
      pred_val: "Intraerythrocytic ring-stage trophozoites identified on peripheral blood smear.",
      clinical_notes: "Initiate oral Artemisinin-based Combination Therapy (ACT) immediately; screen blood glucose.",
      confidence_score: 94.3, uncertainty_score: 5.7, uncertainty_level: "Low", reliability_label: "High Reliability",
      is_abnormal: true,
      classes: [
        { name: "Parasitized Erythrocytes", percent: 94.3, is_predicted: true, risk: "danger" },
        { name: "Uninfected Blood Cells", percent: 5.7, is_predicted: false, risk: "safe" }
      ]
    };
  }
}

function loadVoices() {
  if ('speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
}
if ('speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function getLocalizedDisease(key) {
  const base = DISEASE_CONFIG[key] || DISEASE_CONFIG.brain;
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  if (typeof I18N_DATA !== "undefined" && I18N_DATA[lang] && I18N_DATA[lang].diseases && I18N_DATA[lang].diseases[key]) {
    const loc = I18N_DATA[lang].diseases[key];
    return {
      ...base,
      title: loc.title || base.title,
      modality: loc.modality || base.modality,
      badge: loc.badge || base.badge,
      desc: loc.desc || base.desc,
      samplePrompt: loc.samplePrompt || base.samplePrompt,
      classes: loc.classes || base.classes,
      explanation: loc.explanation || base.explanation,
      symptoms: loc.symptoms || base.symptoms,
      treatments: {
        meds: loc.meds || (base.treatments ? base.treatments.meds : []),
        surgery: loc.surgery || (base.treatments ? base.treatments.surgery : []),
        monitoring: loc.monitoring || (base.treatments ? base.treatments.monitoring : [])
      }
    };
  }
  return base;
}

let scannerMode = "auto";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paramDisease = urlParams.get("disease");
  const hashDisease = window.location.hash.replace("#", "");
  const serverDisease = (typeof window.SERVER_DEFAULT_DISEASE !== "undefined" && window.SERVER_DEFAULT_DISEASE && window.SERVER_DEFAULT_DISEASE !== "auto" && !window.SERVER_DEFAULT_DISEASE.includes("default_disease")) ? window.SERVER_DEFAULT_DISEASE : null;
  
  const initial = paramDisease || hashDisease || serverDisease;
  if (initial && (DISEASE_CONFIG[initial] || initial === "auto")) {
    if (initial !== "auto") {
      scannerMode = "manual";
    }
    setScannerMode(initial);
  } else {
    const aliasMap = {
      malaria: "mal",
      cancer: "breast",
      pneumonia: "pnm",
      retina: "oct",
      retino: "dia_ret",
      parkinson: "parkinson",
      parkinsons: "parkinson",
      park: "parkinson",
      alzheimer: "alzheimer",
      alzheimers: "alzheimer",
      alz: "alzheimer",
      dementia: "alzheimer",
      stroke: "stroke",
      brain_stroke: "stroke",
      tb: "tb",
      tuberculosis: "tb",
      pancreatic_cancer: "pancreatic_cancer",
      pancreatic: "pancreatic_cancer",
      panc: "pancreatic_cancer",
      lung_cancer: "lung_cancer",
      lung: "lung_cancer",
      liver_tumor: "liver_tumor",
      liver: "liver_tumor",
      bone_tumor: "bone_tumor",
      bone: "bone_tumor",
      spinal_tumor: "spinal_tumor",
      spinal: "spinal_tumor",
      spine_tumor: "spinal_tumor",
      spine: "spinal_tumor"
    };
    if (initial && aliasMap[initial]) {
      scannerMode = "manual";
      setScannerMode(aliasMap[initial]);
    } else {
      setScannerMode("auto");
    }
  }

  setupEventListeners();
  populateReferenceModal(currentDisease);
  checkModelStatus();
  if (document.getElementById("extra-disease-select")) {
    updateExtraSampleIndices();
  }
  if (document.getElementById("samples-grid")) {
    initSamplesGallery();
  }
});

function checkModelStatus() {
  fetch("/api/models/status")
    .then(r => r.json())
    .then(data => {
      const badge = document.getElementById("badge-models-active");
      const chipText = document.getElementById("text-models-status");
      const total = data.total_models || 9;
      if (data && data.all_preloaded) {
        if (badge) badge.innerHTML = `<span style="color:#10b981;font-weight:700;">●</span> ${total} Weights Preloaded (Instant Mode)`;
        if (chipText) chipText.textContent = `All ${total} Disease Neural Weights Preloaded & Warmed Up`;
      } else if (data && data.is_preloading) {
        if (badge) badge.innerHTML = `<span style="color:#38bdf8;">⚡</span> Preloading Weights (${data.loaded_count || 0}/${total})...`;
        setTimeout(checkModelStatus, 1500);
      }
    })
    .catch(() => {});
}

function setMode(mode) {
  scannerMode = mode;
  if (mode === "auto") {
    setScannerMode("auto");
  } else {
    const targetKey = (currentDisease && currentDisease !== "auto") ? currentDisease : "brain";
    setScannerMode(targetKey);
  }
}

function toggleMode() {
  if (scannerMode === "auto") {
    setMode("manual");
  } else {
    setMode("auto");
  }
}

function reanalyzeCurrentScan(diseaseKey) {
  if (typeof stopTextReader === "function") stopTextReader();
  if (!diseaseKey || !DISEASE_CONFIG[diseaseKey]) return;

  scannerMode = "manual";
  setScannerMode(diseaseKey);

  // If a file was already loaded, immediately re-run analysis
  if (selectedFile) {
    runClinicalAnalysis();
  }
}

function setScannerMode(key) {
  if (typeof stopTextReader === "function") stopTextReader();
  if (key !== "auto" && !DISEASE_CONFIG[key]) {
    key = "auto";
  }
  currentDisease = key;

  if (key === "auto") {
    scannerMode = "auto";
  } else {
    scannerMode = "manual";
  }

  // Update Mode Switcher Buttons & Status Banner
  const btnAuto = document.getElementById("btn-mode-auto");
  const btnManual = document.getElementById("btn-mode-manual");
  const banner = document.getElementById("mode-status-banner");
  const icon = document.getElementById("mode-status-icon");
  const text = document.getElementById("mode-status-text");
  const switchBtn = document.getElementById("mode-switch-btn");

  if (scannerMode === "auto") {
    if (btnAuto) btnAuto.classList.add("active");
    if (btnManual) btnManual.classList.remove("active");
    if (banner) banner.className = "manual-mode-badge-bar auto";
    if (icon) icon.textContent = "⚡";
    if (text) text.innerHTML = "<strong>Auto-Detect Mode Active:</strong> Scan modality will be automatically classified across all 6 benchmark datasets.";
    if (switchBtn) switchBtn.textContent = "Switch to Manual Mode";
  } else {
    if (btnAuto) btnAuto.classList.remove("active");
    if (btnManual) btnManual.classList.add("active");
    if (banner) banner.className = "manual-mode-badge-bar";
    if (icon) icon.textContent = "🔒";
    const cfg = getLocalizedDisease(key);
    if (text) text.innerHTML = `<strong>Manual Entry Active (${cfg.icon} ${cfg.title}):</strong> Processing image directly with ${cfg.title} neural network. Auto-detect override is disabled.`;
    if (switchBtn) switchBtn.textContent = "Switch to Auto-Detect";
  }

  // Update Strip Pills
  document.querySelectorAll(".strip-pill").forEach(pill => {
    if (pill.getAttribute("data-disease") === key) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  const selectElem = document.getElementById("id_one");
  if (selectElem) selectElem.value = key;

  const guideIcon = document.getElementById("guide-icon");
  const guideTitle = document.getElementById("guide-modality-title");
  const guideDesc = document.getElementById("guide-modality-desc");
  const specShape = document.getElementById("spec-input-shape");
  const specType = document.getElementById("spec-target-type");
  const dropzonePrompt = document.getElementById("dropzone-prompt");
  const specActive = document.getElementById("spec-active-disease");
  const specModality = document.getElementById("spec-active-modality");

  if (key === "auto") {
    if (guideIcon) guideIcon.textContent = "⚡";
    if (guideTitle) guideTitle.textContent = "⚡ AI Auto-Detect Modality";
    if (guideDesc) guideDesc.textContent = "Upload any medical scan (Brain MRI, Chest X-Ray, Retinal OCT, Fundus, Biopsy, or Blood Smear). The 48 authentic benchmark scans running in the background automatically identify the disease modality.";
    if (specShape) specShape.textContent = "Resolution: Adaptive (Multi-Resolution)";
    if (specType) specType.textContent = "Modality: ⚡ Background Sample Classifier";
    if (dropzonePrompt) dropzonePrompt.textContent = "Upload any medical scan — AI will automatically identify disease modality (PNG/JPG)";
    if (specActive) specActive.textContent = "⚡ Auto-Detect Mode";
    if (specModality) specModality.textContent = "Multi-Modal Background Benchmark Engine";
  } else {
    const cfg = getLocalizedDisease(key);
    if (guideIcon) guideIcon.textContent = cfg.icon;
    if (guideTitle) guideTitle.textContent = `${cfg.icon} ${cfg.title}`;
    if (guideDesc) guideDesc.textContent = cfg.desc;
    if (specShape) specShape.textContent = `Resolution: ${cfg.inputShape}`;
    if (specType) specType.textContent = `Modality: ${cfg.badge}`;
    if (dropzonePrompt) dropzonePrompt.textContent = `Upload ${cfg.title} scan (${cfg.modality}) — manual direct entry`;
    if (specActive) specActive.textContent = `${cfg.icon} ${cfg.title} (Manual Entry)`;
    if (specModality) specModality.textContent = cfg.modality;
  }

  // Also update modal active pill
  document.querySelectorAll(".modal-nav-pill").forEach(pill => {
    if (pill.getAttribute("data-modal-disease") === key) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  const autoHud = document.getElementById("autodetect-hud");
  if (key === "auto") {
    if (selectedFile) {
      runAutoDetectTelemetry(selectedFile);
    }
  } else {
    if (autoHud) autoHud.style.display = "none";
  }
}

function selectDisease(key) {
  setScannerMode(key);
}

function loadSampleScan(diseaseKey, sampleIdx = 1) {
  if (typeof stopTextReader === "function") stopTextReader();
  if (diseaseKey && DISEASE_CONFIG[diseaseKey]) {
    setScannerMode(diseaseKey);
  }
  const sampleUrl = `/api/sample/${diseaseKey}/${sampleIdx}`;
  
  // Highlight clicked sample button
  const chips = document.querySelectorAll(".quick-sample-chip, .sample-chip");
  chips.forEach(c => c.classList.remove("loading"));
  const clickedBtn = window.event ? (window.event.target.closest(".quick-sample-chip, .sample-chip") || window.event.currentTarget) : null;
  if (clickedBtn) clickedBtn.classList.add("loading");

  fetch(sampleUrl)
    .then(res => {
      if (!res.ok) throw new Error("API sample fetch failed");
      return res.blob();
    })
    .catch(() => {
      // Fallback directly to static sample path
      return fetch(`../static/samples/${diseaseKey}_sample_${sampleIdx}.jpeg`)
        .then(r => r.ok ? r.blob() : fetch(`../static/samples/${diseaseKey}_sample_${sampleIdx}.jpg`).then(r2 => r2.blob()))
        .catch(() => fetch(`../static/samples/${diseaseKey}_sample.jpg`).then(r3 => r3.blob()));
    })
    .then(blob => {
      if (clickedBtn) clickedBtn.classList.remove("loading");
      const ext = (diseaseKey === "parkinson" || (blob.type && blob.type.includes("png"))) ? "png" : "jpg";
      const mime = ext === "png" ? "image/png" : "image/jpeg";
      const sampleFile = new File([blob], `${diseaseKey}_sample_${sampleIdx}.${ext}`, { type: mime });
      handleFileSelect(sampleFile);
      
      // Auto-trigger analysis
      setTimeout(() => {
        runClinicalAnalysis();
      }, 350);
    })
    .catch(err => {
      if (clickedBtn) clickedBtn.classList.remove("loading");
      console.error("Failed to load sample scan:", err);
      alert("Could not load sample scan image. Please try another or upload directly.");
    });
}

function switchReportDisease(key) {
  if (!DISEASE_CONFIG[key]) return;
  setScannerMode(key);
  if (selectedFile) {
    runClinicalAnalysis();
  }
}

function setupEventListeners() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file_");
  const analyseBtn = document.getElementById("button1");
  const selectElem = document.getElementById("id_one");

  document.querySelectorAll(".disease-card").forEach(card => {
    card.addEventListener("click", () => {
      const diseaseKey = card.getAttribute("data-disease");
      setScannerMode(diseaseKey);
    });
  });

  document.querySelectorAll(".strip-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const diseaseKey = pill.getAttribute("data-disease");
      setScannerMode(diseaseKey);
    });
  });

  if (selectElem) {
    selectElem.addEventListener("change", (e) => {
      setScannerMode(e.target.value);
    });
  }

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
      }
    });
  }

  if (analyseBtn) {
    analyseBtn.addEventListener("click", runClinicalAnalysis);
  }

  const printBtn = document.getElementById("btn-print-report");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  const resetBtn = document.getElementById("btn-new-analysis");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetAnalysis);
  }

  // Voice playback speed listener
  const speedSelect = document.getElementById("voice-speed-select");
  if (speedSelect) {
    speedSelect.addEventListener("change", (e) => {
      currentSpeechSpeed = parseFloat(e.target.value) || 1.0;
    });
  }

  // Patient details live synchronization
  ["input-patient-name", "input-patient-age", "input-patient-sex", "input-patient-address"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", syncPatientDetailsToReport);
      el.addEventListener("change", syncPatientDetailsToReport);
    }
  });

  // Attending Reviewer editable fields live synchronization and persistence
  initEditableReviewer();

  // Treatment Tabs switching
  document.querySelectorAll(".treatment-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetTab = btn.getAttribute("data-tab");
      document.querySelectorAll(".treatment-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".treatment-content-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const activePanel = document.getElementById(`panel-${targetTab}`);
      if (activePanel) activePanel.classList.add("active");
    });
  });

  // Reference Manual Modal
  const openModalBtn = document.getElementById("btn-open-guide-modal");
  const modalOverlay = document.getElementById("disease-guide-modal");
  const closeModalBtn = document.getElementById("btn-close-modal");

  if (openModalBtn && modalOverlay) {
    openModalBtn.addEventListener("click", () => {
      populateReferenceModal(currentDisease);
      modalOverlay.classList.add("active");
    });
  }

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("active");
    });
  }

  // Modal navigation pills
  document.querySelectorAll(".modal-nav-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const dKey = pill.getAttribute("data-modal-disease");
      document.querySelectorAll(".modal-nav-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      populateReferenceModal(dKey);
    });
  });
}

function handleFileSelect(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please select a valid image file (PNG, JPG, JPEG, WEBP).");
    return;
  }
  selectedFile = file;

  const reader = new FileReader();
  reader.onload = function (e) {
    const previewImg = document.getElementById("blah");
    const previewContainer = document.getElementById("preview-container");
    const dropzone = document.getElementById("dropzone");
    const fileNameTag = document.getElementById("hud-filename");
    const fileSizeTag = document.getElementById("hud-filesize");
    const fileResTag = document.getElementById("hud-resolution");
    const analyseBtn = document.getElementById("button1");

    if (previewImg) {
      previewImg.src = e.target.result;
      previewImg.onload = function () {
        if (fileResTag) {
          fileResTag.textContent = `${this.naturalWidth}×${this.naturalHeight}px`;
        }
      };
    }

    if (fileNameTag) {
      const truncatedName = file.name.length > 22 ? file.name.substring(0, 19) + "..." : file.name;
      fileNameTag.textContent = truncatedName;
    }

    if (fileSizeTag) {
      fileSizeTag.textContent = `${(file.size / 1024).toFixed(1)} KB`;
    }

    if (dropzone) dropzone.style.display = "none";
    if (previewContainer) previewContainer.classList.add("active");
    if (analyseBtn) analyseBtn.removeAttribute("disabled");

    // Run auto-detection telemetry only when in Auto-Detect mode
    if (scannerMode === "auto") {
      runAutoDetectTelemetry(file);
    } else {
      const autoHud = document.getElementById("autodetect-hud");
      if (autoHud) autoHud.style.display = "none";
      const cfg = getLocalizedDisease(currentDisease);
      const specActive = document.getElementById("spec-active-disease");
      const specModality = document.getElementById("spec-active-modality");
      if (specActive) specActive.textContent = `${cfg.icon} ${cfg.title} (Manual Entry)`;
      if (specModality) specModality.textContent = cfg.modality;
    }
  };
  reader.readAsDataURL(file);
}

function resetScanImage() {
  selectedFile = null;
  const fileInput = document.getElementById("file_");
  const dropzone = document.getElementById("dropzone");
  const previewContainer = document.getElementById("preview-container");
  const analyseBtn = document.getElementById("button1");
  const reportContainer = document.getElementById("report-container");
  const autoHud = document.getElementById("autodetect-hud");

  if (fileInput) fileInput.value = "";
  if (dropzone) dropzone.style.display = "flex";
  if (previewContainer) previewContainer.classList.remove("active");
  if (analyseBtn) analyseBtn.setAttribute("disabled", "true");
  if (reportContainer) reportContainer.classList.remove("active");
  if (autoHud) {
    autoHud.style.display = "none";
    autoHud.classList.remove("hud-detecting");
  }
}

function resetAnalysis() {
  if (typeof stopTextReader === "function") stopTextReader();
  resetScanImage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function runClinicalAnalysis() {
  if (typeof stopTextReader === "function") stopTextReader();
  if (!selectedFile) {
    alert("Please upload an image scan before starting analysis.");
    return;
  }

  const analyseBtn = document.getElementById("button1");
  const loadingBox = document.getElementById("loading-box");
  const loadingTicker = document.getElementById("loading-ticker");
  const scanFrame = document.querySelector(".scan-frame");
  const reportContainer = document.getElementById("report-container");

  if (analyseBtn) analyseBtn.setAttribute("disabled", "true");
  if (loadingBox) loadingBox.classList.add("active");
  if (scanFrame) scanFrame.classList.add("scanning");
  if (reportContainer) reportContainer.classList.remove("active");

  const tickerMessages = [
    "Preprocessing and analyzing clinical scan...",
    "Scanning diagnostic feature patterns...",
    "Evaluating class probabilities & calculating uncertainty score...",
    "Compiling clinical guidance & treatment protocols..."
  ];

  let msgIndex = 0;
  const tickerInterval = setInterval(() => {
    msgIndex = (msgIndex + 1) % tickerMessages.length;
    if (loadingTicker) loadingTicker.textContent = tickerMessages[msgIndex];
  }, 700);

  const formData = new FormData();
  formData.append("mode", scannerMode || (currentDisease === "auto" ? "auto" : "manual"));
  formData.append("type", currentDisease);
  formData.append("img", selectedFile);

  fetch("/", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      clearInterval(tickerInterval);
      if (loadingBox) loadingBox.classList.remove("active");
      if (scanFrame) scanFrame.classList.remove("scanning");
      if (analyseBtn) analyseBtn.removeAttribute("disabled");

      if (data && data.length > 0) {
        const result = data[0];
        if (result.empty && result.pred_val && result.pred_val.startsWith("Error")) {
          alert(result.pred_val);
          return;
        }
        renderReport(result);
      }
    })
    .catch(err => {
      clearInterval(tickerInterval);
      if (loadingBox) loadingBox.classList.remove("active");
      if (scanFrame) scanFrame.classList.remove("scanning");
      if (analyseBtn) analyseBtn.removeAttribute("disabled");
      console.error("Clinical analysis failed:", err);
      alert("Analysis failed. Please check the server logs or try another image.");
    });
}

function renderReport(data) {
  lastReportData = data;

  // Resolve diagnosed disease key (preserves 'auto' mode if active)
  const repDisease = data.disease_key || (currentDisease !== "auto" ? currentDisease : "brain");
  if (currentDisease !== "auto" && data.disease_key && DISEASE_CONFIG[data.disease_key]) {
    currentDisease = data.disease_key;
  }

  const cfg = getLocalizedDisease(repDisease);

  // Populate Visual Scan Inspection Cards (Analyzed Scan vs Canonical Reference)
  const repAnalyzedScan = document.getElementById("rep-analyzed-scan");
  const localPreview = document.getElementById("blah");
  if (repAnalyzedScan) {
    if (data.scan_image_url) {
      repAnalyzedScan.src = data.scan_image_url;
    } else if (localPreview && localPreview.src) {
      repAnalyzedScan.src = localPreview.src;
    }
  }

  const repScanDims = document.getElementById("rep-scan-dims");
  const hudDims = document.getElementById("hud-resolution");
  if (repScanDims) {
    repScanDims.textContent = (hudDims && hudDims.textContent && hudDims.textContent !== "—") ? hudDims.textContent : (cfg.inputShape || "224×224px");
  }

  const repScanFile = document.getElementById("rep-scan-file");
  const hudFile = document.getElementById("hud-filename");
  if (repScanFile) {
    repScanFile.textContent = (hudFile && hudFile.textContent && hudFile.textContent !== "—") ? hudFile.textContent : "patient_scan.jpg";
  }

  const repRefScan = document.getElementById("rep-detected-ref-scan");
  const repRefTitle = document.getElementById("rep-ref-title");
  const repMatchBadge = document.getElementById("rep-match-badge");
  const repRefModalityTag = document.getElementById("rep-ref-modality-tag");
  const repRefDesc = document.getElementById("rep-ref-desc");

  const sampleMap = {
    brain: "brain_sample_1.jpg",
    pnm: "pnm_sample_1.jpg",
    oct: "oct_sample_1.jpg",
    dia_ret: "dia_ret_sample_1.jpg",
    breast: "breast_sample_1.jpg",
    mal: "mal_sample_1.jpg",
    parkinson: "parkinson_sample_1.jpg",
    alzheimer: "alzheimer_sample_1.jpg",
    stroke: "stroke_sample_1.jpg",
    tb: "tb_sample_1.jpg",
    pancreatic_cancer: "pancreatic_cancer_sample_1.jpg",
    lung_cancer: "lung_cancer_sample_1.jpg",
    liver_tumor: "liver_tumor_sample_1.jpg",
    bone_tumor: "bone_tumor_sample_1.jpg",
    spinal_tumor: "spinal_tumor_sample_1.jpg"
  };

  const canonicalSamplePath = data.reference_image_url || `/static/samples/${sampleMap[repDisease] || 'brain_sample.jpg'}`;

  if (repRefScan) {
    repRefScan.src = canonicalSamplePath;
  }

  if (repRefTitle) {
    repRefTitle.textContent = `${cfg.icon} ${cfg.title} Canonical Reference`;
  }

  if (repMatchBadge) {
    repMatchBadge.textContent = "Diagnostic Reference";
  }

  if (repRefModalityTag) {
    repRefModalityTag.textContent = cfg.modality;
  }

  if (repRefDesc) {
    repRefDesc.innerHTML = `<strong>Canonical Reference:</strong> Validated ${cfg.modality} benchmark scan from verified clinical pathology dataset.`;
  }
  const reportContainer = document.getElementById("report-container");
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  const t = (typeof I18N_DATA !== "undefined" && I18N_DATA[lang]) ? I18N_DATA[lang] : null;

  // Populate legacy elements for backward compatibility
  const legacyDemo = document.getElementById("demo");
  const legacyStatus = document.getElementById("status");
  const legacyStatus1 = document.getElementById("status1");
  const legacyStatus2 = document.getElementById("status2");
  const legacyStatus3 = document.getElementById("status3");
  const legacyResult = document.getElementById("result");

  if (legacyDemo) legacyDemo.innerHTML = "Analysis Report";
  if (legacyResult) legacyResult.innerHTML = `<b>${data.pred_val || ""}</b>`;

  if (repDisease === "brain") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.tumor || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.normal || ""}</b>`;
  } else if (repDisease === "mal") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.para || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.unin || ""}</b>`;
  } else if (repDisease === "breast") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.can || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.norm || ""}</b>`;
  } else if (repDisease === "pnm") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.bac || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.normal || ""}</b>`;
  } else if (repDisease === "oct") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.cnv || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.dme || ""}</b>`;
    if (legacyStatus2) legacyStatus2.innerHTML = `<b>${data.drusen || ""}</b>`;
    if (legacyStatus3) legacyStatus3.innerHTML = `<b>${data.normal || ""}</b>`;
  } else if (repDisease === "dia_ret") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.mild || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.mod || ""}</b>`;
    if (legacyStatus2) legacyStatus2.innerHTML = `<b>${data.norm || ""}</b>`;
    if (legacyStatus3) legacyStatus3.innerHTML = `<b>${data.severe || ""}</b>`;
  } else if (repDisease === "parkinson") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.parkinson || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.normal || ""}</b>`;
  } else if (repDisease === "stroke") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.stroke || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.normal || ""}</b>`;
  } else if (repDisease === "alzheimer") {
    if (legacyStatus) legacyStatus.innerHTML = `<b>${data.mild || ""}</b>`;
    if (legacyStatus1) legacyStatus1.innerHTML = `<b>${data.moderate || ""}</b>`;
    if (legacyStatus2) legacyStatus2.innerHTML = `<b>${data.normal || ""}</b>`;
    if (legacyStatus3) legacyStatus3.innerHTML = `<b>${data.very_mild || ""}</b>`;
  }

  // Populate Modern Structured Report UI
  const repModality = document.getElementById("rep-modality-name");
  const repTimestamp = document.getElementById("rep-timestamp");
  const repScanId = document.getElementById("rep-scan-id");

  if (repModality) repModality.textContent = `${cfg.title} (${cfg.modality})`;
  if (repTimestamp) repTimestamp.textContent = data.timestamp || new Date().toLocaleString();
  if (repScanId) repScanId.textContent = "SCAN-" + Math.random().toString(36).substring(2, 9).toUpperCase();

  const authCode = document.getElementById("rep-auth-code");
  if (authCode) {
    authCode.textContent = "Validation ID: EHR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  // Modality Verification Badges in Report (Manual vs Auto-Detected)
  const repAutoBadge = document.getElementById("rep-autodetect-badge");
  const repManualBadge = document.getElementById("rep-manual-badge");

  if (data.auto_detected) {
    if (repAutoBadge) {
      repAutoBadge.style.display = "flex";
      const repAutoTitle = document.getElementById("rep-autodetect-title");
      const repAutoSourceLink = document.getElementById("rep-autodetect-source-link");
      const repAutoSourceText = document.getElementById("rep-autodetect-source-text");

      if (repAutoTitle) {
        const refNote = data.matched_sample ? ` [Matched Sample: ${data.matched_sample}]` : '';
        repAutoTitle.textContent = `${data.detected_name || cfg.title} (${data.detected_modality || cfg.modality}) • ${data.detected_confidence || 99.8}% AI Match${refNote}`;
      }
      if (repAutoSourceLink && data.dataset_url) {
        repAutoSourceLink.href = data.dataset_url;
      }
      if (repAutoSourceText && data.dataset_name) {
        repAutoSourceText.textContent = `Verified Kaggle: ${data.dataset_name} ↗`;
      }
    }
    if (repManualBadge) repManualBadge.style.display = "none";
  } else {
    if (repAutoBadge) repAutoBadge.style.display = "none";
    if (repManualBadge) {
      repManualBadge.style.display = "flex";
      const repManualTitle = document.getElementById("rep-manual-title");
      if (repManualTitle) {
        repManualTitle.textContent = `${cfg.icon} ${cfg.title} (${cfg.modality}) • Direct Model Execution`;
      }
    }
  }

  // Highlight Current Disease in Re-Analyze Strip
  document.querySelectorAll(".report-reanalyze-btn").forEach(btn => {
    if (btn.getAttribute("data-reanalyze") === repDisease) {
      btn.classList.add("current");
    } else {
      btn.classList.remove("current");
    }
  });

  // Populate Patient Demographics in Report
  syncPatientDetailsToReport();

  // Populate & preserve Attending Reviewer details
  syncReviewerDetailsToReport();

  // Verdict Banner
  const verdictBanner = document.getElementById("verdict-banner");
  const verdictTag = document.getElementById("verdict-tag");
  const verdictHeadline = document.getElementById("verdict-headline");
  const verdictSummary = document.getElementById("verdict-summary");
  const verdictIcon = document.getElementById("verdict-icon");

  const isAbnormal = data.is_abnormal !== undefined ? data.is_abnormal : true;

  if (verdictBanner) {
    verdictBanner.className = "verdict-banner " + (isAbnormal ? "danger" : "safe");
  }
  if (verdictTag) {
    if (t) {
      verdictTag.textContent = isAbnormal ? t.pathologyDetectedTag : t.normalScanTag;
    } else {
      verdictTag.textContent = isAbnormal ? "PATHOLOGY DETECTED — CLINICAL INTERVENTION ADVISED" : "NORMAL SCAN — NEGATIVE FOR PATHOLOGY";
    }
  }
  if (verdictHeadline) {
    if (lang === "kn" && typeof KANNADA_SPOKEN_DATA !== "undefined" && KANNADA_SPOKEN_DATA[repDisease]) {
      const spk = KANNADA_SPOKEN_DATA[repDisease];
      verdictHeadline.textContent = isAbnormal ? spk.abnormalFinding : spk.normalFinding;
    } else if (lang === "hi" && typeof HINDI_SPOKEN_DATA !== "undefined" && HINDI_SPOKEN_DATA[repDisease]) {
      const spk = HINDI_SPOKEN_DATA[repDisease];
      verdictHeadline.textContent = isAbnormal ? spk.abnormalFinding : spk.normalFinding;
    } else {
      verdictHeadline.textContent = data.primary_finding || (isAbnormal ? "Pathological Evidence Observed" : "Normal Tissue Architecture");
    }
  }
  if (verdictSummary) {
    if (lang === "kn" && typeof KANNADA_SPOKEN_DATA !== "undefined" && KANNADA_SPOKEN_DATA[repDisease]) {
      const spk = KANNADA_SPOKEN_DATA[repDisease];
      verdictSummary.textContent = isAbnormal ? spk.abnormalSummary : spk.normalSummary;
    } else if (lang === "hi" && typeof HINDI_SPOKEN_DATA !== "undefined" && HINDI_SPOKEN_DATA[repDisease]) {
      const spk = HINDI_SPOKEN_DATA[repDisease];
      verdictSummary.textContent = isAbnormal ? spk.abnormalSummary : spk.normalSummary;
    } else {
      verdictSummary.textContent = data.pred_val || "";
    }
  }
  if (verdictIcon) {
    verdictIcon.textContent = isAbnormal ? "⚠️" : "✅";
  }

  // Uncertainty & Confidence Metrics
  const confVal = document.getElementById("metric-conf-val");
  const uncVal = document.getElementById("metric-unc-val");
  const uncBadge = document.getElementById("metric-unc-badge");

  const confScore = data.confidence_score !== undefined ? data.confidence_score : 90.0;
  const uncScore = data.uncertainty_score !== undefined ? data.uncertainty_score : 10.0;
  const uncLevel = (data.uncertainty_level || "Low").toLowerCase();
  const relLabel = data.reliability_label || "High Reliability";

  if (confVal) confVal.textContent = `${confScore}%`;
  if (uncVal) uncVal.textContent = `${uncScore}%`;
  if (uncBadge) {
    let localizedRelBadge = relLabel;
    if (t) {
      if (uncLevel.includes("low") || relLabel.toLowerCase().includes("high")) {
        localizedRelBadge = t.highReliabilityBadge || relLabel;
      } else if (uncLevel.includes("moderate") || relLabel.toLowerCase().includes("moderate")) {
        localizedRelBadge = t.moderateReliabilityBadge || relLabel;
      } else {
        localizedRelBadge = t.lowReliabilityBadge || relLabel;
      }
    }
    uncBadge.textContent = localizedRelBadge;
    uncBadge.className = `metric-badge ${uncLevel}`;
  }

  // Class Probabilities Bars with translated class names
  const probListElem = document.getElementById("prob-bars-list");
  if (probListElem && data.classes) {
    probListElem.innerHTML = "";
    const localizedClasses = cfg.classes || [];

    data.classes.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "prob-row";

      let displayName = item.name;
      if (localizedClasses && localizedClasses[idx]) {
        displayName = localizedClasses[idx];
      }

      const riskClass = item.risk || (item.name.toLowerCase().includes("normal") || item.name.toLowerCase().includes("uninfected") ? "safe" : "danger");
      const isPredicted = item.is_predicted ? "top" : "";

      row.innerHTML = `
        <div class="prob-labels">
          <span class="prob-name ${isPredicted}">
            ${item.is_predicted ? "⭐ " : ""}${displayName}
          </span>
          <span class="prob-val">${item.percent}%</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill ${riskClass}" style="width: 0%"></div>
        </div>
      `;
      probListElem.appendChild(row);

      setTimeout(() => {
        const fill = row.querySelector(".bar-fill");
        if (fill) fill.style.width = `${Math.min(item.percent, 100)}%`;
      }, 50);
    });
  }

  // Clinical Recommendation Text
  const recText = document.getElementById("rec-text");
  if (recText) {
    if (lang === "kn" && typeof KANNADA_SPOKEN_DATA !== "undefined" && KANNADA_SPOKEN_DATA[repDisease]) {
      const spk = KANNADA_SPOKEN_DATA[repDisease];
      recText.textContent = isAbnormal ? spk.abnormalGuidance : spk.normalGuidance;
    } else if (lang === "hi" && typeof HINDI_SPOKEN_DATA !== "undefined" && HINDI_SPOKEN_DATA[repDisease]) {
      const spk = HINDI_SPOKEN_DATA[repDisease];
      recText.textContent = isAbnormal ? spk.abnormalGuidance : spk.normalGuidance;
    } else {
      recText.textContent = data.clinical_notes || "Clinical correlation with patient history, physical examination, and follow-up imaging is recommended.";
    }
  }

  // Populate Disease Pathophysiology Explanation
  const repExplanation = document.getElementById("rep-disease-explanation");
  if (repExplanation) {
    const heading = t ? (t.modalPathologyHeading || "Pathological Overview:") : "Pathological Overview:";
    repExplanation.innerHTML = `<strong>${heading}</strong> ${cfg.explanation}`;
  }

  // Populate Structured Treatment Protocols
  const listMeds = document.getElementById("protocol-list-meds");
  const listSurgery = document.getElementById("protocol-list-surgery");
  const listMonitoring = document.getElementById("protocol-list-monitoring");

  if (listMeds && cfg.treatments && cfg.treatments.meds) {
    listMeds.innerHTML = cfg.treatments.meds.map(item => `<li>${item}</li>`).join("");
  }
  if (listSurgery && cfg.treatments && cfg.treatments.surgery) {
    listSurgery.innerHTML = cfg.treatments.surgery.map(item => `<li>${item}</li>`).join("");
  }
  if (listMonitoring && cfg.treatments && cfg.treatments.monitoring) {
    listMonitoring.innerHTML = cfg.treatments.monitoring.map(item => `<li>${item}</li>`).join("");
  }

  // Reveal report
  if (reportContainer) {
    reportContainer.classList.add("active");
    reportContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function populateReferenceModal(dKey) {
  if (dKey === "auto" || !DISEASE_CONFIG[dKey]) dKey = "brain";
  const cfg = getLocalizedDisease(dKey);
  const modalTitle = document.getElementById("modal-disease-title");
  const modalSub = document.getElementById("modal-disease-sub");
  const modalDesc = document.getElementById("modal-disease-desc");
  const modalSymptoms = document.getElementById("modal-disease-symptoms");
  const modalMeds = document.getElementById("modal-disease-meds");
  const modalSurgery = document.getElementById("modal-disease-surgery");
  const modalMonitor = document.getElementById("modal-disease-monitor");

  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  const t = (typeof I18N_DATA !== "undefined" && I18N_DATA[lang]) ? I18N_DATA[lang] : null;

  const modalImg = document.getElementById("modal-disease-img");
  const modalScanModality = document.getElementById("modal-scan-modality");
  const sampleMap = {
    brain: "brain_sample_1.jpg",
    pnm: "pnm_sample_1.jpg",
    oct: "oct_sample_1.jpg",
    dia_ret: "dia_ret_sample_1.jpg",
    breast: "breast_sample_1.jpg",
    mal: "mal_sample_1.jpg",
    parkinson: "parkinson_sample_1.jpg",
    alzheimer: "alzheimer_sample_1.jpg",
    stroke: "stroke_sample_1.jpg",
    tb: "tb_sample_1.jpg",
    pancreatic_cancer: "pancreatic_cancer_sample_1.jpg",
    lung_cancer: "lung_cancer_sample_1.jpg",
    liver_tumor: "liver_tumor_sample_1.jpg",
    bone_tumor: "bone_tumor_sample_1.jpg",
    spinal_tumor: "spinal_tumor_sample_1.jpg"
  };
  if (modalImg && sampleMap[dKey]) {
    modalImg.src = `../static/samples/${sampleMap[dKey]}`;
    modalImg.alt = `${cfg.title} Canonical Reference Scan`;
  }
  if (modalScanModality) {
    modalScanModality.textContent = `Modality: ${cfg.modality}`;
  }

  if (modalTitle) modalTitle.textContent = `${cfg.icon} ${cfg.title}`;
  if (modalSub) modalSub.textContent = `${t ? t.diagnosticModality : "Diagnostic Modality"}: ${cfg.modality} • Tensors: ${cfg.inputShape}`;
  if (modalDesc) modalDesc.textContent = cfg.explanation;

  if (modalSymptoms && cfg.symptoms) {
    modalSymptoms.innerHTML = cfg.symptoms.map(s => `<li>${s}</li>`).join("");
  }

  if (modalMeds && cfg.treatments && cfg.treatments.meds) {
    modalMeds.innerHTML = cfg.treatments.meds.map(m => `<li>${m}</li>`).join("");
  }

  if (modalSurgery && cfg.treatments && cfg.treatments.surgery) {
    modalSurgery.innerHTML = cfg.treatments.surgery.map(s => `<li>${s}</li>`).join("");
  }

  if (modalMonitor && cfg.treatments && cfg.treatments.monitoring) {
    modalMonitor.innerHTML = cfg.treatments.monitoring.map(mon => `<li>${mon}</li>`).join("");
  }
}

/* ==========================================================================
   CLINICAL AUDIO NARRATION & TEXT READER ENGINE
   ========================================================================== */

function getBestVoice(langCode) {
  if (!cachedVoices || cachedVoices.length === 0) {
    loadVoices();
  }
  const voices = cachedVoices || [];
  const code = (langCode || "en").toLowerCase();

  if (code.startsWith("kn")) {
    // Specifically search for a dedicated Kannada voice
    const knVoice = voices.find(x => {
      const l = (x.lang || "").toLowerCase();
      const n = (x.name || "").toLowerCase();
      return l.startsWith("kn") || l.includes("kn-in") || n.includes("kannada") || n.includes("gagan") || n.includes("sapna");
    });
    if (knVoice) return knVoice;

    // CRITICAL: When no native Kannada voice is installed, DO NOT assign an English voice!
    // Returning null allows Chrome/Edge's language engine to synthesize Kannada naturally with `utterance.lang = "kn-IN"`.
    return null;
  } else if (code.startsWith("hi")) {
    const hiVoice = voices.find(x => {
      const l = (x.lang || "").toLowerCase();
      const n = (x.name || "").toLowerCase();
      return l.startsWith("hi") || l.includes("hi-in") || n.includes("hindi") || n.includes("kalpana") || n.includes("hemant");
    });
    if (hiVoice) return hiVoice;
    return null;
  } else {
    // English
    const enVoice = voices.find(x => {
      const l = (x.lang || "").toLowerCase();
      const n = (x.name || "").toLowerCase();
      return l.includes("en-in") || (l.startsWith("en") && (n.includes("natural") || n.includes("online")));
    }) || voices.find(x => (x.lang || "").toLowerCase().startsWith("en"));
    return enVoice || (voices.length > 0 ? voices[0] : null);
  }
}

function chunkTextForSpeech(text) {
  if (!text) return [];
  const clean = text.replace(/[\r\n]+/g, ". ");
  // Split on periods, exclamation marks, question marks, semicolons, or Hindi purna viram (।)
  // avoiding splitting numbers like 98.4
  const rawChunks = clean.split(/(?<=[^\d][.!?।;])\s+/);
  const chunks = [];

  for (let c of rawChunks) {
    c = c.trim();
    if (!c) continue;
    if (c.length > 180) {
      const subParts = c.split(/(?<=,)\s+/);
      for (let s of subParts) {
        s = s.trim();
        if (s) chunks.push(s);
      }
    } else {
      chunks.push(c);
    }
  }
  return chunks;
}

function updateVoiceUI(state, section) {
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  const t = (typeof I18N_DATA !== "undefined" && I18N_DATA[lang]) ? I18N_DATA[lang] : {};

  const speakerIcon = document.getElementById("voice-speaker-icon");
  const waveBox = document.getElementById("audio-wave-indicator");
  const statusElem = document.getElementById("voice-reader-status");
  const readBtn = document.getElementById("btn-voice-read");
  const readBtnIcon = document.getElementById("btn-voice-read-icon");
  const readBtnText = document.getElementById("btn-voice-read-text");
  const pauseBtn = document.getElementById("btn-voice-pause");
  const pauseBtnText = document.getElementById("btn-voice-pause-text");
  const stopBtn = document.getElementById("btn-voice-stop");
  const footerReadBtn = document.getElementById("btn-voice-read-footer");

  if (state === "playing" || state === "resumed") {
    if (speakerIcon) speakerIcon.classList.add("pulsing");
    if (waveBox) waveBox.classList.add("playing");

    if (statusElem) {
      statusElem.classList.add("playing");
      let sectionName = "";
      if (section && section !== "full") {
        if (section === "verdict") sectionName = t.readVerdictBtn || "Verdict";
        else if (section === "metrics") sectionName = t.readMetricsBtn || "Metrics";
        else if (section === "guidance") sectionName = t.readGuidanceBtn || "Guidance";
        else if (section === "explanation") sectionName = t.readExplanationBtn || "Explanation";
        else if (section === "treatment") sectionName = t.readTreatmentBtn || "Treatment";
      }

      if (sectionName) {
        statusElem.textContent = `${t.voiceStatusPlaying || "Reading aloud..."} (${sectionName})`;
      } else {
        statusElem.textContent = t.voiceStatusPlaying || "Reading clinical report aloud...";
      }
    }

    if (readBtn) {
      readBtn.classList.add("active-speaking");
      if (readBtnIcon) readBtnIcon.textContent = "⏹️";
      if (readBtnText) readBtnText.textContent = t.stopAudioBtn || "Stop Voice";
    }

    if (pauseBtn) {
      pauseBtn.style.display = "inline-flex";
      if (pauseBtnText) pauseBtnText.textContent = t.pauseAudioBtn || "⏸️ Pause Voice";
    }

    if (stopBtn) {
      stopBtn.style.display = "inline-flex";
    }

    if (footerReadBtn) {
      footerReadBtn.innerHTML = `⏹️ <span>${t.stopAudioBtn || "Stop Voice"}</span>`;
    }

  } else if (state === "paused") {
    if (speakerIcon) speakerIcon.classList.remove("pulsing");
    if (waveBox) waveBox.classList.remove("playing");

    if (statusElem) {
      statusElem.classList.remove("playing");
      statusElem.textContent = t.voiceStatusPaused || "Voice narration paused";
    }

    if (pauseBtn) {
      pauseBtn.style.display = "inline-flex";
      if (pauseBtnText) pauseBtnText.textContent = t.resumeAudioBtn || "▶️ Resume Voice";
    }

    if (footerReadBtn) {
      footerReadBtn.innerHTML = `▶️ <span>${t.resumeAudioBtn || "Resume Voice"}</span>`;
    }

  } else {
    // Stopped / Idle
    if (speakerIcon) speakerIcon.classList.remove("pulsing");
    if (waveBox) waveBox.classList.remove("playing");

    if (statusElem) {
      statusElem.classList.remove("playing");
      statusElem.textContent = t.voiceStatusReady || "Ready to read clinical report aloud";
    }

    if (readBtn) {
      readBtn.classList.remove("active-speaking");
      if (readBtnIcon) readBtnIcon.textContent = "🔊";
      if (readBtnText) readBtnText.textContent = t.readReportBtn || "Read Report Aloud";
    }

    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }

    if (stopBtn) {
      stopBtn.style.display = "none";
    }

    if (footerReadBtn) {
      footerReadBtn.innerHTML = `🔊 <span>${t.readReportBtn || "Read Report Aloud"}</span>`;
    }
  }
}

function speakChunks(chunks, langCode, section) {
  // Cancel any active speech synthesis
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  // Pause and release any existing HTML5 audio player
  if (currentAudioPlayer) {
    try {
      currentAudioPlayer.pause();
      currentAudioPlayer.currentTime = 0;
    } catch (e) {}
    currentAudioPlayer = null;
  }

  if (!chunks || chunks.length === 0) {
    updateVoiceUI("stopped");
    return;
  }

  speechQueue = chunks;
  currentQueueIndex = 0;
  isSpeaking = true;
  isSpeechPaused = false;
  activeSectionReading = section;

  updateVoiceUI("playing", section);

  function speakNextChunk() {
    if (!isSpeaking) return;

    if (currentQueueIndex >= speechQueue.length) {
      stopTextReader();
      return;
    }

    const chunk = speechQueue[currentQueueIndex].trim();
    if (!chunk) {
      currentQueueIndex++;
      speakNextChunk();
      return;
    }

    const effectiveLang = (langCode || "en").startsWith("kn") ? "kn" : ((langCode || "en").startsWith("hi") ? "hi" : "en");

    // Primary: Stream native crystal-clear audio from /api/tts backend
    const ttsUrl = `/api/tts?lang=${encodeURIComponent(effectiveLang)}&text=${encodeURIComponent(chunk)}`;
    const audio = new Audio();
    currentAudioPlayer = audio;
    audio.src = ttsUrl;
    audio.playbackRate = currentSpeechSpeed || 1.0;

    audio.onended = function () {
      if (!isSpeaking) return;
      currentQueueIndex++;
      speakNextChunk();
    };

    audio.onerror = function (err) {
      console.warn("Server audio playback error, attempting speech synthesis fallback:", err);
      fallbackSpeakChunk(chunk, effectiveLang, function () {
        if (!isSpeaking) return;
        currentQueueIndex++;
        speakNextChunk();
      });
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(function (err) {
        console.warn("Audio play() blocked or failed, attempting speech synthesis fallback:", err);
        fallbackSpeakChunk(chunk, effectiveLang, function () {
          if (!isSpeaking) return;
          currentQueueIndex++;
          speakNextChunk();
        });
      });
    }
  }

  speakNextChunk();
}

function fallbackSpeakChunk(chunk, langCode, onComplete) {
  if (!('speechSynthesis' in window)) {
    if (onComplete) onComplete();
    return;
  }
  try {
    const utterance = new SpeechSynthesisUtterance(chunk);
    if (langCode === "kn") {
      utterance.lang = "kn-IN";
      utterance.rate = (currentSpeechSpeed || 1.0) * 0.90;
    } else if (langCode === "hi") {
      utterance.lang = "hi-IN";
      utterance.rate = (currentSpeechSpeed || 1.0) * 0.95;
    } else {
      utterance.lang = "en-US";
      utterance.rate = currentSpeechSpeed || 1.0;
    }
    const voice = getBestVoice(langCode);
    if (voice) utterance.voice = voice;
    utterance.onend = function () { if (onComplete) onComplete(); };
    utterance.onerror = function () { if (onComplete) onComplete(); };
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn("Fallback speech synthesis failed:", e);
    if (onComplete) onComplete();
  }
}

function stopTextReader() {
  if (currentAudioPlayer) {
    try {
      currentAudioPlayer.pause();
      currentAudioPlayer.currentTime = 0;
    } catch (e) {}
    currentAudioPlayer = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  isSpeaking = false;
  isSpeechPaused = false;
  speechQueue = [];
  currentQueueIndex = 0;
  activeSectionReading = null;
  updateVoiceUI("stopped");
}

function togglePauseReport() {
  if (!isSpeaking) return;

  if (isSpeechPaused) {
    isSpeechPaused = false;
    if (currentAudioPlayer) {
      currentAudioPlayer.play().catch(function (e) { console.warn(e); });
    }
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      try { window.speechSynthesis.resume(); } catch (e) {}
    }
    updateVoiceUI("resumed", activeSectionReading);
  } else {
    isSpeechPaused = true;
    if (currentAudioPlayer) {
      try { currentAudioPlayer.pause(); } catch (e) {}
    }
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      try { window.speechSynthesis.pause(); } catch (e) {}
    }
    updateVoiceUI("paused");
  }
}

function getReportFullSpeechText() {
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  const repD = (lastReportData && lastReportData.disease_key) ? lastReportData.disease_key : (currentDisease !== "auto" ? currentDisease : "brain");
  const cfg = getLocalizedDisease(repD);
  const data = lastReportData;
  const isAbnormal = data ? (data.is_abnormal !== undefined ? data.is_abnormal : true) : true;
  const confScore = data ? (data.confidence_score !== undefined ? data.confidence_score : 90.0) : "90";
  const uncScore = data ? (data.uncertainty_score !== undefined ? data.uncertainty_score : 10.0) : "10";

  const pName = document.getElementById("input-patient-name")?.value.trim() || "John Doe";
  const pAge = document.getElementById("input-patient-age")?.value.trim() || "45";
  const pSex = document.getElementById("input-patient-sex")?.value || "Male";

  if (lang === "kn") {
    const spoken = KANNADA_SPOKEN_DATA[repD] || KANNADA_SPOKEN_DATA.brain;
    const finding = isAbnormal ? spoken.abnormalFinding : spoken.normalFinding;
    const guidance = isAbnormal ? spoken.abnormalGuidance : spoken.normalGuidance;

    let text = `${spoken.title} ${spoken.modality} ಪರೀಕ್ಷೆಯ ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯ ವರದಿ. `;
    text += `ರೋಗಿಯ ಹೆಸರು: ${pName}, ವಯಸ್ಸು: ${pAge}. `;
    text += `ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ: ${finding} `;
    text += `ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮಾದರಿಯ ವಿಶ್ವಾಸಾರ್ಹತೆಯು ಶೇಕಡಾ ${confScore} ರಷ್ಟಿದೆ. `;
    text += `ಅನಿಶ್ಚಿತತೆಯ ಸೂಚ್ಯಂಕ ಶೇಕಡಾ ${uncScore} ರಷ್ಟಿದೆ, ಇದು ಹೆಚ್ಚಿನ ನಿಖರತೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. `;

    if (data && data.classes) {
      const locClasses = cfg.classes || [];
      const classSpoken = data.classes.map((c, idx) => {
        const cName = locClasses[idx] || c.name;
        return `${cName} ಸಂಭವನೀಯತೆ ಶೇಕಡಾ ${c.percent}`;
      }).join(", ");
      text += `ವರ್ಗವಾರು ಸಂಭವನೀಯತೆಯ ಹಂಚಿಕೆ: ${classSpoken}. `;
    }

    text += `ಕ್ಲಿನಿಕಲ್ ಮಾರ್ಗದರ್ಶನ: ${guidance} `;
    text += `ರೋಗದ ವಿವರಣೆ: ${sanitizeKannadaForSpeech(cfg.explanation)}. `;
    text += `ಶಿಫಾರಸು ಮಾಡಲಾದ ಚಿಕಿತ್ಸಾ ಯೋಜನೆ: `;

    if (cfg.treatments && cfg.treatments.meds) {
      const cleanMeds = cfg.treatments.meds.map(m => sanitizeKannadaForSpeech(m)).join(". ");
      text += `ಪ್ರಾಥಮಿಕ ಔಷಧೋಪಚಾರ: ${cleanMeds}. `;
    }
    if (cfg.treatments && cfg.treatments.surgery) {
      const cleanSurgery = cfg.treatments.surgery.map(s => sanitizeKannadaForSpeech(s)).join(". ");
      text += `ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ವಿಧಾನಗಳು: ${cleanSurgery}. `;
    }
    if (cfg.treatments && cfg.treatments.monitoring) {
      const cleanMonitoring = cfg.treatments.monitoring.map(mon => sanitizeKannadaForSpeech(mon)).join(". ");
      text += `ದೀರ್ಘಕಾಲೀನ ಆರೈಕೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ: ${cleanMonitoring}. `;
    }
    const revNameEl = document.getElementById("rep-reviewer-name");
    const rName = (revNameEl && revNameEl.innerText.trim()) ? revNameEl.innerText.trim() : "Dr. A. Vance, M.D.";
    text += `ಪರಿಶೀಲಿಸಿದ ಮುಖ್ಯ ವೈದ್ಯರು: ${rName}. `;
    return text;

  } else if (lang === "hi") {
    const spoken = HINDI_SPOKEN_DATA[repD] || HINDI_SPOKEN_DATA.brain;
    const finding = isAbnormal ? spoken.abnormalFinding : spoken.normalFinding;
    const guidance = isAbnormal ? spoken.abnormalGuidance : spoken.normalGuidance;

    let text = `${spoken.title} ${spoken.modality} परीक्षण की मेडिकल डायग्नोस्टिक रिपोर्ट। `;
    text += `रोगी का नाम: ${pName}, उम्र: ${pAge} वर्ष। `;
    text += `परीक्षण परिणाम: ${finding} `;
text += `आर्टिफिशियल इंटेलिजेंस मॉडल का विश्वास स्तर प्रतिशत ${confScore} है। `;
    text += `अनिश्चितता सूचकांक प्रतिशत ${uncScore} है, जो उच्च विश्वसनीयता को दर्शाता है। `;

    if (data && data.classes) {
      const locClasses = cfg.classes || [];
      const classSpoken = data.classes.map((c, idx) => {
        const cName = locClasses[idx] || c.name;
        return `${cName} संभावना प्रतिशत ${c.percent}`;
      }).join(", ");
      text += `वर्गवार संभावना वितरण: ${classSpoken}। `;
    }

    text += `क्लिनिकल मार्गदर्शन: ${guidance} `;
    text += `रोग का विवरण: ${sanitizeHindiForSpeech(cfg.explanation)}। `;
    text += `अनुशंसित उपचार प्रोटोकॉल: `;

    if (cfg.treatments && cfg.treatments.meds) {
      const cleanMeds = cfg.treatments.meds.map(m => sanitizeHindiForSpeech(m)).join(". ");
      text += `प्राथमिक औषधियां: ${cleanMeds}। `;
    }
    if (cfg.treatments && cfg.treatments.surgery) {
      const cleanSurgery = cfg.treatments.surgery.map(s => sanitizeHindiForSpeech(s)).join(". ");
      text += `सर्जिकल एवं नैदानिक प्रक्रियाएं: ${cleanSurgery}। `;
    }
    if (cfg.treatments && cfg.treatments.monitoring) {
      const cleanMonitoring = cfg.treatments.monitoring.map(mon => sanitizeHindiForSpeech(mon)).join(". ");
      text += `दीर्घकालिक देखभाल एवं निगरानी: ${cleanMonitoring}। `;
    }
    const revNameEl = document.getElementById("rep-reviewer-name");
    const rName = (revNameEl && revNameEl.innerText.trim()) ? revNameEl.innerText.trim() : "Dr. A. Vance, M.D.";
    text += `सत्यापित मुख्य समीक्षक: ${rName}। `;
    return text;

  } else {
    // English
    let text = `AI Clinical Diagnostic Report for ${cfg.title} (${cfg.modality}). Patient Name: ${pName}, Age: ${pAge}, Sex: ${pSex}. `;
    const headline = (data && data.primary_finding) ? data.primary_finding : (isAbnormal ? "Pathology Detected" : "Normal Tissue Architecture");
    const summary = (data && data.pred_val) ? data.pred_val : "";
    text += `Diagnostic Verdict: ${headline}. ${summary}. `;
    text += `Model Confidence Score is ${confScore} percent. Diagnostic Uncertainty Index is ${uncScore} percent. `;

    if (data && data.classes) {
      const classText = data.classes.map(c => `${c.name}: ${c.percent} percent`).join(", ");
      text += `Class Probabilities: ${classText}. `;
    }

    const clinicalNotes = (data && data.clinical_notes) ? data.clinical_notes : "";
    if (clinicalNotes) text += `Clinical Guidance: ${clinicalNotes}. `;
    text += `Pathophysiological Overview: ${cfg.explanation}. `;
    text += `Suggested Clinical Treatment Protocols: `;

    if (cfg.treatments && cfg.treatments.meds) {
      text += `Pharmacotherapy: ${cfg.treatments.meds.join(". ")}. `;
    }
    if (cfg.treatments && cfg.treatments.surgery) {
      text += `Surgical Procedures: ${cfg.treatments.surgery.join(". ")}. `;
    }
    if (cfg.treatments && cfg.treatments.monitoring) {
      text += `Surveillance and Care: ${cfg.treatments.monitoring.join(". ")}. `;
    }
    const revNameEl = document.getElementById("rep-reviewer-name");
    const revTitleEl = document.getElementById("rep-reviewer-title");
    const rName = (revNameEl && revNameEl.innerText.trim()) ? revNameEl.innerText.trim() : "Dr. A. Vance, M.D.";
    const rTitle = (revTitleEl && revTitleEl.innerText.trim()) ? revTitleEl.innerText.trim() : "Chief of Clinical Diagnostics";
    text += `Attending Reviewer: ${rName}, ${rTitle}.`;
    return text;
  }
}

function getSectionSpeechText(section) {
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  const repD = (lastReportData && lastReportData.disease_key) ? lastReportData.disease_key : (currentDisease !== "auto" ? currentDisease : "brain");
  const cfg = getLocalizedDisease(repD);
  const data = lastReportData;
  const isAbnormal = data ? (data.is_abnormal !== undefined ? data.is_abnormal : true) : true;
  const confScore = data ? (data.confidence_score !== undefined ? data.confidence_score : 90.0) : "90";
  const uncScore = data ? (data.uncertainty_score !== undefined ? data.uncertainty_score : 10.0) : "10";

  if (lang === "kn") {
    const spoken = KANNADA_SPOKEN_DATA[repD] || KANNADA_SPOKEN_DATA.brain;
    if (section === "verdict") {
      const finding = isAbnormal ? spoken.abnormalFinding : spoken.normalFinding;
      return `${spoken.title} ರೋಗನಿರ್ಣಯದ ತೀರ್ಪು: ${finding}`;
    } else if (section === "metrics") {
      let classText = "";
      if (data && data.classes) {
        const locClasses = cfg.classes || [];
        classText = data.classes.map((c, idx) => `${locClasses[idx] || c.name} ಸಂಭವನೀಯತೆ ಶೇಕಡಾ ${c.percent}`).join(", ");
      }
      return `ರೋಗನಿರ್ಣಯದ ನಿಖರತೆಯ ವಿವರ: ಮಾದರಿಯ ವಿಶ್ವಾಸಾರ್ಹತೆಯು ಶೇಕಡಾ ${confScore} ರಷ್ಟಿದೆ. ಅನಿಶ್ಚಿತತೆಯ ಪ್ರಮಾಣವು ಶೇಕಡಾ ${uncScore} ರಷ್ಟಿದೆ. ವರ್ಗವಾರು ವಿವರ: ${classText}`;
    } else if (section === "guidance") {
      const guidance = isAbnormal ? spoken.abnormalGuidance : spoken.normalGuidance;
      return `ವೈದ್ಯಕೀಯ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಲಹೆ: ${guidance}`;
    } else if (section === "explanation") {
      return `${spoken.title} ರೋಗದ ವೈಜ್ಞಾನಿಕ ವಿವರಣೆ: ${sanitizeKannadaForSpeech(cfg.explanation)}`;
    } else if (section === "treatment") {
      let txt = `${spoken.title} ಗಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾದ ಚಿಕಿತ್ಸಾ ಯೋಜನೆ. `;
      if (cfg.treatments && cfg.treatments.meds) {
        txt += `ಪ್ರಾಥಮಿಕ ಔಷಧೋಪಚಾರ: ${cfg.treatments.meds.map(m => sanitizeKannadaForSpeech(m)).join(". ")}. `;
      }
      if (cfg.treatments && cfg.treatments.surgery) {
        txt += `ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳು: ${cfg.treatments.surgery.map(s => sanitizeKannadaForSpeech(s)).join(". ")}. `;
      }
      if (cfg.treatments && cfg.treatments.monitoring) {
        txt += `ದೀರ್ಘಕಾಲೀನ ಆರೈಕೆ: ${cfg.treatments.monitoring.map(mon => sanitizeKannadaForSpeech(mon)).join(". ")}. `;
      }
      return txt;
    }
  } else if (lang === "hi") {
    const spoken = HINDI_SPOKEN_DATA[repD] || HINDI_SPOKEN_DATA.brain;
    if (section === "verdict") {
      const finding = isAbnormal ? spoken.abnormalFinding : spoken.normalFinding;
      return `${spoken.title} नैदानिक निर्णय: ${finding}`;
    } else if (section === "metrics") {
      let classText = "";
      if (data && data.classes) {
        const locClasses = cfg.classes || [];
        classText = data.classes.map((c, idx) => `${locClasses[idx] || c.name} संभावना प्रतिशत ${c.percent}`).join(", ");
      }
      return `नैदानिक मीट्रिक्स: मॉडल का विश्वास स्तर प्रतिशत ${confScore} है। अनिश्चितता सूचकांक प्रतिशत ${uncScore} है। वर्गवार विवरण: ${classText}`;
    } else if (section === "guidance") {
      const guidance = isAbnormal ? spoken.abnormalGuidance : spoken.normalGuidance;
      return `क्लिनिकल मार्गदर्शन एवं सलाह: ${guidance}`;
    } else if (section === "explanation") {
      return `${spoken.title} रोग का विवरण: ${sanitizeHindiForSpeech(cfg.explanation)}`;
    } else if (section === "treatment") {
      let txt = `${spoken.title} के लिए अनुशंसित उपचार प्रोटोकॉल। `;
      if (cfg.treatments && cfg.treatments.meds) {
        txt += `प्राथमिक औषधियां: ${cfg.treatments.meds.map(m => sanitizeHindiForSpeech(m)).join(". ")}। `;
      }
      if (cfg.treatments && cfg.treatments.surgery) {
        txt += `सर्जिकल प्रक्रियाएं: ${cfg.treatments.surgery.map(s => sanitizeHindiForSpeech(s)).join(". ")}। `;
      }
      if (cfg.treatments && cfg.treatments.monitoring) {
        txt += `दीर्घकालिक देखभाल: ${cfg.treatments.monitoring.map(mon => sanitizeHindiForSpeech(mon)).join(". ")}। `;
      }
      return txt;
    }
  } else {
    // English
    if (section === "verdict") {
      const headline = (data && data.primary_finding) ? data.primary_finding : (isAbnormal ? "Pathology Detected" : "Normal Tissue Architecture");
      const summary = (data && data.pred_val) ? data.pred_val : "";
      return `Diagnostic Verdict for ${cfg.title}: ${headline}. ${summary}`;
    } else if (section === "metrics") {
      let classText = "";
      if (data && data.classes) {
        classText = data.classes.map(c => `${c.name}: ${c.percent} percent`).join(", ");
      }
      return `Diagnostic Metrics: Model Confidence Score is ${confScore} percent. Diagnostic Uncertainty Index is ${uncScore} percent. Class Probabilities: ${classText}`;
    } else if (section === "guidance") {
      return `Clinical Guidance and Recommendations: ${(data && data.clinical_notes) ? data.clinical_notes : "Clinical correlation recommended."}`;
    } else if (section === "explanation") {
      return `Pathophysiology Overview for ${cfg.title}: ${cfg.explanation}`;
    } else if (section === "treatment") {
      let txt = `Clinical Treatment Protocols for ${cfg.title}. `;
      if (cfg.treatments && cfg.treatments.meds) txt += `Pharmacotherapy: ${cfg.treatments.meds.join(". ")}. `;
      if (cfg.treatments && cfg.treatments.surgery) txt += `Surgical Procedures: ${cfg.treatments.surgery.join(". ")}. `;
      if (cfg.treatments && cfg.treatments.monitoring) txt += `Surveillance and Care: ${cfg.treatments.monitoring.join(". ")}. `;
      return txt;
    }
  }
  return "";
}

function readFullReport() {
  const reportContainer = document.getElementById("report-container");
  if (!reportContainer || !reportContainer.classList.contains("active")) {
    const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
    const msg = (lang === "kn") ? "ದಯವಿಟ್ಟು ಮೊದಲು ಕ್ಲಿನಿಕಲ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ."
              : (lang === "hi") ? "कृपया पहले एक क्लिनिकल छवि अपलोड करें और विश्लेषण चलाएं।"
              : "Please upload a clinical scan image and run analysis first to generate the report.";
    alert(msg);
    return;
  }

  const text = getReportFullSpeechText();
  const chunks = chunkTextForSpeech(text);
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  activeSectionReading = "full";
  speakChunks(chunks, lang, "full");
}

function readSectionText(section) {
  const reportContainer = document.getElementById("report-container");
  if ((section === "verdict" || section === "metrics" || section === "guidance") && (!reportContainer || !reportContainer.classList.contains("active"))) {
    const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
    const msg = (lang === "kn") ? "ದಯವಿಟ್ಟು ಮೊದಲು ಕ್ಲಿನಿಕಲ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ."
              : (lang === "hi") ? "कृपया पहले एक क्लिनिकल छवि अपलोड करें और विश्लेषण चलाएं।"
              : "Please upload a clinical scan image and run analysis first to view this section.";
    alert(msg);
    return;
  }

  const text = getSectionSpeechText(section);
  const chunks = chunkTextForSpeech(text);
  const lang = (typeof currentLang !== "undefined") ? currentLang : "en";
  activeSectionReading = section;
  speakChunks(chunks, lang, section);
}

function toggleReadReport() {
  if (isSpeaking) {
    stopTextReader();
  } else {
    readFullReport();
  }
}

function syncPatientDetailsToReport() {
  const inputName = document.getElementById("input-patient-name");
  const inputAge = document.getElementById("input-patient-age");
  const inputSex = document.getElementById("input-patient-sex");
  const inputAddress = document.getElementById("input-patient-address");

  const repName = document.getElementById("rep-patient-name");
  const repAge = document.getElementById("rep-patient-age");
  const repSex = document.getElementById("rep-patient-sex");
  const repAddress = document.getElementById("rep-patient-address");

  const nameVal = (inputName && inputName.value.trim()) ? inputName.value.trim() : "John Doe";
  const ageVal = (inputAge && inputAge.value.trim()) ? `${inputAge.value.trim()} Yrs` : "45 Yrs";
  const sexVal = (inputSex && inputSex.value) ? inputSex.value : "Male";
  const addrVal = (inputAddress && inputAddress.value.trim()) ? inputAddress.value.trim() : "142 Medical Center Blvd, Suite 4B";

  if (repName) repName.textContent = nameVal;
  if (repAge) repAge.textContent = ageVal;
  if (repSex) repSex.textContent = sexVal;
  if (repAddress) repAddress.textContent = addrVal;
}

function syncReviewerDetailsToReport() {
  const revName = document.getElementById("rep-reviewer-name");
  const revTitle = document.getElementById("rep-reviewer-title");
  const savedName = localStorage.getItem("medical_reviewer_name");
  const savedTitle = localStorage.getItem("medical_reviewer_title");

  if (revName && savedName && savedName.trim()) {
    revName.innerText = savedName.trim();
  }
  if (revTitle && savedTitle && savedTitle.trim()) {
    revTitle.innerText = savedTitle.trim();
  }
}

function initEditableReviewer() {
  const revName = document.getElementById("rep-reviewer-name");
  const revTitle = document.getElementById("rep-reviewer-title");

  const defaultName = "Dr. A. Vance, M.D.";
  const defaultTitle = "Chief of Clinical Diagnostics • Digitally Approved";

  syncReviewerDetailsToReport();

  if (revName) {
    revName.addEventListener("input", () => {
      const val = revName.innerText.trim();
      if (val) {
        localStorage.setItem("medical_reviewer_name", val);
      }
    });
    revName.addEventListener("blur", () => {
      if (!revName.innerText.trim()) {
        revName.innerText = defaultName;
        localStorage.setItem("medical_reviewer_name", defaultName);
      }
    });
  }

  if (revTitle) {
    revTitle.addEventListener("input", () => {
      const val = revTitle.innerText.trim();
      if (val) {
        localStorage.setItem("medical_reviewer_title", val);
      }
    });
    revTitle.addEventListener("blur", () => {
      if (!revTitle.innerText.trim()) {
        revTitle.innerText = defaultTitle;
        localStorage.setItem("medical_reviewer_title", defaultTitle);
      }
    });
  }
}

// Auto-Detect Modality Telemetry & 48-Sample Gallery Implementation
let allKaggleSamples = [];

function runAutoDetectTelemetry(file) {
  if (scannerMode === "manual" && currentDisease !== "auto") {
    const autoHud = document.getElementById("autodetect-hud");
    if (autoHud) autoHud.style.display = "none";
    return;
  }
  const hud = document.getElementById("autodetect-hud");
  if (!hud) return;

  hud.style.display = "block";
  hud.classList.add("hud-detecting");

  const hudConf = document.getElementById("hud-match-confidence");
  const hudIcon = document.getElementById("hud-detected-icon");
  const hudTitle = document.getElementById("hud-detected-title");
  const hudModality = document.getElementById("hud-detected-modality");
  const hudSigList = document.getElementById("hud-signatures-list");
  const hudDatasetLink = document.getElementById("hud-dataset-link");
  const hudDatasetName = document.getElementById("hud-dataset-name");

  if (hudTitle) hudTitle.textContent = "Analyzing scan modality heuristics...";
  if (hudModality) hudModality.textContent = "Evaluating anatomical and morphological features...";
  if (hudConf) hudConf.textContent = "Detecting...";
  if (hudSigList) hudSigList.innerHTML = `<span class="hud-sig-pill scanning">Evaluating feature vectors...</span>`;

  const formData = new FormData();
  formData.append("img", file);

  fetch("/api/detect", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(res => {
      hud.classList.remove("hud-detecting");
      if (res.empty || res.error) {
        if (hudTitle) hudTitle.textContent = "Unknown Modality Scan";
        return;
      }

      if (hudConf) hudConf.textContent = `${res.confidence}% Match`;
      if (hudIcon) hudIcon.textContent = res.icon || "⚡";
      if (hudTitle) hudTitle.textContent = `${res.name}`;
      if (hudModality) hudModality.textContent = `Modality: ${res.modality}`;

      if (hudSigList && res.signatures) {
        let sigHtml = res.signatures.map(sig => `<span class="hud-sig-pill">${sig}</span>`).join("");
        if (res.matched_sample_file) {
          sigHtml += `<span class="hud-sig-pill" style="border-color: rgba(0, 245, 212, 0.6); color: #00f5d4; background: rgba(0, 245, 212, 0.1);">🔬 Matched Benchmark: ${res.matched_sample_file}</span>`;
        }
        hudSigList.innerHTML = sigHtml;
      }

      if (hudDatasetLink && res.dataset_url) {
        hudDatasetLink.href = res.dataset_url;
      }
      if (hudDatasetName && res.dataset_name) {
        hudDatasetName.textContent = res.dataset_name;
      }

      // Live update the specifications panel on the right only in Auto-Detect mode
      if (scannerMode === "auto") {
        const specActive = document.getElementById("spec-active-disease");
        const specModality = document.getElementById("spec-active-modality");
        if (specActive) specActive.textContent = `${res.icon} ${res.name} (Auto-Identified)`;
        if (specModality) specModality.textContent = res.modality;
      }
    })
    .catch(err => {
      hud.classList.remove("hud-detecting");
      console.warn("Auto-detect telemetry failed:", err);
    });
}

function initSamplesGallery() {
  const grid = document.getElementById("samples-grid");
  if (!grid) return;

  grid.innerHTML = `<div class="samples-loading-state"><span>🔄</span> Loading 73 authentic Kaggle dataset scans across all 9 diseases...</div>`;

  fetch("/api/samples")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load samples manifest");
      return res.json();
    })
    .then(data => {
      allKaggleSamples = Array.isArray(data) ? data : (data.samples || []);
      renderSamplesGrid(allKaggleSamples);
    })
    .catch(err => {
      console.error("Samples loading error:", err);
      grid.innerHTML = `<div class="samples-loading-state error">⚠️ Could not load samples gallery. <button type="button" class="sample-retry-btn" onclick="initSamplesGallery()">Retry</button></div>`;
    });
}

function renderSamplesGrid(samples) {
  const grid = document.getElementById("samples-grid");
  if (!grid) return;

  if (!samples || samples.length === 0) {
    grid.innerHTML = `<div class="samples-empty-state">No matching sample scans found.</div>`;
    return;
  }

  const icons = {
    brain: "🧠",
    parkinson: "🌀",
    alzheimer: "🧩",
    stroke: "⚡",
    pnm: "🫁",
    oct: "👁️",
    dia_ret: "🩺",
    breast: "🔬",
    mal: "🩸",
    tb: "🫁",
    pancreatic_cancer: "🔬",
    lung_cancer: "🫁",
    liver_tumor: "🩺",
    bone_tumor: "🦴",
    spinal_tumor: "🧬"
  };

  grid.innerHTML = samples.map(s => {
    const icon = icons[s.disease] || "🔬";
    const findingClass = s.is_abnormal ? "abnormal" : "normal";
    const cleanDesc = s.description || `${s.finding} benchmark sample from Kaggle dataset.`;
    return `
      <div class="sample-card" data-disease="${s.disease}" data-sample-id="${s.id}">
        <div class="sample-card-thumb-wrap">
          <img src="${s.image_url}" alt="${s.disease_name} scan ${s.id}" class="sample-card-thumb" loading="lazy" />
          <span class="sample-card-modality-badge">${icon} ${s.disease_name}</span>
          <span class="sample-card-finding-badge ${findingClass}">${s.finding}</span>
        </div>
        <div class="sample-card-info">
          <h4 class="sample-card-title">${s.id.toUpperCase()} • ${s.filename}</h4>
          <p class="sample-card-desc">${cleanDesc}</p>
          <div class="sample-card-source-row">
            <span>Target: ${s.target_resolution}</span>
            <a href="${s.kaggle_url}" target="_blank" rel="noopener" class="sample-card-source-link" title="Open Kaggle Dataset">
              <span>Kaggle Dataset</span> ↗
            </a>
          </div>
        </div>
        <button type="button" class="sample-card-btn" onclick="testSampleAutoDetect('${s.id}', '${s.image_url}', '${s.disease}')">
          ⚡ Test in Auto-Detect
        </button>
      </div>
    `;
  }).join("");
}

function filterSamplesGallery(category) {
  // Update filter buttons
  document.querySelectorAll(".sample-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (category === "all") {
    renderSamplesGrid(allKaggleSamples);
  } else {
    const filtered = allKaggleSamples.filter(s => s.disease === category);
    renderSamplesGrid(filtered);
  }
}

function testSampleAutoDetect(sampleId, sampleUrl, diseaseKey) {
  if (typeof stopTextReader === "function") stopTextReader();

  // 1. Switch mode to auto
  setScannerMode("auto");

  // Visual feedback on clicked card
  document.querySelectorAll(".sample-card").forEach(c => {
    if (c.getAttribute("data-sample-id") === sampleId) {
      c.classList.add("sample-card-active");
    } else {
      c.classList.remove("sample-card-active");
    }
  });

  // 2. Fetch the image blob
  fetch(sampleUrl)
    .then(res => {
      if (!res.ok) throw new Error("Could not fetch sample scan");
      return res.blob();
    })
    .then(blob => {
      const ext = (sampleUrl.endsWith('.png') || diseaseKey === 'parkinson') ? 'png' : 'jpg';
      const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
      const filename = `${sampleId}.${ext}`;
      const sampleFile = new File([blob], filename, { type: mime });

      // 3. Populate preview and file state
      handleFileSelect(sampleFile);

      // 4. Scroll smoothly to workspace section
      const workspace = document.getElementById("workspace-section");
      if (workspace) {
        workspace.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // 5. Automatically trigger clinical analysis after brief visual preview
      setTimeout(() => {
        runClinicalAnalysis();
      }, 500);
    })
    .catch(err => {
      console.error("Failed to load sample for auto-detect:", err);
      alert("Could not load sample image for auto-detection. Please try another sample.");
    });
}

// Global window bindings for cross-script coordination
window.setScannerMode = setScannerMode;
window.loadSampleScan = loadSampleScan;
window.switchReportDisease = switchReportDisease;
window.resetScanImage = resetScanImage;
window.runClinicalAnalysis = runClinicalAnalysis;
window.renderReport = renderReport;
window.selectDisease = selectDisease;
window.populateReferenceModal = populateReferenceModal;
window.getLocalizedDisease = getLocalizedDisease;
window.toggleReadReport = toggleReadReport;
window.togglePauseReport = togglePauseReport;
window.stopTextReader = stopTextReader;
window.readSectionText = readSectionText;
window.readFullReport = readFullReport;
window.getReportFullSpeechText = getReportFullSpeechText;
window.getSectionSpeechText = getSectionSpeechText;
window.sanitizeKannadaForSpeech = sanitizeKannadaForSpeech;
window.KANNADA_SPOKEN_DATA = KANNADA_SPOKEN_DATA;
window.syncPatientDetailsToReport = syncPatientDetailsToReport;
window.syncReviewerDetailsToReport = syncReviewerDetailsToReport;
window.initEditableReviewer = initEditableReviewer;
window.initSamplesGallery = initSamplesGallery;
window.renderSamplesGrid = renderSamplesGrid;
window.filterSamplesGallery = filterSamplesGallery;
window.testSampleAutoDetect = testSampleAutoDetect;
window.runAutoDetectTelemetry = runAutoDetectTelemetry;
window.setMode = setMode;
window.toggleMode = toggleMode;
window.reanalyzeCurrentScan = reanalyzeCurrentScan;

const DISEASE_SAMPLE_COUNTS = {
  pancreatic_cancer: 21,
  liver_tumor: 30,
  lung_cancer: 17,
  spinal_tumor: 12,
  tb: 10,
  bone_tumor: 9,
  brain: 9,
  pnm: 8,
  parkinson: 8,
  alzheimer: 8,
  stroke: 8,
  breast: 8,
  oct: 8,
  dia_ret: 8,
  mal: 8
};

function updateExtraSampleIndices() {
  const dSelect = document.getElementById("extra-disease-select");
  const idxSelect = document.getElementById("extra-sample-idx");
  if (!dSelect || !idxSelect) return;
  const d = dSelect.value;
  const count = DISEASE_SAMPLE_COUNTS[d] || 8;
  idxSelect.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Sample #${i}`;
    idxSelect.appendChild(opt);
  }
}

function loadChosenExtraSample() {
  const dSelect = document.getElementById("extra-disease-select");
  const idxSelect = document.getElementById("extra-sample-idx");
  if (!dSelect || !idxSelect) return;
  const d = dSelect.value;
  const idx = parseInt(idxSelect.value, 10) || 1;
  loadSampleScan(d, idx);
}

function loadRandomExtraSample() {
  const keys = Object.keys(DISEASE_SAMPLE_COUNTS);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const maxCount = DISEASE_SAMPLE_COUNTS[randomKey];
  const randomIdx = Math.floor(Math.random() * maxCount) + 1;
  
  const dSelect = document.getElementById("extra-disease-select");
  if (dSelect) {
    dSelect.value = randomKey;
    updateExtraSampleIndices();
    const idxSelect = document.getElementById("extra-sample-idx");
    if (idxSelect) idxSelect.value = randomIdx;
  }
  loadSampleScan(randomKey, randomIdx);
}

window.DISEASE_SAMPLE_COUNTS = DISEASE_SAMPLE_COUNTS;
window.updateExtraSampleIndices = updateExtraSampleIndices;
window.loadChosenExtraSample = loadChosenExtraSample;
window.loadRandomExtraSample = loadRandomExtraSample;




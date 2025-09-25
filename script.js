// ========================
// Require login
// ========================
function requireLogin(allowHome = false) {
  const user = localStorage.getItem("loggedInUser");
  if (!user && !allowHome) {
    alert("Login required to view this page!");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// ========================
// Documents Database
// ========================
const documentsDB = {
  "Nursing": {
    "Year 1": [
      { title: "NMT04101: INFECTION PREVENTION AND CONTROL", type: "notes", file: "docs/NMT04101.doc" },
      { title: "NMT04102: PROFESSIONALISM IN NURSING", type: "notes", file: "docs/NMT04102.doc" },
      { title: "NMT04103: HUMAN ANATOMY AND PHYSIOLOGY", type: "notes", file: "docs/NMT04103.doc" },
      { title: "NMT04104: BASIC COMPUTER APPLICATIONS", type: "notes", file: "docs/NMT04104.doc" },
      { title: "NMT04105: COMMUNICATION SKILLS", type: "notes", file: "docs/NMT04105.doc" },
      { title: "NMT04106: PARASITOLOGY AND MEDICAL ENTOMOLOGY", type: "notes", file: "docs/NMT04106.doc" },
      { title: "NMT04207: APPLICATION OF NURSING PROCESS AND THEORY", type: "notes", file: "docs/NMT04207.doc" },
      { title: "NMT04208: BASIC CLINICAL NURSING", type: "notes", file: "docs/NMT04208.doc" },
      { title: "NMT04209: BASIC PHARMACOLOGY", type: "notes", file: "docs/NMT04209.doc" },
      { title: "NMT04210: BASICS OF HEALTH INFORMATION MANAGEMENT", type: "notes", file: "docs/NMT04210.doc" },
      { title: "NMT04211: DISASTER AND EMERGENCY PREPAREDNESS", type: "notes", file: "docs/NMT04211.doc" },
      { title: "NMT04212: ENTREPRENEURSHIP", type: "notes", file: "docs/NMT04212.doc" },
      { title: "Portfolio Sample", type: "portfolio", file: "docs/nursing_year1_portfolio.docx" }
    ],
    "Year 2": [
      { title: "NMT 05101: REPRODUCTIVE HEALTH CARE", type: "notes", file: "docs/nmt_05101_reproductive_health.docx" },
      { title: "NMT 05102: CHILD HEALTH", type: "notes", file: "docs/nmt_05102_child_health.docx" },
      { title: "NMT 05103: CARE OF A SICK CHILD", type: "notes", file: "docs/nmt_05103_care_sick_child.docx" },
      { title: "NMT 05104: MEDICAL CONDITIONS", type: "notes", file: "docs/nmt_05104_medical_conditions.docx" },
      { title: "NMT 05105: SURGICAL CONDITIONS", type: "notes", file: "docs/nmt_05105_surgical_conditions.docx" },
      { title: "NMT 05106: MENTAL HEALTH NURSING", type: "notes", file: "docs/nmt_05106_mental_health.docx" },
      { title: "NMT 05107: WOMAN DURING ANTENATAL PERIODS", type: "notes", file: "docs/nmt_05107_antenatal_care.docx" },
      { title: "NMT 05208: WOMAN DURING NORMAL LABOR & PUEPERIUM", type: "notes", file: "docs/nmt_05208_normal_labor_pueperium.docx" },
      { title: "NMT 05209: PRE-REFERRAL / ABNORMAL PREGNANCY", type: "notes", file: "docs/nmt_05209_abnormal_pregnancy.docx" },
      { title: "NMT 05210: CARE OF NORMAL NEWBORN", type: "notes", file: "docs/nmt_05210_normal_newborn.docx" },
      { title: "NMT 05211: MANAGEMENT OF COMMUNICABLE DISEASES", type: "notes", file: "docs/nmt_05211_communicable_diseases.docx" },
      { title: "NMT 05212: COMMUNITY HEALTH NURSING", type: "notes", file: "docs/nmt_05212_community_health.docx" },
      { title: "Past Paper - 2023", type: "pastpaper", file: "docs/nursing_year2_pastpaper.pdf" }
    ],
    "Year 3": [
      { title: "NMT 06101: ABNORMAL PREGNANCY, LABOUR AND PUERPERIUM", type: "notes", file: "docs/nmt_06101_abnormal_pregnancy_labour.docx" },
      { title: "NMT 06102: WOMAN WITH OBSTETRIC EMERGENCY CONDITIONS", type: "notes", file: "docs/nmt_06102_obstetric_emergencies.docx" },
      { title: "NMT 06103: NEWBORNS WITH ABNORMAL CONDITIONS", type: "notes", file: "docs/nmt_06103_abnormal_newborns.docx" },
      { title: "NMT 06104: SUPERVISION IN NURSING AND MIDWIFERY", type: "notes", file: "docs/nmt_06104_supervision_nursing_midwifery.docx" },
      { title: "NMT 06105: BASICS OF EPIDEMIOLOGY AND BIOSTATISTICS", type: "notes", file: "docs/nmt_06105_epidemiology_biostatistics.docx" },
      { title: "NMT 06106: FUNDAMENTALS OF RESEARCH", type: "notes", file: "docs/nmt_06106_research_fundamentals.docx" },
      { title: "NMT 06208: CANCER AND TUMORS", type: "notes", file: "docs/nmt_06208_cancer_tumors.docx" },
      { title: "NMT 06209: SURGICAL CONDITIONS", type: "notes", file: "docs/nmt_06209_surgical_conditions.docx" },
      { title: "NMT 06210: REPRODUCTIVE HEALTH", type: "notes", file: "docs/nmt_06210_reproductive_health.docx" },
      { title: "NMT 06211: MENTAL HEALTH", type: "notes", file: "docs/nmt_06211_mental_health.docx" },
      { title: "Past Paper - 2024", type: "pastpaper", file: "docs/nursing_year3_pastpaper.pdf" }
    ]
  },

  "Pharmacist": {
  "Year 1": [
    { title: "PST 04101: DISPENSING", type: "notes", file: "docs/PST04101.docx" },
    { title: "PST 04102: DISEASE CONTROL AND PREVENTION", type: "notes", file: "docs/PST04102.docx" },
    { title: "PST 04103: HUMAN ANATOMY AND PHYSIOLOGY", type: "notes", file: "docs/PST04103.docx" },
    { title: "PST 04104: PHARMACEUTICAL DOSAGE FORMS", type: "notes", file: "docs/PST04104.docx" },
    { title: "PST 04105: PHARMACEUTICAL CALCULATIONS", type: "notes", file: "docs/PST04105.docx" },
    { title: "PST 04106: COMMUNICATION SKILLS", type: "notes", file: "docs/PST04106.docx" },
    { title: "PST 04107: BASIC COMPUTER APPLICATIONS", type: "notes", file: "docs/PST04107.docx" },
    { title: "PST 04208: LAW AND ETHICS IN PHARMACY PRACTICE", type: "notes", file: "docs/PST04208.docx" },
    { title: "PST 04209: COMPOUNDING OF PHARMACEUTICAL LIQUID PREPARATIONS", type: "notes", file: "docs/PST04209.docx" },
    { title: "PST 04210: PHARMACEUTICAL INORGANIC CHEMISTRY", type: "notes", file: "docs/PST04210.docx" },
    { title: "PST 04211: BASIC PHARMACOLOGY", type: "notes", file: "docs/PST04211.docx" },
    { title: "PST 04212: MEDICAL STORES KEEPING", type: "notes", file: "docs/PST04212.docx" },
    { title: "PST 04213: PHARMACY PRACTICE", type: "notes", file: "docs/PST04213.docx" }
  ],
  "Year 2": [
    { title: "PST 05101: MEDICINES AND MEDICAL SUPPLIES MANAGEMENT", type: "notes", file: "docs/PST05101.docx" },
    { title: "PST 05102: LAW AND POLICIES IN PHARMACY PRACTICE", type: "notes", file: "docs/PST05102.docx" },
    { title: "PST 05103: PHARMACEUTICAL MICROBIOLOGY", type: "notes", file: "docs/PST05103.docx" },
    { title: "PST 05104: PHARMACOLOGY AND THERAPEUTICS", type: "notes", file: "docs/PST05104.docx" },
    { title: "PST 05105: RATIONAL USE OF MEDICINES", type: "notes", file: "docs/PST05105.docx" },
    { title: "PST 05106: PHARMACEUTICAL ORGANIC CHEMISTRY", type: "notes", file: "docs/PST05106.docx" },
    { title: "PST 05207: QUALITY ASSURANCE OF PHARMACEUTICAL PRODUCTS", type: "notes", file: "docs/PST05207.docx" },
    { title: "PST 05208: PHARMACEUTICS THEORY AND COMPOUNDING", type: "notes", file: "docs/PST05208.docx" },
    { title: "PST 05209: HEALTH INFORMATION MANAGEMENT", type: "notes", file: "docs/PST05209.docx" },
    { title: "PST 05210: BASIC PHARMACOGNOSY", type: "notes", file: "docs/PST05210.docx" },
    { title: "PST 05211: PHARMACY PRACTICE", type: "notes", file: "docs/PST05211.docx" }
  ],
  "Year 3": [
    { title: "PST 06101: LEADERSHIP AND MANAGEMENT", type: "notes", file: "docs/PST06101.docx" },
    { title: "PST 06102: COUNSELING AND GUIDANCE SKILLS", type: "notes", file: "docs/PST06102.docx" },
    { title: "PST 06103: PHARMACEUTICAL PRODUCTION", type: "notes", file: "docs/PST06103.docx" },
    { title: "PST 06104: HEALTH AND MEDICINE POLICY", type: "notes", file: "docs/PST06104.docx" },
    { title: "PST 06105: HEALTH FINANCING", type: "notes", file: "docs/PST06105.docx" },
    { title: "PST 06106: BASIC PHARMACOTHERAPY", type: "notes", file: "docs/PST06106.docx" },
    { title: "PST 06107: BASIC VETERINARY PHARMACOLOGY", type: "notes", file: "docs/PST06107.docx" },
    { title: "PST 06208: PHARMACEUTICAL PUBLIC HEALTH", type: "notes", file: "docs/PST06208.docx" },
    { title: "PST 06209: ENTREPRENEURSHIP", type: "notes", file: "docs/PST06209.docx" },
    { title: "PST 06210O: OPERATIONAL RESEARCH", type: "notes", file: "docs/PST06210O.docx" },
    { title: "CMT06209: APPRENTICESHIP IN PAEDIATRICS AND CHILD HEALTH", type: "notes", file: "docs/CMT06209.docx" },
    { title: "PST 06211: MONITORING AND EVALUATION OF MEDICINES USE", type: "notes", file: "docs/PST06211.docx" },
    { title: "PST 06212: PHARMACY PRACTICE", type: "notes", file: "docs/PST06212.docx" },
    { title: "Research on Drug Safety", type: "research", id: "pharmaR1" }
  ]
},

 
  "Clinical Officer": {
  "Year 1": [
    { title: "CMT04101: COMMUNICATION SKILLS AND CUSTOMER CARE", type: "notes", file: "docs/CMT04101.docx" },
    { title: "CMT04102: HUMAN ANATOMY", type: "notes", file: "docs/CMT04102.docx" },
    { title: "CMT04103: HUMAN PHYSIOLOGY", type: "notes", file: "docs/CMT04103.docx" },
    { title: "CMT04104: EPIDEMIOLOGY AND BIOSTATISTICS", type: "notes", file: "docs/CMT04104.docx" },
    { title: "CMT04105: COMPUTER APPLICATIONS", type: "notes", file: "docs/CMT04105.docx" },
    { title: "CMT04106: MEDICAL ETHICS AND PROFESSIONALISM", type: "notes", file: "docs/CMT04106.docx" },
    { title: "CMT04107: MICROBIOLOGY, PARASITOLOGY AND ENTOMOLOGY", type: "notes", file: "docs/CMT04107.docx" },
    { title: "CMT04208: CLINICAL NUTRITION", type: "notes", file: "docs/CMT04208.docx" },
    { title: "CMT04209: CLINICAL SKILLS", type: "notes", file: "docs/CMT04209.docx" },
    { title: "CMT04210: PATHOLOGY", type: "notes", file: "docs/CMT04210.docx" },
    { title: "CMT04211: CLINICAL LABORATORY", type: "notes", file: "docs/CMT04211.docx" },
    { title: "CMT04212: PATIENT CARE", type: "notes", file: "docs/CMT04212.docx" }
  ],
  "Year 2": [
    { title: "CMT05101: CLINICAL PHARMACOLOGY", type: "notes", file: "docs/CMT05101.docx" },
    { title: "CMT05102: INTERNAL MEDICINE I", type: "notes", file: "docs/CMT05102.docx" },
    { title: "CMT05103: PEDIATRICS AND CHILD HEALTH I", type: "notes", file: "docs/CMT05103.docx" },
    { title: "CMT05104: OBSTETRICS AND GYNAECOLOGY I", type: "notes", file: "docs/CMT05104.docx" },
    { title: "CMT05105: HEALTH PROMOTION", type: "notes", file: "docs/CMT05105.docx" },
    { title: "CMT05106: COUNSELING", type: "notes", file: "docs/CMT05106.docx" },
    { title: "CMT05207: REPRODUCTIVE AND CHILD HEALTH", type: "notes", file: "docs/CMT05207.docx" },
    { title: "CMT05208: OBSTETRICS AND GYNAECOLOGY II", type: "notes", file: "docs/CMT05208.docx" },
    { title: "CMT05209: SURGERY", type: "notes", file: "docs/CMT05209.docx" },
    { title: "CMT05210: INTERNAL MEDICINE II", type: "notes", file: "docs/CMT05210.docx" },
    { title: "CMT05211: PAEDIATRICS AND CHILD HEALTH II", type: "notes", file: "docs/CMT05211.docx" },
    { title: "Past Paper - 2023", type: "pastpaper", file: "docs/clinical_year2_pastpaper.pdf" },
    { title: "Research Sample", type: "research", file: "docs/clinical_year2_research.docx" }
  ],
  "Year 3": [
    { title: "CM106101: ENTREPRENEURSHIP AND LIFE SKILLS", type: "notes", file: "docs/CM106101.docx" },
    { title: "CMT06102: LEADERSHIP AND MANAGEMENT", type: "notes", file: "docs/CMT06102.docx" },
    { title: "CMT06103: OPERATIONAL RESEARCH", type: "notes", file: "docs/CMT06103.docx" },
    { title: "CMT06104: BASICS OF FORENSIC MEDICINE", type: "notes", file: "docs/CMT06104.docx" },
    { title: "CMT06105: SURGICAL SPECIALTIES", type: "notes", file: "docs/CMT06105.docx" },
    { title: "CM106206: APPRENTICESHIP IN OBSTETRICS AND GYNAECOLOGY", type: "notes", file: "docs/CM106206.docx" },
    { title: "CMT06207: APPRENTICESHIP IN SURGERY", type: "notes", file: "docs/CMT06207.docx" },
    { title: "CMT06208: APPRENTICESHIP IN INTERNAL MEDICINE", type: "notes", file: "docs/CMT06208.docx" },
    { title: "CMT06209: APPRENTICESHIP IN PAEDIATRICS AND CHILD HEALTH", type: "notes", file: "docs/CMT06209.docx" },
    { title: "Business Plan Sample", type: "businessplan", file: "docs/clinical_year3_businessplan.docx" }
  ]
},

  "Doctor": {
    "Year 1": [
      { title: "Biochemistry Notes", type: "notes", file: "docs/doctor_year1_biochem.pptx" },
      { title: "Portfolio Sample", type: "portfolio", file: "docs/doctor_year1_portfolio.pdf" }
    ]
  }
};

// ========================
// Highlight active nav
// ========================
function highlightNav() {
  const pageId = document.body.id;
  const navLinks = document.querySelectorAll("nav ul li a");
  if (!navLinks) return;

  navLinks.forEach(link => {
    link.classList.remove("active-nav");
    if (
      (pageId === "home" && link.getAttribute("href") === "index.html") ||
      (pageId === "about" && link.getAttribute("href") === "about.html") ||
      (pageId === "contact" && link.getAttribute("href") === "contact.html") ||
      (pageId === "dashboard" && link.getAttribute("href") === "dashboard.html")
    ) {
      link.classList.add("active-nav");
    }
  });
}

// ========================
// Show documents
// ========================
function showDocs(course, level, category, btnElement) {
  const results = document.getElementById("docResults");
  if (!results || !documentsDB[course] || !documentsDB[course][level]) return; 

  const docs = documentsDB[course][level].filter(d => d.type === category); 

  // Highlight active button
  const allButtons = document.querySelectorAll('#categoryOptions button');
  allButtons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active'); 

  if (docs.length > 0) {
    let html = `<h3>${category.toUpperCase()} - ${course} (${level})</h3><ul>`;
    docs.forEach(doc => {
      if (doc.type === "research") {
        const waText = encodeURIComponent(`Nina Tsh 5,000/= Nataka Research: ${doc.title} (${course} ${level})`);
        html += `<li>${doc.title} 
          <a href="https://wa.me/255794318660?text=${waText}" target="_blank" class="btn">
            <img src="download.png" alt="Download" style="width:50px; height:50px;">
          </a></li>`;
      } else {
        html += `<li>
           ${doc.title} 
           <a href="javascript:void(0)" class="btn" onclick="checkFileExists('${doc.file}','${doc.title}')">
             <img src="download.png" alt="Download" style="width:50px; height:50px;">
           </a>
         </li>`;
      }
    });
    html += "</ul>";
    results.innerHTML = html;
  } else {
    results.innerHTML = `<p>No ${category} documents for ${course} - ${level}</p>`;
  }
}

// ========================
// Check if file exists
// ========================
function checkFileExists(fileUrl, title) {
  fetch(fileUrl, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        window.location.href = fileUrl;
      } else {
        alert(`⚠️ Document "${title}" haipo.`);
      }
    })
    .catch(() => {
      alert(`⚠️ Document "${title}" haipo.`);
    });
}

// ========================
// Users Helpers
// ========================
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ========================
// DOMContentLoaded (ALL SCRIPTS INSIDE HERE)
// ========================
document.addEventListener("DOMContentLoaded", () => {
  highlightNav();

  // ---- Mobile menu toggle ----
  const menuBtn = document.querySelector(".menu-btn");
  const navUl = document.querySelector("nav ul");
  if (menuBtn && navUl) {
    menuBtn.addEventListener("click", () => {
      navUl.classList.toggle("active");
    });
  }

  // Tabs
  const tabLogin = document.getElementById("tab-login");
  const tabSign = document.getElementById("tab-signup");
  const tabForgot = document.getElementById("tab-forgot");

  const formLogin = document.getElementById("loginForm");
  const formSign = document.getElementById("signupForm");
  const formForgot = document.getElementById("forgotForm");
  const formReset = document.getElementById("resetForm");

  function showForm(form) {
    [formLogin, formSign, formForgot, formReset].forEach(f => {
      if (f) f.style.display = "none";
    });
    if (form) form.style.display = "block";
  }

  if (tabLogin) tabLogin.addEventListener("click", () => showForm(formLogin));
  if (tabSign) tabSign.addEventListener("click", () => showForm(formSign));
  if (tabForgot) tabForgot.addEventListener("click", () => showForm(formForgot));

const tabs = document.querySelectorAll(".login-tabs div");
const forms = document.querySelectorAll(".login-container form");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");
    
    forms.forEach(f => f.classList.remove("active"));
    forms[index].classList.add("active");
  });
});

  // Toggle password
  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.toggle);
      if (input.type === "password") {
        input.type = "text";
        icon.textContent = "🙈";
      } else {
        input.type = "password";
        icon.textContent = "👁️";
      }
    });
  });

  // Sign Up
  if (formSign) {
    formSign.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullname = document.getElementById("su_fullname").value;
      const email = document.getElementById("su_email").value.toLowerCase();
      const phone = document.getElementById("su_phone").value;
      const password = document.getElementById("su_password").value;
      const confirm = document.getElementById("su_confirm").value;

      if (password !== confirm) {
        alert("⚠️ Password na Confirm hazilingani!");
        return;
      }

      let users = getUsers();
      if (users.some(u => u.email === email)) {
        alert("⚠️ Email hii imeshasajiliwa!");
        return;
      }

      users.push({ fullname, email, phone, password });
      saveUsers(users);

      alert("✅ Account imeundwa! Sasa login.");
      formSign.reset();
      showForm(formLogin);
    });
  }

  // Login
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login_email").value.toLowerCase();
      const password = document.getElementById("login_password").value;

      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert(`✅ Karibu ${user.fullname}!`);
        window.location.href = "dashboard.html";
      } else {
        alert("⚠️ Email au Password sio sahihi!");
      }
    });
  }

 // ========================
// Forgot Password (EmailJS)
// ========================
if (formForgot) {
  formForgot.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("forgot_email").value.toLowerCase();
    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      alert("⚠️ Email hii haijasajiliwa!");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("resetOTP", otp);

    // Tuma OTP kwa email kupitia EmailJS
    emailjs.send("SERVICE_ID_YAKO", "TEMPLATE_ID_YAKO", {
      to_email: email,
      otp_code: otp
    }, "PUBLIC_KEY_YAKO")
    .then(() => {
      alert("✅ OTP imetumwa kwenye email yako!");
      showForm(formReset);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("⚠️ Imeshindikana kutuma OTP, jaribu tena!");
    });
  });
}

  // Reset Password
  if (formReset) {
    formReset.addEventListener("submit", (e) => {
      e.preventDefault();

      const otpInput = document.getElementById("otp_code").value;
      const newPass = document.getElementById("new_password").value;
      const confirmNew = document.getElementById("confirm_new_password").value;

      const storedOTP = localStorage.getItem("resetOTP");
      const email = localStorage.getItem("resetEmail");

      if (otpInput !== storedOTP) {
        alert("⚠️ OTP si sahihi!");
        return;
      }

      if (newPass !== confirmNew) {
        alert("⚠️ Password hazilingani!");
        return;
      }

      let users = getUsers();
      let userIndex = users.findIndex(u => u.email === email);

      if (userIndex !== -1) {
        users[userIndex].password = newPass;
        saveUsers(users);

        alert("✅ Password imebadilishwa!");
        localStorage.removeItem("resetEmail");
        localStorage.removeItem("resetOTP");
        formReset.reset();
        showForm(formLogin);
      }
    });
  }

  // Feedback form
  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully! (demo)");
      feedbackForm.reset();
    });
  }

  // Document form
  const docForm = document.getElementById("docForm");
  if (docForm) {
    docForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const course = document.getElementById("course").value;
      const level = document.getElementById("level").value;
      const results = document.getElementById("docResults");
      const catOptions = document.getElementById("categoryOptions");

      if (documentsDB[course] && documentsDB[course][level]) {
        const docs = documentsDB[course][level];
        const categories = [...new Set(docs.map(d => d.type))];

        let catHtml = "<h3>Choose Category:</h3>";
        categories.forEach(cat => {
          catHtml += `<button type="button" class="btn" onclick="showDocs('${course}','${level}','${cat}', this)">${cat.toUpperCase()}</button> `;
        });

        catOptions.innerHTML = catHtml;
        results.innerHTML = "";
      } else {
        catOptions.innerHTML = "";
        results.innerHTML = `<p>No documents found for ${course} - ${level}</p>`;
      }
    });
  }
});

// Scroll animation for lesson cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.lesson-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.animation = "fadeUp 3s ease forwards";
        observer.unobserve(entry.target); // ili isirudie kila mara
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
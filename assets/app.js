/* Park & Co Lawyers — Australian Employment Law & Sponsor-Workplace Navigator */
(function () {
  "use strict";

  var currentLang = "ko";
  var currentMode = "employee"; // 'employee' | 'employer'

  var EMP_KDB_CASES = [
    {
      citation: "[2026] FWC 3112",
      parties: "Mr Brogan Yorston v NRR Services Pty Ltd",
      date: "2026-10-14",
      tag_ko: "가짜 정리해고 (s 389) · 26주 최대 보상금 인용",
      tag_en: "Non-Genuine Redundancy (s 389) · 26-Week Max Compensation",
      summary_ko: "사내 Operator 공석에 대한 재배치(Redeployment, s 389(2)) 의무를 이행하지 않은 정리해고를 부당해고로 판정하고 법정 상한인 26주분 급여($71,000.02 + Superannuation) 배상을 명령한 최신 판례.",
      summary_en: "Held dismissal was not a genuine redundancy under s 389(2) due to failure to redeploy into an available Operator role; ordered the statutory maximum 26 weeks' pay ($71,000.02 + super) under s 392.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FWCA/2026/3112.html"
    },
    {
      citation: "[2026] FWCFB 273",
      parties: "Ms Kirina De Lorenzo v Persol Staffing Australia Pty Ltd",
      date: "2026-10-14",
      tag_ko: "해고 후 21일 절대 기한 엄격 적용 (s 394(3))",
      tag_en: "Strict 21-Day Filing Deadline Enforced (s 394(3))",
      summary_ko: "21일 법정 기한을 도과한 부당해고 신청에 대해 '예외적 사정(Exceptional Circumstances)' 불인정 및 항고 허가를 기각하여 21일 기한의 절대성을 재확인한 전원합의체(Full Bench) 판결.",
      summary_en: "Full Bench refused permission to appeal an out-of-time unfair dismissal application, confirming strict enforcement of the 21-calendar-day limit under s 394(2)-(3).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FWCFB/2026/273.html"
    },
    {
      citation: "[2026] FWC 3896",
      parties: "Ms Dina Shawriah v Bondi Born Pty Ltd",
      date: "2026-10-12",
      tag_ko: "강제사직(Forced Resignation, s 386(1)(b)) 입증 허들",
      tag_en: "Forced Resignation Threshold (s 386(1)(b) & s 365)",
      summary_ko: "상사의 비판적 소통이나 불쾌한 직장 분위기만으로는 '사직 외에 실질적 선택지가 없었다'는 강제사직(s 386(1)(b))이 성립하지 않는다고 판시 — 사직서 제출 전 법률 자문이 필수임을 입증.",
      summary_en: "Confirmed that critical management or workplace unpleasantness alone does not establish a 'forced resignation' under s 386(1)(b) unless the employee had no real choice but to resign.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FWCA/2026/3896.html"
    },
    {
      citation: "[2026] FWC 3921",
      parties: "Application by Zelai Zhao (Uber Delivery Platform)",
      date: "2026-10-13",
      tag_ko: "디지털 플랫폼 부당 계정 비활성화 (s 536LU) & 21일 기한",
      tag_en: "Digital Platform Unfair Deactivation (s 536LU) & 21-Day Limit",
      summary_ko: "Closing Loopholes 개정법으로 신설된 배달·플랫폼 종사자 부당 계정정지 구제(s 536LU) 역시 정지일로부터 21일 이내 신청해야 하며, 기한 도과 시 각하됨을 확인한 판결.",
      summary_en: "Applied the new Closing Loopholes unfair deactivation jurisdiction (s 536LU) for digital platform workers, dismissing an application filed outside the strict 21-day limit (s 536LZ).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FWCA/2026/3921.html"
    }
  ];

  var KO_TRANSLATIONS = {
    svgEmpD0Title: "Day 0: 해고 효력 발생일",
    svgEmpD0Sub: "통보·최종 근무일 (s 386)",
    svgEmpD1Title: "Day 1~14: 증거 확보·법리 선택",
    svgEmpD1Sub: "s 394(부당해고) vs s 365(일반보호) 선택",
    svgEmpD21Title: "Day 21: FWC 법정 절대 마감일",
    svgEmpD21Sub: "Form F2 / F8 자정 전 필수 접수",
    svgEmpD22Title: "Day 22+: 원칙적 각하 구간",
    svgEmpD22Sub: "'Exceptional Circumstances'만 예외",
    optYr0: "1년 미만 (Under 1 year)",
    optYr1: "1년 이상 ~ 2년 미만 (1 to <2 years)",
    optYr2: "2년 이상 ~ 3년 미만 (2 to <3 years)",
    optYr3: "3년 이상 ~ 4년 미만 (3 to <4 years)",
    optYr4: "4년 이상 ~ 5년 미만 (4 to <5 years)",
    optYr5: "5년 이상 ~ 6년 미만 (5 to <6 years)",
    optYr6: "6년 이상 ~ 7년 미만 (6 to <7 years)",
    optYr7: "7년 이상 ~ 8년 미만 (7 to <8 years)",
    optYr8: "8년 이상 ~ 9년 미만 (8 to <9 years)",
    optYr9: "9년 이상 ~ 10년 미만 (9 to <10 years)",
    optYr10: "10년 이상 (10+ years — long service reduction applies)",
    optV482: "Subclass 482 (SID / TSS — Condition 8607 적용)",
    optV494: "Subclass 494 (SESR 지방 스폰서 — Condition 8608 적용)",
    optV186: "Subclass 186 (ENS TRT/DE 심사 대기 중 해고·퇴사)",
    optVTemp: "Subclass 485 / 500 / 417 / 462 (임시비자 근로자 직장 착취·체불)",
    footerFirmName: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)",
    ecoHubLink: "← 박앤코 법률 인텔리전스 통합 허브 (All Navigators)",
    ecoSidLink: "SID 482 · ENS 186 스폰서",
    ecoCrisisLink: "비자거절 · ART 기한",
    ecoFamilyLink: "호주 가족법 · 재산분할 판례",
    brandTag: "호주 고용법 & 스폰서 비자 교차 내비게이터",
    navM1: "21일 기한 · 청구경로",
    navM2: "정리해고 · 26주 보상금",
    navM3: "위장도급 · 임금체불 점검",
    navM4: "482 비자 × 노동법 보호",
    navM5: "FWC 판례 & 상담 전송",
    navPoller: "1차 법령·KDB 폴링 검증",
    btnPrint: "🖨️ 진단서 출력",
    heroEyebrow: "FAIR WORK ACT 2009 (CTH) · EMP KDB (3,977 CASES)",
    heroTitle: "호주 고용법 & 스폰서 비자 교차 진단 내비게이터",
    heroLead: "공정근로위원회(FWC) <strong>해고 후 21일 불변 기한</strong>, <strong>정리해고·최대 26주 보상금(s 389·s 392 · 상한 $95,050)</strong>, <strong>사업주 노무 감사(위장도급·임금체불)</strong> 및 <strong>482/186 비자 근로자 180일 유예·408 비자 보호</strong>를 즉시 계산합니다.",
    modeEmployeeBtn: "👷 근로자 · 비자 소지자 모드",
    modeEmployerBtn: "🏢 고용주 · 인사담당자 모드",
    modeEmployeeDesc: "현재 [근로자 모드]: 해고 후 21일 마감일, 미지급 수당·보상금 및 482 비자 180일 유예·408 비자 보호를 우선 안내합니다.",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole1: "Principal Solicitor · Acc. Spec. (Immi)",
    specName2: "박기성 변호사 (Kevin Park)",
    specRole2: "Solicitor · Employment Law",
    specSlogan: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
    specMeta: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD)<br/>공식 이메일: <strong>enquiry@parkcolawyers.com</strong><br/>FWC·연방법원 고용 분쟁 및 스폰서 기업 자문",
    specCta: "고용법 전담팀 1:1 상담 브리프 전송 →",
    liveStatusLabel: "실시간 법령 · 3,977건 판례 검증됨",
    statLabelDeadline: "FWC 해고 불복 기한",
    statLabelCap: "부당해고 보상 한도",
    statLabelRedundancy: "NES 정리해고수당",
    statLabelWageTheft: "고의 임금체불 처벌",
    statLabelKdb: "박앤코 고용법 KDB",
    m1Title: "해고 후 21일 마감일 & FWC 청구 경로 진단",
    m1Desc: "부당해고(s 394)·일반보호(s 365)·플랫폼 계정 정지(s 536LU)는 해고 효력 발생일 다음 날부터 <strong>21일(주말·공휴일 포함)</strong> 이내에 접수해야 합니다.",
    m1FormHeading: "해고 · 사직 압박 · 계정 정지 사실관계 입력",
    lblDismissalDate: "해고 효력 발생일 (또는 사직서 제출일 / 플랫폼 정지일)",
    lblBizSize: "사업장 규모 (해고 시점 총 근로자 수 — 계열사 합산, s 23)",
    optBizStandard: "일반 사업장 (15인 이상 — 최소 근속 6개월 적용)",
    optBizSmall: "소규모 사업장 (Small Business 15인 미만 — 최소 근속 12개월 적용)",
    lblServiceMonths: "총 근속 개월 수 (Months of Continuous Service)",
    lblSalaryBand: "연간 기본급 수준 (High Income Threshold $190,100 & Award 적용 여부)",
    optUnderHit: "고소득 기준선($190,100 · FY2026–27) 미만 또는 Modern Award / 기업협약(EA) 적용",
    optOverHit: "고소득 기준선($190,100) 이상 & Award/EA 미적용 임원·고액연봉자 (s 382(b) 제한)",
    lblDismissalType: "분쟁 및 해고 발생 유형",
    optTypeDirect: "회사에 의한 일방적 해고 (능력·근태·징계 해고 — s 385 부당해고)",
    optTypeRedundancy: "구조조정·정리해고 통보 (재배치 미검토·대체 인력 채용 의심 — s 389)",
    optTypeAdverse: "임금·휴가·안전·괴롭힘 문제제기(Workplace Right 행사) 후 보복 해고 (s 340/s 365)",
    optTypeForced: "강제사직 / PIP 압박으로 사직서 제출 또는 제출 직전 (s 386(1)(b))",
    optTypePlatform: "우버·도어대시 등 디지털 플랫폼 계정 일방 비활성화 (s 536LU)",
    m1ResultHeading: "법정 마감일 카운트다운 & 최적 청구 트랙 판정",
    m2Title: "정리해고 적법성(s 389) · 해고수당 & 26주 보상금 계산기",
    m2Desc: "직무 소멸·사전 협의·사내 재배치(s 389) 요건 중 하나라도 누락된 '가짜 정리해고'는 최대 <strong>26주분 급여 배상(s 392)</strong> 대상이 됩니다.",
    m2FormHeading: "근속연수 · 급여 · 정리해고 3대 법정 요건 입력",
    lblRedYears: "연속 근속연수 (Years of Continuous Service)",
    lblRedWeeklyPay: "주급 (Weekly Gross Base Pay, AUD $)",
    lblRedAge45: "근로자 연령 (만 45세 이상 & 2년 이상 근속 시 해고예고 +1주 가산, s 117(3)(b))",
    optAgeUnder45: "만 45세 미만",
    optAgeOver45: "만 45세 이상 (+1주 Notice 가산)",
    lblRedRedeploy: "s 389 진정한 정리해고(Genuine Redundancy) 절차 준수 여부",
    optRedFailed: "결함 있음: 사내·계열사 빈자리 재배치(Redeployment) 미제안 또는 사전 협의 누락",
    optRedOk: "완벽 준수: 직무 실제 소멸 + Award 서면 협의 + 재배치 불가 입증 완료",
    m2ResultHeading: "NES 법정 수당 vs 부당해고 최대 배상금(26주) 시뮬레이션",
    m3Title: "사업주 노무 컴플라이언스 & 위장도급 · 임금체불 점검",
    m3Desc: "ABN 실질 근로자 판정(s 15AA), 고의 임금체불 형사처벌(s 327A), 퇴근 후 연락 거부권(s 333M) 리스크를 점검합니다.",
    m3FormHeading: "근로·도급 형태 및 급여 컴플라이언스 체크",
    lblAuditContractor: "1. ABN 계약직(Contractor) 운용 방식 (s 15AA & s 357)",
    optAuditContHigh: "고위험: ABN으로 인보이스만 받을 뿐 출퇴근·근무지·시급을 회사가 지정하고 타인 대체(위임) 불가",
    optAuditContLow: "적법 도급: 독립 사업체로서 결과물 단위로 견적·청구하고 장비 자체 보유 및 제3자 재하도급 허용",
    optAuditContNone: "해당 없음 (전원 정식 TFN 근로자로 고용 중)",
    lblAuditPay: "2. 주말·공휴일·초과근무 수당(Penalty Rates) 및 포괄연봉/Flat Rate 지급 방식 (s 327A)",
    optAuditPayHigh: "고위험: Award 대조(BOOT)나 서면 상계조항(Set-off clause) 없이 단일 시급(Flat Rate)·현금 지급",
    optAuditPayOk: "안전: 적용 Modern Award 등급 분류 + 급여명세서(Payslip) + 연봉 상계 정산 검증 완료",
    lblAuditDisconnect: "3. 근무시간 외 카톡·문자·이메일 지시 및 불이익 조치 여부 (s 333M Right to Disconnect)",
    optAuditDiscHigh: "주의: 퇴근·휴일 중 상시 업무 연락 및 미응답 시 인사고과·시프트 배정 불이익 관행 있음",
    optAuditDiscOk: "안전: 근무시간 외 연락 거부권(s 333M) 사내 가이드라인 수립 완료",
    m3ResultHeading: "고용주 법적 노출도 & 근로자 미지급 청구권 판정",
    m4Title: "스폰서 비자(482·186·494) 해고 · 180일 이직 시계 & 408 비자 보호",
    m4Desc: "해고 후에도 <strong>180일(통산 365일) 구직·이직 유예(Condition 8607)</strong>와 <strong>직장정의 비자(Subclass 408)</strong>로 체류권을 보호할 수 있습니다.",
    m4FormHeading: "비자 종류 · 고용 종료 후 경과일 · 분쟁 상황 입력",
    lblCrossVisa: "소지(또는 스폰서 중인) 비자 서브클래스",
    lblCrossDays: "스폰서 고용 종료(최종 근무일) 이후 경과 일수 (Days Since Cessation)",
    lblCrossIssue: "핵심 교차 쟁점",
    optCrossUnfair: "부당해고 다툼(FWC)과 신규 스폰서 이직 노미네이션(186 TRT 경력 합산) 동시 진행",
    optCrossExploit: "임금체불·스폰서 비용 갈취(Cashback)·괴롭힘 피해 신고 및 408 Workplace Justice 비자 신청",
    optCrossEmployer: "고용주 입장에서 스폰서 근로자 적법 해고 · 28일 이민성 통보 · SAF 환불 검토",
    m4ResultHeading: "이민법 × 노동법 동시 보호 및 컴플라이언스 로드맵",
    abfCrossTitle: "실시간 ABF 스폰서 행정제재(1,842건 · 현행 121건) & 이주근로자 고용금지 사업주(s 245AYM) 교차 경보",
    abfCrossBtn: "🔎 1,842건 스폰서 제재 등록부 전체 검색 (SID 482 내비게이터) →",
    m5Title: "최신 FWC 검증 판례 & 원클릭 상담 브리프 전송",
    m5Desc: "3,977건 고용법 KDB 핵심 판례를 확인하고, 위 진단 요약을 <strong>enquiry@parkcolawyers.com</strong>으로 즉시 전송하세요.",
    ctaHeading: "박앤코 고용법 · 스폰서십 전담팀 상담 브리프 전송 (enquiry@parkcolawyers.com)",
    btnSendEmail: "✉️ 진단 결과 담아 이메일 보내기 →",
    btnCopyBrief: "📋 진단 브리프 복사",
    pollerTitle: "1차 법령 · 공정근로위원회(FWC) · 박앤코 고용법 KDB 실시간 폴링 검증 매트릭스",
    pollerDesc: "연방 법령 원문(<code>legislation.gov.au</code>), 공정근로위원회 고소득 기준선·접수 수수료(<code>fwc.gov.au</code>) 및 박앤코 고용법 판례 KDB를 정기 자동 폴링하여 SHA-256 해시와 최신 법정 수치를 검증합니다.",
    thPollerSource: "1차 출처 및 검증 대상",
    thPollerCitation: "근거 조문 · 엔드포인트",
    thPollerFigures: "실시간 추출 핵심 수치",
    thPollerHash: "SHA-256 해시 · 용량",
    thPollerStatus: "폴링 검증 상태",
    footerNotice: "본 내비게이터는 호주 공정근로법(Fair Work Act 2009) 및 이민법 1차 출처에 기반한 일반 법률 정보 제공 도구이며, 법무법인 박앤코의 공식 수임 계약 전 개별 법률 자문(Legal Advice)을 대체하지 않습니다. 해고 후 21일 기한(ss 394, 366, 536LU)은 법정 불변 기한이므로 즉시 박창민 대표변호사(Acc. Spec. Immi) 및 박기성 변호사(Kevin Park · 공식 이메일: <strong>enquiry@parkcolawyers.com</strong>)에게 문의하시기 바랍니다."
  };

  var EN_TRANSLATIONS = {
    svgEmpD0Title: "Day 0: Dismissal Takes Effect",
    svgEmpD0Sub: "Final Day of Employment (s 386)",
    svgEmpD1Title: "Days 1–14: Evidence & Forum Choice",
    svgEmpD1Sub: "Choose s 394 (Unfair) vs s 365 (GP)",
    svgEmpD21Title: "Day 21: Strict FWC Statutory Limit",
    svgEmpD21Sub: "Form F2 / F8 Must Be Filed Before Midnight",
    svgEmpD22Title: "Day 22+: Out of Time (Barred)",
    svgEmpD22Sub: "Only 'Exceptional Circumstances' Allowed",
    optYr0: "Under 1 year of continuous service",
    optYr1: "1 to <2 years of continuous service",
    optYr2: "2 to <3 years of continuous service",
    optYr3: "3 to <4 years of continuous service",
    optYr4: "4 to <5 years of continuous service",
    optYr5: "5 to <6 years of continuous service",
    optYr6: "6 to <7 years of continuous service",
    optYr7: "7 to <8 years of continuous service",
    optYr8: "8 to <9 years of continuous service",
    optYr9: "9 to <10 years of continuous service",
    optYr10: "10+ years (long service leave offset applies)",
    optV482: "Subclass 482 (SID / TSS — Condition 8607 applies)",
    optV494: "Subclass 494 (SESR Regional — Condition 8608 applies)",
    optV186: "Subclass 186 (ENS TRT/DE pending at dismissal)",
    optVTemp: "Subclass 485 / 500 / 417 / 462 (Temporary Visa Worker Protection)",
    footerFirmName: "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    ecoHubLink: "← Park & Co Legal Intelligence Hub (All Navigators)",
    ecoSidLink: "SID 482 · ENS 186 Sponsor",
    ecoCrisisLink: "Visa Crisis · ART Deadlines",
    ecoFamilyLink: "Family Law · Property Precedents",
    brandTag: "Australian Employment Law & Sponsor Visa Navigator",
    navM1: "21-Day FWC Limit & Router",
    navM2: "Redundancy & 26-Wk Cap",
    navM3: "Contractor & Wage Audit",
    navM4: "482 Visa × Fair Work",
    navM5: "FWC Cases & Brief CTA",
    navPoller: "Primary-Source & KDB Telemetry",
    btnPrint: "🖨️ Print Diagnostic",
    heroEyebrow: "FAIR WORK ACT 2009 (CTH) · EMP KDB (3,977 CASES)",
    heroTitle: "Australian Employment Law & Sponsor Visa Navigator",
    heroLead: "Calculate your strict <strong>21-day FWC dismissal deadline</strong>, <strong>redundancy & 26-week compensation cap (ss 389, 392 · $95,050 cap)</strong>, <strong>employer compliance risks</strong>, and <strong>Subclass 482/186 180-day visa protections</strong>.",
    modeEmployeeBtn: "👷 Employee & Visa Worker Mode",
    modeEmployerBtn: "🏢 Employer & HR Mode",
    modeEmployeeDesc: "Active [Employee Mode]: Prioritising the 21-day FWC deadline, unpaid entitlements, and 482 180-day grace / 408 visa protections.",
    specName: "Chang Min Park (Principal Solicitor)",
    specRole1: "Principal Solicitor · Acc. Spec. (Immi)",
    specName2: "Kevin Park (Solicitor)",
    specRole2: "Solicitor · Employment Law",
    specSlogan: "\"Focus on your life, let us take care of the law.\"",
    specMeta: "Park & Co Lawyers (Underwood QLD)<br/>Official Email: <strong>enquiry@parkcolawyers.com</strong><br/>FWC, Federal Court & Sponsor Corporate Advisory",
    specCta: "Send Employment Consultation Brief →",
    liveStatusLabel: "Live Law · 3,977 Cases Verified",
    statLabelDeadline: "FWC Filing Limit",
    statLabelCap: "Unfair Dismissal Cap",
    statLabelRedundancy: "NES Redundancy Pay",
    statLabelWageTheft: "Criminal Wage Theft",
    statLabelKdb: "Park & Co Emp KDB",
    m1Title: "21-Day FWC Deadline & Claim Pathway Router",
    m1Desc: "Unfair Dismissal (s 394), General Protections (s 365), and Platform Deactivation (s 536LU) must be lodged within <strong>21 calendar days</strong> after dismissal takes effect.",
    m1FormHeading: "Enter Dismissal, Resignation Pressure or Deactivation Facts",
    lblDismissalDate: "Dismissal Effective Date (or Resignation / Deactivation Date)",
    lblBizSize: "Employer Size (Total Headcount incl. Associated Entities, s 23)",
    optBizStandard: "Non-Small Business (15+ employees — 6-month minimum employment period)",
    optBizSmall: "Small Business Employer (<15 employees — 12-month minimum employment period)",
    lblServiceMonths: "Months of Continuous Service",
    lblSalaryBand: "Annual Base Salary vs High Income Threshold ($190,100 · FY2026–27)",
    optUnderHit: "Below High Income Threshold ($190,100) OR Covered by a Modern Award / Enterprise Agreement",
    optOverHit: "Above High Income Threshold ($190,100) AND Award/EA-Free Executive (s 382(b) bar applies)",
    lblDismissalType: "Nature of Dismissal or Workplace Dispute",
    optTypeDirect: "Direct Termination by Employer (Performance / Misconduct — s 385 Unfair Dismissal)",
    optTypeRedundancy: "Purported Redundancy (No redeployment offered / replacement hired — s 389)",
    optTypeAdverse: "Dismissed After Exercising a Workplace Right / Inquiry / Complaint (s 340 / s 365)",
    optTypeForced: "Forced Resignation / Constructive Dismissal / PIP Pressure (s 386(1)(b))",
    optTypePlatform: "Digital Platform (Uber/DoorDash) Account Deactivation (s 536LU)",
    m1ResultHeading: "21-Day Statutory Countdown & Optimal FWC Claim Track",
    m2Title: "Redundancy (s 389), NES Pay & 26-Week Compensation Calculator",
    m2Desc: "If a redundancy lacks genuine job abolition, Award consultation, or redeployment efforts (s 389), up to <strong>26 weeks' compensation (s 392)</strong> applies.",
    m2FormHeading: "Service Length, Weekly Pay & s 389 Compliance Check",
    lblRedYears: "Years of Continuous Service",
    lblRedWeeklyPay: "Weekly Gross Base Pay (AUD $)",
    lblRedAge45: "Employee Age (+1 week notice if aged 45+ with 2+ years service, s 117(3)(b))",
    optAgeUnder45: "Under 45 years old",
    optAgeOver45: "45 years or older (+1 week statutory notice)",
    lblRedRedeploy: "s 389 Genuine Redundancy Procedural Compliance",
    optRedFailed: "Defective: Failed to offer available redeployment or skipped mandatory Award consultation",
    optRedOk: "Compliant: Role genuinely no longer required + written consultation + no redeployment available",
    m2ResultHeading: "NES Entitlements vs Unfair Dismissal 26-Week Compensation Exposure",
    m3Title: "Employer Compliance, Sham Contracting & Wage Audit",
    m3Desc: "Assess ABN sham contracting (s 15AA), criminal wage underpayment (s 327A), and Right to Disconnect (s 333M) compliance.",
    m3FormHeading: "Contractor, Wage & After-Hours Contact Compliance Check",
    lblAuditContractor: "1. ABN Contractor Engagement Model (s 15AA & s 357)",
    optAuditContHigh: "High Risk: ABN worker has fixed rosters/hours, hourly pay, company control & no right to delegate",
    optAuditContLow: "Low Risk: Genuine independent business quoting per result, own tools & freedom to subcontract",
    optAuditContNone: "Not Applicable (All staff engaged as TFN employees)",
    lblAuditPay: "2. Penalty Rates, Overtime & Flat-Rate / Annualised Salary Compliance (s 327A)",
    optAuditPayHigh: "High Risk: Unverified flat hourly rate or cash pay without Award BOOT reconciliation or written set-off clause",
    optAuditPayOk: "Compliant: Modern Award classification verified + compliant payslips + written set-off reconciliation",
    lblAuditDisconnect: "3. Out-of-Hours Messaging & Adverse Action Risk (s 333M Right to Disconnect)",
    optAuditDiscHigh: "Caution: Routine after-hours messages with shift/appraisal penalties for non-response",
    optAuditDiscOk: "Compliant: Written Right to Disconnect policy in place (s 333M)",
    m3ResultHeading: "Employer Statutory Exposure & Employee Back-Pay Recovery Verdict",
    m4Title: "Sponsor Visa (482·186·494) 180-Day Clock & 408 Visa Shield",
    m4Desc: "Protect your visa status after dismissal via the <strong>180-day Condition 8607 grace period</strong> and the <strong>Subclass 408 Workplace Justice Visa</strong>.",
    m4FormHeading: "Select Visa Subclass, Days Since Cessation & Crossover Scenario",
    lblCrossVisa: "Visa Subclass Held / Sponsored",
    lblCrossDays: "Days Elapsed Since Employment Cessation",
    lblCrossIssue: "Primary Crossover Issue",
    optCrossUnfair: "Pursuing FWC Unfair Dismissal while transferring 482 sponsorship & preserving 186 TRT accrual",
    optCrossExploit: "Underpayment / illegal sponsorship cashback (s 245AR) & Subclass 408 Workplace Justice Visa",
    optCrossEmployer: "Employer lawfully terminating sponsored worker · 28-day Home Affairs notice & SAF check",
    m4ResultHeading: "Dual Migration Act × Fair Work Act Protection & Compliance Roadmap",
    abfCrossTitle: "Live ABF Sponsor Sanctions (1,842 Records · 121 Active Bars) & Prohibited Employers (s 245AYM) Alert",
    abfCrossBtn: "🔎 Search Full 1,842 Sponsor Sanctions Register (SID 482 Navigator) →",
    m5Title: "Verified FWC Authorities & One-Click Consultation Brief",
    m5Desc: "Review verified FWC precedents and send your diagnostic summary directly to <strong>enquiry@parkcolawyers.com</strong>.",
    ctaHeading: "Send Employment & Sponsorship Diagnostic Brief (enquiry@parkcolawyers.com)",
    btnSendEmail: "✉️ Email Diagnostic Brief →",
    btnCopyBrief: "📋 Copy Brief to Clipboard",
    pollerTitle: "Live Primary-Source, FWC Threshold & Park & Co Emp KDB Verification Matrix",
    pollerDesc: "Automated weekly polling of Commonwealth legislation (<code>legislation.gov.au</code>), Fair Work Commission thresholds & filing fees (<code>fwc.gov.au</code>), and the Park & Co Employment Law KDB with genuine SHA-256 content hashes.",
    thPollerSource: "Primary Source & Target",
    thPollerCitation: "Statutory Provision / Endpoint",
    thPollerFigures: "Live Extracted Figures",
    thPollerHash: "SHA-256 Content Hash · Size",
    thPollerStatus: "Verification Status",
    footerNotice: "This navigator provides general legal information based on primary Australian legislation (Fair Work Act 2009 & Migration Act 1958) and does not constitute formal legal advice prior to a signed retainer. Because the 21-day FWC deadline (ss 394, 366, 536LU) is strictly enforced, contact Principal Solicitor Chang Min Park (Acc. Spec. Immi) & Kevin Park (Solicitor — <strong>enquiry@parkcolawyers.com</strong>) immediately."
  };

  function initDefaultDate() {
    var dInput = document.getElementById("emp-dismissal-date");
    if (dInput && !dInput.value) {
      var d = new Date();
      d.setDate(d.getDate() - 7);
      dInput.value = d.toISOString().slice(0, 10);
    }
  }

  function calcDeadlineRouter() {
    var dateStr = (document.getElementById("emp-dismissal-date") || {}).value;
    var bizSize = (document.getElementById("emp-business-size") || {}).value || "standard";
    var months = parseFloat((document.getElementById("emp-service-months") || {}).value) || 0;
    var salaryBand = (document.getElementById("emp-salary-band") || {}).value || "under_hit";
    var dType = (document.getElementById("emp-dismissal-type") || {}).value || "direct_unfair";

    var now = new Date();
    var effDate = dateStr ? new Date(dateStr + "T00:00:00") : new Date();
    var deadlineDate = new Date(effDate.getTime() + 21 * 86400000);
    var diffDays = Math.ceil((deadlineDate.getTime() - now.getTime()) / 86400000);
    var deadlineIso = deadlineDate.toISOString().slice(0, 10);

    var minMonths = bizSize === "small" ? 12 : 6;
    var serviceOk = months >= minMonths;
    var hitOk = salaryBand === "under_hit";
    var udEligible = serviceOk && hitOk && dType !== "platform_deactivation";

    var badgeColor = diffDays < 0 ? "#B23A2E" : (diffDays <= 7 ? "#D97706" : "#2E6B4F");
    var statusTextKo = diffDays < 0
      ? "🚨 21일 법정 기한 도과 (" + Math.abs(diffDays) + "일 경과) — 'Exceptional Circumstances(s 394(3)/s 366(2))' 소명 또는 계약상 청구 검토 시급"
      : "⏰ FWC 21일 법정 마감일: " + deadlineIso + " (잔여 " + diffDays + "일)";
    var statusTextEn = diffDays < 0
      ? "🚨 21-Day Statutory Limit Expired (" + Math.abs(diffDays) + " days overdue) — Urgent s 394(3)/s 366(2) Exceptional Circumstances or Common Law review required"
      : "⏰ FWC 21-Day Statutory Deadline: " + deadlineIso + " (" + diffDays + " days remaining)";

    var trackKo = "";
    var trackEn = "";
    if (dType === "platform_deactivation") {
      trackKo = "<strong>권고 트랙: 디지털 플랫폼 부당 계정 비활성화 구제 신청 (Form F89 · s 536LU)</strong> — 2024~2025 Closing Loopholes 개정법에 따라 최소 6개월 이상 활동한 플랫폼 종사자는 계정 복구 명령을 청구할 수 있으나, 반드시 21일 이내 접수해야 합니다(<code>[2026] FWC 3921 Zhao</code>).";
      trackEn = "<strong>Recommended Track: Digital Platform Unfair Deactivation Application (Form F89 · s 536LU)</strong> — Platform workers active for 6+ months can seek reactivation orders within the strict 21-day limit (<code>[2026] FWC 3921 Zhao</code>).";
    } else if (dType === "adverse_action" || !udEligible) {
      trackKo = "<strong>권고 트랙: 일반보호 해고 분쟁 신청 (General Protections Dismissal · Form F8 · s 365 / s 340)</strong> — 근속기간(" + minMonths + "개월) 미달이거나 고소득 기준선 이상이더라도, 임금·휴가·안전 문의 등 '직장 내 권리(Workplace Right)' 행사 때문에 해고된 경우 근속기간·연봉 상한 제한 없이 신청 가능하며 입증책임이 고용주에게 전환(s 361)됩니다.";
      trackEn = "<strong>Recommended Track: General Protections Dismissal (Form F8 · s 365 / s 340)</strong> — Even if minimum service (" + minMonths + "m) is not met or salary exceeds the High Income Threshold, s 365 applies with a reverse onus of proof (s 361) where dismissal followed a workplace right inquiry or complaint.";
    } else if (dType === "forced_resignation") {
      trackKo = "<strong>권고 트랙: 강제사직(Constructive Dismissal · s 386(1)(b)) 기반 부당해고(Form F2) 또는 일반보호(Form F8)</strong> — <code>[2026] FWC 3896 Shawriah</code> 판례상 단순한 불쾌감만으로는 강제사직이 인정되지 않으므로, 아직 사직서를 내지 않았다면 <strong>절대 자진 사직서를 먼저 제출하지 마시고</strong> 박앤코와 서면 대응 전략을 먼저 수립하십시오.";
      trackEn = "<strong>Recommended Track: Constructive / Forced Resignation (s 386(1)(b)) under Form F2 or Form F8</strong> — Per <code>[2026] FWC 3896 Shawriah</code>, do NOT submit a voluntary resignation letter before securing legal advice.";
    } else {
      trackKo = "<strong>권고 트랙: 부당해고 구제 신청 (Unfair Dismissal · Form F2 · s 394)</strong> — 최소 근속기간(" + minMonths + "개월 기준 현재 " + months + "개월) 및 급여 요건을 충족합니다. 해고가 가혹·부당·불합리(s 387)했거나 가짜 정리해고(s 389)인 경우 최대 26주분 보상금(s 392) 또는 복직 청구가 가능합니다.";
      trackEn = "<strong>Recommended Track: Unfair Dismissal Application (Form F2 · s 394)</strong> — Minimum employment period (" + months + "m vs " + minMonths + "m required) and salary threshold satisfied. Eligible to claim up to 26 weeks' compensation (s 392) or reinstatement.";
    }

    var out = document.getElementById("emp-deadline-output");
    if (out) {
      out.innerHTML =
        '<div style="background:' + badgeColor + ';color:#FFFFFF;padding:12px 16px;border-radius:10px;font-weight:800;font-size:14px;margin-bottom:14px;">' +
          (currentLang === "ko" ? statusTextKo : statusTextEn) +
        '</div>' +
        '<div style="font-size:13.5px;line-height:1.65;color:#2E2E2E;background:#FCFAF6;border:1px solid #DED6C8;padding:14px;border-radius:10px;">' +
          (currentLang === "ko" ? trackKo : trackEn) +
        '</div>';
    }
    return { deadlineIso: deadlineIso, diffDays: diffDays, udEligible: udEligible, dType: dType };
  }

  function calcRedundancySimulator() {
    var yrs = parseFloat((document.getElementById("red-years") || {}).value) || 3.5;
    var weekly = parseFloat((document.getElementById("red-weekly-pay") || {}).value) || 2200;
    var age45 = (document.getElementById("red-age-45") || {}).value === "over45";
    var redeploy = (document.getElementById("red-redeploy") || {}).value || "failed_redeploy";
    var bizSize = (document.getElementById("emp-business-size") || {}).value || "standard";

    var noticeWeeks = 1;
    if (yrs >= 5) noticeWeeks = 4;
    else if (yrs >= 3) noticeWeeks = 3;
    else if (yrs >= 1) noticeWeeks = 2;
    if (age45 && yrs >= 2) noticeWeeks += 1;

    var redWeeks = 0;
    if (bizSize !== "small") {
      if (yrs >= 10) redWeeks = 12;
      else if (yrs >= 9) redWeeks = 16;
      else if (yrs >= 8) redWeeks = 14;
      else if (yrs >= 7) redWeeks = 13;
      else if (yrs >= 6) redWeeks = 11;
      else if (yrs >= 5) redWeeks = 10;
      else if (yrs >= 4) redWeeks = 8;
      else if (yrs >= 3) redWeeks = 7;
      else if (yrs >= 2) redWeeks = 6;
      else if (yrs >= 1) redWeeks = 4;
    }

    var noticePay = Math.round(noticeWeeks * weekly);
    var redPay = Math.round(redWeeks * weekly);
    var maxUdComp = Math.min(95050, Math.round(26 * weekly));

    var out = document.getElementById("emp-redundancy-output");
    if (out) {
      var defectBanner = redeploy === "failed_redeploy"
        ? (currentLang === "ko"
            ? '<div style="background:#FEF2F2;border-left:4px solid #B23A2E;padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:#7F1D1D;"><strong>⚠️ s 389 가짜 정리해고(Non-Genuine Redundancy) 판정:</strong> 사내·계열사 재배치(Redeployment) 검토 또는 Award 사전 협의를 누락하면 정리해고 면책이 박탈되며, <code>[2026] FWC 3112 Yorston</code> 판례와 같이 <strong>최대 26주분 부당해고 배상금($' + maxUdComp.toLocaleString() + ')</strong>이 선고될 수 있습니다.</div>'
            : '<div style="background:#FEF2F2;border-left:4px solid #B23A2E;padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:#7F1D1D;"><strong>⚠️ Non-Genuine Redundancy Defect (s 389):</strong> Failure to consult or offer reasonable redeployment strips the redundancy immunity, exposing the employer to the <strong>26-week Unfair Dismissal cap ($' + maxUdComp.toLocaleString() + ')</strong> per <code>[2026] FWC 3112 Yorston</code>.</div>')
        : (currentLang === "ko"
            ? '<div style="background:#ECFDF5;border-left:4px solid #2E6B4F;padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:#065F46;"><strong>✅ s 389 적법 정리해고 요건 충족:</strong> 직무 소멸·사전 서면 협의·재배치 불가 증빙이 완비된 경우 부당해고 관할이 배제되며 법정 해고예고 및 정리해고수당만 정산됩니다.</div>'
            : '<div style="background:#ECFDF5;border-left:4px solid #2E6B4F;padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:#065F46;"><strong>✅ Genuine Redundancy (s 389) Satisfied:</strong> Where operational change, Award consultation, and non-redeployment are documented, unfair dismissal is barred and statutory NES entitlements apply.</div>');

      out.innerHTML = defectBanner +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;">' +
          '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:#5A5654;">' + (currentLang === "ko" ? "법정 해고예고수당 (s 117)" : "NES Notice Pay (s 117)") + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:#2E2E2E;">' + noticeWeeks + ' wks ($' + noticePay.toLocaleString() + ')</div>' +
          '</div>' +
          '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:#5A5654;">' + (currentLang === "ko" ? "법정 정리해고수당 (s 119)" : "NES Redundancy Pay (s 119)") + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:#1E3A8A;">' + redWeeks + ' wks ($' + redPay.toLocaleString() + ')</div>' +
          '</div>' +
          '<div style="background:#FFFBEB;border:1px solid #F59E0B;padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:#92400E;">' + (currentLang === "ko" ? "부당해고 최대 배상금 (s 392 · 상한 $95,050)" : "Max Unfair Dismissal Cap (s 392 · $95,050 cap)") + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:#B23A2E;">26 wks ($' + maxUdComp.toLocaleString() + ')</div>' +
          '</div>' +
        '</div>';
    }
    return { noticeWeeks: noticeWeeks, noticePay: noticePay, redWeeks: redWeeks, redPay: redPay, maxUdComp: maxUdComp };
  }

  function calcComplianceAudit() {
    var cont = (document.getElementById("audit-contractor") || {}).value || "high_risk";
    var pay = (document.getElementById("audit-pay") || {}).value || "flat_unverified";
    var disc = (document.getElementById("audit-disconnect") || {}).value || "after_hours_risk";

    var items = [];
    if (cont === "high_risk") {
      items.push(currentLang === "ko"
        ? "🔴 <strong>s 15AA / s 357 위장도급(Sham Contracting) 고위험:</strong> 실질 근무 형태가 근로자에 해당하므로 과거 최대 6년치 연차·유급병가·주말수당·Superannuation 소급 청구 및 민사벌금 대상입니다."
        : "🔴 <strong>s 15AA / s 357 Sham Contracting High Risk:</strong> Practical reality test points to employment status, exposing the business to 6 years of back-paid NES leave, penalty rates, superannuation, and civil penalties.");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>s 15AA 도급/고용 구분 양호:</strong> 독립 사업자 요건 또는 정식 TFN 고용 체계가 유지되고 있습니다."
        : "🟢 <strong>s 15AA Classification Compliant:</strong> Independent contractor or TFN employment structure aligned.");
    }

    if (pay === "flat_unverified") {
      items.push(currentLang === "ko"
        ? "🔴 <strong>s 327A 임금체불(Wage Theft) & 소액청구($100,000 한도 s 548) 노출:</strong> 서면 상계조항(Set-off clause) 없는 Flat Rate 지급은 주말·초과근무 수당 미지급으로 간주됩니다."
        : "🔴 <strong>s 327A Wage Theft & s 548 ($100k Small Claims) Exposure:</strong> Unverified flat rates without a valid written Award set-off clause cannot offset penalty rate shortfalls.");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>Modern Award 급여 및 상계조항 검증 완료</strong>"
        : "🟢 <strong>Modern Award & Written Set-Off Clause Verified</strong>");
    }

    if (disc === "after_hours_risk") {
      items.push(currentLang === "ko"
        ? "🟠 <strong>s 333M 연결되지 않을 권리(Right to Disconnect) 주의:</strong> 2025년 8월 26일부터 소규모 사업장까지 전면 적용되었으며, 퇴근 후 연락 거부를 이유로 한 불이익 처분은 s 340 일반보호 위반이 됩니다."
        : "🟠 <strong>s 333M Right to Disconnect Alert:</strong> Effective across all employers (including small businesses since 26 Aug 2025); penalising reasonable refusal of after-hours contact triggers s 340 General Protections liability.");
    }

    var out = document.getElementById("emp-compliance-output");
    if (out) {
      out.innerHTML = '<ul style="margin:0;padding-left:18px;font-size:13.5px;line-height:1.7;">' +
        items.map(function (i) { return '<li style="margin-bottom:8px;">' + i + '</li>'; }).join("") +
        '</ul>';
    }
  }

  function calcVisaCrossover() {
    var visa = (document.getElementById("cross-visa-type") || {}).value || "482";
    var days = parseInt((document.getElementById("cross-days-elapsed") || {}).value, 10) || 0;
    var issue = (document.getElementById("cross-issue") || {}).value || "unfair_plus_transfer";
    var remain180 = Math.max(0, 180 - days);

    var html = "";
    if (currentLang === "ko") {
      html =
        '<div style="background:#EFF6FF;border:1px solid #93C5FD;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:#1E3A8A;">' +
          '<strong>🛡️ 스폰서 비자(' + visa + ') 고용 종료 시계 (Condition 8607/8608):</strong> 퇴사 후 <strong>' + days + '일 경과</strong> — 단일 공백 180일 한도까지 <strong>' + remain180 + '일 남음</strong> (비자 전체 기간 누적 한도 365일).' +
        '</div>' +
        '<div style="font-size:13.5px;line-height:1.65;color:#2E2E2E;">' +
          (issue === "exploitation_408"
            ? "• <strong>직장정의 비자(Subclass 408 Workplace Justice Visa) & 비자 취소 방지 보호:</strong> 임금체불·스폰서 비용 갈취(s 245AR 위반)·괴롭힘 피해를 당한 비자 소지자는 인증 기관/법률 대리 절차를 통해 호주에 합법 체류하며 체불 임금과 보상금을 청구할 수 있습니다."
            : issue === "employer_termination"
            ? "• <strong>고용주 필수 조치:</strong> ① 해고 전 Fair Work s 387/s 389 절차 준수 확인, ② 고용 종료 후 <strong>28일 이내 이민성(Home Affairs) 스폰서십 변동 통보(s 140H)</strong>, ③ 근로자 귀국 항공료 요청 시 지급 의무 점검."
            : "• <strong>FWC 부당해고 청구 + 신규 스폰서 노미네이션 병행 전략:</strong> 해고 후 21일 이내 FWC 신청으로 합의금(Settlement) 및 비자 공백기 생활비를 확보하면서, 동시에 180일 유예기간 내 새 스폰서 노미네이션을 접수해 <strong>이전 스폰서 경력을 합산한 186 TRT 영주권(2년/730일)</strong> 타임라인을 이어갈 수 있습니다.") +
        '</div>';
    } else {
      html =
        '<div style="background:#EFF6FF;border:1px solid #93C5FD;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:#1E3A8A;">' +
          '<strong>🛡️ Sponsored Visa (' + visa + ') Cessation Clock (Condition 8607/8608):</strong> <strong>' + days + ' days elapsed</strong> — <strong>' + remain180 + ' days remaining</strong> in your 180-day single-stretch grace period (365 days total cap).' +
        '</div>' +
        '<div style="font-size:13.5px;line-height:1.65;color:#2E2E2E;">' +
          (issue === "exploitation_408"
            ? "• <strong>Subclass 408 Workplace Justice Visa & Non-Cancellation Shield:</strong> Exploited migrant workers (underpayment, illegal s 245AR cashback demands) can secure temporary stay and work rights to pursue Fair Work claims without fear of visa cancellation."
            : issue === "employer_termination"
            ? "• <strong>Employer Mandatory Checklist:</strong> (1) Verify s 387/s 389 Fair Work procedural fairness prior to termination, (2) Lodge mandatory <strong>Home Affairs sponsor notification within 28 days (s 140H)</strong>, (3) Respect s 245AR prohibition on recovering SAF/nomination costs."
            : "• <strong>Dual FWC Claim + Sponsorship Transfer Strategy:</strong> File your FWC claim within 21 days to negotiate compensation and clean employment records while lodging a new 482 nomination within the 180-day window to preserve cumulative 2-year (730-day) 186 TRT permanent residency accrual.") +
        '</div>';
    }
    var out = document.getElementById("emp-crossover-output");
    if (out) out.innerHTML = html;
    return { visa: visa, days: days, remain180: remain180 };
  }

  function renderEmpKdbCases() {
    var grid = document.getElementById("emp-kdb-cards-grid");
    if (!grid) return;
    grid.innerHTML = EMP_KDB_CASES.map(function (c) {
      return (
        '<div class="card" style="padding:16px;border:1px solid #DED6C8;">' +
          '<div style="font-size:11px;font-weight:800;color:#7A1F2B;margin-bottom:4px;">' + (currentLang === "ko" ? c.tag_ko : c.tag_en) + '</div>' +
          '<h4 style="margin:0 0 6px;font-size:15px;">' + c.parties + ' <span style="color:#5A5654;">' + c.citation + '</span></h4>' +
          '<p style="font-size:12.5px;color:#2E2E2E;line-height:1.55;margin:0 0 10px;">' + (currentLang === "ko" ? c.summary_ko : c.summary_en) + '</p>' +
          '<a href="' + c.url + '" target="_blank" rel="noopener" style="font-size:12px;font-weight:700;color:#7A1F2B;">' + (currentLang === "ko" ? "AustLII 원문 확인 (" : "View Verified AustLII Judgment (") + '' + c.date + ') &rarr;</a>' +
        '</div>'
      );
    }).join("");
  }

  function updateDiagnosticBrief() {
    var d1 = calcDeadlineRouter();
    var d2 = calcRedundancySimulator();
    calcComplianceAudit();
    var d4 = calcVisaCrossover();

    var roleLabel = currentMode === "employer"
      ? (currentLang === "ko" ? "고용주 / 인사담당자 (Employer / HR)" : "Employer / HR Representative")
      : (currentLang === "ko" ? "근로자 / 비자 소지자 (Employee / Visa Holder)" : "Employee / Visa Worker");

    var brief = currentLang === "ko"
      ? [
          "[법무법인 박앤코 호주 고용법 · 스폰서십 교차 진단 패킷]",
          "• 수신: 법무법인 박앤코 박창민 대표변호사 (Acc. Spec. Immi) & 박기성 변호사 (Kevin Park) (enquiry@parkcolawyers.com)",
          "• 의뢰인 구분: " + roleLabel,
          "• [Module 01] FWC 21일 법정 마감일: " + d1.deadlineIso + " (잔여 " + d1.diffDays + "일) / 유형: " + d1.dType,
          "• [Module 02] 법정 해고예고수당: " + d2.noticeWeeks + "주($" + d2.noticePay.toLocaleString() + ") / 정리해고수당: " + d2.redWeeks + "주($" + d2.redPay.toLocaleString() + ") / 부당해고 최대 배상한도(s 392): $" + d2.maxUdComp.toLocaleString(),
          "• [Module 04] 스폰서 비자(" + d4.visa + ") 퇴사 후 경과: " + d4.days + "일 (Condition 8607 180일 한도 잔여 " + d4.remain180 + "일)",
          "• 요청 사항: 상기 진단 결과를 바탕으로 FWC 구제 신청 / 해고 방어 / 스폰서 비자 보호 통합 법률 자문을 요청합니다."
        ].join("\n")
      : [
          "[Park & Co Lawyers — Australian Employment Law & Visa Crossover Diagnostic Brief]",
          "• To: Chang Min Park (Principal Solicitor, Acc. Spec. Immi) & Kevin Park (Solicitor) (enquiry@parkcolawyers.com)",
          "• Client Role: " + roleLabel,
          "• [Module 01] FWC 21-Day Deadline: " + d1.deadlineIso + " (" + d1.diffDays + " days remaining) / Type: " + d1.dType,
          "• [Module 02] NES Notice: " + d2.noticeWeeks + " wks ($" + d2.noticePay.toLocaleString() + ") / NES Redundancy: " + d2.redWeeks + " wks ($" + d2.redPay.toLocaleString() + ") / s 392 26-Wk Cap: $" + d2.maxUdComp.toLocaleString(),
          "• [Module 04] Sponsored Visa (" + d4.visa + ") Cessation Clock: " + d4.days + " days elapsed (" + d4.remain180 + " days left of 180-day limit)",
          "• Inquiry: Requesting formal legal representation and strategy review based on the above diagnostic parameters."
        ].join("\n");

    var pre = document.getElementById("emp-diagnostic-brief-text");
    if (pre) pre.textContent = brief;

    var mailBtn = document.getElementById("btn-emp-mailto");
    if (mailBtn) {
      var subj = encodeURIComponent(
        currentLang === "ko"
          ? "[박앤코 고용법·스폰서십 자문요청] FWC 21일 기한(" + d1.deadlineIso + ") 및 비자 교차 진단"
          : "[Park & Co Employment/Visa Inquiry] FWC 21-Day Deadline (" + d1.deadlineIso + ") & Diagnostic Brief"
      );
      mailBtn.href = "mailto:enquiry@parkcolawyers.com?subject=" + subj + "&body=" + encodeURIComponent(brief);
    }
  }

  var cachedPollingStatus = null;
  var cachedAbfSummary = null;

  function renderAbfCrossoverSummary() {
    var body = document.getElementById("emp-abf-crossover-body");
    if (!body) return;
    var s = cachedAbfSummary || {
      total_sanctions: 1842,
      active_sanctions_count: 121,
      prohibited_employers_count: 1,
      by_obligation: {
        "reg 2.84 (Provide false/misleading info)": 724,
        "reg 2.86 (Ensure worker works in nominated occupation)": 498,
        "reg 2.83 (Notify Home Affairs of events)": 358,
        "reg 2.79 (Ensure equivalent terms/conditions of employment)": 272,
        "reg 2.82 (Keep records)": 192
      },
      prohibited_employers: [
        {
          business_name: "Eatalian Deli (WA) Pty Ltd",
          abn: "27 624 025 385",
          state: "WA",
          reason: "Requiring visa holder to pay sponsorship costs (s 245AR)"
        }
      ]
    };
    var ob = s.by_obligation || {};
    var pe = (s.prohibited_employers && s.prohibited_employers[0]) || {
      business_name: "Eatalian Deli (WA) Pty Ltd",
      abn: "27 624 025 385",
      state: "WA"
    };

    if (currentLang === "ko") {
      body.innerHTML =
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:10px;">' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">ABF 스폰서 누적 제재 (s 140M)</div>' +
            '<div style="font-size:18px;font-weight:800;color:#B23A2E;">' + Number(s.total_sanctions || 1842).toLocaleString() + '건 <span style="font-size:12px;color:#5A5654;">(현행 ' + Number(s.active_sanctions_count || 121) + '건)</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">급여·근로조건 위반 제재 (reg 2.79)</div>' +
            '<div style="font-size:18px;font-weight:800;color:#1E3A8A;">' + Number(ob["reg 2.79 (Ensure equivalent terms/conditions of employment)"] || 272).toLocaleString() + '건 <span style="font-size:12px;color:#5A5654;">+ 직무위반(reg 2.86) ' + Number(ob["reg 2.86 (Ensure worker works in nominated occupation)"] || 498).toLocaleString() + '건</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">이주근로자 고용금지 선언 (s 245AYM)</div>' +
            '<div style="font-size:15px;font-weight:800;color:#991B1B;">' + Number(s.prohibited_employers_count || 1) + '곳 (' + pe.business_name + ')</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '• <strong>노동법 × 이민법 동시 단속 리스크:</strong> 공정근로법상 임금체불(s 327A)이나 부당해고 분쟁이 발생하면 호주 국경수비대(ABF)의 <strong>스폰서 의무 위반 조사(reg 2.79 동등 급여·근로조건 보장 위반 272건, reg 2.83 28일 이내 고용종료 미통보 358건)</strong>로 즉시 연계됩니다. 스폰서 비용 갈취(s 245AR) 적발 시 <code>' + pe.business_name + ' (ABN ' + pe.abn + ')</code> 사례와 같이 <strong>이주근로자 신규 고용이 법적으로 전면 금지(s 245AYM)</strong>됩니다.' +
        '</div>';
    } else {
      body.innerHTML =
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:10px;">' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">Total ABF Sponsor Sanctions (s 140M)</div>' +
            '<div style="font-size:18px;font-weight:800;color:#B23A2E;">' + Number(s.total_sanctions || 1842).toLocaleString() + ' <span style="font-size:12px;color:#5A5654;">(' + Number(s.active_sanctions_count || 121) + ' Active Bars)</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">Salary/Terms Breaches (reg 2.79)</div>' +
            '<div style="font-size:18px;font-weight:800;color:#1E3A8A;">' + Number(ob["reg 2.79 (Ensure equivalent terms/conditions of employment)"] || 272).toLocaleString() + ' <span style="font-size:12px;color:#5A5654;">+ Duties (reg 2.86): ' + Number(ob["reg 2.86 (Ensure worker works in nominated occupation)"] || 498).toLocaleString() + '</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid #FECACA;padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7F1D1D;font-weight:700;">Prohibited Employers (s 245AYM)</div>' +
            '<div style="font-size:15px;font-weight:800;color:#991B1B;">' + Number(s.prohibited_employers_count || 1) + ' (' + pe.business_name + ')</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '• <strong>Dual Fair Work × ABF Enforcement Crossover:</strong> Fair Work underpayment (s 327A) or dismissal disputes routinely trigger ABF sponsor monitoring audits under <strong>reg 2.79 (272 salary/conditions sanctions)</strong> and <strong>reg 2.83 (358 failures to notify cessation within 28 days)</strong>. Unlawful sponsorship cost recovery (s 245AR) exposes employers to <strong>s 245AYM Prohibited Employer declarations</strong> (e.g., <code>' + pe.business_name + ' · ABN ' + pe.abn + '</code>).' +
        '</div>';
    }
  }

  function renderEmpPollerMatrix() {
    var kpiGrid = document.getElementById("emp-poller-kpis");
    var tbody = document.getElementById("emp-poller-tbody");
    if (!kpiGrid || !tbody || !cachedPollingStatus) return;

    var hm = cachedPollingStatus.headline_metrics || {};
    var kpis = [
      {
        label: currentLang === "ko" ? "FWC 고소득 기준선 (FY26–27)" : "FWC High Income Threshold",
        val: hm.high_income_threshold || "$190,100",
        sub: currentLang === "ko" ? "s 382(b) · 2026.07.01 시행" : "s 382(b) · Effective 1 Jul 2026"
      },
      {
        label: currentLang === "ko" ? "부당해고 26주 보상 상한" : "s 392(5) 26-Week Cap",
        val: hm.max_ud_compensation || "$95,050 (26 wks)",
        sub: currentLang === "ko" ? "고소득 기준선 50% 법정 캡" : "50% of High Income Threshold"
      },
      {
        label: currentLang === "ko" ? "ABF 스폰서 제재 · 고용금지" : "ABF Sanctions & s 245AYM",
        val: hm.abf_sponsor_sanctions || "1,842 Sanctions (121 Active)",
        sub: currentLang === "ko" ? "reg 2.79 급여위반 272건 · s 245AYM 1곳" : "reg 2.79 (272) · s 245AYM Prohibited (1)"
      },
      {
        label: currentLang === "ko" ? "박앤코 고용법 KDB 실시간 코퍼스" : "Park & Co Emp KDB Live Corpus",
        val: hm.emp_kdb_cases || "3,977 Cases",
        sub: hm.emp_kdb_breakdown || "FWC 2,539 · FCA 595 · FWCFB 592"
      }
    ];

    kpiGrid.innerHTML = kpis.map(function (k) {
      return (
        '<div class="card" style="padding:14px;background:#FCFAF6;border:1px solid #DED6C8;">' +
          '<div style="font-size:11.5px;color:#5A5654;font-weight:700;">' + k.label + '</div>' +
          '<div style="font-size:20px;font-weight:800;color:#7A1F2B;margin:4px 0;">' + k.val + '</div>' +
          '<div style="font-size:11.5px;color:#5A5654;">' + k.sub + '</div>' +
        '</div>'
      );
    }).join("");

    var sources = cachedPollingStatus.sources || [];
    tbody.innerHTML = sources.map(function (s) {
      var title = currentLang === "ko" ? (s.title_ko || s.title_en) : (s.title_en || s.title_ko);
      var figs = (s.extracted_figures || []).join(" · ") || "—";
      var kb = s.bytes ? Math.round(s.bytes / 1024).toLocaleString() + " KB" : "Live API";
      var method = s.method || "https-direct-live";
      var compBadge = s.compilation
        ? '<div style="margin-top:3px;"><span style="background:#EFF6FF;color:#1E3A8A;border:1px solid #BFDBFE;padding:1px 6px;border-radius:4px;font-size:10.5px;font-weight:700;">Compilation #' + s.compilation + ' (' + (s.register_id || "") + ') · Start ' + (s.effective_start || "") + '</span></div>'
        : "";
      var isLive = s.status === "verified_ok";
      var statusBadge = isLive
        ? '<span style="background:#ECFDF5;color:#065F46;border:1px solid #6EE7B7;padding:3px 8px;border-radius:999px;font-size:11.5px;font-weight:700;">✓ verified_ok (' + (s.http_status || 200) + ')</span>'
        : '<span style="background:#FFFBEB;color:#92400E;border:1px solid #FCD34D;padding:3px 8px;border-radius:999px;font-size:11.5px;font-weight:700;">↺ ' + (s.status || "cached_last_good") + '</span>';
      return (
        '<tr style="border-bottom:1px solid #EFEAE1;">' +
          '<td style="padding:11px 14px;">' +
            '<div style="font-weight:700;color:#2E2E2E;">' + title + '</div>' +
            '<a href="' + s.url + '" target="_blank" rel="noopener" style="font-size:11.5px;color:#7A1F2B;">' + s.url + ' &nearr;</a>' +
          '</td>' +
          '<td style="padding:11px 14px;font-size:12px;color:#5A5654;">' + (s.citation || "") + compBadge + '</td>' +
          '<td style="padding:11px 14px;font-weight:700;color:#1E3A8A;font-size:12.5px;">' + figs + '</td>' +
          '<td style="padding:11px 14px;font-family:monospace;font-size:11.5px;color:#2E2E2E;">' +
            '<code>' + (s.sha256_prefix || "") + '</code><br/><span style="color:#5A5654;">' + kb + ' (' + method + ')</span>' +
          '</td>' +
          '<td style="padding:11px 14px;">' + statusBadge + '</td>' +
        '</tr>'
      );
    }).join("");
  }

  function loadEmpPollingStatus() {
    fetch("data/polling_status.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedPollingStatus = data;
        renderEmpPollerMatrix();
      })
      .catch(function () {});
    fetch("data/abf_sanctions_summary.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedAbfSummary = data;
        renderAbfCrossoverSummary();
      })
      .catch(function () {});
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ko";
    document.documentElement.lang = currentLang;
    var dict = currentLang === "en" ? EN_TRANSLATIONS : KO_TRANSLATIONS;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.innerHTML = dict[k];
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = currentLang === "en" ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    renderEmpKdbCases();
    renderAbfCrossoverSummary();
    renderEmpPollerMatrix();
    updateDiagnosticBrief();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initDefaultDate();
    [
      "emp-dismissal-date", "emp-business-size", "emp-service-months", "emp-salary-band", "emp-dismissal-type",
      "red-years", "red-weekly-pay", "red-age-45", "red-redeploy",
      "audit-contractor", "audit-pay", "audit-disconnect",
      "cross-visa-type", "cross-days-elapsed", "cross-issue"
    ].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", updateDiagnosticBrief);
        el.addEventListener("change", updateDiagnosticBrief);
      }
    });

    var btnKo = document.getElementById("btn-lang-ko");
    var btnEn = document.getElementById("btn-lang-en");
    if (btnKo) btnKo.addEventListener("click", function () { applyLanguage("ko"); });
    if (btnEn) btnEn.addEventListener("click", function () { applyLanguage("en"); });

    var modeEmp = document.getElementById("mode-btn-employee");
    var modeBiz = document.getElementById("mode-btn-employer");
    var modeBanner = document.getElementById("active-mode-banner");
    if (modeEmp && modeBiz && modeBanner) {
      modeEmp.addEventListener("click", function () {
        currentMode = "employee";
        modeBanner.innerHTML = currentLang === "ko"
          ? "현재 [근로자 · 비자 소지자 모드]입니다: 해고 후 21일 마감일 사수, 사직서 제출 전 강제사직(s 386) 성립 여부, 미지급 해고·정리해고 수당 및 482 비자 180일 유예·408 비자 보호 경로를 우선 안내합니다."
          : "Active Mode: [Employee & Visa Worker] — Prioritising the 21-day FWC deadline, forced resignation (s 386) risks, NES entitlements, and 482 180-day grace / 408 Workplace Justice Visa protections.";
        updateDiagnosticBrief();
      });
      modeBiz.addEventListener("click", function () {
        currentMode = "employer";
        modeBanner.innerHTML = currentLang === "ko"
          ? "현재 [고용주 · 인사담당자 모드]입니다: 해고 통보 전 s 389 재배치·협의 의무 점검, 최대 26주 보상금 배상 예방, ABN 도급(s 15AA)·임금체불(s 327A) 감사 및 스폰서 28일 통보(s 140H)를 우선 안내합니다."
          : "Active Mode: [Employer & HR Compliance] — Prioritising pre-termination s 389 redeployment/consultation checks, 26-week cap defence, s 15AA contractor audits, and 28-day Home Affairs sponsor notifications.";
        updateDiagnosticBrief();
      });
    }

    var copyBtn = document.getElementById("btn-emp-copy");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var pre = document.getElementById("emp-diagnostic-brief-text");
        if (pre && navigator.clipboard) {
          navigator.clipboard.writeText(pre.textContent || "");
          copyBtn.textContent = currentLang === "ko" ? "✅ 클립보드 복사 완료!" : "✅ Copied to Clipboard!";
          setTimeout(function () {
            copyBtn.textContent = currentLang === "ko" ? KO_TRANSLATIONS.btnCopyBrief : EN_TRANSLATIONS.btnCopyBrief;
          }, 2000);
        }
      });
    }

    var printBtn = document.getElementById("btn-print-doc");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      applyLanguage("en");
    } else {
      applyLanguage("ko");
    }
    loadEmpPollingStatus();
  });
})();

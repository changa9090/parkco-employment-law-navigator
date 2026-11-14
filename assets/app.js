/* Park & Co Lawyers · Australian Employment Law & Sponsor-Workplace Navigator */
(function (root) {
  "use strict";

  /* Canonical Australian Statutory Date & Public Holiday Utility (2026–2030+) */
  var ParkCoDates = (function () {
    var NATIONAL_HOLIDAYS = {
      // 2026
      "2026-01-01": "New Year's Day",
      "2026-01-26": "Australia Day",
      "2026-04-03": "Good Friday",
      "2026-04-06": "Easter Monday",
      "2026-12-25": "Christmas Day",
      "2026-12-28": "Boxing Day (Additional Day)",
      // 2027
      "2027-01-01": "New Year's Day",
      "2027-01-26": "Australia Day",
      "2027-03-26": "Good Friday",
      "2027-03-29": "Easter Monday",
      "2027-12-25": "Christmas Day",
      "2027-12-27": "Christmas Day (Additional Day)",
      "2027-12-28": "Boxing Day (Additional Day)",
      // 2028
      "2028-01-01": "New Year's Day",
      "2028-01-03": "New Year's Day (Additional Day)",
      "2028-01-26": "Australia Day",
      "2028-04-14": "Good Friday",
      "2028-04-17": "Easter Monday",
      "2028-04-25": "Anzac Day",
      "2028-12-25": "Christmas Day",
      "2028-12-26": "Boxing Day",
      // 2029
      "2029-01-01": "New Year's Day",
      "2029-01-26": "Australia Day",
      "2029-03-30": "Good Friday",
      "2029-04-02": "Easter Monday",
      "2029-04-25": "Anzac Day",
      "2029-12-25": "Christmas Day",
      "2029-12-26": "Boxing Day",
      // 2030
      "2030-01-01": "New Year's Day",
      "2030-01-26": "Australia Day",
      "2030-01-28": "Australia Day (Additional Day)",
      "2030-04-19": "Good Friday",
      "2030-04-22": "Easter Monday",
      "2030-04-25": "Anzac Day",
      "2030-12-25": "Christmas Day",
      "2030-12-26": "Boxing Day"
    };

    var STATE_HOLIDAYS = {
      QLD: {
        "2026-04-04": "Easter Saturday",
        "2026-04-05": "Easter Sunday",
        "2026-04-25": "Anzac Day",
        "2026-05-04": "Labour Day (QLD)",
        "2026-08-12": "Royal Queensland Show (Brisbane)",
        "2026-10-05": "King's Birthday (QLD)",
        "2027-03-27": "Easter Saturday",
        "2027-03-28": "Easter Sunday",
        "2027-04-25": "Anzac Day",
        "2027-04-26": "Anzac Day (Observed QLD)",
        "2027-05-03": "Labour Day (QLD)",
        "2027-08-11": "Royal Queensland Show (Brisbane)",
        "2027-10-04": "King's Birthday (QLD)",
        "2028-04-15": "Easter Saturday",
        "2028-04-16": "Easter Sunday",
        "2028-05-01": "Labour Day (QLD)",
        "2028-08-16": "Royal Queensland Show (Brisbane)",
        "2028-10-02": "King's Birthday (QLD)",
        "2029-03-31": "Easter Saturday",
        "2029-04-01": "Easter Sunday",
        "2029-05-07": "Labour Day (QLD)",
        "2029-08-15": "Royal Queensland Show (Brisbane)",
        "2029-10-01": "King's Birthday (QLD)",
        "2030-04-20": "Easter Saturday",
        "2030-04-21": "Easter Sunday",
        "2030-05-06": "Labour Day (QLD)",
        "2030-08-14": "Royal Queensland Show (Brisbane)",
        "2030-10-07": "King's Birthday (QLD)"
      },
      NSW: {
        "2026-04-04": "Easter Saturday",
        "2026-04-05": "Easter Sunday",
        "2026-04-25": "Anzac Day",
        "2026-06-08": "King's Birthday (NSW)",
        "2026-10-05": "Labour Day (NSW)",
        "2027-03-27": "Easter Saturday",
        "2027-03-28": "Easter Sunday",
        "2027-04-25": "Anzac Day",
        "2027-06-14": "King's Birthday (NSW)",
        "2027-10-04": "Labour Day (NSW)",
        "2028-04-15": "Easter Saturday",
        "2028-04-16": "Easter Sunday",
        "2028-06-12": "King's Birthday (NSW)",
        "2028-10-02": "Labour Day (NSW)",
        "2029-03-31": "Easter Saturday",
        "2029-04-01": "Easter Sunday",
        "2029-06-11": "King's Birthday (NSW)",
        "2029-10-01": "Labour Day (NSW)",
        "2030-04-20": "Easter Saturday",
        "2030-04-21": "Easter Sunday",
        "2030-06-10": "King's Birthday (NSW)",
        "2030-10-07": "Labour Day (NSW)"
      },
      VIC: {
        "2026-03-09": "Labour Day (VIC)",
        "2026-04-04": "Easter Saturday",
        "2026-04-05": "Easter Sunday",
        "2026-04-25": "Anzac Day",
        "2026-06-08": "King's Birthday (VIC)",
        "2026-09-25": "Friday before AFL Grand Final (VIC)",
        "2026-11-03": "Melbourne Cup Day (VIC)",
        "2027-03-08": "Labour Day (VIC)",
        "2027-03-27": "Easter Saturday",
        "2027-03-28": "Easter Sunday",
        "2027-04-25": "Anzac Day",
        "2027-06-14": "King's Birthday (VIC)",
        "2027-09-24": "Friday before AFL Grand Final (VIC)",
        "2027-11-02": "Melbourne Cup Day (VIC)",
        "2028-03-13": "Labour Day (VIC)",
        "2028-04-15": "Easter Saturday",
        "2028-04-16": "Easter Sunday",
        "2028-06-12": "King's Birthday (VIC)",
        "2028-09-29": "Friday before AFL Grand Final (VIC)",
        "2028-11-07": "Melbourne Cup Day (VIC)",
        "2029-03-12": "Labour Day (VIC)",
        "2029-03-31": "Easter Saturday",
        "2029-04-01": "Easter Sunday",
        "2029-06-11": "King's Birthday (VIC)",
        "2029-09-28": "Friday before AFL Grand Final (VIC)",
        "2029-11-06": "Melbourne Cup Day (VIC)",
        "2030-03-11": "Labour Day (VIC)",
        "2030-04-20": "Easter Saturday",
        "2030-04-21": "Easter Sunday",
        "2030-06-10": "King's Birthday (VIC)",
        "2030-09-27": "Friday before AFL Grand Final (VIC)",
        "2030-11-05": "Melbourne Cup Day (VIC)"
      },
      WA: {
        "2026-03-02": "Labour Day (WA)",
        "2026-04-05": "Easter Sunday",
        "2026-04-25": "Anzac Day",
        "2026-04-27": "Anzac Day (Observed WA)",
        "2026-06-01": "Western Australia Day",
        "2026-09-28": "King's Birthday (WA)",
        "2027-03-01": "Labour Day (WA)",
        "2027-03-28": "Easter Sunday",
        "2027-04-25": "Anzac Day",
        "2027-04-26": "Anzac Day (Observed WA)",
        "2027-06-07": "Western Australia Day",
        "2027-09-27": "King's Birthday (WA)",
        "2028-03-06": "Labour Day (WA)",
        "2028-04-16": "Easter Sunday",
        "2028-06-05": "Western Australia Day",
        "2028-09-25": "King's Birthday (WA)",
        "2029-03-05": "Labour Day (WA)",
        "2029-04-01": "Easter Sunday",
        "2029-06-04": "Western Australia Day",
        "2029-09-24": "King's Birthday (WA)",
        "2030-03-04": "Labour Day (WA)",
        "2030-04-21": "Easter Sunday",
        "2030-06-03": "Western Australia Day",
        "2030-09-30": "King's Birthday (WA)"
      },
      SA: {
        "2026-03-09": "Adelaide Cup Day (SA)",
        "2026-04-04": "Easter Saturday",
        "2026-04-25": "Anzac Day",
        "2026-06-08": "King's Birthday (SA)",
        "2026-10-05": "Labour Day (SA)",
        "2027-03-08": "Adelaide Cup Day (SA)",
        "2027-03-27": "Easter Saturday",
        "2027-04-26": "Anzac Day (Observed SA)",
        "2027-06-14": "King's Birthday (SA)",
        "2027-10-04": "Labour Day (SA)",
        "2028-03-13": "Adelaide Cup Day (SA)",
        "2028-04-15": "Easter Saturday",
        "2028-06-12": "King's Birthday (SA)",
        "2028-10-02": "Labour Day (SA)",
        "2029-03-12": "Adelaide Cup Day (SA)",
        "2029-03-31": "Easter Saturday",
        "2029-06-11": "King's Birthday (SA)",
        "2029-10-01": "Labour Day (SA)",
        "2030-03-11": "Adelaide Cup Day (SA)",
        "2030-04-20": "Easter Saturday",
        "2030-06-10": "King's Birthday (SA)",
        "2030-10-07": "Labour Day (SA)"
      },
      TAS: {
        "2026-03-09": "Eight Hours Day (TAS)",
        "2026-04-07": "Easter Tuesday (TAS Public Service)",
        "2026-04-25": "Anzac Day",
        "2026-06-08": "King's Birthday (TAS)",
        "2027-03-08": "Eight Hours Day (TAS)",
        "2027-03-30": "Easter Tuesday (TAS Public Service)",
        "2027-04-25": "Anzac Day",
        "2027-06-14": "King's Birthday (TAS)",
        "2028-03-13": "Eight Hours Day (TAS)",
        "2028-04-18": "Easter Tuesday (TAS Public Service)",
        "2028-06-12": "King's Birthday (TAS)",
        "2029-03-12": "Eight Hours Day (TAS)",
        "2029-04-03": "Easter Tuesday (TAS Public Service)",
        "2029-06-11": "King's Birthday (TAS)",
        "2030-03-11": "Eight Hours Day (TAS)",
        "2030-04-23": "Easter Tuesday (TAS Public Service)",
        "2030-06-10": "King's Birthday (TAS)"
      },
      ACT: {
        "2026-03-09": "Canberra Day (ACT)",
        "2026-04-04": "Easter Saturday",
        "2026-04-05": "Easter Sunday",
        "2026-04-25": "Anzac Day",
        "2026-04-27": "Anzac Day (Observed ACT)",
        "2026-06-01": "Reconciliation Day (ACT)",
        "2026-06-08": "King's Birthday (ACT)",
        "2026-10-05": "Labour Day (ACT)",
        "2027-03-08": "Canberra Day (ACT)",
        "2027-03-27": "Easter Saturday",
        "2027-03-28": "Easter Sunday",
        "2027-04-25": "Anzac Day",
        "2027-04-26": "Anzac Day (Observed ACT)",
        "2027-05-31": "Reconciliation Day (ACT)",
        "2027-06-14": "King's Birthday (ACT)",
        "2027-10-04": "Labour Day (ACT)",
        "2028-03-13": "Canberra Day (ACT)",
        "2028-04-15": "Easter Saturday",
        "2028-04-16": "Easter Sunday",
        "2028-05-29": "Reconciliation Day (ACT)",
        "2028-06-12": "King's Birthday (ACT)",
        "2028-10-02": "Labour Day (ACT)",
        "2029-03-12": "Canberra Day (ACT)",
        "2029-03-31": "Easter Saturday",
        "2029-04-01": "Easter Sunday",
        "2029-05-28": "Reconciliation Day (ACT)",
        "2029-06-11": "King's Birthday (ACT)",
        "2029-10-01": "Labour Day (ACT)",
        "2030-03-11": "Canberra Day (ACT)",
        "2030-04-20": "Easter Saturday",
        "2030-04-21": "Easter Sunday",
        "2030-05-27": "Reconciliation Day (ACT)",
        "2030-06-10": "King's Birthday (ACT)",
        "2030-10-07": "Labour Day (ACT)"
      },
      NT: {
        "2026-04-04": "Easter Saturday",
        "2026-04-25": "Anzac Day",
        "2026-05-04": "May Day (NT)",
        "2026-06-08": "King's Birthday (NT)",
        "2026-08-03": "Picnic Day (NT)",
        "2027-03-27": "Easter Saturday",
        "2027-04-26": "Anzac Day (Observed NT)",
        "2027-05-03": "May Day (NT)",
        "2027-06-14": "King's Birthday (NT)",
        "2027-08-02": "Picnic Day (NT)",
        "2028-04-15": "Easter Saturday",
        "2028-05-01": "May Day (NT)",
        "2028-06-12": "King's Birthday (NT)",
        "2028-08-07": "Picnic Day (NT)",
        "2029-03-31": "Easter Saturday",
        "2029-05-07": "May Day (NT)",
        "2029-06-11": "King's Birthday (NT)",
        "2029-08-06": "Picnic Day (NT)",
        "2030-04-20": "Easter Saturday",
        "2030-05-06": "May Day (NT)",
        "2030-06-10": "King's Birthday (NT)",
        "2030-08-05": "Picnic Day (NT)"
      }
    };

    function pad2(n) {
      return n < 10 ? "0" + n : String(n);
    }

    function easterSundayIso(year) {
      var a = year % 19;
      var b = Math.floor(year / 100);
      var c = year % 100;
      var d = Math.floor(b / 4);
      var e = b % 4;
      var f = Math.floor((b + 8) / 25);
      var g = Math.floor((b - f + 1) / 3);
      var h = (19 * a + b - d - g + 15) % 30;
      var i = Math.floor(c / 4);
      var k = c % 4;
      var l = (32 + 2 * e + 2 * i - h - k) % 7;
      var m = Math.floor((a + 11 * h + 22 * l) / 451);
      var month = Math.floor((h + l - 7 * m + 114) / 31);
      var day = ((h + l - 7 * m + 114) % 31) + 1;
      return year + "-" + pad2(month) + "-" + pad2(day);
    }

    function parseIsoLocal(isoStr) {
      if (!isoStr || typeof isoStr !== "string") return null;
      var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoStr.trim());
      if (!m) return null;
      var y = parseInt(m[1], 10);
      var mo = parseInt(m[2], 10) - 1;
      var dy = parseInt(m[3], 10);
      var d = new Date(y, mo, dy, 12, 0, 0, 0);
      if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== dy) return null;
      return d;
    }

    function formatIsoLocal(d) {
      if (!d || isNaN(d.getTime())) return "-";
      return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
    }

    function addCalendarDays(d, days) {
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, 12, 0, 0, 0);
    }

    function todayBrisbaneIso() {
      try {
        var parts = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Australia/Brisbane",
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).formatToParts(new Date());
        var map = {};
        for (var i = 0; i < parts.length; i++) map[parts[i].type] = parts[i].value;
        if (map.year && map.month && map.day) return map.year + "-" + map.month + "-" + map.day;
      } catch (_) {}
      return formatIsoLocal(new Date());
    }

    function getDynamicFallbackHoliday(isoStr) {
      var d = parseIsoLocal(isoStr);
      if (!d) return null;
      var y = d.getFullYear();
      if (y <= 2030) return null;
      var md = isoStr.slice(5);
      if (md === "01-01") return "New Year's Day";
      if (md === "01-26") return "Australia Day";
      if (md === "04-25") return "Anzac Day";
      if (md === "12-25") return "Christmas Day";
      if (md === "12-26") return "Boxing Day";
      var es = parseIsoLocal(easterSundayIso(y));
      if (es) {
        if (formatIsoLocal(addCalendarDays(es, -2)) === isoStr) return "Good Friday";
        if (formatIsoLocal(addCalendarDays(es, 1)) === isoStr) return "Easter Monday";
      }
      return null;
    }

    function getHolidayName(isoStr, stateCode) {
      var st = (stateCode || "QLD").toUpperCase();
      if (NATIONAL_HOLIDAYS[isoStr]) return NATIONAL_HOLIDAYS[isoStr];
      if (STATE_HOLIDAYS[st] && STATE_HOLIDAYS[st][isoStr]) return STATE_HOLIDAYS[st][isoStr];
      return getDynamicFallbackHoliday(isoStr);
    }

    function isBusinessDay(d, stateCode) {
      var dow = d.getDay();
      if (dow === 0 || dow === 6) return false;
      var iso = formatIsoLocal(d);
      return !getHolidayName(iso, stateCode);
    }

    function calcWorkingDaysDeadline(startIso, workingDays, stateCode) {
      var start = parseIsoLocal(startIso);
      if (!start) return null;
      var st = (stateCode || "QLD").toUpperCase();
      var cur = new Date(start.getTime());
      var added = 0;
      var skippedHolidays = [];
      while (added < workingDays) {
        cur = addCalendarDays(cur, 1);
        var dow = cur.getDay();
        var iso = formatIsoLocal(cur);
        var hName = getHolidayName(iso, st);
        if (dow !== 0 && dow !== 6) {
          if (hName) {
            skippedHolidays.push({ date: iso, name: hName });
          } else {
            added += 1;
          }
        }
      }
      var safe = addCalendarDays(cur, -1);
      while (safe > start && !isBusinessDay(safe, st)) {
        safe = addCalendarDays(safe, -1);
      }
      return {
        statutoryDate: formatIsoLocal(cur),
        safeDate: formatIsoLocal(safe),
        state: st,
        skippedHolidays: skippedHolidays
      };
    }

    function calcCalendarDaysDeadline(startIso, calendarDays, stateCode, rolloverToNextBusinessDay) {
      var start = parseIsoLocal(startIso);
      if (!start) return null;
      var st = (stateCode || "QLD").toUpperCase();
      var raw = addCalendarDays(start, calendarDays);
      var finalDate = new Date(raw.getTime());
      var rolledReason = null;
      var weekendWarning = null;
      if (rolloverToNextBusinessDay) {
        var reasons = [];
        while (!isBusinessDay(finalDate, st)) {
          var iso = formatIsoLocal(finalDate);
          var hName = getHolidayName(iso, st);
          var dow = finalDate.getDay();
          if (hName) reasons.push(hName);
          else if (dow === 6) reasons.push("Saturday");
          else if (dow === 0) reasons.push("Sunday");
          finalDate = addCalendarDays(finalDate, 1);
        }
        if (reasons.length > 0) rolledReason = reasons.join(" / ");
      } else if (!isBusinessDay(finalDate, st)) {
        var rawIso = formatIsoLocal(finalDate);
        weekendWarning = getHolidayName(rawIso, st) || (finalDate.getDay() === 6 ? "Saturday" : "Sunday");
      }
      var safe = addCalendarDays(finalDate, -1);
      while (safe > start && !isBusinessDay(safe, st)) {
        safe = addCalendarDays(safe, -1);
      }
      return {
        rawDate: formatIsoLocal(raw),
        statutoryDate: formatIsoLocal(finalDate),
        safeDate: formatIsoLocal(safe),
        state: st,
        rolledReason: rolledReason,
        weekendWarning: weekendWarning
      };
    }

    function diffDaysFromTodayBrisbane(targetIso) {
      var t = parseIsoLocal(targetIso);
      var now = parseIsoLocal(todayBrisbaneIso());
      if (!t || !now) return 0;
      return Math.round((t.getTime() - now.getTime()) / 86400000);
    }

    function daysInMonth(year, monthZeroIndexed) {
      return new Date(year, monthZeroIndexed + 1, 0, 12, 0, 0, 0).getDate();
    }

    function addAnniversaryYears(d, nYears) {
      if (!d || isNaN(d.getTime())) return null;
      var ty = d.getFullYear() + nYears;
      var tm = d.getMonth();
      var td = Math.min(d.getDate(), daysInMonth(ty, tm));
      return new Date(ty, tm, td, 12, 0, 0, 0);
    }

    function computeServiceSpanFromDates(startIso, endIso) {
      var start = parseIsoLocal(startIso);
      var end = parseIsoLocal(endIso);
      if (!start || !end) {
        return { valid: false, reason: "missing_date" };
      }
      if (end.getTime() < start.getTime()) {
        return { valid: false, reason: "end_before_start" };
      }
      var totalDays = Math.round((end.getTime() - start.getTime()) / 86400000);
      var wholeYears = 0;
      while (wholeYears < 100) {
        var nextCandidate = addAnniversaryYears(start, wholeYears + 1);
        if (!nextCandidate || nextCandidate.getTime() > end.getTime()) break;
        wholeYears += 1;
      }
      var anniv = addAnniversaryYears(start, wholeYears);
      var nextAnniv = addAnniversaryYears(start, wholeYears + 1);
      var extraDays = Math.round((end.getTime() - anniv.getTime()) / 86400000);
      var yearSpanDays = Math.max(1, Math.round((nextAnniv.getTime() - anniv.getTime()) / 86400000));
      var exactYears = wholeYears + (extraDays / yearSpanDays);
      return {
        valid: true,
        startIso: formatIsoLocal(start),
        endIso: formatIsoLocal(end),
        totalDays: totalDays,
        wholeYears: wholeYears,
        extraDays: extraDays,
        exactYears: exactYears
      };
    }

    return {
      NATIONAL_HOLIDAYS: NATIONAL_HOLIDAYS,
      STATE_HOLIDAYS: STATE_HOLIDAYS,
      easterSundayIso: easterSundayIso,
      getDynamicFallbackHoliday: getDynamicFallbackHoliday,
      parseIsoLocal: parseIsoLocal,
      formatIsoLocal: formatIsoLocal,
      addCalendarDays: addCalendarDays,
      addAnniversaryYears: addAnniversaryYears,
      computeServiceSpanFromDates: computeServiceSpanFromDates,
      todayBrisbaneIso: todayBrisbaneIso,
      getHolidayName: getHolidayName,
      isBusinessDay: isBusinessDay,
      calcWorkingDaysDeadline: calcWorkingDaysDeadline,
      calcCalendarDaysDeadline: calcCalendarDaysDeadline,
      diffDaysFromTodayBrisbane: diffDaysFromTodayBrisbane
    };
  })();

  root.ParkCoDates = ParkCoDates;

  var currentLang = "ko";
  var currentMode = "employee";
  var hasInteracted = false;

  var dynamicThresholds = {
    hitAud: 190100,
    hitFmt: "$190,100",
    capAud: 95050,
    capFmt: "$95,050",
    feeAud: 92.70,
    feeFmt: "$92.70"
  };

  var TOOL_DEEPLINK_MAP = {
    deadline: "deadline-router",
    redundancy: "redundancy-calc",
    sham: "compliance-audit",
    visa8607: "visa-workplace-crossover"
  };

  var VISA_LABELS = {
    ko: {
      "482": "Subclass 482 (SID / TSS 스폰서 비자)",
      "494": "Subclass 494 (SESR 지방 스폰서 비자)",
      "186_pending": "Subclass 186 (ENS 영주권 심사 대기)",
      "485_500_whm": "졸업생(485)·학생(500)·워킹홀리데이(417·462) 임시비자"
    },
    en: {
      "482": "Subclass 482 (SID / TSS Sponsored Visa)",
      "494": "Subclass 494 (SESR Regional Sponsored Visa)",
      "186_pending": "Subclass 186 (ENS PR Application Pending)",
      "485_500_whm": "Temporary Graduate (485) / Student (500) / WHM (417·462) Visa"
    }
  };

  var DISMISSAL_LABELS = {
    ko: {
      direct_unfair: "일방적 해고 (s 385 부당해고)",
      sham_redundancy: "정리해고·구조조정 다툼 (s 389)",
      adverse_action: "직장 내 권리 행사 후 불이익 해고 (s 340/s 365)",
      forced_resignation: "강제사직·사직 압박 (s 386(1)(b))",
      platform_deactivation: "디지털 플랫폼 계정 비활성화 (s 536LU)"
    },
    en: {
      direct_unfair: "Direct Termination (s 385 Unfair Dismissal)",
      sham_redundancy: "Disputed Redundancy (s 389)",
      adverse_action: "General Protections Adverse Action (s 340/s 365)",
      forced_resignation: "Forced Resignation (s 386(1)(b))",
      platform_deactivation: "Digital Platform Deactivation (s 536LU)"
    }
  };

  var EMP_FWC_AUTHORITIES = [
    {
      citation: "[2025] HCA 29",
      parties: "Helensburgh Coal Pty Ltd v Bartley",
      date: "2025-08-06",
      tag_ko: "정리해고 재배치 심사 범위 대법원 판결 (s 389(2))",
      tag_en: "High Court Redeployment Inquiry Scope (s 389(2))",
      summary_ko: "호주 연방대법원(High Court)은 FWC가 정리해고 재배치 합리성(s 389(2))을 심사할 때 사업장 내 빈자리뿐 아니라 기존 외주·도급 인력이 수행하던 업무를 해고 대상 근로자로 대체해 재배치할 수 있었는지까지 심리할 수 있다고 판시했습니다.",
      summary_en: "High Court of Australia held that under s 389(2), the FWC may inquire into whether an employer could have made changes to how it uses its workforce (including insourcing work performed by external contractors) to redeploy otherwise redundant employees.",
      url: "https://www.fwc.gov.au/job-loss-or-dismissal/unfair-dismissal"
    },
    {
      citation: "[2026] FWC 3112",
      parties: "Mr Brogan Yorston v NRR Services Pty Ltd",
      date: "2026-10-14",
      tag_ko: "부적법 정리해고 (s 389) · 26주 최대 보상금 인용",
      tag_en: "Non-Genuine Redundancy (s 389) · 26-Week Max Compensation",
      summary_ko: "사내 Operator 공석 재배치(s 389(2)) 의무를 다하지 않은 정리해고를 부당해고로 판단하고 법정 상한인 26주분 급여($71,000.02 + Superannuation) 배상을 명했습니다.",
      summary_en: "Held dismissal was not a genuine redundancy under s 389(2) due to failure to redeploy into an available Operator role; ordered the statutory maximum 26 weeks' pay ($71,000.02 + super) under s 392.",
      url: "https://www.fairwork.gov.au/ending-employment/redundancy"
    },
    {
      citation: "[2026] FWCFB 273",
      parties: "Ms Kirina De Lorenzo v Persol Staffing Australia Pty Ltd",
      date: "2026-10-14",
      tag_ko: "해고 후 21일 법정 신청기한 엄격 적용 (s 394(3))",
      tag_en: "Strict 21-Day Filing Deadline Enforced (s 394(3))",
      summary_ko: "21일 법정 기한을 넘긴 부당해고 신청에서 예외적 사정(Exceptional Circumstances)을 인정하지 않고 항고 허가를 기각하여 21일 법정 신청기한 원칙을 재확인한 전원합의체(Full Bench) 결정입니다.",
      summary_en: "Full Bench refused permission to appeal an out-of-time unfair dismissal application, confirming strict enforcement of the 21-calendar-day limit under s 394(2)-(3).",
      url: "https://www.fwc.gov.au/job-loss-or-dismissal/unfair-dismissal"
    },
    {
      citation: "[2026] FWC 3896",
      parties: "Ms Dina Shawriah v Bondi Born Pty Ltd",
      date: "2026-10-12",
      tag_ko: "강제사직(Forced Resignation, s 386(1)(b)) 인정 요건",
      tag_en: "Forced Resignation Threshold (s 386(1)(b) & s 365)",
      summary_ko: "상사의 날 선 언행이나 불편한 직장 분위기만으로는 사직 외에 다른 선택지가 없었다는 강제사직(s 386(1)(b))이 성립하지 않는다고 보았습니다. 사직서 제출 전에 반드시 법률 검토를 거쳐야 합니다.",
      summary_en: "Confirmed that critical management or workplace unpleasantness alone does not establish a 'forced resignation' under s 386(1)(b) unless the employee had no real choice but to resign.",
      url: "https://www.fwc.gov.au/job-loss-or-dismissal/dismissal-under-general-protections"
    },
    {
      citation: "[2026] FWC 3921",
      parties: "Application by Zelai Zhao (Uber Delivery Platform)",
      date: "2026-10-13",
      tag_ko: "디지털 플랫폼 부당 계정 비활성화 (s 536LU · s 536LD) · 21일 기한",
      tag_en: "Digital Platform Unfair Deactivation (s 536LU · s 536LD) & 21-Day Limit",
      summary_ko: "Closing Loopholes 개정법으로 도입된 배달·플랫폼 종사자 부당 계정정지 구제 신청(s 536LU · 최소 6개월 정기 활동 요건 s 536LD)도 정지일로부터 21일 안에 접수해야 하며 예외적 사정(s 536LU(3))이 소명되지 않으면 기한 도과로 각하된다는 점을 확인했습니다.",
      summary_en: "Applied the Closing Loopholes unfair deactivation jurisdiction (s 536LU / s 536LD 6-month regular work rule) for digital platform workers, dismissing an out-of-time application absent exceptional circumstances under s 536LU(3).",
      url: "https://www.legislation.gov.au/C2009A00028/latest/text"
    },
    {
      citation: "[2016] FWCFB 5500",
      parties: "Mohammed Ayub v NSW Trains",
      date: "2016-09-30",
      tag_ko: "해고 효력 발생일(Day 0) 및 서면·이메일 도달일 원칙 (s 386 · s 394(2))",
      tag_en: "Effective Date of Dismissal (Day 0) & Communication Rule (s 386 · s 394(2))",
      summary_ko: "해고는 근로자에게 통지되어 합리적으로 그 사실을 알 수 있었던 시점보다 소급해 효력이 발생할 수 없다는 전원합의체 원칙입니다. 이메일·우편 해고는 통지서 기재일과 실제 도달·열람 가능일 중 늦은 날이 Day 0가 됩니다.",
      summary_en: "Full Bench authority establishing that a dismissal cannot take effect before it is communicated and the employee has a reasonable opportunity to read it; Day 0 is the later of the stated termination date and actual receipt.",
      url: "https://www.fwc.gov.au/job-loss-or-dismissal/unfair-dismissal"
    }
  ];

  var KO_TRANSLATIONS = {
    docTitle: "호주 고용법 (부당해고 21일 기한 · 정리해고 · 임금체불 · 482 스폰서 교차) 양방향 내비게이터 | 법무법인 박앤코 (Park & Co Lawyers)",
    brandTag: "호주 고용법 · 스폰서 비자 내비게이터",
    navM1: "21일 기한",
    navM2: "정리해고·보상금",
    navM3: "위장도급·체불",
    navM4: "비자×노동법",
    navM5Hub: "고용법 48문 48답",
    ecoEmpFaqLink: "고용법 FAQ",
    ecoFaqLink: "이민 FAQ",
    ecoSvcConsult: "공식 문의 허브",
    btnPrint: "인쇄",
    urgentBadge: "FWC 21일 법정 신청기한:",
    urgentText: "부당해고(s 394)·일반보호(s 365)·플랫폼 계정정지(s 536LU)는 해고 효력일 다음 날부터 21 역일 이내 접수 필수 (주말·주별 공휴일 마감 시 s 36(2) 익영업일 연장 · 기한 도과 시 예외적 사정 심사)",
    heroEyebrow: "FAIR WORK ACT 2009 (CTH) · FAIR WORK COMMISSION · MIGRATION ACT CROSSOVER",
    heroTitle: "호주 고용법 & 스폰서 비자 교차 진단 내비게이터",
    heroLead: "공정근로위원회(FWC) 해고 후 21일 기한(주별 공휴일 반영), 정리해고·26주 보상금(상한 $95,050), 위장도급·임금체불 및 비자 체류권 보호를 즉시 점검합니다.",
    modeEmployeeBtn: "근로자 · 비자 소지자 모드",
    modeEmployerBtn: "고용주 · 인사담당자 모드",
    btnDemoSample: "예시 데이터 넣어보기",
    modeEmployeeDesc: "근로자·비자 소지자 기준 안내: 해고 후 21일 마감일과 미지급 수당·보상금 및 스폰서·임시비자 체류 보호 절차를 중심으로 계산합니다.",
    modeEmployerDesc: "고용주·인사담당자 기준 안내: 해고 통보 전 재배치·협의 의무(s 389)와 26주 보상금 위험, ABN 도급(s 15AA)·임금체불(s 327A) 점검 및 스폰서 28일 통보 의무(s 140H)를 중심으로 점검합니다.",
    m1Title: "1. 해고 후 21일 마감일 & FWC 청구 경로 진단",
    m1Desc: "해고 효력 발생일과 근무지 주(State)를 선택하면 보수적 안전 접수 권고일과 주별 공휴일 연장(Acts Interpretation Act 1901 s 36(2))을 반영한 법정 최종 마감일을 나란히 계산합니다.",
    m1FormHeading: "해고 · 사직 압박 · 계정 정지 사실관계 입력",
    lblDismissalDate: "해고 효력 발생일 (최종 근무일 · Day 0)",
    lblEmpState: "근무지 주/준주 (공휴일 연장 기준)",
    optStateQLD: "QLD (퀸즐랜드)",
    optStateNSW: "NSW (뉴사우스웨일스)",
    optStateVIC: "VIC (빅토리아)",
    optStateWA: "WA (서호주)",
    optStateSA: "SA (남호주)",
    optStateTAS: "TAS (태즈메이니아)",
    optStateACT: "ACT (캔버라)",
    optStateNT: "NT (노던준주)",
    ayubHelperSummary: "해고 효력 발생일(Day 0) 판정 도우미 · 구두·서면 도달일·통지기간 구분 (Ayub [2016] FWCFB 5500)",
    lblAyubMode: "해고 통지 및 종료 방식",
    optAyubOral: "(a) 구두 해고 통보일 (대면·유선 즉시 해고 고지일)",
    optAyubWritten: "(b) 서면·이메일·문자 통지 실제 도달·확인일 (Ayub 원칙)",
    optAyubNotice: "(c) 통지기간 만료일(마지막 근무일) vs 즉시 해고수당(Payment in Lieu) 지급일",
    lblAyubNoticeSub: "통지기간(Notice) 처리 방식",
    optAyubWorkingOut: "통지기간을 실제로 근무 후 퇴사 (마지막 근무일이 Day 0)",
    optAyubPil: "예고수당(Payment in Lieu) 지급 조건 즉시 해고 (즉시 종료 통지 도달일이 Day 0)",
    lblAyubStatedDate: "문서 기재 해고일 / 통보 발송일",
    lblAyubActualDate: "실제 도달·열람일 또는 마지막 근무일",
    btnAyubApply: "산출된 Day 0 효력일을 해고일에 자동 반영",
    lblBizSize: "사업장 규모 (해고 시점 총 근로자 수 · 계열사 합산, s 23)",
    optBizStandard: "일반 사업장 (15인 이상 · 최소 근속 6개월 적용)",
    optBizSmall: "소규모 사업장 (Small Business 15인 미만 · 최소 근속 12개월 적용)",
    lblServiceMonths: "총 근속 개월 수 / 플랫폼 정기 활동 개월 수 (s 383 · s 536LD)",
    lblSalaryBand: "연간 기본급 수준 (High Income Threshold $190,100 & Award 적용 여부)",
    optUnderHit: "고소득 기준선($190,100 · FY2026–27) 미만 또는 Modern Award / 기업협약(EA) 적용",
    optOverHit: "고소득 기준선($190,100) 이상 & Award/EA 미적용 임원·고액연봉자 (s 382(b) 제한)",
    lblDismissalType: "분쟁 및 해고 발생 유형",
    optTypeDirect: "회사의 일방적 해고 (능력·근태·징계 사유 · s 385 부당해고)",
    optTypeRedundancy: "구조조정·정리해고 통보 (재배치 미검토·대체 인력 채용 의심 · s 389)",
    optTypeAdverse: "임금·휴가·안전·괴롭힘 문제제기(Workplace Right 행사) 후 보복 해고 (s 340/s 365)",
    optTypeForced: "강제사직 / PIP 압박으로 사직서 제출 또는 제출 직전 (s 386(1)(b))",
    optTypePlatform: "우버·도어대시 등 디지털 플랫폼 계정 일방 비활성화 (s 536LU · s 536LD 6개월 요건)",
    m1ResultHeading: "보수적 안전 접수 권고일 & 법정 최종 마감일 병기 판정",
    m2Title: "2. 정리해고 적법성(s 389) · 해고예고(Full Pay) · 정리해고수당(Base Pay) & 26주 상한 계산기",
    m2Desc: "해고예고 갈음 수당(<strong>Full Pay Rate · s 117(2)(b)/s 18</strong>)과 NES 정리해고수당(<strong>Base Pay Rate · s 119(2)/s 16</strong>)을 분리 산출하며 부적법 정리해고(s 389) 시 적용되는 <strong>부당해고 법정 배상 상한(26주 · $95,050 · 실제 보장액 아님)</strong>을 독립 비교합니다.",
    m2FormHeading: "고용형태 · 연속 근속기간 · 기본급/예고기간 가산액 · 정리해고 요건 입력",
    lblRedEmpType: "고용 형태 및 법정 제외 사유 (ss 117(4), 123)",
    optRedEmpPerm: "정규직 풀타임 · 파트타임 (NES 해고예고 · 정리해고수당 대상)",
    optRedEmpCasual: "캐주얼 근로자 (Casual · s 123(1)(c) NES 해고예고 · 정리해고수당 제외)",
    optRedEmpFixed: "특정 기간·과업·계절 계약 만료 / 수습훈련생 (s 123(1)(a) 제외)",
    optRedEmpMisconduct: "중대 비위 즉시 해고 (Serious Misconduct · s 123(1)(b) 예고 제외)",
    lblRedBizSize: "사업장 규모 (s 121 소규모 사업장 15인 미만 면제 여부 · 독립 설정)",
    optRedBizStandard: "일반 사업장 (15인 이상 · s 119 NES 법정 정리해고수당 적용)",
    optRedBizSmall: "소규모 사업장 (15인 미만 · s 121 NES 정리해고수당 면제 · 해고예고수당 적용)",
    lblRedServiceMode: "연속 근속기간 입력 방식 (s 117(3) Notice vs s 119(2) Redundancy 경계 구분)",
    optRedModeYears: "연속 근속연수 선택 또는 소수점 직접 입력 (정각 1·2·3·5년 경계 지원)",
    optRedModeDates: "입사일 ~ 해고통보/종료일 달력 계산 (윤년 반영 역년 Anniversary 기준)",
    lblRedYears: "연속 근속연수 구간 / 정각 경계 선택",
    optYrPrompt: "-- 연속 근속기간 선택 (또는 우측에 연수 입력) --",
    optYr0: "1년 미만 (예: 0.5년 · Notice 1주 / Redundancy 0주)",
    optYrExact1: "정확히 1년 정각 (1.00년 · s 117 Notice 1주 / s 119 Redundancy 4주)",
    optYr1: "1년 초과 ~ 2년 미만 (예: 1.5년 · Notice 2주 / Redundancy 4주)",
    optYrExact2: "정확히 2년 정각 (2.00년 · Notice 2주[45세 초과 시 +1주] / Redundancy 6주)",
    optYr2: "2년 초과 ~ 3년 미만 (예: 2.5년 · Notice 2주 / Redundancy 6주)",
    optYrExact3: "정확히 3년 정각 (3.00년 · s 117 Notice 2주 / s 119 Redundancy 7주)",
    optYr3: "3년 초과 ~ 4년 미만 (예: 3.5년 · Notice 3주 / Redundancy 7주)",
    optYr4: "4년 이상 ~ 5년 미만 (예: 4.5년 · Notice 3주 / Redundancy 8주)",
    optYrExact5: "정확히 5년 정각 (5.00년 · s 117 Notice 3주 / s 119 Redundancy 10주)",
    optYr5: "5년 초과 ~ 6년 미만 (예: 5.5년 · Notice 4주 / Redundancy 10주)",
    optYr6: "6년 이상 ~ 7년 미만 (Notice 4주 / Redundancy 11주)",
    optYr7: "7년 이상 ~ 8년 미만 (Notice 4주 / Redundancy 13주)",
    optYr8: "8년 이상 ~ 9년 미만 (Notice 4주 / Redundancy 14주)",
    optYr9: "9년 이상 ~ 10년 미만 (Notice 4주 / Redundancy 16주)",
    optYr10: "10년 이상 (Notice 4주 / Redundancy 12주 · 장기근속 공제 반영)",
    lblRedExactYears: "정확한 연속 근속연수 직접 입력 (Years · 소수점 지원)",
    lblRedStartDate: "근무 시작일 (Start Date)",
    lblRedEndDate: "해고예고 통지일 / 종료일 (Notice / End Date)",
    hintRedDates: "달력 입사기념일(Calendar Anniversary) 기준으로 윤년(366일) 오차 없이 만 근속연수와 초과 일수를 계산합니다 (무급휴직·무단결근 제외 기간은 s 22에 따라 별도 공제 필요).",
    lblRedWeeklyPay: "통상 주당 기본급 (Base Pay Rate, AUD $ · s 16 / s 119 정리해고 기준)",
    hintRedWeeklyPay: "통상 근로시간 기본급만 입력 (수당·로딩·페널티·보너스 제외 · 이중 합산 방지)",
    lblRedNoticeAdditions: "예고기간 주당 정기 수당·로딩·보너스 가산액 (Notice Additions, AUD $ · s 18)",
    hintRedNoticeAdditions: "해고예고수당(s 117(2)(b) Full Pay = 기본급 + 가산액)에만 합산되며 정리해고수당에는 미포함",
    lblRedUdRemun: "[선택] 부당해고 법정 상한(s 392 · 26주) 산정용 주당 보수 (미입력 시 Full Pay 자동 적용)",
    lblRedAge45: "근로자 연령 구분 (만 45세 초과 & 2년 이상 근속 시 해고예고 +1주, s 117(3)(b))",
    optAgeUnder45: "만 45세 이하 (만 45세 정각 포함 · 추가 Notice 없음)",
    optAgeOver45: "만 45세 초과 (만 46세 이상 · 2년 이상 근속 시 +1주 가산)",
    lblRedAgeYears: "[선택] 만 나이 직접 입력 (45 입력 시 이하 · 46 이상 입력 시 초과)",
    lblRedRedeploy: "s 389 진정한 정리해고(Genuine Redundancy) 절차 준수 여부",
    optRedFailed: "결함 있음: 사내·계열사 빈자리 재배치(Redeployment) 미제안 또는 사전 협의 누락",
    optRedOk: "완벽 준수: 직무 실제 소멸 + Award 서면 협의 + 재배치 불가 입증 완료",
    m2ResultHeading: "NES 해고예고(Full Pay) · 정리해고수당(Base Pay) & 부당해고 법정 상한(26주)",
    m3Title: "3. 사업주 노무 컴플라이언스 & 위장도급 · 임금체불 점검",
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
    m4Title: "4. 스폰서 비자(482·186·494) & 임시비자(485·500·WHM) 노동법 교차 보호",
    m4Desc: "스폰서 비자 소지자의 <strong>180일(통산 365일) 이직 유예(Condition 8607/8608)</strong>와 임시비자 소지자의 근로 조건 및 <strong>직장정의 비자(Subclass 408)</strong> 체류 보호를 구분해 안내합니다.",
    m4FormHeading: "비자 종류 · 고용 종료 후 경과일 · 분쟁 상황 입력",
    lblCrossVisa: "소지(또는 스폰서 중인) 비자 서브클래스",
    optV482: "Subclass 482 (SID / TSS · Condition 8607 적용)",
    optV494: "Subclass 494 (SESR 지방 스폰서 · Condition 8608 적용)",
    optV186: "Subclass 186 (ENS TRT/DE 심사 대기 중 해고·퇴사)",
    optVTemp: "졸업생(485)·학생(500)·워킹홀리데이(417·462) 임시비자 근로자",
    lblCrossDays: "스폰서 고용 종료(최종 근무일) 이후 경과 일수 (Days Since Cessation)",
    lblCrossIssue: "핵심 교차 쟁점",
    optCrossUnfair: "부당해고 다툼(FWC)과 신규 스폰서 이직 노미네이션(186 TRT 경력 합산) 동시 진행",
    optCrossExploit: "임금체불·스폰서 비용 갈취(Cashback)·괴롭힘 피해 신고 및 408 Workplace Justice 비자 신청",
    optCrossEmployer: "고용주 입장에서 스폰서 근로자 적법 해고 · 28일 이민성 통보 · SAF 환불 검토",
    m4ResultHeading: "이민법 × 노동법 동시 보호 및 컴플라이언스 로드맵",
    xCalloutEyebrow: "PARK & CO VISA SOLUTION GUIDE · POST-DISMISSAL ALTERNATIVE VISA & OCCUPATION SEARCH",
    xCalloutTitle: "퇴사·해고 후 전환 가능한 대체 비자 또는 내 직종 스폰서 요건을 찾고 계십니까?",
    xCalloutDesc: "새 스폰서 노미네이션 전 직종 리스트(CSOL/MLTSSL) 적격성을 확인하거나 <strong>독립기술이민(189/190/491) · DAMA · 파트너 비자 등 대체 체류 경로</strong>를 진단하려면 박앤코 종합 비자 솔루션 가이드와 실무 FAQ를 확인하시기 바랍니다.",
    xBtnDiagnose: "퇴사·해고 후 대체 비자 6단계 진단 →",
    xBtnSol: "내 직종 스폰서 요건 검색 →",
    xBtnEmpFaq: "고용법 대표 실무 FAQ ↗",
    xBtnFaq: "482·고용 교차 실무 FAQ ↗",
    abfCrossTitle: "실시간 ABF 스폰서 행정제재(1,850건 · 현행 125건) & 이주근로자 고용금지 사업주(s 245AYM) 교차 경보",
    abfCrossBtn: "스폰서 제재 등록부 전체 검색 →",
    ctaHeading: "법무법인 박앤코 고용법 · 스폰서십 전담팀 상담 브리프 전송",
    ctaOfficialEmailLbl: "공식 이메일:",
    ctaOfficialHubLbl: "공식 문의 허브:",
    btnSendEmail: "진단 브리프 복사 & 공식 상담 신청 →",
    btnCopyBrief: "진단 브리프 복사",
    ctaBtnEmergency: "비자응급실 무료 통지서 진단 →",
    ctaBtnArt: "무료 행정재심기구(ART) Case Review™ →",
    disclosureBgTitle: "배경 통계 · 21일 법정 타임라인 · 주요 공정근로위원회(FWC) 선례 및 전담 변호사 안내 펼쳐보기",
    statLabelDeadline: "FWC 해고 불복 기한",
    statValDeadline: "21일",
    statSubDeadline: "ss 394 · 366 · 536LU (법정 기한)",
    statLabelCap: "부당해고 보상 한도",
    statValCap: "26주 / $95,050",
    statSubCap: "s 392(5) · 고소득 기준 $190,100",
    statLabelRedundancy: "NES 정리해고수당",
    statValRedundancy: "최대 16주",
    statSubRedundancy: "s 119 (해고예고 최대 5주 별도)",
    statLabelWageTheft: "고의 임금체불 처벌",
    statValWageTheft: "징역 10년",
    statSubWageTheft: "s 327A (또는 3배 벌금)",
    statLabelFwc: "FWC 법정 접수 수수료",
    statSubFwc: "Form F2 · F8 · F89 (reg 3.07)",
    svgEmpD0Title: "Day 0: 해고 효력 발생일",
    svgEmpD0Sub: "통보·최종 근무일 (s 386)",
    svgEmpD1Title: "Day 1~14: 증거 확보·법리 선택",
    svgEmpD1Sub: "s 394(부당해고) vs s 365(일반보호) 선택",
    svgEmpD21Title: "Day 21: FWC 엄격 법정 마감일",
    svgEmpD21Sub: "주말·공휴일 시 익영업일 연장 (s 36(2))",
    svgEmpD22Title: "Day 22+: 원칙적 각하 구간",
    svgEmpD22Sub: "s 394(3)/s 366(2) 예외적 사정 연장 심사",
    m5Title: "주요 공정근로위원회(FWC) 선례 기준",
    m5Desc: "공정근로법(Fair Work Act 2009)과 FWC 주요 판단 기준을 살펴본 뒤 위 진단 요약을 공식 문의 허브로 접수하실 수 있습니다.",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole1: "Legal Practitioner Director · Acc. Spec. (Immi)",
    specName2: "박기성 변호사 (Kevin Park)",
    specRole2: "Associate · Employment Law",
    specMeta: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD)<br/>이메일: <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:var(--pk-brand);font-weight:700;\">enquiry@parkcolawyers.com</a> · 상담 허브: <a href=\"https://parklawyers.com.au/links/?lang=ko\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--pk-brand);font-weight:700;\">parklawyers.com.au/links</a>",
    pollerTitle: "1차 출처 스냅샷 무결성 확인 · 공정근로법령 · FWC · 국경수비대(ABF) SHA-256 폴링 매트릭스",
    pollerDesc: "연방 법령 원문(<code>legislation.gov.au</code>), 공정근로위원회 고소득 기준선·접수 수수료·심사 안내(<code>fwc.gov.au</code>) 및 국경수비대(ABF) 스폰서 제재 API의 응답 가용성과 스냅샷 SHA-256 해시 무결성을 점검합니다 (해시 표시는 원문 스냅샷 동일성 확인용이며 개별 사건에 대한 법률 해석·자문 보증이 아닙니다).",
    thPollerSource: "1차 출처 및 검증 대상",
    thPollerCitation: "근거 조문 · 엔드포인트",
    thPollerFigures: "실시간 추출 핵심 수치",
    thPollerHash: "SHA-256 해시 · 용량",
    thPollerStatus: "폴링 검증 상태",
    footerFirmName: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)",
    footerNotice: "이 내비게이터는 호주 공정근로법(Fair Work Act 2009)과 이민법 원문을 바탕으로 일반 법률 정보를 안내하며 정식 수임 계약 전 개별 법률 자문(Legal Advice)을 대신하지 않습니다. 해고 후 21일 기한(ss 394, 366, 536LU)은 엄격한 법정 신청기한(주말·공휴일 익영업일 연장 및 s 394(3)·s 366(2) 예외적 사정 연장 심사 대상)이므로 지체 없이 박창민 대표변호사(Acc. Spec. Immi) 및 박기성 변호사(Kevin Park · <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:#FDE68A;font-weight:700;\">enquiry@parkcolawyers.com</a> · <a href=\"https://parklawyers.com.au/links/?lang=ko\" target=\"_blank\" rel=\"noopener\" style=\"color:#FDE68A;font-weight:700;\">parklawyers.com.au/links</a>)에게 문의하시기 바랍니다.",
    footerOfficialLabel: "공식 문의:",
    footerHubLink: "← 박앤코 법률·비자 통합 허브",
    ecoFamilyLink: "호주 가족법 · 연방순회·가족법원(FCFCOA) 판례",
    footerDiyLink: "25개 Modern Awards 체불임금 계산기 & FWC 서식 가이드",
    footerVisaGuideLink: "퇴사·해고 후 대체 비자 6단계 자동 진단",
    footerEmpFaqLink: "호주 고용법 공식 실무 FAQ (faq.immispecialist.com/employment)",
    footerFaqLink: "호주 이민·스폰서 실무 FAQ (faq.immispecialist.com)",
    empHubBadge: "FAIR WORK ACT 2009 · 근로자×고용주 양방향 48문 48답 지식 허브",
    empHubTitle: "5. 호주 고용법 · FWC 48문항 실무 백과 (근로자 · 고용주 양방향 통합)",
    empHubDesc: "부당해고(s 394)·일반보호(s 365)·강제사직(s 386)·정리해고(s 389 / Helensburgh Coal [2025] HCA 29)·임금체불 형사처벌(s 327A)·스폰서 비자 교차 쟁점 48개 실무 문답을 검색하고 공식 FAQ 전문으로 바로 연결할 수 있습니다.",
    empHubCatAll: "전체 카테고리 (48문항)",
    empHubCatDismissal: "해고 · 일반보호 · FWC 절차",
    empHubCatWages: "임금 · 수당 · 연금 · 휴가",
    empHubCatContract: "계약 · 수습 · 위장도급(ABN)",
    empHubCatSafety: "괴롭힘 · 산재 · 정당한 지시",
    empHubCatVisa: "스폰서 비자 · 공정근로 교차"
  };

  var EN_TRANSLATIONS = {
    docTitle: "Australian Employment Law Navigator (21-Day FWC Limit, Redundancy, Compliance & Visa Crossover) | Park & Co Lawyers",
    brandTag: "Australian Employment Law & Sponsor Visa Navigator",
    navM1: "21-Day Limit",
    navM2: "Redundancy & Cap",
    navM3: "Contractor & Wage",
    navM4: "Visa × Fair Work",
    navM5Hub: "48-Q Knowledge Hub",
    ecoEmpFaqLink: "Employment FAQ",
    ecoFaqLink: "Immi FAQ",
    ecoSvcConsult: "Official Inquiry Hub",
    btnPrint: "Print",
    urgentBadge: "Strict 21-Day FWC Limit:",
    urgentText: "Unfair Dismissal (s 394), General Protections (s 365) & Platform Deactivation (s 536LU) must be lodged within 21 calendar days (rolling over on weekends/state holidays per s 36(2); extensions strictly limited to exceptional circumstances under s 394(3)/s 366(2)).",
    heroEyebrow: "FAIR WORK ACT 2009 (CTH) · FAIR WORK COMMISSION · MIGRATION ACT CROSSOVER",
    heroTitle: "Australian Employment Law & Sponsor Visa Navigator",
    heroLead: "Calculate your 21-day FWC deadline (with State public holiday rollover), redundancy & 26-week compensation cap ($95,050), workplace compliance risks, and visa protections.",
    modeEmployeeBtn: "Employee & Visa Worker Mode",
    modeEmployerBtn: "Employer & HR Mode",
    btnDemoSample: "Load Sample Data",
    modeEmployeeDesc: "Employee & Visa Worker View: Prioritising the 21-day FWC deadline, unpaid entitlements, and sponsored/temporary visa protections.",
    modeEmployerDesc: "Employer & HR View: Prioritising pre-termination s 389 redeployment/consultation checks, 26-week cap defence, s 15AA contractor audits, and 28-day Home Affairs sponsor notifications.",
    m1Title: "1. 21-Day FWC Deadline & Claim Pathway Router",
    m1Desc: "Select your dismissal effective date and workplace State/Territory to compare the recommended safe filing date alongside the statutory final deadline under Acts Interpretation Act 1901 s 36(2).",
    m1FormHeading: "Enter Dismissal, Resignation Pressure or Deactivation Facts",
    lblDismissalDate: "Dismissal Effective Date (Final Day · Day 0)",
    lblEmpState: "Workplace State/Territory (Public Holiday Basis)",
    optStateQLD: "QLD (Queensland)",
    optStateNSW: "NSW (New South Wales)",
    optStateVIC: "VIC (Victoria)",
    optStateWA: "WA (Western Australia)",
    optStateSA: "SA (South Australia)",
    optStateTAS: "TAS (Tasmania)",
    optStateACT: "ACT (Australian Capital Territory)",
    optStateNT: "NT (Northern Territory)",
    ayubHelperSummary: "Dismissal Effective Date (Day 0) Helper · Oral, Written Receipt & Notice Rules (Ayub [2016] FWCFB 5500)",
    lblAyubMode: "How Dismissal Was Communicated",
    optAyubOral: "(a) Oral Dismissal (Immediate termination communicated in person/phone)",
    optAyubWritten: "(b) Written / Email / SMS Notice (Actual receipt & opportunity to read · Ayub rule)",
    optAyubNotice: "(c) Expiry of Notice Period (Last Day Worked) vs Payment in Lieu Immediate Termination",
    lblAyubNoticeSub: "Notice Period Arrangement",
    optAyubWorkingOut: "Worked out notice period (Final day of employment is Day 0)",
    optAyubPil: "Immediate termination with payment in lieu (Communication/receipt date is Day 0)",
    lblAyubStatedDate: "Employer Notice / Stated Termination Date",
    lblAyubActualDate: "Actual Receipt / Opportunity to Read Date (or Final Day Worked)",
    btnAyubApply: "Apply Computed Day 0 to Dismissal Date",
    lblBizSize: "Employer Size (Total Headcount incl. Associated Entities, s 23)",
    optBizStandard: "Non-Small Business (15+ employees · 6-month minimum employment period)",
    optBizSmall: "Small Business Employer (<15 employees · 12-month minimum employment period)",
    lblServiceMonths: "Months of Continuous Service / Regular Platform Engagement (s 383 · s 536LD)",
    lblSalaryBand: "Annual Base Salary vs High Income Threshold ($190,100 · FY2026–27)",
    optUnderHit: "Below High Income Threshold ($190,100) OR Covered by a Modern Award / Enterprise Agreement",
    optOverHit: "Above High Income Threshold ($190,100) AND Award/EA-Free Executive (s 382(b) bar applies)",
    lblDismissalType: "Nature of Dismissal or Workplace Dispute",
    optTypeDirect: "Direct Termination by Employer (Performance / Misconduct · s 385 Unfair Dismissal)",
    optTypeRedundancy: "Purported Redundancy (No redeployment offered / replacement hired · s 389)",
    optTypeAdverse: "Dismissed After Exercising a Workplace Right / Inquiry / Complaint (s 340 / s 365)",
    optTypeForced: "Forced Resignation / Constructive Dismissal / PIP Pressure (s 386(1)(b))",
    optTypePlatform: "Digital Platform (Uber/DoorDash) Account Deactivation (s 536LU · s 536LD 6m rule)",
    m1ResultHeading: "Side-by-Side Safe Filing Date & Statutory Final Deadline",
    m2Title: "2. Redundancy (s 389), Notice (Full Pay) vs Redundancy (Base Pay) & 26-Week Cap Calculator",
    m2Desc: "Separates Payment in Lieu of Notice (<strong>Full Pay Rate · s 117(2)(b)/s 18</strong>) from NES Redundancy Pay (<strong>Base Pay Rate · s 119(2)/s 16</strong>) and compares the independent <strong>26-week Unfair Dismissal statutory cap (s 392 · $95,050 ceiling, NOT a guaranteed payout)</strong>.",
    m2FormHeading: "Employment Type, Service Length, Base vs Notice Pay & s 389 Check",
    lblRedEmpType: "Employment Type & Statutory Exclusions (ss 117(4), 123)",
    optRedEmpPerm: "Permanent Full-Time / Part-Time (NES Notice s 117 & Redundancy s 119 Eligible)",
    optRedEmpCasual: "Casual Employee (Excluded from NES Notice & Redundancy per s 123(1)(c))",
    optRedEmpFixed: "Specified Period / Task / Seasonal Expiry or Trainee (Excluded per s 123(1)(a))",
    optRedEmpMisconduct: "Summary Dismissal for Serious Misconduct (No NES Notice per s 123(1)(b))",
    lblRedBizSize: "Employer Size for Redundancy Pay (s 121 Small Business <15 Employees Exemption · Independent Toggle)",
    optRedBizStandard: "Non-Small Business (15+ employees · s 119 NES Redundancy Pay applies)",
    optRedBizSmall: "Small Business Employer (<15 employees · s 121 NES Redundancy Pay exempt · Notice pay still applies)",
    lblRedServiceMode: "Continuous Service Input Mode (Separating s 117(3) Notice vs s 119(2) Redundancy Boundaries)",
    optRedModeYears: "Select Bracket or Enter Exact Continuous Service Years (Supports Exact 1, 2, 3, 5 Yr Boundaries)",
    optRedModeDates: "Exact Start Date & Notice/End Date (Calendar Anniversary Leap-Year Math)",
    lblRedYears: "Continuous Service Bracket / Exact Statutory Boundary",
    optYrPrompt: "-- Select Service Bracket (or type exact years on the right) --",
    optYr0: "Under 1 year (e.g. 0.5 yrs · Notice 1 wk / Redundancy 0 wks)",
    optYrExact1: "Exact 1 year (1.00 yr · s 117 Notice 1 wk / s 119 Redundancy 4 wks)",
    optYr1: "Over 1 to <2 years (e.g. 1.5 yrs · Notice 2 wks / Redundancy 4 wks)",
    optYrExact2: "Exact 2 years (2.00 yrs · Notice 2 wks [+1 wk if over 45] / Redundancy 6 wks)",
    optYr2: "Over 2 to <3 years (e.g. 2.5 yrs · Notice 2 wks / Redundancy 6 wks)",
    optYrExact3: "Exact 3 years (3.00 yrs · s 117 Notice 2 wks / s 119 Redundancy 7 wks)",
    optYr3: "Over 3 to <4 years (e.g. 3.5 yrs · Notice 3 wks / Redundancy 7 wks)",
    optYr4: "4 to <5 years (e.g. 4.5 yrs · Notice 3 wks / Redundancy 8 wks)",
    optYrExact5: "Exact 5 years (5.00 yrs · s 117 Notice 3 wks / s 119 Redundancy 10 wks)",
    optYr5: "Over 5 to <6 years (e.g. 5.5 yrs · Notice 4 wks / Redundancy 10 wks)",
    optYr6: "6 to <7 years (Notice 4 wks / Redundancy 11 wks)",
    optYr7: "7 to <8 years (Notice 4 wks / Redundancy 13 wks)",
    optYr8: "8 to <9 years (Notice 4 wks / Redundancy 14 wks)",
    optYr9: "9 to <10 years (Notice 4 wks / Redundancy 16 wks)",
    optYr10: "10+ years (Notice 4 wks / Redundancy 12 wks · LSL offset)",
    lblRedExactYears: "Exact Continuous Service Years (Supports Decimals)",
    lblRedStartDate: "Employment Start Date",
    lblRedEndDate: "Notice Given / Termination Date",
    hintRedDates: "Uses true calendar anniversaries (leap-year safe, never assuming 730 days = 2 years; deduct unpaid leave / unauthorised absence separately per s 22).",
    lblRedWeeklyPay: "Ordinary Weekly Base Pay Rate (AUD $ · s 16 / s 119 Redundancy Basis)",
    hintRedWeeklyPay: "Ordinary-hours base pay only (excluding allowances, loadings, penalties & bonuses to prevent double-counting)",
    lblRedNoticeAdditions: "Regular Weekly Notice-Period Additions (Allowances, Loadings, Penalties & Bonuses · AUD $ · s 18)",
    hintRedNoticeAdditions: "Included in Payment in Lieu of Notice (s 117(2)(b) Full Pay = Base + Additions); excluded from s 119 Redundancy",
    lblRedUdRemun: "[Optional] Weekly Remuneration for s 392 26-Week Unfair Dismissal Cap (Defaults to Full Pay if blank)",
    lblRedAge45: "Employee Age (+1 week notice ONLY if OVER 45 years old with at least 2 years service, s 117(3)(b))",
    optAgeUnder45: "45 years old or under (incl. exact age 45 · +0 wk extra notice)",
    optAgeOver45: "Over 45 years old (aged 46+ · +1 wk statutory notice if >=2 yrs service)",
    lblRedAgeYears: "[Optional] Exact Age in Completed Years (45 = 45 or under; 46+ = over 45)",
    lblRedRedeploy: "s 389 Genuine Redundancy Procedural Compliance",
    optRedFailed: "Defective: Failed to offer available redeployment or skipped mandatory Award consultation",
    optRedOk: "Compliant: Role genuinely no longer required + written consultation + no redeployment available",
    m2ResultHeading: "NES Notice (Full Pay) · Redundancy (Base Pay) & Independent 26-Week Cap",
    m3Title: "3. Employer Compliance, Sham Contracting & Wage Audit",
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
    m4Title: "4. Sponsored Visa (482·186·494) & Temporary Visa (485·500·WHM) Protections",
    m4Desc: "Distinguish sponsored visa <strong>180-day (365-day max) mobility rules (Condition 8607/8608)</strong> from non-sponsored temporary visa work conditions and the <strong>Subclass 408 Workplace Justice Visa</strong>.",
    m4FormHeading: "Select Visa Subclass, Days Since Cessation & Crossover Scenario",
    lblCrossVisa: "Visa Subclass Held / Sponsored",
    optV482: "Subclass 482 (SID / TSS · Condition 8607 applies)",
    optV494: "Subclass 494 (SESR Regional · Condition 8608 applies)",
    optV186: "Subclass 186 (ENS TRT/DE pending at dismissal)",
    optVTemp: "Temporary Graduate (485) / Student (500) / WHM (417·462) Worker",
    lblCrossDays: "Days Elapsed Since Sponsored Employment Cessation",
    lblCrossIssue: "Primary Crossover Issue",
    optCrossUnfair: "Pursuing FWC Unfair Dismissal while transferring sponsorship & preserving 186 TRT accrual",
    optCrossExploit: "Underpayment / illegal sponsorship cashback (s 245AR) & Subclass 408 Workplace Justice Visa",
    optCrossEmployer: "Employer lawfully terminating sponsored worker · 28-day Home Affairs notice & SAF check",
    m4ResultHeading: "Dual Migration Act × Fair Work Act Protection & Compliance Roadmap",
    xCalloutEyebrow: "PARK & CO VISA SOLUTION GUIDE · POST-DISMISSAL ALTERNATIVE VISA & OCCUPATION SEARCH",
    xCalloutTitle: "Searching for Alternative Visa Pathways or Occupation Sponsorship Rules After Dismissal?",
    xCalloutDesc: "Verify occupation list (CSOL/MLTSSL) eligibility before lodging a transfer nomination, or compare <strong>Independent Skilled (189/190/491), DAMA, and Partner Visa alternatives</strong> on the Park & Co Visa Solution Guide and Immigration FAQ Archive.",
    xBtnDiagnose: "Post-Dismissal Alternative Visa 6-Step Diagnostic →",
    xBtnSol: "Search Occupation Sponsorship Rules →",
    xBtnEmpFaq: "Employment Law Official FAQ ↗",
    xBtnFaq: "Subclass 482 & Workplace Crossover FAQ ↗",
    abfCrossTitle: "Live ABF Sponsor Sanctions (1,850 Records · 125 Active Bars) & Prohibited Employers (s 245AYM) Alert",
    abfCrossBtn: "Search Full Sponsor Sanctions Register →",
    ctaHeading: "Send Employment & Sponsorship Diagnostic Brief",
    ctaOfficialEmailLbl: "Official Email:",
    ctaOfficialHubLbl: "Official Inquiry Hub:",
    btnSendEmail: "Copy Brief & Open Official Inquiry →",
    btnCopyBrief: "Copy Brief to Clipboard",
    ctaBtnEmergency: "Free Visa Emergency Triage →",
    ctaBtnArt: "Free ART Case Review™ →",
    disclosureBgTitle: "Expand Statutory Metrics, 21-Day Timeline, FWC Authorities & Legal Team Profile",
    statLabelDeadline: "FWC Filing Limit",
    statValDeadline: "21 Days",
    statSubDeadline: "ss 394 · 366 · 536LU (Strict)",
    statLabelCap: "Unfair Dismissal Cap",
    statValCap: "26 Wks / $95,050",
    statSubCap: "s 392(5) · High Income $190,100",
    statLabelRedundancy: "NES Redundancy Pay",
    statValRedundancy: "Up to 16 Wks",
    statSubRedundancy: "s 119 (+ up to 5 wks notice)",
    statLabelWageTheft: "Criminal Wage Theft",
    statValWageTheft: "10 Yrs Prison",
    statSubWageTheft: "s 327A (or 3x underpayment fine)",
    statLabelFwc: "FWC Filing Fee",
    statSubFwc: "Form F2 · F8 · F89 (reg 3.07)",
    svgEmpD0Title: "Day 0: Dismissal Takes Effect",
    svgEmpD0Sub: "Final Day of Employment (s 386)",
    svgEmpD1Title: "Days 1–14: Evidence & Forum Choice",
    svgEmpD1Sub: "Choose s 394 (Unfair) vs s 365 (GP)",
    svgEmpD21Title: "Day 21: Strict FWC Statutory Limit",
    svgEmpD21Sub: "s 36(2) Next Business Day Rollover",
    svgEmpD22Title: "Day 22+: Out of Time (Barred)",
    svgEmpD22Sub: "s 394(3)/s 366(2) Exceptional Circumstances",
    m5Title: "Key Fair Work Commission (FWC) Authorities",
    m5Desc: "Review key Fair Work Act 2009 and FWC legal principles and submit your diagnostic summary via the Official Inquiry Hub.",
    specName: "Chang Min Park (Legal Practitioner Director)",
    specRole1: "Legal Practitioner Director · Acc. Spec. (Immi)",
    specName2: "Kevin Park (Associate)",
    specRole2: "Associate · Employment Law",
    specMeta: "Park & Co Lawyers (Underwood QLD)<br/>Email: <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:var(--pk-brand);font-weight:700;\">enquiry@parkcolawyers.com</a> · Inquiry Hub: <a href=\"https://parklawyers.com.au/links/\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--pk-brand);font-weight:700;\">parklawyers.com.au/links</a>",
    pollerTitle: "Primary-Source Snapshot Integrity · Fair Work Legislation, FWC Threshold & ABF SHA-256 Matrix",
    pollerDesc: "Automated snapshot polling of Commonwealth legislation (<code>legislation.gov.au</code>), Fair Work Commission thresholds, filing fees & guidance (<code>fwc.gov.au</code>), and the ABF Sanctioned Sponsors API with SHA-256 content hashes (hash badges verify source snapshot integrity & HTTP availability, not automated legal advice for individual matters).",
    thPollerSource: "Primary Source & Target",
    thPollerCitation: "Statutory Provision / Endpoint",
    thPollerFigures: "Live Extracted Figures",
    thPollerHash: "SHA-256 Content Hash · Size",
    thPollerStatus: "Verification Status",
    footerFirmName: "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    footerNotice: "This navigator provides general legal information based on primary Australian legislation (Fair Work Act 2009 & Migration Act 1958) and does not constitute formal legal advice prior to a signed retainer. Because the 21-day FWC deadline (ss 394, 366, 536LU; subject only to s 36(2) holiday rollover and strict s 394(3)/s 366(2) exceptional circumstances review) is strictly enforced, contact Legal Practitioner Director Chang Min Park (Acc. Spec. Immi) & Kevin Park (Associate · <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:#FDE68A;font-weight:700;\">enquiry@parkcolawyers.com</a> · <a href=\"https://parklawyers.com.au/links/\" target=\"_blank\" rel=\"noopener\" style=\"color:#FDE68A;font-weight:700;\">parklawyers.com.au/links</a>) immediately.",
    footerOfficialLabel: "Official Inquiry:",
    footerHubLink: "← Park & Co Legal & Visa Hub",
    ecoFamilyLink: "Australian Family Law · FCFCOA Property Precedents",
    footerDiyLink: "25 Modern Awards Unpaid-Wage Calculator & FWC Forms Guide",
    footerVisaGuideLink: "Post-Dismissal Alternative Visa 6-Step Diagnostic",
    footerEmpFaqLink: "Australian Employment Law Official FAQ (faq.immispecialist.com/employment)",
    footerFaqLink: "Australian Immigration & Sponsor FAQ (faq.immispecialist.com)",
    empHubBadge: "FAIR WORK ACT 2009 · 48-QUESTION DUAL-PERSPECTIVE KNOWLEDGE HUB",
    empHubTitle: "5. Australian Employment Law & FWC 48-Question Knowledge Hub (Employee & Employer Views)",
    empHubDesc: "Search 48 primary-source Q&As covering Unfair Dismissal (s 394), General Protections (s 365), Forced Resignation (s 386), Redundancy (s 389 / Helensburgh Coal [2025] HCA 29), Criminal Wage Underpayment (s 327A), and Sponsored Visa Crossover.",
    empHubCatAll: "All Categories (48 Q&As)",
    empHubCatDismissal: "Dismissal, General Protections & FWC",
    empHubCatWages: "Wages, Penalty Rates, Super & Leave",
    empHubCatContract: "Contracts, Probation & ABN Sham Contracting",
    empHubCatSafety: "Bullying, WHS & Lawful Directions",
    empHubCatVisa: "Sponsored Visas & Fair Work Crossover"
  };

  function initDefaultDate() {
    var today = ParkCoDates.todayBrisbaneIso();
    var dInput = document.getElementById("emp-dismissal-date");
    if (dInput && !dInput.value) {
      dInput.value = today;
    }
    var ayubStated = document.getElementById("ayub-stated-date");
    var ayubActual = document.getElementById("ayub-actual-date");
    if (ayubStated && !ayubStated.value) ayubStated.value = today;
    if (ayubActual && !ayubActual.value) ayubActual.value = today;
  }

  function computeAyubEffectiveDate(mode, statedIso, actualIso, noticeSub) {
    var m = (mode || "written").toLowerCase();
    var sub = (noticeSub || "working_out").toLowerCase();
    var pStated = ParkCoDates.parseIsoLocal(statedIso);
    var pActual = ParkCoDates.parseIsoLocal(actualIso);
    var sIso = pStated ? ParkCoDates.formatIsoLocal(pStated) : "";
    var aIso = pActual ? ParkCoDates.formatIsoLocal(pActual) : "";
    var effectiveIso = "";
    var explainKo = "";
    var explainEn = "";

    if (m === "oral") {
      effectiveIso = sIso || aIso;
      explainKo = "구두 즉시 해고: 대면·유선으로 해고 의사가 명확히 전달된 날(" + (effectiveIso || "-") + ")이 법정 Day 0 효력 발생일입니다 (s 386).";
      explainEn = "Oral Dismissal: Day 0 is the date immediate termination was clearly communicated (" + (effectiveIso || "-") + ") under s 386.";
    } else if (m === "notice") {
      if (sub === "payment_in_lieu") {
        if (sIso && aIso) {
          effectiveIso = aIso > sIso ? aIso : sIso;
        } else {
          effectiveIso = aIso || sIso;
        }
        explainKo = "예고수당(Payment in Lieu) 지급 즉시 해고: 예고기간 만료일이 아니라 즉시 종료 통지가 도달·확인된 날(" + (effectiveIso || "-") + ")부터 바로 21일 기한이 진행됩니다 (Ayub [2016] FWCFB 5500).";
        explainEn = "Payment in Lieu Immediate Termination: Day 0 is when immediate termination was communicated/received (" + (effectiveIso || "-") + "), NOT the notional end of the notice period (Ayub [2016] FWCFB 5500).";
      } else {
        effectiveIso = aIso || sIso;
        explainKo = "통지기간(Notice Period) 실제 근무: 사전 해고예고를 받았더라도 실제 고용관계가 종료되는 마지막 근무일(" + (effectiveIso || "-") + ")이 법정 Day 0 효력 발생일입니다.";
        explainEn = "Working Out Notice: Day 0 is the expiry of the notice period / final day of employment (" + (effectiveIso || "-") + ").";
      }
    } else {
      /* Written / Email / SMS / Post · Ayub v NSW Trains [2016] FWCFB 5500 */
      if (sIso && aIso) {
        effectiveIso = aIso > sIso ? aIso : sIso;
      } else {
        effectiveIso = aIso || sIso;
      }
      var backdated = sIso && aIso && aIso > sIso;
      explainKo = backdated
        ? "Ayub 원칙 적용 ([2016] FWCFB 5500): 문서상 기재일(" + sIso + ")보다 근로자가 이메일·우편을 실제 수령·열람할 수 있었던 날(" + aIso + ")이 늦으므로 소급 효력이 부정되고 " + effectiveIso + "이 법정 Day 0가 됩니다."
        : "서면·이메일·문자 통지 (Ayub [2016] FWCFB 5500): 통지서 기재 종료일과 실제 도달·열람 가능일 중 늦은 날(" + (effectiveIso || "-") + ")이 법정 Day 0 효력 발생일입니다.";
      explainEn = backdated
        ? "Ayub Rule Applied ([2016] FWCFB 5500): Dismissal cannot take effect retrospectively before communication; because actual receipt/opportunity to read (" + aIso + ") was after stated date (" + sIso + "), Day 0 is " + effectiveIso + "."
        : "Written/Email/SMS Notice (Ayub [2016] FWCFB 5500): Day 0 is the later of the stated termination date and when received with a reasonable opportunity to read (" + (effectiveIso || "-") + ").";
    }

    return {
      effectiveDateIso: effectiveIso || null,
      mode: m,
      noticeSub: sub,
      explanationKo: explainKo,
      explanationEn: explainEn
    };
  }

  function renderAyubHelper() {
    var modeEl = document.getElementById("ayub-comm-mode");
    var subWrap = document.getElementById("ayub-notice-subtype-wrap");
    var subEl = document.getElementById("ayub-notice-subtype");
    var statedEl = document.getElementById("ayub-stated-date");
    var actualEl = document.getElementById("ayub-actual-date");
    var outEl = document.getElementById("ayub-helper-output");
    if (!modeEl || !outEl) return null;

    var mode = modeEl.value || "written";
    if (subWrap) {
      subWrap.style.display = mode === "notice" ? "" : "none";
    }
    var res = computeAyubEffectiveDate(
      mode,
      statedEl ? statedEl.value : "",
      actualEl ? actualEl.value : "",
      subEl ? subEl.value : "working_out"
    );
    var day0Badge = res.effectiveDateIso
      ? '<div style="font-weight:800;color:var(--pk-brand);margin-bottom:3px;">' +
          (currentLang === "ko" ? "산출된 법정 Day 0 효력일: " : "Computed Statutory Day 0: ") +
          '<code>' + res.effectiveDateIso + '</code></div>'
      : '';
    outEl.innerHTML = day0Badge + '<div>' + (currentLang === "ko" ? res.explanationKo : res.explanationEn) + '</div>';
    return res;
  }

  function formatIcsDateCompact(isoStr) {
    return String(isoStr || "").replace(/-/g, "");
  }

  function nextDayCompact(isoStr) {
    var d = ParkCoDates.parseIsoLocal(isoStr);
    if (!d) return formatIcsDateCompact(isoStr);
    return formatIcsDateCompact(ParkCoDates.formatIsoLocal(ParkCoDates.addCalendarDays(d, 1)));
  }

  function escapeIcsText(str) {
    return String(str || "")
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\r?\n/g, "\\n");
  }

  function buildDeadlineIcs(d1, lang) {
    if (!d1 || !d1.safeIso || !d1.deadlineIso) return "";
    var isEn = (lang || currentLang) === "en";
    var dtStamp = "20261028T000000Z";
    try {
      dtStamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z");
    } catch (_) {}
    var safeStart = formatIcsDateCompact(d1.safeIso);
    var safeEnd = nextDayCompact(d1.safeIso);
    var statStart = formatIcsDateCompact(d1.deadlineIso);
    var statEnd = nextDayCompact(d1.deadlineIso);
    var st = d1.stateCode || "QLD";

    var safeSummary = isEn
      ? "[Park & Co] Recommended Safe FWC Filing Target (" + st + ")"
      : "[박앤코] FWC 21일 기한 보수적 안전 접수 권고일 (" + st + ")";
    var safeDesc = isEn
      ? "Recommended safe filing target ahead of your strict 21-day Fair Work Commission deadline (" + d1.deadlineIso + "). Contact: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/"
      : "공정근로위원회(FWC) 21일 법정 최종 마감일(" + d1.deadlineIso + ") 전 전산 지연 대비 안전 접수 권고일입니다. 공식 문의: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=ko";

    var statSummary = isEn
      ? "[STRICT] 21-Day FWC Statutory Final Deadline (" + st + ")"
      : "[엄격기한] FWC 해고 후 21일 법정 최종 마감일 (" + st + ")";
    var statDesc = isEn
      ? "Strict 21-calendar-day Fair Work Commission filing limit (ss 394, 366, 536LU; Acts Interpretation Act 1901 s 36(2) rollover checked for " + st + "; extensions strictly limited to exceptional circumstances under s 394(3)/s 366(2)). Filing Fee: " + dynamicThresholds.feeFmt + ". Contact: enquiry@parkcolawyers.com"
      : "호주 공정근로법(ss 394, 366, 536LU · 예외적 사정 연장 심사 s 394(3)/s 366(2)) 및 Acts Interpretation Act 1901 s 36(2) " + st + " 공휴일 연장을 반영한 법정 최종 마감일입니다. 접수 수수료: " + dynamicThresholds.feeFmt + " | 문의: enquiry@parkcolawyers.com";

    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Park & Co Lawyers//Australian Employment Law Navigator//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:parkco-emp-safe-" + safeStart + "-" + st + "@parkcolawyers.com",
      "DTSTAMP:" + dtStamp,
      "DTSTART;VALUE=DATE:" + safeStart,
      "DTEND;VALUE=DATE:" + safeEnd,
      "SUMMARY:" + escapeIcsText(safeSummary),
      "DESCRIPTION:" + escapeIcsText(safeDesc),
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapeIcsText(safeSummary),
      "TRIGGER:-PT48H",
      "END:VALARM",
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapeIcsText(safeSummary),
      "TRIGGER:-PT24H",
      "END:VALARM",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:parkco-emp-statutory-" + statStart + "-" + st + "@parkcolawyers.com",
      "DTSTAMP:" + dtStamp,
      "DTSTART;VALUE=DATE:" + statStart,
      "DTEND;VALUE=DATE:" + statEnd,
      "SUMMARY:" + escapeIcsText(statSummary),
      "DESCRIPTION:" + escapeIcsText(statDesc),
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapeIcsText(statSummary),
      "TRIGGER:-PT48H",
      "END:VALARM",
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapeIcsText(statSummary),
      "TRIGGER:-PT24H",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ];
    return lines.join("\r\n") + "\r\n";
  }

  function renderNeutralPromptHtml(msgKo, msgEn) {
    var txt = currentLang === "ko" ? msgKo : msgEn;
    var btnLbl = currentLang === "ko" ? "예시 데이터 넣어보기" : "Load Sample Data";
    return (
      '<div class="pk-empty-prompt">' +
        '<p style="margin:0 0 8px;">' + txt + '</p>' +
        '<button type="button" class="pk-btn-cta emp-demo-trigger">' + btnLbl + '</button>' +
      '</div>'
    );
  }

  var lastComputedDeadline = null;

  function calcDeadlineRouter() {
    var out = document.getElementById("emp-deadline-output");
    if (!hasInteracted) {
      if (out) {
        out.innerHTML = renderNeutralPromptHtml(
          "좌측에서 해고 효력 발생일과 근무지 주(State)를 선택하면 주별 공휴일 연장을 반영한 안전 접수 권고일과 법정 최종 마감일이 산출됩니다.",
          "Select your dismissal effective date and workplace State/Territory on the left to calculate your safe filing date and statutory final deadline."
        );
      }
      return null;
    }

    var dateStr = ((document.getElementById("emp-dismissal-date") || {}).value || "").trim();
    var stateCode = ((document.getElementById("emp-state") || {}).value || "QLD").toUpperCase();
    var bizSize = (document.getElementById("emp-business-size") || {}).value || "standard";
    var monthsRaw = (document.getElementById("emp-service-months") || {}).value;
    var months = monthsRaw === "" || monthsRaw === undefined ? NaN : parseFloat(monthsRaw);
    var salaryBand = (document.getElementById("emp-salary-band") || {}).value || "under_hit";
    var dType = (document.getElementById("emp-dismissal-type") || {}).value || "direct_unfair";

    var calc = ParkCoDates.calcCalendarDaysDeadline(dateStr, 21, stateCode, true);
    if (!calc) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "유효한 해고 효력 발생일(YYYY-MM-DD)을 입력해 주십시오."
              : "Please enter a valid dismissal effective date (YYYY-MM-DD).") +
          '</div>';
      }
      return null;
    }

    if (isNaN(months) || months < 0) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "총 근속 개월 수는 0 이상의 숫자로 입력해 주십시오."
              : "Months of continuous service must be 0 or greater.") +
          '</div>';
      }
      return null;
    }

    var diffDays = ParkCoDates.diffDaysFromTodayBrisbane(calc.statutoryDate);
    var minMonths = bizSize === "small" ? 12 : 6;
    var serviceOk = months >= minMonths;
    var hitOk = salaryBand === "under_hit";
    var udEligible = serviceOk && hitOk && dType !== "platform_deactivation";
    var s536ldEligible = dType === "platform_deactivation" ? (months >= 6) : null;

    var badgeColor = diffDays < 0 ? "#9E2A2B" : (diffDays <= 7 ? "#946200" : "#0E3A3E");
    var statusTextKo = diffDays < 0
      ? "🚨 21일 법정 기한 경과 (" + Math.abs(diffDays) + "일 지남) · 예외적 사정(s 394(3)/s 366(2)) 소명 또는 일반 민사·체불 청구 즉시 검토 필요"
      : "⏰ FWC 법정 마감까지 " + diffDays + "일 남음 (" + stateCode + " 기준 · 접수 수수료 " + dynamicThresholds.feeFmt + ")";
    var statusTextEn = diffDays < 0
      ? "🚨 21-Day Statutory Limit Expired (" + Math.abs(diffDays) + " days overdue) · Urgent s 394(3)/s 366(2) Exceptional Circumstances or contractual review required"
      : "⏰ " + diffDays + " day(s) remaining until FWC statutory deadline (" + stateCode + " · Filing Fee " + dynamicThresholds.feeFmt + ")";

    var rolloverNoteKo = calc.rolledReason
      ? "원 21역일 만료일(" + calc.rawDate + ")이 " + calc.rolledReason + "에 해당하여 Acts Interpretation Act 1901 s 36(2)에 따라 다음 영업일로 연장됨"
      : "해고일(" + dateStr + ") 다음 날부터 21 역일 기산 (" + stateCode + " 주말·공휴일 비중복)";
    var rolloverNoteEn = calc.rolledReason
      ? "Raw 21st day (" + calc.rawDate + ") fell on " + calc.rolledReason + "; rolled to next business day under Acts Interpretation Act 1901 s 36(2)"
      : "21 calendar days from day after dismissal (" + dateStr + ") in " + stateCode;

    var dualCardsHtml =
      '<div class="pk-deadline-pair">' +
        '<div class="pk-deadline-box is-safe">' +
          '<div class="pk-deadline-box__label">' + (currentLang === "ko" ? "보수적 안전 접수 권고일" : "Recommended Safe Filing Date") + '</div>' +
          '<div class="pk-deadline-box__date">' + calc.safeDate + '</div>' +
          '<div class="pk-deadline-box__note">' + (currentLang === "ko" ? "주말·공휴일을 제외한 직전 영업일 안전 접수 권장" : "Preceding business day target to avoid portal/time-zone risk") + '</div>' +
        '</div>' +
        '<div class="pk-deadline-box is-statutory">' +
          '<div class="pk-deadline-box__label">' + (currentLang === "ko" ? "법정 최종 마감일 (주별 공휴일 연장 반영)" : "Statutory Final Deadline (" + stateCode + " Holiday Rollover)") + '</div>' +
          '<div class="pk-deadline-box__date">' + calc.statutoryDate + '</div>' +
          '<div class="pk-deadline-box__note">' + (currentLang === "ko" ? rolloverNoteKo : rolloverNoteEn) + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="margin-top:10px;display:flex;justify-content:flex-end;">' +
        '<button type="button" id="btn-emp-download-ics" class="pk-btn-ghost" style="font-size:12px;padding:6px 12px;font-weight:700;">' +
          (currentLang === "ko" ? "📅 21일 마감일 캘린더(.ics) 원클릭 저장 (48h·24h 알림)" : "📅 1-Click Download 21-Day Deadline (.ics Calendar)") +
        '</button>' +
      '</div>';

    var trackKo = "";
    var trackEn = "";
    if (dType === "platform_deactivation") {
      if (!s536ldEligible) {
        trackKo = '<div style="color:var(--pk-danger);margin-bottom:6px;"><strong>⚠️ s 536LD 최소 6개월 정기 활동 요건 미충족 (현재 ' + months + '개월):</strong></div>' +
          '공정근로법(Fair Work Act 2009) <code>s 536LD</code>에 따라 디지털 노동 플랫폼 부당 계정 비활성화 구제 신청(Form F89 · s 536LU)은 최소 <strong>6개월 이상 정기적으로 플랫폼 노무를 수행(performing work on a regular basis for at least 6 months)</strong>한 종사자에게만 허용됩니다. 다만 최소 활동 기간 제한이 없는 <strong>일반보호 불이익 조치·차별 금지 경로(General Protections · s 340 / s 351 · 21일 기한 엄수)</strong> 또는 불공정 계약 조건 구제(s 536JQ) 대상인지 즉시 검토하시기 바랍니다.';
        trackEn = '<div style="color:var(--pk-danger);margin-bottom:6px;"><strong>⚠️ s 536LD Minimum 6-Month Regular Engagement Not Yet Met (' + months + ' months):</strong></div>' +
          'Under Fair Work Act 2009 <code>s 536LD</code>, a digital labour platform worker must have performed work on a regular basis for a period of at least <strong>6 months</strong> to lodge a Form F89 Unfair Deactivation claim (s 536LU). Consider alternative <strong>General Protections / anti-discrimination pathways (ss 340, 351 · no minimum period, strict 21-day limit where applicable)</strong> or unfair contract terms (s 536JQ).';
      } else {
        trackKo = "<strong>권고 절차: 디지털 플랫폼 부당 계정 비활성화 구제 신청 (Form F89 · s 536LU · s 536LD 충족)</strong><br/>정기 활동 기간(" + months + "개월 · <code>s 536LD</code> 최소 6개월 요건 충족)을 만족하므로 계정 복구 명령을 청구할 수 있으나 정지일로부터 21일 안에 접수해야 합니다(<code>[2026] FWC 3921 Zhao</code>).";
        trackEn = "<strong>Recommended Track: Digital Platform Unfair Deactivation Application (Form F89 · s 536LU · s 536LD Met)</strong>: Regular engagement requirement (" + months + "m >= 6 months under <code>s 536LD</code>) is satisfied; file within the strict 21-day limit (<code>[2026] FWC 3921 Zhao</code>).";
      }
    } else if (dType === "adverse_action" || !udEligible) {
      trackKo = "<strong>권고 절차: 일반보호 해고 분쟁 신청 (General Protections Dismissal · Form F8 · s 365 / s 340)</strong><br/>최소 근속기간(" + minMonths + "개월) 미달이거나 고소득 기준선(" + dynamicThresholds.hitFmt + ")을 초과하더라도 임금·휴가·안전 문의 등 직장 내 권리(Workplace Right) 행사 후 해고되었다면 근속기간·연봉 상한 없이 신청할 수 있으며 입증책임도 고용주에게 전환(s 361)됩니다.";
      trackEn = "<strong>Recommended Track: General Protections Dismissal (Form F8 · s 365 / s 340)</strong>: Even if minimum service (" + minMonths + "m) is not met or salary exceeds the High Income Threshold (" + dynamicThresholds.hitFmt + "), s 365 applies with a reverse onus of proof (s 361) where dismissal followed a workplace right inquiry or complaint.";
    } else if (dType === "forced_resignation") {
      trackKo = "<strong>권고 절차: 강제사직(Constructive Dismissal · s 386(1)(b)) 부당해고(Form F2) 또는 일반보호(Form F8)</strong><br/><code>[2026] FWC 3896 Shawriah</code> 결정에서 확인되듯 단순한 압박감만으로는 강제사직이 인정되지 않습니다. 아직 사직서를 제출하지 않았다면 자진 사직서를 먼저 내지 말고 서면 대응 전략부터 마련하시기 바랍니다.";
      trackEn = "<strong>Recommended Track: Constructive / Forced Resignation (s 386(1)(b)) under Form F2 or Form F8</strong>: Per <code>[2026] FWC 3896 Shawriah</code>, do NOT submit a voluntary resignation letter before securing legal advice.";
    } else {
      trackKo = "<strong>권고 절차: 부당해고 구제 신청 (Unfair Dismissal · Form F2 · s 394)</strong><br/>최소 근속기간(" + minMonths + "개월 기준 현재 " + months + "개월)과 고소득 기준선(" + dynamicThresholds.hitFmt + ") 요건을 모두 충족합니다. 해고가 가혹·부당·불합리(s 387)했거나 절차상 결함이 있는 정리해고(s 389)인 경우 최대 26주분 보상금(s 392 · 상한 " + dynamicThresholds.capFmt + ")이나 복직을 청구할 수 있습니다.";
      trackEn = "<strong>Recommended Track: Unfair Dismissal Application (Form F2 · s 394)</strong>: Minimum employment period (" + months + "m vs " + minMonths + "m required) and High Income Threshold (" + dynamicThresholds.hitFmt + ") satisfied. Eligible to claim up to 26 weeks' compensation (s 392 · " + dynamicThresholds.capFmt + " cap) or reinstatement.";
    }

    if (out) {
      out.innerHTML =
        '<div style="background:' + badgeColor + ';color:#FFFFFF;padding:10px 14px;border-radius:8px;font-weight:800;font-size:13.5px;margin-bottom:4px;">' +
          (currentLang === "ko" ? statusTextKo : statusTextEn) +
        '</div>' +
        dualCardsHtml +
        '<div style="margin-top:12px;font-size:13.5px;line-height:1.65;color:var(--pk-ink);background:var(--pk-bg);border:1px solid var(--pk-line);padding:14px;border-radius:8px;">' +
          (currentLang === "ko" ? trackKo : trackEn) +
        '</div>';
    }

    lastComputedDeadline = {
      safeIso: calc.safeDate,
      rawIso: calc.rawDate,
      deadlineIso: calc.statutoryDate,
      rolledReason: calc.rolledReason,
      stateCode: stateCode,
      diffDays: diffDays,
      udEligible: udEligible,
      s536ldEligible: s536ldEligible,
      months: months,
      dType: dType
    };
    return lastComputedDeadline;
  }

  function roundAud2(n) {
    return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
  }

  function formatAud(n) {
    var r = roundAud2(n);
    if (Math.abs(r - Math.round(r)) < 1e-9) {
      return "$" + Math.round(r).toLocaleString("en-AU");
    }
    return "$" + r.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function syncRedundancyModeVisibility() {
    var modeEl = document.getElementById("red-service-mode");
    var yearsWrap = document.getElementById("red-years-wrap");
    var datesWrap = document.getElementById("red-dates-wrap");
    var mode = (modeEl && modeEl.value ? modeEl.value : "years").toLowerCase();
    if (yearsWrap && yearsWrap.style) {
      yearsWrap.style.display = mode === "dates" ? "none" : "grid";
    }
    if (datesWrap && datesWrap.style) {
      datesWrap.style.display = mode === "dates" ? "" : "none";
    }
    return mode;
  }

  function calcRedundancySimulator() {
    var out = document.getElementById("emp-redundancy-output");
    var serviceMode = syncRedundancyModeVisibility();

    if (!hasInteracted) {
      if (out) {
        out.innerHTML = renderNeutralPromptHtml(
          "사업장 규모(s 121)·연속 근속기간·통상 주당 기본급(s 16) 및 예고기간 가산액(s 18)을 입력하면 해고예고수당(s 117 Full Pay), 정리해고수당(s 119 Base Pay) 및 부당해고 법정 상한(26주·" + dynamicThresholds.capFmt + ")을 분리 산출합니다.",
          "Enter employer size (s 121), continuous service, ordinary weekly base pay (s 16), and regular notice additions (s 18) to calculate NES Notice Pay (Full Pay), Redundancy Pay (Base Pay), and the independent 26-week cap (" + dynamicThresholds.capFmt + ")."
        );
      }
      return null;
    }

    var empTypeEl = document.getElementById("red-employment-type");
    var empType = (empTypeEl && empTypeEl.value ? empTypeEl.value : "permanent").toLowerCase();

    var yrs = NaN;
    var dateSpan = null;
    var serviceSummaryKo = "";
    var serviceSummaryEn = "";

    if (serviceMode === "dates") {
      var startRaw = ((document.getElementById("red-start-date") || {}).value || "").toString().trim();
      var endRaw = ((document.getElementById("red-end-date") || {}).value || "").toString().trim();
      dateSpan = ParkCoDates.computeServiceSpanFromDates(startRaw, endRaw);
      if (!dateSpan || !dateSpan.valid) {
        if (out) {
          out.innerHTML =
            '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
              (currentLang === "ko"
                ? (dateSpan && dateSpan.reason === "end_before_start"
                    ? "해고예고 통지일/종료일은 근무 시작일과 같거나 그 이후 날짜여야 합니다."
                    : "근무 시작일(Start Date)과 해고예고 통지일/종료일(End Date)을 모두 유효한 날짜(YYYY-MM-DD)로 입력해 주십시오.")
                : (dateSpan && dateSpan.reason === "end_before_start"
                    ? "Notice / Termination Date must be on or after the Employment Start Date."
                    : "Please enter valid Employment Start Date and Notice / Termination Date (YYYY-MM-DD) values.")) +
            '</div>';
        }
        return null;
      }
      yrs = dateSpan.exactYears;
      serviceSummaryKo = dateSpan.startIso + " ~ " + dateSpan.endIso + " (만 " + dateSpan.wholeYears + "년 " + dateSpan.extraDays + "일 · 총 " + dateSpan.totalDays + "역일)";
      serviceSummaryEn = dateSpan.startIso + " to " + dateSpan.endIso + " (" + dateSpan.wholeYears + " completed yr(s) + " + dateSpan.extraDays + " day(s) · " + dateSpan.totalDays + " calendar days)";
    } else {
      var exactEl = document.getElementById("red-service-years");
      var exactRaw = exactEl && exactEl.value != null ? String(exactEl.value).trim() : "";
      var presetRaw = String(((document.getElementById("red-years") || {}).value) || "").trim();
      var yrsStr = exactRaw !== "" ? exactRaw : presetRaw;
      if (yrsStr === "" || !/^\d+(?:\.\d+)?$/.test(yrsStr)) {
        if (out) {
          out.innerHTML =
            '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
              (currentLang === "ko"
                ? "연속 근속연수(Years of Continuous Service)를 선택하거나 0 이상의 숫자로 직접 입력해 주십시오 (임의 기본값 자동 적용 안 함)."
                : "Please select or enter a valid non-negative Continuous Service length in years (no automatic fallback is applied).") +
            '</div>';
        }
        return null;
      }
      yrs = parseFloat(yrsStr);
      if (isNaN(yrs) || yrs < 0 || yrs > 60) {
        if (out) {
          out.innerHTML =
            '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
              (currentLang === "ko"
                ? "연속 근속연수는 0년 이상 60년 이하의 유효한 숫자로 입력해 주십시오."
                : "Continuous service years must be a valid number between 0 and 60.") +
            '</div>';
        }
        return null;
      }
      serviceSummaryKo = yrsStr + "년 연속 근속";
      serviceSummaryEn = yrsStr + " year(s) continuous service";
    }

    var weeklyRaw = ((document.getElementById("red-weekly-pay") || {}).value || "").toString().trim();
    var baseWeekly = weeklyRaw === "" ? NaN : parseFloat(weeklyRaw);
    if (!isFinite(baseWeekly) || baseWeekly <= 0) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "통상 주당 기본급(Weekly Base Pay Rate, s 16)은 0보다 큰 유효한 금액(AUD $)을 입력해 주십시오."
              : "Please enter a valid positive Ordinary Weekly Base Pay Rate (AUD $ greater than 0 per s 16).") +
          '</div>';
      }
      return null;
    }

    var addEl = document.getElementById("red-notice-additions");
    var addRaw = addEl && addEl.value != null ? String(addEl.value).trim() : "0";
    var noticeAddWeekly = addRaw === "" ? 0 : parseFloat(addRaw);
    if (!isFinite(noticeAddWeekly) || noticeAddWeekly < 0) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "예고기간 주당 정기 가산액(Notice Additions, s 18)은 0 이상의 금액(AUD $)으로 입력해 주십시오."
              : "Regular Weekly Notice-Period Additions (s 18) must be 0 or a positive AUD amount.") +
          '</div>';
      }
      return null;
    }

    var fullWeeklyPay = roundAud2(baseWeekly + noticeAddWeekly);

    var udRemEl = document.getElementById("red-ud-weekly-remuneration");
    var udRemRaw = udRemEl && udRemEl.value != null ? String(udRemEl.value).trim() : "";
    var udWeeklyBasis = udRemRaw === "" ? fullWeeklyPay : parseFloat(udRemRaw);
    if (!isFinite(udWeeklyBasis) || udWeeklyBasis <= 0) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "부당해고 상한 계산용 주당 보수는 비워두거나 0보다 큰 금액으로 입력해 주십시오."
              : "Optional Weekly Remuneration for the s 392 cap must be left blank or entered as a positive AUD amount.") +
          '</div>';
      }
      return null;
    }

    var ageYearsEl = document.getElementById("red-age-years");
    var ageYearsRaw = ageYearsEl && ageYearsEl.value != null ? String(ageYearsEl.value).trim() : "";
    var age45SelEl = document.getElementById("red-age-45");
    var isOver45 = false;
    if (ageYearsRaw !== "") {
      var parsedAge = parseFloat(ageYearsRaw);
      if (!isFinite(parsedAge) || parsedAge < 14 || parsedAge > 110) {
        if (out) {
          out.innerHTML =
            '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
              (currentLang === "ko"
                ? "근로자 만 나이는 14세 이상 110세 이하의 숫자로 입력해 주십시오."
                : "Employee age must be a valid number between 14 and 110.") +
            '</div>';
        }
        return null;
      }
      /* s 117(3)(b): strictly OVER 45 years old (exact age 45 does NOT qualify) */
      isOver45 = parsedAge > 45;
      if (age45SelEl) {
        age45SelEl.value = isOver45 ? "over45" : "under45";
      }
    } else {
      isOver45 = ((age45SelEl || {}).value) === "over45";
    }

    var redeploy = (document.getElementById("red-redeploy") || {}).value || "failed_redeploy";
    /* Decoupled Section 2 Small Business (<15 employees, s 121 FW Act) toggle */
    var redBizEl = document.getElementById("red-business-size");
    var redBizSize = (redBizEl && redBizEl.value) ? redBizEl.value : "standard";
    var isSmallRedundancy = redBizSize === "small";

    /* G-008: Strict separation of s 117(3) Notice (<= 1, <= 3, <= 5, > 5) vs s 119(2) Redundancy ([N, N+1)) */
    var baseNoticeWeeks = 1;
    var hasAtLeast2Years = false;
    var redLookupYears = 0;

    if (serviceMode === "dates" && dateSpan) {
      if (dateSpan.wholeYears < 1 || (dateSpan.wholeYears === 1 && dateSpan.extraDays === 0)) {
        baseNoticeWeeks = 1;
      } else if (dateSpan.wholeYears < 3 || (dateSpan.wholeYears === 3 && dateSpan.extraDays === 0)) {
        baseNoticeWeeks = 2;
      } else if (dateSpan.wholeYears < 5 || (dateSpan.wholeYears === 5 && dateSpan.extraDays === 0)) {
        baseNoticeWeeks = 3;
      } else {
        baseNoticeWeeks = 4;
      }
      hasAtLeast2Years = dateSpan.wholeYears >= 2;
      redLookupYears = dateSpan.wholeYears;
    } else {
      if (yrs <= 1) baseNoticeWeeks = 1;
      else if (yrs <= 3) baseNoticeWeeks = 2;
      else if (yrs <= 5) baseNoticeWeeks = 3;
      else baseNoticeWeeks = 4;
      hasAtLeast2Years = yrs >= 2;
      redLookupYears = yrs;
    }

    var ageBonusWeeks = (isOver45 && hasAtLeast2Years) ? 1 : 0;
    var rawNoticeWeeks = baseNoticeWeeks + ageBonusWeeks;

    var rawRedWeeks = 0;
    if (redLookupYears >= 10) rawRedWeeks = 12;
    else if (redLookupYears >= 9) rawRedWeeks = 16;
    else if (redLookupYears >= 8) rawRedWeeks = 14;
    else if (redLookupYears >= 7) rawRedWeeks = 13;
    else if (redLookupYears >= 6) rawRedWeeks = 11;
    else if (redLookupYears >= 5) rawRedWeeks = 10;
    else if (redLookupYears >= 4) rawRedWeeks = 8;
    else if (redLookupYears >= 3) rawRedWeeks = 7;
    else if (redLookupYears >= 2) rawRedWeeks = 6;
    else if (redLookupYears >= 1) rawRedWeeks = 4;

    var s123Excluded = (empType === "casual" || empType === "fixed_term" || empType === "serious_misconduct");
    var noticeWeeks = s123Excluded ? 0 : rawNoticeWeeks;
    var redWeeks = (s123Excluded || isSmallRedundancy) ? 0 : rawRedWeeks;

    /* G-005: Notice Pay uses Full Pay Rate (s 117(2)(b) / s 18); Redundancy Pay uses Base Pay Rate (s 119(2) / s 16) */
    var noticePay = roundAud2(noticeWeeks * fullWeeklyPay);
    var redPay = roundAud2(redWeeks * baseWeekly);
    var maxUdComp = Math.min(dynamicThresholds.capAud, roundAud2(26 * udWeeklyBasis));

    if (out) {
      var s123BannerHtml = "";
      if (s123Excluded) {
        var exclReasonKo = empType === "casual"
          ? "캐주얼 근로자(<code>s 123(1)(c)</code>)는 법정 NES 해고예고수당(s 117) 및 정리해고수당(s 119) 적용 대상에서 제외(0주)됩니다 (단 정기·체계적 캐주얼로서 계속 고용 기대가 인정되면 s 384(2)(a)에 따라 부당해고 구제 신청은 가능)."
          : empType === "fixed_term"
          ? "특정 기간·과업·계절 계약 만료 또는 수습훈련 계약(<code>s 123(1)(a)</code>)은 법정 NES 해고예고 및 정리해고수당 제외 대상(0주)입니다 (단 반복 갱신 제한 위반 시 s 333E 확인 필요)."
          : "중대 비위(Serious Misconduct · <code>s 123(1)(b)</code> / <code>reg 1.07</code>) 즉시 해고는 법정 NES 해고예고수당이 제외(0주)됩니다. 다만 비위 사실 입증책임은 고용주에게 있으므로 부당해고(Form F2) 또는 미지급 예고수당 다툼이 가능합니다.";
        var exclReasonEn = empType === "casual"
          ? "Casual employees (<code>s 123(1)(c)</code>) are excluded from statutory NES notice (s 117) and redundancy pay (s 119) ($0), though regular & systematic casuals may still qualify for unfair dismissal protection under s 384(2)(a)."
          : empType === "fixed_term"
          ? "Specified period/task/seasonal expiry and qualifying traineeships (<code>s 123(1)(a)</code>) are excluded from NES notice and redundancy pay ($0), subject to fixed-term contract limits under s 333E."
          : "Summary dismissal for proven Serious Misconduct (<code>s 123(1)(b)</code> / <code>reg 1.07</code>) excludes statutory NES notice ($0), though employers carry a high evidentiary threshold if contested at the FWC.";
        s123BannerHtml =
          '<div style="background:var(--pk-warn-bg);border-left:4px solid var(--pk-accent);padding:10px 12px;border-radius:6px;margin-bottom:10px;font-size:12.5px;color:var(--pk-ink);">' +
            '<strong>ℹ️ s 123 법정 제외 사유 적용:</strong> ' + (currentLang === "ko" ? exclReasonKo : exclReasonEn) +
          '</div>';
      }

      var smallBizNoteHtml = (isSmallRedundancy && !s123Excluded)
        ? (currentLang === "ko"
            ? '<div style="background:var(--pk-warn-bg);border-left:4px solid var(--pk-accent);padding:10px 12px;border-radius:6px;margin-bottom:10px;font-size:12.5px;color:var(--pk-ink);"><strong>ℹ️ s 121 소규모 사업장(15인 미만) NES 정리해고수당 면제 적용:</strong> 해고 시점 총 근로자 수(계열사 합산 s 23)가 15인 미만인 사업장은 법정 NES 정리해고수당(s 119)이 면제(0주)됩니다(단 특정 Modern Award·기업협약 별도 규정 확인 필수). 반면 <strong>s 117 법정 해고예고수당(' + noticeWeeks + '주 · Full Pay 기준)은 동일하게 지급</strong>해야 합니다.</div>'
            : '<div style="background:var(--pk-warn-bg);border-left:4px solid var(--pk-accent);padding:10px 12px;border-radius:6px;margin-bottom:10px;font-size:12.5px;color:var(--pk-ink);"><strong>ℹ️ Small Business (&lt;15 Employees) s 121 NES Redundancy Exemption Active:</strong> Employers with fewer than 15 employees (incl. associated entities per s 23) are exempt from statutory s 119 NES redundancy pay ($0 unless an industry Award/EA provides otherwise), while <strong>s 117 NES Notice Pay (' + noticeWeeks + ' wks at Full Pay Rate) still applies</strong>.</div>')
        : "";

      var defectBanner = redeploy === "failed_redeploy"
        ? (currentLang === "ko"
            ? '<div style="background:var(--pk-danger-bg);border-left:4px solid var(--pk-danger);padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:var(--pk-danger);"><strong>⚠️ s 389 부적법 정리해고(Non-Genuine Redundancy) 위험:</strong> ' + (isSmallRedundancy ? '소규모 사업장(12개월 이상 근속자 대상)이라도 ' : '') + '사내·계열사 재배치(Redeployment) 검토나 Award 사전 협의를 누락하면 정리해고 면책이 배제되어 <code>[2026] FWC 3112 Yorston</code> 사건과 같이 부당해고 배상 심리로 전환됩니다 (법정 상한 <strong>' + formatAud(maxUdComp) + ' · 최대 26주 / ' + dynamicThresholds.capFmt + ' 캡</strong> · 실제 인용액은 재취업 노력 및 감액 요소에 따라 FWC가 개별 산정).</div>'
            : '<div style="background:var(--pk-danger-bg);border-left:4px solid var(--pk-danger);padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:var(--pk-danger);"><strong>⚠️ Non-Genuine Redundancy Defect (s 389):</strong> ' + (isSmallRedundancy ? 'Even for a small business (where 12m+ service is met), failure ' : 'Failure ') + 'to consult or offer reasonable redeployment strips the s 389 immunity, exposing the dismissal to FWC compensation assessment up to the <strong>statutory ceiling of ' + formatAud(maxUdComp) + ' (max 26 wks / ' + dynamicThresholds.capFmt + ' cap · NOT an automatic or guaranteed award)</strong> per <code>[2026] FWC 3112 Yorston</code>.</div>')
        : (currentLang === "ko"
            ? '<div style="background:var(--pk-ok-bg);border-left:4px solid var(--pk-ok);padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:var(--pk-ok);"><strong>✅ s 389 적법 정리해고 요건 충족:</strong> 직무 소멸·사전 서면 협의·재배치 불가 기록이 입증된 경우 부당해고 구제 신청 대상에서 제외되며 ' + (isSmallRedundancy ? '소규모 사업장 면제(s 121)에 따라 법정 해고예고수당(s 117 Full Pay)을 정산합니다.' : '법정 해고예고수당(Full Pay) 및 정리해고수당(Base Pay)을 각각 분리 정산합니다.') + '</div>'
            : '<div style="background:var(--pk-ok-bg);border-left:4px solid var(--pk-ok);padding:12px;border-radius:6px;margin-bottom:12px;font-size:13px;color:var(--pk-ok);"><strong>✅ Genuine Redundancy (s 389) Satisfied:</strong> Where operational change, Award consultation, and non-redeployment are documented, unfair dismissal is barred and ' + (isSmallRedundancy ? 'statutory s 117 notice pay (Full Pay) applies (s 121 small-business redundancy exemption).' : 'statutory NES notice (Full Pay) and redundancy (Base Pay) entitlements apply.') + '</div>');

      var boundaryStrip =
        '<div style="font-size:12px;color:var(--pk-ink-2);background:var(--pk-surface-2);border:1px solid var(--pk-line);border-radius:6px;padding:8px 10px;margin-bottom:10px;">' +
          (currentLang === "ko"
            ? ('<strong>적용 산식 기준:</strong> ' + serviceSummaryKo + ' · 연령 ' + (isOver45 ? '만 45세 초과(+1주 요건: 2년 이상 근속 충족 시만)' : '만 45세 이하(만 45세 정각 포함 · +0주)') + ' → <code>s 117(3)</code> 기본예고 ' + baseNoticeWeeks + '주 + 연령가산 ' + ageBonusWeeks + '주 / <code>s 119(2)</code> 정리해고 구간 ' + rawRedWeeks + '주')
            : ('<strong>Applied Statutory Formula:</strong> ' + serviceSummaryEn + ' · Age ' + (isOver45 ? 'Over 45 (+1 wk only if >=2 yrs service)' : '45 or under (incl. exact age 45 · +0 wk)') + ' → <code>s 117(3)</code> base notice ' + baseNoticeWeeks + 'w + age bonus ' + ageBonusWeeks + 'w / <code>s 119(2)</code> redundancy scale ' + rawRedWeeks + 'w')) +
        '</div>';

      var footnoteHtml =
        '<div style="margin-top:10px;font-size:11.8px;line-height:1.55;color:var(--pk-muted);">' +
          (currentLang === "ko"
            ? "• <strong>산정 기준 분리 (이중 합산 방지):</strong> 해고예고 갈음 수당(<code>s 117(2)(b)</code>)은 통상 기본급(" + formatAud(baseWeekly) + ")에 예고기간 중 정기 지급될 수당·로딩·페널티·보너스(" + formatAud(noticeAddWeekly) + ")를 더한 <strong>Full Pay Rate(" + formatAud(fullWeeklyPay) + "/주, s 18)</strong>로 산정하며 정리해고수당(<code>s 119(2)</code>)은 <strong>통상 기본급(" + formatAud(baseWeekly) + "/주, s 16)</strong>만 적용합니다.<br/>• <strong>법령·협약 우선 확인:</strong> 위 금액은 공정근로법(NES) 최소 기준이며 적용 Modern Award, 기업협약(EA) 또는 근로계약서에 더 유리한 예고기간·퇴직수당 규정이 있으면 해당 상위 기준이 우선 적용됩니다. 부당해고 26주 상한(<code>s 392(5)</code>)은 법정 최고 한도일 뿐 보장 배상액이 아닙니다."
            : "• <strong>Pay Basis Separation (No Double-Counting):</strong> Payment in lieu of notice (<code>s 117(2)(b)</code>) uses your <strong>Full Pay Rate (" + formatAud(fullWeeklyPay) + "/wk = Base " + formatAud(baseWeekly) + " + Notice Additions " + formatAud(noticeAddWeekly) + ", s 18)</strong>, whereas NES Redundancy Pay (<code>s 119(2)</code>) uses your <strong>Ordinary Base Pay Rate (" + formatAud(baseWeekly) + "/wk, s 16)</strong> only.<br/>• <strong>Award/EA Overrides & Statutory Cap Caveat:</strong> Figures show minimum NES baselines; Modern Awards, Enterprise Agreements, or contracts may provide higher notice/severance. The <code>s 392(5)</code> 26-week / " + dynamicThresholds.capFmt + " figure is a statutory maximum ceiling, NOT a guaranteed payout.") +
        '</div>';

      out.innerHTML = boundaryStrip + s123BannerHtml + smallBizNoteHtml + defectBanner +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:10px;">' +
          '<div id="red-card-notice" style="background:var(--pk-bg);border:1px solid var(--pk-line);padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:var(--pk-muted);">' + (currentLang === "ko" ? "법정 해고예고수당 (s 117 · Full Pay)" : "NES Notice Pay (s 117 · Full Pay)") + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-ink);">' + noticeWeeks + ' wks (' + formatAud(noticePay) + ')</div>' +
            '<div style="font-size:11px;color:var(--pk-muted);margin-top:3px;">' + formatAud(fullWeeklyPay) + '/wk (' + formatAud(baseWeekly) + ' + ' + formatAud(noticeAddWeekly) + ')</div>' +
          '</div>' +
          '<div id="red-card-redundancy" style="background:var(--pk-bg);border:1px solid var(--pk-line);padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:var(--pk-muted);">' + (currentLang === "ko" ? (isSmallRedundancy ? "법정 정리해고수당 (s 121 면제)" : "법정 정리해고수당 (s 119 · Base Pay)") : (isSmallRedundancy ? "NES Redundancy (s 121 Exempt)" : "NES Redundancy Pay (s 119 · Base Pay)")) + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-brand);">' + redWeeks + ' wks (' + formatAud(redPay) + ')</div>' +
            '<div style="font-size:11px;color:var(--pk-muted);margin-top:3px;">' + formatAud(baseWeekly) + '/wk ' + (currentLang === "ko" ? "기본급 기준 (s 16)" : "base rate only (s 16)") + '</div>' +
          '</div>' +
          '<div id="red-card-udcap" style="background:var(--pk-warn-bg);border:1px solid var(--pk-accent);padding:12px;border-radius:8px;">' +
            '<div style="font-size:11.5px;color:var(--pk-warn);">' + (currentLang === "ko" ? "부당해고 법정 최고한도 (s 392 · 보장액 아님)" : "Statutory Unfair Dismissal Ceiling (s 392 Cap)") + '</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-danger);">Max 26 wks (' + formatAud(maxUdComp) + ')</div>' +
            '<div style="font-size:11px;color:var(--pk-warn);margin-top:3px;">' + (currentLang === "ko" ? "법정 상한선 (" + dynamicThresholds.capFmt + " 캡 · 개별 산정)" : "Statutory cap (" + dynamicThresholds.capFmt + " max · not guaranteed)") + '</div>' +
          '</div>' +
        '</div>' +
        footnoteHtml;
    }
    return {
      empType: empType,
      serviceMode: serviceMode,
      serviceYears: yrs,
      dateSpan: dateSpan,
      isOver45: isOver45,
      baseNoticeWeeks: baseNoticeWeeks,
      ageBonusWeeks: ageBonusWeeks,
      noticeWeeks: noticeWeeks,
      baseWeekly: baseWeekly,
      noticeAddWeekly: noticeAddWeekly,
      fullWeeklyPay: fullWeeklyPay,
      noticePay: noticePay,
      redWeeks: redWeeks,
      redPay: redPay,
      udWeeklyBasis: udWeeklyBasis,
      maxUdComp: maxUdComp,
      redBizSize: redBizSize,
      smallBizExempt: isSmallRedundancy,
      s123Excluded: s123Excluded
    };
  }

  function calcComplianceAudit() {
    var out = document.getElementById("emp-compliance-output");
    if (!hasInteracted) {
      if (out) {
        out.innerHTML = renderNeutralPromptHtml(
          "좌측의 ABN 계약 방식·수당 정산·근무시간 외 연락 항목을 선택하면 위장도급(s 15AA) 및 임금체불(s 327A) 리스크 점검 결과가 표시됩니다.",
          "Select contractor, pay, and after-hours messaging practices on the left to evaluate sham contracting (s 15AA) and underpayment (s 327A) exposure."
        );
      }
      return null;
    }

    var cont = (document.getElementById("audit-contractor") || {}).value || "high_risk";
    var pay = (document.getElementById("audit-pay") || {}).value || "flat_unverified";
    var disc = (document.getElementById("audit-disconnect") || {}).value || "after_hours_risk";

    var items = [];
    if (cont === "high_risk") {
      items.push(currentLang === "ko"
        ? "🔴 <strong>s 15AA / s 357 위장도급(Sham Contracting) 고위험:</strong> 실질 근무 형태가 근로자에 해당하므로 과거 최대 6년치 연차·유급병가·주말수당·Superannuation 소급 청구 및 민사제재금 대상입니다."
        : "🔴 <strong>s 15AA / s 357 Sham Contracting High Risk:</strong> Practical reality test points to employment status, exposing the business to 6 years of back-paid NES leave, penalty rates, superannuation, and civil penalties.");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>s 15AA 도급·고용 구분 양호:</strong> 독립 사업자 요건 또는 정식 TFN 고용 체계가 유지되고 있습니다."
        : "🟢 <strong>s 15AA Classification Compliant:</strong> Independent contractor or TFN employment structure aligned.");
    }

    if (pay === "flat_unverified") {
      items.push(currentLang === "ko"
        ? "🔴 <strong>s 327A 임금체불(Wage Theft) & 소액청구($100,000 한도 s 548) 노출:</strong> 적법한 서면 상계조항(Set-off clause) 없는 단일 시급(Flat Rate) 지급은 주말·초과근무 수당 미지급으로 판단됩니다."
        : "🔴 <strong>s 327A Wage Theft & s 548 ($100k Small Claims) Exposure:</strong> Unverified flat rates without a valid written Award set-off clause cannot offset penalty rate shortfalls.");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>Modern Award 급여 및 서면 상계조항 검증 완료</strong>"
        : "🟢 <strong>Modern Award & Written Set-Off Clause Verified</strong>");
    }

    if (disc === "after_hours_risk") {
      items.push(currentLang === "ko"
        ? "🟠 <strong>s 333M 연결되지 않을 권리(Right to Disconnect) 주의:</strong> 소규모 사업장까지 전면 시행 중이며 퇴근 후 정당한 연락 거부를 이유로 불이익을 주면 일반보호 조항(s 340) 위반에 해당합니다."
        : "🟠 <strong>s 333M Right to Disconnect Alert:</strong> Effective across all employers (including small businesses); penalising reasonable refusal of after-hours contact triggers s 340 General Protections liability.");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>s 333M 근무시간 외 연락 거부권 가이드라인 수립 완료</strong>"
        : "🟢 <strong>s 333M Right to Disconnect Policy Verified</strong>");
    }

    if (out) {
      out.innerHTML = '<ul style="margin:0;padding-left:18px;font-size:13.5px;line-height:1.7;">' +
        items.map(function (i) { return '<li style="margin-bottom:8px;">' + i + '</li>'; }).join("") +
        '</ul>';
    }
    return { cont: cont, pay: pay, disc: disc };
  }

  function calcVisaCrossover() {
    var visa = (document.getElementById("cross-visa-type") || {}).value || "482";
    var daysGroup = document.getElementById("cross-days-group");
    if (daysGroup) {
      daysGroup.style.display = visa === "485_500_whm" ? "none" : "";
    }

    var out = document.getElementById("emp-crossover-output");
    if (!hasInteracted) {
      if (out) {
        out.innerHTML = renderNeutralPromptHtml(
          "비자 종류와 고용 종료 후 경과 일수를 선택하면 스폰서 비자 180일 유예 시계(Condition 8607/8608) 또는 비스폰서 임시비자 노동법 보호 지침을 확인하실 수 있습니다.",
          "Select your visa subclass and days elapsed since cessation to view Condition 8607/8608 grace rules or non-sponsored temporary visa workplace protections."
        );
      }
      return null;
    }

    var issue = (document.getElementById("cross-issue") || {}).value || "unfair_plus_transfer";
    var visaLabel = (VISA_LABELS[currentLang] && VISA_LABELS[currentLang][visa]) || VISA_LABELS.ko["482"];

    /* P0-2: Non-sponsored temporary visas (485 / 500 / WHM 417·462) NEVER show Condition 8607/8608 180-day clock */
    if (visa === "485_500_whm") {
      var tempHtml = currentLang === "ko"
        ? '<div style="background:var(--pk-ok-bg);border:1px solid var(--pk-ok);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-ok);">' +
            '<strong>🛡️ ' + visaLabel + ' (비스폰서 자유 취업 비자):</strong> 특정 고용주 종속 조건이 없으므로 퇴사·해고 자체만으로 비자 취소 기한이 시작되지 않으며 다른 고용주로 자유롭게 이직할 수 있습니다.' +
          '</div>' +
          '<div style="font-size:13.5px;line-height:1.65;color:var(--pk-ink);">' +
            '• <strong>비자별 근로시간·근무기간 조건 점검:</strong> 학생비자(500)는 학기 중 2주 48시간 근로 상한(Condition 8105), 워킹홀리데이(417·462)는 동일 고용주 6개월 근무 제한 및 면제 요건(Condition 8547)을 준수해야 합니다.<br/>' +
            '• <strong>공정근로법 동등 보호 & 직장정의 비자(Subclass 408):</strong> 임시비자 근로자도 해고 후 21일 내 FWC 부당해고·일반보호 신청 및 최대 6년치 체불임금 소액청구(s 548) 권리를 동일하게 보장받습니다. 임금체불·착취 피해 제보 과정에서 비자 만료가 임박한 경우 <strong>직장정의 비자(Subclass 408 Workplace Justice Visa)</strong> 및 비자 취소 방지 보호 제도를 검토하시기 바랍니다.' +
          '</div>'
        : '<div style="background:var(--pk-ok-bg);border:1px solid var(--pk-ok);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-ok);">' +
            '<strong>🛡️ ' + visaLabel + ' (Non-Sponsored Open Work Rights):</strong> No employer-tied sponsorship clock applies; job loss does not trigger automatic visa cancellation and you may change employers freely.' +
          '</div>' +
          '<div style="font-size:13.5px;line-height:1.65;color:var(--pk-ink);">' +
            '• <strong>Visa Work Condition Check:</strong> Observe Student Visa (500) Condition 8105 (48 hours per fortnight in session) and WHM (417·462) Condition 8547 (6-month single-employer rule unless exempt).<br/>' +
            '• <strong>Full Fair Work Rights & Subclass 408 Workplace Justice Visa:</strong> Temporary visa holders hold identical rights to lodge 21-day FWC claims and s 548 back-pay recovery, plus access to the <strong>Subclass 408 Workplace Justice Visa</strong> and non-cancellation protections when pursuing exploitation claims.' +
          '</div>';
      if (out) out.innerHTML = tempHtml;
      return { visa: visa, visaLabel: visaLabel, nonSponsored: true, days: 0, remain180: null };
    }

    var daysRaw = ((document.getElementById("cross-days-elapsed") || {}).value || "").toString().trim();
    var days = daysRaw === "" ? NaN : parseInt(daysRaw, 10);
    if (isNaN(days) || days < 0) {
      if (out) {
        out.innerHTML =
          '<div style="background:var(--pk-danger-bg);border:1px solid var(--pk-danger);color:var(--pk-danger);padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:700;">' +
            (currentLang === "ko"
              ? "고용 종료 후 경과 일수는 0 이상의 정수로 입력해 주십시오."
              : "Days elapsed since cessation must be a non-negative integer (0 or greater).") +
          '</div>';
      }
      return null;
    }

    var condCode = visa === "494" ? "Condition 8608" : "Condition 8607";
    var remain180 = Math.max(0, 180 - days);
    var over180 = days > 180;
    var clockBoxHtml = "";

    if (visa === "186_pending") {
      clockBoxHtml = currentLang === "ko"
        ? '<div style="background:var(--pk-warn-bg);border:1px solid var(--pk-accent);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-warn);">' +
            '<strong>⚠️ ' + visaLabel + ' · 퇴사 후 ' + days + '일 경과:</strong> ENS 186 심사 결정 전에 스폰서 고용관계가 종료되면 기존 노미네이션 철회 시 비자 거절 위험이 발생합니다. 브리징 비자 상태와 보유 실체 비자(482 등)의 유예 조건을 즉시 대조해야 합니다.' +
          '</div>'
        : '<div style="background:var(--pk-warn-bg);border:1px solid var(--pk-accent);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-warn);">' +
            '<strong>⚠️ ' + visaLabel + ' · ' + days + ' days since cessation:</strong> Termination prior to Subclass 186 grant places the pending ENS nomination at withdrawal/refusal risk; audit underlying 482/bridging conditions immediately.' +
          '</div>';
    } else if (over180) {
      clockBoxHtml = currentLang === "ko"
        ? '<div style="background:var(--pk-danger-bg);border:1.5px solid var(--pk-danger);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-danger);">' +
            '<strong>🚨 단일 공백 180일 유예 기한 경과 (' + days + '일 경과 · ' + (days - 180) + '일 초과' + (days > 365 ? ' · 누적 365일 한도도 초과' : '') + '):</strong> ' + visaLabel + ' (' + condCode + ') 위반으로 <strong>s 116 비자 취소 예고(NOICC) 고위험 상태</strong>입니다. 즉시 <a href="https://changa9090.github.io/parkco-visa-crisis-navigator/" style="color:var(--pk-danger);font-weight:800;text-decoration:underline;">비자 위기·ART 기한 진단기</a>와 전문 변호사 점검을 진행하십시오.' +
          '</div>'
        : '<div style="background:var(--pk-danger-bg);border:1.5px solid var(--pk-danger);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-danger);">' +
            '<strong>🚨 180-Day Grace Period Exceeded (' + days + ' days elapsed · ' + (days - 180) + ' days overdue):</strong> High risk of ' + condCode + ' breach and <strong>s 116 NOICC visa cancellation</strong>. Check the <a href="https://changa9090.github.io/parkco-visa-crisis-navigator/" style="color:var(--pk-danger);font-weight:800;text-decoration:underline;">Visa Crisis Navigator</a> and seek urgent legal representation.' +
          '</div>';
    } else {
      clockBoxHtml = currentLang === "ko"
        ? '<div style="background:#EEF8F2;border:1px solid var(--pk-ok);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-ink);">' +
            '<strong>🛡️ ' + visaLabel + ' 고용 종료 시계 (' + condCode + '):</strong> 퇴사 후 <strong>' + days + '일 경과</strong> · 단일 공백 180일 한도까지 <strong>' + remain180 + '일 남음</strong> (비자 전체 기간 누적 한도 365일).' +
          '</div>'
        : '<div style="background:#EEF8F2;border:1px solid var(--pk-ok);padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:var(--pk-ink);">' +
            '<strong>🛡️ ' + visaLabel + ' Cessation Clock (' + condCode + '):</strong> <strong>' + days + ' days elapsed</strong> · <strong>' + remain180 + ' days remaining</strong> in your 180-day single-stretch grace period (365 days total cap).' +
          '</div>';
    }

    var bodyHtml = currentLang === "ko"
      ? (issue === "exploitation_408"
          ? "• <strong>직장정의 비자(Subclass 408 Workplace Justice Visa) 및 비자 취소 방지 보호:</strong> 임금체불·스폰서 비용 전가(s 245AR 위반)·괴롭힘 피해를 겪은 비자 소지자는 인증 기관 확인이나 법률 대리 절차를 거쳐 호주에 합법 체류하면서 체불 임금과 보상금을 청구할 수 있습니다."
          : issue === "employer_termination"
          ? "• <strong>고용주 필수 조치:</strong> ① 해고 전 공정근로법 s 387/s 389 절차 준수 확인 · ② 고용 종료 후 <strong>28일 이내 호주 이민성(Home Affairs) 스폰서십 변동 통보(s 140H / reg 2.84)</strong> · ③ 스폰서 비용·SAF 전가 금지(s 245AR) 및 귀국 항공료 서면 요청 시 지급 의무 점검."
          : "• <strong>FWC 부당해고 청구 + 신규 스폰서 노미네이션 병행 전략:</strong> 해고 후 21일 안에 FWC 구제 신청을 접수해 합의금과 공백기 생활비를 확보하는 동시에 180일 유예기간 내 새 스폰서 노미네이션을 진행하면 <strong>이전 스폰서 경력을 합산해 186 TRT 영주권(2년·730일)</strong> 요건을 이어갈 수 있습니다.")
      : (issue === "exploitation_408"
          ? "• <strong>Subclass 408 Workplace Justice Visa & Non-Cancellation Shield:</strong> Exploited migrant workers (underpayment, illegal s 245AR cashback demands) can secure temporary stay and work rights to pursue Fair Work claims without fear of visa cancellation."
          : issue === "employer_termination"
          ? "• <strong>Employer Mandatory Checklist:</strong> (1) Verify s 387/s 389 Fair Work procedural fairness prior to termination, (2) Lodge mandatory <strong>Home Affairs sponsor notification within 28 days (s 140H)</strong>, (3) Respect s 245AR prohibition on recovering SAF/nomination costs."
          : "• <strong>Dual FWC Claim + Sponsorship Transfer Strategy:</strong> File your FWC claim within 21 days to negotiate compensation while lodging a new nomination within the 180-day window to preserve cumulative 2-year (730-day) 186 TRT permanent residency accrual.");

    if (out) {
      out.innerHTML = clockBoxHtml + '<div style="font-size:13.5px;line-height:1.65;color:var(--pk-ink);">' + bodyHtml + '</div>';
    }
    return { visa: visa, visaLabel: visaLabel, nonSponsored: false, days: days, remain180: remain180, over180: over180 };
  }

  function renderEmpFwcAuthorities() {
    var grid = document.getElementById("emp-fwc-cards-grid");
    if (!grid) return;
    grid.innerHTML = EMP_FWC_AUTHORITIES.map(function (c) {
      return (
        '<div class="card" style="padding:16px;border:1px solid var(--pk-line);">' +
          '<div style="font-size:11px;font-weight:800;color:var(--pk-brand);margin-bottom:4px;">' + (currentLang === "ko" ? c.tag_ko : c.tag_en) + '</div>' +
          '<h4 style="margin:0 0 6px;font-size:14.5px;color:var(--pk-ink);">' + c.parties + ' <span style="color:var(--pk-muted);">' + c.citation + '</span></h4>' +
          '<p style="font-size:12.5px;color:var(--pk-ink-2);line-height:1.6;margin:0 0 10px;">' + (currentLang === "ko" ? c.summary_ko : c.summary_en) + '</p>' +
          '<a href="' + c.url + '" target="_blank" rel="noopener" style="font-size:12px;font-weight:700;color:var(--pk-brand);">' + (currentLang === "ko" ? "공정근로법·FWC 공식 기준 확인 (" : "View Official Fair Work / FWC Source (") + c.date + ') &rarr;</a>' +
        '</div>'
      );
    }).join("");
  }

  function updateDiagnosticBrief() {
    var d1 = calcDeadlineRouter();
    var d2 = calcRedundancySimulator();
    calcComplianceAudit();
    var d4 = calcVisaCrossover();

    var pre = document.getElementById("emp-diagnostic-brief-text");
    if (!hasInteracted || !d1) {
      if (pre) {
        pre.textContent = currentLang === "ko"
          ? "위 진단 항목에서 날짜·근속기간·비자 유형을 입력하거나 [예시 데이터 넣어보기] 버튼을 누르면 변호사 상담용 요약 브리프가 자동 생성됩니다. (공식 문의: enquiry@parkcolawyers.com / https://parklawyers.com.au/links/?lang=ko)"
          : "Enter your dismissal date, service details, and visa subclass above (or click [Load Sample Data]) to generate your structured legal consultation brief. (Official contact: enquiry@parkcolawyers.com / https://parklawyers.com.au/links/)";
      }
      return;
    }

    var roleLabel = currentMode === "employer"
      ? (currentLang === "ko" ? "고용주 / 인사담당자 (Employer / HR)" : "Employer / HR Representative")
      : (currentLang === "ko" ? "근로자 / 비자 소지자 (Employee / Visa Holder)" : "Employee / Visa Worker");

    var dTypeLabel = (DISMISSAL_LABELS[currentLang] && DISMISSAL_LABELS[currentLang][d1.dType]) || d1.dType;

    var line2Ko = d2
      ? "• 2. 법정 해고예고수당(Full Pay): " + d2.noticeWeeks + "주(" + formatAud(d2.noticePay) + ") / 정리해고수당(Base Pay): " + d2.redWeeks + "주(" + formatAud(d2.redPay) + ") / 부당해고 법정 배상상한(s 392 · 보장액 아님): " + formatAud(d2.maxUdComp)
      : "• 2. 급여·해고수당: 연속 근속기간 및 통상 주당 기본급 입력 필요";
    var line2En = d2
      ? "• 2. NES Notice (Full Pay): " + d2.noticeWeeks + " wks (" + formatAud(d2.noticePay) + ") / NES Redundancy (Base Pay): " + d2.redWeeks + " wks (" + formatAud(d2.redPay) + ") / s 392 Statutory Cap (not guaranteed): " + formatAud(d2.maxUdComp)
      : "• 2. NES Entitlements: Valid continuous service and ordinary weekly base pay required";

    var line3Ko = !d4
      ? "• 3. 비자 교차 점검: 경과 일수 확인 필요"
      : d4.nonSponsored
        ? "• 3. 체류 비자: " + d4.visaLabel + " (비스폰서 자유 이직 · 근로시간 조건 및 Subclass 408 보호 점검)"
        : "• 3. 체류 비자: " + d4.visaLabel + " · 퇴사 후 " + d4.days + "일 경과 (" + (d4.over180 ? "180일 유예 초과 · 긴급 점검 필요" : "180일 한도 잔여 " + d4.remain180 + "일") + ")";

    var line3En = !d4
      ? "• 3. Visa Crossover: Valid days elapsed required"
      : d4.nonSponsored
        ? "• 3. Visa Status: " + d4.visaLabel + " (Non-sponsored open work rights · work-hour & Subclass 408 review)"
        : "• 3. Visa Status: " + d4.visaLabel + " · " + d4.days + " days elapsed (" + (d4.over180 ? "OVER 180-DAY LIMIT · URGENT" : d4.remain180 + " days left of 180-day limit") + ")";

    var brief = currentLang === "ko"
      ? [
          "법무법인 박앤코 호주 고용법 · 스폰서십 교차 진단 요약",
          "• 수신: 법무법인 박앤코 박창민 대표변호사 (Legal Practitioner Director, Acc. Spec. Immi) & 박기성 변호사 (Associate · Employment Law) (enquiry@parkcolawyers.com / https://parklawyers.com.au/links/?lang=ko)",
          "• 의뢰인 구분: " + roleLabel,
          "• 1. FWC 21일 마감일(" + d1.stateCode + "): 보수적 권고일 " + d1.safeIso + " / 법정 최종 마감일 " + d1.deadlineIso + " (잔여 " + d1.diffDays + "일) / 유형: " + dTypeLabel,
          line2Ko,
          line3Ko,
          "• 요청 사항: 위 진단 내역을 바탕으로 FWC 구제 신청·해고 대응·체류 비자 보호 법률 자문을 요청합니다."
        ].join("\n")
      : [
          "Park & Co Lawyers · Australian Employment Law & Visa Crossover Diagnostic Brief",
          "• To: Chang Min Park (Legal Practitioner Director, Acc. Spec. Immi) & Kevin Park (Associate · Employment Law) (enquiry@parkcolawyers.com / https://parklawyers.com.au/links/)",
          "• Client Role: " + roleLabel,
          "• 1. FWC 21-Day Deadline (" + d1.stateCode + "): Safe Date " + d1.safeIso + " / Statutory Deadline " + d1.deadlineIso + " (" + d1.diffDays + " days remaining) / Type: " + dTypeLabel,
          line2En,
          line3En,
          "• Inquiry: Requesting formal legal representation and strategy review based on the above diagnostic parameters."
        ].join("\n");

    if (pre) pre.textContent = brief;

    var mailBtn = document.getElementById("btn-emp-mailto");
    if (mailBtn) {
      mailBtn.href = currentLang === "ko"
        ? "https://parklawyers.com.au/links/?lang=ko"
        : "https://parklawyers.com.au/links/";
      mailBtn.target = "_blank";
      mailBtn.rel = "noopener";
      mailBtn.onclick = function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(brief).catch(function () {});
        }
      };
    }
  }

  var cachedPollingStatus = null;
  var cachedAbfSummary = null;

  function getNormalizedAbfState() {
    var s = cachedAbfSummary || {
      total_sanctions: 1850,
      active_sanctions_count: 125,
      prohibited_employers_count: 1,
      by_obligation: {
        "2.84": 727,
        "2.86": 500,
        "2.83": 359,
        "2.79": 273,
        "2.82": 192
      },
      prohibited_employers: [
        {
          legal_name: "Eatalian Deli (WA) Pty Ltd",
          trading_name: "EATALIAN RISTORANTE",
          abn: "68660788885",
          state: "WA"
        }
      ]
    };
    var ob = s.by_obligation || {};
    var pe = (s.prohibited_employers && s.prohibited_employers[0]) || {};
    var peName = pe.legal_name || pe.business_name || pe.trading_name || "Eatalian Deli (WA) Pty Ltd";
    var peAbn = pe.abn || "68660788885";
    return {
      total: Number(s.total_sanctions || 1850),
      active: Number(s.active_sanctions_count || 125),
      prohibitedCount: Number(s.prohibited_employers_count || 1),
      reg279: Number(ob["2.79"] || ob["reg 2.79 (Ensure equivalent terms/conditions of employment)"] || 273),
      reg286: Number(ob["2.86"] || ob["reg 2.86 (Ensure worker works in nominated occupation)"] || 500),
      reg283: Number(ob["2.83"] || ob["reg 2.83 (Notify Home Affairs of events)"] || 359),
      peName: peName,
      peAbn: peAbn
    };
  }

  function renderAbfCrossoverSummary() {
    var body = document.getElementById("emp-abf-crossover-body");
    var heading = document.getElementById("emp-abf-crossover-heading");
    var abf = getNormalizedAbfState();

    if (heading) {
      heading.textContent = currentLang === "ko"
        ? "실시간 ABF 스폰서 행정제재(" + abf.total.toLocaleString() + "건 · 현행 " + abf.active + "건) & 이주근로자 고용금지 사업주(s 245AYM) 교차 경보"
        : "Live ABF Sponsor Sanctions (" + abf.total.toLocaleString() + " Records · " + abf.active + " Active Bars) & Prohibited Employers (s 245AYM) Alert";
    }
    if (!body) return;

    if (currentLang === "ko") {
      body.innerHTML =
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:10px;">' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-danger);font-weight:700;">ABF 스폰서 누적 제재 (s 140M)</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-danger);">' + abf.total.toLocaleString() + '건 <span style="font-size:12px;color:var(--pk-muted);">(현행 ' + abf.active + '건)</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-brand);font-weight:700;">급여·근로조건 위반 제재 (reg 2.79)</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-brand);">' + abf.reg279.toLocaleString() + '건 <span style="font-size:12px;color:var(--pk-muted);">+ 직무위반(reg 2.86) ' + abf.reg286.toLocaleString() + '건</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-danger);font-weight:700;">이주근로자 고용금지 선언 (s 245AYM)</div>' +
            '<div style="font-size:14.5px;font-weight:800;color:var(--pk-danger);">' + abf.prohibitedCount + '곳 (' + abf.peName + ')</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '• <strong>노동법 × 이민법 동시 단속 리스크:</strong> 공정근로법상 임금체불(s 327A)이나 부당해고 분쟁이 발생하면 호주 국경수비대(ABF)의 스폰서 의무 위반 조사(reg 2.79 동등 급여·근로조건 보장 위반 ' + abf.reg279 + '건 · reg 2.83 변동 미통보 ' + abf.reg283 + '건)로 연계됩니다. 스폰서 비용 전가(s 245AR) 등 중대 법 위반 시 <code>' + abf.peName + ' (ABN ' + abf.peAbn + ')</code> 사례와 같이 <strong>이주근로자 신규 고용이 법적으로 금지(s 245AYM)</strong>됩니다.' +
        '</div>';
    } else {
      body.innerHTML =
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:10px;">' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-danger);font-weight:700;">Total ABF Sponsor Sanctions (s 140M)</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-danger);">' + abf.total.toLocaleString() + ' <span style="font-size:12px;color:var(--pk-muted);">(' + abf.active + ' Active Bars)</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-brand);font-weight:700;">Salary/Terms Breaches (reg 2.79)</div>' +
            '<div style="font-size:18px;font-weight:800;color:var(--pk-brand);">' + abf.reg279.toLocaleString() + ' <span style="font-size:12px;color:var(--pk-muted);">+ Duties (reg 2.86): ' + abf.reg286.toLocaleString() + '</span></div>' +
          '</div>' +
          '<div style="background:#FFFFFF;border:1px solid var(--pk-line);padding:10px 12px;border-radius:8px;">' +
            '<div style="font-size:11px;color:var(--pk-danger);font-weight:700;">Prohibited Employers (s 245AYM)</div>' +
            '<div style="font-size:14.5px;font-weight:800;color:var(--pk-danger);">' + abf.prohibitedCount + ' (' + abf.peName + ')</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '• <strong>Dual Fair Work × ABF Enforcement Crossover:</strong> Fair Work underpayment (s 327A) or dismissal disputes routinely trigger ABF sponsor monitoring audits under <strong>reg 2.79 (' + abf.reg279 + ' salary/conditions sanctions)</strong> and <strong>reg 2.83 (' + abf.reg283 + ' failures to notify events)</strong>. Migrant worker sanctions expose employers to <strong>s 245AYM Prohibited Employer declarations</strong> (e.g., <code>' + abf.peName + ' · ABN ' + abf.peAbn + '</code>).' +
        '</div>';
    }
  }

  function renderEmpPollerMatrix() {
    var kpiGrid = document.getElementById("emp-poller-kpis");
    var tbody = document.getElementById("emp-poller-tbody");
    if (!kpiGrid || !tbody || !cachedPollingStatus) return;

    var hm = cachedPollingStatus.headline_metrics || {};
    var abf = getNormalizedAbfState();
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
        val: abf.total.toLocaleString() + " (" + abf.active + " Active)",
        sub: currentLang === "ko" ? "reg 2.79 급여위반 " + abf.reg279 + "건 · s 245AYM " + abf.prohibitedCount + "곳" : "reg 2.79 (" + abf.reg279 + ") · s 245AYM Prohibited (" + abf.prohibitedCount + ")"
      },
      {
        label: currentLang === "ko" ? "FWC 법정 접수 수수료 (reg 3.07)" : "FWC Statutory Filing Fee",
        val: hm.fwc_application_fee || "$92.70 (Form F2/F8/F89)",
        sub: currentLang === "ko" ? "소액청구 상한 $100,000 (s 548)" : "Small Claims Cap: $100,000 (s 548)"
      }
    ];

    kpiGrid.innerHTML = kpis.map(function (k) {
      return (
        '<div class="card" style="padding:14px;background:var(--pk-bg);border:1px solid var(--pk-line);">' +
          '<div style="font-size:11.5px;color:var(--pk-muted);font-weight:700;">' + k.label + '</div>' +
          '<div style="font-size:19px;font-weight:800;color:var(--pk-brand);margin:4px 0;">' + k.val + '</div>' +
          '<div style="font-size:11.5px;color:var(--pk-muted);">' + k.sub + '</div>' +
        '</div>'
      );
    }).join("");

    var sources = cachedPollingStatus.sources || [];
    tbody.innerHTML = sources.map(function (s) {
      var title = currentLang === "ko" ? (s.title_ko || s.title_en) : (s.title_en || s.title_ko);
      var figs = (s.extracted_figures || []).join(" · ") || "-";
      var kb = s.bytes ? Math.round(s.bytes / 1024).toLocaleString() + " KB" : "Live API";
      var method = s.method || "https-direct-live";
      var compBadge = s.compilation
        ? '<div style="margin-top:3px;"><span style="background:#EFF6FF;color:#1E3A8A;border:1px solid #BFDBFE;padding:1px 6px;border-radius:4px;font-size:10.5px;font-weight:700;">Compilation #' + s.compilation + ' (' + (s.register_id || "") + ') · Start ' + (s.effective_start || "") + '</span></div>'
        : "";
      var isLive = s.status === "verified_ok";
      var statusBadge = isLive
        ? '<span style="background:var(--pk-ok-bg);color:var(--pk-ok);border:1px solid #6EE7B7;padding:3px 8px;border-radius:999px;font-size:11.5px;font-weight:700;">✓ verified_ok (' + (s.http_status || 200) + ')</span>'
        : '<span style="background:var(--pk-warn-bg);color:var(--pk-warn);border:1px solid #FCD34D;padding:3px 8px;border-radius:999px;font-size:11.5px;font-weight:700;">↺ ' + (s.status || "cached_last_good") + '</span>';
      return (
        '<tr style="border-bottom:1px solid var(--pk-line);">' +
          '<td style="padding:11px 14px;">' +
            '<div style="font-weight:700;color:var(--pk-ink);">' + title + '</div>' +
            '<a href="' + s.url + '" target="_blank" rel="noopener" style="font-size:11.5px;color:var(--pk-brand);">' + s.url + ' &nearr;</a>' +
          '</td>' +
          '<td style="padding:11px 14px;font-size:12px;color:var(--pk-muted);">' + (s.citation || "") + compBadge + '</td>' +
          '<td style="padding:11px 14px;font-weight:700;color:var(--pk-brand);font-size:12.5px;">' + figs + '</td>' +
          '<td style="padding:11px 14px;font-family:monospace;font-size:11.5px;color:var(--pk-ink);">' +
            '<code>' + (s.sha256_prefix || "") + '</code><br/><span style="color:var(--pk-muted);">' + kb + ' (' + method + ')</span>' +
          '</td>' +
          '<td style="padding:11px 14px;">' + statusBadge + '</td>' +
        '</tr>'
      );
    }).join("");
  }

  function syncDynamicThresholdDom() {
    if (typeof document === "undefined") return;
    var fwcEl = document.getElementById("stat-val-fwc");
    if (fwcEl) fwcEl.textContent = dynamicThresholds.feeFmt;
    var capEl = document.getElementById("stat-val-cap");
    if (capEl) capEl.textContent = (currentLang === "ko" ? "26주 / " : "26 Wks / ") + dynamicThresholds.capFmt;
    if (typeof document.querySelectorAll === "function") {
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var k = el.getAttribute("data-i18n");
        if (
          k === "heroLead" || k === "lblSalaryBand" || k === "optUnderHit" ||
          k === "optOverHit" || k === "m2Desc" || k === "statSubCap"
        ) {
          var baseDict = currentLang === "en" ? EN_TRANSLATIONS : KO_TRANSLATIONS;
          if (baseDict[k]) {
            el.innerHTML = baseDict[k]
              .replace(/\$190,100/g, dynamicThresholds.hitFmt)
              .replace(/\$95,050/g, dynamicThresholds.capFmt)
              .replace(/\$92\.70/g, dynamicThresholds.feeFmt);
          }
        }
      });
    }
  }

  function applyPollingThresholds(data) {
    if (!data || typeof data !== "object") return dynamicThresholds;
    var th = data.thresholds || {};
    var hm = data.headline_metrics || {};

    var hitAud = Number(th.high_income_threshold_aud || 0);
    if (!hitAud && typeof hm.high_income_threshold === "string") {
      var mHit = /\$([0-9,]+)/.exec(hm.high_income_threshold);
      if (mHit) hitAud = parseInt(mHit[1].replace(/,/g, ""), 10) || 0;
    }
    if (hitAud > 0) {
      dynamicThresholds.hitAud = hitAud;
      dynamicThresholds.hitFmt = "$" + hitAud.toLocaleString("en-AU");
    }

    var capAud = Number(th.max_ud_compensation_aud || 0);
    if (!capAud && typeof hm.max_ud_compensation === "string") {
      var mCap = /\$([0-9,]+)/.exec(hm.max_ud_compensation);
      if (mCap) capAud = parseInt(mCap[1].replace(/,/g, ""), 10) || 0;
    }
    if (!capAud && hitAud > 0) {
      capAud = Math.floor(hitAud / 2);
    }
    if (capAud > 0) {
      dynamicThresholds.capAud = capAud;
      dynamicThresholds.capFmt = "$" + capAud.toLocaleString("en-AU");
    }

    var feeAud = Number(th.fwc_application_fee_aud || 0);
    if (!feeAud && typeof hm.fwc_application_fee === "string") {
      var mFee = /\$([0-9]+(?:\.[0-9]{1,2})?)/.exec(hm.fwc_application_fee);
      if (mFee) feeAud = parseFloat(mFee[1]) || 0;
    }
    if (feeAud > 0) {
      dynamicThresholds.feeAud = feeAud;
      dynamicThresholds.feeFmt = "$" + feeAud.toFixed(2);
    }

    syncDynamicThresholdDom();
    if (hasInteracted) {
      updateDiagnosticBrief();
    }
    return dynamicThresholds;
  }

  function resolveToolDeepLink(toolParam) {
    var key = String(toolParam || "").trim().toLowerCase();
    return TOOL_DEEPLINK_MAP[key] || null;
  }

  function applyToolDeepLink(toolParam) {
    var targetId = resolveToolDeepLink(toolParam);
    if (!targetId || typeof document === "undefined") return null;
    if (typeof document.querySelectorAll === "function") {
      document.querySelectorAll(".section-block").forEach(function (sec) {
        if (sec.classList && sec.classList.remove) sec.classList.remove("is-deeplink-active");
      });
    }
    var targetEl = document.getElementById(targetId);
    if (targetEl) {
      if (targetEl.classList && targetEl.classList.add) {
        targetEl.classList.add("is-deeplink-active");
      } else {
        targetEl.className = (targetEl.className || "") + " is-deeplink-active";
      }
      if (typeof targetEl.scrollIntoView === "function") {
        try {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (_) {
          targetEl.scrollIntoView();
        }
      }
    }
    return targetId;
  }

  var cachedEmpKnowledgeHub = null;

  function loadEmpKnowledgeHub() {
    if (typeof fetch !== "function") return;
    fetch("data/emp_knowledge_hub.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedEmpKnowledgeHub = data;
        renderEmpKnowledgeHub();
      })
      .catch(function () {});
  }

  var HUB_CAT_MAP = {
    "emp-dismissal-gp": ["emp-dismissal-gp", "emp-dismissal-21days"],
    "emp-wages-leave": ["emp-wages-leave", "emp-underpayment-super"],
    "emp-contracts-contractor": ["emp-contracts-contractor", "emp-contracts-restraints"],
    "emp-bullying-safety": ["emp-bullying-safety", "emp-bullying-workcover"],
    "emp-sponsor-visa-work": ["emp-sponsor-visa-work", "emp-visa-sponsorship", "emp-employer-fees"]
  };

  function renderEmpKnowledgeHub() {
    var bodyEl = document.getElementById("emp-hub-body");
    if (!bodyEl || !cachedEmpKnowledgeHub) return;
    var rawList = Array.isArray(cachedEmpKnowledgeHub.faq_items)
      ? cachedEmpKnowledgeHub.faq_items
      : (Array.isArray(cachedEmpKnowledgeHub.items) ? cachedEmpKnowledgeHub.items : null);
    if (!rawList) return;
    var isEn = currentLang === "en";
    var searchEl = document.getElementById("emp-hub-search");
    var catEl = document.getElementById("emp-hub-cat");
    if (searchEl) {
      searchEl.setAttribute(
        "placeholder",
        isEn
          ? "Search 48 Q&As (e.g. 21 days, F8A, Helensburgh, PIP, ABN, 482, Super)..."
          : "검색어 입력 (예: 21일, F8A, Helensburgh, PIP, ABN, 482, Super)..."
      );
    }
    var q = searchEl && searchEl.value ? searchEl.value.trim().toLowerCase() : "";
    var cat = catEl && catEl.value ? catEl.value : "all";
    var allowedCats = HUB_CAT_MAP[cat] || [cat];
    var items = rawList.filter(function (it) {
      var itemCat = it.category_slug || it.category || "";
      if (cat !== "all" && allowedCats.indexOf(itemCat) === -1) return false;
      if (!q) return true;
      var hay = [
        it.slug,
        it.title_ko || it.question_ko,
        it.title_en || it.question_en,
        it.summary_ko,
        it.summary_en,
        (it.key_points_ko || []).join(" "),
        (it.key_points_en || []).join(" ")
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!items.length) {
      bodyEl.innerHTML = '<div style="padding:14px;background:var(--pk-bg);border:1px solid var(--pk-line);border-radius:8px;font-size:13.5px;color:var(--pk-muted);">' +
        (isEn ? "No matching employment law Q&As found." : "검색 조건에 일치하는 고용법 실무 문답이 없습니다.") +
        '</div>';
      return;
    }

    var countBanner = '<div style="font-size:12.5px;font-weight:700;color:var(--pk-brand);margin-bottom:10px;">' +
      (isEn
        ? ("Showing " + items.length + " of " + rawList.length + " Employment Law Q&As")
        : ("전체 " + rawList.length + "개 문항 중 " + items.length + "개 표시")) +
      '</div>';

    var cards = items.map(function (it) {
      var qTxt = isEn ? (it.title_en || it.question_en || it.title_ko || it.question_ko) : (it.title_ko || it.question_ko);
      var sTxt = isEn ? (it.summary_en || it.summary_ko) : it.summary_ko;
      var kps = isEn ? (it.key_points_en || []) : (it.key_points_ko || []);
      var faqUrl = isEn
        ? (it.faq_url_en || ("https://faq.immispecialist.com/employment/q/" + encodeURIComponent(it.slug) + "?lang=en"))
        : (it.faq_url_ko || ("https://faq.immispecialist.com/employment/q/" + encodeURIComponent(it.slug) + "?lang=ko"));
      var kpHtml = kps.slice(0, 3).map(function (kp) {
        return '<li style="margin-bottom:4px;">' + kp + '</li>';
      }).join("");
      return (
        '<details style="background:#FFFFFF;border:1px solid var(--pk-line);border-radius:10px;padding:12px 14px;margin-bottom:8px;">' +
          '<summary style="cursor:pointer;font-weight:800;font-size:14px;color:var(--pk-ink);display:flex;justify-content:space-between;align-items:center;gap:10px;">' +
            '<span><code style="font-size:11.5px;color:var(--pk-brand);margin-right:6px;">' + it.slug.toUpperCase() + '</code>' + qTxt + '</span>' +
          '</summary>' +
          '<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--pk-line);font-size:13.2px;line-height:1.65;color:var(--pk-ink);">' +
            '<p style="margin:0 0 8px;">' + sTxt + '</p>' +
            (kpHtml ? '<ul style="margin:0 0 10px;padding-left:18px;color:var(--pk-muted);font-size:12.6px;">' + kpHtml + '</ul>' : '') +
            '<a href="' + faqUrl + '" target="_blank" rel="noopener" style="font-size:12.5px;font-weight:800;color:var(--pk-brand);text-decoration:none;">' +
              (isEn ? "Read Full Dual-Perspective Legal Guide on FAQ Portal ↗" : "공식 FAQ 포털에서 근로자·고용주 양방향 전문 보기 ↗") +
            '</a>' +
          '</div>' +
        '</details>'
      );
    }).join("");

    bodyEl.innerHTML = countBanner + cards;
  }

  function loadEmpPollingStatus() {
    if (typeof fetch !== "function") return;
    fetch("data/polling_status.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedPollingStatus = data;
        applyPollingThresholds(data);
        renderEmpPollerMatrix();
      })
      .catch(function () {});
    fetch("data/abf_sanctions_summary.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedAbfSummary = data;
        renderAbfCrossoverSummary();
        renderEmpPollerMatrix();
      })
      .catch(function () {});
  }

  function applyLanguage(lang, syncUrl) {
    currentLang = lang === "en" ? "en" : "ko";
    if (typeof document !== "undefined") {
      if (document.documentElement) document.documentElement.lang = currentLang;
      if (document.body) document.body.setAttribute("data-ui-lang", currentLang);
      var dict = currentLang === "en" ? EN_TRANSLATIONS : KO_TRANSLATIONS;
      if (dict.docTitle) document.title = dict.docTitle;
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var k = el.getAttribute("data-i18n");
        if (dict[k]) el.innerHTML = dict[k];
      });
      var vcTot = document.getElementById("vc-lbl-total");
      var vcTod = document.getElementById("vc-lbl-today");
      var vcVis = document.getElementById("vc-lbl-visitors");
      var vcBox = document.getElementById("visit-counter");
      if (vcTot) vcTot.textContent = currentLang === "en" ? "Total visits" : "누적 방문";
      if (vcTod) vcTod.textContent = currentLang === "en" ? "Today" : "오늘 방문";
      if (vcVis) vcVis.textContent = currentLang === "en" ? "Visitors" : "방문자";
      if (vcBox && vcBox.setAttribute) {
        vcBox.setAttribute(
          "title",
          currentLang === "en"
            ? "Click for daily visits & referral sources"
            : "클릭하면 일별 방문 추이와 유입 경로를 볼 수 있어요"
        );
      }
      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
      });
      document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
        var h = currentLang === "en" ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
        if (h) lnk.setAttribute("href", h);
      });
      if (syncUrl && typeof window !== "undefined" && window.history && window.history.replaceState) {
        try {
          var u = new URL(window.location.href);
          u.searchParams.set("lang", currentLang);
          window.history.replaceState({}, "", u.toString());
        } catch (_) {}
      }
      syncDynamicThresholdDom();
      renderAyubHelper();
      renderEmpFwcAuthorities();
      renderAbfCrossoverSummary();
      renderEmpPollerMatrix();
      renderEmpKnowledgeHub();
      updateDiagnosticBrief();
    }
  }

  function activateAndRecalculate() {
    hasInteracted = true;
    updateDiagnosticBrief();
  }

  function loadDemoSample() {
    var dInput = document.getElementById("emp-dismissal-date");
    if (dInput) dInput.value = ParkCoDates.todayBrisbaneIso();
    var stSel = document.getElementById("emp-state");
    if (stSel) stSel.value = "QLD";
    var mInput = document.getElementById("emp-service-months");
    if (mInput) mInput.value = "18";
    var empTypeEl = document.getElementById("red-employment-type");
    if (empTypeEl) empTypeEl.value = "permanent";
    var modeEl = document.getElementById("red-service-mode");
    if (modeEl) modeEl.value = "years";
    var ySel = document.getElementById("red-years");
    if (ySel) ySel.value = "3.5";
    var yExact = document.getElementById("red-service-years");
    if (yExact) yExact.value = "3.5";
    var wInput = document.getElementById("red-weekly-pay");
    if (wInput) wInput.value = "2200";
    var addInput = document.getElementById("red-notice-additions");
    if (addInput) addInput.value = "0";
    var udRemInput = document.getElementById("red-ud-weekly-remuneration");
    if (udRemInput) udRemInput.value = "";
    var ageSel = document.getElementById("red-age-45");
    if (ageSel) ageSel.value = "under45";
    var ageYrs = document.getElementById("red-age-years");
    if (ageYrs) ageYrs.value = "";
    var cDays = document.getElementById("cross-days-elapsed");
    if (cDays) cDays.value = "35";
    activateAndRecalculate();
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      initDefaultDate();
      syncRedundancyModeVisibility();

      var redYearsSel = document.getElementById("red-years");
      var redExactInput = document.getElementById("red-service-years");
      if (redYearsSel) {
        redYearsSel.addEventListener("change", function () {
          if (redExactInput && redYearsSel.value !== "") {
            redExactInput.value = redYearsSel.value;
          }
          activateAndRecalculate();
        });
      }
      if (redExactInput) {
        var syncExactToPreset = function () {
          if (redYearsSel) {
            var v = String(redExactInput.value || "").trim();
            var matched = false;
            if (redYearsSel.options) {
              for (var i = 0; i < redYearsSel.options.length; i++) {
                if (redYearsSel.options[i].value === v && v !== "") {
                  matched = true;
                  break;
                }
              }
            }
            redYearsSel.value = matched ? v : "";
          }
          activateAndRecalculate();
        };
        redExactInput.addEventListener("input", syncExactToPreset);
        redExactInput.addEventListener("change", syncExactToPreset);
      }

      var ageSelEl = document.getElementById("red-age-45");
      var ageExactEl = document.getElementById("red-age-years");
      if (ageSelEl) {
        ageSelEl.addEventListener("change", function () {
          if (ageExactEl) ageExactEl.value = "";
          activateAndRecalculate();
        });
      }
      if (ageExactEl) {
        ageExactEl.addEventListener("input", activateAndRecalculate);
        ageExactEl.addEventListener("change", activateAndRecalculate);
      }

      [
        "emp-dismissal-date", "emp-state", "emp-business-size", "emp-service-months", "emp-salary-band", "emp-dismissal-type",
        "red-employment-type", "red-business-size", "red-service-mode", "red-start-date", "red-end-date",
        "red-weekly-pay", "red-notice-additions", "red-ud-weekly-remuneration", "red-redeploy",
        "audit-contractor", "audit-pay", "audit-disconnect",
        "cross-visa-type", "cross-days-elapsed", "cross-issue"
      ].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener("input", activateAndRecalculate);
          el.addEventListener("change", activateAndRecalculate);
        }
      });

      ["ayub-comm-mode", "ayub-notice-subtype", "ayub-stated-date", "ayub-actual-date"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener("input", renderAyubHelper);
          el.addEventListener("change", renderAyubHelper);
        }
      });

      var ayubApplyBtn = document.getElementById("btn-ayub-apply");
      if (ayubApplyBtn) {
        ayubApplyBtn.addEventListener("click", function () {
          var res = renderAyubHelper();
          var dInput = document.getElementById("emp-dismissal-date");
          if (res && res.effectiveDateIso && dInput) {
            dInput.value = res.effectiveDateIso;
            activateAndRecalculate();
          }
        });
      }

      document.addEventListener("click", function (ev) {
        var t = ev.target && ev.target.closest ? ev.target.closest("#btn-emp-demo, .emp-demo-trigger") : null;
        if (t) {
          ev.preventDefault();
          loadDemoSample();
          return;
        }
        var icsBtn = ev.target && ev.target.closest ? ev.target.closest("#btn-emp-download-ics") : null;
        if (icsBtn) {
          ev.preventDefault();
          var d1 = lastComputedDeadline || calcDeadlineRouter();
          var icsContent = buildDeadlineIcs(d1, currentLang);
          if (icsContent && typeof Blob !== "undefined" && typeof URL !== "undefined" && URL.createObjectURL) {
            var blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "parkco-fwc-21day-deadline-" + (d1.deadlineIso || "reminder") + ".ics";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
          }
        }
      });

      var btnKo = document.getElementById("btn-lang-ko");
      var btnEn = document.getElementById("btn-lang-en");
      if (btnKo) btnKo.addEventListener("click", function () { applyLanguage("ko", true); });
      if (btnEn) btnEn.addEventListener("click", function () { applyLanguage("en", true); });

      var modeEmp = document.getElementById("mode-btn-employee");
      var modeBiz = document.getElementById("mode-btn-employer");
      var modeBanner = document.getElementById("active-mode-banner");
      if (modeEmp && modeBiz && modeBanner) {
        modeEmp.addEventListener("click", function () {
          currentMode = "employee";
          modeEmp.className = "pk-btn-cta";
          modeBiz.className = "pk-btn-ghost";
          modeBanner.setAttribute("data-i18n", "modeEmployeeDesc");
          modeBanner.innerHTML = currentLang === "ko" ? KO_TRANSLATIONS.modeEmployeeDesc : EN_TRANSLATIONS.modeEmployeeDesc;
          activateAndRecalculate();
        });
        modeBiz.addEventListener("click", function () {
          currentMode = "employer";
          modeBiz.className = "pk-btn-cta";
          modeEmp.className = "pk-btn-ghost";
          modeBanner.setAttribute("data-i18n", "modeEmployerDesc");
          modeBanner.innerHTML = currentLang === "ko" ? KO_TRANSLATIONS.modeEmployerDesc : EN_TRANSLATIONS.modeEmployerDesc;
          activateAndRecalculate();
        });
      }

      var copyBtn = document.getElementById("btn-emp-copy");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          var pre = document.getElementById("emp-diagnostic-brief-text");
          if (pre && navigator.clipboard) {
            navigator.clipboard.writeText(pre.textContent || "");
            copyBtn.textContent = currentLang === "ko" ? "✅ 클립보드 복사 완료" : "✅ Copied to Clipboard";
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
        applyLanguage("en", false);
      } else {
        applyLanguage("ko", false);
      }
      var toolParam = params.get("tool");
      if (toolParam) {
        applyToolDeepLink(toolParam);
      }
      var hubSearch = document.getElementById("emp-hub-search");
      var hubCat = document.getElementById("emp-hub-cat");
      if (hubSearch) hubSearch.addEventListener("input", renderEmpKnowledgeHub);
      if (hubCat) hubCat.addEventListener("change", renderEmpKnowledgeHub);
      loadEmpPollingStatus();
      loadEmpKnowledgeHub();
    });
  }

  root.EMP_NAVIGATOR = {
    ParkCoDates: ParkCoDates,
    activateAndRecalculate: activateAndRecalculate,
    loadDemoSample: loadDemoSample,
    calcDeadlineRouter: calcDeadlineRouter,
    calcRedundancySimulator: calcRedundancySimulator,
    calcComplianceAudit: calcComplianceAudit,
    calcVisaCrossover: calcVisaCrossover,
    computeAyubEffectiveDate: computeAyubEffectiveDate,
    renderAyubHelper: renderAyubHelper,
    buildDeadlineIcs: buildDeadlineIcs,
    applyPollingThresholds: applyPollingThresholds,
    resolveToolDeepLink: resolveToolDeepLink,
    applyToolDeepLink: applyToolDeepLink,
    getDynamicThresholds: function () { return dynamicThresholds; },
    applyLanguage: applyLanguage,
    setAbfSummaryForTest: function (d) {
      cachedAbfSummary = d;
      renderAbfCrossoverSummary();
    }
  };
})(typeof window !== "undefined" ? window : globalThis);

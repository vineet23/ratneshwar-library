"use client";

import React, { useState, useEffect, useRef } from "react";

// Main component for the library's homepage
export default function LibraryPage() {
  // State to manage the current language (defaults to Marathi)
  const [language, setLanguage] = useState("mr");
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Translations object containing both English and Marathi content
  const translations = {
    en: {
      // ... (English translations from the original HTML)
      libraryName: "Shri Ratneshwar Granthalaya",
      navAbout: "About Us",
      navGallery: "Gallery",
      navVisit: "Visit",
      navAppeal: "Support Us",
      heroTitle: "A new chapter.",
      heroSubtitle:
        "'No parties, no factions, no language! Libraries for the people!'",
      heroExplore: "Discover Our Journey",
      aboutTitle: "Our Story",
      aboutIntro:
        "Warm Greetings! With the motto, 'There should be no party, faction, or language here! Libraries should be run for the people!', we have been progressively developing 'Shri Ratneshwar Granthalaya' since 1976. Today, we have brought it into its own magnificent building, delivering an excellent collection of books to the people. This is not self-praise but a testament to our recognition at the government level and the overwhelming response from our readers.",
      aboutKulkarni:
        "The late Kishor Shankar Kulkarni was the president at that time. While running his grocery business, he managed the library with utmost sincerity and diligence. Today, his son, Mr. Umesh Kishor Kulkarni, is advancing the Shri Ratneshwar Granthalaya at a very rapid pace.",
      aboutQuote1:
        "'A small sapling planted at the door, its vine reached the sky.'",
      aboutBuilding:
        "Bringing this saying to life, we have succeeded in constructing our own building. A 1200 sq. ft. library and an adjacent 1200 sq. ft. auditorium, named after the late D. M. Joshi, are available to the public. All kinds of meetings and events are held here, with a seating capacity of 200. We are blessed with proactive directors and dedicated staff.",
      statYear: "Established In",
      statBooks: "Book Collection",
      statArea: "Sq. Ft. Area",
      statAmbulanceTitle: "Ambulance Service",
      statAmbulanceDesc: "First library to offer this service",
      journeyTitle: "The Library's Journey...",
      timeline1976Title: "The Beginning",
      timeline1976Desc:
        "Established on Jan 26, 1976, as a rural 'D' class library.",
      timeline1986Title: "A Step Forward",
      timeline1986Desc:
        "Upgraded to 'C' class with the help of local and Mumbai-based villagers.",
      timeline1997Title: "New Initiatives",
      timeline1997Desc:
        "Promoted to 'B' class, launching several new programs for readers.",
      timeline2013Title: "A Dream Realized: New Building",
      timeline2013Desc:
        "Construction began on a new, well-equipped building, costing approx. ₹43 Lakhs, funded by generous donors.",
      philosophyTitle: "Libraries: The Need of the Hour",
      philosophyQuote1: `"It cannot be stolen by a thief, nor seized by a king. It is not divisible among brothers, nor is it burdensome. The more it is spent, the more it ever grows. The wealth of knowledge is the greatest of all wealth."`,
      philosophyP1:
        "According to this famous Sanskrit verse, the extraordinary importance of books is seen as the sole means of acquiring the wealth of knowledge. Education is a lifelong, continuous process. In this process, guidance is often needed to choose between right and wrong. At such critical moments, books fulfill the role of a guide, as the Urdu poet said, 'Books want to tell you something.'",
      philosophyP2:
        "Human life is full of ups and downs. The mental hunger for reading and knowledge is satisfied by the library. It dispels the darkness of ignorance and makes the path of human life smoother. In the company of books, one's vocabulary expands, comprehension develops, and the power of critical thinking is acquired.",
      philosophyQuote2: `"The knowledge that is only in books and the wealth that is in the hands of others, are of no use when the time comes for action."`,
      philosophyP3:
        "Considering this Sanskrit verse, knowledge that is not internalized from books is not useful to us. Therefore, one must resolve to make the maximum use of the library, contribute to its growth, and make it well-equipped.",
      appealTitle: "An Appeal for Cooperation",
      appealP1:
        "Times are changing. The current generation of youth uses mobiles, laptops, and computers extensively for reading. In such a situation, it is essential for the library to be updated as well. Therefore, we are appealing for your financial support. Please cooperate.",
      appealP2:
        "We have all the necessary approvals for development, such as Registration Certificate, PAN, 12A, 80G certificate, and CSR certificate.",
      galleryTitle: "A Glimpse Inside",
      galleryDesc:
        "Every corner is crafted to inspire curiosity and welcome our community.",
      visitTitle: "Ready for your visit.",
      visitHours: "Opening Hours",
      visitMonFri: "Mon - Fri",
      visitSatSun: "Sat - Sun",
      visitAddress: "Address",
      addressLine: "Kasba Dhamanse, Tal. Rajapur, Dist. Ratnagiri, Maharashtra",
      footerLibraryName: "Shri Ratneshwar Granthalaya",
      footerSubtitle: "A legacy of knowledge, for generations.",
      footerQuickLinks: "Quick Links",
      footerAbout: "About Us",
      footerGallery: "Gallery",
      footerFollow: "Follow Us",
      footerRights: "© 2025 Shri Ratneshwar Granthalaya. All Rights Reserved.",
    },
    mr: {
      // ... (Marathi translations from the original HTML)
      libraryName: "श्री रत्नेश्वर ग्रंथालय",
      navAbout: "आमच्याबद्दल",
      navGallery: "गॅलरी",
      navVisit: "भेट द्या",
      navAppeal: "सहकार्य करा",
      heroTitle: "एक नवीन अध्याय.",
      heroSubtitle: "'इथे पक्ष उपपक्ष भाषा नसावी! जनासाठी ग्रंथालये चालवावी!'",
      heroExplore: "आमचा प्रवास जाणून घ्या",
      aboutTitle: "आमची कहाणी",
      aboutIntro:
        "सप्रेम नमस्कार ! 'इथे पक्ष उपपक्ष भाषा नसावी! जनासाठी ग्रंथालये चालवावी!' हे ब्रीदवाक्य घेऊन आम्ही सन १९७६ पासून 'श्री रत्नेश्वर ग्रंथालयाची' उत्तरोत्तर प्रगती करत आज स्वमालकीच्या दिमाखदार वास्तूत आणून उत्तम ग्रंथसंपदा लोकांपर्यंत पोचवली आहे. ही स्वःस्तुती नसून ती शासकीयस्तरावर आणि वाचकांच्या प्रतिसादाची उत्तम पोचपावती आहे.",
      aboutKulkarni:
        "कै. किशोर शंकर कुळकर्णी हे तत्कालीन अध्यक्ष होत. त्यांनी आपला किराणा व्यवसाय चालवत अतिशय प्रामाणिकपणे ग्रंथालय कसोशीने चालवले. आज त्यांचे सुपुत्र श्री. उमेश किशोर कुळकर्णी हे अतिशय वेगवान पद्धतीने श्री रत्नेश्वर ग्रंथालयाचा उत्कर्ष करीत आहेत.",
      aboutQuote1: "'इवलेसे रोप लावियले दारी। त्याचा वेलू गेला गगनावरी ।।'",
      aboutBuilding:
        "या उक्तीचा प्रत्यय आणीत आज स्वमालकीची वास्तू निर्माण करण्यात यश आले आहे. १२०० वर्ग आकाराचे ग्रंथालय आणि वल १२०० वर्ग आकाराचे सभागृह कै. डी. एम. जोशी नावाने लोकांसाठी उपलब्ध आहे. इथे सर्व प्रकारच्या सभा, कार्यक्रम होत असतात. याची बैठक व्यवस्था २०० जणांसाठी आहे. कार्यतत्पर संचालक आणि कर्तव्यदक्ष कर्मचारी आमच्या ग्रंथालयास लाभले आहेत.",
      statYear: "स्थापना वर्ष",
      statBooks: "ग्रंथ संपदा",
      statArea: "चौ. फूट जागा",
      statAmbulanceTitle: "रुग्णवाहिका",
      statAmbulanceDesc: "सेवा देणारे पहिले ग्रंथालय",
      journeyTitle: "ग्रंथालयाची घौडदौड...",
      timeline1976Title: "स्थापना",
      timeline1976Desc:
        "२६ जानेवारी १९७६ रोजी ग्रामीण 'ड' वर्गात ग्रंथालयाची सुरुवात झाली.",
      timeline1986Title: "प्रगतीचा टप्पा",
      timeline1986Desc:
        "स्थानिक आणि मुंबईकर ग्रामस्थांच्या सहकार्याने ग्रंथालय 'क' वर्गात रूपांतरित झाले.",
      timeline1997Title: "नवीन उपक्रम",
      timeline1997Desc:
        "'ब' वर्गात दर्जावाढ झाली आणि वाचकांसाठी अनेक नवीन उपक्रम सुरू झाले.",
      timeline2013Title: "स्वप्नपूर्ती: नवीन वास्तू",
      timeline2013Desc:
        "दानशूर व्यक्तींच्या मदतीने, सुमारे ४३ लाख रुपये खर्चून सुसज्ज इमारतीचे बांधकाम सुरू झाले.",
      philosophyTitle: "ग्रंथालये काळाची गरज",
      philosophyQuote1: `न चोरहायें न राजहायें। न भातृ‌भाज्यं न च भारकारी। व्ययकृते वर्धत एव नित्यं । विद्याधनं सर्वधनप्रधानं ।।`,
      philosophyP1:
        "या प्रसिद्ध संस्कृत वचनानुसार विद्यारुपी धन प्राप्त करण्याचे एकमेव साधन म्हणून मंथाचे अलौकिक महत्व दिसून येते. शिक्षण प्रक्रियेचा विचार करता ती आजन्म अखंड अशी चालणारी प्रक्रिया आहे. या प्रक्रियेत योग्यायोग्यतेची निवड करण्यासाठी अनेक वेळा मार्गदर्शनाची गरज असते. नेमक्या अशा प्रसंगी 'पुस्तके काहीतरी सांगू इच्छितात' या उक्तीनुसार मार्गदर्शनाची भूमिका ग्रंथ पुर्णत्वास नेतात.",
      philosophyP2:
        "माणसाला अन्नाच्या भूकेप्रमाणे मानसिक भूकही असते. अशी वाचनरुपी, ज्ञानरुपी भूक भागविण्याचा प्रयत्न ग्रंथालयामार्फत केला जातो. मानवाचा अज्ञानरुपी अंध:कार नाहिसा करून मानवी जीवनाचा मार्ग सुकर करतो. ग्रंथांच्या सानिध्यात मानवाच्या शब्दसंपत्तीत भर पडते. आकलन शक्तीचा विकास होतो व चौकस विचारांची शक्ती प्राप्त होते.",
      philosophyQuote2: `पुस्तकेषु च या विद्या परहस्तेषु यद्धनम् । उत्पन्नेषु च कार्येषु न सा विद्या न तद्धनम् ॥`,
      philosophyP3:
        "या संस्कृत वचनाचा विचार करून पुस्तकातील आत्मसात न केलेली विद्या आपणास उपयोगी पडत नाही यासाठी आपल्याला प्राप्त झालेल्या ग्रंथालयाच्या जास्तीत जास्त उपयोग करून त्याची वृद्धी करण्यात व सुसज्ज बनविण्याच्या कामी मी सदैव प्रयत्न करीन असा मनाचा ठाम निश्चय केला पाहिजे.",
      appealTitle: "सहकार्याचे आवाहन",
      appealP1:
        "काळ बदलत चालला आहे. आताचा तरुणवर्ग वाचनासाठी मोबाईल, लॅपटॉप, कॉम्प्युटर्सचा वापर फार मोठ्या प्रमाणावर करताना दिसतो. अशा परिस्थितीत ग्रंथालयसुद्धा अपडेट असणे गरजेचे आहे म्हणून आम्ही आपल्यासमोर आर्थिक सहकार्याची अपेक्षा करीत आहोत. कृपया सहकार्य करावे.",
      appealP2:
        "विकासात्मक प्रक्रियेसाठी लागणाऱ्या मान्यता जसे - नोंदणी प्रमाणपत्र, पॅन, 12A, 80G certificate, CSR अशी प्रमाणपत्रे आज आमच्याकडे उपलब्ध आहेतच.",
      galleryTitle: "आमचे काही क्षण",
      galleryDesc:
        "प्रत्येक कोपरा उत्सुकता निर्माण करण्यासाठी आणि आमच्या समुदायाचे स्वागत करण्यासाठी तयार केला आहे.",
      visitTitle: "तुमच्या भेटीसाठी सज्ज.",
      visitHours: "उघडण्याची वेळ",
      visitMonFri: "सोम - शुक्र",
      visitSatSun: "शनि - रवि",
      visitAddress: "पत्ता",
      addressLine: "कसबा धामणसे, ता. राजापूर, जि. रत्नागिरी, महाराष्ट्र",
      footerLibraryName: "श्री रत्नेश्वर ग्रंथालय",
      footerSubtitle: "ज्ञानाचा वारसा, पिढ्यानपिढ्या.",
      footerQuickLinks: "द्रुत दुवे",
      footerAbout: "आमच्याबद्दल",
      footerGallery: "गॅलरी",
      footerFollow: "आम्हाला फॉलो करा",
      footerRights: "© 2025 श्री रत्नेश्वर ग्रंथालय. सर्व हक्क राखीव.",
    },
  };

  // Helper function to get the correct translation string
  const t = (key) => translations[language][key] || key;

  // Effect to set language from localStorage on initial load
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage") || "mr";
    setLanguage(savedLang);
  }, []);

  // Effect to handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Close mobile menu on navigation
          if (isMenuOpen) setIsMenuOpen(false);
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [isMenuOpen]);

  // Effect to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  return (
    <>
      {/* It's best practice in Next.js to include global styles and fonts in your layout.js file. 
                For self-containment, these styles are included here. */}
      <style>{`
                body {
                    font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
                    background-color: #f8f9fa;
                    color: #1f1f1f;
                }
                .reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.8s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1);
                }
                .reveal.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .hero-text-glow { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
                header {
                    background-color: rgba(248, 249, 250, 0.8);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                .section-headline { font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; font-weight: 800; letter-spacing: -0.05em; }
                .section-subheadline { font-size: clamp(1.1rem, 2vw, 1.25rem); line-height: 1.6; color: #5f6368; }
                .lang-btn.active { font-weight: bold; color: #2563eb; cursor: default; }
                .content-prose { line-height: 1.8; color: #3c4043; }
                .content-prose h3 { font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #1f1f1f; }
                .content-prose blockquote { border-left: 4px solid #4285F4; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #5f6368; }
            `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200/60">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 tracking-tight"
          >
            {t("libraryName")}
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {t("navAbout")}
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {t("navGallery")}
            </a>
            <a
              href="#visit"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {t("navVisit")}
            </a>
            <div className="flex items-center border-l border-gray-300 pl-4 ml-2">
              <button
                onClick={() => handleLanguageChange("mr")}
                className={`lang-btn px-2 text-sm text-gray-500 hover:text-blue-600 ${
                  language === "mr" ? "active" : ""
                }`}
              >
                मराठी
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`lang-btn px-2 text-sm text-gray-500 hover:text-blue-600 ${
                  language === "en" ? "active" : ""
                }`}
              >
                English
              </button>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
            >
              {t("navAppeal")}
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden px-6 pb-4`}
        >
          <a
            href="#about"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            {t("navAbout")}
          </a>
          <a
            href="#gallery"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            {t("navGallery")}
          </a>
          <a
            href="#visit"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            {t("navVisit")}
          </a>
          <div className="flex items-center justify-center border-t border-gray-200 pt-4 mt-4">
            <button
              onClick={() => handleLanguageChange("mr")}
              className={`lang-btn px-2 text-sm text-gray-500 hover:text-blue-600 ${
                language === "mr" ? "active" : ""
              }`}
            >
              मराठी
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`lang-btn px-2 text-sm text-gray-500 hover:text-blue-600 ${
                language === "en" ? "active" : ""
              }`}
            >
              English
            </button>
          </div>
          <a
            href="#contact"
            className="block mt-4 bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700"
          >
            {t("navAppeal")}
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center text-white p-6 relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-woman-walking-in-a-library-42928-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="z-10 reveal">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter hero-text-glow">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              {t("heroSubtitle")}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#about"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform hover:scale-105 duration-300"
              >
                {t("heroExplore")}
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="pt-24 pb-16 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="reveal text-center">
              <h2 className="section-headline text-gray-900">
                {t("aboutTitle")}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto mt-12 content-prose">
              <div className="reveal">
                <p>{t("aboutIntro")}</p>
                <p>{t("aboutKulkarni")}</p>
              </div>
            </div>

            {/* Highlight Cards Section */}
            <div className="max-w-5xl mx-auto my-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {/* Card 1: Year */}
              <div className="reveal bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5"
                  />
                </svg>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  1976
                </h3>
                <p className="text-sm text-gray-500 mt-1">{t("statYear")}</p>
              </div>
              {/* Card 2: Books */}
              <div
                className="reveal bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                style={{ transitionDelay: "100ms" }}
              >
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  16,400+
                </h3>
                <p className="text-sm text-gray-500 mt-1">{t("statBooks")}</p>
              </div>
              {/* Card 3: Area */}
              <div
                className="reveal bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                style={{ transitionDelay: "200ms" }}
              >
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  2,400
                </h3>
                <p className="text-sm text-gray-500 mt-1">{t("statArea")}</p>
              </div>
              {/* Card 4: Ambulance */}
              <div
                className="reveal bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                style={{ transitionDelay: "300ms" }}
              >
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t("statAmbulanceTitle")}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t("statAmbulanceDesc")}
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto content-prose">
              <div className="reveal">
                <blockquote>{t("aboutQuote1")}</blockquote>
                <p>{t("aboutBuilding")}</p>
              </div>

              {/* Journey Timeline Section */}
              <div className="reveal mt-16">
                <h3 className="text-center">{t("journeyTitle")}</h3>
                <div className="relative mt-12 max-w-3xl mx-auto">
                  <div
                    className="absolute left-6 md:left-1/2 -ml-px w-0.5 h-full bg-blue-200"
                    aria-hidden="true"
                  ></div>
                  <div className="space-y-16">
                    {/* Timeline Item 1 */}
                    <div className="relative reveal">
                      <div className="md:flex items-start">
                        <div className="absolute top-0 left-6 -ml-5 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow">
                            <span className="text-2xl font-bold">’76</span>
                          </div>
                        </div>
                        <div className="pl-16 md:pl-0 md:w-1/2 md:pr-8">
                          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm md:text-right">
                            <h4 className="font-bold text-lg text-gray-900">
                              {t("timeline1976Title")}
                            </h4>
                            <p className="text-gray-600 mt-1">
                              {t("timeline1976Desc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="relative reveal">
                      <div className="md:flex items-start">
                        <div className="absolute top-0 left-6 -ml-5 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow">
                            <span className="text-2xl font-bold">’86</span>
                          </div>
                        </div>
                        <div className="pl-16 md:pl-0 md:w-1/2 md:ml-auto md:pl-8">
                          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-lg text-gray-900">
                              {t("timeline1986Title")}
                            </h4>
                            <p className="text-gray-600 mt-1">
                              {t("timeline1986Desc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ... More timeline items ... */}
                    <div className="relative reveal">
                      <div className="md:flex items-start">
                        <div className="absolute top-0 left-6 -ml-5 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow">
                            <span className="text-2xl font-bold">’97</span>
                          </div>
                        </div>
                        <div className="pl-16 md:pl-0 md:w-1/2 md:pr-8">
                          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm md:text-right">
                            <h4 className="font-bold text-lg text-gray-900">
                              {t("timeline1997Title")}
                            </h4>
                            <p className="text-gray-600 mt-1">
                              {t("timeline1997Desc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative reveal">
                      <div className="md:flex items-start">
                        <div className="absolute top-0 left-6 -ml-5 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow">
                            <span className="text-2xl font-bold">’13</span>
                          </div>
                        </div>
                        <div className="pl-16 md:pl-0 md:w-1/2 md:ml-auto md:pl-8">
                          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-lg text-gray-900">
                              {t("timeline2013Title")}
                            </h4>
                            <p className="text-gray-600 mt-1">
                              {t("timeline2013Desc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal mt-24">
                <h3 className="text-center text-3xl font-bold mb-8">
                  {t("philosophyTitle")}
                </h3>
                <div className="my-8 bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-md">
                  <blockquote className="border-0 p-0 m-0 text-gray-700 italic text-lg">
                    {t("philosophyQuote1")}
                  </blockquote>
                </div>
                <p>{t("philosophyP1")}</p>
                <p>{t("philosophyP2")}</p>
                <div className="my-8 bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-md">
                  <blockquote className="border-0 p-0 m-0 text-gray-700 italic text-lg">
                    {t("philosophyQuote2")}
                  </blockquote>
                </div>
                <p>{t("philosophyP3")}</p>
              </div>

              <div className="reveal mt-12 bg-white p-8 rounded-xl border border-gray-200 shadow-lg text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold">{t("appealTitle")}</h3>
                <p className="mt-2 text-gray-700">{t("appealP1")}</p>
                <p className="mt-4 text-sm text-gray-500">{t("appealP2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="section-headline text-gray-900">
                {t("galleryTitle")}
              </h2>
              <p className="section-subheadline mt-6 max-w-3xl mx-auto">
                {t("galleryDesc")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="grid gap-4">
                <div className="reveal">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="library interior"
                  />
                </div>
                <div className="reveal" style={{ transitionDelay: "100ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="books on shelf"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="reveal" style={{ transitionDelay: "200ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/2908975/pexels-photo-2908975.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="library aisle"
                  />
                </div>
                <div className="reveal" style={{ transitionDelay: "300ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="person reading"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="reveal" style={{ transitionDelay: "400ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="library architecture"
                  />
                </div>
                <div className="reveal" style={{ transitionDelay: "500ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="student in library"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="reveal" style={{ transitionDelay: "600ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
                    alt="books close up"
                  />
                </div>
                <div className="reveal" style={{ transitionDelay: "700ms" }}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="old books"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section id="visit" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="section-headline text-gray-900">
                {t("visitTitle")}
              </h2>
              <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("visitHours")}
                  </h3>
                  <div className="mt-4 space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>{t("visitMonFri")}</span>{" "}
                      <strong>9:00 AM - 8:00 PM</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>{t("visitSatSun")}</span>{" "}
                      <strong>10:00 AM - 6:00 PM</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("visitAddress")}
                  </h3>
                  <p className="mt-4 text-gray-600">{t("addressLine")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">{t("footerLibraryName")}</h3>
              <p className="mt-2 text-gray-400">{t("footerSubtitle")}</p>
            </div>
            <div>
              <h4 className="font-semibold">{t("footerQuickLinks")}</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    {t("footerAbout")}
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-400 hover:text-white">
                    {t("footerGallery")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">{t("footerFollow")}</h4>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>
              &copy; 2025 {t("footerLibraryName")}. {t("footerRights")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

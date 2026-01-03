import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        events: "Events",
        about: "About",
        contact: "Contact",
      },

      home: {
        hero: {
          title: "Welcome to Earth Angels of Finland",
          subtitle:
            "Celebrate the achievements of people of color and marginalized communities through education, events, and cultural exchange.",
          ctaEvents: "Browse Events",
          ctaLearnMore: "Learn More",
        },

        mission: {
          kicker: "OUR MISSION",
          title:
            "Building confidence, belonging, and understanding through education and events",
          body:
            "Founded in 2003, Earth Angels of Finland works to improve the well-being of immigrants and marginalized communities by educating people of all ages about the achievements of people of color—bringing untold history and contributions to the forefront through high-quality yearly programs like “Say It Loud.”",
        },

        impact: {
          title: "What We Do",
          subtitle:
            "Earth Angels of Finland brings people together through education and events that celebrate achievements and strengthen belonging.",
          items: [
            {
              title: "Community Well‑Being",
              body:
                "Supporting the well‑being of immigrants and marginalized communities through connection, visibility, and shared cultural understanding.",
            },
            {
              title: "Education & Awareness",
              body:
                "Educating people of all ages about the achievements of people of color—helping restore histories that have been diminished or erased.",
            },
            {
              title: 'Yearly “Say It Loud” Events',
              body:
                "Producing high‑quality annual programs that spotlight untold contributions and inspire pride, confidence, and acceptance across communities.",
            },
          ],
        },

        join: {
          title: "Join our mission. Educate, Celebrate, Empower. Get Started Today.",
          emailLabel: "Email:",
          callLabel: "Call Anytime:",
          ctaEvents: "BROWSE EVENTS",
          ctaGetInvolved: "GET INVOLVED",
        },
      },

      footer: {
        meetUs: {
          title: "Meet Us",
          about: "About Us",
          events: "Events",
          contact: "Contact",
        },
        getInvolved: {
          title: "Get Involved",
          volunteer: "Volunteer",
          partner: "Partner With Us",
          sponsor: "Sponsor an Event",
        },
        contact: {
          title: "Contact Us",
          address: "Nunnankatu 4, Turku, Finland",
        },
        bottom: {
          copyright: "Earth Angels of Finland. All Rights Reserved.",
          privacy: "Privacy Policy",
          terms: "Terms",
        },
      },
    },
  },

  fi: {
    translation: {
      nav: {
        home: "Etusivu",
        events: "Tapahtumat",
        about: "Tietoa",
        contact: "Yhteystiedot",
      },

      home: {
        hero: {
          title: "Tervetuloa Earth Angels Finlandiin",
          subtitle:
            "Juhlistamme värillisten ihmisten ja marginalisoitujen yhteisöjen saavutuksia koulutuksen, tapahtumien ja kulttuurivaihdon kautta.",
          ctaEvents: "Selaa tapahtumia",
          ctaLearnMore: "Lue lisää",
        },

        mission: {
          kicker: "MISSIOMME",
          title:
            "Rakennamme itseluottamusta, osallisuutta ja ymmärrystä koulutuksen ja tapahtumien kautta",
          body:
            "Vuonna 2003 perustettu Earth Angels of Finland parantaa maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia kouluttamalla kaikenikäisiä värillisten ihmisten saavutuksista sekä tuomalla kertomattoman historian ja panoksen esiin laadukkaiden vuosittaisten ohjelmien, kuten “Say It Loud”, kautta.",
        },

        impact: {
          title: "Mitä teemme",
          subtitle:
            "Earth Angels of Finland tuo ihmiset yhteen koulutuksen ja tapahtumien kautta, jotka juhlistavat saavutuksia ja vahvistavat osallisuutta.",
          items: [
            {
              title: "Yhteisön hyvinvointi",
              body:
                "Tuemme maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia yhteyden, näkyvyyden ja kulttuurisen ymmärryksen avulla.",
            },
            {
              title: "Koulutus ja tietoisuus",
              body:
                "Koulutamme kaikenikäisiä värillisten ihmisten saavutuksista ja autamme palauttamaan historiaa, jota on vähätelty tai pyyhitty pois.",
            },
            {
              title: 'Vuosittaiset “Say It Loud” -tapahtumat',
              body:
                "Tuotamme korkeatasoisia vuosittaisia ohjelmia, jotka nostavat esiin kertomattomia saavutuksia ja vahvistavat ylpeyttä, itseluottamusta ja hyväksyntää.",
            },
          ],
        },

        join: {
          title: "Tule mukaan missioon. Opeta, juhlista, voimaannuta. Aloita jo tänään.",
          emailLabel: "Sähköposti:",
          callLabel: "Soita milloin vain:",
          ctaEvents: "SELAa TAPAHTUMIA",
          ctaGetInvolved: "TULE MUKAAN",
        },
      },

      footer: {
        meetUs: {
          title: "Tutustu",
          about: "Tietoa meistä",
          events: "Tapahtumat",
          contact: "Yhteystiedot",
        },
        getInvolved: {
          title: "Osallistu",
          volunteer: "Vapaaehtoiseksi",
          partner: "Yhteistyökumppaniksi",
          sponsor: "Sponsoroi tapahtuma",
        },
        contact: {
          title: "Ota yhteyttä",
          address: "Nunnankatu 4, Turku, Suomi",
        },
        bottom: {
          copyright: "Earth Angels of Finland. Kaikki oikeudet pidätetään.",
          privacy: "Tietosuojakäytäntö",
          terms: "Käyttöehdot",
        },
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;

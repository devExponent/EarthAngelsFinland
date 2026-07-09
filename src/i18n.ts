
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
          title: "Welcome to Earth Angels of Finland RY",
          subtitle:
            "Celebrate the achievements of marginalised people of color through education, events, and cultural exchanges.",
          ctaEvents: "Browse Events",
          ctaLearnMore: "Learn More",
        },

        mission: {
  kicker: "OUR MISSION",
  title: "Building Confidence, Belonging, and Understanding through Educational Events",
  body:
    "Founded in 2003 in Helsinki, Earth Angels of Finland ry, works to improve the well-being of immigrants and marginalized communities through education, visibility, and cultural exchange. We educate immigrants, students, youth, and indigenous Finnish people of all ages about the achievements of people of color. Our objective is to bring untold history and contributions to the next generation.\n\nThrough our yearly programs like “Say It Loud, Black History Month, Juneteenth, International Open Mic Competition, along with various exhibitions and workshops”  we highlight the legacies of our ancestors and descendants affected by the Transatlantic slave trade. Sharing these achievements strengthens self-esteem for marginalized communities and supports broader acceptance by challenging the false idea that these communities have not contributed to humanity’s progress.",
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

      contact: {
        label: "CONTACT",
        title: "Get in touch",
        subtitle:
          "Questions about our work, partnerships, volunteering, or upcoming events? Send a message and the Earth Angels Finland team will reply as soon as possible.",
        form: {
          name: "Name",
          email: "Email address",
          message: "Message",
          submit: "Submit",
        },
        cards: {
          email: {
            title: "Email",
            line1: "info@sayitloudfinland.org",
          
          },
          phone: {
            title: "Phone",
            line1: "+358 45 179 6881",
          },
          address: {
            title: "Address",
            line1: "Nunnankatu 4, Turku",
            line2: "Finland",
          },
        },
      },

      
      contactExtras: {
        visit: {
          kicker: "VISIT",
          title: "Visit our office in Turku",
          body:
            "Earth Angels of Finland was founded in 2003 to improve the well‑being of immigrants and marginalized communities through education and cultural events, including our yearly “Say It Loud” program.",
          cta: "GET DIRECTIONS",
        },
        hours: {
          badge: "HOURS",
          monFri: { title: "Monday – Friday", detail: "By appointment" },
          sat: { title: "Saturdays", detail: "Event days (see Events page)" },
          sun: { title: "Sundays", detail: "Closed" },
        },
        faq: {
          kicker: "FAQ",
          title: "Frequently Asked Questions",
          empty: "FAQ content is not available yet.",
          items: [
            {
              q: "What is Earth Angels of Finland?",
              a:
                "Earth Angels of Finland is an organization founded in 2003 that focuses on improving the well‑being of immigrants and marginalized communities through education and community programs.",
            },
            {
              q: "What is “Say It Loud”?",
              a:
                "“Say It Loud” is our yearly high‑quality Black History Month program in Finland that highlights unknown history and the achievements of people of color and other marginalized groups.",
            },
            {
              q: "Where is the 2026 “Say It Loud” event planned?",
              a:
                "The 2026 program is planned to take place in Turku, Finland, the former capital of Finland.",
            },
            {
              q: "What will the 2026 program include?",
              a:
                "The month-long program includes exhibitions, a panel discussion, workshops (including children’s activities), a documentary movie night, and an International Open Mic Youth Night competition.",
            },
            {
              q: "Who is featured in the 2026 movie night?",
              a:
                "The 2026 movie night features a documentary about Shirley Chisholm, the first Black woman to run for president of the United States.",
            },
          ],
        },
        imageCard: {
          kicker: "EARTH ANGELS FINLAND",
          title: "Education, belonging, and cultural exchange",
          body:
            "We help make marginalized histories visible and strengthen acceptance by sharing achievements that have been diminished or erased.",
        },
      },

      
about: {
  kicker: "WHO WE ARE",
  title: "About Earth Angels Finland",
  body1:
    "Earth Angels of Finland was established in 2003 in Helsinki to improve the well-being of immigrants and marginalized communities through education and community programming.",
  body2:
    "We educate people of all ages about the achievements of people of color and bring unknown history and contributions to the forefront through yearly events like “Say It Loud,” hosted during February.",
  bullets: [
    "Education that strengthens confidence and belonging.",
    "Programs and events that make untold achievements visible.",
  ],
  cards: {
    mission: {
      title: "Our mission",
      body:
        "To improve well-being and acceptance by educating communities in Finland about the achievements of people of color and other marginalized groups.",
    },
    vision: {
      title: "Our vision",
      body:
        "A Finland where inclusive history is valued, younger generations feel proud of their heritage, and communities grow through understanding and cultural exchange.",
    },
    story: {
      title: "Our story",
      body:
        "“Say It Loud” began as a Black History Month program and has expanded to highlight overlooked legacies across marginalized groups—bringing the 2026 program to Turku with a special focus on Women of Color and Shirley Chisholm.",
    },

  },
      gallery:{
title: "Our Gallery",
    },
},



team: {
  title: "Meet OUR TEAM",
  subtitle: "The people behind our programs, events, and community work.",
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
  title: "Rakennamme itseluottamusta, osallisuutta ja ymmärrystä koulutuksen ja tapahtumien kautta",
  body:
    "Vuonna 2003 Helsingissä perustettu Earth Angels of Finland parantaa maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia koulutuksen, näkyvyyden ja kulttuurivaihdon avulla. Koulutamme maahanmuuttajia, opiskelijoita, nuoria sekä alkuperäisiä suomalaisia kaikenikäisiä värillisten ihmisten saavutuksista ja tuomme kertomattomia tarinoita ja panosta näkyviin.\n\nVuosittaisissa helmikuun ohjelmissamme, kuten “Say It Loud”, nostamme esiin transatlanttisen orjakaupan sekä muiden sivuutettujen historian ilmiöiden vaikutuspiirissä eläneiden ihmisten saavutuksia. Näiden saavutusten jakaminen vahvistaa marginalisoitujen yhteisöjen itsetuntoa ja lisää ymmärrystä sekä hyväksyntää haastamalla väärän käsityksen siitä, etteivät nämä yhteisöt olisi vaikuttaneet ihmiskunnan kehitykseen.",
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
          title:
            "Tule mukaan missioon. Opeta, juhlista, voimaannuta. Aloita jo tänään.",
          emailLabel: "Sähköposti:",
          callLabel: "Soita milloin vain:",
          ctaEvents: "SELAa TAPAHTUMIA",
          ctaGetInvolved: "TULE MUKAAN",
        },
      },

      contact: {
        label: "YHTEYDENOTTO",
        title: "Ota yhteyttä",
        subtitle:
          "Kysymyksiä toiminnastamme, yhteistyöstä, vapaaehtoisuudesta tai tulevista tapahtumista? Lähetä viesti — Earth Angels Finland -tiimi vastaa mahdollisimman pian.",
        form: {
          name: "Nimi",
          email: "Sähköpostiosoite",
          message: "Viesti",
          submit: "Lähetä",
        },
        cards: {
          email: {
            title: "Sähköposti",
            line1: "earthangelsfinland@gmail.com",
            line2: "sayitloudfinland@gmail.com",
          },
          phone: {
            title: "Puhelin",
            line1: "+358 45 179 6881",
          },
          address: {
            title: "Osoite",
            line1: "Nunnankatu 4, Turku",
            line2: "Suomi",
          },
        },
      },




     contactExtras: {
        visit: {
          kicker: "VIERAILU",
          title: "Vieraile toimistollamme Turussa",
          body:
            "Earth Angels of Finland perustettiin vuonna 2003 parantamaan maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia koulutuksen ja kulttuuritapahtumien avulla, mukaan lukien vuosittainen “Say It Loud” -ohjelma.",
          cta: "HANKI REITTIOHJEET",
        },
        hours: {
          badge: "AUKIOLO",
          monFri: { title: "Maanantai – perjantai", detail: "Sopimuksen mukaan" },
          sat: { title: "Lauantait", detail: "Tapahtumapäivinä (katso Tapahtumat)" },
          sun: { title: "Sunnuntait", detail: "Suljettu" },
        },
        faq: {
          kicker: "UKK",
          title: "Usein kysytyt kysymykset",
          empty: "UKK-sisältöä ei ole vielä saatavilla.",
          items: [
            {
              q: "Mikä on Earth Angels of Finland?",
              a:
                "Earth Angels of Finland on vuonna 2003 perustettu järjestö, joka edistää maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia koulutuksen ja yhteisöohjelmien kautta.",
            },
            {
              q: "Mikä on “Say It Loud”?",
              a:
                "“Say It Loud” on vuosittainen Black History Month -ohjelmamme Suomessa, joka nostaa esiin kertomattomia tarinoita sekä värillisten ihmisten ja muiden marginalisoitujen ryhmien saavutuksia.",
            },
            {
              q: "Missä vuoden 2026 “Say It Loud” järjestetään?",
              a:
                "Vuoden 2026 ohjelma on suunniteltu Turkuun, Suomen entiseen pääkaupunkiin.",
            },
            {
              q: "Mitä vuoden 2026 ohjelma sisältää?",
              a:
                "Kuukauden ohjelma sisältää näyttelyitä, paneelikeskustelun, työpajoja (myös lapsille), dokumenttielokuvaillan sekä kansainvälisen Open Mic Youth Night -kilpailun.",
            },
            {
              q: "Kuka on esillä vuoden 2026 elokuvaillassa?",
              a:
                "Vuoden 2026 elokuvaillassa esitetään dokumentti Shirley Chisholmista, joka oli ensimmäinen musta nainen, joka asettui ehdolle Yhdysvaltain presidentiksi.",
            },
          ],
        },
        imageCard: {
          kicker: "EARTH ANGELS FINLAND",
          title: "Koulutusta, osallisuutta ja kulttuurivaihtoa",
          body:
            "Teemme marginalisoidut historiat näkyviksi ja vahvistamme hyväksyntää jakamalla saavutuksia, jotka on usein sivuutettu tai pyyhitty pois.",
        },
      },

      
about: {
  kicker: "KEITÄ OLEMME",
  title: "Tietoa Earth Angels Finlandista",
  body1:
    "Earth Angels of Finland perustettiin vuonna 2003 Helsingissä parantamaan maahanmuuttajien ja marginalisoitujen yhteisöjen hyvinvointia koulutuksen ja yhteisötoiminnan avulla.",
  body2:
    "Koulutamme kaikenikäisiä värillisten ihmisten saavutuksista ja tuomme kertomattomia tarinoita ja panosta esiin vuosittaisten tapahtumien, kuten “Say It Loud”, kautta helmikuussa.",
  bullets: [
    "Koulutus, joka vahvistaa itseluottamusta ja osallisuutta.",
    "Ohjelmat ja tapahtumat, jotka tekevät näkymättömiä saavutuksia näkyviksi.",
  ],
  cards: {
    mission: {
      title: "Missiomme",
      body:
        "Parantaa hyvinvointia ja hyväksyntää kouluttamalla Suomessa yhteisöjä värillisten ihmisten sekä muiden marginalisoitujen ryhmien saavutuksista.",
    },
    vision: {
      title: "Visiomme",
      body:
        "Suomi, jossa inklusiivinen historia nähdään arvokkaana, nuoret voivat olla ylpeitä taustastaan ja yhteisöt vahvistuvat ymmärryksen ja kulttuurivaihdon kautta.",
    },
    story: {
      title: "Tarinaamme",
      body:
        "“Say It Loud” alkoi Black History Month -ohjelmana ja on laajentunut nostamaan esiin myös muiden marginalisoitujen ryhmien sivuutettuja perintöjä—vuoden 2026 ohjelma tuodaan Turkuun erityisteemana Women of Color ja Shirley Chisholm.",
    },
   
  },
   gallery:{
    title: "Meidän galleria",
    },
},


team: {
  title: "Tapaa tiimimme",
  subtitle: "Ihmiset ohjelmiemme, tapahtumiemme ja yhteisötyömme taustalla.",
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

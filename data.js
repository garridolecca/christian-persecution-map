/**
 * Christian Persecution Data — Compiled from Multiple International Sources
 *
 * Sources:
 *   1. Open Doors World Watch List 2025 (scores 0-100, 6 sub-categories)
 *   2. USCIRF 2025 Annual Report (CPC / SWL designations)
 *   3. Aid to the Church in Need — Religious Freedom in the World 2025
 *   4. Voice of the Martyrs — Global Prayer Guide
 *   5. International Christian Concern — Global Persecution Index 2025
 *   6. Pew Research Center — Government Restrictions Index 2022
 *   7. HeartCry Missionary Society — Missionary presence data
 *
 * Persecution Level Thresholds (Open Doors):
 *   81-100 = Extreme | 61-80 = Very High | 41-60 = High
 */

const PERSECUTION_DATA = [
  // ── TOP 10: EXTREME PERSECUTION ──────────────────────────────────────
  {
    rank: 1, country: "North Korea", iso: "PRK", lat: 40.0, lng: 127.0,
    score: 98, level: "Extreme",
    region: "Eastern Asia",
    privatLife: 16.7, familyLife: 16.7, communityLife: 16.7, nationalLife: 16.7, churchLife: 16.7, violence: 14.4,
    christianPop: "400,000 (estimated)",
    mainReligion: "Juche ideology / Atheism",
    persecutionType: "Communist & post-Communist oppression",
    summary: "The most dangerous country for Christians worldwide. Any religious activity outside state control is punishable by death or imprisonment in labor camps. An estimated 50,000-70,000 Christians are held in political prison camps. Possession of a Bible can lead to execution.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: true, heartcry: false,
    keyFacts: [
      "Worship of the Kim dynasty is mandatory",
      "Estimated 50,000-70,000 Christians in prison camps",
      "Bible possession can result in execution",
      "Three generations of a family may be punished for one person's faith"
    ]
  },
  {
    rank: 2, country: "Somalia", iso: "SOM", lat: 2.0, lng: 45.0,
    score: 94, level: "Extreme",
    region: "Eastern Africa",
    privatLife: 16.5, familyLife: 16.7, communityLife: 16.6, nationalLife: 16.6, churchLife: 16.7, violence: 11.1,
    christianPop: "Hundreds (exact unknown)",
    mainReligion: "Islam (99.8%)",
    persecutionType: "Islamic oppression / Clan oppression",
    summary: "Somalia is considered one of the world's most hostile environments for Christians. Al-Shabaab militants actively hunt and kill suspected converts. The provisional constitution establishes Islam as the state religion and prohibits conversion.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Al-Shabaab targets Christians for assassination",
      "Leaving Islam is punishable by death under Sharia law",
      "No known organized churches in the country",
      "Christians must worship entirely in secret"
    ]
  },
  {
    rank: 3, country: "Yemen", iso: "YEM", lat: 15.5, lng: 48.0,
    score: 94, level: "Extreme",
    region: "Western Asia",
    privatLife: 16.7, familyLife: 16.7, communityLife: 16.7, nationalLife: 16.7, churchLife: 16.7, violence: 10.6,
    christianPop: "A few thousand",
    mainReligion: "Islam (99.1%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Civil war has made an already hostile environment even worse. Houthi rebels and tribal leaders target Christians. Conversion from Islam is punishable by death. Humanitarian aid is sometimes withheld from known Christians.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Ongoing civil war exacerbates persecution",
      "Houthis designated as Entity of Particular Concern by USCIRF",
      "Apostasy from Islam carries death penalty",
      "No public churches permitted"
    ]
  },
  {
    rank: 4, country: "Libya", iso: "LBY", lat: 26.3, lng: 17.2,
    score: 91, level: "Extreme",
    region: "Northern Africa",
    privatLife: 16.0, familyLife: 16.2, communityLife: 15.9, nationalLife: 16.2, churchLife: 16.4, violence: 10.6,
    christianPop: "34,500 (mostly foreign workers)",
    mainReligion: "Islam (96.6%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Since the fall of Gaddafi, Libya has descended into chaos with competing militias. Christian migrant workers face kidnapping, forced labor, and murder. The 2015 beheading of 21 Coptic Christians by ISIS was filmed and broadcast worldwide.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Lawlessness makes Christians extremely vulnerable",
      "Migrant workers targeted for kidnapping and extortion",
      "21 Coptic Christians beheaded by ISIS in 2015",
      "No functioning state protection for religious minorities"
    ]
  },
  {
    rank: 5, country: "Sudan", iso: "SDN", lat: 12.8, lng: 30.2,
    score: 90, level: "Extreme",
    region: "Northern Africa",
    privatLife: 14.1, familyLife: 14.2, communityLife: 15.5, nationalLife: 14.9, churchLife: 15.3, violence: 16.1,
    christianPop: "2 million",
    mainReligion: "Islam (90.7%)",
    persecutionType: "Islamic oppression / Dictatorial paranoia",
    summary: "The ongoing civil war (since April 2023) has devastated Christian communities. Churches and Christian properties have been targeted and destroyed. Before the war, the transitional government had made some progress on religious freedom, but that has been completely reversed.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Civil war since April 2023 has displaced millions",
      "Churches deliberately targeted and destroyed",
      "Christians caught in crossfire between RSF and military",
      "Historic persecution under former dictator al-Bashir"
    ]
  },
  {
    rank: 6, country: "Eritrea", iso: "ERI", lat: 15.2, lng: 39.8,
    score: 89, level: "Extreme",
    region: "Eastern Africa",
    privatLife: 14.6, familyLife: 14.9, communityLife: 15.5, nationalLife: 15.9, churchLife: 15.9, violence: 12.2,
    christianPop: "2.5 million",
    mainReligion: "Christianity (50%) / Islam (48%)",
    persecutionType: "Dictatorial paranoia / Islamic oppression",
    summary: "Only four religious groups are officially recognized. Thousands of Christians from unregistered churches are imprisoned in shipping containers and underground dungeons. Indefinite military conscription is used to control the population.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: false, heartcry: false,
    keyFacts: [
      "Only 4 religious groups recognized (Orthodox, Catholic, Lutheran, Islam)",
      "Estimated 1,000+ Christians imprisoned for faith",
      "Prisoners held in shipping containers in desert heat",
      "Patriarch of Eritrean Orthodox Church under house arrest since 2007"
    ]
  },
  {
    rank: 7, country: "Nigeria", iso: "NGA", lat: 9.1, lng: 8.7,
    score: 88, level: "Extreme",
    region: "Western Africa",
    privatLife: 13.5, familyLife: 13.9, communityLife: 14.6, nationalLife: 14.9, churchLife: 14.5, violence: 16.7,
    christianPop: "95 million",
    mainReligion: "Christianity (46.3%) / Islam (53.5%)",
    persecutionType: "Islamic oppression / Ethno-religious hostility",
    summary: "Nigeria consistently has the highest number of Christians killed for their faith worldwide. Boko Haram, ISWAP, and Fulani militant herdsmen attack Christian communities regularly. Sharia law in northern states creates a hostile legal environment.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: [
      "More Christians killed here than any other country",
      "4,118 Christians killed in reporting period (WWL 2025)",
      "Boko Haram and ISWAP active in northeast",
      "Fulani militants attack farming communities in Middle Belt",
      "12 northern states enforce Sharia law"
    ]
  },
  {
    rank: 8, country: "Pakistan", iso: "PAK", lat: 30.4, lng: 69.3,
    score: 87, level: "Extreme",
    region: "South Asia",
    privatLife: 13.6, familyLife: 13.9, communityLife: 15.0, nationalLife: 15.0, churchLife: 12.9, violence: 16.7,
    christianPop: "4 million",
    mainReligion: "Islam (96.5%)",
    persecutionType: "Islamic oppression / Totalitarian paranoia",
    summary: "Blasphemy laws are weaponized against Christians. Forced conversions and marriages of Christian girls are widespread. Mob violence against Christian neighborhoods occurs regularly, often triggered by false blasphemy accusations.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: [
      "Blasphemy laws carry death penalty",
      "Over 1,000 Christian girls forcibly converted annually",
      "Mob attacks on Christian neighborhoods (Jaranwala 2023)",
      "Christians relegated to lowest social status"
    ]
  },
  {
    rank: 9, country: "Iran", iso: "IRN", lat: 32.4, lng: 53.7,
    score: 86, level: "Extreme",
    region: "Western Asia",
    privatLife: 15.0, familyLife: 14.6, communityLife: 13.5, nationalLife: 15.9, churchLife: 16.5, violence: 10.9,
    christianPop: "800,000 (estimated, including house churches)",
    mainReligion: "Islam (99.4%)",
    persecutionType: "Islamic oppression",
    summary: "The theocratic regime considers conversion from Islam a national security threat. House church leaders face arrest, imprisonment, and torture. Despite severe persecution, Iran has one of the fastest-growing underground church movements in the world.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: true, heartcry: false,
    keyFacts: [
      "Fastest growing church movement in the world",
      "House church leaders regularly arrested and imprisoned",
      "Converts face charges of 'acting against national security'",
      "All churches must register and report membership to government"
    ]
  },
  {
    rank: 10, country: "Afghanistan", iso: "AFG", lat: 33.9, lng: 67.7,
    score: 85, level: "Extreme",
    region: "South Asia",
    privatLife: 15.6, familyLife: 15.9, communityLife: 15.9, nationalLife: 16.4, churchLife: 16.7, violence: 5.0,
    christianPop: "Thousands (exact unknown)",
    mainReligion: "Islam (99.7%)",
    persecutionType: "Islamic oppression / Clan oppression",
    summary: "Under Taliban rule since August 2021, Afghanistan has no space for Christian life. Any discovered believer faces execution. Christians have fled the country or gone completely underground. There are no known churches.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Taliban rule since August 2021",
      "Discovery of faith means certain death",
      "No known churches or Christian gatherings",
      "Christians who couldn't flee went completely underground"
    ]
  },
  // ── RANKS 11-20 ──────────────────────────────────────────────────────
  {
    rank: 11, country: "India", iso: "IND", lat: 20.6, lng: 78.9,
    score: 84, level: "Extreme",
    region: "South Asia",
    privatLife: 12.2, familyLife: 12.9, communityLife: 13.3, nationalLife: 14.9, churchLife: 13.9, violence: 16.5,
    christianPop: "67 million",
    mainReligion: "Hinduism (79.8%)",
    persecutionType: "Religious nationalism",
    summary: "Hindu nationalist violence against Christians has surged under BJP rule. Anti-conversion laws in multiple states are used to arrest pastors and disrupt church services. Mob attacks on Christians occur almost daily.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: true,
    keyFacts: [
      "Anti-conversion laws in 12+ states",
      "Over 700 incidents of violence against Christians annually",
      "Hindu nationalist groups (RSS, VHP) drive persecution",
      "Dalit (low-caste) Christians face double discrimination"
    ]
  },
  {
    rank: 12, country: "Saudi Arabia", iso: "SAU", lat: 23.9, lng: 45.1,
    score: 81, level: "Extreme",
    region: "Western Asia",
    privatLife: 15.2, familyLife: 15.3, communityLife: 14.8, nationalLife: 15.8, churchLife: 16.6, violence: 3.3,
    christianPop: "1.8 million (all foreign workers)",
    mainReligion: "Islam (93%)",
    persecutionType: "Islamic oppression",
    summary: "Public practice of any religion other than Islam is illegal. No churches are permitted. Christian foreign workers may worship privately but risk deportation. Saudi citizens who convert from Islam face severe punishment.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "No churches allowed in the entire country",
      "Public non-Islamic worship is illegal",
      "Apostasy from Islam can be punished by death",
      "Religious police monitor foreign workers"
    ]
  },
  {
    rank: 13, country: "Myanmar", iso: "MMR", lat: 19.8, lng: 96.2,
    score: 81, level: "Extreme",
    region: "Southeast Asia",
    privatLife: 12.6, familyLife: 11.1, communityLife: 13.5, nationalLife: 14.1, churchLife: 12.9, violence: 16.5,
    christianPop: "4.4 million",
    mainReligion: "Buddhism (87.9%)",
    persecutionType: "Religious nationalism / Dictatorial paranoia",
    summary: "Since the military coup in February 2021, Myanmar has descended into civil war. Christian-majority ethnic areas (Chin, Kachin, Karen) are specifically targeted with airstrikes, church burnings, and displacement.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: [
      "Military coup in February 2021 worsened conditions",
      "Christian villages bombed and burned",
      "Over 100 churches destroyed since coup",
      "Chin and Kachin states heavily targeted"
    ]
  },
  // ── RANKS 14-20 ──────────────────────────────────────────────────────
  {
    rank: 14, country: "Mali", iso: "MLI", lat: 17.6, lng: -4.0,
    score: 80, level: "Very High",
    region: "Western Africa",
    privatLife: 11.1, familyLife: 10.1, communityLife: 14.7, nationalLife: 13.0, churchLife: 15.2, violence: 15.6,
    christianPop: "500,000",
    mainReligion: "Islam (95%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Jihadist groups linked to al-Qaeda and ISIS control large areas. Christians in the north and central regions face forced conversion, church closures, and violence. The withdrawal of international forces has worsened security.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Jihadist groups control large swathes of territory",
      "Christians forced to flee northern regions",
      "Churches closed by armed groups",
      "French and UN forces withdrew, leaving vacuum"
    ]
  },
  {
    rank: 15, country: "China", iso: "CHN", lat: 35.9, lng: 104.2,
    score: 78, level: "Very High",
    region: "Eastern Asia",
    privatLife: 13.2, familyLife: 10.1, communityLife: 12.8, nationalLife: 14.6, churchLife: 16.1, violence: 11.1,
    christianPop: "97 million (estimated)",
    mainReligion: "Folk religion / Atheism (state)",
    persecutionType: "Communist & post-Communist oppression",
    summary: "The Chinese Communist Party intensifies control over all religious expression. Churches are demolished, crosses removed, and pastors imprisoned. Surveillance technology monitors church attendance. Children under 18 are banned from attending church.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: true, heartcry: true,
    keyFacts: [
      "Ongoing 'Sinicization' of Christianity campaign",
      "Thousands of crosses forcibly removed from churches",
      "Children under 18 banned from religious activities",
      "Facial recognition used to monitor church attendance",
      "House churches increasingly raided and shut down"
    ]
  },
  {
    rank: 16, country: "Maldives", iso: "MDV", lat: 3.2, lng: 73.2,
    score: 78, level: "Very High",
    region: "South Asia",
    privatLife: 15.6, familyLife: 15.3, communityLife: 13.7, nationalLife: 15.8, churchLife: 16.5, violence: 0.7,
    christianPop: "Unknown (a few dozen nationals)",
    mainReligion: "Islam (official, 100%)",
    persecutionType: "Islamic oppression",
    summary: "The constitution requires all citizens to be Muslim. Non-Muslim citizens lose citizenship. There are no churches, and any form of non-Islamic worship is illegal. The few Maldivian believers must keep their faith entirely secret.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Citizenship requires being Muslim",
      "No churches or non-Islamic places of worship",
      "Conversion from Islam means loss of citizenship",
      "Importing Bibles is illegal"
    ]
  },
  {
    rank: 17, country: "Iraq", iso: "IRQ", lat: 33.2, lng: 43.7,
    score: 78, level: "Very High",
    region: "Western Asia",
    privatLife: 14.2, familyLife: 14.4, communityLife: 14.3, nationalLife: 14.8, churchLife: 13.9, violence: 6.1,
    christianPop: "166,000 (down from 1.5 million in 2003)",
    mainReligion: "Islam (95%)",
    persecutionType: "Islamic oppression / Ethno-religious hostility",
    summary: "The Christian population has dropped by over 90% since 2003. ISIS devastated Christian communities in the Nineveh Plains. Though ISIS was defeated territorially, Christians face ongoing threats from militias, land grabs, and discrimination.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: [
      "Christian population fell from 1.5 million to ~166,000",
      "ISIS destroyed churches and Christian towns (2014-2017)",
      "Land and property seized from displaced Christians",
      "Militia groups continue to threaten Christian areas"
    ]
  },
  {
    rank: 18, country: "Syria", iso: "SYR", lat: 34.8, lng: 38.9,
    score: 78, level: "Very High",
    region: "Western Asia",
    privatLife: 13.5, familyLife: 14.4, communityLife: 13.9, nationalLife: 14.4, churchLife: 14.3, violence: 7.0,
    christianPop: "600,000 (down from 2 million pre-war)",
    mainReligion: "Islam (87%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Years of civil war devastated one of the oldest Christian communities in the world. Christians are caught between multiple warring factions. Many ancient churches and monasteries have been destroyed. The Christian population has declined by over 70%.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Christian population declined over 70% since 2011",
      "Ancient churches and monasteries destroyed",
      "Christians targeted by multiple armed groups",
      "Some of the oldest Christian communities in the world"
    ]
  },
  {
    rank: 19, country: "Algeria", iso: "DZA", lat: 28.0, lng: 1.7,
    score: 77, level: "Very High",
    region: "Northern Africa",
    privatLife: 14.7, familyLife: 14.3, communityLife: 11.5, nationalLife: 14.7, churchLife: 16.0, violence: 6.3,
    christianPop: "129,000",
    mainReligion: "Islam (99%)",
    persecutionType: "Islamic oppression / Dictatorial paranoia",
    summary: "A systematic campaign of church closures has shut down most Protestant churches since 2017. Converting from Islam brings intense family and community pressure. The government uses ordinance 06-03 to regulate and restrict non-Muslim worship.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: [
      "Most Protestant churches forcibly closed since 2017",
      "Ordinance 06-03 restricts non-Muslim worship",
      "Converts from Islam face intense social pressure",
      "Growing Kabyle (Berber) Christian community targeted"
    ]
  },
  {
    rank: 20, country: "Burkina Faso", iso: "BFA", lat: 12.2, lng: -1.6,
    score: 76, level: "Very High",
    region: "Western Africa",
    privatLife: 11.7, familyLife: 9.7, communityLife: 13.2, nationalLife: 11.5, churchLife: 14.0, violence: 15.6,
    christianPop: "5.1 million",
    mainReligion: "Islam (63.2%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Jihadist violence has spiraled since 2016. Christians are specifically targeted in attacks, forced to convert or flee. Entire Christian communities have been displaced. Church leaders have been assassinated.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: [
      "Jihadist attacks increasing since 2016",
      "Christians targeted for assassination",
      "Over 2 million internally displaced",
      "Churches and schools forced to close in northern regions"
    ]
  },
  // ── RANKS 21-30 ──────────────────────────────────────────────────────
  {
    rank: 21, country: "Morocco", iso: "MAR", lat: 31.8, lng: -7.1,
    score: 74, level: "Very High",
    region: "Northern Africa",
    privatLife: 13.2, familyLife: 13.8, communityLife: 11.6, nationalLife: 12.9, churchLife: 14.3, violence: 8.3,
    christianPop: "31,000",
    mainReligion: "Islam (99%)",
    persecutionType: "Islamic oppression",
    summary: "Christianity is tolerated among foreigners but Moroccan converts face severe pressure. Proselytizing is illegal and can lead to imprisonment. Converts risk losing family, inheritance, and social standing.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Proselytizing is illegal", "Converts face family rejection and social ostracism", "Foreign Christians largely tolerated", "Growing underground church among Moroccans"]
  },
  {
    rank: 22, country: "Laos", iso: "LAO", lat: 19.9, lng: 102.5,
    score: 74, level: "Very High",
    region: "Southeast Asia",
    privatLife: 11.8, familyLife: 10.7, communityLife: 13.5, nationalLife: 14.1, churchLife: 13.9, violence: 9.8,
    christianPop: "200,000",
    mainReligion: "Buddhism (64.7%)",
    persecutionType: "Communist & post-Communist oppression / Religious nationalism",
    summary: "Christians, especially among ethnic minorities like the Hmong, face forced renunciations, property confiscation, and expulsion from villages. Local officials have broad powers to restrict religious activities.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Christians expelled from villages", "Forced renunciations of faith", "Hmong Christians particularly targeted", "Local officials have unchecked power"]
  },
  {
    rank: 23, country: "Mauritania", iso: "MRT", lat: 21.0, lng: -10.9,
    score: 74, level: "Very High",
    region: "Western Africa",
    privatLife: 14.6, familyLife: 14.2, communityLife: 13.8, nationalLife: 14.2, churchLife: 14.2, violence: 2.8,
    christianPop: "10,000 (mostly foreign)",
    mainReligion: "Islam (official, 100%)",
    persecutionType: "Islamic oppression",
    summary: "Mauritania is an Islamic republic where apostasy carries the death penalty. There are virtually no Mauritanian Christians. The few who exist face extreme danger if discovered.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Apostasy punishable by death", "Islamic republic — all citizens considered Muslim", "Virtually no indigenous Christians", "One of the last countries to abolish slavery (2007)"]
  },
  {
    rank: 24, country: "Bangladesh", iso: "BGD", lat: 23.7, lng: 90.4,
    score: 74, level: "Very High",
    region: "South Asia",
    privatLife: 12.4, familyLife: 10.6, communityLife: 12.7, nationalLife: 11.3, churchLife: 10.4, violence: 16.1,
    christianPop: "900,000",
    mainReligion: "Islam (90.4%)",
    persecutionType: "Islamic oppression / Religious nationalism",
    summary: "Christians from Muslim backgrounds face severe persecution. Islamist groups target converts and churches. Tribal Christians in the Chittagong Hill Tracts face land seizures and displacement.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Rising Islamic extremism", "Converts face severe community pressure", "Tribal Christians lose land rights", "Islamist groups attack churches"]
  },
  {
    rank: 25, country: "Uzbekistan", iso: "UZB", lat: 41.4, lng: 64.6,
    score: 73, level: "Very High",
    region: "Central Asia",
    privatLife: 14.6, familyLife: 12.7, communityLife: 13.5, nationalLife: 12.4, churchLife: 15.5, violence: 4.4,
    christianPop: "350,000",
    mainReligion: "Islam (88%)",
    persecutionType: "Dictatorial paranoia / Islamic oppression",
    summary: "All religious activity outside state control is illegal. Police raid unregistered churches and confiscate Christian literature. Converts from Islam face pressure from family, community, and authorities.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["All religious groups must register", "Police raids on unregistered gatherings", "Religious literature censored", "Converts face community and family rejection"]
  },
  {
    rank: 26, country: "Cuba", iso: "CUB", lat: 21.5, lng: -77.8,
    score: 73, level: "Very High",
    region: "Caribbean",
    privatLife: 13.2, familyLife: 8.5, communityLife: 13.9, nationalLife: 13.3, churchLife: 15.1, violence: 9.1,
    christianPop: "6.9 million",
    mainReligion: "Christianity (59.2%)",
    persecutionType: "Communist & post-Communist oppression / Dictatorial paranoia",
    summary: "The communist government tightly controls all religious activity. Church leaders who criticize the regime face arrest and imprisonment. New church buildings cannot be constructed. Surveillance of churches is pervasive.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: false, heartcry: false,
    keyFacts: ["Government controls all church activities", "Pastors arrested for criticizing regime", "New church construction banned", "Extensive surveillance of religious leaders"]
  },
  {
    rank: 27, country: "Central African Republic", iso: "CAF", lat: 6.6, lng: 20.9,
    score: 72, level: "Very High",
    region: "Middle Africa",
    privatLife: 10.3, familyLife: 8.6, communityLife: 13.9, nationalLife: 9.6, churchLife: 14.0, violence: 15.6,
    christianPop: "3.6 million",
    mainReligion: "Christianity (89%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Armed groups, including the predominantly Muslim Séléka rebels, target Christian communities. Churches are attacked and Christians displaced. The state is too weak to provide protection.",
    uscirf: null, acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Séléka rebels target Christians", "Churches attacked and burned", "Government unable to protect citizens", "Ongoing intercommunal violence"]
  },
  {
    rank: 28, country: "Niger", iso: "NER", lat: 17.6, lng: 8.1,
    score: 72, level: "Very High",
    region: "Western Africa",
    privatLife: 9.4, familyLife: 9.6, communityLife: 14.5, nationalLife: 7.7, churchLife: 14.6, violence: 15.7,
    christianPop: "70,000",
    mainReligion: "Islam (99.3%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Jihadist groups active along the borders with Mali, Burkina Faso, and Nigeria target Christians. The tiny Christian minority faces both state discrimination and militant violence.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Jihadist groups active on borders", "Christian minority under 1% of population", "Churches burned in anti-Charlie Hebdo riots (2015)", "Military coup in 2023 destabilized country"]
  },
  {
    rank: 29, country: "Turkmenistan", iso: "TKM", lat: 38.9, lng: 59.6,
    score: 71, level: "Very High",
    region: "Central Asia",
    privatLife: 14.3, familyLife: 12.3, communityLife: 13.6, nationalLife: 13.9, churchLife: 15.3, violence: 1.5,
    christianPop: "60,000",
    mainReligion: "Islam (89%)",
    persecutionType: "Dictatorial paranoia",
    summary: "One of the world's most repressive states. All religious activity is tightly controlled. Unregistered religious activity is illegal. Christians are monitored, harassed, and detained.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["One of the world's most closed nations", "All religious groups must register", "Religious literature strictly controlled", "Citizens monitored extensively"]
  },
  {
    rank: 30, country: "Nicaragua", iso: "NIC", lat: 12.9, lng: -85.2,
    score: 71, level: "Very High",
    region: "Central America",
    privatLife: 12.4, familyLife: 7.6, communityLife: 13.7, nationalLife: 13.3, churchLife: 14.1, violence: 9.6,
    christianPop: "5.7 million",
    mainReligion: "Christianity (85%)",
    persecutionType: "Dictatorial paranoia",
    summary: "The Ortega regime views the Catholic Church and evangelical churches as political threats. Bishops have been arrested and exiled. Religious organizations shut down. The government banned religious processions.",
    uscirf: "CPC", acn: "Persecution", vom: "Restricted",
    icc: true, heartcry: false,
    keyFacts: ["Bishop Rolando Álvarez imprisoned then exiled", "Over 3,000 NGOs including religious ones shut down", "Religious processions banned", "Nuns and priests forced to leave the country"]
  },
  // ── RANKS 31-50 ──────────────────────────────────────────────────────
  {
    rank: 31, country: "Mexico", iso: "MEX", lat: 23.6, lng: -102.6,
    score: 71, level: "Very High",
    region: "Central America",
    privatLife: 11.7, familyLife: 9.0, communityLife: 12.5, nationalLife: 11.8, churchLife: 11.0, violence: 14.6,
    christianPop: "118 million",
    mainReligion: "Christianity (92.5%)",
    persecutionType: "Organized corruption / Ethno-religious hostility",
    summary: "Drug cartels and organized crime target pastors and church leaders who oppose them. In indigenous areas, Christians who leave traditional religions face violence and expulsion. Mexico is one of the most dangerous countries for religious leaders.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Drug cartels target pastors who oppose them", "Indigenous converts expelled from communities", "One of the most dangerous countries for clergy", "Cartels impose 'taxes' on churches"]
  },
  {
    rank: 32, country: "Oman", iso: "OMN", lat: 21.5, lng: 55.9,
    score: 70, level: "Very High",
    region: "Western Asia",
    privatLife: 14.5, familyLife: 14.1, communityLife: 10.9, nationalLife: 13.8, churchLife: 14.1, violence: 3.0,
    christianPop: "180,000 (mostly foreign workers)",
    mainReligion: "Islam (85.9%)",
    persecutionType: "Islamic oppression",
    summary: "While more tolerant than neighbors, Oman restricts proselytizing and monitors religious activities. Omani converts face severe family and social pressure. Foreign Christians may worship in designated compounds.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Proselytizing is illegal", "Foreign Christians may worship in compounds", "Omani converts face family rejection", "More tolerant than other Gulf states"]
  },
  {
    rank: 33, country: "Ethiopia", iso: "ETH", lat: 9.1, lng: 40.5,
    score: 70, level: "Very High",
    region: "Eastern Africa",
    privatLife: 9.9, familyLife: 9.7, communityLife: 12.6, nationalLife: 10.4, churchLife: 12.1, violence: 15.6,
    christianPop: "70 million",
    mainReligion: "Christianity (62.8%)",
    persecutionType: "Ethno-religious hostility / Islamic oppression",
    summary: "Despite a Christian majority, ethnic conflicts and Islamic extremism in some regions create a dangerous environment. The Tigray war devastated Orthodox Christian communities. In eastern regions, Christians face Islamic militant threats.",
    uscirf: null, acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Tigray war devastated Christian communities", "Islamic extremism growing in eastern regions", "Ethnic conflicts often target religious minorities", "One of the oldest Christian nations in the world"]
  },
  {
    rank: 34, country: "Tunisia", iso: "TUN", lat: 33.9, lng: 9.5,
    score: 70, level: "Very High",
    region: "Northern Africa",
    privatLife: 12.4, familyLife: 13.2, communityLife: 10.1, nationalLife: 12.6, churchLife: 13.8, violence: 8.1,
    christianPop: "23,000",
    mainReligion: "Islam (99.1%)",
    persecutionType: "Islamic oppression",
    summary: "While constitutionally guaranteeing religious freedom, Tunisian converts face significant social and legal obstacles. Family pressure on converts is intense. Proselytizing is discouraged by authorities.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Constitutional religious freedom poorly enforced", "Converts face intense family pressure", "Growing convert community", "Authorities discourage proselytizing"]
  },
  {
    rank: 35, country: "Democratic Republic of Congo", iso: "COD", lat: -4.0, lng: 21.8,
    score: 70, level: "Very High",
    region: "Middle Africa",
    privatLife: 8.0, familyLife: 7.9, communityLife: 12.6, nationalLife: 10.8, churchLife: 14.5, violence: 16.1,
    christianPop: "80 million",
    mainReligion: "Christianity (95.8%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "ADF (Allied Democratic Forces, linked to ISIS) targets Christian communities in eastern DRC with horrific attacks. Despite a vast Christian majority, the state cannot protect its citizens. Militia groups also target churches.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: ["ADF militants (linked to ISIS) kill Christians regularly", "Over 6 million internally displaced", "Eastern DRC is most dangerous region", "Churches provide critical humanitarian services"]
  },
  {
    rank: 36, country: "Bhutan", iso: "BTN", lat: 27.5, lng: 90.4,
    score: 69, level: "Very High",
    region: "South Asia",
    privatLife: 13.2, familyLife: 13.2, communityLife: 12.3, nationalLife: 14.1, churchLife: 14.2, violence: 2.2,
    christianPop: "30,000",
    mainReligion: "Buddhism (74.8%)",
    persecutionType: "Religious nationalism",
    summary: "Christianity is not officially recognized. Churches cannot be registered or built. Converts from Buddhism face ostracism and loss of government benefits. Buddhist identity is central to Bhutanese national identity.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Christianity not officially recognized", "No churches can be registered", "Converts lose government benefits", "Buddhist identity tied to national identity"]
  },
  {
    rank: 37, country: "Mozambique", iso: "MOZ", lat: -18.7, lng: 35.5,
    score: 68, level: "Very High",
    region: "Eastern Africa",
    privatLife: 9.3, familyLife: 8.5, communityLife: 13.9, nationalLife: 8.4, churchLife: 12.5, violence: 15.9,
    christianPop: "17 million",
    mainReligion: "Christianity (55.8%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "An ISIS-linked insurgency in Cabo Delgado province has displaced over 800,000 people. Christians are specifically targeted — beheaded, shot, and churches burned. The insurgency began in 2017 and continues.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["ISIS-linked insurgency in Cabo Delgado", "Christians beheaded and churches burned", "Over 800,000 displaced", "Insurgency ongoing since 2017"]
  },
  {
    rank: 38, country: "Kazakhstan", iso: "KAZ", lat: 48.0, lng: 67.0,
    score: 68, level: "Very High",
    region: "Central Asia",
    privatLife: 13.3, familyLife: 11.6, communityLife: 12.2, nationalLife: 12.8, churchLife: 14.2, violence: 4.3,
    christianPop: "4.5 million",
    mainReligion: "Islam (70.2%)",
    persecutionType: "Dictatorial paranoia / Islamic oppression",
    summary: "The government tightly controls religious expression. All religious groups must register with the state. Unregistered activity is illegal and punished with fines. Converts from Islam face family pressure.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Restrictive registration requirements", "Fines for unregistered religious activity", "Religious literature censored", "Converts face family and community pressure"]
  },
  {
    rank: 39, country: "Tajikistan", iso: "TJK", lat: 38.9, lng: 71.3,
    score: 68, level: "Very High",
    region: "Central Asia",
    privatLife: 14.1, familyLife: 12.7, communityLife: 12.7, nationalLife: 13.2, churchLife: 13.7, violence: 1.9,
    christianPop: "60,000",
    mainReligion: "Islam (98%)",
    persecutionType: "Dictatorial paranoia / Islamic oppression",
    summary: "The authoritarian government restricts all religious expression. Children are banned from attending religious services. Religious education is tightly controlled. Christian communities are small and closely monitored.",
    uscirf: "CPC", acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Children banned from religious services", "Strict control of all religious activity", "Christian communities closely monitored", "Religious education heavily restricted"]
  },
  {
    rank: 40, country: "Egypt", iso: "EGY", lat: 26.8, lng: 30.8,
    score: 68, level: "Very High",
    region: "Northern Africa",
    privatLife: 12.7, familyLife: 13.7, communityLife: 12.1, nationalLife: 12.4, churchLife: 10.9, violence: 6.3,
    christianPop: "10 million (Coptic Christians)",
    mainReligion: "Islam (90%)",
    persecutionType: "Islamic oppression",
    summary: "Coptic Christians, one of the oldest Christian communities in the world, face discrimination, kidnappings, and church bombings. While the government has made some improvements, societal discrimination remains deep.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["One of the oldest Christian communities (Coptic)", "Church bombings and attacks on worshippers", "Kidnapping of Coptic women and girls", "Discrimination in education and employment"]
  },
  {
    rank: 41, country: "Qatar", iso: "QAT", lat: 25.4, lng: 51.2,
    score: 67, level: "Very High",
    region: "Western Asia",
    privatLife: 14.2, familyLife: 14.2, communityLife: 10.5, nationalLife: 13.2, churchLife: 14.4, violence: 0.7,
    christianPop: "370,000 (foreign workers)",
    mainReligion: "Islam (67.7%)",
    persecutionType: "Islamic oppression",
    summary: "Qatari citizens cannot legally convert from Islam. Foreign Christians may worship in a designated compound. Proselytizing is illegal. The country is wealthy and stable, limiting overt violence, but restrictions are systematic.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Religious Compound opened in 2008 for foreigners", "Proselytizing is illegal", "Conversion from Islam not permitted", "Foreign workers face restrictions"]
  },
  {
    rank: 42, country: "Comoros", iso: "COM", lat: -11.6, lng: 43.3,
    score: 67, level: "Very High",
    region: "Eastern Africa",
    privatLife: 12.7, familyLife: 14.0, communityLife: 11.2, nationalLife: 12.4, churchLife: 14.2, violence: 2.6,
    christianPop: "7,000",
    mainReligion: "Islam (98%)",
    persecutionType: "Islamic oppression",
    summary: "Proselytizing is illegal and converts face severe social pressure. The constitution declares Islam the state religion. Christians must worship secretly.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Islam is state religion", "Proselytizing is illegal", "Converts face severe social ostracism", "Very small Christian community"]
  },
  {
    rank: 43, country: "Cameroon", iso: "CMR", lat: 7.4, lng: 12.4,
    score: 67, level: "Very High",
    region: "Middle Africa",
    privatLife: 8.8, familyLife: 7.6, communityLife: 12.6, nationalLife: 8.4, churchLife: 13.1, violence: 16.1,
    christianPop: "14 million",
    mainReligion: "Christianity (53.3%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Boko Haram attacks Christians in the Far North region. The Anglophone crisis in the northwest and southwest also affects churches. Pastors have been kidnapped and churches burned.",
    uscirf: null, acn: "Persecution", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Boko Haram active in Far North", "Anglophone crisis affects churches", "Pastors kidnapped for ransom", "Churches burned in conflict zones"]
  },
  {
    rank: 44, country: "Vietnam", iso: "VNM", lat: 14.1, lng: 108.3,
    score: 67, level: "Very High",
    region: "Southeast Asia",
    privatLife: 10.8, familyLife: 9.5, communityLife: 12.2, nationalLife: 14.1, churchLife: 14.1, violence: 5.9,
    christianPop: "9.5 million",
    mainReligion: "Buddhism / Folk religion",
    persecutionType: "Communist & post-Communist oppression",
    summary: "The communist government controls all religious activity through mandatory registration. Ethnic minority Christians (Hmong, Montagnard) face severe pressure to renounce their faith. Land confiscation and police harassment are common.",
    uscirf: "CPC", acn: "Discrimination", vom: "Restricted",
    icc: false, heartcry: false,
    keyFacts: ["All religious groups must register with state", "Ethnic minority Christians face severe pressure", "Land confiscation from Christian communities", "Police harassment of unregistered churches"]
  },
  {
    rank: 45, country: "Turkey", iso: "TUR", lat: 38.9, lng: 35.2,
    score: 67, level: "Very High",
    region: "Western Asia",
    privatLife: 13.0, familyLife: 11.7, communityLife: 11.7, nationalLife: 13.2, churchLife: 11.5, violence: 5.4,
    christianPop: "170,000",
    mainReligion: "Islam (99.8%)",
    persecutionType: "Islamic oppression / Religious nationalism",
    summary: "The Christian population has dwindled from 20% a century ago to less than 0.2%. Converts face significant social pressure. Government rhetoric increasingly ties Turkish identity to Islam. Church property is sometimes confiscated.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Christian population dropped from 20% to 0.2%", "Hagia Sophia reconverted to mosque (2020)", "Converts face social and family pressure", "Training of Christian clergy severely restricted"]
  },
  {
    rank: 46, country: "Colombia", iso: "COL", lat: 4.6, lng: -74.1,
    score: 66, level: "Very High",
    region: "South America",
    privatLife: 11.0, familyLife: 7.9, communityLife: 12.7, nationalLife: 11.5, churchLife: 10.5, violence: 12.6,
    christianPop: "46 million",
    mainReligion: "Christianity (92.5%)",
    persecutionType: "Organized corruption / Ethno-religious hostility",
    summary: "Armed groups (FARC dissidents, ELN, drug cartels) target church leaders who speak out against them. Indigenous Christians face persecution from tribal authorities. Pastors in rural areas are threatened and assassinated.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Armed groups target outspoken pastors", "Indigenous converts face tribal persecution", "Rural church leaders at highest risk", "Drug cartels impose 'taxes' on churches"]
  },
  {
    rank: 47, country: "Kyrgyzstan", iso: "KGZ", lat: 41.2, lng: 74.8,
    score: 66, level: "Very High",
    region: "Central Asia",
    privatLife: 13.5, familyLife: 10.3, communityLife: 11.7, nationalLife: 11.4, churchLife: 12.4, violence: 6.9,
    christianPop: "700,000",
    mainReligion: "Islam (88%)",
    persecutionType: "Islamic oppression / Dictatorial paranoia",
    summary: "A restrictive religion law requires registration and censors religious materials. Converts from Islam face intense pressure from family and community. Police raids on unregistered groups are common.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Restrictive religion law", "Raids on unregistered groups", "Converts face family rejection", "Religious literature censored"]
  },
  {
    rank: 48, country: "Brunei", iso: "BRN", lat: 4.9, lng: 114.9,
    score: 66, level: "Very High",
    region: "Southeast Asia",
    privatLife: 14.8, familyLife: 14.8, communityLife: 10.8, nationalLife: 10.8, churchLife: 14.0, violence: 0.6,
    christianPop: "47,000",
    mainReligion: "Islam (78.8%)",
    persecutionType: "Islamic oppression",
    summary: "Sharia law (fully implemented 2019) criminalizes proselytizing and apostasy. Non-Muslim religions face strict restrictions. Celebrating Christmas publicly is banned for Muslims. Religious education is tightly controlled.",
    uscirf: null, acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Full Sharia law implemented in 2019", "Public celebration of Christmas banned for Muslims", "Proselytizing is criminal offense", "Apostasy punishable by death under Sharia"]
  },
  {
    rank: 49, country: "Chad", iso: "TCD", lat: 15.5, lng: 18.7,
    score: 65, level: "Very High",
    region: "Middle Africa",
    privatLife: 11.0, familyLife: 8.2, communityLife: 10.2, nationalLife: 9.9, churchLife: 10.3, violence: 15.9,
    christianPop: "5.6 million",
    mainReligion: "Islam (55.1%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Boko Haram and other jihadist groups attack Christian communities. Interreligious tensions exist between the Muslim north and Christian south. Christians face discrimination in government and military.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Boko Haram active in Lake Chad region", "North-south religious tensions", "Christians underrepresented in government", "Jihadist spillover from neighboring countries"]
  },
  {
    rank: 50, country: "Jordan", iso: "JOR", lat: 30.6, lng: 36.2,
    score: 65, level: "Very High",
    region: "Western Asia",
    privatLife: 12.9, familyLife: 14.3, communityLife: 10.4, nationalLife: 12.2, churchLife: 12.8, violence: 2.4,
    christianPop: "175,000",
    mainReligion: "Islam (97.2%)",
    persecutionType: "Islamic oppression",
    summary: "While Jordan is relatively tolerant compared to neighbors, converts from Islam face severe family and community pressure. The Christian population has steadily declined. Proselytizing Muslims is socially unacceptable.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Relatively tolerant but declining freedoms", "Converts face intense family pressure", "Christian population declining", "Traditional churches generally protected"]
  },
  // ── ADDITIONAL COUNTRIES (Extended WWL 51-78 + Other Sources) ────────
  {
    rank: 51, country: "Malaysia", iso: "MYS", lat: 4.2, lng: 101.9,
    score: 65, level: "Very High",
    region: "Southeast Asia",
    privatLife: 13.4, familyLife: 14.1, communityLife: 11.0, nationalLife: 12.2, churchLife: 11.2, violence: 3.0,
    christianPop: "2.7 million",
    mainReligion: "Islam (61.3%)",
    persecutionType: "Islamic oppression / Religious nationalism",
    summary: "Malay Muslims cannot legally leave Islam. The word 'Allah' is banned for non-Muslim use. Christians from other ethnic backgrounds have more freedom but face increasing Islamization of public life.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Malay Muslims cannot convert", "Word 'Allah' banned for non-Muslims", "Increasing Islamization of public life", "East Malaysian Christians face fewer restrictions"]
  },
  {
    rank: 52, country: "Azerbaijan", iso: "AZE", lat: 40.1, lng: 47.6,
    score: 65, level: "Very High",
    region: "Central Asia",
    privatLife: 13.0, familyLife: 10.3, communityLife: 11.8, nationalLife: 13.2, churchLife: 14.0, violence: 3.0,
    christianPop: "280,000",
    mainReligion: "Islam (96.9%)",
    persecutionType: "Dictatorial paranoia / Islamic oppression",
    summary: "Strict registration requirements and government surveillance of religious groups. Unregistered religious activity is punishable by fines. Religious literature is censored. The destruction of Armenian Christian heritage in Nagorno-Karabakh raises serious concerns.",
    uscirf: "SWL", acn: "Discrimination", vom: null,
    icc: false, heartcry: false,
    keyFacts: ["Strict registration and surveillance", "Destruction of Armenian Christian heritage in Karabakh", "Religious literature censored", "Fines for unregistered religious activity"]
  },
  {
    rank: 53, country: "Kenya", iso: "KEN", lat: -0.02, lng: 37.9,
    score: 64, level: "Very High",
    region: "Eastern Africa",
    privatLife: 8.6, familyLife: 9.1, communityLife: 11.5, nationalLife: 8.7, churchLife: 10.1, violence: 15.6,
    christianPop: "40 million",
    mainReligion: "Christianity (85.5%)",
    persecutionType: "Islamic oppression / Organized corruption",
    summary: "Al-Shabaab attacks in eastern and coastal regions target Christians. The 2015 Garissa University massacre killed 148 people, mostly Christians. Christians in Muslim-majority areas face significant pressure.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Al-Shabaab attacks in eastern regions", "Garissa University massacre (2015) killed 148", "Christians in coastal areas face pressure", "Generally free country for Christians overall"]
  },
  {
    rank: 54, country: "Nepal", iso: "NPL", lat: 28.4, lng: 84.1,
    score: 63, level: "Very High",
    region: "South Asia",
    privatLife: 12.2, familyLife: 9.5, communityLife: 11.2, nationalLife: 14.3, churchLife: 12.3, violence: 3.7,
    christianPop: "1.4 million",
    mainReligion: "Hinduism (81.3%)",
    persecutionType: "Religious nationalism",
    summary: "A 2017 anti-conversion law criminalizes proselytizing and conversion. Hindu nationalist groups pressure Christians. Churches face increasing restrictions. The rapidly growing Christian community is seen as a threat.",
    uscirf: null, acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Anti-conversion law since 2017", "Hindu nationalist pressure increasing", "Fast-growing Christian community", "Church leaders arrested under conversion law"]
  },
  {
    rank: 55, country: "Indonesia", iso: "IDN", lat: -0.8, lng: 113.9,
    score: 62, level: "Very High",
    region: "Southeast Asia",
    privatLife: 10.4, familyLife: 9.7, communityLife: 10.8, nationalLife: 10.9, churchLife: 10.8, violence: 9.4,
    christianPop: "32 million",
    mainReligion: "Islam (87.2%)",
    persecutionType: "Islamic oppression / Religious nationalism",
    summary: "While Indonesia is constitutionally pluralist, increasing Islamic conservatism pressures Christians. Church construction is blocked by community resistance. Blasphemy laws are used against Christians. Aceh province enforces Sharia law.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: true, heartcry: false,
    keyFacts: ["Church construction frequently blocked", "Blasphemy laws used against Christians", "Aceh province enforces Sharia", "Rising Islamic conservatism nationwide"]
  },
  {
    rank: 56, country: "Sri Lanka", iso: "LKA", lat: 7.9, lng: 80.8,
    score: 60, level: "High",
    region: "South Asia",
    privatLife: 11.5, familyLife: 9.4, communityLife: 11.3, nationalLife: 11.8, churchLife: 11.5, violence: 4.6,
    christianPop: "1.9 million",
    mainReligion: "Buddhism (70.2%)",
    persecutionType: "Religious nationalism",
    summary: "Buddhist nationalist groups target Christians, especially in rural areas. Anti-conversion legislation has been proposed. Churches are attacked and forced to close. The 2019 Easter bombings killed over 250 Christians.",
    uscirf: "SWL", acn: "Discrimination", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["2019 Easter bombings killed 269 people", "Buddhist nationalist groups attack churches", "Anti-conversion legislation proposed", "Rural churches face forced closure"]
  },
  {
    rank: 57, country: "Russia", iso: "RUS", lat: 61.5, lng: 105.3,
    score: 58, level: "High",
    region: "Eastern Europe",
    privatLife: 12.3, familyLife: 6.2, communityLife: 10.1, nationalLife: 12.1, churchLife: 13.4, violence: 3.9,
    christianPop: "105 million",
    mainReligion: "Christianity (73%)",
    persecutionType: "Dictatorial paranoia",
    summary: "The 2016 'Yarovaya Law' restricts evangelism outside registered church buildings. Jehovah's Witnesses are banned. Non-Orthodox Christian groups face increasing restrictions. The Russian Orthodox Church enjoys state favor while other denominations face discrimination.",
    uscirf: "CPC", acn: "Discrimination", vom: "Restricted",
    icc: false, heartcry: true,
    keyFacts: ["Yarovaya Law restricts evangelism (2016)", "Non-Orthodox groups face discrimination", "Jehovah's Witnesses banned", "State favors Russian Orthodox Church exclusively"]
  },
  // ── NON-RANKED COUNTRIES WITH USCIRF/ACN DESIGNATIONS ───────────────
  {
    rank: null, country: "Tanzania", iso: "TZA", lat: -6.4, lng: 34.9,
    score: null, level: "Moderate",
    region: "Eastern Africa",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "35 million",
    mainReligion: "Christianity (61%)",
    persecutionType: "Islamic oppression (Zanzibar)",
    summary: "While mainland Tanzania is generally free, Zanzibar has strong Islamic influence and Christians face restrictions. Islamic extremism has occasionally spilled over from neighboring countries.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Zanzibar has stricter Islamic environment", "Mainland generally free for Christians", "Some extremist attacks in recent years", "Growing tensions between religious communities"]
  },
  {
    rank: null, country: "Uganda", iso: "UGA", lat: 1.4, lng: 32.3,
    score: null, level: "Moderate",
    region: "Eastern Africa",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "38 million",
    mainReligion: "Christianity (85.2%)",
    persecutionType: "Islamic oppression (in border regions)",
    summary: "ADF attacks in western Uganda target Christians. Converts from Islam in eastern Uganda face family and community persecution. Generally a free country for Christians overall.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["ADF attacks in western regions", "Converts from Islam face persecution in east", "Generally Christian-majority and free", "Church influence significant in politics"]
  },
  {
    rank: null, country: "Philippines", iso: "PHL", lat: 12.9, lng: 121.8,
    score: 43, level: "High",
    region: "Southeast Asia",
    privatLife: 6.3, familyLife: 5.7, communityLife: 8.6, nationalLife: 7.2, churchLife: 5.1, violence: 10.4,
    christianPop: "95 million",
    mainReligion: "Christianity (92.5%)",
    persecutionType: "Islamic oppression (Mindanao) / Organized corruption",
    summary: "Muslim separatist and jihadist groups in Mindanao and Sulu target Christians. The 2017 siege of Marawi devastated the Christian community there. Outside of Muslim areas, Christians face threats from communist rebels.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["2017 Marawi siege devastated Christian community", "Jihadist groups active in Mindanao", "Communist rebels threaten pastors", "Generally free country for Christians overall"]
  },
  {
    rank: null, country: "Israel", iso: "ISR", lat: 31.0, lng: 34.9,
    score: null, level: "Moderate",
    region: "Western Asia",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "185,000",
    mainReligion: "Judaism (73.5%)",
    persecutionType: "Religious nationalism",
    summary: "While Christians have legal protections, they face increasing harassment from ultra-Orthodox groups. Anti-missionary legislation limits evangelism. The Israeli-Palestinian conflict affects Palestinian Christians significantly.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: true,
    keyFacts: ["Increasing harassment from ultra-Orthodox groups", "Anti-missionary legislation", "Palestinian Christians affected by conflict", "Holy sites generally accessible"]
  },
  {
    rank: null, country: "Lebanon", iso: "LBN", lat: 33.9, lng: 35.9,
    score: null, level: "Moderate",
    region: "Western Asia",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "2.5 million",
    mainReligion: "Islam (57.7%) / Christianity (36.2%)",
    persecutionType: "Islamic oppression / Political instability",
    summary: "Once majority Christian, Lebanon's Christian population has declined amid political instability and Hezbollah's influence. Christians play a significant political role but face increasing pressure.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Christian population declining from historic majority", "Political system reserves presidency for Christians", "Hezbollah's influence creates tension", "Economic crisis affects all communities"]
  },
  {
    rank: null, country: "United Arab Emirates", iso: "ARE", lat: 23.4, lng: 53.8,
    score: null, level: "Moderate",
    region: "Western Asia",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "1.1 million (foreign workers)",
    mainReligion: "Islam (76%)",
    persecutionType: "Islamic oppression",
    summary: "Foreign Christians may worship in designated compounds. Proselytizing is illegal. Emirati converts face severe consequences. The UAE presents itself as tolerant but significant restrictions exist.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Foreign worship permitted in compounds", "Proselytizing is illegal", "Emirati converts face severe consequences", "Projects image of tolerance"]
  },
  {
    rank: null, country: "Kuwait", iso: "KWT", lat: 29.3, lng: 47.5,
    score: null, level: "Moderate",
    region: "Western Asia",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "450,000 (foreign workers)",
    mainReligion: "Islam (74.6%)",
    persecutionType: "Islamic oppression",
    summary: "Christians may worship relatively freely but cannot proselytize. Kuwaiti converts face family and legal pressure. Church buildings are limited and new construction is restricted.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Relatively tolerant for Gulf region", "Proselytizing prohibited", "Limited church buildings allowed", "Converts face family pressure"]
  },
  {
    rank: null, country: "Bahrain", iso: "BHR", lat: 26.1, lng: 50.5,
    score: null, level: "Moderate",
    region: "Western Asia",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "210,000 (mostly foreign workers)",
    mainReligion: "Islam (73.7%)",
    persecutionType: "Islamic oppression",
    summary: "The most tolerant Gulf state for Christians. Churches are allowed and foreign Christians worship freely. However, proselytizing is discouraged and Bahraini converts face social pressure.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Most tolerant Gulf state for Christians", "Churches allowed since 1906", "Proselytizing discouraged", "Social pressure on Bahraini converts"]
  },
  {
    rank: null, country: "Djibouti", iso: "DJI", lat: 11.6, lng: 43.1,
    score: null, level: "Moderate",
    region: "Eastern Africa",
    privatLife: null, familyLife: null, communityLife: null, nationalLife: null, churchLife: null, violence: null,
    christianPop: "11,000",
    mainReligion: "Islam (94%)",
    persecutionType: "Islamic oppression",
    summary: "Islam is the state religion. While there is some tolerance for established churches, proselytizing is forbidden and converts from Islam face social ostracism.",
    uscirf: null, acn: "Monitored", vom: "Hostile",
    icc: false, heartcry: false,
    keyFacts: ["Islam is state religion", "Some established churches tolerated", "Proselytizing forbidden", "Converts face social pressure"]
  }
];

// ── GLOBAL STATISTICS ──────────────────────────────────────────────────
const GLOBAL_STATS = {
  christiansPerSecuted: "365 million",
  christiansKilled: "4,998",
  churchesAttacked: "14,766",
  christiansDetained: "3,906",
  christiansAbducted: "3,300",
  countriesExtreme: 13,
  countriesVeryHigh: 37,
  countriesHigh: 28,
  reportingPeriod: "October 2023 – September 2024",
  sources: [
    { name: "Open Doors World Watch List 2025", url: "https://www.opendoors.org/en-US/persecution/world-watch-list/", countries: 78, type: "Scored ranking (0-100)" },
    { name: "USCIRF 2025 Annual Report", url: "https://www.uscirf.gov/countries/2025-recommendations", countries: 28, type: "CPC / SWL designations" },
    { name: "Aid to the Church in Need — Religious Freedom 2025", url: "https://acninternational.org/religiousfreedomreport/", countries: 196, type: "Persecution / Discrimination / Monitored" },
    { name: "Pew Research Center — Religious Restrictions 2022", url: "https://www.pewresearch.org/religion/2024/12/18/government-restrictions-on-religion-stayed-at-peak-levels-globally-in-2022/", countries: 198, type: "GRI & SHI indices (0-10)" },
    { name: "Voice of the Martyrs — Global Prayer Guide", url: "https://www.persecution.com/prayerguide/", countries: 68, type: "Restricted / Hostile / Monitored" },
    { name: "International Christian Concern — GPI 2025", url: "https://persecution.org/gpi/", countries: 20, type: "Qualitative analysis" },
    { name: "HeartCry Missionary Society", url: "https://heartcrymissionary.com/the-field/", countries: 76, type: "Missionary presence data" }
  ]
};

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { PERSECUTION_DATA, GLOBAL_STATS };
}

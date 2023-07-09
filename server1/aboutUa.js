class About{
    constructor(history, missionAndVision, universitySymbols, hymn, qualityPolicy, ){
      this.history = history
      this.missionAndVision = missionAndVision
      this.universitySymbols = universitySymbols
      this.hymn = hymn
      this.qualityPolicy = qualityPolicy
    }
    returnAboutUa(){
      return`${this.history}. ${this.missionAndVision}. ${this.universitySymbols}. ${this.hymn}. ${this.qualityPolicy} ` 
    }
}

const uaHistory = `
The history of the University of the Assumption began on JANUARY 12, 1963 Bishop Emilio Cinense, DD and Msgr. Pedro Puno founded Assumption Junior College housed at Assumpta building, San Fernando downtown. First program offerings were: Bachelor of Arts, BS Commerce, BS Education, BS Elementary Education. 

1965 The campus was transferred at Unisite Subdivision (its present location) with Puno Hall as the only edifice. The school was granted government recognition as Assumption College of Pampanga.

1966 Rev. Fr. Aniceto Franco established the High School and Grade School departments supervised by Sr. Mary Philip Ryan O.P. and the Dominican sisters of Our Lady of Remedies. 

1969 BS Civil Engineering was offered. Ryan Bldg., Benedictine Bldg. and Cinense Gymnasium were built. 

1974 Rev. Fr. Octavio M. Ramos paved the way for additional program offerings: BS Nursing, BS Nutrition and Dietetics, BS Industrial Engineering, BS Architecture. Master of Arts in Education was offered as the initial program offering for the Graduate School. 

MARCH 19, 1980 The Ministry of Education granted university status to the Assumption College of Pampanga and it was named UNIVERSITY OF THE ASSUMPTION. 

1980′S New edifices were constructed: Nutrition Bldg., Ramos Building (Grade School Building), Bishop Guerrero Bldg. (Chapel Bldg.), Archbp. Cruz Museum Archives, Ryan Hall Annex, Alumni Center, Post Office. The Outreach Ministry Program was established. 

1985 Rev. Fr. Cenovio M. Lumanog was appointed President by Arch. Oscar V. Cruz, JCD, DD. 

1988 DECS approved to offer Doctor of Education. 

1990 Most Rev. Jesus C. Galang, DD was installed as University President. Cruz Bldg., Galang Building (Library Bldg.) were constructed. BS Accountancy was offered. 

1992 Rev. Msgr. Ricardo Jesus T. Serrano assumed Presidency. Programs in the Graduate School were added: Master in Public Administration, Master of Arts in Educational Management majors in Early Childhood, in Mathematics, in English and in Teaching Filipino. BS Hotel and Restaurant Management, Bachelor of Arts major in Social Work, in Philosophy, BS Commerce major in Computer Science were added in the roster of program offerings. 

1998-2002 Bachelor of Arts in Mass Communication and BS Interior Design were offered Expansion of Msgr. Lumanog building, Msgr. Ramos building, Fr. Franco building, ASF and DSF buildings were occupied to accommodate the growing population of the college department. UA Tennis Court with mini club house was constructed as well as the TV Studio, Radio Studio, Speech Laboratory, Archbp. Aniceto bldg. (Student Center), Domus Mariae International Center, computer rooms, multimedia classrooms, renovation of the Archbp. Cinense Gymnasium. 

2002 Liberal Arts, Education, Commerce, Accountancy and Nursing programs were granted Level 2 Accreditation by PAASCU. 

2003 UA Graduate School was ranked as one of the top graduate education centers in Region III based on the Evaluation of Graduate Education in the Philippines (EGEP) results. 

2005 CHED approved BS Biology (Pre-Med) and BS Mathematics as additional course programs of the University. 

2006 UA Grade School and High School departments were granted Level 2 Re-Accredited status by PAASCU. BS Computer Engineering, BS Office Management were offered by the School of Technological Studies and School of Business respectively. 

JUNE 18, 2007 Bishop Roberto C. Mallari, DD was appointed by Arch. Paciano B. Aniceto, DD as OIC – President of the university. 

OCTOBER 15, 2007 Bishop Roberto C. Mallari, DD was officially appointed University President. The Bishop President was installed in November 29, 2007. 

2007 MA in Theological Studies was added to the roster of programs in the Graduate School. 

2008 PAASCU Level 2 Re-accredited status was granted to the following Colleges: Arts and Sciences, Nursing, Education and Business Administration. 

2009 BS Tourism Management, BS Information Technology and BS Eleectronics Engineering were offered to meet the demands of the industry. MARCH 

2010 PAASCU Level 2 reaccredited status was granted to the Grade School and High School. 

JUNE 22, 2012 Rev. Fr. Joselito C. Henson, S.Th.D. was designated as University President. 

DECEMBER 2012 UA was constituted as a Catholic Cultural Center by the Commission on Culture of the Episcopal Conference of the Philippines. 

MAY 2013 Education, Business Administration and the School of Arts and Sciences were granted PAASCU Level 2 re-accreditation. 

MAY 24, 2013 Mrs. Belina S. Katigbak, C.P.A. was designated as Vice President for Finance. 

MAY 27, 2013 Fr. Victor Nicomedes S. Nicdao S.Th.D., Ph.D. was designated as Vice President for Administration.`

const uaMissionAndVision = `
Here are the University of the Assumption's mission, vision, and goals: 

MISSION The University of the Assumption commits itself to the integral development of Catholic leaders through academic excellence, Christian formation, and community service. 

VISION The University of the Assumption an Archdiocesan Catholic Educational Institution envisions itself as the leading formator of academically competent, morally upright, and socially responsible Catholic leaders. 

Academic Excellence (SCIENTIA)
The University of the Assumption seeks to lead students gain world-class competence in the area they can best utilize their human talents and resources through well-planned academic programs, effective and efficient instruction, quality support services and functional research.

Christian Formation (VIRTUS)
The University of the Assumption seeks to form a community of disciples and to develop a community of apostles where all the members are enlightened and purified by the Gospel values filled with zeal for the transformation of their immediate communities, Pampanga, and the Philippines.

Community Service (COMMUNITAS)
The University of the Assumption seeks to assume leadership in community development through active involvement in current religious, economic, political, socio-cultural, and ecological concerns of the nation and of the world. 

UNIVERSITY GOALS
The University of the Assumption seeks to:
1. develop living witnesses of Gospel values through religious instruction, liturgical celebrations, prayer services, and community activities within the immediate community in Pampanga and in the country.
2. provide an educational milieu among all members where they pursue excellence in the arts and sciences leading to intellectual inquiry, reflective judgment and resolute action;
3. promote a strong sense of responsibility among the members to enable them to respond, to initiate and participate in the social transformation of families, communities and nations.

Thus, the University of the Assumption continuously provides society with competent and ethical professionals for meaningful leadership roles in cultural, economic, and technological growth.

Here are the University's Core Values: 
Servant Leadership -  We take the initiative and involve ourselves in works of mercy and other activities for the betterment of the society. (action photos RSO officers)

Integrity - The spiritual and physical integrity of Mary is our guide in ensuring that both as individuals and as a community, our words are in accord with our actions

Excellence -  We are committed to the greater good. Excellence is the product of our hard work, individually and collectively, to deliver exemplary outcomes.

Service Orientation - We delight in providing quality service to our stakeholders: the students and their parents, the alumni and our academic and industry partners, the communities and the parishes and the employees and our suppliers.

Teamwork - We value our diversity which allows us to see beyond our limitations and build on our individual strengths to create an environment through empathic listening, learning, changing and serving.

Obedience - Obedience is the key to humility which builds the Catholic leader. We obey those in positions of authority as instruments of the Lord and the policies and rules they implement as specific guides for the realization of the Will of God. For the only necessary thing that we obey is the divine schema expressed through our superiors and the policies which underwent diligently study and evaluation.

Open Communication - We value free exchange of ideas as a way to learn and to live and work harmoniously. We recognize the significance of dialogue, constructive criticism and feedback to a life well lived. 

Here are the University's Graduate Attributes: 

The ideal UA graduates are:

BIASA (ACADEMICALLY COMPETENT)
UA graduates who are BIASA (academically competent) are able to:
1. effectively communicate orally and in writing using English and Filipino;
2. articulate broad coherent knowledge in their field of specialization;
3. demonstrate competencies required in their specific field of practice;
4. participate in the generation of new knowledge or in research and development projects;
5. apply lifelong learning skills in facing new challenges;
6. work effectively either independently or collaboratively in multi-disciplinary and multi-cultural teams;
7. manifest awareness of Filipino and Capampangan historical and cultural heritage.

MAGANACA (SPIRITUALLY WELL-GROUNDED)
UA graduates who are MAGANACA (spiritually well-grounded) are able to:
1. manifest a living relationship with God through personal prayer, reception of sacraments and devotion to Mary;
2. Live out and practice the teachings of the church in matters of faith and morals;
3. observe honesty, fairness and justice in all of one’s undertakings;
4. assume responsibility and accountability for one’s actions and decisions;
5. demonstrate willingness to work beyond what is expected by sharing gladly and generously one’s time, talent and treasure;
6. prioritize others over personal needs despite some personal inconvenience observe professional ethics.

MAYAP (SOCIALLY RESPONSIBLE)
UA graduates who are MAYAP (socially responsible) are able to:
1. share in the life and mission of the church;
2. practice corporal works of mercy;
3. utilize one’s expertise and talent for the common good;
4. demonstrate in one’s life a preferential option for the poor;
5. serve as an agent of social transformation;
6. participate actively in the discussion and peaceful resolution of national or local issues;
7. advocate and exercise environmental stewardship;
8. exercise responsible citizenship through law-abidance, vigilance and patriotism.`

const uaUniversitySymbols = `Here is the link of the University's symbols: https://www.ua.edu.ph/about-ua/university-symbols/`

const uaHymn = `
Here is the University's Hymn or UA Hymn: 
Neath azure skies, oh stand the walls
we’ll ever hold so dear
Where truth and light abiding bright
Show us the road so clear.

Refrain:
Hail Assumption, dear Assumption
Hail from your children true.
From north to south, from zone to zone
Your light will guide us through.

The winds that dance across the lawn
All sing of Mary’s name
In verdant grass and sunlit halls
We witness heaven’s aim.

Hail Assumption, dear Assumption
Hail from your children true.
From north to south, from zone to zone
Your light will guide us through.

Lyrics by: Elizabeth Yumul-Manunge
Music by: Meynardo G. Lansangan
Sung by: Romeo C. Ignacio

`

const uaQualityPolicy = `Here is the University's Quality Policy or UA Quality Policy: 
The University of the Assumption, an Archdiocesan Catholic educational institution, commits itself to the development of Catholic leaders through academic excellence, Christian formation and community service. Thus, we commit to…
1. sustain a strong and visible commitment to Catholic tradition;
2. deliver responsive and quality instruction;
3. enhance and promote research-based practices for the upgrading of instruction and extension;
4. create an impact in the immediate and larger community;
5. effectively deliver student services towards a dynamic learning environment and manage resources for sustainable institutional growth;
6. create and maintain a working environment in which people become fully involved in achieving our objectives;
7. manage activities and related resources as a process or series of interconnected processes so that desired results are achieved more efficiently;
8. pursue continual improvement across all aspects of our quality management system;
9. make decisions relating to our quality management system following an analysis of relevant data and information;
10. establish interdependent and mutually beneficial relationships with local and international institutions and other interested parties;
continuously care for Mother Earth, our common home for the sustenance of life.` 

const aboutUa = new About(uaHistory, uaMissionAndVision, uaUniversitySymbols, uaHymn, uaQualityPolicy)

const returnAboutUa = aboutUa.returnAboutUa()

module.exports = {returnAboutUa}
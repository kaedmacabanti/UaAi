class Admissions{
    constructor(admissionGraduateStudies, admissionCollege, admissionShs, admissionJhs, admissionGs){
        this.admissionGraduateStudies = admissionGraduateStudies;
        this.admissionCollege = admissionCollege;
        this.admissionShs = admissionShs;
        this.admissionJhs = admissionJhs;
        this.admissionGs = admissionGs
    }
    returnAdmission(){
        return`Here are the following admission or enrollment links you can follow:`
    }
}

const admissionGraduateStudies = `
Graduate School Application Form for First Semester: https://docs.google.com/forms/d/e/1FAIpQLScKqE_LSfF4A3XGlXa6zqsZtwnn1sRYFYIwkHCP2jwPY_-LlQ/viewform

Graduate School Application Form for Second Semester: https://docs.google.com/forms/d/e/1FAIpQLSclKFIw9ctgDse6y46J6P1lFOnVZ8jD1wPqTqcz2HB3VLfIaw/closedform
`
const admissionCollege = `
College Application Form for Non UA Senior High School Graduates: https://docs.google.com/forms/d/e/1FAIpQLSe2DrDeY6dpxqCsxJr5qf1YJ7p7Z4GR4dIdrc_hV5na72j0iA/viewform

College Application Form for UA Senior High School Graduates: https://docs.google.com/forms/d/e/1FAIpQLSeKKr6iYWyst3wHzCmlG-4BM98YrIweBmyVqGzxiiWQMsqUMQ/viewform

College Application Form for College Transferees: https://docs.google.com/forms/d/e/1FAIpQLScO2DpAmEdIrKuZ3dT1RaF8SL3eJrfqX34vsVhfX2k1L-N6Vw/viewform
`
const admissionShs = `
Senior High School Application Form: https://docs.google.com/forms/d/e/1FAIpQLSfFPB0PqFtgFP5Ef1J8QrRnPz7fDSpwX2XzIm4Uk8Jz5Eld5g/viewform`


const admissionJhs = `
Junior High School Application Form: https://docs.google.com/forms/d/e/1FAIpQLSczvx75JLyLBKX4-JoUl61m03WFQcjl3CzCSqef7PoaKoxlsg/viewform?fbclid=IwAR0jMT6A6ZfThfLfnwuwxFoEaU77aDCtrfA0XlJs5qN1lHmGdjh62e6Qx9g`

const admissionGs  = `
Grade School Applcation Form: https://docs.google.com/forms/d/e/1FAIpQLSd1DR8kDfGXsCFNZc69VUEi5foQE35mX1wEU3qJ8aaP0y5BOA/viewform`





// pr = procedures and requirements
class ScholarshipGrants{
    constructor(prUaJsh, prUaShs, prHonorsScholarshipProgram, prArchbishopEmilioCinense, prBishopCesarMaGuerrero, prUaStudentAssistant, prUaPerformingArts, prUaAthletes, prRegina){
        this.prUaJsh = prUaJsh;
        this.prUaShs = prUaShs;
        this.prHonorsScholarshipProgram = prHonorsScholarshipProgram;
        this.prArchbishopEmilioCinense = prArchbishopEmilioCinense;
        this.prBishopCesarMaGuerrero = prBishopCesarMaGuerrero;
        this.prUaStudentAssistant = prUaStudentAssistant;
        this.prUaPerformingArts = prUaPerformingArts;
        this.prUaAthletes = prUaAthletes;
        this.prRegina = prRegina;
    }
    returnScholarshipGrants(){
        return `Here are the scholarship grants at the University of the Assumption: ${this.prUaJsh}, ${this.prUaShs}, ${this.prHonorsScholarshipProgram}, ${this.prArchbishopEmilioCinense}, ${this.prBishopCesarMaGuerrero}, ${this.prUaStudentAssistant}, ${this.prUaPerformingArts}, ${this.prUaAthletes}, ${this.prRegina}`
    }
}

const prUaJsh = `
INCOMING UAJHS ACADEMIC SCHOLAR
Rank 1(VALEDICTORIANS) - 100% on Tuition Fees exclusive of Miscellaneous and other Fees
Rank 2 (SALUTATORIANS) - 50% on Tuition Fees exclusive of Miscellaneous and other
WITH HIGHEST HONORS - (100-98) (regardless of school rank) - 100% on Tuition Fees exclusive of Miscellaneous and other Fees

Procedure and Requirements:

1. Secure application form from the UAJHS Guidance and Admissions Office/Office
Of Student Affairs (Aniceto 201).
. Submit application form, with ANY of the following pertinent supporting documents:
Certification from Principal, Guidance Counselor,
Report Card and
Graduation Program to the UAJHS Guidance Coordinator
3. The UAJHS Guidance Coordinator evaluates the authenticity of information given and passes judgment as to the eligibility or non-eligibility
of the application.
4. Upon approval, the year level Guidance Counselor formally informs the applicant.`;

const prUaShs = `
INCOMING UASHS GRADE 11 ACADEMIC SCHOLARS
WITH HIGHEST HONORS (100-98) - 100% discount on tuition fees inclusive of Miscellaneous Fees ONLY
WITH HIGH HONORS (97-95) - 75% on Tuition Fees inclusive of Miscellaneous Fees ONLY

Procedure and Requirements:

1. Secure application form from the Office of Student Affairs (Aniceto 201).
2. Submit application form, with other pertinent supporting documents.
(Certification from Principal, Guidance Counselor, Report Card and Graduation Program) to the UASHS Guidance Coordinator/ Office of
Student Affairs (Aniceto 201).
3. The UASHS Guidance Coordinator evaluates the authenticity of information given and passes judgment as to the eligibility or non-eligibility
of the application.
4. Upon approval, the year level Guidance Counselor formally informs the applicant.`;

const prHonorsScholarshipProgram = `
HONORS SCHOLARSHIP PROGRAM (INCOMING COLLEGE ACADEMIC SCHOLARS)
WITH HIGHEST HONORS (100-98) - 100% discount on tuition fees exclusive of Miscellaneous and other Fees
WITH HIGH HONORS (97-95) - 100% discount on tuition fees exclusive of Miscellaneous and other Fees
WITH HONORS (94-90) - 50% discount on tuition fees exclusive of Miscellaneous and other Fees

Procedure and Requirements:

1. Secure application form from the Office of Student Affairs (Aniceto 201).
2. Submit application form, with ANY of the following pertinent supporting documents (Certification from Principal, Guidance Counselor,
Report Card and Graduation Program) to the Office of Student Affairs (Aniceto 201).
3. The CSGP-In-Charge evaluates the authenticity of information given and passes judgment as to the eligibility or non-eligibility of the
application.
4. Upon approval, the CSGP-In-Charge formally informs the applicant.`;

const prArchbishopEmilioCinense = `
ARCHBISHOP EMILIO CINENSE
100% discount on tuition fees ONLY (Exclusive of Miscellaneous and other Fees, Special and Tutorial Classes)
Course Limitation : BSE major in Religious Education/Values Education

Requirements:

1. Application Letter with parent’s signature
2. Recommendation letter and certificate of good moral character from the parish priest.
3. Copy of Class Schedule
4. Certified True Copy of Grades
5. 1 copy of 2×2 picture

Application Procedure:

1. Secure application form from the Office of Student Affairs (Aniceto 201)
2. Submit accomplished form and requirements to the CSGP Officer for evaluation and approval.
3. Signing of Recommendation Letter between applicant and parish priest (If Parochial Grantee) or school (If AAPS Grantee). The
Recommendation Letter states that the grantee should serve the parish/school as a volunteer Catechist two (2) years after graduation
and that the Parish/school shall shoulder the miscellaneous fees of the grantee.`;

const prBishopCesarMaGuerrero = `
BISHOP CESAR MA. GUERRERO
100% discount on tuition fees exclusive of Miscellaneous and other Fees

Requirements :

1. Recommendation from RCA or Superior of Congregation
2. Diploma
3. Transcript of Records
4. Proofs of productive Scholarship (Examples: researches done, books/articles authored, certificates of attendance to academic and
professional events, etc.)
5. Health certificate
6. Copy of Class Schedule
7. Certified True Copy of Grades
8. 1 copy of 2×2 picture

Application Procedure:

1. Following the standard procedure in place at the time of application, the applicant seeks formal admission into the desired degree
program offered by the UA Graduate or Undergraduate College/School.
2. Upon admission, the applicant obtains from the Office of Student Affairs (Aniceto 201), fills it out and submits it to the same office
together with the required documents.
3. The CSGP officer interviews the applicant
4. Application documents, are forwarded to the Office of the President.
5. The UA President reviews the application documents. Upon confirmation by the UA President the awarding of the grant becomes
official.`;

const prUaStudentAssistant = `
UA STUDENT ASSISTANT
100 % discount (21 Units) exclusive of Miscellaneous and other Fees

Requirements:

1. Application letter signed by parents
2. Form 138 or Report Card/ copy of grades
3. 1 copy of 2×2 ID picture
4. Copy of Class Schedule
5. Recommendation letter from parish priest
6. Recent proof of billing ( 3mos. Electric Bill )
7. Sketch of the route from UA to applicant’s residence or from main highway to applicant’s residence
8. Certificate of good moral character from the school last attended.
9. Medical Certificate from the University Physician.

Application Procedure:

1. Secure CSGP Form from the Office of Student Affairs (Aniceto 201)
2. Submit accomplished form and requirements to the CSGP Officer
3. Meet the UASAO Adviser for interview
4. CSGP officer evaluates applicant and gives due recommendation`;

const prUaPerformingArts = `
UA PERFORMING ARTS (CHORALE, DANCE TROUPE)
100 % discount (21 Units) exclusive of Miscellaneous and other Fees

Requirements:

1. Certified True Copy of Grades
2. Copy of Class Schedule
3. Recommendation from Moderator and Coordinator
4. 1 copy of 2×2 picture

Application Procedure:

1. Secure application Form 1 from the Office of Student Affairs (Aniceto 201)
2. Accomplished application
3. Submit accomplished form and requirements to the CSGP officer for evaluation and recommendation follow-up results at the CSGP`;

const prUaAthletes = `
UA ATHLETES
100 % discount (21 Units) exclusive of Miscellaneous and other Fees

Requirements:

1. Certified True Copy of Grades
2. Copy of Class Schedule
3. Certificate of good moral character ( CSGP Form 3)
4. Medical certificate
5. Recommendation from coach/trainer and Sports Coordinator
6. 1 copy of 2×2 picture

Application Procedure :

1. Secure application Form 1 from the Office of Student Affairs (Aniceto 201)
2. If the applicant is a new student, he/she should undergo the usual application procedure; pass the college entrance test and
interviews.
3. After the student has passed the examination and interview of the Guidance and Admissions Office, the CSGP Officer recommends the
applicant for tryout to the Sports Coordinator
4. The applicant undergoes the required try-out by the Coach/Trainer.
5. The Sports Coordinator submits required documents to the CSGP officer for evaluation and recommendation`;

const prRegina = `
REGINA (OFFICIAL PUBLICATION)
100 % discount on Tuition Fees exclusive of Miscellaneous and other Fees

Requirements:

1. Recommendation from the REGINA moderator
2. 1 copy of 2×2 picture
3. Certified True Copy of Grades
4. Copy of Class Schedule

Application Procedure:

1. Secure application Form I from the Office of Student Affairs (Aniceto 201)
2. Submit accomplished form and requirements to the CSGP Officer`;


const admissionsUa = new Admissions(admissionGraduateStudies, admissionCollege, admissionShs, admissionJhs, admissionGs)
 
const ScholarshipGrantsUa = new ScholarshipGrants(prUaJsh, prUaShs, prHonorsScholarshipProgram, prArchbishopEmilioCinense, prBishopCesarMaGuerrero, prUaStudentAssistant, prUaPerformingArts, prUaAthletes, prRegina)

let returnScholarshipGrantsUa = ScholarshipGrantsUa.returnScholarshipGrants()

module.exports = {returnScholarshipGrantsUa}
import type { Service, Provider, FAQItem, ScheduleSlot, ServiceDetail, ContactInfo } from '../../domain/entities/types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+1 (469) 594-2940',
  whatsappNumber: '+14695942940',
  email: 'nurse@footrxhealth.com',
  address: '1421 N Hwy 67, STE 200-C Cedar Hill, TX, United States, Texas 75104',
  instagram: 'https://www.instagram.com/footrxhealth/',
  facebook: 'https://www.facebook.com/FootRXHealth',
};

export const IN_OFFICE_SERVICES: Service[] = [
  {
    id: 'callus-treatment',
    name: 'Callus Treatment Only',
    image: '/callus-t.jpg',
  },
  {
    id: 'wellness-pedicure',
    name: 'Wellness Medical Pedicure',
    image: 'wellness-mp.jpg',
  },
  {
    id: 'nail-trimming',
    name: 'Toenail/Nail Trimming',
    image: 'toe-nail-trimming.jpg',
  },
  {
    id: 'medical-pedicure',
    name: 'Medical Pedicure',
    image: 'medical-pedicure.jpg',
  },
];

export const MOBILE_SERVICES: Service[] = [
  {
    id: 'mobile-medical-pedicure',
    name: 'Medical Pedicure',
    image: 'medical-pedicure.jpg',
  },
  {
    id: 'mobile-callus-treatment',
    name: 'Callus Treatment Only',
    image: 'callus-t.jpg',
  },
  {
    id: 'mobile-nail-trimming',
    name: 'Toenail/Nail Trimming Only',
    image: 'toe-nail-trimming.jpg',
  },
];

export const PROVIDERS: Provider[] = [
  {
    id: 'mj-edwards',
    name: 'MJ Edwards BA, RN',
    title: 'Registered Nurse-Led Foot, Wound, and Supportive Care',
    description: `Member of the American Foot Care Nurses Association 
Apprenticeship under Dr. Lisa Brandy- DPM

Why I Founded This Practice

I founded this practice after walking through a deeply personal experience with my father during a period of declining health. Following a hospital stay and a subsequent stint in rehabilitation, it became clear that while his primary medical needs were addressed, a critical area of his care was overlooked—his feet.

My father suffered from neuropathy affecting his extremities, especially his feet. He experienced decreased sensation, discomfort, and changes in skin and nail health that required consistent, skilled attention. Despite being under medical care, there were limited resources available to support routine clinical foot care. The hospital and rehabilitation setting were not equipped to provide the preventive, hands-on foot care that could reduce risk, improve comfort, and support overall mobility.

As a Registered Nurse, I recognized the gap between traditional medical treatment and the ongoing foot and skin care needs of patients like my father—particularly seniors and individuals living with chronic conditions such as neuropathy or diabetes. I saw firsthand how easily these needs can be overlooked, and how quickly small issues can escalate when preventive care is not accessible.

This experience shaped my mission. I founded this practice to provide nursing-led foot and wound care that prioritizes prevention, safety, and dignity—meeting patients where they are, whether at home, in a facility, or in the community. My goal is to ensure that no one has to struggle to find appropriate foot care simply because it falls between medical specialties.

This practice exists to bridge that gap—combining clinical nursing expertise with compassionate, individualized care for those who need it most.`,
  },
  {
    id: 'nicole-cannon',
    name: 'Nicole Cannon LVN',
    title: 'LVN- Foot and Supportive Care',
    description: `A Licensed Vocational Nurse dedicated to providing compassionate, patient-centered support within our nursing-led foot care practice. With a strong focus on safety, comfort, and dignity, Lisa plays an essential role in supporting clients throughout their care experience.

Nicole assists with clinical foot care services under the direction of the Registered Nurse, helping ensure each visit is thorough, respectful, and attentive to individual needs. She is especially mindful of clients with mobility challenges, chronic conditions, or sensory changes, and is committed to creating a calm, supportive environment during care.

Her approach reflects our practice's core values—professionalism, prevention, and personalized care. Nicole's attention to detail and patient-first mindset help support continuity of care and enhance the overall client experience.`,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What is diabetic foot care?',
    answer:
      'Diabetic foot care focuses on preventing complications through RN-led assessment, safe nail and skin care, and early identification of changes related to circulation or sensation. Services are provided using conservative techniques within RN scope, with referral guidance when podiatric care is needed.',
  },
  {
    id: 2,
    question: 'What is preventive foot care?',
    answer:
      'Preventive foot care is routine clinical maintenance designed to support healthy nails and skin, reduce buildup, and catch early concerns before they progress. This service is ideal for ongoing foot health and comfort.',
  },
  {
    id: 3,
    question: 'Do you offer mobile foot care services?',
    answer:
      'Yes. Foot RX Health & Wellness offers mobile RN-led foot care for clients who prefer or require in-home services, including seniors and individuals with limited mobility. Mobile services include preventive and diabetic foot care, assessment, and education.',
  },
  {
    id: 4,
    question: 'Is this the same as a pedicure?',
    answer:
      'No. Our services are clinical and health-focused, not cosmetic. We do not provide salon pedicures or spa services.',
  },
];

export const SCHEDULE_SLOTS: ScheduleSlot[] = [
  { day: 'Monday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 5:00 PM'] },
  { day: 'Tuesday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 5:00 PM'] },
  { day: 'Wednesday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 5:00 PM'] },
  { day: 'Thursday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 5:00 PM'] },
  { day: 'Friday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 4:00 PM'] },
  { day: 'Saturday', times: ['10:00 AM - 2:00 PM'] },
  { day: 'Sunday', times: ['Closed'] },
];

export const SERVICES_EXPLAINED: ServiceDetail[] = [
  {
    id: 'callus-treatment',
    name: 'Callus Treatment',
    image: 'callus-t.jpg',
    description:
      'Our callus treatment involves safe, careful removal of thickened skin using professional sterile instruments. We use moisturizing treatments to keep skin soft and prevent future buildup. This service is ideal for individuals with diabetes, neuropathy, or circulation issues who are prone to callus formation.',
  },
  {
    id: 'nail-clipping',
    name: 'Finger Nail and Toe Nail Clipping Only',
    image: 'fn-tn-c.jpg',
    description:
      'Our nail clipping service provides safe, professional trimming of fingernails and toenails. We use sterilized instruments and techniques that minimize the risk of ingrown nails, cuts, or infections. This service is especially important for individuals who have difficulty reaching their feet or have vision limitations.',
  },
  {
    id: 'medical-pedicure',
    name: 'Medical Pedicure Foot Care',
    image: 'medical-pedicure.jpg',
    description:
      'Our medical pedicure is a comprehensive foot care service that includes nail trimming, cuticle care, callus reduction, and skin moisturizing. Performed by licensed nursing staff, this service focuses on preventive care and early detection of potential issues. It is designed for individuals with diabetes, poor circulation, neuropathy, or those seeking proactive foot health maintenance.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Nursing Care',
    description: 'All services are provided by licensed registered nurses with specialized training in foot care and wound management.',
  },
  {
    title: 'Preventive Focus',
    description: 'We prioritize early detection and prevention to stop small issues from becoming serious complications.',
  },
  {
    title: 'Comfort & Dignity',
    description: 'Our patient-centered approach ensures comfort, respect, and personalized care for every client.',
  },
  {
    title: 'Mobile Services',
    description: 'We bring professional foot care to your home, making it accessible for those with mobility challenges.',
  },
];

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/\D/g, '')}`;
export const BOOKING_LINK = 'https://clientportal.us.zandahealth.com/clientportal/footrxhealth/home';
export const APPOINTMENT_BOOKING_LINK = 'https://clientportal.us.zandahealth.com/clientportal/footrxhealth/appointment-booking';
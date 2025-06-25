const FAQ = () => {
  return (
   <>
   <section className="py-20 bg-white">
   <div className="container mx-auto px-4">
     <div className="grid lg:grid-cols-2 gap-16 items-start">
       <div>
         {/* <Badge className="mb-4 bg-orange-100 text-orange-700">FAQ</Badge> */}
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Help and Information</h2>
         <p className="text-xl text-gray-600 leading-relaxed">
           Whether you're exploring features, understanding pricing, or figuring out how to get started, we're here
           to help with clear and concise answers.
         </p>
       </div>

       <div className="space-y-4">
         {[
           {
             question: "What is HealthWell and how does it work?",
             answer:
               "HealthWell is a comprehensive healthcare app designed to help you manage your health and wellness. It offers features like health education, community forums, wellness challenges, appointment scheduling, and telemedicine consultations. Simply sign up, choose your plan, and start exploring the tools and resources tailored to your needs.",
           },
           {
             question: "How do I schedule an appointment through HealthWell?",
             answer:
               "You can easily schedule appointments through our integrated calendar system. Browse available healthcare providers, select your preferred time slot, and book instantly. You'll receive confirmation and reminder notifications.",
           },
           {
             question: "Is my health data secure with HealthWell?",
             answer:
               "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data storage, and comply with all healthcare privacy regulations to protect your personal health information.",
           },
           {
             question: "Can I access HealthWell on multiple devices?",
             answer:
               "Yes, HealthWell is available across all your devices. Your data syncs seamlessly between your smartphone, tablet, and computer, so you can access your health information anywhere.",
           },
           {
             question: "What kind of support does HealthWell offer?",
             answer:
               "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated healthcare support team is always ready to assist you with any questions or concerns.",
           },
           {
             question: "How can I join wellness challenges?",
             answer:
               "Browse our wellness challenges section in the app, choose challenges that align with your health goals, and join the community. Track your progress and connect with others on similar journeys.",
           },
           {
             question: "What are the benefits of the Premium and Elite plans?",
             answer:
               "Premium and Elite plans offer advanced features like unlimited telemedicine consultations, priority support, advanced health analytics, personalized meal plans, and access to specialist consultations.",
           },
           {
             question: "How do I get personalized health recommendations?",
             answer:
               "Our AI-powered system analyzes your health data, preferences, and goals to provide personalized recommendations. Complete your health profile and regularly update your metrics for the most accurate suggestions.",
           },
         ].map((faq, index) => (
           <details key={index} className="group border border-gray-200 rounded-lg">
             <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
               <span className="font-semibold text-gray-900">{faq.question}</span>
               <div className="ml-4 flex-shrink-0">
                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-green-500 group-open:text-white transition-colors">
                   <span className="text-sm font-bold group-open:rotate-45 transition-transform">+</span>
                 </div>
               </div>
             </summary>
             <div className="px-6 pb-6">
               <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
             </div>
           </details>
         ))}
       </div>
     </div>
   </div>
 </section>
 </>
  )
}

export default FAQ
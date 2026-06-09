// import Header from "./component/Header";
// import Button from "./component/ui/Button";
// import { Collapse } from "./component/ui/Collapse";
// import SpeakerCard from "./component/ui/SpeakerCards";
// import { Card } from "./component/ui/Card";


// const speakers = [
//     {
//       name: "Dery Agung Triyadi",
//       role: "Aws Indonesia",
//       imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
//     },
//     {
//       name: "Sowam Habibi",
//       role: "Google Indonesia",
//       imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
//     },
//   ];

//   const collapseItems = [
//     {
//       title: "Apa itu Invofest?",
//       description: `Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".`,
//     },
//     {
//       title: "Kapan Invofest?",
//       description: "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
//     },
//   ];

//   const cardItems = [
//     {
//       title: "Poster Design Competition",
//       image: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
//       description: `Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.`,
//     },
//     {
//       title: "UI/UX Design Competition",
//       image: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
//       description: `Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.`,
//     },
//     {
//       title: "Web Design Competition",
//       image: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
//       description: `Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.`,
//     },
//   ];

//   return (
//     <>
//       <Header />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* HERO */}
//         <section id="hero" className="flex items-center justify-between py-16">
//           <div className="w-1/2">
//             <img
//               src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
//               alt="INVOVEST"
//               className="w-72 mb-4"
//             />
//             <p className="text-gray-600 mb-6">
//               Invofest (Informatics Vocational Festival) adalah festival tahunan
//               yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
//               Indonesia dalam menghadapi era digital. Dengan mengusung tema
//               "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".
//             </p>
//             <div className="flex gap-4">
//               <Button label="INFO SELENGKAPNYA" />
//               <Button label="HUBUNGI PANITIA" variant="outline" />
//             </div>
//           </div>
//           <div className="w-1/2 flex justify-center">
//             <img
//               src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
//               alt="robot"
//               className="w-80 mx-auto object-contain"
//             />
//           </div>
//         </section>

//         {/* TENTANG */}
//         <section id="tentang" className="bg-pink-100 rounded-[40px] p-10 mb-20">
//           <h2 className="text-2xl font-bold text-red-900 mb-4">Tentang INVOVEST</h2>
//           <p className="text-gray-700 mb-8 max-w-2xl">
//             Invofest adalah festival tahunan yang bertujuan untuk menginspirasi
//             generasi muda dalam dunia teknologi dan inovasi.
//           </p>
//           <div className="grid md:grid-cols-4 gap-4">
//             {[
//               { label: "IT Seminar", desc: `Seminar nasional membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi.` },
//               { label: "IT Talkshow", desc: `Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan.` },
//               { label: "IT Competition", desc: `Kompetisi "From Creation to Innovation" mengajak generasi muda mengembangkan inovasi dan kreativitas untuk masa depan yang berkelanjutan.` },
//               { label: "IT Workshop", desc: `Workshop 'AI for a Sustainable Future' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.` },
//             ].map((item) => (
//               <div className="bg-white rounded-xl p-4 shadow border-t-4 border-red-900">
//                 <h3 className="font-bold text-red-900 mb-2">{item.label}</h3>
//                 <p className="text-sm text-gray-500">{item.desc}</p>
//                 <button className="mt-3 text-sm font-semibold text-red-900">
//                   Info Selengkapnya
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* KOMPETISI */}
//         <section id="kompetisi" className="mb-20">
//           <h2 className="text-center text-2xl font-bold text-red-900 mb-10">DAFTAR KOMPETISI</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {cardItems.map((item, index) => (
//               <Card key={index}>
//                 <div className="overflow-hidden rounded-xl">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-60 object-cover hover:scale-105 transition duration-300"
//                   />
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="text-md font-bold text-red-900">{item.title}</h3>
//                   <p className="text-sm text-gray-500 mt-2 mb-4">{item.description}</p>
//                   <Button label="INFO SELENGKAPNYA" className="w-full" />
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* SPEAKER */}
//         <section id="speaker" className="text-center mb-20">
//           <h2 className="text-2xl font-bold text-red-900 mb-10">Temui Pembicara Khusus Kami</h2>
//           <div className="flex justify-center gap-10">
//             {speakers.map((speaker, index) => (
//               <SpeakerCard key={index} {...speaker} />
//             ))}
//           </div>
//         </section>

//         {/* FAQ */}
//         <section id="faq" className="mb-20">
//           {collapseItems.map((item, index) => (
//             <Collapse
//               key={index}
//               title={item.title}
//               description={item.description}
//             />
//           ))}
//         </section>

//       </div>
//     </>
//   );
// }
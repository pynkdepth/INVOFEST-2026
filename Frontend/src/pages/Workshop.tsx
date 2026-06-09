export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazry",
      field: "Mobile Development",
      role: "Developer, Founder Rumah Coding Indonesia",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      field: "Artificial Intelligence",
      role: "Software Engineer, PT. Mayar Kernel Supernova",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      field: "Cyber Security",
      role: "Security Analyst, Founder | Contributor TegalSec",
      img: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const workshops = [
    {
      icon: "</>",
      title: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
    {
      icon: "📱",
      title: "Artificial Intelegence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
    },
    {
      icon: "↑",
      title: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      center: true,
    },
  ];

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description:
        "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description:
        "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description:
        "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero ── */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20 max-w-6xl mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-[#7B1D3F] mb-3">IT Workshop</h1>
          <p className="text-xl text-gray-700 italic mb-5">
            "AI for a Sustainable Future: The Role of Z Generation in the Digital Era"
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk
            menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan
            alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata
            dan terukur di era digital.
          </p>
          <button className="bg-[#7B1D3F] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#5a1530] transition-colors duration-200">
            Daftar Sekarang
          </button>
        </div>
        <div className="mt-10 md:mt-0 flex-shrink-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="INVOFEST Mascot"
            className="w-80 h-80 object-contain drop-shadow-xl"
          />
        </div>
      </section>

      {/* ── Tentang IT Workshop (pink wave bg) ── */}
      <section className="relative bg-[#fce8ef] py-20 px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-[#7B1D3F] mb-6">Tentang IT Workshop</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era"
            ini didesain khusus untuk Generasi Z, para digital natives yang berada di
            persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta
            akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar
            teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi
            isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik
            langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen
            perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang
            lebih baik.
          </p>
        </div>
      </section>

      {/* ── Speakers ── */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Temui Pembicara Khusus Kami</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="border border-gray-200 rounded-xl pt-16 pb-6 px-6 relative w-full md:w-56 shadow-sm"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[#7B1D3F] overflow-hidden bg-pink-100">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(s.name) +
                      "&background=7B1D3F&color=fff&size=96";
                  }}
                />
              </div>
              <p className="font-bold text-gray-800 text-base">{s.name}</p>
              <p className="text-[#7B1D3F] text-sm font-medium mt-1">{s.field}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{s.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pelaksanaan IT Workshop (pink wave bg) ── */}
      <section className="relative bg-[#fce8ef] py-20 px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-[#7B1D3F] mb-10">Pelaksanaan IT Workshop</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {workshops.slice(0, 2).map((w) => (
                <div
                  key={w.title}
                  className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm flex-1"
                >
                  <div className="bg-[#7B1D3F] text-white rounded-lg w-14 h-14 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {w.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 mb-1">{w.title}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <span>📅</span> {w.date}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <span>🕐</span> {w.time}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <span>📍</span> {w.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm w-full md:w-1/2">
                <div className="bg-[#7B1D3F] text-white rounded-lg w-14 h-14 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {workshops[2].icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800 mb-1">{workshops[2].title}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>📅</span> {workshops[2].date}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>🕐</span> {workshops[2].time}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>📍</span> {workshops[2].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <p className="text-gray-400 text-sm mb-1 tracking-widest uppercase">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Punya Pertanyaan? Lihat</h2>
        <h2 className="text-3xl font-bold text-[#7B1D3F] mb-3">Disini</h2>
        <p className="text-gray-500 mb-10 text-sm">
          Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat
          <br />
          daftar pertanyaan di bawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="border-2 border-[#7B1D3F] rounded-lg px-5 py-4 text-left group cursor-pointer"
            >
              <summary className="flex items-center gap-3 text-gray-700 font-medium text-sm list-none">
                <span className="text-[#7B1D3F] text-lg font-bold transition-transform group-open:rotate-180">
                  ⌄
                </span>
                {item.title}
              </summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
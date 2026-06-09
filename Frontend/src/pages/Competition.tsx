export default function Competition() {
  const faqs = [
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
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-[#7B1D3F] mb-3">IT Competition</h1>
          <p className="text-xl text-gray-700 italic mb-5">"From Creation to Innovation"</p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <strong>"From Creation to Innovation"</strong>, Tema ini bertujuan mengajak
            generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk
            kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan
            yang berkelanjutan.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7B1D3F] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#5a1530] transition-colors duration-200">
              INFO SELENGKAPNYA
            </button>
            <button
              className="border-2 border-[#7B1D3F] text-[#7B1D3F] text-sm font-semibold px-6 py-3 rounded transition-all duration-200"
              style={{ transition: "background-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.backgroundColor = "#7B1D3F";
                btn.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.backgroundColor = "transparent";
                btn.style.color = "#7B1D3F";
              }}
            >
              HUBUNGI PANITIA
            </button>
          </div>
        </div>

        {/* Right Mascot */}
        <div className="mt-10 md:mt-0 flex-shrink-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="INVOFEST Mascot"
            className="w-80 h-80 object-contain drop-shadow-xl"
          />
        </div>
      </section>

      {/* Competition Description Section */}
      <section className="bg-[#fce8ef] py-16 px-8 text-center">
        <h2 className="text-4xl font-bold text-[#7B1D3F] mb-6 tracking-wide">
          DESKRIPSI KOMPETISI
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          Kompetisi atau perlombaan yang ada dalam kegiatan{" "}
          <strong>INVOFEST (Infomatics Vocational Festival) 2025</strong> adalah
          diantaranya National Poster Design Competition, UI UX Design Competition, dan
          juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini mengusung tema{" "}
          <strong>"From Creation to Innovation"</strong>Tema ini bertujuan mengajak
          generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk
          kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan
          yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan
          berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan
          mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung
          jawab sosial.
        </p>
      </section>

      {/* Competition List Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#7B1D3F] mb-2 tracking-wide">
          DAFTAR KOMPETISI
        </h2>
        <p className="text-gray-500 mb-10">
          Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster Design */}
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-52 overflow-hidden">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"
                alt="Poster Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Poster Design Competition
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Poster Design Competition ini adalah kompetisi untuk menciptakan suatu
                karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna
                menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada
                sekarang ini.
              </p>
              <button className="bg-[#7B1D3F] text-white text-xs font-bold px-5 py-2 rounded hover:bg-[#5a1530] transition-colors duration-200">
                INFO SELENGKAPNYA
              </button>
            </div>
          </div>

          {/* UI UX Design */}
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-52 overflow-hidden">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"
                alt="UI UX Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                UI/UX Design Competition
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan
                merancang inovasi sebuah produk digital yang dapat berupa website maupun
                mobile apps serta dapat membuat nyaman calon pengguna.
              </p>
              <button className="bg-[#7B1D3F] text-white text-xs font-bold px-5 py-2 rounded hover:bg-[#5a1530] transition-colors duration-200">
                INFO SELENGKAPNYA
              </button>
            </div>
          </div>

          {/* Web Design */}
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-52 overflow-hidden">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"
                alt="Web Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Web Design Competition
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Web Design Competition ini adalah kompetisi untuk menciptakan suatu
                perangkat lunak berbasis website yang menggunakan desain menarik, unik,
                dan responsive pada semua device serta sesuai dengan tema kompetisi.
              </p>
              <button className="bg-[#7B1D3F] text-white text-xs font-bold px-5 py-2 rounded hover:bg-[#5a1530] transition-colors duration-200">
                INFO SELENGKAPNYA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          Punya Pertanyaan? Lihat
        </h2>
        <h2 className="text-3xl font-bold text-[#7B1D3F] mb-3">Disini</h2>
        <p className="text-gray-500 mb-10 text-sm">
          Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat
          <br />
          daftar pertanyaan di bawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="border-2 border-[#7B1D3F] rounded-lg px-5 py-4 text-left group cursor-pointer"
            >
              <summary className="flex items-center gap-3 text-gray-700 font-medium text-sm list-none">
                <span className="text-[#7B1D3F] text-lg font-bold transition-transform group-open:rotate-180">
                  ⌄
                </span>
                {faq.title}
              </summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                {faq.description}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
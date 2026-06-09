// ==========================================
// CREATED BY FATIH MUBAROK
// CLEAN MODERN DASHBOARD UI
// ==========================================

import { useEffect, useState } from "react";
import axios from "axios";

type Stat = {
  title: string;
  value: number;
  icon: string;
};

type EventItem = {
  id: number;
  name: string;
  category: { nama: string };
  dateEvent: string;
};

type SpeakerItem = {
  id: number;
  name: string;
  role: string;
  photo: string;
};

type UserItem = {
  id: number;
  username: string;
  foto: string;
};

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            {stat.title}
          </p>
          <h2 className="text-4xl font-black text-[#1a0a10] mt-3">
            {stat.value}
          </h2>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center text-2xl shadow-sm">
          {stat.icon}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-[#1a0a10]">
        {title}
      </h2>
      <p className="text-sm text-gray-400 mt-1">
        {subtitle}
      </p>
    </div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stat[]>([
    { title: "Kategori", value: 0, icon: "🗂️" },
    { title: "Event", value: 0, icon: "📅" },
    { title: "Pembicara", value: 0, icon: "🎤" },
    { title: "User", value: 0, icon: "👤" },
  ]);

  const [latestEvents, setLatestEvents] = useState<EventItem[]>([]);
  const [latestSpeakers, setLatestSpeakers] = useState<SpeakerItem[]>([]);
  const [latestUsers, setLatestUsers] = useState<UserItem[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

        // Mengambil data dari seluruh endpoint secara paralel termasuk users
        const [catRes, eventRes, speakerRes, userRes] = await Promise.all([
          axios.get(`${baseUrl}/api/categories`),
          axios.get(`${baseUrl}/api/events`),
          axios.get(`${baseUrl}/api/pembicara`),
          axios.get(`${baseUrl}/api/users`),
        ]);

        const categories = catRes.data.data || [];
        const events = eventRes.data.data || [];
        const speakers = speakerRes.data.data || [];
        const users = userRes.data.data || [];

        setStats([
          { title: "Kategori", value: categories.length, icon: "🗂️" },
          { title: "Event", value: events.length, icon: "📅" },
          { title: "Pembicara", value: speakers.length, icon: "🎤" },
          { title: "User", value: users.length, icon: "👤" },
        ]);

        setLatestEvents(events.slice(0, 4));
        setLatestSpeakers(speakers.slice(0, 4));
        setLatestUsers(users.slice(0, 4));

      } catch (error: any) {
        console.error(error);
        alert("Eror: " + (error.response?.data?.message || error.message));
      }
    };

    fetchAll();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-7 py-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm mb-8">
        <div className="absolute top-0 right-0 w-52 h-52 bg-rose-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B1D3F]">
            <span className="w-2 h-2 rounded-full bg-[#7B1D3F]" />
            Dashboard
          </span>
          <h1 className="text-4xl font-black text-[#1a0a10] mt-3 tracking-tight">
            Invofest Dashboard
          </h1>
          <p className="text-sm text-gray-400 mt-3 max-w-xl leading-relaxed">
            Pantau statistik event, kategori, pembicara, dan pengguna terbaru
            dengan tampilan dashboard modern dan profesional.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>

      {/* CONTENT ROW 1: EVENT & SPEAKER */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* EVENT */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <SectionHeader
            title="Event Terbaru"
            subtitle="Daftar event terbaru Invofest"
          />
          <div className="space-y-4">
            {latestEvents.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a0a10]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(item.dateEvent).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-rose-50 border border-rose-100 text-[#7B1D3F] px-3 py-1 rounded-full">
                  {item.category?.nama || "Umum"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SPEAKER */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <SectionHeader
            title="Pembicara Terbaru"
            subtitle="Pembicara terbaru yang bergabung"
          />
          <div className="space-y-4">
            {latestSpeakers.map((item) => {
              const initials = item.name
                ? item.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
                : "SP";

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-12 h-12 rounded-2xl object-cover shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center font-bold shadow-sm">
                        {initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-[#1a0a10]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTENT ROW 2: USER LATEST */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* USER */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <SectionHeader
            title="User Terbaru"
            subtitle="Pengguna administrator sistem terdaftar"
          />
          <div className="space-y-4">
            {latestUsers.map((item, index) => {
              const userInitials = item.username
                ? item.username.slice(0, 2).toUpperCase()
                : "US";

              const colorVariants = [
                "bg-indigo-600",
                "bg-emerald-600",
                "bg-amber-600",
                "bg-sky-600",
              ];
              const randomColor = colorVariants[index % colorVariants.length];

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt={item.username}
                        className="w-12 h-12 rounded-2xl object-cover shadow-sm"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-2xl ${randomColor} text-white flex items-center justify-center font-bold shadow-sm`}>
                        {userInitials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-[#1a0a10]">
                        {item.username}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Sistem Administrator
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    ID: {String(item.id).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Competition";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
// src/App.tsx atau router file

import CategoryEdit from "./pages/Kategori/CategoryEdit";
import PembicaraEdit from "./pages/pembicara/PembicaraEdit";
import EventEdit from "./pages/event/EventEdit";


// dashboard pages
import CategoryIndex from "./pages/Kategori/CategoryIndex";
import CategoryCreate from "./pages/Kategori/CategoryCreate";

//event
import EventIndex from "./pages/event/EventIndex";
import EventCreate from "./pages/event/EventCreate";

//pembicara
import PembicaraCreate from "./pages/pembicara/PembicaraCreate"; 
import PembicaraIndex from "./pages/pembicara/PembicaraIndex";

// layout
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Biodata from "./pages/dashboard/Biodata";


// route
import ProtectedRoute from "./route/ProtectedRoute";
import UserCreate from "./pages/user/UsersCreate";
import UserEdit from "./pages/user/UsersEdit";
import UserIndex from "./pages/user/UsersIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= MAIN ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* ================= AUTH ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ================= PROTECTED ================= */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Category */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />

            {/* Event */}
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />

            {/* Pembicara */}
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />

            {/* Untuk Edit */}
            <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraEdit />} />
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />} />

            <Route path="/dashboard/biodata" element={<Biodata />} />
            <Route path="/dashboard/biodata" element={<Biodata />} />

               {/* Untuk Users */}
            <Route path="/dashboard/user" element={<UserIndex />} />
            <Route path="/dashboard/user/create" element={<UserCreate />} />
            <Route path="/dashboard/user/edit/:id" element={<UserEdit />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
//by fatih
export default App;
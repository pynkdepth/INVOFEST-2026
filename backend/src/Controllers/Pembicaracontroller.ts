// src/controllers/pembicaraController.ts

import type { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. GET ALL
export const getAllPembicara = async (req: Request, res: Response) => {
  try {
    const data = await prisma.pembicara.findMany({
      orderBy: { id: "asc" },
    });

    return res.status(200).json({
      message: "Berhasil mengambil data pembicara.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data pembicara.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 2. GET BY ID
export const getPembicaraById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const data = await prisma.pembicara.findUnique({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({ message: "Pembicara tidak ditemukan." });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data pembicara.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data pembicara.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 3. CREATE
export const createPembicara = async (req: Request, res: Response) => {
  try {
    const { name, role, email, photo } = req.body as {
      name?: string;
      role?: string;
      email?: string;
      photo?: string;
    };

    if (!name || !role || !email || !photo) {
      return res.status(400).json({ message: "Semua field wajib diisi." });
    }

    const newData = await prisma.pembicara.create({
      data: { name, role, email, photo },
    });

    return res.status(201).json({
      message: "Berhasil membuat pembicara.",
      data: newData,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email sudah digunakan." });
    }
    return res.status(500).json({
      message: "Gagal membuat pembicara.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 4. UPDATE
export const updatePembicara = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const { name, role, email, photo } = req.body as {
      name?: string;
      role?: string;
      email?: string;
      photo?: string;
    };

    const updated = await prisma.pembicara.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(role !== undefined && { role }),
        ...(email !== undefined && { email }),
        ...(photo !== undefined && { photo }),
      },
    });

    return res.status(200).json({
      message: "Berhasil memperbarui pembicara.",
      data: updated,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Pembicara tidak ditemukan." });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email sudah digunakan." });
    }
    return res.status(500).json({
      message: "Gagal memperbarui pembicara.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 5. DELETE
export const deletePembicara = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const deleted = await prisma.pembicara.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Pembicara berhasil dihapus.",
      data: deleted,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Pembicara tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal menghapus pembicara.",
      error: error instanceof Error ? error.message : error,
    });
  }
  //by fatih
};
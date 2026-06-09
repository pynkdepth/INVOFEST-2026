// src/controllers/eventController.ts

import type { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. GET ALL
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const { name, categoryId, location, dateEvent, description } = req.query as {
      name?: string;
      categoryId?: string;
      location?: string;
      dateEvent?: string;
      description?: string;
    };

    const allEvents = await prisma.event.findMany({
      where: {
        ...(name && { name: { contains: name, mode: "insensitive" } }),
        ...(categoryId && { categoryId: Number(categoryId) }),
        ...(location && { location: { contains: location, mode: "insensitive" } }),
        ...(dateEvent && { dateEvent: new Date(dateEvent) }),
        ...(description && { description: { contains: description, mode: "insensitive" } }),
      },
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
        pembicara: true, // FIX: tambah include pembicara
      },
    });

    return res.status(200).json({
      message: "Berhasil mengambil data event.",
      data: allEvents,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data event.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 2. GET BY ID
export const getEventById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        category: true,
        pembicara: true, // FIX: tambah include pembicara
      },
    });

    if (!event) {
      return res.status(404).json({ message: "Event tidak ditemukan." });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data event.",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data event.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 3. CREATE
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, categoryId, pembicaraId, location, dateEvent, description } = req.body as {
      name?: string;
      categoryId?: number;
      pembicaraId?: number; // FIX: tambah pembicaraId
      location?: string;
      dateEvent?: string;
      description?: string;
    };

    // FIX: tambah pembicaraId ke validasi wajib
    if (!name || !categoryId || !pembicaraId || !location || !dateEvent || !description) {
      return res.status(400).json({ message: "Semua field wajib diisi." });
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        categoryId,
        pembicaraId, // FIX: simpan pembicaraId ke database
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
      include: {
        category: true,
        pembicara: true, // FIX: tambah include pembicara
      },
    });

    return res.status(201).json({
      message: "Berhasil membuat event.",
      data: newEvent,
    });
  } catch (error: any) {
    if (error.code === "P2003") {
      return res.status(404).json({ message: "Category atau Pembicara tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal membuat event.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 4. UPDATE
export const updateEvent = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const { name, categoryId, pembicaraId, location, dateEvent, description } = req.body as {
      name?: string;
      categoryId?: number;
      pembicaraId?: number; // FIX: tambah pembicaraId
      location?: string;
      dateEvent?: string;
      description?: string;
    };

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(categoryId !== undefined && { categoryId }),
        ...(pembicaraId !== undefined && { pembicaraId }), // FIX: update pembicaraId
        ...(location !== undefined && { location }),
        ...(dateEvent !== undefined && { dateEvent: new Date(dateEvent) }),
        ...(description !== undefined && { description }),
      },
      include: {
        category: true,
        pembicara: true, // FIX: tambah include pembicara
      },
    });

    return res.status(200).json({
      message: "Berhasil memperbarui event.",
      data: updatedEvent,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Event tidak ditemukan." });
    }
    if (error.code === "P2003") {
      return res.status(404).json({ message: "Category atau Pembicara tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal memperbarui event.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 5. DELETE
export const deleteEvent = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const deleted = await prisma.event.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Event berhasil dihapus.",
      data: deleted,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Event tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal menghapus event.",
      error: error instanceof Error ? error.message : error,
    });
  }
  //by fatih
};